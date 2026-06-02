import {
  BooleanField,
  BooleanInput,
  Datagrid,
  DeleteButton,
  EditButton,
  FilterButton,
  List,
  NumberField,
  ReferenceField,
  SelectInput,
  TextField,
  TopToolbar,
} from "react-admin";
import { QuickCreateButton } from "./QuickCreateButton";

const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <QuickCreateButton />
  </TopToolbar>
);

const internFilters = [
  <SelectInput
    source="department"
    label="Département"
    key="department"
    choices={[
      { id: "Informatique", name: "Informatique" },
      { id: "Marketing", name: "Marketing" },
      { id: "RH", name: "RH" },
    ]}
    alwaysOn
  />,
  <BooleanInput
    key="renumeration"
    source="isRemunerate"
    label="Rémunéré"
    alwaysOn
  />,
];

export const InternList = () => (
  <List filters={internFilters} actions={<ListActions />}>
    <Datagrid rowClick="show">
      <TextField source="firstname" label="Prénom" />
      <TextField source="lastname" label="Nom" />
      <TextField source="email" label="Email" />
      <TextField source="department" label="Département" />
      <ReferenceField source="managerId" reference="employees" label="Manager">
        <TextField source="firstname" /> <TextField source="lastname" />
      </ReferenceField>
      <BooleanField source="isRemunerate" label="Rémunéré" />
      <NumberField
        source="remuneration"
        label="Rémunération"
        options={{ style: "currency", currency: "EUR" }}
      />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
