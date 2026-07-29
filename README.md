# Centro de Governança Wittel (CGW)

O Centro de Governança Wittel (CGW) é uma plataforma corporativa de governança executiva para consolidar indicadores, fluxos de decisão e rotinas operacionais em uma experiência única, escalável e auditável.

## Arquitetura

O projeto utiliza um monorepo com Turborepo e pnpm Workspace. A arquitetura separa aplicações executáveis de pacotes reutilizáveis:

- `apps/web`: frontend Next.js com App Router, TailwindCSS e componentes shadcn/ui.
- `apps/api`: backend NestJS com ConfigModule, módulo de health check e documentação Swagger.
- `apps/jobs`: base para rotinas assíncronas e automações operacionais.
- `packages/domain`: regras e entidades de domínio.
- `packages/application`: casos de uso e orquestração da aplicação.
- `packages/infrastructure`: integrações externas, persistência e adaptadores.
- `packages/shared`: utilitários compartilhados.
- `packages/ui`: componentes de interface reutilizáveis.
- `packages/config`: configurações compartilhadas.
- `prisma`: schema e configuração do Prisma ORM.
- `docker`: artefatos auxiliares de infraestrutura.
- `docs`: documentação técnica e planejamento.

## Stack

### Frontend

- Next.js 15
- React
- TypeScript
- TailwindCSS
- shadcn/ui

### Backend

- NestJS
- Prisma ORM

### Banco de dados

- PostgreSQL 17

### Infraestrutura e workspace

- Docker
- Docker Compose
- Turborepo
- pnpm Workspace
- ESLint
- Prettier
- Husky
- lint-staged

## Estrutura

```text
.
├── apps
│   ├── api
│   ├── jobs
│   └── web
├── packages
│   ├── application
│   ├── config
│   ├── domain
│   ├── infrastructure
│   ├── shared
│   └── ui
├── prisma
├── docker
├── docs
└── .github/workflows
```

## Como executar

1. Instale as dependências:

   ```bash
   pnpm install
   ```

2. Suba o PostgreSQL 17:

   ```bash
   docker compose up -d
   ```

3. Execute o ambiente de desenvolvimento:

   ```bash
   pnpm dev
   ```

4. Acesse os serviços:

   - Web: <http://localhost:3000>
   - API health check: <http://localhost:3001/health>
   - Swagger: <http://localhost:3001/docs>

## Scripts

- `pnpm dev`: inicia os serviços em modo desenvolvimento.
- `pnpm build`: compila aplicações e pacotes.
- `pnpm lint`: executa validações de lint.
- `pnpm test`: executa a suíte de testes configurada no workspace.
- `pnpm format`: formata o código com Prettier.

## Roadmap resumido

- Sprint 0: bootstrap do monorepo, aplicações base, Docker, Prisma e CI.
- Sprint 1: autenticação corporativa, RBAC e fundações do domínio de governança.
- Sprint 2: dashboards executivos, integrações e trilhas de auditoria.
- Sprint 3: rotinas assíncronas, notificações e observabilidade operacional.
