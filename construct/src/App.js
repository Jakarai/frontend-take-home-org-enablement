import Header from "./components/Header";
import Footer from "./components/Footer";
import EvModal from "./components/EvModal";

function App() {
  return (
    <div  id='root-container'>
     
        <Header className="App-header" />
        <EvModal className="root-container" />
        <Footer />

    </div>
  );
}

export default App;
