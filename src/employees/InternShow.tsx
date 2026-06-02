import { Typography } from "@mui/material";
import {
  BooleanField,
  EmailField,
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
  useRecordContext,
} from "react-admin";
import { ManagerCard } from "./ManagerCard";

const InternShowLayout = () => {
  const record = useRecordContext();
  if (!record) return null;
  return (
    <SimpleShowLayout>
      <TextField source="firstname" label="Prénom" />
      <TextField source="lastname" label="Nom" />
      <EmailField source="email" label="Email" />
      <TextField source="department" label="Département" />
      <BooleanField source="isRemunerate" label="Rémunéré" />
      <NumberField
        source="remuneration"
        label="Rémunération"
        options={{ style: "currency", currency: "EUR" }}
      />
      <ReferenceField source="managerId" reference="employees" label="Manager">
        <TextField source="firstname" />
      </ReferenceField>
      <Typography variant="subtitle1" sx={{ mt: 2 }}>
        Fiche Manager
      </Typography>
      <ManagerCard />
    </SimpleShowLayout>
  );
};

export const InternShow = () => (
  <Show>
    <InternShowLayout />
  </Show>
);
