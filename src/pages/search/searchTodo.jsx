import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export const SearchTodo = () => {

const [result, setResult] = useState(null);
const [id, setId] = useState("")

  const onSearch = () => {
    axios.get(`http://127.0.0.1:8000/notes/list/${id}/`).then((response) => {
      var searchData = response.data;
      setResult(JSON.stringify(searchData.data));
    });
  };
  return (
    <>
      <Box
        sx={{
          mt: 50,
          display: "flex",
          justifyContent: "center",
        }}
        component={"form"}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <TextField
          label="ID"
          value={id}
          onChange={(event) => {
            setId(event.target.value)}
          }
        />
        <Button
          sx={{ mx: 2 }}
          type="submit"
          variant="contained"
          onClick={onSearch}
        >
          Search
        </Button>
      </Box>
      <TextField
      sx={{
          mt: 5, display: "flex",
          justifyContent: "center",}}
        multiline
        minRows={4}
        defaultValue={result}
        slotProps={{
          htmlInput: {
            readOnly: true,
          },
        }}
        variant="outlined"
        fullWidth
      />
    </>
  );
};
