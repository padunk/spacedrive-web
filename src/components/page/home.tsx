import { motion } from 'framer-motion'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { HiArrowSmRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

import Space from '../utils/space'

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="h-full container m-auto p-4 relative">
      <div>
        <div
          className="absolute w-[30%] h-[400px] left-1/3-0 top-[500px] rounded-full bg-violet-500"
          style={{ filter: "blur(300px)" }}
        />
        <div
          className="absolute w-[30%] h-[400px] left-2/3 top-[500px] bg-pink-500"
          style={{ filter: "blur(300px)" }}
        />
        <div
          className="absolute w-[400px] h-[400px] left-1/2 top-1/2 -translate-x-1/2 bg-fuchsia-500"
          style={{ filter: "blur(300px)" }}
        />
      </div>
      <div className="z-10">
        <motion.section
          initial={{ opacity: 0, translateY: "-20px" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="pt-32 flex justify-center items-center"
        >
          <div className="rounded-full border border-gray-600 py-2 px-4 text-gray-400 bg-neutral-900 text-sm lg:text-base">
            <Link
              to="/blog/spacedrive-funding-announcement"
              className="flex gap-2"
            >
              <span className="font-bold">
                Spacedrive raises $2M led by OSS Capital
              </span>
              <span className="text-gray-600">|</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-blue-400">
                Read post <HiArrowSmRight className="inline text-blue-500" />
              </span>
            </Link>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, translateY: "-20px" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center items-center mt-10 gap-8 relative z-10"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-extrabold text-center">
            A file explorer from the future.
          </h1>
          <p className="text-gray-500 lg:text-lg max-w-prose text-center">
            Combine your drives and clouds into one database that you can
            organize and explore from any device. Designed for creators,
            hoarders and the painfully disorganized.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.67 }}
          className="mt-8 flex justify-center items-center flex-col relative z-10"
        >
          <div className="flex justify-center items-center gap-4 text-sm lg:text-base">
            <button className="bg-blue-500 py-1 px-4 rounded-md">
              Join Wailtlist
            </button>
            <button className="bg-gray-900 py-1 px-4 rounded-md flex items-center gap-2">
              <FaGithub className="inline lg:text-lg" /> Star on Github
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4 text-center">
            Coming soon on macOS, Windows and Linux.
          </p>
          <p className="text-sm text-gray-400">
            Shortly after to iOS & Android.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.67 }}
          className="mt-16 relative z-10"
        >
          <div className="w-4/5 mx-auto">
            <img src="https://www.spacedrive.com/app.png" alt="overview" />
          </div>
        </motion.section>

        <Space className="h-10 lg:h-40" />

        <section className="px-16 py-20 flex flex-col gap-8 relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
            Never leave a file behind.
          </h2>
          <p className="text-gray-500 text-sm md:text-base lg:text-xl max-w-[50ch]">
            Spacedrive accounts for every file you own, uniquely fingerprinting
            and extracting metadata so you can sort, tag, backup and share files
            without limitations of any one cloud provider.
          </p>
          <a
            href="https://github.com/spacedriveapp"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 text:sm md:text-base lg:text-xl"
          >
            Find out more <HiArrowSmRight className="inline" />
          </a>
        </section>
        <Space className="h-10 lg:h-40" />
      </div>
    </div>
  );
};

export default Home;
