import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const index = () => {
  const blogs = [
    {
      id: 1,
      title: "Chichen Itza",
      description: "Fingerstache flexitarian street art...",
      image:
        "https://nefariousreviews.wordpress.com/wp-content/uploads/2016/09/serial-experiments-lain-pc-build.jpg",
      link: "/blogs/chichen-itza",
      category: "Security",
    },
    {
      id: 2,
      title: "Chichen Itza",
      description: "Fingerstache flexitarian street art...",
      image:
        "https://nefariousreviews.wordpress.com/wp-content/uploads/2016/09/serial-experiments-lain-pc-build.jpg",
      link: "/blogs/chichen-itza",
      category: "Security",
    },
  ];

  return (
    <>
      <div className="text-secondary font-lexend opacity-75">
        <section className="max-w-xl mx-auto">
          <h1 className="text-3xl font-bold">Blog</h1>
          <p className="mt-2">
            Postingan yang dibuat saat developernya gabut, ai powered.
          </p>
        </section>

        <section className="flex justify-center md:px-6 py-10 gap-8 flex-wrap">
          {blogs.map((blog) => (
            <Link to={blog.link} key={blog.id}>
              <motion.div
                className="relative bg-primary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[300px] object-cover opacity-75 hover:opacity-100 transition-all duration-300"
                />
                <div className="absolute top-2 left-2 bg-primary bg-opacity-75 text-secondary py-1 px-2 rounded-lg">
                  <span className="text-sm font-semibold">{blog.category}</span>
                </div>
                <div className="p-4 text-secondary opacity-75 font-lexend">
                  <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  <p className="text-sm">{blog.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </section>
      </div>
    </>
  );
};

export default index;
