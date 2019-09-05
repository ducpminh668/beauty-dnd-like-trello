import React, { Component } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? "Lightgreen" : "white")};
  display: flex;
  padding: 10px;
`;

const Handle = styled.div`
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 4px;
  margin-right: 8px;
`;

class Task extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provider, snapshot) => (
          <Container
            {...provider.draggableProps}
            ref={provider.innerRef}
            isDragging={snapshot.isDragging}
          >
            <Handle {...provider.dragHandleProps} />
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}

export default Task;
