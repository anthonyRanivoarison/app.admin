import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useCreate, useNotify, useRefresh } from "react-admin";

export const QuickCreateButton = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    managerId: "",
  });
  const [create, { isPending }] = useCreate();
  const refresh = useRefresh();
  const notify = useNotify();

  const handleSubmit = () => {
    create(
      "interns",
      { data: { ...form, managerId: parseInt(form.managerId) } },
      {
        onSuccess: () => {
          notify("Stagiaire créé avec succès");
          refresh();
          setOpen(false);
          setForm({ firstname: "", lastname: "", managerId: "" });
        },
        onError: () => notify("Erreur lors de la création", { type: "error" }),
      },
    );
  };

  return (
    <>
      <Button variant="contained" size="small" onClick={() => setOpen(true)}>
        Ajouter stagiaire
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Ajout un nouveau stagiaire</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 2 }}
        >
          <TextField
            label="Prénom"
            value={form.firstname}
            onChange={(e) => setForm({ ...form, firstname: e.target.value })}
          />
          <TextField
            label="Nom"
            value={form.lastname}
            onChange={(e) => setForm({ ...form, lastname: e.target.value })}
          />
          <TextField
            label="ID Manager"
            type="number"
            value={form.managerId}
            onChange={(e) => setForm({ ...form, managerId: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Annuler</Button>
          <Button
            onClick={handleSubmit}
            disabled={isPending}
            variant="contained"
          >
            {isPending ? <CircularProgress size={18} /> : "Créer"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
