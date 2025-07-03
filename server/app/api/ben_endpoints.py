from fastapi import APIRouter
from app.models.request_models import PromptRequest, PromptResponse
from fastapi import HTTPException
from app.services.openai_service import get_openai_response
from app.prompts.prompts import BEN_PROMPT, BEN_RESUME

router = APIRouter()

@router.get("/hello", tags=["hello"])
def get_hello_world():
    """
    Returns a simple Hello World message
    """
    return {"message": "Hello World"}


@router.post("/generate", response_model=PromptResponse)
async def generate_response(request: PromptRequest, system_prompt = BEN_PROMPT, system_resume = BEN_RESUME):
    try:
        response_text = get_openai_response(request.prompt, system_prompt,system_resume)
        return PromptResponse(response=response_text)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    