import "./App.css";
import Index from "./components/Home";
import Login from "./components/Login";

function App() {
  return <Login />;
}

export default App;
export const Home = () => <Index></Index>;
