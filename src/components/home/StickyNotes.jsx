import { useState } from "react";
import { useUserData } from "../../context/UserDataContext";

export default function StickyNotes() {
  const [newQuickTaskField, setnewQuickTaskField] = useState(false);
  const [newTask, setNewTask] = useState("");
  const { userData, addNewQuickTask, deleteQuickTask } = useUserData();

  const handleNewQuickTask = async (e) => {
    e.preventDefault();
    await addNewQuickTask(newTask);
    setNewTask("");
  };

  const handleDeleteTask = async (id) => {
    await deleteQuickTask(id);
  };

  const toggleNewQuickTaskDialogue = () => {
    setnewQuickTaskField((prev) => !prev);
  };

  return (
    <div
      id="Sticky-Notes"
      className="mt-6 bg-white p-6 rounded-2xl shadow-sm border border-warm"
    >
      <h3 className="text-lg font-medium text-gray-800 mb-4">Sticky Notes</h3>

      <div id="Notes-Section" className="space-y-3">
        {userData?.quickTasks && Object.keys(userData.quickTasks).length > 0 ? (
          Object.entries(userData.quickTasks).map(([id, task], index) => (
            <div
              key={id}
              className={`flex items-center justify-between border-l-4 p-3 rounded-r-lg ${
                index % 3 === 0
                  ? "border-yellow-300 bg-yellow-50"
                  : index % 3 === 1
                  ? "border-blue-300 bg-blue-50"
                  : "border-green-300 bg-green-50"
              }`}
            >
              <p className="text-sm text-gray-800">{task.description}</p>
              <i
                onClick={() => handleDeleteTask(id)}
                className="fa-solid fa-trash text-sm cursor-pointer text-red-400 hover:-translate-y-0.5 transition-transform"
              ></i>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500 italic">
            No sticky notes yet — add one below!
          </p>
        )}
      </div>

      {newQuickTaskField ? (
        <div id="Add-Note">
          <button
            onClick={toggleNewQuickTaskDialogue}
            className="w-full mt-4 py-2 text-sm rounded-xl text-red-white bg-red-400 text-white hover:bg-red-400/80 hover:text-white transition cursor-pointer"
          >
            X Cancel
          </button>
          <form className="flex gap-2" onSubmit={handleNewQuickTask}>
            <input
              type="text"
              id="Add-Sticky-Note-Field"
              placeholder="What have you got?"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="border border-warm w-full mt-4 py-2 px-2 text-sm rounded-lg text-gray-800 focus:outline-sage"
            />
            <button
              type="submit"
              className="mt-4 bg-sage text-white px-2 rounded-lg text-sm cursor-pointer hover:bg-sage/80 transition"
            >
              Add
            </button>
          </form>
        </div>
      ) : (
        <div id="Add-Note">
          <button
            onClick={toggleNewQuickTaskDialogue}
            className="w-full mt-4 py-2 text-sm text-white bg-sage rounded-xl hover:bg-sage/80 transition-colors cursor-pointer"
          >
            + Add Note
          </button>
        </div>
      )}
    </div>
  );
}
