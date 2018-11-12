import { connect } from 'react-redux';
import { selectRecipe } from '../actions/RecipeSelectAction';
import RecipeSelect from '../components/RecipeSelect';
import { AllState } from '../reducers/State';

const mapStateToProps = (state: AllState) => ({
    selectedRecipeIds: state.selectedRecipe.recipeIds,
    stackedRecipeIds: state.stackedRecipe.recipeIds
})

const mapDispatchToProps = (dispatch: any) => ({
    selectRecipe: (recipeId: number) => dispatch(selectRecipe(recipeId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeSelect)
