import { BrandGithub, Envelope } from "@mynaui/icons-react";
import { motion } from "framer-motion";
import ParticleBackground from "./Particlebg";

const Profile = ({ email, github }) => {
  return (
    <>
      <section className="text-secondary max-w-2xl mx-auto font-lexend relative">
        {/* <ParticleBackground /> */}
        <motion.div
          className="flex items-end gap-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 0.75, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <h1 className="text-3xl font-bold">Herlangga</h1>
          <span className="text-sm opacity-75">
            or <span className="font-bold underline">Angga</span>
          </span>
        </motion.div>

        <motion.div
          className="mt-3 text-justify opacity-75"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 0.75, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
        >
          <div className="my-3 md:flex md:space-x-2">
            <p>Hai 👋, Saya Herlangga Maulani</p>
            <p>
              (
              <span className="opacity-75 font-bold text-red-500 mb-3">
                Web Developer
              </span>
              )
            </p>
          </div>
          <p>
            Seorang pengembang web yang masih bersekolah dengan pengalaman dalam
            mengerjakan berbagai proyek kecil hingga menengah. Tertarik untuk
            bergabung dalam proyek yang lebih besar dan menantang guna mengasah
            keterampilan lebih lanjut. Selain pengembangan web, minat juga
            tertuju pada keamanan siber, khususnya Network Penetration Testing.
            Sesekali berpartisipasi dalam Capture The Flag (CTF) sebagai sarana
            meningkatkan kemampuan di bidang keamanan siber.
          </p>{" "}
          <br />{" "}
          <p>
            Jika ada peluang yang sesuai, jangan ragu untuk menghubungi. Terima
            kasih! ✨
          </p>
        </motion.div>

        <hr className="w-20 h-1 bg-gray opacity-50 mx-auto my-4" />

        <motion.p
          className="mb-2 opacity-75 text-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.75, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
        >
          Find me on
        </motion.p>

        <ul className="flex items-center space-x-3">
          <li className="bg-[#18191c] py-2 px-4 rounded-md text-sm opacity-75 hover:bg-[#8882] transition-all duration-300 cursor-pointer">
            <a
              href={github}
              className="flex space-x-2 items-center"
              target="_blank"
            >
              <BrandGithub size={20} />
              <span>Github</span>
            </a>
          </li>

          <li className="bg-[#18191c] py-2 px-4 rounded-md text-sm opacity-75 hover:bg-[#8882] transition-all duration-300 cursor-pointer">
            <a
              href={email}
              className="flex space-x-2 items-center"
              target="_blank"
            >
              <Envelope size={20} />
              <span>Email</span>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Profile;
