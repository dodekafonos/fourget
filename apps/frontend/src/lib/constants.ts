// Constantes do jogo
export const GAME_CONSTANTS = {
  BOARD_SIZE: 6,
  CARD_SIZE: 80,
  CARD_MARGIN: 10,
  FLIP_TIMEOUT_MS: 2000, // 2 segundos
  EMOJI_PAIRS: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔', '🐧', '🐦'],
  // figurinhas ao virar as cartas ^
} as const

// Tipos relacionados
export type BoardSize = 6 | 8 | 10
export type GameSettings = {
  boardSize: BoardSize
  flipTimeoutMs: number
  difficulty: 'easy' | 'medium' | 'hard'
}

// Configuração padrão
export const DEFAULT_SETTINGS: GameSettings = {
  boardSize: 6,
  flipTimeoutMs: 2000,
  difficulty: 'medium',
}