# Basic auth handling NNM

This is a sample boilerplate project designed to simplify the setup and
accelerate the development of new projects. The backend and frontend are
separated and organized within an NX monorepo. For the backend, we use
the NestJS framework, and for the frontend, we utilize Next.js. The
project is configured to work with a MySQL database, and the Dockerfile
is located in the root folder. The database includes a simple user table.

## Features

- User Authentication: Login, Registration, Forgot Password, Logout
- Custom components and utilities
- NX monorepo structure with NestJS and Next.js
- MySQL database integration

## Technologies Used

- **Backend**: NestJS
- **Frontend**: Next.js
- **Database**: MySQL
- **Monorepo management**: NX
- **Mailing service**: nodemailer ( MailTrap recommended )

# Getting Started

## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js (v16 or above)
- Docker
- MySQL (if not using Docker)
- NX CLI (optional, for development)

### Mailing Service Setup

For sending emails, it's recommended to use [MailTrap](https://mailtrap.io/register/signup?ref=header), a free service for developers to test email functionality. After registration, update the email settings in your backend .env file.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/DajkaCsaba/basic-auth-handling-NNM.git
cd basic-auth-handling-NNM
```

2. Rename the `.env.example` and the `.env.local.example` files and fill in the correct values for
   both the backend and frontend. You will find `.env.example` files in
   their respective folders.

- **Backend**: /apps/backend/.env.example

- **Frontend**: /apps/frontend/.env.local.example

3. Install dependencies for the project:

```bash
corepack pnpm install
```

# Running the project

To start the project in development mode:

1. **MySQL database in Docker:**

```bash
docker compose up -d
```

2. **Prisma Studio:** ( localhost:5555 )

```bash
corepack pnpm run prisma:studio
```

3. **Backend:** ( localhost:3000 )

```bash
corepack pnpm run serve:backend
```

4. **Frontend:** ( localhost:4000 )

```bash
corepack pnpm run serve:frontend
```

Both the frontend and backend will now be running, with hot-reload enabled for development purposes.
