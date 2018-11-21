import { connect } from 'react-redux';
import RecipeStack from '../components/RecipeStack';
import { addHisotry } from '../actions/AddHistoryAction';
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
)(RecipeStack)
