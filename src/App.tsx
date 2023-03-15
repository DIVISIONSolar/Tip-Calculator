import { useEffect, useState } from "react";
import Layout from "./pages/Layout";
import Loader from "./components/Loader";

function App() {
  //state for loader component
  const [loading, setLoading] = useState(true);

  //useEffect hook will render the loader on every refresh
  useEffect(() => {
    //setTimeOut function which will make the loader state false after 2 seconds/2000 miliseconds
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {
        //if the loader state is true it will render the LOADER component else it will render the layout page
        loading ? (
          //LOADER component
          <Loader />
        ) : (
          //LAYOUT page
          <Layout />
        )
      }
    </>
  );
}

export default App;
