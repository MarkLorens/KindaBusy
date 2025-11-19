import { UseModal } from "../../context/ModalContext";
import { useUserData } from "../../context/UserDataContext";

const TaskCard = () => {
  const { userData } = useUserData();
  const { openModal } = UseModal();
  return (
    <div
      id="Today-Task"
      className="bg-white rounded-2xl shadow-sm border border-warm p-6"
    >
      <div id="Task-Title" className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-gray-800">Today's Tasks</h3>
        <button
          className="text-sage text-xl font-bold hover:text-sage/80 transition-colors cursor-pointer"
          onClick={openModal}
        >
          +
        </button>
      </div>
      {userData?.tasks && Object.keys(userData.tasks).length > 0 ? (
        Object.entries(userData.tasks).map(([id, task]) => (
          <div id="Task-Items" key={id} className="space-y-4">
            <div key={id} className="flex items-center space-x-4 p-3">
              <input
                type="checkbox"
                className="w-5 h-5 text-sage rounded border-gray-300"
              />
              <span className="flex-1 text-gray-700">{task.description}</span>
              <span className="text-xs text-gray-500 bg-warm/50 px-2 py-1 rounded-full">
                {task.priorityLevel}
              </span>
            </div>
          </div>
        ))
      ) : (
        <div>
          <p>No task at hand.</p>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
