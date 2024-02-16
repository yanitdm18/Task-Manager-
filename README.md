# Task-Manager-
full stack application project 
Project Name: Task Manager
Description:
Task Manager is a full-stack web application designed to help users organize their tasks and manage their time effectively. Users can create an account, log in, and start adding tasks to their dashboard. They can categorize tasks, set deadlines, mark tasks as completed, and prioritize them based on urgency.
Stretch Goals:

-Email notifications for upcoming task deadlines.
-Task sharing and collaboration with other users.
-Task statistics and analytics.
-Dark mode toggle for the user interface.
-Integration with third-party calendar applications.

MYP Features 
-User authentication and authorization.
-CRUD operations for tasks.
-Task categorization and deadline setting.
-Mark tasks as completed and prioritize them.
-Error handling and feedback to users.
ERD LINK: https://www.figma.com/file/oKdovZHb7SIA3t0CGbTzUI/Untitled?type=design&node-id=0%3A1&mode=design&t=3Hwb3x3mypIKhpxt-1
In this ERD: 
-Each User has a unique _id (Object ID) as the primary key and attributes username, email, and password.
-Each Task also has a unique _id as the primary key and attributes userId (which references the _id of the User it belongs to), name, category, deadline, and completed.
The relationship between User and Task is one-to-many (1:M), as one User can have multiple Tasks, but each Task belongs to only one User.
FEATURES
Create Task: Show how users can add new tasks to their dashboard. Demonstrate the form for entering task details such as name, category, and deadline. Upon submission, verify that the task is added to the database.
Update Task: Demonstrate the ability to edit existing tasks. Show how users can modify task details such as name, category, and deadline, and verify that the changes are reflected in the database.
Delete Task: Show how users can delete tasks from their dashboard. Upon deletion, verify that the task is removed from the database.
Mark Task as Completed: the functionality to mark tasks as completed. Show how the completion status is updated in the database

