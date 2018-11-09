import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { MenuType } from './actions/SwitchMenuAction';
import HistoryList from './components/HistoryList';
import RecipeSelect from './components/RecipeSelect';
import IngredientsContainer from './containers/IngredientsContainer';
import MenuContainer from './containers/MenuContainer';
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
          this.props.menuType == MenuType.REFRIGERATOR ? <IngredientsContainer /> : <HistoryList />
        }
        <MenuContainer />
      </View>
    );
  }
}

export default connect(
  mapStateToProps
)(Home)
