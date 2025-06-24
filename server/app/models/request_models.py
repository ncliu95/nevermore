from pydantic import BaseModel


class RequestData(BaseModel):
    typeJoke: str
    setup: str
    punchline: str
