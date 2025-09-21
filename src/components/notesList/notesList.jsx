import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { EditForm } from "./editNotes";

function NotesList({ data, onDelete, onEdit, success}) {
  const [selectedTodo, setSelectedTodo] = useState(null);

  return (
    <List>
      {data.map((item) => (
        <ListItem key={item.id}>
          <ListItemText
            primary={
              <Box sx={{ display: "flex" }}>
                <Typography component="div" variant="h6" sx={{ width: "30%" }}>{item.title}</Typography>
                <Button
                  sx={{ mx: 4 }}
                  variant="contained"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={() => {
                    onDelete(item.id);
                  }}
                >
                  Delete
                </Button>
                <Button
                  sx={{ mx: 4 }}
                  variant="contained"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={() => {
                    setSelectedTodo(item);
                  }}
                >
                  Edit
                </Button>
              </Box>
            }
            secondary={(!success && selectedTodo?.id === item.id) && <EditForm item={item} onEdit={onEdit}  />}
          />
        </ListItem>
      ))}
    </List>
  );
}
export default NotesList;
