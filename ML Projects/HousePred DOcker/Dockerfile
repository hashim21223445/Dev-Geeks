FROM python:3.14.0-alpine3.22 
COPY . /app
WORKDIR /app
RUN pip install -r requirements.txt
EXPOSE $PORT
CMD guincorn --workers=4 --bind 0.0.0.0:$PORT app:app
```