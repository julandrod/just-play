import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import {  CreateGame, Error, Games, SingleGame } from "./pages";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Games />} />
        <Route path=":gameId" element={<SingleGame />} />
        <Route path="create" element={<CreateGame />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
