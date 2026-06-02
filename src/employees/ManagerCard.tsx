import { Card, CardContent, Chip, Link, Typography } from "@mui/material";
import { useGetOne, useRecordContext } from "react-admin";

export const ManagerCard = () => {
  const intern = useRecordContext();
  const { data, isPending, error } = useGetOne(
    "employees",
    { id: intern?.managerId },
    { enabled: !!intern?.managerId },
  );

  if (isPending) return <Typography>Chargement du manager...</Typography>;
  if (error) return <Typography color="error">Manager introuvable.</Typography>;
  if (!data) return null;

  return (
    <Card variant="outlined" sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant="h6">
          {data.firstname} {data.lastname}
        </Typography>
        <Typography variant="body2">Département : {data.department}</Typography>
        <Link href={`mailto:${data.email}`}>{data.email}</Link>
        <br />
        <Chip
          label={data.active ? "Actif" : "Inactif"}
          color={data.active ? "success" : "default"}
          size="small"
          sx={{ mt: 1 }}
        />
      </CardContent>
    </Card>
  );
};
