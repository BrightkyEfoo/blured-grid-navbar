import "./App.css";
import Navbar from "./components/navbar";
function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="body">
        {[...Array(10).keys()].map((el) => {
          return <div key={el}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, porro ex. Ducimus fugit ipsum vitae iusto aliquid quas perspiciatis? Illum facilis, aliquid itaque quae exercitationem asperiores maxime impedit! At, sequi.
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
