from fastapi import APIRouter

router = APIRouter()

@router.get("/hello", tags=["hello"])
def get_hello_world():
    """
    Returns a simple Hello World message
    """
    return {"message": "Hello World"}
