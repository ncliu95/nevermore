from app.core.application import app
from app.api import ben_endpoints
from app.api import will_endpoints

import httpx

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)


app.include_router(ben_endpoints.router, prefix="/ben")
app.include_router(will_endpoints.router, prefix="/will")
    
@app.get("/")
def read_root():
    return {"message": "Welcome to the Nevermore API"}

