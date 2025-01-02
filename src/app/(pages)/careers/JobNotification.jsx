import React from "react";

const JobNotification = ({
  profileImage,
  jobTitle = "UI Designer",
  notificationText = "Hi, you have received a job for",
  titleText = "Never want to miss any Job News?",
  descriptionText = "Get notifications of new Jobs. No spam ever.",
  placeholderText = "Enter email address",
  buttonText = "Subscribe",
//   onSubscribe,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-12 bg-transparent">
      {/* Left Section - Image and Notification */}
      <div className="relative flex items-center justify-center">
        {/* Profile Picture */}
        <img
          src={profileImage} // Profile image from props
          alt="Profile"
          className="rounded-full w-[30rem] h-[25rem] object-cover border-4 border-white shadow-lg"
        />
        
        {/* Notification Badge */}
        <div className="absolute bottom-4 right-[-3rem] bg-base-200 p-4 rounded-xl shadow-md max-w-xs ring-1 ring-[#005bea]">
          <p className="text-gray-400 font-medium">
            {notificationText} <span className="text-[#005bea]">{jobTitle}</span>
          </p>
        </div>
      </div>

      {/* Right Section - Text and Email Subscription */}
      <div className="mt-8 md:mt-0 md:ml-12 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-400">
          {titleText} <span className="text-[#005bea]">Job News?</span>
        </h2>
        <p className="text-gray-400 mt-2">{descriptionText}</p>
        
        {/* Email Subscription Form */}
        <div className="mt-4 flex items-center justify-center md:justify-start">
          <input
            type="email"
            placeholder={placeholderText}
            className="p-3 rounded-l-full border border focus:outline-none focus:ring-2 focus:ring-[#005bea]"
          />
          <button
            className="bg-[#005bea] text-white p-3 rounded-r-full font-semibold hover:bg-[#0046b5] focus:outline-none"
            // onClick={onSubscribe} // Button action from props
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobNotification;
