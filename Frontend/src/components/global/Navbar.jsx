// import React from 'react'

const Navbar = (props) => {
  const { active } = props;
  console.log(active);
  return (
    <div className="absolute right-5 top-10">
      <div className="flex flex-col items-end gap-4">
        <div className={`flex gap-2 ${active==="Main"?'pl-1 pr-1 bg-gray-600 items-center rounded-lg':'items-center'}`}>
          <p className={`m-0 ${active !== "Main" ? "hidden" : "block"}`}>
            Home
          </p>
          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
        </div>
        <div className={`flex gap-2 ${active==="About"?'p-1 bg-gray-600':'items-center'}`}>
          <p className={`m-0 ${active !== "About" ? "hidden" : "block"}`}>
            About
          </p>
          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
        </div>
        <div className={`flex gap-2 ${active==="Contact"?'p-1 bg-gray-600':'items-center'}`}>
          <p className={`m-0 ${active !== "Contact" ? "hidden" : "block"}`}>
            Contact
          </p>
          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
        </div>
        <div className={`flex gap-2 ${active==="Contact"?'p-1 bg-gray-600':'items-center'}`}>
          <p className={`m-0 ${active !== "Contact" ? "hidden" : "block"}`}>
            Contact
          </p>
          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
        </div>
        <div className={`flex gap-2 ${active==="Contact"?'p-1 bg-gray-600':'items-center'}`}>
          <p className={`m-0 ${active !== "Contact" ? "hidden" : "block"}`}>
            Contact
          </p>
          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
