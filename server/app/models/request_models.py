from pydantic import BaseModel
from typing import List

class PromptRequest(BaseModel):
    messages: List[str] = []

class PromptResponse(BaseModel):
    response: List[str]
