import axios from "axios";
import React from "react";

const SingleTask = (): JSX.Element => {
  return <div>SingleTask</div>;
};

export default SingleTask;

export const getStaticPaths = async (context: any): any => {
  const API = process.env.NEXT_PUBLIC_BACKEND_URI;

  const res = await axios.get(`${API}/users`);
};
