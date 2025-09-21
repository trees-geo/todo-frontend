import { Box } from "@mui/material";
import { useReducer } from "react";

const initialState = {
  fname: "",
  lname: "",
  email: "elv@ff.ca",
};

const ReducerForm = () => {
  const reducerFunc = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case "CHANGE_FNAME":
        return {
          ...state,
          fname: payload,
        };
      case "CHANGE_LNAME":
        return {
          ...state,
          lname: payload,
        };
      case "CHANGE_EMAIL":
        return {
          ...state,
          email: payload,
        };
      default:
        return state;
    }
  };

  const [formData, dispatch] = useReducer(reducerFunc, initialState);

  const handleOnChange = (event, type) => {
    const { value: payload } = event.target;
    dispatch({ type, payload });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.table(formData)
  }

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="fname">First name:</label>
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          value={formData.fname}
          onChange={(event) => handleOnChange(event, "CHANGE_FNAME")}
        />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input
          type="text"
          id="lname"
          name="lname"
          value={formData.lname}
          onChange={(event) => handleOnChange(event, "CHANGE_LNAME")}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="text"
          id="lname"
          name="email"
          value={formData.email}
          onChange={(event) => handleOnChange(event, "CHANGE_EMAIL")}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </Box>
  );
};

export default ReducerForm;
