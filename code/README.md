# Projeto Caridade Backend

## Como Rodar o Projeto

Siga os passos abaixo para configurar e rodar o projeto:

1. **Instalar as Dependências**
  ```bash
  npm install
  ```

2. **Verificar as Variáveis de Ambiente**
  Certifique-se de que as variáveis de ambiente estão configuradas corretamente no arquivo `.env`.

3. **Gerar a DB SQLite com Prisma**
  ```bash
  npx prisma migrate dev
  ```

4. **Aplicar as Migrações com Prisma**
  ```bash
  npx prisma db push
  ```

5. **Rodar o Projeto**
  ```bash
  npm run dev
  ```

Agora o projeto deve estar rodando localmente.