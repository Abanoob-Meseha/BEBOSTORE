import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from "@/slices/tasks/tasksSlice"

export default configureStore({
  reducer: {
    tasks : tasksReducer
  },
})