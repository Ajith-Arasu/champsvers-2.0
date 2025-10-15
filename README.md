# 🌀 ChampsVerse 2.0

A modern React application built using **Vite** with **ESLint + Prettier** for consistent and clean code formatting.

---

## 🚀 Tech Stack

| Tool        | Purpose                           |
|-------------|-----------------------------------|
| React + Vite | Fast frontend development         |
| JavaScript  | Primary language                  |
| ESLint      | Linting for code quality          |
| Prettier    | Code formatting                   |
| Husky + Lint-Staged *(optional)* | Pre-commit code cleanup |

---

## 📦 Project Setup

```bash
# 1️⃣ Create Vite Project
npm create vite@latest champsverse-2 -- --template react

cd champsverse-2

# 2️⃣ Install ESLint + Prettier
npm install -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks

# 3️⃣ Initialize ESLint
npm create @eslint/config
# ✅ Choose:
# ✔ JavaScript modules (import/export)
# ✔ React
# ✔ Browser
# ✔ JavaScript
# ✔ No popular style guide
# ✔ JSON format

# 4️⃣ Add Prettier Config
echo '{
  "singleQuote": true,
  "semi": true,
  "trailingComma": "es5",
  "printWidth": 100
}' > .prettierrc
