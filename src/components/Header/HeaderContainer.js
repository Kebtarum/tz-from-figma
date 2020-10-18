import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { onToggle } from '../../redux/leftNavBarReducer';
import { addToDo } from '../../redux/listReducer';

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup = () => {
    this.setState({ showPopup: !this.state.showPopup });
   };


  render() {
      return (
          <>
              <Header 
              isToggle={this.props.isToggle}
              onToggle={this.props.onToggle}
              showPopup={this.state.showPopup}
              togglePopup={this.togglePopup}
              addToDo={this.props.addToDo}
              />
          </>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    isToggle: state.leftNavBar.isToggle,
    
  }
}

export default connect( mapStateToProps,{ onToggle, addToDo })(HeaderContainer);