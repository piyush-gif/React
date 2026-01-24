import { useState, useEffect } from "react";
const Blog = () => {
  //http://localhost:3000/data
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [blogData, setBlogData] = useState("");

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:3000/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, author, body }),
    });
    if (!response.ok) throw Error("Server error");
  };

  useEffect(() => {
    const fetched = async () => {
      const response = await fetch("http://localhost:3000/data", {});
      const data = await response.json();
      setBlogData(data);
    };
    fetched();
  }, []);
  return (
    <div>
      <div>
        <p>Write your own blog</p>
        <p>Title</p>{" "}
        <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <p>Author</p>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
        <p>Body</p>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        ></textarea>
        <button onClick={handleSubmit}>submit</button>
      </div>

      <div>
        <p>Blogs from json</p>
        {blogData &&
          blogData.map((blogs) => {
            return (
              <div>
                <p>{blogs.title}</p>
                <p> {blogs.author}</p>
                <p>{blogs.body}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Blog;
