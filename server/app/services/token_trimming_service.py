import tiktoken
from typing import List, Dict

encoding = tiktoken.encoding_for_model("gpt-4o-mini")

def count_tokens(text: str) -> int:
    return len(encoding.encode(text))


def trim_conversation_history(history: List, max_tokens: int) -> List:
    trimmed = []
    total_tokens = 0

    for msg in reversed(history):
        msg_tokens = len(encoding.encode(msg.content))
        if total_tokens + msg_tokens > max_tokens:
            break
        trimmed.insert(0, msg)
        total_tokens += msg_tokens

    return trimmed