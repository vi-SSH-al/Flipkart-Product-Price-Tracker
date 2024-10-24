# MERN Stack Flipkart Product Tracker

This is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to share Flipkart product links, automatically fetch their details, view historical price changes, and search/filter products. The app is designed to be modern, responsive, and user-friendly.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Users can paste a Flipkart product link to automatically fetch details (e.g., title, price, reviews).
- No login required — all users can view the product data and its price history.
- "Recheck Price" button to get the current price of a product while maintaining its price history.
- Users can search products by title or filter by price range.
- Fully responsive and modern UI built using TailwindCSS.

## Technologies

- **Frontend:** React, TailwindCSS
- **Backend:** Node.js, Express.js, MongoDB
- **Web Scraping:** Custom scraper for fetching Flipkart product data
- **Other Tools:** Axios, Mongoose, dotenv

## Project Structure

\`\`\`
.
├── backend/                # Backend code (Node.js, Express, MongoDB)
│   ├── models/             # MongoDB models (e.g., Product.js)
│   ├── routes/             # Express routes for API
│   ├── controllers/        # Controllers for handling API requests
│   ├── .env                # Backend environment variables
│   └── server.js           # Entry point of the backend
├── frontend/               # Frontend code (React.js)
│   ├── public/             # Public assets
│   ├── src/                # React components, services, styles
│   ├── .env                # Frontend environment variables
│   └── package.json        # Frontend dependencies
└── README.md               # Project documentation
\`\`\`

## Setup Instructions

Follow these steps to set up the project locally.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v14 or later)
- MongoDB (either local or cloud-based)
- Git (to clone the repository)

### Backend Setup

1. Clone the repository:

  
```shell
   git clone https://github.com/yourusername/repo-name.git
   cd backend
```
   

2. Install backend dependencies:

 ```shell
  npm install
```


3. Create a \`.env\` file in the \`backend\` folder and add the following variable:


 ```markdown
  DATABASE_URL=<Your MongoDB Connection URL>
```
   

4. Start the backend server:

 ```markdown
  npm start
```


   The backend will run at \`http://localhost:5000\`.

### Frontend Setup

1. Navigate to the frontend folder:


 ```markdown
  cd ../frontend
```
  

2. Install frontend dependencies:


```markdown
   npm install
```


3. Create a \`.env\` file in the \`frontend\` folder and add the following variable:

 
   ```markdown
REACT_APP_BASE_URL=http://localhost:5000/api
 
```

4. Start the frontend server:


  ```markdown
 npm start
```
 

   The frontend will run at \`http://localhost:3000\`.

### Environment Variables

- **Backend:**
  - DATABASE_URL: Your MongoDB connection string.
  
- **Frontend:**
  - REACT_APP_BASE_URL: URL of the backend API, typically \`http://localhost:5000/api/v1`.

## Usage

Once both the frontend and backend are running, you can:

1. Open \`http://localhost:3000\` in your browser.
2. Enter a Flipkart product link into the input field and click "Fetch Details" to retrieve product data.
3. Use the search bar to find products by title, or use the filters to find products in a specific price range.
4. Press "Recheck Price" to update the price of any product and store the new price in the history.

## Contributing

We welcome contributions! If you'd like to improve the app, follow these steps:

1. Fork the repository.
2. Create a new branch (\`git checkout -b feature-branch\`).
3. Make your changes.
4. Commit your changes (\`git commit -m 'Add new feature'\`).
5. Push to the branch (\`git push origin feature-branch\`).
6. Create a pull request.

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
