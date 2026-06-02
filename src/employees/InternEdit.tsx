import {
  BooleanInput,
  Edit,
  email,
  NumberInput,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { useWatch } from "react-hook-form";
import { InternTitle } from "./InternTitle";
import { departmentChoices } from "./departementChoices";

const RemunerationInput = () => {
  const isRemunerate = useWatch({ name: "isRemunerate" });
  return (
    <NumberInput
      source="remuneration"
      label="Rémunération (€)"
      validate={
        isRemunerate ? required("La rémunération est obligatoire") : undefined
      }
      disabled={!isRemunerate}
    />
  );
};

const ManagerReferenceInput = () => {
  const department = useWatch({ name: "department" });
  return (
    <ReferenceInput
      source="managerId"
      reference="employees"
      filter={{ department, active: true }}
    >
      <SelectInput
        label="Manager"
        optionText={(record) => `${record.firstname} ${record.lastname}`}
        validate={required("Le manager est obligatoire")}
      />
    </ReferenceInput>
  );
};

export const InternEdit = () => (
  <Edit title={<InternTitle />}>
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
      <BooleanInput source="isRemunerate" label="Rémunéré" />
      <RemunerationInput />
      <ManagerReferenceInput />
    </SimpleForm>
  </Edit>
);
