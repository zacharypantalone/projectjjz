# User
## As a User I can
- View the Landing Page
  - GET "/"

- View the Register Page
  - GET "/register"

- Register a new account
  - POST "/users"?

- View the Login Page
  - GET "/login"

- Login to existing account
  - GET "/users/dashboards/:id

- View the User dashboard
  - GET "/users/dashboards/:id

- View the Quiz Page
  - GET "/users/quizzes/:id"

- Take the Quiz
  - POST "/users/quizzes/:id"???

- Retake a quiz
  - GET "/quizzes/:id/new"????
  - Would also have to post to erase the past quiz results

- View the articles page
  - GET "/users/articles/:id"

- View the scheduling page
  - GET "/users/schedules/:id"

- Create a new appointment with a mentor
  - POST "/users/schedules/create(?):id/:id

- Delete an appointment with a mentor
  - POST "/users/schedules/delete??

- Logout from current session
  - GET "/"
  - Also clear cookies?


 ________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________ 
  


# Mentors
## As a Mentor I can
- Register a new account
    - Maybe for now/ GET "/mentors"

- Login to an existing account
  - GET "/mentors/dashboards/:id"
  
- View the Mentors dashboard 
  - GET "/mentors/dashboards/:id"

- View the Mentor schedule page
  - GET "/mentors/schedules/:id"

- Set availability
  - POST "/mentors/schedules/create???

- Edit availability
  - POST "/mentors/schedules/edit???
  
- Logout from current session
  - GET "/"
  - Also clear cookies