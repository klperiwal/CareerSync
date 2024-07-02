import { useState, useRef, useEffect } from "react";

const AvatarMenue = () => {
  const [menuState, setMenuState] = useState(false);
  
  return (
    <div>
      <main className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
            <div className="max-w-lg space-y-3">
              <h3 className="text-indigo-600 font-semibold text-6xl">
                Dashboard
              </h3>
              <p className="text-gray-800 text-3xl font-semibold sm:text-4xl text-left">
                Your Details are here upto mark
              </p>

              {/* <img src="./ezgif.gif" alt="" /> */}
              <img
                src="/ezgif.gif"
                alt=""
                className="w-full"
              />
            </div>
            <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div>
                  <label className="font-medium">Full name</label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Contact_No</label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Message</label>
                  <textarea
                    required
                    className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  ></textarea>
                </div>
                <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};



export { AvatarMenue };
