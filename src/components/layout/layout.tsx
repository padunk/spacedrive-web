import { motion, useTransform, useViewportScroll } from 'framer-motion'
import React from 'react'
import { FaDiscord, FaGithub, FaInstagram, FaTwitch, FaTwitter } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiBookOpen, HiMap, HiOutlineQuestionMarkCircle } from 'react-icons/hi'
import { IoMdPeople } from 'react-icons/io'
import { SiOpencollective } from 'react-icons/si'
import { Link, NavLink, Outlet } from 'react-router-dom'

import Space from '../utils/space'

export type FooterListType = {
  name: string;
  link: string;
  disabled: boolean;
};

const navigationMenu = [
  {
    icon: <FaDiscord />,
    title: "Join Discord",
    href: "https://discord.gg/gTaF2Z44f5",
  },
  {
    icon: <FaGithub />,
    title: "Repository",
    href: "https://github.com/spacedriveapp/spacedrive",
  },
  {
    icon: <HiMap />,
    title: "Roadmap",
    href: "/",
  },
  {
    icon: <HiOutlineQuestionMarkCircle />,
    title: "FAQ",
    href: "/faq",
  },
  {
    icon: <IoMdPeople />,
    title: "Team",
    href: "/team",
  },
  {
    icon: <HiBookOpen />,
    title: "Blog",
    href: "/blog",
  },
  {
    icon: <HiOutlineQuestionMarkCircle />,
    title: "Careers",
    href: "/careers",
  },
];

const socmeds = [
  {
    icon: <FaTwitter />,
    name: "twitter",
    href: "https://twitter.com/spacedriveapp",
  },
  {
    icon: <FaDiscord />,
    name: "discord",
    href: "https://discord.gg/gTaF2Z44f5",
  },
  {
    icon: <FaInstagram />,
    name: "instagram",
    href: "https://instagram.com/spacedriveapp",
  },
  {
    icon: <FaGithub />,
    name: "github",
    href: "https://github.com/spacedriveapp",
  },
  {
    icon: <SiOpencollective />,
    name: "opencollective",
    href: "https://opencollective.com/spacedrive",
  },
  {
    icon: <FaTwitch />,
    name: "twitch",
    href: "https://twitch.tv/jamiepinelive",
  },
];

const abouts = [
  {
    name: "Team",
    link: "/team",
    disabled: false,
  },
  {
    name: "FAQ",
    link: "/faq",
    disabled: false,
  },
  {
    name: "Careers",
    link: "/careers",
    disabled: false,
  },
  {
    name: "Changelog",
    link: "/changelog",
    disabled: false,
  },
  {
    name: "Blog",
    link: "/blog",
    disabled: false,
  },
];

const downloads = [
  {
    name: "masOS",
    link: "/macos",
    disabled: true,
  },
  {
    name: "Windows",
    link: "/windows",
    disabled: true,
  },
  {
    name: "Linux",
    link: "/linux",
    disabled: true,
  },
];

const developers = [
  {
    name: "Documentation",
    link: "https://github.com/spacedriveapp/spacedrive/tree/main/docs",
    disabled: false,
  },
  {
    name: "Contribute",
    link: "https://github.com/spacedriveapp/spacedrive/blob/main/CONTRIBUTING.md",
    disabled: false,
  },
  {
    name: "Extensions",
    link: "/extensions",
    disabled: true,
  },
  {
    name: "Self Host",
    link: "/self-host",
    disabled: true,
  },
];

const orgs = [
  {
    name: "Open Collective",
    link: "https://opencollective.com/spacedrive",
    disabled: false,
  },
  {
    name: "License",
    link: "https://github.com/spacedriveapp/spacedrive/blob/main/LICENSE",
    disabled: false,
  },
  {
    name: "Privacy",
    link: "/privacy",
    disabled: true,
  },
  {
    name: "Terms",
    link: "/terms",
    disabled: true,
  },
];

const Layout = () => {
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 100]);
  const [headerClass, setHeaderClass] = React.useState("bg-transparent");
  yRange.onChange((v) => {
    if (v < 2) {
      setHeaderClass("bg-transparent");
    } else {
      setHeaderClass("bg-gray-900");
    }
  });

  const activeClassName = "underline text-violet-400";
  return (
    <div className="h-full w-full min-h-screen flex flex-col bg-black text-gray-50">
      <motion.header
        className={
          "transition-colors px-28 h-16 fixed inset-0  z-50 " + headerClass
        }
      >
        <nav className="flex h-full justify-between">
          <div className="flex items-center h-full">
            <a
              href="https://spacedrive.com"
              className="flex items-center gap-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.spacedrive.com/assets/logo.55968170.png"
                alt="spacedrive"
                className="w-10"
              />
              <h3 className="text-xl">Spacedrive</h3>
            </a>
          </div>
          <div className="lg:flex items-center h-full hidden">
            <ul className="flex gap-16 text-lg">
              {navigationMenu.slice(2).map((menu) => {
                return (
                  <li
                    key={menu.title}
                    className="text-gray-400 hover:text-gray-200"
                  >
                    <NavLink
                      to={menu.href}
                      className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                      }
                    >
                      {menu.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="lg:flex items-center h-full hidden">
            <ul className="flex gap-3">
              {navigationMenu.slice(0, 2).map((menu) => {
                return (
                  <li key={menu.title} className="mb-1 text-2xl">
                    <a
                      href={menu.href}
                      key={menu.title}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {menu.icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex items-center h-full lg:hidden">
            <HamburgerMenu />
          </div>
        </nav>
      </motion.header>
      <main className="flex-1 bg-black text-gray-50">
        <Outlet />
      </main>
      <footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 bg-neutral-900 lg:h-96 place-items-center pt-20">
        <section className="sm:col-span-2 flex flex-col gap-6">
          <img
            src="https://www.spacedrive.com/assets/logo.55968170.png"
            alt="spacedrive"
            className="w-10 block"
          />
          <div>
            <h3 className="text-xl">Spacedrive</h3>
            <p>&copy; Copyright 2022 Spacedrive Technology Inc.</p>
          </div>
          <div className="flex gap-4">
            {socmeds.map((socmed) => {
              return (
                <span
                  key={socmed.name}
                  className="text-gray-300 hover:text-gray-50 transition-colors text-3xl"
                >
                  <a
                    href={socmed.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {socmed.icon}
                  </a>
                </span>
              );
            })}
          </div>
        </section>
        <section className="lg:place-self-start h-full">
          <h3 className="font-bold mb-4 text-white">ABOUT</h3>
          <ul>
            <FooterList data={abouts} />
          </ul>
        </section>
        <section className="lg:place-self-start h-full">
          <h3 className="font-bold mb-4 text-white">DOWNLOADS</h3>
          <ul>
            <FooterList data={downloads} />
          </ul>
        </section>
        <section className="lg:place-self-start h-full">
          <h3 className="font-bold mb-4 text-white">DEVELOPERS</h3>
          <ul>
            <FooterList data={developers} />
          </ul>
        </section>
        <section className="lg:place-self-start h-full">
          <h3 className="font-bold mb-4 text-white">ORG</h3>
          <ul>
            <FooterList data={orgs} />
          </ul>
        </section>
      </footer>
    </div>
  );
};

export default Layout;

function HamburgerMenu() {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      >
        <span>
          <GiHamburgerMenu />
        </span>
      </button>
      <div
        className={`${
          openMenu ? "block" : "hidden"
        } absolute right-0 top-auto bg-gray-900 px-6 py-4 rounded-lg border border-gray-800 z-50 w-40`}
      >
        <ul>
          {navigationMenu.slice(0, 2).map((menu) => {
            return (
              <li key={menu.title} className="mb-1">
                <a
                  href={menu.href}
                  key={menu.title}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="flex items-center text-sm gap-2">
                    <span className="text-base">{menu.icon}</span>
                    {menu.title}
                  </span>
                </a>
              </li>
            );
          })}
          <Space className="border-b border-b-gray-600 my-2" />
          {navigationMenu.slice(2).map((menu) => {
            return (
              <li key={menu.title} className="mb-1">
                <Link to={menu.href} key={menu.title}>
                  <span className="flex items-center text-sm gap-2">
                    <span className="text-base">{menu.icon}</span>
                    {menu.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function FooterList({ data }: { data: FooterListType[] }) {
  return (
    <>
      {data.map((d) => {
        return (
          <li
            key={d.name}
            className={`mb-4 text-lg ${d.disabled ? "text-gray-500" : ""}`}
          >
            {d.disabled ? <p>{d.name}</p> : <Link to={d.link}>{d.name}</Link>}
          </li>
        );
      })}
    </>
  );
}
