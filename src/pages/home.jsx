import Calendar from "../components/Calendar.jsx";
import Navbar from "../components/Navbar.jsx";
import { UseModal } from "../context/ModalContext.jsx";
import ProfilePic from "../lib/assets/Uto.jpg";
import HoF1 from "../lib/assets/KindaBusy.PNG";
import HoF2 from "../lib/assets/SMI-Group-Logo.png";
import HoF3 from "../lib/assets/ggmen.png";
import { doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../firebase.js";
import { useEffect, useState } from "react";

const Home = () => {
  const { openModal } = UseModal();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(
      doc(db, "users", auth.currentUser.uid),
      (docsnap) => {
        if (docsnap.exists()) {
          setData(docsnap.data());
          setLoading(false);
        }
      }
    );
    return () => unsub();
  }, []);

  if (loading) {
    return <p> Loading... </p>;
  }
  return (
    <div className="bg-cream">
      <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-warm sticky z-50">
        <Navbar />
      </div>
      <main id="Main-Content" className="max-w-7xl mx-auto px-6 py-8">
        <div id="Main-Grid" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div id="Profile-Section" className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-warm">
              <div id="Main-Profile" className="text-center mb-6">
                <div id="Profile-Title" className="relative inline-block">
                  <img
                    src={ProfilePic}
                    alt="profile picture"
                    className="w-24 h-24 rounded-full border-4 border-sage mx-auto"
                  ></img>
                  <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-sage text-white rounded-full flex items-center justify-center hover:bg-sage/80 transition-colors cursor-pointer">
                    <i className="fa-solid fa-camera fa-sm"></i>
                  </button>
                </div>
                <h2 className="text-xl font-medium text-gray-800 mt-4">
                  {data.profile.username}
                </h2>
                <p className="text-gray-600 text-sm">{data.profile.title}</p>
                <p className="text-gray-500 text-sm mt-1">
                  {data.profile.occupation}
                </p>
              </div>
              <div id="Profile-Particulars" className="space-y-4">
                <div
                  id="Profile-Email"
                  className="flex items-center space-x-3 text-gray-600"
                >
                  <i className="fa-solid fa-envelope"></i>
                  <span>{data.profile.contact}</span>
                </div>
                <div
                  id="Profile-Location"
                  className="flex items-center space-x-3 text-gray-600"
                >
                  <i className="fa-solid fa-location-dot"></i>
                  <span>{data.profile.location}</span>
                </div>
              </div>
              <div id="Profile-Edit" className="border-t border-warm mt-6 pt-6">
                <div className="flex space-x-3">
                  <button className="flex-1 bg-sage text-white py-2 px-4 rounded-xl text-sm font-medium cursor-pointer hover:bg-sage/80 transition-colors">
                    Edit Profile
                  </button>
                  <button className="p-2 border border-warm rounded-xl hover:bg-warm transition-colors cursor-pointer">
                    <i className="fa-solid fa-share-nodes text-gray-600"></i>
                  </button>
                </div>
              </div>
            </div>
            <div
              id="Sticky-Notes"
              className="mt-6 bg-white p-6 rounded-2xl shadow-sm border border-warm"
            >
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Sticky Notes
              </h3>

              <div id="Notes-Section" className="space-y-3">
                {data?.quickTasks && Object.keys(data.quickTasks).length > 0 ? (
                  Object.entries(data.quickTasks).map(([id, task], index) => (
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
                      <p className="text-sm text-gray-800">
                        {task.description}
                      </p>
                      <i className="fa-solid fa-trash text-sm cursor-pointer text-red-400 hover:-translate-y-0.5 transition-transform"></i>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500 italic">
                    No sticky notes yet — add one below!
                  </p>
                )}
              </div>

              <div id="Add-Note">
                <button className="w-full mt-4 py-2 text-sm border border-warm rounded-xl text-gray-800 hover:bg-warm transition-colors cursor-pointer">
                  + Add Note
                </button>
              </div>
            </div>
          </div>
          <div id="Main-Dashboard" className="lg:col-span-2 space-y-6">
            <div
              id="Today-Task"
              className="bg-white rounded-2xl shadow-sm border border-warm p-6"
            >
              <div
                id="Task-Title"
                className="flex items-center justify-between mb-6"
              >
                <h3 className="text-lg font-medium text-gray-800">
                  Today's Tasks
                </h3>
                <button
                  className="text-sage text-xl font-bold hover:text-sage/80 transition-colors cursor-pointer"
                  onClick={openModal}
                >
                  +
                </button>
              </div>
              {data?.tasks && Object.keys(data.tasks).length > 0 ? (
                Object.entries(data.tasks).map(([id, task]) => (
                  <div id="Task-Items" className="space-y-4">
                    <div key={id} className="flex items-center space-x-4 p-3">
                      <input
                        type="checkbox"
                        className="w-5 h-5 text-sage rounded border-gray-300"
                      />
                      <span className="flex-1 text-gray-700">
                        {task.description}
                      </span>
                      <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">
                        {task.priorityLevel}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div>
                  <p>No Task at hand</p>
                </div>
              )}
            </div>
            <div
              id="Middle-Tools"
              className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center"
            >
              <Calendar />
              <div
                id="Song-Otd"
                className="bg-white rounded-2xl p-6 shadow-sm border border-warm"
              >
                <h3 className="text-lg font-medium text-gray-800 mb-6">
                  Current Jam
                </h3>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-sage to-[#B5A491]">
                    <i className="fa-solid fa-music text-white text-2xl"></i>
                  </div>
                  <h4 className="font-medium text-gray-800">Ditto</h4>
                  <p className="font-medium text-gray-800">By New Jeans</p>
                  <div className="flex items-center justify-center space-x-4 mt-4">
                    <button className="p-2 rounded-full transition-colors hover:bg-cream cursor-pointer">
                      <i className="fa-solid fa-backward"></i>
                    </button>
                    <button className="p-3 bg-sage text-white rounded-full hover:bg-sage/80 transition-colors cursor-pointer">
                      <i className="fa-solid fa-play"></i>
                    </button>
                    <button className="p-2 rounded-full transition-colors hover:bg-cream cursor-pointer">
                      <i className="fa-solid fa-forward"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="Bottom-Section"
              className="bg-white rounded-2xl p-6 shadow-sm border border-warm"
            >
              <div
                id="Bottom-Title"
                className="flex items-center justify-between mb-6"
              >
                <h3 className="text-lg font-medium text-gray-800">
                  Hall of Fames
                </h3>
                <button className="text-sage hover:text-sage/80 transition-colors cursor-pointer text-sm">
                  View All
                </button>
              </div>
              <div
                id="Bottom-Content"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                <div
                  id="Content-Card"
                  className="border border-warm rounded-xl hover:shadow-sm transition-shadow cursor-pointer p-4"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={HoF1}
                      alt="profile picture"
                      className="w-12 h-12 rounded-full"
                    ></img>
                    <div id="Card-Details">
                      <h4 className="font-medium text-gray-800">KindaBusy</h4>
                      <p className="text-gray-600 text-sm">Portfolio</p>
                    </div>
                  </div>
                </div>
                <div
                  id="Content-Card"
                  className="border border-warm rounded-xl hover:shadow-sm transition-shadow cursor-pointer p-4"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={HoF2}
                      alt="profile picture"
                      className="w-12 h-12 rounded-full"
                    ></img>
                    <div id="Card-Details">
                      <h4 className="font-medium text-gray-800">SMI</h4>
                      <p className="text-gray-600 text-sm">Freelance Project</p>
                    </div>
                  </div>
                </div>
                <div
                  id="Content-Card"
                  className="border border-warm rounded-xl hover:shadow-sm transition-shadow cursor-pointer p-4"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={HoF3}
                      alt="profile picture"
                      className="w-12 h-12 rounded-full"
                    ></img>
                    <div id="Card-Details">
                      <h4 className="font-medium text-gray-800">GGMen</h4>
                      <p className="text-gray-600 text-sm">Personal Project</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
