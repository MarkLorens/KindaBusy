import Navbar from "../components/Navbar";
import ProfilePic from "../lib/assets/Uto.jpg";
import ProfileContact from "../components/ProfileContact";
import { useState } from "react";

const editProfile = () => {
  const [contactInput, setConctactInput] = useState("");
  return (
    <div className="bg-cream">
      <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-warm sticky z-50">
        <Navbar />
      </div>
      <main id="Main-Content" className="max-w-4xl mx-auto px-7 py-12">
        <div id="Title-Section" className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Update Your Profile
          </h3>
          <span className="text-sm text-gray-600">
            Update your personal information and preferences
          </span>
        </div>
        <form
          id="Form-Section"
          className="bg-white rounded-lg shadow-sm border border-warm p-8"
        >
          <div
            id="Profile-Photo-Section"
            className="flex items-center space-x-6 mb-10 pb-8 border-b border-warm"
          >
            <img
              src={ProfilePic}
              alt="profile picture"
              className="w-24 h-24 rounded-full border-4 border-sage"
            ></img>
            <div id="Photo-Detail-Section">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Profile Picture
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Update your personal information and preferences
              </p>
              <button className="px-5 py-2 bg-sage text-white text-sm rounded hover:bg-sage/80 transition cursor-pointer">
                <i className="fa-solid fa-upload text-white mr-2"></i>
                Upload New Photo
              </button>
            </div>
          </div>
          <div id="Profile-Form-Section">
            <div id="Form-Grid-Section" className="grid grid-cols-2 gap-6">
              <div id="Username-Field-Section" className="col-span-1">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <i className="fa-solid fa-user text-sage mr-2"></i>
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="$Username"
                  className="w-full border border-lightgrey rounded px-4 py-3 focus:outline-none focus:border-sage text-sm transition"
                />
              </div>
              <div id="Location-Field-Section" className="col-span-1">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <i className="fa-solid fa-location-dot text-sage mr-2"></i>
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="$Location"
                  className="w-full border border-lightgrey rounded px-4 py-3 focus:outline-none focus:border-sage text-sm transition"
                />
              </div>
              <div id="Title-Field-Section" className="col-span-1">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <i className="fa-solid fa-medal text-sage mr-2"></i>
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="$Title"
                  className="w-full border border-lightgrey rounded px-4 py-3 focus:outline-none focus:border-sage text-sm transition"
                />
              </div>
              <div id="Occupation-Field-Section" className="col-span-1">
                <label
                  htmlFor="occupation"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <i className="fa-solid fa-briefcase text-sage mr-2"></i>
                  Occupation
                </label>
                <input
                  type="text"
                  id="occupation"
                  placeholder="$Occupation"
                  className="w-full border border-lightgrey rounded px-4 py-3 focus:outline-none focus:border-sage text-sm transition"
                />
              </div>
              <div id="Contact-Field-Section" className="col-span-2">
                <div
                  id="Contact-Label-Section"
                  className="flex justify-between"
                >
                  <div>
                    <label
                      htmlFor="contact"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      <i className="fa-solid fa-link text-sage mr-2"></i>
                      Contact
                    </label>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="contact"
                    placeholder="$Contact"
                    value={contactInput}
                    onChange={(e) => setConctactInput(e.target.value)}
                    className="w-full border border-lightgrey rounded px-4 py-3 focus:outline-none focus:border-sage text-sm transition"
                  />
                  <div>
                    <span className="text-xs text-gray-600">
                      Your contact will be displayed as:
                    </span>
                  </div>
                  <ProfileContact contact={contactInput} />
                </div>
              </div>
              <div id="Jam-Field-Section" className="col-span-2">
                <label
                  htmlFor="jam"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <i className="fa-brands fa-spotify text-sage mr-2"></i>
                  Your Jam {"(Spotify Link)"}
                </label>
                <input
                  type="text"
                  id="jam"
                  placeholder="$Jam"
                  className="w-full border border-lightgrey rounded px-4 py-3 focus:outline-none focus:border-sage text-sm transition"
                />
              </div>
            </div>
            <div
              id="Privacy-Setting-Section"
              className="mt-8 pt-8 border-t border-warm"
            >
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                <i className="fa-solid fa-lock mr-2 text-sage"></i>
                Privacy Settings
              </h3>
              <div id="Privacy-Setting-Option-Section" className="space-y-4">
                <label
                  htmlFor="show_activity"
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id="show_activity"
                    className="w-5 h-5 text-sage border-lightgrey rounded focus:ring-sage"
                  />
                  <span className="text-sm text-gray-700">
                    Allow other users to view my schedule description.
                  </span>
                </label>
                <label
                  htmlFor="show_profile"
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id="show_profile"
                    className="w-5 h-5 text-sage border-lightgrey rounded focus:ring-sage"
                  />
                  <span className="text-sm text-gray-700">
                    Allow other users to find my profile.
                  </span>
                </label>
                <label
                  htmlFor="show_jam"
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id="show_jam"
                    className="w-5 h-5 text-sage border-lightgrey rounded focus:ring-sage"
                  />
                  <span className="text-sm text-gray-700">
                    Allow other users to view my current jam.
                  </span>
                </label>
              </div>
            </div>
            <div
              id="Form-Action-Section"
              className="flex items-center justify-between mt-10 pt-8 border-t border-warm"
            >
              <button className="px-6 py-3 border border-lightgrey text-gray-700 text-sm rounded hover:bg-gray-50 transition cursor-pointer">
                <i className="fa-solid fa-xmark mr-2"></i>
                Cancel
              </button>
              <button
                type="submit"
                className="px-8 py-3 bg-sage text-white text-sm rounded hover:bg-sage/90 transition cursor-pointer"
              >
                <i className="fa-solid fa-check mr-2"></i>
                Save Changes
              </button>
            </div>
          </div>
        </form>
        <div
          id="Danger-Zone-Section"
          className="mt-8 border border-red-200 rounded-lg p-6 bg-red-50"
        >
          <h3 className="text-lg font-medium text-red-800 mb-2">
            <i className="fa-solid fa-triangle-exclamation mr-2"></i>
            Danger Zone
          </h3>
          <p className="text-sm text-red-700 mb-4">
            This action is irreversible. Please be certain before proceeding.
          </p>
          <button className="px-5 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition cursor-pointer">
            <i className="fa-solid fa-trash mr-2"></i>
            Delete Account
          </button>
        </div>
      </main>
    </div>
  );
};

export default editProfile;
