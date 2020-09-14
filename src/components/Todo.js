import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./Todo.css";

export class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card className="root">
        <CardContent>
          <Typography>{this.props.descripcion}</Typography>
          <Typography>{this.props.name}</Typography>
          <Typography>{this.props.status}</Typography>
          <Typography>
            {new Date(this.props.dueDate).toLocaleDateString()}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
