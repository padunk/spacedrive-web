import React from 'react'
import { FaRegSmile } from 'react-icons/fa'
import { GrLineChart } from 'react-icons/gr'
import {
  HiOutlineCurrencyDollar, HiOutlineDesktopComputer, HiOutlineHeart, HiOutlineHome,
  HiOutlineLightningBolt, HiOutlineStar
} from 'react-icons/hi'
import { MdAccessTime } from 'react-icons/md'

import Button from '../utils/button'

type Props = {};

const values: CardProps[] = [
  {
    icon: <MdAccessTime />,
    theme: "neutral",
    title: "Async",
    descriptionSize: "lg",
    description:
      "To accommodate our international team and community, we work and communicate asynchrounously.",
  },
  {
    icon: <HiOutlineStar />,
    theme: "neutral",
    title: "Quality",
    descriptionSize: "lg",
    description:
      "From our interface design to our code, we strive to build software that will last.",
  },
  {
    icon: <HiOutlineLightningBolt />,
    theme: "neutral",
    title: "Speed",
    descriptionSize: "lg",
    description:
      "We get things done quickly, through small iteration cycles and frequent updates.",
  },
  {
    icon: <HiOutlineHeart />,
    theme: "neutral",
    title: "Transparency",
    descriptionSize: "lg",
    description:
      "We are human beings that make mistakes, but through total transparency we can solve them faster.",
  },
];

const perksAndBenefits: CardProps[] = [
  {
    icon: <HiOutlineCurrencyDollar />,
    theme: "green",
    title: "Competitive Salary",
    descriptionSize: "sm",
    description:
      "We want the best, and will pay for the best. If you shine through we'll make sure you're paid what you're worth.",
  },
  {
    icon: <GrLineChart />,
    theme: "fuchsia",
    title: "Stock Options",
    descriptionSize: "sm",
    description:
      "As an early employee, you deserve to own a piece of our company. Stock options will be offered as part of your onboarding process.",
  },
  {
    icon: <FaRegSmile />,
    theme: "purple",
    title: "Paid Time Off",
    descriptionSize: "sm",
    description:
      "Rest is important, you deliver your best work when you've had your downtime. We offer 2 weeks paid time off per year, and if you need more, we'll give you more.",
  },
  {
    icon: <HiOutlineHome />,
    theme: "yellow",
    title: "Work From Home",
    descriptionSize: "sm",
    description:
      "As an open source project, we're remote first and intend to keep it that way. Sorry Elon.",
  },
  {
    icon: <HiOutlineDesktopComputer />,
    theme: "cyan",
    title: "Desk Budget",
    descriptionSize: "sm",
    description:
      "Need an M1 MacBook Pro? We've got you covered. (You'll probably need one with Rust compile times)",
  },
  {
    icon: <HiOutlineHeart />,
    theme: "pink",
    title: "Health Care",
    descriptionSize: "sm",
    description:
      "We use Deel for hiring and payroll, all your health care needs are covered.",
  },
];

const jobs = [
  {
    title: "TypeScript React UI/UX Engineer",
    salaryRange: "$80k-$120k",
    type: "Full-time",
    description:
      "You'll build the primary desktop interface for Spacedrive in React, with TypeScript and Tailwind. You'll need an eye for design as well as a solid understanding of the React ecosystem.",
  },
  {
    title: "Rust Backend Engineer",
    salaryRange: "$80k-$120k",
    type: "Full-time",
    description:
      "You'll build out our Rust core, the decentralized backend that powers our app. From the virtual filesystem to encryption and search. You'll need to live and breathe Rust, not be afraid to get low-level.",
  },
  {
    title: "TypeScript React Native Engineer",
    salaryRange: "$80k-$120k",
    type: "Full-time",
    description:
      "You'll build out the majority of our mobile app in TypeScript and React Native. Developing a mobile first component library based on the design of our desktop application. You'll need to be passionate for building React Native apps that look and feel native.",
  },
];

const CareerPage = (props: Props) => {
  return (
    <div className="relative h-full">
      <div
        className="absolute w-[800px] h-[800px] right-0 top-0 bg-gradient-radial-career"
        style={{ filter: "blur(200px)" }}
      />
      <div className="pt-32 relative mx-12">
        <article className="max-w-[85ch] m-auto border-b-gray-700 border-b pb-40">
          <section>
            <h2 className="text-center text-6xl font-extrabold">
              Build the future of files.
            </h2>
            <p className="text-center text-gray-500 text-xl pt-10">
              Spacedrive is redefining the way we think about our personal data,
              building a open ecosystem to help preserve your digital legacy and
              make cross-platform file management a breeze.
            </p>
          </section>
          <div className="flex justify-center pt-10">
            <Button className="flex justify-center items-center py-2 px-6 bg-blue-600 rounded-lg text-lg">
              See Open Positions
            </Button>
          </div>
        </article>

        <article className="max-w-[85ch] m-auto border-b-gray-700 border-b pb-40 mt-40">
          <section>
            <h2 className="text-center text-4xl font-extrabold">Our Values</h2>
            <p className="text-center text-gray-50 text-xl pt-4">
              What drives us daily
            </p>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            {values.map((card) => {
              return <Card key={card.title} {...card} />;
            })}
          </section>
        </article>

        <article className="max-w-[85ch] m-auto border-b-gray-700 border-b pb-40 mt-40">
          <section>
            <h2 className="text-center text-4xl font-extrabold">
              Perk and Benefits
            </h2>
            <p className="text-center text-gray-50 text-xl pt-4">
              We're behind you 100%.
            </p>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {perksAndBenefits.map((card) => {
              return <Card key={card.title} {...card} />;
            })}
          </section>

          <article className="max-w-[85ch] m-auto border-b-gray-700 border-b pb-40 mt-40">
            <section>
              <h2 className="text-center text-4xl font-extrabold">
                Open Positions
              </h2>
              <p className="text-center text-gray-50 text-xl pt-4">
                Any of these suit you? Apply now!
              </p>
            </section>

            <section className="grid grid-cols-1 gap-8 mt-16">
              {jobs.map((job) => {
                return (
                  <div
                    key={job.title}
                    className="relative border rounded-lg py-8 px-10 w-full border-neutral-600"
                  >
                    <div className="absolute inset-0 overflow-hidden rounded-lg opacity-20 bg-neutral-700" />
                    <div className="flex items-end gap-10">
                      <h2 className="text-2xl font-semibold">{job.title}</h2>
                      <span className="flex items-center gap-1">
                        <HiOutlineCurrencyDollar />
                        {job.salaryRange}
                      </span>
                      <span className="flex items-center gap-1">
                        <MdAccessTime />
                        {job.type}
                      </span>
                    </div>
                    <p className="text-lg text-gray-400 mt-4">
                      {job.description}
                    </p>
                  </div>
                );
              })}
            </section>
          </article>

          <article className="max-w-[85ch] m-auto mt-40">
            <section>
              <h2 className="text-center text-4xl font-extrabold">
                How to apply?
              </h2>
              <p className="text-center text-gray-50 text-lg pt-4">
                Send your cover letter and resume to careers at spacedrive dot
                com and we'll get back to you shortly!
              </p>
            </section>
          </article>
        </article>
      </div>
    </div>
  );
};

export default CareerPage;

type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  descriptionSize: "sm" | "lg";
  theme:
    | "green"
    | "fuchsia"
    | "purple"
    | "yellow"
    | "cyan"
    | "pink"
    | "neutral";
};

function Card({ icon, title, description, descriptionSize, theme }: CardProps) {
  const size = {
    sm: "text-sm",
    lg: "text-lg",
  };

  const border = {
    green: "border-green-700",
    fuchsia: "border-fuchsia-700",
    purple: "border-purple-700",
    yellow: "border-yellow-700",
    cyan: "border-cyan-700",
    pink: "border-pink-700",
    neutral: "border-neutral-700",
  };

  const bg = {
    green: "bg-green-700",
    fuchsia: "bg-fuchsia-700",
    purple: "bg-purple-700",
    yellow: "bg-yellow-700",
    cyan: "bg-cyan-700",
    pink: "bg-pink-700",
    neutral: "bg-neutral-700",
  };

  const text = {
    green: "text-green-400",
    fuchsia: "text-fuchsia-400",
    purple: "text-purple-400",
    yellow: "text-yellow-400",
    cyan: "text-cyan-400",
    pink: "text-pink-400",
    neutral: "text-neutral-400",
  };

  const wrapperClass =
    "relative border rounded-lg py-8 px-10 w-full " + border[theme];
  const bgClass =
    "absolute inset-0 overflow-hidden rounded-lg opacity-20 " + bg[theme];
  const iconClass = "text-4xl " + text[theme];
  const descriptionClass = "text-gray-400 " + size[descriptionSize];

  return (
    <div className={wrapperClass}>
      <div className={bgClass} />
      <div className="relative z-10 flex flex-col gap-4">
        <div className={iconClass}>{icon}</div>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className={descriptionClass}>{description}</p>
      </div>
    </div>
  );
}
