from fastapi import APIRouter, HTTPException
from app.models.request_models import PromptRequest, PromptResponse
from app.services.openai_service import get_openai_response
from app.prompts.prompts import WILL_PROMPT, WILL_RESUME

router = APIRouter()

@router.post("/generate", response_model=PromptResponse)
async def generate_response(
    request: PromptRequest,
    system_prompt=WILL_PROMPT,
    system_resume=WILL_RESUME
    ):

    try:
        updated_conversation = get_openai_response(
        system_prompt,
        system_resume,
        request.messages,
        )
        return PromptResponse(response=updated_conversation)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/")
def read_root():
    return {"message": "Welcome to the Nevermore API"}
