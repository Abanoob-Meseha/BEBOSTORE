import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "@/features/tasks/tasksSlice";
import navbarReducer from "@/features/navbar/navbarSlice";
import authReducer from "@/features/auth/authSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    navbar: navbarReducer,
    auth: authReducer,
  },
});
export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
