from datetime import datetime

def get_current_datetime():
    now = datetime.now()
    formatted_date = now.strftime("%Y-%m-%d %H:%M:%S")
    return f"Current date and time: {formatted_date}"
