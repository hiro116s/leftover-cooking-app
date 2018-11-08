import { connect } from 'react-redux'
import MenuBar from '../components/MenuBar'
import { MenuType, switchMenu } from '../actions/SwitchMenuAction';
import { AllState } from '../reducers/State';

const mapStateToProps = (state: AllState) => ({
  menuType: state.menu.menuType
})

const mapDispatchToProps = (dispatch: any) => ({
  switchMenu: (menuType: MenuType) => dispatch(switchMenu(menuType))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuBar)
