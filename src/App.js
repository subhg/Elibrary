import { Outlet } from 'react-router-dom';
import {NavBar,Footer} from "./components/Index";



function App() {


  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;



   {/* border-2 border-sky-500 */}
           {/* <div className="flex flex-wrap justify-between"> */}

        {/* <Card /> */}
        {/* <Card />
        <Card />
        <Card /> */}
      {/* </div> */}