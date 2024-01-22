import EmployeeList from "./EmployeeList";
import Header from "./Header";
import SearchBar from "./SearchBar";

function HomePage() {
  return (
    <div>
      <Header></Header>
      <SearchBar></SearchBar>
      <EmployeeList></EmployeeList>
    </div>
  );
}

export default HomePage;
