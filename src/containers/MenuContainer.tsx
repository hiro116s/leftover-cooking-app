import { connect } from 'react-redux'
import MenuBar from '../components/MenuBar'
import { MenuType, switchMenu } from '../actions/SwitchMenuAction';
import { MenuState } from '../reducers/MenuReducer';

const mapStateToProps = (state: MenuState) => ({
  menuType: state.menuType
})

const mapDispatchToProps = (dispatch: any) => ({
  switchMenu: (menuType: MenuType) => dispatch(switchMenu(menuType))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuBar)
