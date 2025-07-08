from pydantic import BaseModel

class PromptRequest(BaseModel):
    prompt: str
    message: List[str] = []

class PromptResponse(BaseModel):
    response: str
