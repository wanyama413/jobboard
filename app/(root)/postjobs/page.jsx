import React from "react";
import PostJobForm from "@/components/forms/PostJobForm";

const PostJob = () => {
  return (
    <div>
      <h1 className="font-bold">Post Job</h1>
      <div>
        <PostJobForm />
      </div>
    </div>
  );
};

export default PostJob;
