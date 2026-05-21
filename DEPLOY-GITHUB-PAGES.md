# 🚀 Como Publicar o IPLUSO CUP 2026 no GitHub Pages

## Pré-requisitos
- Git instalado
- Node.js 18+ instalado
- Conta GitHub
- pnpm instalado globalmente (`npm install -g pnpm`)

---

## 📋 Passos para Publicar

### 1️⃣ Ajustar Configuração do Projeto

Abre o ficheiro `vite.config.ts` e ajusta a linha `base`:

```typescript
// Se o teu repositório GitHub se chamar "ipluso-cup-2026":
base: '/ipluso-cup-2026/',

// Se vais usar um domínio personalizado (ex: iplusocup.com):
base: '/',
```

### 2️⃣ Criar Repositório no GitHub

1. Vai a https://github.com/new
2. Nome do repositório: `ipluso-cup-2026` (ou outro nome à tua escolha)
3. Deixa como **público**
4. **NÃO** adicionar README, .gitignore ou licença
5. Clica em "Create repository"

### 3️⃣ Enviar Código para o GitHub

No terminal, na pasta do projeto, executa:

```bash
# Inicializar repositório Git
git init

# Adicionar todos os ficheiros
git add .

# Fazer primeiro commit
git commit -m "Initial commit: IPLUSO CUP 2026 website"

# Adicionar o repositório remoto (SUBSTITUI 'teu-username' e 'ipluso-cup-2026')
git remote add origin https://github.com/teu-username/ipluso-cup-2026.git

# Enviar código
git branch -M main
git push -u origin main
```

### 4️⃣ Ativar GitHub Pages

1. Vai ao teu repositório no GitHub
2. Clica em **Settings** (Definições)
3. No menu lateral, clica em **Pages**
4. Em **Source**, seleciona **GitHub Actions**
5. Guarda as alterações

### 5️⃣ Deploy Automático

O GitHub Actions vai automaticamente fazer build e deploy sempre que fizeres push para o branch `main`.

Para verificar o progresso:
1. Vai à tab **Actions** do repositório
2. Vê o workflow "Deploy to GitHub Pages" a correr
3. Quando terminar (✅ verde), o site está publicado!

### 6️⃣ Aceder ao Site

O teu site estará disponível em:
```
https://teu-username.github.io/ipluso-cup-2026/
```

---

## 🔄 Atualizar o Site

Sempre que quiseres atualizar o site:

```bash
# Fazer alterações no código
# Depois:

git add .
git commit -m "Descrição das alterações"
git push
```

O GitHub Actions vai automaticamente fazer rebuild e deploy!

---

## 🌐 Usar Domínio Personalizado (Opcional)

Se quiseres usar um domínio tipo `iplusocup.com`:

1. Compra o domínio (Namecheap, GoDaddy, etc.)
2. Nas **Settings > Pages** do GitHub, adiciona o domínio em "Custom domain"
3. Configura os DNS do teu domínio:
   - Tipo: `A`
   - Host: `@`
   - Valor: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Tipo: `CNAME`
   - Host: `www`
   - Valor: `teu-username.github.io`
4. Ajusta `base: '/'` no `vite.config.ts`
5. Faz push das alterações

---

## ⚙️ Build Local (Testar antes de publicar)

Se quiseres testar o build localmente antes de fazer push:

```bash
# Instalar dependências
pnpm install

# Fazer build
pnpm run build

# Testar o build localmente
npx serve dist
```

Abre o browser em `http://localhost:3000`

---

## 🆘 Problemas Comuns

### Página em branco após deploy
- Verifica se o `base` no `vite.config.ts` está correto
- Deve ser `/nome-do-repositorio/` (com barras no início e fim)

### Erros no GitHub Actions
- Verifica se o branch principal se chama `main` (não `master`)
- Se for `master`, ajusta no ficheiro `.github/workflows/deploy.yml`

### Imagens não aparecem
- Certifica-te que usaste caminhos relativos para imagens
- Imagens devem estar na pasta `public/` ou importadas via ES modules

---

## 📞 Suporte

Se tiveres problemas, verifica:
- Logs do GitHub Actions na tab "Actions"
- Console do browser (F12) para erros JavaScript
- Configuração do GitHub Pages nas Settings

---

**Boa sorte com o IPLUSO CUP 2026! ⚽🔥**
