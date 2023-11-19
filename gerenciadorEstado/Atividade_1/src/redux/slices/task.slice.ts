import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Task {
  id: string;
  task: string;
  finished: boolean;
  dateFinished?: Date;
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [{id: "1", task: "do", finished: false}],
}

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    newTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<Task>) => {
      state.tasks.filter((task) => task.id != action.payload.id);
    },
    finishedTask: (state, action: PayloadAction<Task>) => {
      state.tasks.map((task) => {
        return task.id === action.payload.id ? action.payload : task;
      })
    }
  }
});

export const { newTask, removeTask, finishedTask } = taskSlice.actions;
export default taskSlice.reducer;
