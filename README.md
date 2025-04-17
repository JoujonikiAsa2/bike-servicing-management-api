# Bike Servicing Management API

## Summary
The Bike Servicing Management API is a backend application for managing bike service records. It allows customers to create, retrieve, update, and delete their records. The API provides endpoints for create bike records, retrieve all bike records, retrieve a specific bike record, creating new service records, fetching all service records, and retrieving a specific record by its ID. It also provides functionality to mark services as completed and fetch pending or overdue services. The API is built using Node.js, Express, and TypeScript, and it uses Prisma as an ORM for PostgreSQL database interactions.

## Live Backend Link
The API is deployed on Vercel:  
[https://bike-servicing-management-api.vercel.app/](https://bike-servicing-management-api.vercel.app/)

## Tech Stack
- **Backend**: Node.js with Express
- **Database**: PostgreSQL with Prisma ORM
- **API Deployment**: Vercel
- **Version Control**: Git
- **Language**: TypeScript
- **Other Tools**: npm for package management

## Setup Guide
Follow these steps to set up and run the project locally:

### Installation
1. **Clone the Repository**  
   ```bash
   git clone https://github.com/JoujonikiAsa2/bike-servicing-management-api
   cd bike-servicing-management-api
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**  
   Create a `.env` file in the root directory and add the following:  
   ```
   DATABASE_URL="postgresql://<user>:<password>@localhost:5432/<database>?schema=public"
   PORT=3000
   NODE_DEV=development
   ```
   Replace `<user>`, `<password>`, and `<database>` with your PostgreSQL credentials.

4. **Run Database Migrations**  
   Use Prisma to set up the database schema:  
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Start the Server**  
   ```bash
   npm start
   ```
   The API will be running at `http://localhost:3000`.

### Testing the API
Use a tool like Postman or cURL to test the endpoints. Example:  
- **GET /api/services/status**: Fetch pending or overdue services  
  ```bash
  curl http://localhost:3000/api/services/status
  ```

## Key Features

- **Create Customer Records**: Add new customer records with details like name, email, and phone number.
- **Create Bike Records**: Add new bike records with details like brand, model, year, and customer ID.
- **Retrieve Bike by ID**: Fetch a specific bike record using its unique ID (`GET /api/bikes/:id`).
- **Create Service Records**: Add new bike service records with details like bike ID, service date, description, and status.
- **Retrieve Service by ID**: Fetch a specific service record using its unique ID (`GET /api/services/:id`).
- **Pending/Overdue Services**: Retrieve all services with a status of "pending" or "in-progress" that 