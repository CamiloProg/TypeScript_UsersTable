// import { ObjetosLiterales } from "./typescript/ObjetosLiterales"
// import { TiposBasicos } from "./typescript/TiposBasicos"
import { Contador } from "./components/Contador";
import { ContadorHook } from "./components/ContadorHook";
import { Login } from "./components/Login";
import { Users } from "./components/Users";

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introduccion a TS with React</h1>
      <hr />
      {/* <TiposBasicos/> */}
      {/* <Contador/> */}
      {/* <ContadorHook/> */}

      {/* <Login /> */}
      <Users />
    </div>
  );
};
export default App;
