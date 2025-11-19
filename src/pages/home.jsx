import { useUserData } from "../context/UserDataContext.jsx";
import Calendar from "../components/home/calendar.jsx";
import Navbar from "../components/helper/navbar.jsx";
import StickyNotes from "../components/home/StickyNotes.jsx";
import ProfileCard from "../components/home/ProfileCard.jsx";
import JamCard from "../components/home/JamCard.jsx";
import TaskCard from "../components/home/TaskCard.jsx";
import Placeholder from "../components/home/Placeholder.jsx";
import LoadingScreen from "../components/helper/LoadingScreen.jsx";

const Home = () => {
  const { loading } = useUserData();

  if (loading) return <p>Loading...</p>;
  return (
    <div className="bg-cream">
      <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-warm sticky z-50">
        <Navbar />
      </div>
      <LoadingScreen />
      {/* <main id="Main-Content" className="max-w-7xl mx-auto px-6 py-8">
        <div id="Main-Grid" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div id="Profile-Section" className="lg:col-span-1">
            <ProfileCard />
            <StickyNotes />
          </div>
          <div id="Main-Dashboard" className="lg:col-span-2 space-y-6">
            <TaskCard />
            <div
              id="Middle-Tools"
              className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center"
            >
              <Calendar />
              <JamCard />
            </div>
            <Placeholder />
          </div>
        </div>
      </main> */}
    </div>
  );
};

export default Home;
