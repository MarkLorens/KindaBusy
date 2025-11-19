import { useUserData } from "../../context/UserDataContext";

const JamCard = () => {
  const { userData } = useUserData();
  return (
    <div
      id="Song-Otd"
      className="bg-white rounded-2xl p-6 shadow-sm border border-warm"
    >
      <h3 className="text-lg font-medium text-gray-800 mb-6">Current Jam</h3>
      {userData?.profile?.jam ? (
        <iframe
          src={`https://open.spotify.com/embed/track/${
            userData.profile.jam.split("/track/")[1].split("?")[0]
          }`}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-xl"
        />
      ) : (
        <p className="text-sm text-gray-500 italic">No jam linked yet 🎧</p>
      )}
    </div>
  );
};

export default JamCard;
