import React from 'react';
import { connect } from 'react-redux';
import RecipeSelect from './components/RecipeSelect';
import { MenuType } from './actions/SwitchMenuAction';
import { MenuState } from './reducers/MenuReducer';
import { View } from 'react-native';
import HistoryList from './components/HistoryList';
import IngredientList from './components/IngredientList';

interface HomeProps {
  menuType: MenuType
}

const mapStateToProps = (state: MenuState) => ({
  menuType: state.menuType
})

class Home extends React.Component<HomeProps, {}> {
  render() {
    return (
      <View style={{flex: 1}}>
        {
          this.props.menuType == MenuType.MAIN ? <RecipeSelect /> :
          this.props.menuType == MenuType.REFRIGERATOR ? <IngredientList /> : <HistoryList />
        }
      </View>
    );
  }
}

export default connect(
  mapStateToProps
)(Home)
