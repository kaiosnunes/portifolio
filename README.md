# Kaio Santos Nunes — Portfólio

Portfólio pessoal desenvolvido com Vite, React e TypeScript.

## 🚀 Tecnologias

- **React** + **TypeScript**
- **Vite**
- **Tailwind CSS v4**
- **react-i18next** — internacionalização (pt-BR / en-US)
- **react-icons** — ícones de tecnologias
- **lucide-react** — ícones de interface

## 📁 Estrutura

```
src/
├── components/        # Peças reutilizáveis (Navbar, ThemeSwitcher, Icons)
├── layouts/           # MainLayout
├── pages/             # Seções da página (Home, About, Skills, Projects, Contact)
├── i18n/              # Configuração e arquivos de tradução
└── assets/
```

## ⚙️ Instalação

```bash
npm install
npm run dev
```

## 🌐 Internacionalização

O projeto suporta português e inglês. Os arquivos de tradução estão em `src/i18n/`:

- `pt.json` — Português (padrão)
- `en.json` — English

## 🎨 Tema

Suporte a modo claro e escuro via classe `dark` no `document.documentElement`, controlado pelo componente `ThemeSwitcher`.

## 📄 Licença

MIT
