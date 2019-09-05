import React, { Component } from "react";
import styled from "styled-components";
import Task from "./task";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 260px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  background-color: ${props => (props.isDragingOver ? "skyblue" : "white")};
  transition background-color 0.2s ease;
  flex-grow: 1;
`;

export default class Column extends Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {(provider, snapshot) => (
            <TaskList
              {...provider.droppableProps}
              ref={provider.innerRef}
              isDragingOver={snapshot.isDraggingOver}
            >
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provider.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    );
  }
}
