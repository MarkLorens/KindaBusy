import Calendar from "../components/calendar";
import Navbar from "../components/navbar";

const Home = () => {
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
                    src="../assets/Uto.jpg"
                    alt="profile picture"
                    className="w-24 h-24 rounded-full border-4 border-sage mx-auto"
                  ></img>
                  <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-sage text-white rounded-full flex items-center justify-center hover:bg-sage/80 transition-colors cursor-pointer">
                    <i class="fa-solid fa-camera fa-sm"></i>
                  </button>
                </div>
                <h2 className="text-xl font-medium text-gray-800 mt-4">
                  Amatsuka Uto
                </h2>
                <p className="text-gray-600 text-sm">Professional Angel</p>
                <p className="text-gray-500 text-sm mt-1">
                  The Real Heaven Inc.
                </p>
              </div>
              <div id="Profile-Particulars" className="space-y-4">
                <div
                  id="Profile-Email"
                  className="flex items-center space-x-3 text-gray-600"
                >
                  <i className="fa-solid fa-envelope"></i>
                  <span>amatsuka.tenshimp@gmail.com</span>
                </div>
                <div
                  id="Profile-Mobile"
                  className="flex items-center space-x-3 text-gray-600"
                >
                  <i class="fa-solid fa-phone"></i>
                  <span>+81 (123) 323-169</span>
                </div>
                <div
                  id="Profile-Location"
                  className="flex items-center space-x-3 text-gray-600"
                >
                  <i class="fa-solid fa-location-dot"></i>
                  <span>Paradise, Heaven</span>
                </div>
              </div>
              <div id="Profile-Edit" className="border-t border-warm mt-6 pt-6">
                <div className="flex space-x-3">
                  <button className="flex-1 bg-sage text-white py-2 px-4 rounded-xl text-sm font-medium cursor-pointer hover:bg-sage/80 transition-colors">
                    Edit Profile
                  </button>
                  <button className="p-2 border border-warm rounded-xl hover:bg-warm transition-colors cursor-pointer">
                    <i class="fa-solid fa-share-nodes text-gray-600"></i>
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
                <div className="flex items-center justify-between border-l-4 border-yellow-300 p-3 rounded-r-lg bg-yellow-50">
                  <p className="text-sm text-gray-800">Stream Apex Legends</p>
                  <i class="fa-solid fa-trash text-sm cursor-pointer text-red-400 hover:-translate-y-0.5 transition-transform"></i>
                </div>
                <div className="flex items-center justify-between border-l-4 border-blue-300 p-3 rounded-r-lg bg-blue-50">
                  <p className="text-sm text-gray-800">Save cats from trees</p>
                  <i class="fa-solid fa-trash text-sm cursor-pointer text-red-400 hover:-translate-y-0.5 transition-transformr"></i>
                </div>
                <div className="flex items-center justify-between border-l-4 border-green-300 p-3 rounded-r-lg bg-green-50">
                  <p className="text-sm text-gray-800">
                    Remove Teemo from League
                  </p>
                  <i class="fa-solid fa-trash text-sm cursor-pointer text-red-400 hover:-translate-y-0.5 transition-transform"></i>
                </div>
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
                <button className="text-sage text-xl font-bold hover:text-sage/80 transition-colors cursor-pointer">
                  +
                </button>
              </div>
              <div id="Task-Items" className="space-y-4">
                <div className="flex items-center space-x-4 p-3 bg-cream rounded-xl">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-sage rounded border-gray-300"
                  />
                  <span className="flex-1 text-gray-700">Wake Up</span>
                  <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">
                    High
                  </span>
                </div>
                <div className="flex items-center space-x-4 p-3">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-sage rounded border-gray-300"
                  />
                  <span className="flex-1 text-gray-700">Finish a WIP</span>
                  <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">
                    Medium
                  </span>
                </div>
                <div className="flex items-center space-x-4 p-3">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-sage rounded border-gray-300"
                  />
                  <span className="flex-1 text-gray-700">
                    Help God mow the lawn
                  </span>
                  <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">
                    low
                  </span>
                </div>
              </div>
            </div>
            <div id="Middle-Tools">
              <Calendar />
            </div>
            <div id="Bottom-Section"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
