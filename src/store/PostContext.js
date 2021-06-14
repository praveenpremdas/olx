import { createContext, useState } from "react";
export const PostContest = createContext(null);

function Post({ children }) {
  const [postDetails, setPostDetails] = useState(null);
  return (
    <PostContest.Provider value={{ postDetails, setPostDetails }}>
      {children}
    </PostContest.Provider>
  );
}
export default Post;
