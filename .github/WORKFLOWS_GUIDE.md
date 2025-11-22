# Guia de Workflows do GitHub Actions

Este documento fornece uma visão detalhada de cada workflow neste repositório de treinamento.

## 📋 Índice de Workflows

### 1. Basic CI Workflow (`01-basic-ci.yml`)
**Objetivo**: Demonstrar um pipeline básico de CI

**Triggers**:
- Push para branches `main` ou `master`
- Pull requests para branches `main` ou `master`

**O que ele faz**:
- ✓ Faz checkout do código
- ✓ Configura Node.js versão 20
- ✓ Exibe informações do ambiente
- ✓ Executa um teste simples

**Como testar**: Faça push para as branches configuradas ou abra um PR.

---

### 2. Manual Workflow Dispatch (`02-manual-workflow.yml`)
**Objetivo**: Demonstrar execução manual com parâmetros de entrada

**Triggers**:
- Manual (workflow_dispatch)

**Inputs disponíveis**:
- `environment`: Escolha entre development, staging, production
- `log-level`: Nível de log (debug, info, warning, error)
- `custom-message`: Mensagem personalizada

**Como testar**: 
1. Vá para Actions → "02 - Manual Workflow Dispatch"
2. Clique em "Run workflow"
3. Preencha os inputs
4. Execute

---

### 3. Scheduled Workflow (`03-scheduled-workflow.yml`)
**Objetivo**: Demonstrar execução agendada

**Triggers**:
- Agendado: Todos os dias às 9:00 AM UTC
- Manual (workflow_dispatch) para testes

**O que ele faz**:
- ✓ Executa tarefas agendadas
- ✓ Exibe informações do sistema
- ✓ Mostra uso de disco e memória

**Como testar**: Execute manualmente ou aguarde o horário agendado.

---

### 4. Multiple Jobs with Dependencies (`04-multiple-jobs.yml`)
**Objetivo**: Demonstrar múltiplos jobs com dependências

**Triggers**:
- Push para `main`, `master`, ou branches `copilot/**`
- Manual (workflow_dispatch)

**Jobs e dependências**:
```
lint (primeiro job)
  ↓
test (depende de lint)
  ↓
build (depende de lint e test)
  ↓
deploy (depende de build)
```

**Recursos demonstrados**:
- ✓ Dependências entre jobs com `needs:`
- ✓ Upload de artifacts
- ✓ Download de artifacts
- ✓ Execução sequencial de jobs

**Como testar**: Faça push para uma branch configurada.

---

### 5. Matrix Strategy (`05-matrix-strategy.yml`)
**Objetivo**: Demonstrar testes em múltiplas plataformas e versões

**Triggers**:
- Push para `main`, `master`, ou branches `copilot/**`
- Manual (workflow_dispatch)

**Configurações de Matrix**:
- **Sistemas Operacionais**: Ubuntu, Windows, macOS
- **Versões Node.js**: 18, 20, 22
- **Total de combinações**: 9 jobs (3 OS × 3 versões)

**Recursos demonstrados**:
- ✓ Matrix strategy
- ✓ fail-fast: false (continua mesmo com falhas)
- ✓ Configurações customizadas com `include`

**Como testar**: Execute manualmente e observe os 9+ jobs executando em paralelo.

---

### 6. Environments and Secrets (`06-environment-secrets.yml`)
**Objetivo**: Demonstrar uso de ambientes

**Triggers**:
- Push para `main` ou `master`
- Manual (workflow_dispatch)

**Ambientes**:
1. **Development** → https://dev.example.com
2. **Staging** → https://staging.example.com (após dev)
3. **Production** → https://example.com (após staging)

**Recursos demonstrados**:
- ✓ Ambientes com URLs
- ✓ Deployments sequenciais
- ✓ Proteção de ambientes (produção pode requerer aprovação)

**Como testar**: Execute manualmente e observe a progressão pelos ambientes.

---

## 🎯 Conceitos Importantes

### Triggers (on:)
- `push`: Executa em push para branches específicas
- `pull_request`: Executa em PRs
- `workflow_dispatch`: Permite execução manual
- `schedule`: Executa em horários específicos (cron)

### Jobs
- Jobs executam em paralelo por padrão
- Use `needs:` para criar dependências
- Cada job roda em um runner limpo

### Steps
- Executam sequencialmente dentro de um job
- `uses:` para actions do marketplace
- `run:` para comandos shell

### Artifacts
- Compartilham arquivos entre jobs
- Retenção configurável (padrão: 90 dias)
- Download via interface ou API

### Matrix Strategy
- Multiplica jobs com diferentes configurações
- `fail-fast`: controla comportamento em falhas
- `include`/`exclude`: customiza matriz

### Environments
- Organiza deployments
- Permite proteções e aprovações
- Pode incluir secrets específicos

---

## 📚 Recursos Adicionais

- [Documentação Oficial](https://docs.github.com/actions)
- [Marketplace de Actions](https://github.com/marketplace?type=actions)
- [Sintaxe de Workflows](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)
- [Expressões do GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/expressions)

---

## 💡 Dicas para Aprendizado

1. **Comece simples**: Execute primeiro o workflow básico (01)
2. **Experimente manualmente**: Use o workflow 02 para testar inputs
3. **Observe os logs**: Sempre revise os logs para entender o que aconteceu
4. **Modifique e teste**: Faça pequenas mudanças e veja o resultado
5. **Use a documentação**: Consulte a docs quando tiver dúvidas

---

**Nota**: Este é um repositório de treinamento. Os workflows são intencionalmente simplificados para fins educacionais.
