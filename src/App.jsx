import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Buttons from "./Components/Main/Buttons/Buttons";
import Players from "./Components/Main/Players/Players";
import Selected from "./Components/SelectedPlayers/Selected";
import Subscribe from "./Components/Subscribe/Subscribe";
import Footer from "./Components/Footer/Footer";

function App() {
  const [credit, setCredit] = useState(0);
  const [show, setShow] = useState('A');
  const [players, setPlayers] = useState([]);
  const [selected, setSelected] = useState([]);
  const [selectedP, setSelectedP] = useState(0);

  const notify = () => toast("Successfully claimed coins!");
  const notify1 = () => toast("Not enough coins!");

  const handleShow1 = () => {
    setShow('A');
  };

  const handleShow2 = () => {
    setShow('B');
  };

  useEffect(() => {
    fetch('players.json')
      .then(res => res.json())
      .then(data => setPlayers(data));
  }, []);

  const addCredit = () => {
    setCredit(credit + 6000000);
    notify();
  };


  const handleCredit = (biddingPrice, name, player) => {
    if (biddingPrice > credit) {
      notify1();
    } else if (selected.some(selectedPlayer => selectedPlayer.name === name)) {
      toast(`${name} is already purchased!`);
    } else if (selected.length >= 6) {
      toast("You can only select up to 6 players!");
    } else {
      const newCredit = credit - biddingPrice;
      setCredit(newCredit);
      toast(`${name} is purchased successfully`);
      setSelected((prevSelected) => [...prevSelected, player]);
      setSelectedP((prev) => prev + 1);
    }
  };


  const handleRemove = (name) => {
    const remainingPlayers = selected.filter(pl => pl.name !== name);
    setSelected(remainingPlayers);
    setSelectedP(remainingPlayers.length);
  };

  const handleAddMore = () => {
    if (selected.length >= 6) {
      toast("You can only select up to 6 players!");
    } else {
      handleShow1(); // Show available players
    }
  };

  return (
    <>
      <div className="max-w-5xl mx-auto py-8">
        <Header credit={credit} />
        <Hero addCredit={addCredit} notify={notify} />
        <Buttons handleShow1={handleShow1} handleShow2={handleShow2} selectedP={selectedP} show={show} />

        {
          show === 'A' && <Players handleCredit={handleCredit} players={players} />
        }

        {
          show === 'B' && <Selected selected={selected} handleRemove={handleRemove} handleAddMore={handleAddMore} />
        }

        <Subscribe></Subscribe>

      </div>

      <Footer></Footer>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
    </>
  );
}

export default App;
