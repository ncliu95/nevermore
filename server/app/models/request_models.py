from pydantic import BaseModel
from typing import List, Literal

class Message(BaseModel):
    role: Literal["user", "assistant", "system"]
    content: str

class PromptRequest(BaseModel):
    messages: List[Message]

class PromptResponse(BaseModel):
    response: List[Message]
