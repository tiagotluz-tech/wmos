# Sprint 1A — Autenticação e Autorização

## Objetivo

Preparar a infraestrutura de autenticação e autorização do WMOS/CGW sem depender das credenciais reais do Microsoft Entra ID.

## Decisões arquiteturais

- A arquitetura do monorepo foi preservada: `apps/api`, `apps/web`, `apps/jobs` e `packages/*` permanecem como fronteiras principais.
- A API recebeu módulos dedicados para `auth`, `users`, `roles`, `permissions` e `audit`, mantendo responsabilidades separadas.
- A autenticação backend utiliza um `MockAuthService` que aceita o token `mock-admin-token` ou payload em Base64URL para simular a futura identidade Microsoft Entra ID.
- O endpoint `GET /health` permanece público. Rotas autenticadas devem aplicar `JwtGuard` ou metadados de papéis/permissões conforme evoluírem.
- `RolesGuard` e `PermissionsGuard` usam metadados declarados por `@Roles()` e `@Permissions()` para proteger casos de uso sem acoplar regra de acesso aos controllers.
- O `AuditInterceptor` centraliza o registro de ações HTTP e ignora o health check para evitar ruído operacional.
- O frontend utiliza `MockAuthProvider` para simular sessão, usuário, avatar e logout, preparando a substituição futura por Microsoft Entra ID sem credenciais reais.

## Modelo de dados

A Sprint 1A adiciona as entidades Prisma:

- `User`
- `Role`
- `Permission`
- `UserRole`
- `RolePermission`
- `AuditLog`

## Seed inicial

O seed cria os papéis corporativos iniciais e as permissões base solicitadas para as próximas sprints.
