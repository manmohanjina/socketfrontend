import {Routes,Route} from "react-router-dom"
import Chat from "../component/chatApp/chat"
import Login from "../component/chatApp/login"
import Signup from "../component/chatApp/signup"
import JoinRoom from "../component/chatApp/joinRoom"
import CreateRoom from "../component/chatApp/createRoom"
import PrivateRoute from "./privateRoute"

export default function AllRoutes(){

return <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>} ></Route>
    <Route path="/createroom" element={<PrivateRoute><CreateRoom></CreateRoom></PrivateRoute>} ></Route>
    <Route path="/joinroom" element={<JoinRoom></JoinRoom>} ></Route>
    <Route path="/chat" element={<Chat/>} ></Route>
</Routes>
}