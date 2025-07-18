import { Routes, Route } from "react-router";
import Layout from "./Layout";
const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Layout />} />
    </Routes>
  );
};

export default App;
