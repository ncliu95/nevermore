from dotenv import load_dotenv
from openai import OpenAI
import os
from typing import List, Dict
from app.utilities.datetime_service import get_current_datetime
from app.utilities.token_trimming_service import trim_conversation_history

MAX_INPUT_TOKENS = 1200 

load_dotenv()

api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    raise ValueError("OPENAI_API_KEY not found in environment. Check your .env file.")

client = OpenAI(api_key=api_key)

def get_openai_response(
    system_prompt: str,
    system_resume :str,
    conversation_history: List[Dict[str,str]]
) -> List[Dict[str,str]]:
    try:
        #set up messages
        chat_messages = [{"role": "system", "content": f"{system_prompt}\n\n{system_resume}\n\n{get_current_datetime()}"}]
        trimmed_conversation_history=trim_conversation_history(conversation_history, MAX_INPUT_TOKENS)
        chat_messages.extend(trimmed_conversation_history)


        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=chat_messages,
            temperature=0.7,
            max_tokens=500,
        )
        
        ai_reply = response.choices[0].message.content.strip()

        updated_history = trimmed_conversation_history + [{"role":"assistant","content":ai_reply}]
        return updated_history
    except Exception as e:
        print(f"OpenAI API error: {e}")
        raise
