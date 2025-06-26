import sys, os
from fastapi.testclient import TestClient

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../../../")))
from main import app

client = TestClient(app)

def test_default():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Welcome to the Nevermore API"}


def test_add_joke():
    response = client.post("/will/post", json={"typeJoke": "general", "setup": "test setup", "punchline": "test punchline"})
    assert response.status_code == 200
    data = response.json()

    assert "id" in data
    assert isinstance(data["id"], str)
    assert data["type"]== "general"
    assert data["setup"]== "test setup"
    assert data["punchline"] == "test punchline"
    