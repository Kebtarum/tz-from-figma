import React from 'react';
import { connect } from 'react-redux';
import TasksList from './TasksList';


class TasksListContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth };
  }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
   };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
   }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
   } 

  render() {
    console.log(this.state.windowWidth)
      return (
          <>
              <TasksList list={this.props.list} 
                windowWidth={this.state.windowWidth}
              />
          </>
      )
  }
}

const mapStateToProps = (state) => {
  return {
      list: state.listPage.listData
  }
}

export default connect(mapStateToProps,{ })(TasksListContainer);
