from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI()


@app.get("/")
async def hello() -> JSONResponse:
    return JSONResponse(content={"message": "Hello, World!"})
