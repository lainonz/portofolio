import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaravel, faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const index = () => {
  const technologyIcons = {
    Bootstrap: faBootstrap,
    Laravel: faLaravel,
  };

  const blogs = [
    {
      id: 1,
      title: "Chichen Itza",
      description: "Fingerstache flexitarian street art...",
      image:
        "https://media.suara.com/pictures/653x366/2024/06/01/22800-cuplikan-anime-bocchi-the-rock.jpg",
      link: "/blogs/chichen-itza",
      technologies: ["Laravel", "Bootstrap"],
    },
  ];

  return (
    <>
      <div className="text-secondary font-lexend opacity-75">
        <section className="max-w-xl mx-auto">
          <h1 className="text-3xl font-bold">Project</h1>
          <p className="mt-2">Kumpulan project yang telah saya buat</p>
        </section>

        <section className="flex justify-center md:px-6 py-10 gap-8 flex-wrap">
          {blogs.map((blog) => (
            <Link to={blog.link} key={blog.id}>
              <motion.div
                className="relative bg-primary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[300px] object-cover opacity-75 hover:opacity-100 transition-all duration-300"
                />
                <div className="absolute top-2 left-2 bg-primary bg-opacity-75 text-secondary py-1 px-2 rounded-lg">
                  <ul className="flex space-x-1 items-center">
                    {blog.technologies.map((tech) => (
                      <li key={tech}>
                        <FontAwesomeIcon
                          icon={technologyIcons[tech] || faBootstrap} // Default to faBootstrap if tech not found
                          title={tech}
                          className="text-2xl"
                        />
                      </li>
                    ))}
                  </ul>
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
