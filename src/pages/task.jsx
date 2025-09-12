import Navbar from "../components/navbar";
import { useState, useEffect, useRef } from "react";
import { UseModal } from "../../ModalContext.jsx";

const Tasks = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Sort By");
  const { openModal } = UseModal();
  const dropDownRef = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const options = ["Sort by deadline", "Sort by priority"];
  return (
    <div className="bg-cream min-h-screen">
      <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-warm sticky z-50">
        <Navbar />
      </div>
      <main id="Main-Content" className="max-w-4xl mx-auto px-6 py-8 space-y-6">
        <div id="Task-Tool" className="w-full flex space-x-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="You forgot what to do, didn't you?"
              className="w-full bg-white rounded-2xl p-4 pr-10 shadow-sm border border-warm focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent text-txtLight"
            />
            <i className="fa-solid fa-magnifying-glass absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
          </div>
          <button
            onClick={openModal}
            className="w-48 bg-sage/80 p-4 text-white rounded-2xl font-medium hover:bg-sage/60 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            Add a new task
          </button>
        </div>
        <div
          id="Recent-Task"
          className="bg-white rounded-2xl shadow-sm border border-warm p-6"
        >
          <div
            id="Task-Title"
            className="flex items-center justify-between mb-4"
          >
            <h3 className="text-lg font-medium text-gray-800">Your Tasks</h3>
            <div className="relative inline-block w-48" ref={dropDownRef}>
              <button
                onClick={() => setOpen(!open)}
                className="w-full cursor-pointer flex items-center justify-between border border-warm rounded-xl py-2 px-6 text-sm text-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
              >
                <span className="truncate text-gray-600 font-medium">
                  {selected}
                </span>
                <span className="ml-2 flex items-center justify-center flex-shrink-0">
                  <i
                    className={`fa-solid fa-chevron-down fa-xs transform transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </span>
              </button>
              {open && (
                <ul className="absolute z-10 mt-2 w-full bg-white border border-warm rounded-xl shadow-sm">
                  {options.map((option, idx) => (
                    <li
                      key={idx}
                      onClick={() => {
                        setSelected(option);
                        setOpen(false);
                      }}
                      className="cursor-pointer px-6 py-2 text-sm text-gray-600 hover:bg-cream rounded-xl"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="space-y-3" id="Tasks-List">
            <div className="flex items-center justify-between p-3 rounded-xl hover:bg-cream">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <span className="text-gray-700">Wake Up</span>
              </div>
              <span className="text-xs text-gray-500">Today</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl hover:bg-cream">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <span className="text-gray-700">Finish a WIP</span>
              </div>
              <span className="text-xs text-gray-500">Tomorrow</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl hover:bg-cream">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="text-gray-700">Help God mow the lawn</span>
              </div>
              <span className="text-xs text-gray-500">Completed</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tasks;
