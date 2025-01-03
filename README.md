# ChecklistSystem

# Simple Checklist System

## Description
This project is a simple checklist system built using Node.js. It evaluates a set of conditions based on data fetched from an API and displays the evaluation results in a user-friendly dashboard.

## Features
- Fetches data dynamically from an API.
- Evaluates a configurable set of checklist rules.
- Displays the results on a dashboard.
- Modular and extensible design for adding new rules.

## Project Structure
checklist-system/
├── config/ 
│ └── checklistRules.js # Contains configurable checklist rules 
├── controllers/ 
│ └── checklistController.js # Handles data fetching and rule evaluation 
├── public/ 
│ └── styles.css # CSS for the dashboard 
├── views/ 
│ └── dashboard.ejs # EJS template for the dashboard 
├── index.js # Main server file 
├── package.json # Project dependencies and metadata 
└── README.md # Project documentation


## Setup and Run

### Prerequisites
- Node.js installed on your system.

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
2. Navigate to the project directory:
    cd checklist-system
3. Install dependencies:
    npm install

## Run Locally
1. Start the server:
    node index.js
2. Open your Browser and visit:
    http://localhost:3000