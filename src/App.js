import "./App.css";
import EmployeePage from "./components/EmployeePage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div>
      <h1>Employees App</h1>
      <div id="pages">
        <HomePage></HomePage>
        <EmployeePage></EmployeePage>
      </div>
    </div>
  );
}

export default App;
