
## **Backlog**

## 📋 Backlog do FourGet - Status: MVP Local

### ✅ CONCLUÍDO
| Tarefa | Status | Observações |
|--------|---------|-------------|
| Estrutura do projeto | ✅ | Turborepo + React + TypeScript |
| Renderização do tabuleiro | ✅ | Konva Canvas 6x6 |
| Sistema de store | ✅ | Zustand com estado global |
| Cartas com emojis | ✅ | 18 pares de emojis aleatórios |
| Lógica de flip | ✅ | Timer de 2s para cartas diferentes |
| Detecção de pares | ✅ | Comparação automática de emojis |
| Sistema de pontuação | ✅ | 1 ponto por par encontrado |
| Alternância de turnos | ✅ | Mantém turno quando forma par |
| Componente de status | ✅ | Mostra turno e pontuação atual |
| Constantes centralizadas | ✅ | Fácil configuração futura |

### 🎯 PRÓXIMAS TAREFAS (FASE 1 - MVP LOCAL)

#### 🔴 CRÍTICO (Próxima Sprint)
| Tarefa | Complexidade | Estimativa | Dependências |
|--------|--------------|------------|--------------|
| **Detecção de 4 em linha** | Média | 2-3 horas | Sistema de cores |
| **Sistema de fim de jogo** | Baixa | 1-2 horas | Detecção de vitória |
| **Tela de vitória/derrota** | Baixa | 1-2 horas | Sistema de fim de jogo |
| **Reset do jogo** | Baixa | 1 hora | Estado da store |

#### 🟡 IMPORTANTE
| Tarefa | Complexidade | Estimativa | Dependências |
|--------|--------------|------------|--------------|
| IA básica (singleplayer) | Alta | 4-6 horas | Lógica do jogo completa |
| Sistema de configurações | Baixa | 2 horas | Interface de usuário |
| Validação de regras | Média | 2-3 horas | Testes unitários |
| Responsividade mobile | Média | 3-4 horas | Design CSS |

#### 🟢 NICE-TO-HAVE
| Tarefa | Complexidade | Estimativa | Dependências |
|--------|--------------|------------|--------------|
| Animações de transição | Baixa | 2 horas | Biblioteca de animação |
| Sonorização básica | Baixa | 2 horas | Hook useSound |
| Sistema de dicas | Média | 3 horas | Lógica do jogo |
| Efeitos visuais | Baixa | 2 horas | Feedback ao usuário |

### 📊 MÉTRICAS DE PROGRESSO
- **Progresso geral**: 70%
- **Core mechanics**: 100% ✅
- **Vitória/fim de jogo**: 0% ⏳
- **UI/UX**: 60%
- **Code quality**: 80%

### 🎯 OBJETIVO DA PRÓXIMA SPRINT
**Completar o MVP jogável localmente** com todas as regras implementadas:
1. Detecção de vitória por 4 em linha
2. Fim de jogo quando todas cartas são viradas
3. Sistema de reset/reinício
4. Tela de resultados

### 🔧 DEPENDÊNCIAS TÉCNICAS PENDENTES
1. **Testes unitários** para lógica do jogo
2. **E2E tests** para fluxo completo
3. **CI/CD pipeline** com GitHub Actions
4. **Deploy automático** para preview

### 📅 PRÓXIMOS MILESTONES
1. **MVP Local Completo** (ETA: 2-3 dias)
2. **Multiplayer Alpha** (ETA: 1-2 semanas)
3. **Beta Pública** (ETA: 3-4 semanas)
4. **Lançamento 1.0** (ETA: 1-2 meses)

---

## 🚨 BUGS CONHECIDOS
1. ~~Cartas não viram corretamente após não formar par~~ ✅ **FIXED**
2. ~~Pontuação não atualiza em tempo real~~ ✅ **FIXED**
3. ~~Emojis podem repetir além dos pares~~ ✅ **FIXED**

## 💡 MELHORIAS IDENTIFICADAS
1. **Performance**: Virtualização do tabuleiro para >8x8
2. **Acessibilidade**: Suporte a leitores de tela
3. **Internacionalização**: Suporte a múltiplos idiomas
4. **Temas**: Dark/light mode

---

**Última atualização**: 01/02/2026


## 📝 **Próximos Passos Imediatos**

1. **Commit as documentações:**
```bash
git add README.md
git commit -m "docs: atualiza documentação com progresso atual"
```

2. **Criar issues no GitHub** para as próximas tarefas críticas

3. **Vamos para a próxima feature:** **Detecção de 4 em linha**

**Quer que eu explique a implementação da detecção de vitória agora, ou prefere fazer o commit e organizar as issues primeiro?**