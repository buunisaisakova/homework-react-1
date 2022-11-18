import logo from './logo.svg';
import './App.css';


function AboutUs(){
  return(
    <div>
    <Title text="I am header"/>
    </div>
  )
}

function Title(){
  return <h1>Title</h1>
}
function App() {
  return (
    <div className="App">
     <AboutUs/>
    </div>
  );
}

export default App;
