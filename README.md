# ⚽ IPLUSO CUP 2026

Website oficial do torneio universitário de futebol 5x5 organizado pelo IPLUSO.

## 🎯 Sobre o Projeto

Site moderno e interativo para divulgação do IPLUSO CUP 2026, com design inspirado em UEFA Champions League, Nike Football e Red Bull Events.

### ✨ Funcionalidades

- 🏆 Hero section com countdown para o evento
- 📋 Informações completas sobre o torneio
- 📅 Timeline de horários dos jogos
- 📝 Formulário de inscrições
- 🍺 Secção Bar & Convívio
- 📸 Galeria de fotos
- 📱 Links para redes sociais
- ❓ FAQ (Perguntas Frequentes)
- 🎨 Animações premium e design responsivo

### 🎨 Paleta de Cores

- Vermelho Principal: `#D90429`
- Vermelho Escuro: `#8D021F`
- Branco: `#FFFFFF`
- Cinza Claro: `#F5F5F5`
- Preto Suave: `#111111`

## 🚀 Tecnologias

- **React 18** - Framework frontend
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Estilização
- **Vite** - Build tool
- **Framer Motion** - Animações
- **Lucide React** - Ícones

## 💻 Instalação Local

```bash
# Instalar pnpm globalmente (se ainda não tiver)
npm install -g pnpm

# Instalar dependências
pnpm install

# Executar em modo desenvolvimento
pnpm run dev

# Build para produção
pnpm run build
```

## 📦 Deploy no GitHub Pages

Consulta o ficheiro [DEPLOY-GITHUB-PAGES.md](./DEPLOY-GITHUB-PAGES.md) para instruções detalhadas de como publicar este site no GitHub Pages.

**Resumo rápido:**
1. Ajusta o `base` no `vite.config.ts` com o nome do teu repositório
2. Cria um repositório no GitHub
3. Faz push do código
4. Ativa GitHub Pages nas Settings (Source: GitHub Actions)
5. O deploy é automático! ✅

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── App.tsx                 # Componente principal
│   ├── components/            # Componentes React
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Info.tsx
│   │   ├── Tournament.tsx
│   │   ├── Schedule.tsx
│   │   ├── Registration.tsx
│   │   ├── Bar.tsx
│   │   ├── Gallery.tsx
│   │   ├── Social.tsx
│   │   ├── FAQ.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   └── hooks/
│       └── useCountdown.ts    # Hook para countdown
├── styles/
│   ├── theme.css              # Variáveis CSS e tema
│   └── fonts.css              # Importações de fontes
└── main.tsx                   # Entry point

.github/
└── workflows/
    └── deploy.yml             # GitHub Actions workflow
```

## 🤝 Contribuir

1. Faz fork do projeto
2. Cria um branch para a tua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit das alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para o branch (`git push origin feature/NovaFuncionalidade`)
5. Abre um Pull Request

## 📄 Licença

Este projeto foi criado para o IPLUSO CUP 2026.

## 📧 Contacto

Para mais informações sobre o IPLUSO CUP 2026:
- Instagram: [@ipluso.cup](https://instagram.com/ipluso.cup)
- Email: iplusocup@ipluso.pt

---

**Desenvolvido com ❤️ para a comunidade IPLUSO**
