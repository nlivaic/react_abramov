import React from "react";
import { connect } from "react-redux";
import { inputTask } from "../actionCreators/actionCreators";

// Both container and presentational component.
let TaskInput = ({ dispatch }) => {
  let taskInput;
  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter next task"
          ref={node => {
            taskInput = node;
          }}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => {
              dispatch(inputTask(taskInput.value));
              taskInput.value = "";
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

TaskInput = connect()(TaskInput);

export default TaskInput;
