"use client";
import Image from "next/image";
import React, { useState, useTransition, useEffect, useRef } from "react";
import about from "../../public/about.jpeg";
import TapButton from "./TapButton";

const Tap_Data = [
  {
    title: "Skills",
    id: "skills",
    scrollable: true,
    content: (
      <ul className="flex flex-col gap-2 list-disc ml-5 text-[#ADB7BE]">
        <li>Python, JavaScript</li>
        <li> React.js, Next.js, Node.js, Express.js</li>
        <li>Git, GitHub</li>
        <li>HTML, CSS, Bootstrap,Tailwind CSS</li>
        <li>PostgreSQL, MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    scrollable: false,
    content: (
      <ul className="flex flex-col gap-2 list-disc ml-5 text-[#ADB7BE]">
        <li>Bachelor of Commerce, Scott Christian College, Nagercoil (CGPA: 8.2)</li>
        <li> Higher Secondary School-Devi Higher Secondary School, (CGPA: 8.7)</li>
        <li>Secondary School - St. James High School Vaniyakudy, (CGPA: 7.99)</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    scrollable: false,
    content: (
      <div className="flex flex-col gap-2 list-disc ml-5 text-[#ADB7BE]">
        I have 6 month of experience in the IT.
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const skillsRef = useRef(null);

  useEffect(() => {
    if (tab === "skills" && skillsRef.current) {
      const scrollElement = skillsRef.current;
      let scrollPosition = 0;
      const scrollInterval = setInterval(() => {
        scrollPosition += 1;
        scrollElement.scrollTop = scrollPosition;
        if (scrollPosition >= scrollElement.scrollHeight - scrollElement.clientHeight) {
          clearInterval(scrollInterval);
        }
      }, 50); // Adjust the speed of scrolling by changing the interval time
      return () => clearInterval(scrollInterval); // Cleanup on component unmount or tab change
    }
  }, [tab]);

  const handleTapChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const currentTab = Tap_Data.find((a) => a.id === tab);

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 py-12 px-4 items-center xl:gap-16 sm:px-16">
        <Image src={about} width={500} height={500} alt="About" className="rounded-lg shadow-lg" />
        <div>
          <h2 className="mb-4 font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            About Me
          </h2>
          <p className="text-base lg:text-lg text-[#ADB7BE]">
          I have 6 month of experience in the IT.
          </p>
          <div className="mt-8 flex space-x-4">
            {Tap_Data.map(({ id, title }) => (
              <TapButton
                key={id}
                active={tab === id}
                selectTap={() => handleTapChange(id)}
              >
                {title}
              </TapButton>
            ))}
          </div>
          <div
            ref={skillsRef}
            className={`mt-6 relative ${currentTab.scrollable ? "min-h-[150px] max-h-[150px] overflow-hidden" : "min-h-[150px]"}`}
          >
            {currentTab.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
