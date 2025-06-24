import sys, os
from fastapi.testclient import TestClient

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../../../")))
from main import app

client = TestClient(app)

def test_default():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Welcome to the Nevermore API"}

def test_add():
    response = client.post("/ben/add", json={"name": "Black", "color": "#000000"})
    assert response.status_code == 200
    data = response.json()

    assert "id" in data
    assert isinstance(data["id"], int)
    assert data["name"]== "Black"
    assert data["hex"]== "#000000"

def test_filter():
    response = client.post("/ben/filter", json={"name": "red"})
    assert response.status_code == 200

    matches = response.json().get("filtered", [])
    for color in matches:
         assert "red" in color["name"].lower()