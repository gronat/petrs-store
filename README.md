# Petr's Store

A full-stack e-commerce application built with MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- Modern and responsive user interface
- RESTful API backend
- MongoDB database integration
- Concurrent development environment for frontend and backend

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community)
- npm (comes with Node.js)

## Installation

1. Clone the repository:

```bash
git clone [your-repository-url]
cd petrs-store
```

2. Install dependencies:

```bash
npm install
cd frontend
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:

```bash
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

## Development

To run the development server:

```bash
npm run dev

# Run backend only
npm run server

# Run frontend only
npm run client
```

The backend server will run on `http://localhost:5000` and the frontend development server will run on `http://localhost:5173` (default Vite port).

## Project Structure

petrs-store/
├── frontend/ # Frontend React application
├── backend/ # Backend Express.js server
│ └── server.js # Entry point for the backend
├── package.json # Project dependencies and scripts
└── README.md # Project documentation

## Technologies Used

- **Frontend:**

  - React
  - Chakra UI
  - [Other frontend technologies you're using]

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose

## Author

Petr
