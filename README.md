# ALUMINI Project

## Overview

This project is a full-stack alumni portal that allows students to connect with graduates. It provides features such as authentication, alumni directory, club affiliations, chat messaging, referral tracking, and more.

## Features

- **Authentication**: Login and registration functionality for students and graduates.
- **Graduates Directory**: View graduate profiles and send requests.
- **Clubs**: Club information and member listing.
- **Chat System**: Real-time messaging using Socket.IO.
- **Referral System**: Track and manage referrals.
- **Invitations**: Send and receive invitations between users.

## Project Structure

```
ALUMINI-main/
│
├── backend/              # Node.js Express server
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── controllers/      # Route logic
│   ├── config/           # DB and environment config
│   └── server.js         # Entry point
│
├── frontend/             # React client
│   ├── src/              # React components and pages
│   └── public/           # Public assets
│
└── README.md             # Project documentation (this file)
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm or yarn

### Setup

1. **Backend Setup**

```bash
cd backend
npm install
npm run dev
```

2. **Frontend Setup**

```bash
cd frontend
npm install
npm start
```

## Usage

- Students can register, log in, view graduates, and initiate chat.
- Graduates can view incoming requests and reply to students.
- Admins or club leaders may manage club info and member data.

## Technologies Used

- **Frontend**: React, Axios, Socket.IO client
- **Backend**: Node.js, Express, MongoDB, Mongoose, Socket.IO server
- **Styling**: CSS / Tailwind 

## License

This project is for educational or internal use. Customize and extend as needed.
