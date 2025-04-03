import React from "react";

const UserProfile = ({ name, email, imageUrl }) => {
  // Get initials if no image is provided
  const getInitials = () => {
    if (!name) return "";
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="flex items-center p-2">
      <div className="relative">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${name}'s profile`}
            className="w-8 h-8 rounded-full object-cover"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium">
            {getInitials()}
          </div>
        )}
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white" />
      </div>

      <div className="ml-2">
        <div className="text-sm font-medium text-gray-900">{name}</div>
        <div className="text-xs text-blue-600">{email}</div>
      </div>
    </div>
  );
};

export default UserProfile;
