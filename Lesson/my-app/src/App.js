import logo from './logo.svg';
import './App.css';


function Header(){
  return(
    <>
    <div>
<Title text="I am Header" paraph="lorem from header"/>
    </div>
    <p>Lorem lorem</p>
    </>
  )
}

function Footer(){
  return(
    <div>
      <Title text="I am Footer" paraph="lorem from Footer"/>
    </div>
  )
}

function Title(props){
  return(
<>
<h1>{props.text}</h1>
<p>{props.text}</p>
</>
  )
}


function App() {
  return (
    <div className="App">
      <Header/>
      Hello World
    <Footer/>
    </div>
  );
}

export default App;
