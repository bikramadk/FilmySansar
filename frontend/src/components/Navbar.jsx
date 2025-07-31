import { HelpCircle, LogOut, Search, Settings, MoreHorizontal } from "lucide-react";
import Logo from "../assets/logo.png";
import { Link } from "react-router";
import { useAuthStore } from "../store/authStore";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, logout } = useAuthStore();
  const [showMenu, setShowMenu] = useState(false);

  const avatarUrl = user
    ? `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
        user.username
      )}`
    : "";

  const handleLogout = async () => {
    const { message } = await logout();
    toast.success(message);
    setShowMenu(false);
  };

  return (
    <nav className="bg-[#1a1a1a] text-white flex justify-between items-center px-8 py-4 h-16">
      {/* Logo */}
      <Link to={"/"}>
        <div className="text-white font-bold text-xl tracking-wide">
          <span className="text-white">Filmy</span>
          <span className="text-[#f43f5e]">Sansar</span>
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
        <Link to="/" className="text-white hover:text-[#f43f5e] transition-colors cursor-pointer">
          HOME
        </Link>
        <Link to="/catalog" className="text-gray-300 hover:text-[#f43f5e] transition-colors cursor-pointer">
          CATALOG
        </Link>
        <Link to="/pricing" className="text-gray-300 hover:text-[#f43f5e] transition-colors cursor-pointer">
          PRICING PLAN
        </Link>
        <Link to="/help" className="text-gray-300 hover:text-[#f43f5e] transition-colors cursor-pointer">
          HELP
        </Link>
        <button className="text-gray-300 hover:text-[#f43f5e] transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center space-x-4 relative">
        {/* Search Icon */}
        <button className="text-gray-300 hover:text-white transition-colors">
          <Search className="w-5 h-5" />
        </button>

        {!user ? (
          <Link to={"/signin"}>
            <button className="bg-[#f43f5e] hover:bg-[#e11d48] px-6 py-2 text-white text-sm font-medium rounded transition-colors cursor-pointer">
              SIGN IN
            </button>
          </Link>
        ) : (
          <div className="text-white">
            <img
              src={avatarUrl}
              alt=""
              className="w-8 h-8 rounded-full border-2 border-[#f43f5e] cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />

            {showMenu && (
              <div className="absolute right-0 mt-2 w-64 bg-[#232323] bg-opacity-95 rounded-lg z-50 shadow-lg py-4 px-3 flex flex-col gap-2 border border-[#333333]">
                <div className="flex flex-col items-center mb-2">
                  <span className="text-white font-semibold text-base">
                    {user.username}
                  </span>
                  <span className="text-xs text-gray-400">{user.email}</span>
                </div>

                <Link to={user ? "ai-recommendations" : "signin"}>
                  <button className="w-full flex items-center px-4 py-3 rounded-lg text-white bg-[#f43f5e] hover:bg-[#e11d48] gap-3 cursor-pointer mb-2">
                    Get AI Movie Picks
                  </button>
                </Link>

                <button className="flex items-center px-4 py-3 rounded-lg text-white bg-[#181818] hover:bg-[#1d1c1c] gap-3 cursor-pointer">
                  <HelpCircle className="w-5 h-5" />
                  Help Center
                </button>

                <button className="flex items-center px-4 py-3 rounded-lg text-white bg-[#181818] hover:bg-[#1d1c1c] gap-3 cursor-pointer">
                  <Settings className="w-5 h-5" />
                  Settings
                </button>

                <button
                  onClick={handleLogout}
                  className="flex items-center px-4 py-3 rounded-lg text-white bg-[#181818] hover:bg-[#1d1c1c] gap-3 cursor-pointer"
                >
                  <LogOut className="w-5 h-5" />
                  Log Out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;