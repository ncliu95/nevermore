from app.core.application import app
import httpx
from app.models.request_models import RequestJoke, RequestColor, RequestName

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

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

@app.post("/ben/filter")
async def ben_filter(data: RequestName):
    url = "https://api.sampleapis.com/csscolornames/colors"
    async with httpx.AsyncClient(timeout=10) as client:
        response = await client.get(url)
        response.raise_for_status()

    colors = response.json()
    search_term = data.name.lower()
    filtered = [c for c in colors if search_term in c.get("name", "").lower()]
    
    return {'filtered': filtered}

@app.post("/ben/add")
async def ben_add(data: RequestColor):
    url = "https://api.sampleapis.com/csscolornames/colors" 
    async with httpx.AsyncClient() as client:
        response = await client.post(url, json={"name": data.name, "hex": data.color})
        response.raise_for_status() 

    return response.json()