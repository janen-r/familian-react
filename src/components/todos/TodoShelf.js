import React from "react";
import uuid from 'react-uuid'
import TodoCard from "./TodoCard";

const TodoShelf = ({entries}) => {
    return (
        <div>
            {entries.map(({text}, index) => (
                <span key={uuid()}>
            <TodoCard id={index}>
              {text}
            </TodoCard>
          </span>
            ))}
        </div>
    );
};

export default TodoShelf;
