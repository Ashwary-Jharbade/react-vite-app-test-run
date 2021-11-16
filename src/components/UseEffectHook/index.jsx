import { useState, useEffect } from "react";
import getData from "../../provider/network/getData";

const getPost = () => {
  const [postId, setPostId] = useState(1);
  const [apiHits, setApiHits] = useState(1);
  const [post, setPost] = useState({
    id: "",
    title: "",
    completed: "",
    userId: "",
  });
  useEffect(() => {
    const postApi = async () => {
      const url = `https://jsonplaceholder.typicode.com/todos/${postId}`;
      const data = await getData(url);
      setPost({
        ...post,
        ...data,
      });
    };
    postApi();
  }, [apiHits]);
  const onPostIdChange = (e) => {
    if (!e && !e?.target) {
      return;
    }
    const { value } = e.target;
    const newValue = parseInt(value);
    if (newValue > 0) {
      setPostId(newValue);
    }
  };
  const onButtonClick = (e) => {
    if (!e) {
      return;
    }
    setApiHits(apiHits + 1);
  };
  return (
    <>
      <div>
        <div>
          <label htmlFor="">Enter Post Id</label>
        </div>
        <br />
        <div>
          <input type="number" value={postId} onChange={onPostIdChange} />
        </div>
        <br />
        <div>
          <button onClick={onButtonClick}>Get Post</button>
        </div>
      </div>
      <br />
      <div>
        <div>User Id: {post.userId}</div>
        <div>Post Id: {post.id}</div>
        <div>Title: {post.title}</div>
        <div>Status: {post.completed}</div>
      </div>
    </>
  );
};
export default getPost;
