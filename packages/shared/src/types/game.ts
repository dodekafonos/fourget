// packages/shared/src/types/game.ts
export type PlayerColor = 'YELLOW' | 'BLUE'
export type GameStatus = 'waiting' | 'active' | 'finished' | 'paused'

export interface Card {
  id: string
  value: number
  isFlipped: boolean
  isMatched: boolean
  color?: PlayerColor
  x: number
  y: number
}

export interface Player {
  id: string
  name: string
  color: PlayerColor
  score: number
  pairsFound: number
  isConnected: boolean
}

export interface GameState {
  id: string
  board: Card[][]
  players: Player[]
  currentPlayer: PlayerColor
  status: GameStatus
  winner?: PlayerColor
  moves: number
  maxMoves: number
  createdAt: string
}

export interface GameMove {
  type: 'FLIP_CARDS' | 'COLOR_CARD' | 'END_TURN'
  playerId: string
  cards: Card[]
  selectedColorCardId?: string
}
