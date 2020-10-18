import React from 'react';
import { connect } from 'react-redux';
import LeftNavBar from './LeftNavBar';

class LeftNavBarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isArrowOpen: true };
  }

  toggleArrow = () => {
    this.setState({ isArrowOpen: !this.state.isArrowOpen });
   };

  render() {
      return (
          <>
              <LeftNavBar isToggle={this.props.isToggle}
                toggleArrow={this.toggleArrow}
                isArrowOpen={this.state.isArrowOpen}
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

export default connect(mapStateToProps,{ })(LeftNavBarContainer);