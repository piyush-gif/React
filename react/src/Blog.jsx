import { useState, useEffect } from "react";
const Blog = () => {
  //http://localhost:3000/data
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [editingId, setEditingId] = useState(null);
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
    if (editingId) {
      const response = await fetch(`http://localhost:3000/data/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, author, body }),
      });
      if (!response.ok) throw Error("server error");
      setEditingId(null);
    } else {
      const response = await fetch("http://localhost:3000/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, author, body }),
      });
      if (!response.ok) throw Error("Server error");
      setPage(1);
    }

    await fetched();
    setTitle("");
    setAuthor("");
    setBody("");
  };

  useEffect(() => {
    fetched();
  }, []);
  const handleCancel = () => {
    setEditingId(null);
    setTitle("");
    setAuthor("");
    setBody("");
  };
  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/data/${id}`, {
      method: "DELETE",
    });
    await fetched();
  };

  const hanldeUpdate = async (blog) => {
    setEditingId(blog.id);
    setTitle(blog.title);
    setAuthor(blog.author);
    setBody(blog.body);
  };
  return (
    <div>
      <div>
        <p>{editingId ? "Update your blog" : "Write your own blog"}</p>
        <p>Title</p>
        <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <p>Author</p>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
        <p>Body</p>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button onClick={handleSubmit} disabled={!title || !author || !body}>
          {editingId ? "Update" : "Submit"}
        </button>
        {editingId && <button onClick={handleCancel}>Cancel</button>}
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
                <button onClick={() => handleDelete(blogs.id)}>Delete</button>
                <button onClick={() => hanldeUpdate(blogs)}>Update</button>
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
``;
