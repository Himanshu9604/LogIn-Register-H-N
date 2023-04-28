import './App.css';
import Child from './Child/Child';
// import LogIn from './LogIn/LogIn';
// import Register from './Register/Register';
function getData() {
  alert('hi');
}
function getData2() {
  alert('hi2');
}

function App() {
  return (
    <div className="App">
     {/* <Register/>
     <LogIn/> */}
        <Child  data={getData}
        data2={getData2}  />
       
         
    </div>
  );
}

export default App;
