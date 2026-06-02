import { useRecordContext } from "react-admin";

export const InternTitle = () => {
  const record = useRecordContext();
  if (!record) return null;
  return (
    <span>
      Modifier : {record.firstname} {record.lastname}
    </span>
  );
};
