import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import NotFound from "../NotFound"; // Impor komponen NotFound

const AdminBlog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [authorized, setAuthorized] = useState(true); // State untuk status otorisasi

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URI}/api/posts`
        );
        setPosts(response.data);
      } catch (err) {
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    const checkAuthorization = async () => {
      try {
        await axios.get(`${import.meta.env.VITE_API_URI}/api/user/profile`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
      } catch {
        setAuthorized(false); // Jika gagal, set authorized ke false
      }
    };

    checkAuthorization();
    fetchPosts();
  }, []);

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URI}/api/posts/${postId}`);
      setPosts(posts.filter((post) => post._id !== postId));
    } catch (err) {
      setError("Failed to delete post");
    }
  };

  if (loading) return null;
  if (!authorized) return <NotFound />; // Tampilkan NotFound jika tidak terotorisasi
  if (error) return <p>{error}</p>;

  return (
    <div className="text-secondary opacity-75">
      <Link to="/0xadminaddblog" className="bg-blue-500 px-4 py-2 rounded mb-4">
        Tambah Post
      </Link>

      {posts.length === 0 ? (
        <p>Belum ada postingan</p>
      ) : (
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post._id}>
                <td className="border px-4 py-2">{post.title}</td>
                <td className="border px-4 py-2">{post.category}</td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-yellow-500 px-2 py-1 rounded mr-2"
                    onClick={() => alert("Edit post")}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 px-2 py-1 rounded"
                    onClick={() => handleDelete(post._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminBlog;
