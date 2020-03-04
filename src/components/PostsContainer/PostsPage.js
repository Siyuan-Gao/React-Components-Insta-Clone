//Complete the necessary code in this file
// import useState
import React , {useState}  from "react";
import Post from "./Post";
import "./Posts.css";
import SearchBarContainer from '../SearchBar/SearchBarContainer.js'
import PostsContainer from "./PostsContainer";
import dummydata from '../dummy-data.js'

// import data 

const PostsPage = () => {
  // set up state for your data

  const [postData, setPostData] = useState(dummydata);
  console.log("initial state", postData);

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}

      <div className="App">
      <SearchBarContainer />
      <PostsContainer postData={postData}/>

    </div>

    </div>

  );
};

export default PostsPage;
