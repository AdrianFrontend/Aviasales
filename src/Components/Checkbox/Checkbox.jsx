import "./Checkbox.scss";
import PropTypes from "prop-types";

const Checkbox = ({ title, checked, onChangeFunc }) => {
	return (
		<label className="Checkbox">
			<input type="checkbox" checked={checked} onChange={(event) => onChangeFunc(event.target.checked)} />
			<span className="Checkbox-custom"></span>
			<span className="Checkbox-title">{title}</span>
		</label>
	);
};

Checkbox.propTypes = {
	title: PropTypes.string,
	checked: PropTypes.bool,
	onChangeFunc: PropTypes.func,
};

export default Checkbox;
