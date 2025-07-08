
from dotenv import load_dotenv
from openai import OpenAI
import os
from typing import List

load_dotenv()

api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    raise ValueError("OPENAI_API_KEY not found in environment. Check your .env file.")

client = OpenAI(api_key=api_key)
#test
def get_openai_response(
    system_prompt: str,
    system_resume :str,
    conversation_history: List[str]
) -> str:
    try:
        #set up messages
        chat_messages = [{"role": "system", "content": system_prompt}]
        chat_messages.append({"role": "user", "content": system_resume})
        for i, msg in enumerate(conversation_history):
            role = "user" if i % 2 == 0 else "assistant"
            chat_messages.append({"role": role, "content": msg})

        response = client.chat.completions.create(
            
            model="gpt-4o-mini",
            messages=chat_messages,
            temperature=0.7,
            max_tokens=500,
        )
        
        ai_reply = response.choices[0].message.content.strip()

        updated_history = conversation_history + [ai_reply]
        return updated_history
    except Exception as e:
        print(f"OpenAI API error: {e}")
        raise
