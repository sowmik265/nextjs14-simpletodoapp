import { FaPlusCircle } from "react-icons/fa";

const AddTask = () => {
  return (
    <div>
      <button className="btn btn-primary w-full">
        Add New Task <FaPlusCircle size={18} />
      </button>
    </div>
  );
};

export default AddTask;
