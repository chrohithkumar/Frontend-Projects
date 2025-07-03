import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Register from "./Amazon/FrontPage/SignIn/Register";
// import Login from "./Amazon/FrontPage/SignIn/Login";
// import Header from "./Amazon/FrontPage/Header";

//import AtoZ from "./KidsApp/AtoZ/AtoZ";
//import Numbers from "./KidsApp/Numbers/Numbers";
import BookingDate from "./TirupatiBooking/BookingDate";
import BookingForm from "./TirupatiBooking/BookingForm";
import RoomList from "./TirupatiBooking/RoomList";

//import Additem from "./Adding/Additem";

//import UseCallback from "./usecallback/UseCallBack";


function App() {
  return (
    <>
    <Router>
      <Routes>
        {/* <Route path='/' element={<Header/>}/>
        <Route path="/Register" element={<Register/>} />
        <Route path="/Login" element={<Login/>} /> */}
        <Route path='/' element={<BookingDate/>}></Route>
        <Route path="/RoomBookingForm" element={<BookingForm/>}></Route>
        <Route path='/RoomsList' element={<RoomList/>}></Route>
      </Routes>
    </Router>
   
    {/* <AtoZ/>
    <Numbers/> */}
    {/* <UseCallback/> */}
    {/* <Additem/> */}
    {/* <Check/> */}
    {/* <FileUploader/> */}
    {/* <FModel/> */}
    {/* <Expensivecalculate/> */}
    {/* <Countbyuseref/> */}
    {/* {<BookingForm/>} */}
    {/* <BookingDate/> */}
     </>
  );
}

export default App;
