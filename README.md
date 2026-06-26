## Prerequisites

Install the following before contributing:

* Git
* Node.js **v20 LTS or later**
* npm
* VS Code (Recommended)

---

## Clone Repository

```bash
git clone <repository-url>

cd engineering-india-website
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

---

## Build Project

```bash
npm run build
```

---

## Branch Naming Convention

Always create a feature branch.

Never work directly on `main`.

Examples:

```text
feature/navbar

feature/hero-section

feature/about-section

feature/events-page

fix/navbar-mobile

docs/readme-update
```

---

## Development Workflow

### 1.

Sync latest code

```bash
git checkout main

git pull origin main
```

---

### 2.

Create a new branch

```bash
git checkout -b feature/navbar
```

---

### 3.

Implement your assigned ticket.

---

### 4.

Commit

```bash
git add .

git commit -m "feat: implement responsive navbar"
```

---

### 5.

Push

```bash
git push origin feature/navbar
```

---

### 6.

Open a Pull Request.

---

### 7.

Assign reviewers.

---

### 8.

Address review comments if any.

---

### 9.

Merge only after approval.

---

# Repository Structure

```text
src
│
├── assets
├── components
│   ├── common
│   ├── layout
│   └── sections
│
├── data
├── hooks
├── pages
├── routes
├── styles
├── types
└── utils
```

---

# Coding Guidelines

* Use functional React components.
* Keep components small and reusable.
* Do not hardcode repeated values.
* Reuse existing styles wherever possible.
* Test your changes before creating a PR.

---

# Need Help?

Discuss implementation questions in the Engineering Discord server before making major architectural changes.

---

# 📋 Instructions for Team Members (From Scratch)

When you assign a ticket, this is the workflow every member should follow.

### 1. Clone the repository (first time only)

```bash
git clone <repository-url>
cd engineering-india-website
```

---

### 2. Install dependencies (first time only)

```bash
npm install
```

---

### 3. Before starting any new task

```bash
git checkout main

git pull origin main
```

This ensures they are working with the latest code.

---

### 4. Create a feature branch

Example:

```bash
git checkout -b feature/team-section
```

---

### 5. Start the development server

```bash
npm run dev
```

---

### 6. Implement only your assigned ticket

Do **not** modify unrelated files.

---

### 7. Build before pushing

```bash
npm run build
```

If the build fails, fix it before creating a PR.

---

### 8. Commit changes

```bash
git add .

git commit -m "feat: implement team section"
```

---

### 9. Push the branch

```bash
git push origin feature/team-section
```

---

### 10. Open a Pull Request

* Link the issue (`Closes #<issue-number>` if applicable).
* Request the required reviewers.
* Wait for approval.
* Do **not** merge your own PR unless the project rules allow it.