import sys, os
from fastapi.testclient import TestClient

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../../../")))
from main import app

client = TestClient(app)

def test_default():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Welcome to the Nevermore API"}
