const Navbar = () => {
  return (
    <div id="Navbar" className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div id="Logo-Section" className="space-x-3 flex items-center">
          <div className="w-10 h-10 bg-sage rounded-xl flex items-center justify-center">
            <i className="fa-solid fa-user fa-lg text-white"></i>
          </div>
          <h1 className="text-xl font-medium text-gray-800">KindaBusy</h1>
        </div>
        <nav
          id="Items-Section"
          className="hidden md:flex items-center space-x-8 text-gray-600"
        >
          <span className="hover:text-sage transition-colors font-medium cursor-pointer">
            Dashboard
          </span>
          <span className="hover:text-sage transition-colors font-medium cursor-pointer">
            Tasks
          </span>
          <span className="hover:text-sage transition-colors font-medium cursor-pointer">
            Community
          </span>
        </nav>
        <div id="Account-Section" className="flex items-center space-x-4">
          <i class="fa-solid fa-bell fa-lg p-2 text-gray-600 hover:text-sage transition-colors cursor-pointer"></i>
          <span>Avatar</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
