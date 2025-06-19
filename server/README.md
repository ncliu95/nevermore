# Nevermore FastAPI Server

A simple FastAPI server that provides a Hello World API endpoint.

## Setup

1. Create a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On macOS/Linux
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Running the server

From the `server` directory, run:
```bash
python main.py
```

The API will be available at:
- http://localhost:8000 - Root endpoint (Welcome message)
- http://localhost:8000/api/hello - Hello World endpoint
- http://localhost:8000/docs - API documentation (Swagger UI)

## API Endpoints

- `GET /` - Returns a welcome message
- `GET /api/hello` - Returns a "Hello World" message
