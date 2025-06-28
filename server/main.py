from app.core.application import app
from app.models.request_models import RequestJoke
from app.api import ben_endpoints

import httpx

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)


app.include_router(ben_endpoints.router, prefix="/ben")


@app.post("/will/post")
async def will_post(data: RequestJoke):
    url = "https://api.sampleapis.com/jokes/goodJokes" 

    async with httpx.AsyncClient() as client:
        response = await client.post(url, json={"type":data.typeJoke,"setup": data.setup, "punchline": data.punchline})
        response.raise_for_status() 

    return response.json()
    
@app.get("/")
def read_root():
    return {"message": "Welcome to the Nevermore API"}

