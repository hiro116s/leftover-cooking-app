import { connect } from 'react-redux';
import { addHisotry } from '../actions/AddHistoryAction';
import SelectedRecipesComponent from '../components/SelectedRecipesComponent';
import { AllState } from '../reducers/State';

const mapStateToProps = (state: AllState) => ({
    recipeIds: state.stackedRecipe.recipeIds
})

const mapDispatchToProps = (dispatch: any) => ({
    addHistory: (recipeIds: Array<number>) => dispatch(addHisotry(recipeIds))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectedRecipesComponent)
