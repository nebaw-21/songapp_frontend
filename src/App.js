import { BrowserRouter, Routes, Route,Navigate  } from "react-router-dom";
import { useDispatch} from 'react-redux';
import { useEffect } from "react";
import Home from "./Home";
import Login from "./Auth/Login";
import Registration from "./Auth/Registration";
import AdminPanel from "./Admin/AdminPanel";
import DisplaySong from "./Admin/SongManagment/DisplaySong";
import CreateSong from "./Admin/SongManagment/CreateSong";
import EditSong from "./Admin/SongManagment/EditSong";
import NotFound from "./Components/NotFound";
import SingleSong from "./SingleSong";
import {getSpecificUser} from "./Redux/actions/getSpecificUser";

function App() {
  const token = localStorage.getItem('token');
  const isAuthenticated = !!token;
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getSpecificUser(token));
    }
  }, [token]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" />}  />
        <Route path="/register" element={!isAuthenticated ? <Registration /> : <Navigate to="/" />}  />
        <Route path="/admin" element={isAuthenticated ? <AdminPanel /> : <Navigate to="/" />} />
        <Route path="/displaySong" element={<DisplaySong />} />
        <Route path="/createSong" element={<CreateSong />} />
        <Route path="/editSong/:id" element={<EditSong />} />
        <Route path="/singleSong/:id" element={<SingleSong />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
