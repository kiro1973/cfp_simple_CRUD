\# Real Estate Application



A full-stack property management application built with React (TypeScript) and Express.


\## Installation \& Setup



\### Prerequisites

\- Node.js v20+

\- npm



\### Backend Setup

```bash

cd backend

npm install

npm run dev

```

Server runs on `http://localhost:3001`



\### Frontend Setup

```bash

cd frontend

npm install

npm run dev

```

App runs on `http://localhost:5173`



\## API Endpoints



\- `GET /api/properties` - Get all properties

\- `GET /api/properties/:id` - Get single property

\- `POST /api/properties` - Create property

\- `PUT /api/properties/:id` - Update property

\- `DELETE /api/properties/:id` - Delete property


\## Architecture



\### Backend (Express + TypeScript)

```

backend/

├── src/

│   ├── models/          # Data structures and in-memory storage

│   ├── schemas/         # Zod validation schemas

│   ├── services/        # Business logic layer

│   ├── routes/          # API route handlers

│   └── server.ts        # Application entry point

```




\### Frontend (React + TypeScript + Vite)

```

frontend/

├── src/

│   ├── components/      # Reusable UI components

│   ├── pages/           # Page-level components

│   ├── services/        # API communication layer

│   ├── types/           # TypeScript interfaces

│   └── App.tsx          # Route configuration

```

\*\* Architecture is multi-layer, but Why multi-layer architecture?\*\*

Real applications grow complex. Separating codebase makes the codebase maintainable as features are added.



\## What I Would Add With More Time



\### Backend

\- \*\*Database integration\*\*: PostgreSQL

\- \*\*Authentication\*\*: JWT-based auth system

\- \*\*Unit tests\*\*: Jest tests for services and routes

\- \*\*Error handling middleware\*\*: Centralized error handling

\- \*\*API documentation\*\*: Swagger/OpenAPI specification



\### Frontend

\- \*\*State management\*\*: React Query for server state management

\- \*\*Unit tests\*\*: Vitest + React Testing Library

\- \*\*Image upload\*\*: Property photo management

\- \*\*Filters/Search\*\*: Filter by city, price range

<!-- \- \*\*Pagination\*\*: Handle large property lists -->



\### DevOps

\- \*\*Docker\*\*: Containerization for consistent environments

\- \*\*CI/CD\*\*: GitHub Actions for automated testing/deployment


\## Project Structure Decisions







