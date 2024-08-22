
# Realtime-CPU_usage

This project is a simple web application that displays real-time CPU usage in a line chart. It is built using Node.js for the backend to fetch CPU data and React.js for the frontend to display the data using a chart. The communication between the backend and frontend is handled using WebSockets (Socket.io).

## Features

- **Real-time CPU Monitoring**: Continuously monitor and display CPU usage in real-time.
- **Socket.io for Real-time Communication**: Utilizes WebSockets to provide real-time updates from the backend to the frontend.
- **React and Chart.js for Visualization**: The CPU data is visualized using a line chart, which updates dynamically.

## Project Structure

- **backend**: Contains the Node.js server that fetches CPU usage data and sends it to the frontend.
- **frontend**: Contains the React application that receives the CPU data and displays it in a real-time updating line chart.

## Screenshot

![Screenshot](Screenshot%20from%202024-07-18%2007-11-19.png)

## Setup Instructions

### Backend Setup

1. Navigate to the `backend` directory:
   ```sh
   cd backend
   ```

2. Install the necessary dependencies:
   ```sh
   npm install
   ```

3. Start the backend server:
   ```sh
   node server.js
   ```

The server will start on `http://localhost:4000` and will emit real-time CPU usage data.

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```sh
   cd frontend
   ```

2. Install the necessary dependencies:
   ```sh
   npm install
   ```

3. Start the React application:
   ```sh
   npm start
   ```

The React app will start on `http://localhost:3000` and will display the real-time CPU usage chart.

## Technologies Used

- **Node.js**: Backend server to fetch CPU data.
- **Express**: Web framework for Node.js.
- **Socket.io**: Library for real-time communication.
- **React.js**: Frontend library for building user interfaces.
- **Chart.js**: Library used for creating charts.

