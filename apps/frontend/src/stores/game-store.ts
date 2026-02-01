import { create } from 'zustand'

// TODO: Tipos temporários - depois moveremos para @shared
type PlayerColor = 'YELLOW' | 'BLUE'

interface Card {
  id: string
  value: number
  isFlipped: boolean
  isMatched: boolean
  color?: PlayerColor
  x: number
  y: number
}

interface GameState {
  board: Card[][]
  currentPlayer: PlayerColor
}

interface GameStore {
  state: GameState | null
  selectedCards: Card[]
  
  // Actions
  initializeGame: () => void
  selectCard: (card: Card) => void
  resetSelection: () => void
}

// Store SIMPLIFICADA - apenas para fazer funcionar
export const useGameStore = create<GameStore>((set) => ({
  state: null,
  selectedCards: [],
  
  initializeGame: () => {
    // Criar board 6x6 temporário
    const board: Card[][] = []
    for (let y = 0; y < 6; y++) {
      const row: Card[] = []
      for (let x = 0; x < 6; x++) {
        row.push({
          id: `${x}-${y}`,
          value: Math.floor(Math.random() * 10),
          isFlipped: false,
          isMatched: false,
          x,
          y
        })
      }
      board.push(row)
    }
    
    set({
      state: {
        board,
        currentPlayer: 'YELLOW'
      }
    })
  },
  
  selectCard: (card) => {
    set((state) => ({
      selectedCards: [...state.selectedCards, card]
    }))
  },
  
  resetSelection: () => set({ selectedCards: [] })
}))