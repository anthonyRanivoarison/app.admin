import {
  BooleanField,
  CreateButton,
  Datagrid,
  DeleteButton,
  EditButton,
  EmailField,
  ExportButton,
  FilterButton,
  List,
  NumberField,
  SearchInput,
  SelectInput,
  TextField,
  TopToolbar,
} from "react-admin";

const departmentChoices = [
  { id: "Informatique", name: "Informatique" },
  { id: "Marketing", name: "Marketing" },
  { id: "RH", name: "RH" },
  { id: "Finance", name: "Finance" },
];

const employeeFilters = [
  <SearchInput key="search" source="q" alwaysOn />,
  <SelectInput
    key="department"
    source="department"
    label="Département"
    choices={departmentChoices}
  />,
];

const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton label="Ajouter un employé" />
    <ExportButton />
  </TopToolbar>
);

export const EmployeeList = () => (
  <List
    filters={employeeFilters}
    actions={<ListActions />}
    perPage={5}
    sort={{ field: "id", order: "ASC" }}
  >
    <Datagrid rowClick="show">
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
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
