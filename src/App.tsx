import Layout from "./components/Layout";
import Heroheader from "./components/Heroheader";
import { Route,Routes } from "react-router-dom";

function App() {
 
 
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Heroheader/>} />
        </Route>
      </Routes>
      </>
  )
}

export default App
