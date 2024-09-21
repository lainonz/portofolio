import React, { useState, useEffect } from "react";
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import NotFound from "../NotFound"; // Impor komponen NotFound

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [authorized, setAuthorized] = useState(null); // State untuk status otorisasi
  const navigate = useNavigate();

  const checkAuthorization = async () => {
    try {
      await axios.get(`${import.meta.env.VITE_API_URI}/api/user/profile`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setAuthorized(true); // Jika berhasil, set authorized ke true
    } catch {
      setAuthorized(false); // Jika gagal, set authorized ke false
    }
  };

  // Call authorization check on component mount
  useEffect(() => {
    checkAuthorization();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("content", content);
    if (thumbnail) {
      formData.append("images", thumbnail);
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URI}/api/posts/create`,
        {
          method: "POST",
          headers: {
            Authorization: token,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      Swal.fire({
        title: "Sukses!",
        text: "Post berhasil dibuat.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/0xadminblog");
      });
    } catch (error) {
      Swal.fire({
        title: "Gagal!",
        text: "Terjadi kesalahan saat membuat post.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  if (authorized === null) return null; // Tampilkan loading sementara menunggu hasil otorisasi
  if (!authorized) return <NotFound />; // Tampilkan NotFound jika tidak terotorisasi

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="text-secondary opacity-75">
            Judul:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border bg-primary text-secondary opacity-75 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
        </div>
        <div className="my-4">
          <label className="text-secondary opacity-75">
            Kategori:
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 border bg-primary text-secondary opacity-75 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
        </div>
        <div className="my-4">
          <label className="text-secondary opacity-75">
            Thumbnail:
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setThumbnail(e.target.files[0])}
              className="w-full px-3 py-2 border bg-primary text-secondary opacity-75 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Konten:
            <Editor
              apiKey="mrabwgnrv128p215bqq2darah5ub5985b2g18di8jph5ll52" // Ganti dengan kunci API Anda
              initialValue="<p>Konten di sini...</p>"
              init={{
                plugins: [
                  "anchor",
                  "autolink",
                  "charmap",
                  "codesample",
                  "emoticons",
                  "image",
                  "link",
                  "lists",
                  "media",
                  "searchreplace",
                  "table",
                  "visualblocks",
                  "wordcount",
                  "checklist",
                  "mediaembed",
                  "casechange",
                  "export",
                  "formatpainter",
                  "pageembed",
                  "a11ychecker",
                  "tinymcespellchecker",
                  "permanentpen",
                  "powerpaste",
                  "advtable",
                  "advcode",
                  "editimage",
                  "advtemplate",
                  "ai",
                  "mentions",
                  "tinycomments",
                  "tableofcontents",
                  "footnotes",
                  "mergetags",
                  "autocorrect",
                  "typography",
                  "inlinecss",
                  "markdown",
                ],
                toolbar:
                  "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
              }}
              onEditorChange={(newContent) => setContent(newContent)}
            />
          </label>
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-secondary py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Tambah
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
