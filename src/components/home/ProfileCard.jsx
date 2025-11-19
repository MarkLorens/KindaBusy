import { useUserData } from "../../context/UserDataContext";
import ProfilePic from "../../lib/assets/Uto.jpg";
import { Link } from "react-router-dom";
import ProfileContact from "../helper/ProfileContact.jsx";

export default function ProfileCard() {
  const { userData } = useUserData();
  return (
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
          {userData.profile.username}
        </h2>
        <p className="text-gray-600 text-sm">{userData.profile.title}</p>
        <p className="text-gray-500 text-sm mt-1">
          {userData.profile.occupation}
        </p>
      </div>
      <div id="Profile-Particulars" className="space-y-4">
        <div
          id="Profile-Contact"
          className="flex items-center space-x-3 text-gray-600"
        >
          <ProfileContact contact={userData.profile.contact} />
        </div>
        <div
          id="Profile-Location"
          className="flex items-center space-x-3 text-gray-600"
        >
          <i className="fa-solid fa-location-dot"></i>
          <span>{userData.profile.location}</span>
        </div>
      </div>
      <div id="Profile-Edit" className="border-t border-warm mt-6 pt-6">
        <div className="flex space-x-3">
          <Link
            to="/editprofile"
            className="flex-1 bg-sage text-white text-center py-4 rounded-xl text-sm font-medium cursor-pointer hover:bg-sage/80 transition-colors"
          >
            Edit Profile
          </Link>
          <button className="p-2 border border-warm rounded-xl hover:bg-warm transition-colors cursor-pointer">
            <i className="fa-solid fa-share-nodes text-gray-600"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
