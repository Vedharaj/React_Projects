import './App.css';
import Navbar from  './compounts/navbar'
import Card from  './compounts/card'
import Data from './data'

function App() {
  const card = Data.map(i => {
    return(
      <Card
        key={i.id}
        {...i}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <div className="card-container">
        {card}
      </div>
    </div>
  );
}

export default App;
