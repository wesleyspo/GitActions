# GitActions - GitHub Actions Training Repository

Este repositório contém exemplos práticos de workflows do GitHub Actions para fins de treinamento e aprendizado.

## 📚 Conteúdo

Este repositório demonstra diversos conceitos e funcionalidades do GitHub Actions através de workflows de exemplo:

### Workflows Disponíveis

1. **01-basic-ci.yml** - CI Básico
   - Demonstra um pipeline básico de CI
   - Trigger: push e pull requests para branches main/master
   - Conceitos: checkout, setup de ambientes, steps básicos

2. **02-manual-workflow.yml** - Workflow Manual
   - Demonstra workflow com dispatch manual
   - Conceitos: workflow_dispatch, inputs, tipos de dados
   - Pode ser executado manualmente na aba Actions

3. **03-scheduled-workflow.yml** - Workflow Agendado
   - Demonstra execução agendada com cron
   - Trigger: execução diária às 9:00 AM UTC
   - Conceitos: schedule, cron expressions

4. **04-multiple-jobs.yml** - Múltiplos Jobs
   - Demonstra jobs com dependências
   - Conceitos: needs, artifacts, upload/download
   - Pipeline: lint → test → build → deploy

5. **05-matrix-strategy.yml** - Estratégia de Matrix
   - Demonstra testes em múltiplas plataformas/versões
   - Conceitos: matrix strategy, fail-fast, include
   - Testa em: Ubuntu, Windows, macOS com Node.js 18, 20, 22

6. **06-environment-secrets.yml** - Ambientes
   - Demonstra uso de environments
   - Conceitos: environments, deployment URLs
   - Pipeline: development → staging → production

## 🚀 Como Usar

### Visualizar Workflows
1. Acesse a aba **Actions** no GitHub
2. Selecione um workflow na lista à esquerda
3. Visualize as execuções anteriores

### Executar Workflows Manualmente
1. Vá para a aba **Actions**
2. Selecione o workflow desejado (ex: "02 - Manual Workflow Dispatch")
3. Clique em **Run workflow**
4. Preencha os inputs necessários
5. Clique em **Run workflow** novamente

### Observar Execuções Automáticas
- Workflows com trigger de push serão executados automaticamente ao fazer push
- Workflows agendados serão executados nos horários configurados

## 📖 Conceitos Aprendidos

### Triggers (on:)
- `push`: Executa em pushes para branches específicas
- `pull_request`: Executa em pull requests
- `workflow_dispatch`: Permite execução manual
- `schedule`: Executa em horários agendados (cron)

### Jobs
- Jobs são executados em paralelo por padrão
- Use `needs:` para criar dependências entre jobs
- Cada job roda em um runner separado

### Steps
- Steps são executados sequencialmente dentro de um job
- Use `uses:` para actions do marketplace
- Use `run:` para executar comandos shell

### Matrix Strategy
- Executa o mesmo job com diferentes configurações
- Útil para testar em múltiplas versões/plataformas
- `fail-fast`: controla se deve parar todos ao encontrar falha

### Artifacts
- Compartilha arquivos entre jobs
- `upload-artifact`: salva arquivos
- `download-artifact`: recupera arquivos

### Environments
- Organiza deployments em diferentes ambientes
- Permite configurar proteções e aprovações
- Pode incluir URLs para ambientes

## 🔧 Variáveis de Contexto Úteis

- `${{ github.repository }}` - Nome do repositório
- `${{ github.ref }}` - Referência do branch/tag
- `${{ github.actor }}` - Usuário que disparou o workflow
- `${{ runner.os }}` - Sistema operacional do runner
- `${{ matrix.* }}` - Valores da estratégia de matrix

## 📚 Recursos Adicionais

- [Documentação Oficial GitHub Actions](https://docs.github.com/actions)
- [GitHub Actions Marketplace](https://github.com/marketplace?type=actions)
- [Workflow Syntax](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)

## 🎯 Próximos Passos

Para expandir seu aprendizado, considere:

1. Adicionar testes reais ao workflow de CI
2. Configurar cache de dependências
3. Criar workflows para diferentes linguagens
4. Implementar workflows de release e tag
5. Explorar GitHub Actions do Marketplace
6. Adicionar notificações (Slack, Discord, etc.)
7. Implementar workflows de segurança (CodeQL, Dependabot)

---

**Nota**: Este é um repositório de treinamento. Os workflows são exemplos educacionais e podem ser adaptados para casos de uso reais.