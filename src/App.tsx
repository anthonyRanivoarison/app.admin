import { Admin, Resource } from "react-admin";
import dataProvider from "./dataProvider";
import { EmployeeCreate } from "./employees/EmployeeCreate";
import { EmployeeEdit } from "./employees/EmployeeEdit";
import { EmployeeList } from "./employees/EmployeeList";
import { EmployeeShow } from "./employees/EmployeeShow";
import { InternCreate } from "./employees/InternCreate";
import { InternEdit } from "./employees/InternEdit";
import { InternList } from "./employees/InternList";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="employees"
      list={EmployeeList}
      edit={EmployeeEdit}
      create={EmployeeCreate}
      show={EmployeeShow}
    />
    <Resource
      name="interns"
      list={InternList}
      edit={InternEdit}
      create={InternCreate}
    />
  </Admin>
);
