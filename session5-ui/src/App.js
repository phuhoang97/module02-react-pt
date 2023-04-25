import "./App.css";
import DemoAntd from "./components/DemoAntd";
import DemoBootstrap from "./components/DemoBootstrap";
import DemoMui from "./components/DemoMui";

function App() {
  return (
    <div className='App'>
      <DemoBootstrap />
      <DemoAntd />
      <DemoMui />
    </div>
  );
}

export default App;
