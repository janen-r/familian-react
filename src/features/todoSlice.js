import {createSlice} from "@reduxjs/toolkit";

// Get Tasks from Local Storage
const setInitialState = () => {
  // const json = localStorage.getItem('todos');

 const query = new URLSearchParams(window.location.search); 
 if(query.get('relations')) 
    {
    const queryRelationNames = query.get('relations').split('+');
      return {
        entries: queryRelationNames.map(v=> { return {"text": v, "isDone": false} }) // JSON.parse(json)
      }
    } else {
    return {
      entries: []
    };
  }
}


export const todoSlice = createSlice({
  name: "todos",
  initialState: setInitialState,
  reducers: {
    addTodoEntry: (state, action) => {
      state.entries.push({ text: action.payload, isDone: false });
      localStorage.setItem('todos', JSON.stringify(state.entries));
    },
    removeEntry: (state, action) => {
      state.entries.splice(action.payload, 1);
      localStorage.setItem('todos', JSON.stringify(state.entries));
    },
    toggleEntryDone: (state, action) => {
      state.entries[action.payload].isDone = !state.entries[action.payload].isDone;
      localStorage.setItem('todos', JSON.stringify(state.entries));
    }
  }
});

export const { addTodoEntry, removeEntry, toggleEntryDone} = todoSlice.actions;
export default todoSlice.reducer;

// EOF