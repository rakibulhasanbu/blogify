# Flat share System Server

This server involves creating a Flat share system using TypeScript and Express.js, with Prisma ORM for database interaction, specifically with a PostgreSQL database. Authentication is handled through JSON Web Tokens (JWT). The system is designed around five main models: User, Flat, Booking, and UserProfile, each with specific fields such as ids, names, timestamps, and relationships to other models.

## Server Live Link

### https://lostfoundserver.vercel.app/

## Run the server application locally

- Clone this repository: `git clone <repository_url>`
- Install dependencies: `npm install`
- Set up the environment variables by creating a `.env` file.
- Run the database migrations: `npx prisma migrate dev`
- Start the server: `npm start``
