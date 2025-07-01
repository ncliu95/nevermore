import sys, os
from fastapi.testclient import TestClient
import app.api.ben_endpoints as module
import main

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../../../")))
from main import app

client = TestClient(app)

def test_ai(monkeypatch):
    def mock_get_openai_response(prompt,system_prompt):
        return "Mocked response"

    monkeypatch.setattr(module, "get_openai_response", mock_get_openai_response)

    payload = {
        "prompt": "Hello, AI!"
    }

    response = client.post("/ben/generate", json=payload)
    assert response.status_code == 200
    assert response.json() == {"response": "Mocked response"}

def test_ai_exception(monkeypatch):
    def mock_get_openai_response(prompt,system_prompt):
        raise Exception("OpenAI API error")

    monkeypatch.setattr(module, "get_openai_response", mock_get_openai_response)

    payload = {"prompt": "Hello, AI!"}

    response = client.post("/ben/generate", json=payload)
    assert response.status_code == 500
    assert response.json() == {"detail": "OpenAI API error"}
