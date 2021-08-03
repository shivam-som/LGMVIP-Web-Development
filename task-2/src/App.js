import { useEffect, useState } from "react";
import Cards from "./Components/Cards";
import "./App.css";
import Header from "./Components/header";
import Loading from "./Components/Loading";

function App() {
  const getUsersData = "https://reqres.in/api/users?page=1";

  const [userData, setUserData] = useState([]);
  const [load, setLoad] = useState(true);
  const [btn, setBtn] = useState(false);
  const getUsersWithFetch = async () => {
    try {
      const response = await fetch(getUsersData);
      const jsonFetchedData = await response.json();
      setUserData(jsonFetchedData);
      console.log(jsonFetchedData.data);
    } catch (e) {
      console.log(e);
      setLoad(false);
    }
  };
  useEffect(() => {
    getUsersWithFetch();
  }, []);

  const btnC = () => {
    getUsersWithFetch();
    var cbtn = !btn;
    setBtn(cbtn);
  };

  return (
    <div className="App">
      <Header />
      <button className="p-2 fs-2 bg-warning rounded-1" onClick={btnC} style={{ margin: "2rem auto", color:"red", border:"none" }}>
        Get Users
      </button>
      <br />
      {btn ? load ? <Cards users={userData.data} /> : <Loading /> : null}
    </div>
  );
}

export default App;
