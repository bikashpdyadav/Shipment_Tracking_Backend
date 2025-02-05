# Backend for Shipment Tracking Application

This is the backend service for the **Shipment Tracking Application** built with **Node.js** and **MongoDB**. The backend provides RESTful API endpoints to manage and track shipments. Follow the steps below to set up, configure, and run the application locally.

## Prerequisites

Before you begin, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14.x or later)
- [MongoDB](https://www.mongodb.com/) (either a local instance or MongoDB Atlas for cloud hosting)

## Steps to Run the Application

### 1. Clone the Repository
Clone the repository to your local machine using Git. In your terminal, run:

```bash
git clone https://github.com/bikashpdyadav/Shipment_Tracking_Backend
```

### 2. Install Dependencies
In your terminal, run:

```bash
npm install
```

### 3. Set Up Environment Variables
In your .env file, add:

```bash
PORT=3001
MONGODB_KEY=mongodb://your-username:your-password@your-cluster-url/your-database-name
```

### 4. Start the Server
In your terminal, run:

```bash
npm start
```
