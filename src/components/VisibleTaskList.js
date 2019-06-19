import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import TaskList from "./TaskList";
import * as actions from "../actionCreators/actionCreators";
import { getVisibleTodos, getIsFetching, getErrorMessage } from "../reducers";
import FetchError from "./FetchError";

class VisibleTaskList extends Component {
  // Fetch data from API as part of lifecycle hooks.
  componentDidMount() {
    this.fetchData(this.props.filter);
  }

  // Fetch data from API as part of lifecycle hooks.
  componentDidUpdate(prevProps) {
    if (prevProps.filter !== this.props.filter)
      this.fetchData(this.props.filter);
  }

  fetchData() {
    const { filter, fetchData } = this.props;
    fetchData(filter);
  }

  render() {
    const { toggleTodo, todos, isFetching, errorMessage } = this.props;
    if (isFetching && todos.length === 0) {
      return <p>Loading...</p>;
    }

    if (errorMessage && todos.length === 0) {
      return (
        <FetchError
          errorMessage={errorMessage}
          onRetry={() => this.fetchData()}
        />
      );
    }

    return (
      <TaskList
        todos={todos}
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
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
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
