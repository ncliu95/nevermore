
from pydantic import BaseModel

class RequestData(BaseModel):
    name: str
    color: str

class RequestName(BaseModel):
    name: str
