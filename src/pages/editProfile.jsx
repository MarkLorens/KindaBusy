import Navbar from "../components/Navbar";
import ProfilePic from "../lib/assets/Uto.jpg";

const editProfile = () => {
  return (
    <div className="bg-cream">
      <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-warm sticky z-50">
        <Navbar />
      </div>
      <main id="Main-Content" className="max-w-4xl mx-auto px-6 py-8 space-y-6">
        <div id="Title-Section" className="w-full flex space-y-4 flex-col">
          <h3 className="text-lg font-medium text-gray-800">
            Update Your Profile
          </h3>
          <span className="text-xs text-txtLight">
            Update your personal information and preferences
          </span>
        </div>
        <div
          id="Form-Section"
          className="bg-white rounded-2xl shadow-sm border border-warm p-6"
        >
          <div id="Profile-Photo-Section" className="flex space-x-6 mb-6">
            <div id="Photo-Section">
              <img
                src={ProfilePic}
                alt="profile picture"
                className="w-24 h-24 rounded-full border-4 border-sage mx-auto"
              ></img>
            </div>
            <div id="Photo-Detail-Section" className="flex flex-col space-y-2">
              <h3 className="text-lg font-medium text-gray-800">
                Profile Picture
              </h3>
              <span className="text-xs text-txtLight">
                Update your personal information and preferences
              </span>
              <button className="bg-sage text-white text-center py-4 rounded-xl text-sm font-medium cursor-pointer hover:bg-sage/80 transition-colors">
                <i className="fa-solid fa-upload text-gray-600"></i>
                Upload New Photo
              </button>
            </div>
          </div>
          <div id="Divider" className="relative">
            <div className="w-full border-t border-txtLight"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default editProfile;
