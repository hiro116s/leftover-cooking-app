import { connect } from 'react-redux';
import HistoryList from '../components/HistoryList';
import { AllState } from '../reducers/State';

const mapStateToProps = (state: AllState) => ({
    recipeHistories: state.recipeHistory.histories
})

export default connect(
    mapStateToProps
)(HistoryList)
