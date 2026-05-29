import { Admin, Resource } from "react-admin";
import { EmployeeList } from "./employees/EmployeeList";

export const App = () => (
  <Admin>
    <Resource name="employees" list={EmployeeList} />
  </Admin>
);
