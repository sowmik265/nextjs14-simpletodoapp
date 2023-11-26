"use client";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Modal from "./Modal";

const Task = ({ task }) => {
  const [openModalEdit, setOpenModalEdit] = useState(false);

  const [openModalDelete, setOpenModalDelete] = useState(false);

  const [taskToEdit, setTaskToEdit] = useState(task.text);

  const handleSubmitEditTodo = () => {};

  return (
    <tr key={task.id}>
      <td className="w-full">{task.text}</td>
      <td className="flex gap-5">
        <FaEdit cursor="pointer" className=" text-blue-500" size={21} />
        <RiDeleteBin2Fill
          cursor="pointer"
          className=" text-red-500"
          size={21}
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className=" font-bold text-lg">Add New Task</h3>
            <div className="modal-action">
              <input
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
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
      </td>
    </tr>
  );
};

export default Task;
