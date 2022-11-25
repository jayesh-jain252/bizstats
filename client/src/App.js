import { Routes, Route, Link } from "react-router-dom";
import { Landing, Error, Dashboard, Login } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/landing" element={<Landing />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
}

export default App;
