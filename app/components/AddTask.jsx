"use client";
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import Modal from "./Modal";

const AddTask = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [newTaskValue, setNewTaskValue] = useState("");

  const handleSubmitNewTodo = (e) => {
    e.preventDefault();
    console.log(newTaskValue);
    setNewTaskValue("");
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full"
      >
        ADD NEW TASK <FaPlusCircle size={18} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className=" font-bold text-lg">Add New Task</h3>
          <div className="modal-action">
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <button type="submit" className="btn">
              SUBMIT
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
