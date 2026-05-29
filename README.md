# Employes Admin

Getting started with React Admin

### Exercise 1 — App Configuration

- Question 1.1 : What does the dataProvider represent in React-Admin? What is its role?
  The dataProvider is basically the bridge between React-Admin and our API. React-Admin doesn't know how to talk to a backend on its own, so the dataProvider handles that. It takes actions from the UI like listing, creating, editing or deleting and turns them into actual HTTP requests. We used jsonServerProvider because it works with json-server out of the box.

- Question 1.2 : What HTTP request is sent when the list loads?
  - When the list page opens, React-Admin sends a GET request like this: GET http://localhost:3002/employees?\_sort=id&\_order=ASC&\_start=0&\_end=5. The \_sort and \_order params handle sorting, and \_start with \_end handle pagination. All of that is done automatically by ra-data-json-server.
