import "./App.css";
import DemoAxios from "./components/DemoAxios";
import DemoFetch from "./components/DemoFetch";

function App() {
  return (
    <div className='App'>
      <DemoFetch />
      <DemoAxios />
    </div>
  );
}

export default App;
