import HoF1 from "../../lib/assets/KindaBusy.PNG";
import HoF2 from "../../lib/assets/SMI-Group-Logo.png";
import HoF3 from "../../lib/assets/ggmen.png";

const Placeholder = () => {
  return (
    <div
      id="Bottom-Section"
      className="bg-white rounded-2xl p-6 shadow-sm border border-warm"
    >
      <div id="Bottom-Title" className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-gray-800">Hall of Fames</h3>
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
  );
};
export default Placeholder;
