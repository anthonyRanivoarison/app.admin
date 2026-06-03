import {
  BooleanInput,
  Create,
  NumberInput,
  SelectInput,
  SimpleForm,
  TextInput,
  email,
  minValue,
  required,
} from "react-admin";
import { departmentChoices } from "./departmentChoices";

export const EmployeeCreate = () => (
  <Create redirect="list" title="Ajouter un employé">
    <SimpleForm>
      <TextInput
        source="firstname"
        label="Prénom"
        validate={required("Le prénom est obligatoire")}
      />
      <TextInput
        source="lastname"
        label="Nom"
        validate={required("Le nom est obligatoire")}
      />
      <TextInput
        source="email"
        label="Email"
        validate={[
          required("L'email est obligatoire"),
          email("Email invalide"),
        ]}
      />
      <SelectInput
        source="department"
        label="Département"
        choices={departmentChoices}
        validate={required("Le département est obligatoire")}
      />
      <NumberInput
        source="salary"
        label="Salaire (€)"
        validate={[
          required("Le salaire est obligatoire"),
          minValue(1500, "Le salaire minimum est 1 500 €"),
        ]}
      />
      <BooleanInput source="active" label="Actif" defaultValue={true} />
    </SimpleForm>
  </Create>
);
