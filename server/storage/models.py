from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from storage.database import Base

class User(Base):
    __tablename__="user"
    email=Column(String(length=100), primary_key=True,unique=True, )
    name=Column(String(length=100))
    password=Column(String(length=10))
    category=Column(String(length=10))