import { useState, useRef, useEffect } from "react";

// Profile Dropdown
export const ProfileDropDown = (props) => {
  const [state, setState] = useState(false);
  const profileRef = useRef();

  useEffect(() => {
    const handleDropDown = (e) => {
      if (!profileRef.current.contains(e.target)) setState(false);
    };
    document.addEventListener("click", handleDropDown);
    return () => {
      document.removeEventListener("click", handleDropDown);
    };
  }, []);

  return (
    <>
      <div className={`relative ${props.class}`}>
        <div className="flex items-center space-x-4">
          <button
            ref={profileRef}
            className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
            onClick={() => setState(!state)}
          >
            <img
              src="https://randomuser.me/api/portraits/men/46.jpg"
              className="w-full h-full rounded-full"
              alt="Profile"
            />
          </button>
        </div>
        {state && (
          <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
            <ul className="py-1">
              <li className="cursor-pointer px-2 py-2 hover:bg-gray-100">Profile</li>
              <li className="cursor-pointer px-2 py-2 hover:bg-gray-100">Company Applied</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileDropDown;
