import EmployeeList from "./EmployeeList";
import Header from "./Header";
import SearchBar from "./SearchBar";

function HomePage() {
  return (
    <div className="flexColumn" id="homePage">
      <Header></Header>
      <SearchBar></SearchBar>
      <EmployeeList></EmployeeList>
    </div>
  );
}

export default HomePage;
