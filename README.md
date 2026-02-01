
# FourGet - Um jogo híbrido de memória e estratégia

<div align="center">

![GitHub](https://img.shields.io/badge/license-GPLv3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6)
![React](https://img.shields.io/badge/React-18-61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-20-339933)


[✨ Demonstração](#) | [📋 Regras](#regras) | [🚀 Começando](#começando) | [🎯 Roadmap](#roadmap)

</div>

## 🎯 Sobre o Jogo

FourGet é um jogo inovador que mistura mecânicas de **Jogo da Memória** com **Quatro em Linha (Connect Four)**. Dois jogadores competem para encontrar pares de cartas e estrategicamente posicioná-las para formar sequências de 4.

### 🎮 Regras do Jogo

1. **Tabuleiro 6x6** com 36 cartas viradas para baixo (18 pares de emojis)
2. **Por turnos**, cada jogador vira duas cartas
3. **Se as cartas forem diferentes**: viram novamente após 2 segundos
4. **Se forem iguais**: o jogador escolhe uma para colorir com sua cor (Amarelo/Azul)
5. **Objetivo principal**: Formar 4 cartas da sua cor em linha (horizontal, vertical ou diagonal)
6. **Objetivo secundário**: Se todas cartas forem viradas, vence quem tiver mais pares

### ✨ Features Implementadas (MVP Local)

✅ **Core do jogo funcionando**  
✅ **Sistema de cartas com emojis** 🐶🐱🐭  
✅ **Lógica completa de flip com timer**  
✅ **Detecção automática de pares**  
✅ **Pontuação por pares encontrados**  
✅ **Alternância inteligente de turnos**  
✅ **UI responsiva com Konva Canvas**  
✅ **Store centralizada com Zustand**  

## 🚀 Começando

### 📋 Pré-requisitos

- Node.js 18+ e npm/yarn/pnpm
- Git

### ⚡ Instalação Rápida

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/fourget.git
cd fourget

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### 🛠️ Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia frontend (localhost:3000) |
| `npm run build` | Build para produção |
| `npm run lint` | Executa ESLint |
| `npm test` | Executa testes (em breve) |

### 📁 Estrutura do Projeto

```
fourget/
├── apps/
│   └── frontend/          # Aplicação React + Vite
│       ├── src/
│       │   ├── components/ # Componentes React
│       │   ├── stores/     # Zustand stores
│       │   ├── lib/        # Lógica do jogo
│       │   └── types/      # Definições TypeScript
│       └── package.json
├── packages/
│   ├── shared/           # Tipos compartilhados (futuro)
│   └── ui/              # Componentes UI compartilhados
└── README.md
```

## 🎯 Roadmap de Desenvolvimento

### 🏗️ Fase 1: MVP Local (EM ANDAMENTO)
- [x] Estrutura do projeto e renderização básica
- [x] Sistema de cartas com emojis
- [x] Lógica de flip e detecção de pares
- [x] Pontuação e alternância de turnos
- [ ] **Detecção de 4 em linha** ⏳
- [ ] Sistema de fim de jogo
- [ ] IA básica para singleplayer

### 🌐 Fase 2: Multiplayer
- [ ] Backend com Socket.IO
- [ ] Sistema de salas/lobby
- [ ] Sincronização em tempo real
- [ ] Matchmaking básico

### 🎨 Fase 3: Polimento
- [ ] Design refinado com Tailwind
- [ ] Animações e feedback visual
- [ ] Sonorização
- [ ] Responsividade mobile
- [ ] Sistema de ranking

### 📱 Fase 4: Expansão
- [ ] Modos de jogo alternativos
- [ ] Power-ups e habilidades especiais
- [ ] Cross-platform (PWA)
- [ ] Tournament system

## 👥 Como Contribuir

1. Crie um fork do projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Add nova-feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request explicando o que foi feito e por quê

## 📄 Licença

Este projeto está licenciado sob a **GNU General Public License v3.0** - veja o arquivo [LICENSE](LICENSE) para detalhes.


---

<div align="center">

**Desenvolvido por Jonas Bueno 🏴🚩**

[Reportar Bug](https://github.com/dodekafonos/fourget/issues) · [Sugerir Feature](https://github.com/dodekafonos/fourget/issues)

</div>
