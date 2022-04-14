import { Route, Routes } from 'react-router-dom';
import Booking from './Components/Booking/Booking';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import RoomDetails from './Components/Home/RoomDetails/RoomDetails';
import LogIn from './Components/LogIn/LogIn';
import RequireAuth from './Components/LogIn/RequireAuth/RequireAuth';
import SignUp from './Components/LogIn/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/booking" element={
          <RequireAuth>
            <Booking />
          </RequireAuth>
        }></Route>
        <Route path="/room/:roomId" element={<RoomDetails />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>

      </Routes>
    </div>
  );
}

export default App;
