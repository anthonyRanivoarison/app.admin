import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource } from "react-admin";
import { EmployeeCreate } from "./employees/EmployeeCreate";
import { EmployeeEdit } from "./employees/EmployeeEdit";
import { EmployeeList } from "./employees/EmployeeList";
import { EmployeeShow } from "./employees/EmployeeShow";
import { InternCreate } from "./employees/InternCreate";
import { InternEdit } from "./employees/InternEdit";
import { InternList } from "./employees/InternList";

const dataProvider = jsonServerProvider(import.meta.env.VITE_JSON_SERVER_URL);

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
