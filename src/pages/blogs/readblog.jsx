import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadBlog = () => {
  const { id } = useParams(); // Tangkap id dari URL
  const [blog, setBlog] = useState(null); // State untuk menyimpan data blog
  const [loading, setLoading] = useState(true); // State untuk loading
  const [error, setError] = useState(null); // State untuk menyimpan error jika ada

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URI}/api/posts/${id}`
        );
        const contentType = response.headers.get("content-type");

        // Cek apakah respons berformat JSON
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          setBlog(data);
        } else {
          // Jika respons bukan JSON, ambil teksnya dan tampilkan untuk debugging
          const text = await response.text();
          console.error("Unexpected response format:", text);
          setError("Invalid response format from server.");
        }
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]); // Jalankan ulang fetching jika id berubah

  if (loading) {
    return (
      <div className="text-center text-secondary opacity-75">Loading...</div>
    ); // Tampilkan loading saat data sedang diambil
  }

  if (error) {
    return (
      <div className="text-center text-red-500 opacity-75">Error: {error}</div>
    ); // Tampilkan pesan error jika ada error
  }

  return (
    <div className="text-secondary font-lexend max-w-4xl mx-auto p-6">
      {blog ? (
        <>
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <div className="text-sm mb-4">
            <span>Kategori: {blog.category}</span> |{" "}
            <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
          </div>
          <div
            className="prose text-secondary text-opacity-75 max-w-none" // Gunakan class prose untuk styling konten (optional jika ada Tailwind Typography)
            dangerouslySetInnerHTML={{ __html: blog.content }} // Render content HTML
          />
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="mt-4 w-full h-auto rounded"
            />
          )}
        </>
      ) : (
        <div>Blog not found.</div>
      )}
    </div>
  );
};

export default ReadBlog;
