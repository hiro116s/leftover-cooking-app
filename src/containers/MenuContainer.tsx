import { connect } from 'react-redux'
import MenuBar from '../components/MenuBar'
import { MenuType, toggleMenu } from '../actions';
import { MenuState } from '../reducers/MenuReducer';

const mapStateToProps = (state: MenuState) => ({
  menuType: state.menuType
})

const mapDispatchToProps = (dispatch: any) => ({
  toggleMenu: (menuType: MenuType) => dispatch(toggleMenu(menuType))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuBar)
