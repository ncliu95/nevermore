import sys, os
from fastapi.testclient import TestClient
import app.api.ben_endpoints as module
import main

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../../../")))
from main import app

client = TestClient(app)

def test_default():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Welcome to the Nevermore API"}



def test_generate_success(monkeypatch):
    def mock_get_openai_response(prompt):
        return "Mocked response"

    monkeypatch.setattr(module, "get_openai_response", mock_get_openai_response)

    payload = {
        "prompt": "Hello, AI!"
    }

    response = client.post("/ben/generate", json=payload)
    assert response.status_code == 200
    assert response.json() == {"response": "Mocked response"}



def test_generate_failure(monkeypatch):
    def mock_get_openai_response(prompt):
        raise Exception("OpenAI API error")

    monkeypatch.setattr(module, "get_openai_response", mock_get_openai_response)

    payload = {"prompt": "Hello, AI!"}

    response = client.post("/ben/generate", json=payload)
    assert response.status_code == 500
    assert response.json() == {"detail": "OpenAI API error"}



def test_add_joke():
    response = client.post("/will/post", json={"typeJoke": "general", "setup": "test setup", "punchline": "test punchline"})
    assert response.status_code == 200
    data = response.json()

    assert "id" in data
    assert isinstance(data["id"], str)
    assert data["type"]== "general"
    assert data["setup"]== "test setup"
    assert data["punchline"] == "test punchline"
    