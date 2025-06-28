from fastapi import FastAPI
from app.api.ben_endpoints import router as api_router

def create_application() -> FastAPI:
    application = FastAPI(
        title="Nevermore API",
        description="FastAPI server for the Nevermore project",
        version="0.1.0",
    )
    
    application.include_router(api_router, prefix="/api")
    
    return application

app = create_application()
