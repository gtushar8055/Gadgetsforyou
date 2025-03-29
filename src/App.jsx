import "./App.css";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsDetail from "./components/CardsDetail";
import Cards from "./components/Cards";
import {Routes , Route} from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path = '/' element = {<Cards/>}/>
        <Route path = '/cart/:id' element = {<CardsDetail/>}/>
      </Routes>
    </>
  );
}

export default App;
