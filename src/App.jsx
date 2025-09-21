import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import NotesList from "./components/notesList/notesList";

function App() {
  const [spinner, setSpinner] = useState(true);
  const [data, setData] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/notes/list/")
      .then(({ data }) => {
        // console.log(data)
        setData(data.data);
        setSpinner(false);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:8000/notes/list/${id}/`).then(() => {
      axios
        .get("http://127.0.0.1:8000/notes/list/")
        .then(({ data }) => {
          console.log(data);
          setData(data.data);
        })
        .catch((e) => console.log(e));
    });
    // setData(prev => prev.filter(item=> item.id !== id))
  };

  const onEdit = (item) => {
    console.log(">>>>", item)
    axios.put(`http://127.0.0.1:8000/notes/list/${item.id}/`, {title: item.title, status:item.status}).then(() => {
      axios
        .get("http://127.0.0.1:8000/notes/list/")
        .then(({ data }) => {
          setData(data.data);
          setSuccess(true)
        })
        .catch((e) => {
          console.log(e);
        });
    });
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        {spinner ? (
          <CircularProgress />
        ) : (
          <NotesList data={data} onDelete={handleDelete} onEdit={onEdit} success={success}/>
        )}
      </Box>
    </>
  );
}

export default App;

// 0
// :
// {id: 1, title: 'Learn Django', status: true, started_at: '2025-09-18T01:41:31.601999Z'}
// 1
// :
// {id: 2, title: 'Learn React JS', status: true, started_at: '2025-09-18T01:41:47.545153Z'}
// 2
// :
// {id: 4, title: 'Go to Costco', status: false, started_at: '2025-09-18T01:50:56.583513Z'}
// 3
// :
// {id: 5, title: 'Buy Strawberry Cheesecake', status: false, started_at: '2025-09-18T01:51:29.385523Z'}
// 4
// :
// {id: 6, title: 'Return Creamie', status: true, started_at: '2025-09-18T01:51:48.715946Z'}
// 5
// :
// {id: 7, title: 'Dont buy Coca cola', status: false, started_at: '2025-09-18T01:52:24.494416Z'}
// 6
// :
// {id: 9, title: 'Go to BMO', status: false, started_at: '2025-09-18T01:54:03.770197Z'}
