import { Box, TextField, Button, Typography, List } from "@mui/material";
import { useState } from "react";

export const SkillsTodo = () => {
  const [skill, setSkill] = useState("");
  const [skillset, setSkillSet] = useState([]);

  const addSkill = () => {
    setSkillSet((prvs) => {
      return [...prvs, skill];
    });
  };

  const deleteSkill = (item) => {
    setSkillSet((prvs) => {
      return prvs.filter((skill)=>skill!=item);
    });
  };

  console.log(skillset);
  return (
    <>
      <Typography variant="h2">Skills</Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          label="Enter your skill"
          variant="outlined"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        <Button sx={{ mx: 2 }} variant="contained" onClick={addSkill}>
          Add
        </Button>
      </Box>
      <ul style={{ listStyle: "none", display: "flex", gap: "50px"}}>
        {skillset.map((item) => {
          return (
          <li>
          <p>{item} <span style={{ cursor: 'pointer'}} onClick={()=>{deleteSkill(item)}}> X </span></p>
          
          </li>
        );
        })}
      </ul>
    </>
  );
};
