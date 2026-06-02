import { Chip } from "@mui/material";
import { useRecordContext } from "react-admin";

export const DepartmentStats = () => {
  const employee = useRecordContext();
  const { total, isPending } = useGetList(
    "employees",
    {
      filter: { department: employee?.department, active: true },
      pagination: { page: 1, perPage: 1 },
    },
    { enabled: !!employee?.department },
  );

  if (isPending) return null;

  return (
    <Chip
      label={`Collègues actifs dans ${employee?.department} : ${(total ?? 1) - 1}`}
      color="info"
      variant="outlined"
      sx={{ mt: 1 }}
    />
  );
};
