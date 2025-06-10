# HomePricePrediction

A Python-based project for predicting house prices using machine learning. This repository includes a backend REST API (Flask), and a frontend (React) for making predictions interactively. All dependencies are managed using a Python virtual environment.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Ahmed0Raza/HomePricePrediction.git
cd HomePricePrediction
```

---

### 2. Set Up Python Virtual Environment

It is recommended to use a virtual environment to manage dependencies.

#### On Windows

```bash
python -m venv venv
venv\Scripts\activate
```

#### On macOS/Linux

```bash
python3 -m venv venv
source venv/bin/activate
```

---

### 3. Install Python Dependencies

```bash
pip install -r requirements.txt
```

---

## Running the Application

### Backend (Express API)

1. Navigate to the backend folder:
    ```bash
    cd backend
    ```
2. Install frontend dependencies:
    ```bash
    npm install
    ```
3. Start the frontend development server:
    ```bash
    npm start
    ```
   The backend will run at [http://localhost:5000](http://localhost:5000) by default.

---

### Frontend (React)

1. Open a new terminal window/tab.
2. Navigate to the frontend folder:
    ```bash
    cd frontend
    ```
3. Install frontend dependencies:
    ```bash
    npm install
    ```
4. Start the frontend development server:
    ```bash
    npm start
    ```
   The frontend will run at [http://localhost:3000](http://localhost:3000) by default.

---

## Notes

- Always activate your virtual environment before running Python commands.
- To deactivate the virtual environment, type:
    ```bash
    deactivate
    ```
- If you modify the backend or frontend, restart the respective server.

---

## Author

**Ahmed Raza**  
[GitHub](https://github.com/Ahmed0Raza)

---

## License

MIT
