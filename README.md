# Employes Admin

Getting started with React Admin

### Exercise 1 — App Configuration

- Question 1.1 : What does the dataProvider represent in React-Admin? What is its role?
  The dataProvider is basically the bridge between React-Admin and our API. React-Admin doesn't know how to talk to a backend on its own, so the dataProvider handles that. It takes actions from the UI like listing, creating, editing or deleting and turns them into actual HTTP requests. We used jsonServerProvider because it works with json-server out of the box.

- Question 1.2 : What HTTP request is sent when the list loads?
  - When the list page opens, React-Admin sends a GET request like this: GET http://localhost:3002/employees?\_sort=id&\_order=ASC&\_start=0&\_end=5. The \_sort and \_order params handle sorting, and \_start with \_end handle pagination. All of that is done automatically by ra-data-json-server.

### Exercise 2 — Employee List

- Question 2.1 : What does rowClick="edit" do on the Datagrid?
  - It makes the whole row clickable. When you click anywhere on a row it redirects you to the edit form for that employee. Without it, clicking a row does nothing. In exercise 5 we switched it to rowClick="show" to go to the detail page instead.
- Question 2.2 : What happens when you set perPage to 2?
  - The list only shows 2 employees per page and the pagination controls at the bottom activate. React-Admin automatically adjusts the request to \_start=0&\_end=2 for page 1, then \_start=2&\_end=4 for page 2 and so on.
