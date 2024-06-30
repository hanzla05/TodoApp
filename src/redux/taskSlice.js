import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

let taskId = 0; 

const slice = createSlice({
  name: 'taskManager',
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.tasks.push(action.payload);
      },
      prepare(task, priority) {
        return {
          payload: {
            id: taskId++,
            task,
            priority,
          },
        };
      },
    },
    setPriority: (state, action) => {
      const { id, priority } = action.payload;
      const taskToUpdate = state.tasks.find(task => task.id === id);
      if (taskToUpdate) {
        taskToUpdate.priority = priority;
      }
    },
    deleteTask: (state, action) => {
      const taskIdToDelete = action.payload;
      state.tasks = state.tasks.filter(task => task.id !== taskIdToDelete);
    },
  },
});

export const { addTask, setPriority, deleteTask } = slice.actions;
export default slice.reducer;
