import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

export const EditForm = ({item, onEdit}) => {
    const [note, setNote] = useState({
        id: item.id,
        title: item.title || "",
        status: item.status
    })

  return (
    <Box
      component={"form"}
      onSubmit={(e)=>{
        e.preventDefault()

      }}
      sx={{
        mt: 1,
        p: 1,
        mx: 4,
        borderRadius: 1,
        bgcolor: "grey.200",
        "&:hover": {
          bgcolor: "grey.300",
        },
      }}
    >
      <TextField
        sx={{ mx: 2, my: 2, bgcolor: "white" }}
        disabled
        label="id"
        value={item.id}
      />
      <TextField
        sx={{ mx: 2, my: 2, bgcolor: "white" }}
        label="Title"
        value={note.title}
        onChange={(event)=>{
            const { value } = event.target;
            setNote(prevState=> ({
                ...prevState,
                title: value
            }))
        }}
      />
      <TextField
        sx={{ mx: 2, my: 2, bgcolor: "white" }}
        label="status"
        value={`${note.status}`}
      />
      <TextField
        sx={{ mx: 2, my: 2, bgcolor: "white" }}
        disabled
        label="date"
        defaultValue={item.started_at}
      />
      <Button sx={{ mt: 3 }} type="submit" variant="contained" onClick={() => onEdit(note)}>
        Submit
      </Button>
    </Box>
  );
};
