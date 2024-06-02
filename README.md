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
}
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



