"use client"; // This must be a Client Component

import { Provider } from "react-redux";
import store from "../redux/store/index";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
