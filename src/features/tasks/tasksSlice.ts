import { TaskType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [] as TaskType[]
}

export const TasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        // Add your reducers here
        addTask : (state , action: { payload: TaskType })=>{
            state.tasks.push(action.payload)
        }
    }
})

export const {addTask} = TasksSlice.actions ;
export default TasksSlice.reducer ;