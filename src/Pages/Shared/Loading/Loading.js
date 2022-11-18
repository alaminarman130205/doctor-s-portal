import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="spinner-border animate-spin inline-block w-8 rounded-full"
        role="status"
      >
        <span className="visibility-hidden">....</span>
      </div>
    </div>
  );
};

export default Loading;
