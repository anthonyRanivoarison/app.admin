import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource } from "react-admin";
import { EmployeeCreate } from "./employees/EmployeeCreate";
import { EmployeeEdit } from "./employees/EmployeeEdit";
import { EmployeeList } from "./employees/EmployeeList";
import { EmployeeShow } from "./employees/EmployeeShow";

const dataProvider = jsonServerProvider("http://localhost:3002");

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="employees"
      list={EmployeeList}
      edit={EmployeeEdit}
      create={EmployeeCreate}
      show={EmployeeShow}
    />
  </Admin>
);
