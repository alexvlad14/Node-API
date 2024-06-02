# About Node Api
This project is with Node.js, Express and MongoDB.

## API Features
The application can create, read, update and delete courses in a database.


## Setup

To run this application, you will need Node.js installed on your system. <br>

Download Node.js from (https://nodejs.org/en) and install it. <br>

Clone this repository to your local machine and navigate to the project directory. <br>


## Install the required dependencies by running the following command:

### npm install

## Usage

Start the server by running the following command: <br>

### npm run serve

This will start the server on port 3000. You can access the API endpoints using a tool like Postman or send HTTP requests using a tool like cURL.


## Testing with Postman 


Download Postman from (https://www.postman.com/) and install it.

### Create a New Collection:

Open Postman and create a new collection to organize your API requests.

### Create and Test Endpoints:

### GET /courses

Method: GET <br>
URL: http://localhost:3000/courses <br>
Click "Send" to retrieve all courses. <br>

### GET /courses/{id}

Method: GET <br>
URL: http://localhost:3000//courses/0 (replace 0 with an actual course ID) <br>
Click "Send" to retrieve a specific course by ID. <br>

### POST /courses

Method: POST <br>
URL: http://localhost:3000/courses <br>
Body (raw, JSON): <br>
{ <br>
  "title": "Course1", <br>
  "description": "Course Description", <br>
  "status": "Published", <br>
  "is_premium": false <br>
} <br>
Click "Send" to create a new course. <br>

### PUT /courses/{id}

Method: PUT <br>
URL: http://localhost:3000/courses/0 (replace 0 with an actual course ID) <br>
Body (raw, JSON): <br>

{ <br>
  "title": "Course2", <br>
  "description": "Updated Description", <br>
  "status": "Pending", <br>
  "is_premium": true <br>
} <br>

Click "Send" to update the course. <br>

### DELETE /courses/{id} 

Method: DELETE <br>
URL: http://localhost:3000/courses/0 (replace 0 with an actual course ID) <br>
Click "Send" to delete the course. <br>



