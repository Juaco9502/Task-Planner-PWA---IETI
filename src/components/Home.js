import React from "react";
import Drawer from "./Drawer";
import { TodoList } from "./TodoList";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

export class Home extends React.Component {
  render() {
    return (
      <div className="id">
        <Drawer />
        <TodoList
          todoList={
            localStorage.getItem("items") === null
              ? []
              : JSON.parse(localStorage.getItem("items"))
          }
        />
        <Fab
          color="primary"
          aria-label="add"
          href="/new-task"
          className="fab"
          style={{
            position: "absolute",
            right: "0px",
            bottom: "0",
            margin: "30px"
          }}
        >
          <AddIcon />
        </Fab>
      </div>
    );
  }
}
