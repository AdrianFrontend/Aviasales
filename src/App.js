import logo from "./img/main-logo.png";
import "./App.scss";
import Sorting from "./Components/Sorting/SortingContainer";
import Filters from "./Components/Filters/FiltersContainer";
import CardsList from "./Components/CardsList/CardsListContainer";

function App() {
	return (
		<div className="App">
			<div className="App__header">
				<img className="App__logo" src={logo} />
			</div>
			<div className="App__sidebar">
				<div className="App__Filters-wrapper">
					<Filters />
				</div>
			</div>
			<div className="App__main">
				<div className="App__Sorting-wrapper">
					<Sorting />
				</div>
				<div className="App__CardsList-wrapper">
					<CardsList />
				</div>
			</div>
		</div>
	);
}

export default App;
