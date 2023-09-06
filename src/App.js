import logo from "./img/main-logo.png";
import "./App.scss";
import Sorting from "./Components/Sorting/SortingContainer";
import Filters from "./Components/Filters/FiltersContainer";
import CardsList from "./Components/CardsList/CardsListContainer";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function App({ error = false }) {
	console.log(error);
	return (
		<div className="App">
			<div className="App__header">
				<img className="App__logo" src={logo} />
			</div>
			{error ? (
				<div className="error">Что-то случилось... Попробуйте позже</div>
			) : (
				<>
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
				</>
			)}
		</div>
	);
}

App.propTypes = {
	error: PropTypes.bool,
};

const mstp = (state) => ({
	error: state.tickets.error,
});

export default connect(mstp)(App);
