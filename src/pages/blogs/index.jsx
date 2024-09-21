import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URI}/api/posts`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data); // Simpan data ke state
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Fungsi untuk memotong deskripsi
  const getDescription = (htmlContent) => {
    const strippedContent = htmlContent.replace(/(<([^>]+)>)/gi, ""); // Hapus tag HTML
    return strippedContent.substring(0, 100) + "..."; // Ambil 100 karakter pertama
  };

  return (
    <>
      <div className="text-secondary font-lexend opacity-75">
        <section className="max-w-xl mx-auto">
          <h1 className="text-3xl font-bold">Blog</h1>
          <p className="mt-2">
            Postingan yang dibuat saat developernya gabut, AI powered.
          </p>
        </section>

        <section className="flex justify-center md:px-6 py-10 gap-8 flex-wrap">
          {blogs.map((blog) => (
            <Link to={`/blogs/${blog._id}`} key={blog._id}>
              <motion.div
                className="relative bg-primary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={
                    blog.images && blog.images.length > 0
                      ? `${blog.images[0]}` // Gambar pertama dari array
                      : "default-image-url.jpg" // Gambar default
                  }
                  alt={blog.title}
                  className="w-full h-[300px] object-cover opacity-75 hover:opacity-100 transition-all duration-300"
                />
                <div className="absolute top-2 left-2 bg-primary bg-opacity-75 text-secondary py-1 px-2 rounded-lg">
                  <span className="text-sm font-semibold">{blog.category}</span>
                </div>
                <div className="p-4 text-secondary opacity-75 font-lexend">
                  <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  <p className="text-sm">{getDescription(blog.content)}</p>{" "}
                  {/* Deskripsi singkat */}
                </div>
              </motion.div>
            </Link>
          ))}
        </section>
      </div>
    </>
  );
};

export default Index;
