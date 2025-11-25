# Permit Request Service Portal  
**Full-Stack Application – 100% compliant with the technical assessment requirements**

A modern, responsive permit request portal built with the **latest stable versions** as required:

- **Frontend**: Nuxt 4.x (Latest) + Nuxt Server Routes  
- **Backend**: NestJS 11.x + TypeORM + PostgreSQL  
- **Design System**: Saudi National Design System (RTL + Tajawal Font + Official Green #006633)  
- **Database**: PostgreSQL

## Features Implemented (Exactly as specified)

- Home page listing all submitted permit applications  
- Application form (`/apply`) for submitting new permits  
- Clear visual status indicators:  
  - **Pending** → Yellow  
  - **Approved** → Green (#006633)  
  - **Rejected** → Red  
- **CRITICAL**: All API calls from Nuxt frontend are proxied through **Nuxt Server Routes**  
  → `frontend/server/api/permits.ts` (single file as shown in the example)  
- Client-side data fetching using `useFetch`  
- Fully RTL, responsive, and built with Saudi Design System guidelines

## Project Structure
permit-portal/
├── backend/                  # NestJS + PostgreSQL
├── frontend/                 # Nuxt 4
│   ├── app.vue
│   ├── pages/
│   │   ├── index.vue         # Permit list + useFetch
│   │   └── apply.vue         # Submission form
│   ├── server/api/permits.ts  # CRITICAL Server Route
│   ├── nuxt.config.ts
│   └── tailwind.config.js
└── README.md

## How to Run the Project (Step-by-Step)

### 1. Clone the repository
```bash
git clone https://github.com/mohammedaldghar/permession-portal.git
cd permession-portal
cd backend
cp .env.example .env
npm install
npm run start
cd frontend
npm install
npm run dev
```
##Open the app
http://localhost:3000

##Backend .env data 
PORT=3001
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=
DATABASE_NAME=permit_db
DATABASE_SYNCHRONIZE=true
