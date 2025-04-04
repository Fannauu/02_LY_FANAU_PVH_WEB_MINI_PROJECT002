import React from "react";

const UserProfile = ({ getUser }) => {
  console.log("getUser", getUser);
  const { username, email, profile } = getUser || {};

  // Get initials from username if no image is provided
  const getInitials = () => {
    if (!username) return "";
    return username
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="flex items-center p-2">
      <div className="relative">
        {profile ? (
          <img
            src={profile}
            alt={`${username}'s profile`}
            className="w-15 h-15 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium">
            {getInitials()}
          </div>
        )}
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white" />
      </div>

      <div className="ml-2">
        <div className="text-lg font-semibold text-gray-900">{username}</div>
        <div className="text-lg text-blue-600">{email}</div>
      </div>
    </div>
  );
};

export default UserProfile;
