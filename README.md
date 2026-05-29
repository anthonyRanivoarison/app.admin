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

### Exercise 3 — Create Employee

- Question 3.1 : What happens if you submit the form without filling in the first name?
  - A red error message shows up right under the field saying it's required. The form doesn't submit at all and no HTTP request is sent to the API. React-Admin handles this client-side using the required() validator we put on the field.
- Question 3.2 : What happens if you enter a salary of 500€?
  - React-Admin blocks the submission and shows an error message under the salary field saying the minimum is 1500€. That comes from the minValue(1500) validator. You can't create the employee until the value is valid.

### Exercise 4 — Edit Employee

- Question 4.1 : What HTTP method is used when saving a modification?
  - I checked the Network tab and it sends a PUT request, like PUT http://localhost:3002/employees/1, with the full employee JSON in the request body. ra-data-json-server uses PUT and sends all the data every time, not just what changed.
- Question 4.2 : When is useRecordContext() available? What does it return if the record isn't loaded yet?
  - It's only available inside a child component of a React-Admin context provider like Edit, Show, or a Datagrid row. If the data isn't loaded yet it returns undefined, which is why we check if (!record) return ... in our EmployeeTitle component before trying to read record.firstname.

### Exercise 5 — Show Page

- Question 5.1 : What is the difference between SimpleShowLayout and TabbedShowLayout?
  - SimpleShowLayout just displays all fields vertically in one section, no navigation needed. TabbedShowLayout organizes fields into clickable tabs, which is useful when you have a lot of fields to group by category. We used SimpleShowLayout since we only have 6 fields to show.
