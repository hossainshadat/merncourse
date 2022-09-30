import React from "react";

function Profile() {
  return (
    <div>
      <div className="flex items-center">
        <div className="avatar">
          <div className="w-16 rounded-full">
            <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png" />
          </div>
        </div>
        <div className="pl-2">
          <h2 className="text-xl font-bold">Shadath Hossain</h2>
          <p className="text-sm font-semibold">Khilgoan, Dhaka</p>
        </div>
      </div>
      <div>
        <div className="bg-violet-400 mx-3 my-10 px-2 py-4 flex flex-wrap">
          <div className="bg-white px-3 py-3 rounded">
            <h2 className="text-3xl font-bold">
              55 <small className="text-xs text-slate-300 ml-[-7px]">kg</small>
            </h2>
            <p className="text-sm">Weight</p>
          </div>
          <div className="bg-white px-3 mx-3 py-3 rounded">
            <h2 className="text-3xl font-bold">5.5</h2>
            <p className="text-sm">Height</p>
          </div>
          <div className="bg-white px-3 py-3 rounded">
            <h2 className="text-3xl font-bold">25</h2>
            <p className="text-sm">Age</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
