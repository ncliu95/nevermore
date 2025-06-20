from app.core.application import app

from fastapi import FastAPI
from pydantic import BaseModel
import httpx


class RequestData(BaseModel):
    name: str
    color: str

class RequestName(BaseModel):
    name: str


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Nevermore API"}

@app.post("/ben-filter")
async def ben_filter(data: RequestName):
    url = "https://api.sampleapis.com/csscolornames/colors"
    async with httpx.AsyncClient(timeout=10) as client:
        response = await client.get(url)
        response.raise_for_status()

    colors = response.json()
    search_term = data.name.lower()
    filtered = [c for c in colors if search_term in c.get("name", "").lower()]
    
    return {'filtered': filtered}

@app.post("/ben-add")
async def ben_add(data: RequestData):
    url = "https://api.sampleapis.com/csscolornames/colors" 

    async with httpx.AsyncClient() as client:
        response = await client.post(url, json={"name": data.name, "hex": data.color})
        response.raise_for_status() 

    return response.json()


