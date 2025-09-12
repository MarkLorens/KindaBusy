// ModalContext.jsx
import { createContext, useContext, useState, useRef, useEffect } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    function handleClickOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeModal]);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div
            ref={modalRef}
            className="bg-white rounded-2xl max-w-4xl w-full shadow-lg border border-warm space-y-6"
          >
            <div className="px-8 py-6">
              <div id="Task-Description" className="space-y-2">
                <label className="text-sm text-gray-800 font-medium block mb-4">
                  Task Description
                </label>
                <textarea
                  className="w-full py-3 pl-4 border border-gray-300 rounded-lg resize-none"
                  rows={4}
                  placeholder="What needs doing?"
                />
              </div>
              <div id="Task-Particulars" className="grid grid-cols1 gap-6">
                <div id="Due-Date" className="space-y-2 flex-1">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-800"
                  >
                    Task Due
                  </label>
                  <div>
                    <input
                      type="date"
                      id="Date"
                      name="date"
                      className="w-full px-4 py-3 border border-warm rounded-xl focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/20 pr-10"
                      value={dueDate}
                      onChange={(e) => setDueDate(e.target.value)}
                    />
                  </div>
                </div>
                <div id="Task-Priority" className="space-y-2">
                  <label
                    htmlFor="Priority"
                    className="block text-sm font-medium text-gray-800"
                  >
                    Priority Level
                  </label>
                  <div className="flex space-x-4">
                    <div className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="Priority" className="w-4 h-4" />
                      <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                        Low
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="Priority" className="w-4 h-4" />
                      <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                        Medium
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="Priority" className="w-4 h-4" />
                      <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full">
                        High
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="Actions"
              className="bg-cream px-8 py-6 border-t border-warm rounded-b-2xl"
            >
              <div className="flex items-center justify-between">
                <button
                  onClick={closeModal}
                  className="px-6 py-3 border border-sage text-sage rounded-xl hover:bg-sage/10 transition-colors font-medium cursor-pointer"
                >
                  Close
                </button>
                <button className="px-8 py-3 bg-sage text-white rounded-xl hover:bg-sage/80 transition-colors font-medium cursor-pointer">
                  + Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
