# React JS - Learning Repository

A hands-on learning repository for React.js covering fundamentals, component architecture, state management, and full-stack integration. Includes multiple projects ranging from starter apps to full-stack applications with backend services.

---

## Contents

| Folder | Description | Key Concepts |
|--------|-------------|--------------|
| `HTML/` | Basic HTML file for React integration | HTML fundamentals, script loading |
| `JS Refresher/` | JavaScript refresher before diving into React | ES6+, modern JavaScript syntax |
| `my-app/` | First React application (Create React App) | Components, JSX, project scaffolding |
| `todolist/` | Todo List application built with React | State management, event handling, CRUD operations |
| `portal.aiub/` | AIUB Portal clone built with React | Component composition, styling, real-world UI |
| `MCQ Practice/` | Multiple Choice Question practice app | Dynamic rendering, conditional logic |
| `Jubayer task/` | Full-stack project with React frontend, NestJS backend, and MySQL database | Vite, TypeScript, NestJS, Docker, MySQL, full-stack architecture |

---

## Prerequisites

- **Node.js** (v16 or higher) and **npm** installed
- Basic understanding of HTML, CSS, and JavaScript
- A code editor such as VS Code

---

## How to Use

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd React-JS
   ```

2. Navigate into any project folder and install dependencies:
   ```bash
   cd my-app
   npm install
   npm start
   ```

3. For the full-stack project (`Jubayer task`):
   ```bash
   # Start the database
   cd "Jubayer task/db"
   docker-compose up -d

   # Start the backend
   cd ../server
   npm install && npm run start:dev

   # Start the frontend
   cd ../src
   npm install && npm run dev
   ```

4. Follow the folders in order for a structured learning path:
   - Start with `HTML/` and `JS Refresher/` for prerequisites
   - Move to `my-app/` to understand React basics
   - Build the `todolist/` to practice state and events
   - Explore `portal.aiub/` and `Jubayer task/` for advanced patterns

---

## Resources

- [React Official Documentation](https://react.dev/)
- [Create React App](https://create-react-app.dev/)
- [Vite](https://vitejs.dev/)
- [NestJS Documentation](https://docs.nestjs.com/)
