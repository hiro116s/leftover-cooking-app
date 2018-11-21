import { connect } from 'react-redux';
import IngredientList from '../components/IngredientList';
import { AllState } from '../reducers/State';

const mapStateToProps = (state: AllState) => ({
    ingredients: state.ingredients.ingredients
})

export default connect(
    mapStateToProps
)(IngredientList)
