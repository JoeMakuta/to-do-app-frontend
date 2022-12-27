// import axios from "axios";
import React from "react";

const SingleTask = (): JSX.Element => {
  return <div>SingleTask</div>;
};

export default SingleTask;

export const getStaticPaths = async (context: any): Promise<any> => {
  // const API = process.env.NEXT_PUBLIC_BACKEND_URI;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/restrict-template-expressions
  // const res = await axios.get(`${API}/users`);
   return {
    paths: [{ params: { taskId: '1' } }, { params: { taskId: '2' } }],
    fallback: false, // can also be true or 'blocking'
  }
};

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any): Promise<any> {
  return {
    // Passed to the page component as props
    props: { post: {} },
  }
}