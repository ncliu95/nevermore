from dotenv import load_dotenv
from openai import OpenAI
import os
from typing import List, Dict

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
        chat_messages = [{"role": "system", "content": system_prompt}]
        chat_messages.append({"role": "system", "content": system_resume})
        chat_messages.extend(conversation_history)

        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=chat_messages,
            temperature=0.7,
            max_tokens=500,
        )
        
        ai_reply = response.choices[0].message.content.strip()

        updated_history = conversation_history + [{"role":"assistant","content":ai_reply}]
        return updated_history
    except Exception as e:
        print(f"OpenAI API error: {e}")
        raise
