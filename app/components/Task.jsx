"use client";
import { deleteTodo, editTodo } from "@/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Modal from "./Modal";

const Task = ({ task }) => {
  const router = useRouter();

  const [openModalEdit, setOpenModalEdit] = useState(false);

  const [openModalDelete, setOpenModalDelete] = useState(false);

  const [taskToEditValue, setTaskToEditValue] = useState(task.text);

  const handleSubmitEditTodo = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskToEditValue,
    });
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteTask = async (id) => {
    await deleteTodo(id);
    setOpenModalDelete(false);
    router.refresh();
  };

  return (
    <tr key={task.id}>
      <td className="w-full">{task.text}</td>
      <td className="flex gap-5">
        <FaEdit
          onClick={() => setOpenModalEdit(true)}
          cursor="pointer"
          className=" text-blue-500"
          size={21}
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className=" font-bold text-lg">Edit Task</h3>
            <div className="modal-action">
              <input
                value={taskToEditValue}
                onChange={(e) => setTaskToEditValue(e.target.value)}
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
        <RiDeleteBin2Fill
          onClick={() => setOpenModalDelete(true)}
          cursor="pointer"
          className=" text-red-500"
          size={21}
        />
        <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
          <h3 className=" text-lg">
            Are you sure, you want to delete this task?
          </h3>
          <div className="modal-action">
            <button onClick={() => handleDeleteTask(task.id)} className="btn">
              Yes
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
