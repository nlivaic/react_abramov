import React from "react";
import TaskInput from "./TaskInput";
import VisibleTaskList from "./VisibleTaskList";
import Footer from "./Footer";

const TaskApp = () => {
  return (
    <div>
      <TaskInput />
      <VisibleTaskList />
      <Footer />
    </div>
  );
};

export default TaskApp;
