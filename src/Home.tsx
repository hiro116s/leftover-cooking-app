import React from 'react';
import { connect } from 'react-redux';
import { MenuType } from './actions/SwitchMenuAction';
import { View } from 'react-native';
import HistoryList from './components/HistoryList';
import IngredientList from './components/IngredientList';
import RecipeSelect from './components/RecipeSelect';
import { AllState } from './reducers/State';

interface HomeProps {
  menuType: MenuType
}

const mapStateToProps = (state: AllState) => ({
  menuType: state.menu.menuType
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
