import React from 'react';
import { connect } from 'react-redux';
import { getListItem } from '../../../../redux/listReducer';
import TaskDetails from './TaskDetails';
import { Redirect, useParams, withRouter } from 'react-router-dom';
import { compose } from 'redux';


class TaskDetailsContainer extends React.Component {

    componentDidMount() {

        let taskId  = this.props.match.params.taskId
        console.log(taskId);
        this.props.getListItem(taskId);
        // if(!listItem){
        //     return <Redirect to={'/'} /> 
        // }
        // this.props.getUsers(savedToken);
    }

  render() {

      return (
          <>
              <TaskDetails listItem={this.props.listItem} 
        
              />
          </>
      )
  }
}

const mapStateToProps = (state) => {
  return {
      listItem: state.listPage.currentItem
  }
}

// export default connect(mapStateToProps,{ getListItem })(TaskDetailsContainer);

export default compose(
    connect(mapStateToProps,{ getListItem }),
    withRouter
    )(TaskDetailsContainer);