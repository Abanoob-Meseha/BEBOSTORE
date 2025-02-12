import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { GrInProgress } from "react-icons/gr";
import { GrStatusInfo } from "react-icons/gr";

const TaskStatus = ({ status }: { status: string }) => {
    let bgColorClass = status == "Done" ? 'bg-green-500' : status == "InProgress" ? 'bg-yellow-500' :'bg-red-500' ;
  return (
    <div className={`flex items-center px-3 py-1 rounded-lg ${bgColorClass} gap-2`}>
      {status == "Done" ? (
        <IoCheckmarkDoneSharp />
      ) : status == "InProgress" ? (
        <GrInProgress />
      ) : (
        <GrStatusInfo />
      )}
      <p className="text-sm">{status}</p>
    </div>
  );
};

export default TaskStatus;
