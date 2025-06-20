from app.core.application import app
from pydantic import BaseModel
import httpx

@app.get("/")
def read_root():
    return {"message": "Welcome to the Nevermore API"}

class RequestData(BaseModel):
    typeJoke: str
    setup: str
    punchline: str

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

@app.post("/will-post")
async def will_post(data: RequestData):
    url = "https://api.sampleapis.com/jokes/goodJokes" 

    async with httpx.AsyncClient() as client:
        response = await client.post(url, json={"type":data.typeJoke,"setup": data.setup, "punchline": data.punchline})
        response.raise_for_status() 

    return response.json()