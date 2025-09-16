const formLeftSection = () => {
  return (
    <div className="flex flex-1 bg-cream text-center justify-center items-center text-gray-700">
      <div id="Left-Section" className="z-10 max-w-lg text-center">
        <div id="Logo-Section" className="mb-8">
          <div className="w-16 h-16 bg-txtLight rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg p-10">
            <i
              className="fa-solid fa-user fa-2xl"
              style={{ color: "#f5f3f0" }}
            ></i>
          </div>
          <h1 className="text-3xl font-bold">KindaBusy</h1>
          <span className="text-lg font-light">
            Your tasks, digitialized, personalized. In one place
          </span>
        </div>
        <div id="Feature-Section" className="grid grid-cols-2 gap-6 mb-8">
          <div className="backdrop-blur-sm bg-black/10 rounded-lg p-6 border border-black/10">
            <i
              className="fa-solid fa-user-pen fa-lg"
              style={{ marginBottom: "15px" }}
            ></i>
            <h3 className="font-semibold text-sm">Profile Customization</h3>
            <p className="text-xs text-txtLight">
              Personalize your profile details and background
            </p>
          </div>
          <div className="backdrop-blur-sm bg-black/10 rounded-lg p-6 border border-black/10">
            <i
              className="fa-solid fa-calendar-days fa-lg"
              style={{ marginBottom: "15px" }}
            ></i>
            <h3 className="font-semibold text-sm">Task Calendar</h3>
            <p className="text-xs text-txtLight">
              Organize your tasks with an integrated calendar
            </p>
          </div>
          <div className="backdrop-blur-sm bg-black/10 rounded-lg p-6 border border-black/10">
            <i
              className="fa-solid fa-note-sticky fa-lg"
              style={{ marginBottom: "15px" }}
            ></i>
            <h3 className="font-semibold text-sm">Sticky Notes</h3>
            <p className="text-xs text-txtLight">
              Add customizable notes to your profile
            </p>
          </div>
          <div className="backdrop-blur-sm bg-black/10 rounded-lg p-6 border border-black/10">
            <i
              className="fa-solid fa-music fa-lg"
              style={{ marginBottom: "15px" }}
            ></i>
            <h3 className="font-semibold text-sm">Song of the Day</h3>
            <p className="text-xs text-txtLight">Share your daily music mood</p>
          </div>
        </div>
        <div
          id="Community-Section"
          className="gap-3 backdrop-blur-sm bg-black/10 rounded-lg p-6 border border-black/10"
        >
          <div className="flex justify-center items-center gap-2">
            <i className="fa-solid fa-people-group fa-lg"></i>
            <h3 className="font-semibold">Community Profiles</h3>
          </div>
          <div className="my-2">
            <p className="text-sm text-txtLight">
              Discover and connect with other users in our community
            </p>
          </div>
          <div>Images Sample</div>
        </div>
      </div>
    </div>
  );
};

export default formLeftSection;
