from pydantic import BaseModel
from typing import Optional, List, Union
from queries.pool import pool
from datetime import date
# from queries.post import PostOut
# from queries.deliveries import DevliveriesOut


class ProduceIn(BaseModel):
    quantity: int
    weight: int
    description: str
    image_url: str
    exp_date: date
    is_decorative: bool
    is_available: bool


class ProduceOut(ProduceIn):
    produce_id: int
    quantity: int
    weight: int
    description: str
    image_url: str
    exp_date: date
    is_decorative: bool
    is_available: bool
    price: float
    owner_id: int
    posts: List[PostsOut]
    deliveries: List[DeliveriesOut]


class ProduceRepository:
    pass