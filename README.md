# 🎮 FourGet - Memory Meets Strategy

<div align="center">

![GitHub](https://img.shields.io/badge/license-GPLv3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6)
![React](https://img.shields.io/badge/React-18-61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-24-339933)

**Um jogo híbrido que combina memória com estratégia espacial**

[✨ Demonstração](#) | [📋 Regras](#regras) | [🚀 Começando](#começando) | [🎯 Roadmap](#roadmap)

</div>

## 🎯 Sobre o Jogo

FourGet é um jogo que mescla mecânicas do **Jogo da Memória** com **Quatro em Linha (Connect Four)**. Dois jogadores competem para encontrar pares de cartas e estrategicamente posicioná-las para formar sequências de 4.

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

- Node.js 20+ e npm/yarn/pnpm
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