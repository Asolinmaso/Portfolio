"use client";
import React, { useState ,useCallback} from "react";
import linkedin_icon from "../../public/linkedin_icon.svg";
import github_icon from "../../public/github_icon.svg";
import Image from "next/image";
import Link from "next/link";

const ContactSection = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: formValue.email,
      subject: formValue.subject,
      message: formValue.message,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/sendEmail";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);

    if (response.status === 200) {
      console.log("Messsage sent");
      setFormValue({
        email: "",
        subject: "",
        message: "",
      });
    }
  };
  return (
    <section className="grid md:grid-cols-2 gap-4 my-2 py-4" id="contact">
      <div>
        <h5 className="text-white text-xl font-bold mb-2">Contact Details</h5>
        <div className="text-white">
          <p>
            <span className="font-bold text-red-500">Phone Number :</span>{" "}
            8220158319
          </p>
          <p>
            <span className="font-bold text-orange-300">Email :</span>{" "}
            asolinmaso22@gmail.com
          </p>
        </div>
        <div className="flex items-center gap-10">
          <Link href={"https://www.linkedin.com/in/asolin-maso-92b051288/"}>
            <Image src={linkedin_icon} alt="linkedin" />
          </Link>
          <Link href={"https://github.com/asolinmaso22/"}>
            <Image src={github_icon} alt="github" className="bg-white" />
          </Link>
        </div>
      </div>

      <div>
        <h5 className="text-white text-xl font-bold mb-4">Let's Connect</h5>

        <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
          <label className="text-white" htmlFor="email">
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValue.email}
            onChange={handleChange}
            className="w-9/12 rounded-md p-1 text-gray-100 border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9]"
            required
            placeholder="example@gmail.com"
          />
          <label className="text-white" htmlFor="subject">
            Subject
          </label>
          <input
            type="subject"
            id="subject"
            name="subject"
            value={formValue.subject}
            onChange={handleChange}
            className="w-9/12 p-1 rounded-md text-gray-100 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]"
            required
            placeholder="About"
          />
          <label className="text-white" htmlFor="message">
            Message
          </label>
          <textarea
            type="message"
            id="message"
            name="message"
            value={formValue.message}
            onChange={handleChange}
            className="w-9/12 rounded-md p-1 border border-[#33353F] text-gray-100 bg-[#18191E] placeholder-[#9CA2A9]"
            required
            placeholder="Let's talk about"
          />
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 w-9/12 py-2.5 text-white font-medium rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
