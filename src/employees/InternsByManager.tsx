import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { useGetList, useRecordContext } from "react-admin";
import { Link } from "react-router-dom";

export const InternsByManager = () => {
  const employee = useRecordContext();
  const { data, isPending, total } = useGetList(
    "interns",
    {
      filter: { managerId: employee?.id },
      pagination: { page: 1, perPage: 100 },
      sort: { field: "lastname", order: "ASC" },
    },
    { enabled: !!employee?.id },
  );

  if (isPending) return <Typography>Chargement des stagiaires...</Typography>;

  return (
    <>
      <Typography variant="h6" sx={{ mt: 2 }}>
        Stagiaires encadrés ({total ?? 0})
      </Typography>
      {!data || data.length === 0 ? (
        <Typography variant="body2" color="text.secondary">
          Aucun stagiaire rattaché à cet employé.
        </Typography>
      ) : (
        <List dense>
          {data.map((intern) => (
            <ListItem key={intern.id}>
              <ListItemText
                primary={
                  <Link to={`/interns/${intern.id}/show`}>
                    {intern.firstname} {intern.lastname}
                  </Link>
                }
                secondary={`${intern.department} — ${intern.isRemunerate ? `${intern.remuneration} €` : "Non rémunéré"}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};
