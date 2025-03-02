import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "@/redux/slices/tasks/tasksSlice";
import navbarReducer from "@/redux/slices/navbar/navbarSlice";
import authReducer from "@/redux/slices/auth/authSlice";
import cartReducer from "@/redux/slices/cart/cartSlice";
import modalReducer from "@/redux/slices/modal/modalSlice"

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    navbar: navbarReducer,
    modal: modalReducer,
    auth: authReducer,
    cart: cartReducer,
  },
});
export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
