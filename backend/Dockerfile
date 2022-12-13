# Pull base image
FROM python:3.7
# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
WORKDIR /code
# Install dependencies
COPY requirements.txt /code/
RUN pip install --upgrade pip & pip install -r requirements.txt
# Copy project
COPY . /code/