import os
import uuid

from square.core.api_error import ApiError

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from square import Square
from square.environment import SquareEnvironment
from dotenv import load_dotenv

load_dotenv()
SQUARE_ACCESS_TOKEN = os.getenv("SQUARE_ACCESS_TOKEN")
SQUARE_LOCATION_ID = os.getenv("SQUARE_LOCATION_ID")

client = Square(
    environment=SquareEnvironment.SANDBOX,
    token=SQUARE_ACCESS_TOKEN,
)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/create-checkout") 
def create_checkout():
    idempotency_key = str(uuid.uuid4())
    try:
        response = client.checkout.payment_links.create(
            idempotency_key=idempotency_key,
            quick_pay={
                "name": "Chai Frappe",
                "price_money": {
                    "amount": 600,
                    "currency": "USD"
                },
                "location_id": SQUARE_LOCATION_ID
            }
        )
        url = response.payment_link.url
        preview_url = response.payment_link.long_url
        return {
            "checkoutUrl": url
        }
    except ApiError as e:
        return JSONResponse(status_code=e.status_code, content={"error": e.body})