import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import TaskList from "./TaskList";
import * as actions from "../actionCreators/actionCreators";
import { getVisibleTodos } from "../reducers";

class VisibleTaskList extends Component {
  // Fetch data from API as part of lifecycle hooks.
  componentDidMount() {
    this.props.fetchData(this.props.filter);
  }

  // Fetch data from API as part of lifecycle hooks.
  componentDidUpdate(prevProps) {
    if (prevProps.filter !== this.props.filter)
      this.props.fetchData(this.props.filter);
  }

  render() {
    const { toggleTodo, ...rest } = this.props;
    return (
      <TaskList
        {...rest}
        onToggleTodo={toggleTodo} // Mapped explicitly because event and action creator names differ.
      />
    );
  }
}

// ownProps.match.params is a router related params.
const mapStateToProps = (state, ownProps) => {
  const filter = ownProps.match.params.filter || "all";
  return {
    todos: getVisibleTodos(state, filter),
    filter
  };
};

// Container component
// withRouter passes ownProps.match object (containing route data) to your mapStatetoProps and mapDispatchToProps.
VisibleTaskList = withRouter(
  connect(
    mapStateToProps,
    actions // shorthand mapDispatchToProps notation.
  )(VisibleTaskList)
);

export default VisibleTaskList;
