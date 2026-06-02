import {
  BooleanField,
  EmailField,
  NumberField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import { DepartmentStats } from "./DepartmentStats";
import { InternsByManager } from "./InternsByManager";

export const EmployeeShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="firstname" label="Prénom" />
      <TextField source="lastname" label="Nom" />
      <EmailField source="email" label="Email" />
      <TextField source="department" label="Département" />
      <NumberField
        source="salary"
        label="Salaire"
        options={{ style: "currency", currency: "EUR" }}
      />
      <BooleanField source="active" label="Actif" />
      <DepartmentStats />
      <InternsByManager />
    </SimpleShowLayout>
  </Show>
);
