import { create } from 'zustand'
import { GAME_CONSTANTS, DEFAULT_SETTINGS, type GameSettings } from '../lib/constants'

// Tipos atualizados
interface Card {
  id: string
  emoji: string 
  isFlipped: boolean
  isMatched: boolean
  color?: string
  x: number
  y: number
}

interface GameState {
  board: Card[][]
  currentPlayer: 'YELLOW' | 'BLUE'
  players: {
    yellow: { score: number; pairs: number }
    blue: { score: number; pairs: number }
  }
  flippedCards: Card[]  // Cartas viradas no momento
  gameStatus: 'idle' | 'playing' | 'paused' | 'finished'
  winner?: 'YELLOW' | 'BLUE'
}

interface GameStore extends GameState {
  settings: GameSettings
  
  // Actions
  initializeGame: () => void
  flipCard: (card: Card) => void
  resetFlippedCards: () => void
  markPairAsMatched: (card1: Card, card2: Card, playerColor: 'YELLOW' | 'BLUE') => void
  changeTurn: () => void
  updateSettings: (newSettings: Partial<GameSettings>) => void
}

export const useGameStore = create<GameStore>((set, get) => ({
  // Estado inicial
  board: [],
  currentPlayer: 'YELLOW',
  players: {
    yellow: { score: 0, pairs: 0 },
    blue: { score: 0, pairs: 0 },
  },
  flippedCards: [],
  gameStatus: 'idle',
  settings: DEFAULT_SETTINGS,
  
  // Inicializar jogo com emojis
  initializeGame: () => {
    const { settings } = get()
    const boardSize = settings.boardSize
    const totalPairs = (boardSize * boardSize) / 2
    
    // Pegar emojis aleatórios
    const availableEmojis = [...GAME_CONSTANTS.EMOJI_PAIRS]
    const selectedEmojis = availableEmojis.slice(0, totalPairs)
    
    // Duplicar para formar pares e embaralhar
    const emojiPairs = [...selectedEmojis, ...selectedEmojis]
    const shuffledEmojis = shuffleArray(emojiPairs)
    
    // Criar board
    const board: Card[][] = []
    let emojiIndex = 0
    
    for (let y = 0; y < boardSize; y++) {
      const row: Card[] = []
      for (let x = 0; x < boardSize; x++) {
        row.push({
          id: `card-${x}-${y}-${Date.now()}`,
          emoji: shuffledEmojis[emojiIndex],
          isFlipped: false,
          isMatched: false,
          x,
          y,
        })
        emojiIndex++
      }
      board.push(row)
    }
    
    set({
      board,
      currentPlayer: 'YELLOW',
      players: {
        yellow: { score: 0, pairs: 0 },
        blue: { score: 0, pairs: 0 },
      },
      flippedCards: [],
      gameStatus: 'playing',
      winner: undefined,
    })
  },
  
  // Virar uma carta
  flipCard: (card) => {
    const { board, flippedCards, gameStatus, settings } = get()
    
    // Validar se pode virar
    if (gameStatus !== 'playing') return
    if (card.isFlipped || card.isMatched) return
    if (flippedCards.length >= 2) return
    
    // Atualizar board - marcar carta como virada
    const newBoard = board.map(row => 
      row.map(c => 
        c.id === card.id ? { ...c, isFlipped: true } : c
      )
    )
    
    const newFlippedCards = [...flippedCards, card]
    
    set({
      board: newBoard,
      flippedCards: newFlippedCards,
    })
    
    // Se virou duas cartas, verificar se são par
    if (newFlippedCards.length === 2) {
      setTimeout(() => {
        const { flippedCards: currentFlipped } = get()
        if (currentFlipped.length === 2) {
          const [card1, card2] = currentFlipped
          
          if (card1.emoji === card2.emoji) {
            // PAR ENCONTRADO!
            get().markPairAsMatched(card1, card2, get().currentPlayer)
          } else {
            // Não é par - virar de volta após timeout
            setTimeout(() => {
              get().resetFlippedCards()
              get().changeTurn()
            }, settings.flipTimeoutMs)
          }
        }
      }, 500) // Pequeno delay para jogador ver as cartas
    }
  },
  
  // Resetar cartas viradas (quando não formam par)
  resetFlippedCards: () => {
    const { board, flippedCards } = get()
    
    const newBoard = board.map(row =>
      row.map(card =>
        flippedCards.some(fc => fc.id === card.id) 
          ? { ...card, isFlipped: false }
          : card
      )
    )
    
    set({
      board: newBoard,
      flippedCards: [],
    })
  },
  
  // Marcar par como encontrado
  markPairAsMatched: (card1, card2, playerColor) => {
    const { board, players, currentPlayer } = get()
    
    // Atualizar board - marcar como matched e colorir
    const newBoard = board.map(row =>
      row.map(card =>
        card.id === card1.id || card.id === card2.id
          ? { 
              ...card, 
              isMatched: true, 
              isFlipped: true,
              color: playerColor,
            }
          : card
      )
    )
    
    // Atualizar pontuação do jogador
    const playerKey = playerColor.toLowerCase() as 'yellow' | 'blue'
    const updatedPlayers = {
      ...players,
      [playerKey]: {
        score: players[playerKey].score + 1,
        pairs: players[playerKey].pairs + 1,
      }
    }
    
    set({
      board: newBoard,
      flippedCards: [],
      players: updatedPlayers,
    })
    
    // Verificar vitória (implementaremos depois)
    // Por enquanto, mantém o turno do jogador que achou o par
  },
  
  // Mudar turno
  changeTurn: () => {
    set(state => ({
      currentPlayer: state.currentPlayer === 'YELLOW' ? 'BLUE' : 'YELLOW'
    }))
  },
  
  // Atualizar configurações
  updateSettings: (newSettings) => {
    set(state => ({
      settings: { ...state.settings, ...newSettings }
    }))
  },
}))

// Função utilitária para embaralhar array
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}