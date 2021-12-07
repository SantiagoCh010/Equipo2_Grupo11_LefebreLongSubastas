import './bootstrap.css';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import Login from './components/Login.js';


function App() {
  return (
    <div className="App">
      <NavBar />      
      <div className="d-flex p-2 col-example">
        <div>
          <h3>Bienvenidos</h3>
          <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, 
            repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, 
            repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, 
            repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, 
            repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
            <h3>¿Quienes somos?</h3>
          <p className= "text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, 
            repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, 
            repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, 
            repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, 
            repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
        </div>
        <div><Login/></div>        
      </div>         
      <Footer />
    </div>
  );
}



export default App;
