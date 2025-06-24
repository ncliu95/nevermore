from fastapi.testclient import TestClient
from main import app 

client = TestClient(app)

def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Welcome to the Nevermore API"}

def test_add():
    response = client.post("/will/post", json={"typeJoke": "general", "setup": "test setup", "punchline": "test punchline"})
    assert response.status_code == 200
    data = response.json()

    assert "id" in data
    assert isinstance(data["id"], str)
    assert data["type"]== "general"
    assert data["setup"]== "test setup"
    assert data["punchline"] == "test punchline"
    