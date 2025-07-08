from app.core.application import app
from app.api import ben_endpoints
from app.api import will_endpoints

import httpx

from fastapi.middleware.cors import CORSMiddleware

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(ben_endpoints.router, prefix="/ben")
app.include_router(will_endpoints.router, prefix="/will")
    
@app.get("/")
def read_root():
    return {"message": "Welcome to the Nevermore API"}

