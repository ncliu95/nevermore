from pydantic import BaseModel

class PromptRequest(BaseModel):
    prompt: str

class PromptResponse(BaseModel):
    response: str

class RequestJoke(BaseModel):
    typeJoke: str
    setup: str
    punchline: str

class RequestColor(BaseModel):
    name: str
    color: str

class RequestName(BaseModel):
    name: str