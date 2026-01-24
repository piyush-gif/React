import { useState, useEffect } from "react";
const Blog = () => {
  //http://localhost:3000/data
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [blogData, setBlogData] = useState([]);
  const [page, setPage] = useState(1);
  const itemPerPage = 3;
  const totalPages = Math.ceil(blogData.length / itemPerPage);
  const startPage = (page - 1) * itemPerPage;
  const endPage = startPage + itemPerPage;
  const pagination = blogData.slice(startPage, endPage);

  const fetched = async () => {
    const response = await fetch("http://localhost:3000/data", {});
    const data = await response.json();
    setBlogData(data);
  };

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:3000/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, author, body }),
    });
    if (!response.ok) throw Error("Server error");
    await fetched();
    setPage(1);
    setTitle("");
    setAuthor("");
    setBody("");
  };

  useEffect(() => {
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
        ></textarea>
        <button onClick={handleSubmit} disabled={!title || !author || !body}>
          submit
        </button>
      </div>

      <div>
        <p>Blogs from json</p>
        {blogData &&
          pagination.map((blogs) => {
            return (
              <div key={blogs.id}>
                <p>{blogs.id}</p>
                <p>{blogs.title}</p>
                <p> {blogs.author}</p>
                <p>{blogs.body}</p>
              </div>
            );
          })}
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
        >
          prev
        </button>
        {page}
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page >= totalPages}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Blog;
