import os
import uuid

from square.core.api_error import ApiError

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from square import Square
from square.environment import SquareEnvironment
from dotenv import load_dotenv
from pydantic import BaseModel
from fastapi import Body

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

class CartItem(BaseModel):
    name: str
    amount: int
    qty: str

@app.post("/create-checkout")
async def create_checkout(items: list[CartItem] = Body(...)):
    try:
        idempotency_key = str(uuid.uuid4())
        line_items = [
            {
                "name": item.name,
                "quantity": item.qty,
                "base_price_money": {
                    "amount": item.amount,
                    "currency": "USD"
                }
            }
            for item in items
        ]
        response = client.checkout.payment_links.create(
            idempotency_key = idempotency_key,
            order={
                "location_id": SQUARE_LOCATION_ID,
                "line_items": line_items
            }
        )
        return {"checkout_url": response.payment_link.url}
    except ApiError as e:
        return JSONResponse(status_code=e.status_code, content={"error": e.body})