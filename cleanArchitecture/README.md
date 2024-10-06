## Clean Architecture Project

## Description

This project is an implementation of **Clean Architecture** in an application that handles preset phrases. The application allows to get a random phrase, list all phrases and add new phrases. It is developed using **Node.js** for the backend, **HTML/CSS/JavaScript** for the frontend and **MySQL** for data storage.

## Project Structure

```bash
│
├── domain/
│   ├── entities/
│   │   └── Phrase.js
│   ├── repositories/
│   │   └── PhraseRepository.js
│   └── services/
│
├── application/
│   ├── use_cases/
│   │   ├── GetRandomPhrase.js
│   │   ├── GetAllPhrases.js
│   │   └── AddPhrase.js
│   └── interfaces/
│
├── infrastructure/
│   ├── data/
│   │   ├── InMemoryPhraseRepository.js
│   │   └── MySQLPhraseRepository.js
│   └── services/
│
├── presentation/
│   ├── api/
│   │   ├── controllers/
│   │   │   └── phraseController.js
│   │   ├── routes/
│   │   │   └── phraseRoutes.js
│   │   ├── middleware/
│   │   │   └── errorHandler.js
│   │   └── server.js
│   │
│   ├── web/
│   │   ├── assets/
│   │   │   ├── css/
│   │   │   │   └── styles.css
│   │   │   ├── js/
│   │   │   │   └── scripts.js
│   │   │   └── images/
│   │   ├── index.html
│   │   └── favicon.ico
│
├── config/
│   └── dbConfig.js
│
├── tests/
│
├── .env
├── .gitignore
└── README.md

```
## Technologies Used

- Backend**: Node.js, Express.js
- Frontend**: HTML, CSS, JavaScript
- Database**: MySQL
- STM/Client**: mysql2
- Environment Management**: dotenv

## Requirements

- Node.js** (v14 or higher)
- **npm**
- **MySQL**

## Installation

1. **Clone Repository**

    ```bash
    cd cleanArchitecture
    ```
2. **Install the Dependencies**.

    ```bash
    npm install
    ```

3. **Configure the Environment Variables**.

    Create a `.env` file in the root of the project with the following content:

    ```
    DB_HOST=localhost
    DB_USER=your_user
    DB_PASSWORD=your_password
    DB_NAME=my_architecture_limpia
    PORT=3000
    ```

    Replace `your_user` and `your_password` with your MySQL credentials.

4. **Configure the Database**

    - Create the database and table:

        ```sql
        CREATE DATABASE phrases_random;

        USE phrases_random;

        CREATE TABLE phrases (
            id INT AUTO_INCREMENT PRIMARY KEY,
            text VARCHAR(255) NOT NULL
        );
        ```

    - **Insert some initial phrases**:

        ```sql
        INSERT INTO phrases (text) VALUES 
        ('Life is beautiful'), 
        ('Carpe Diem'), 
        ('He who follows gets it');
        ```

5. **Run the Server**.

    For normal execution:

    ```bash
    npm start
    ```

    The server will be listening on `http://localhost:3000`.

6. **Access to the Web Interface**

    Open the `presentation/web/index.html` file in your browser to interact with the application.

## Usage

### API Endpoints

- **Get a Random Phrase**.

    **Application:**

    ```
    GET http://localhost:3000/random-phrase
    ```

    **Response:**

    ```json
    {
        “phrase": ”Carpe Diem”
    }
    ```

- **List All Phrases**

    **Application:**

    ```
    GET http://localhost:3000/phrases
    ```

    **Response:**

    ```json
    {
        “phrases": [
            “Life is beautiful”,
            “Carpe Diem”,
            “He who follows gets it”
        ]
    }
    ```

- **Add a New Phrase**

    **Application:**

    ```
    POST http://localhost:3000/phrases
    Content-Type: application/json

    {
        “text": ”New sentence here”
    }
    ```

    **Response:**

    ```json
    {
        “phrase": ”New phrase here”
    }
    ```

### Web Interface

- **Get Random Phrase**: Click on the “Get Random Phrase” button to see a random phrase.
- **Add New Phrase**: Enter a new phrase in the text field and click “Add Phrase”.
- **List All Phrases**: Click “Load All Phrases” to view all stored phrases.
