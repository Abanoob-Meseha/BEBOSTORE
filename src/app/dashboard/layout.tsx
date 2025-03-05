import DashboardSubNav from "@/components/DashboardSubNav/DashboardSubNav";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
        <DashboardSubNav/>
        {children}
    </div>
  )
}

export default DashboardLayout ;