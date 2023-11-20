import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Task {
  id: string;
  title: string;
  finished: boolean;
  dateFinished?: string;
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: []
}

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<Task>) => {
      state.tasks = state.tasks.filter((task) => task.id != action.payload.id);
    },
    finishedTask: (state, action: PayloadAction<Task>) => {
      const updateTask: Task = {
        id: action.payload.id,
        title: action.payload.title,
        finished: true,
        dateFinished: new Date().toString()
      } 

      state.tasks = state.tasks.map((task) => {
        return task.id === action.payload.id ? updateTask : task;
      })

    }
  }
});

export const { addTask, removeTask, finishedTask } = taskSlice.actions;
export default taskSlice.reducer;
