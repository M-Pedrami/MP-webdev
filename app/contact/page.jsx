"use client";
import { useState } from "react";
import { Input, Textarea } from "../Libraries";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

export default function ContactPage() {
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormdata({
          name: "",
          email: "",
          message: "",
        });
        toast.success("Email Sent!", {
          position: "top-right",
          autoClose: 3000,
          closeOnClick: true,
        });
        router.push("/");
      } else {
        const data = await response.json();
        toast.error(data.message, {
          autoClose: 3000,
          closeOnClick: true,
          theme: "colored"
        });
      }
    } catch (error) {
      console.error("handleSubmit/contact ERROR", error);
      // Handle other types of errors here
    }
  };

  return (
    <section className="p-20">
      <div className="container w-fit m-auto flex flex-col gap-5 p-2 lg:p-10 ">
        <h1 className="text-3xl p-2 italic font-bold border-l-8 border-black">
          {" "}
          Contact
        </h1>

        <div className=" w-52 lg:w-72">
          <Input
            label="Name"
            size="lg"
            value={formData.name}
            onChange={(e) => {
              setFormdata((prevFormData) => ({
                ...prevFormData,
                name: e.target.value,
              }));
            }}
          />
        </div>
        <div className=" w-52 lg:w-72">
          <Input
            label=" Email"
            size="lg"
            value={formData.email}
            onChange={(e) => {
              setFormdata((prevFormData) => ({
                ...prevFormData,
                email: e.target.value,
              }));
            }}
          />
        </div>
        <div className=" w-64 lg:w-72">
          <Textarea
            label="Message"
            value={formData.message}
            onChange={(e) => {
              setFormdata((prevFormData) => ({
                ...prevFormData,
                message: e.target.value,
              }));
            }}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-gold w-3/4 bg-opacity-45 py-2 px-4 rounded-3xl font-semibold text-gray-800 hover:bg-opacity-85 hover:text-white border-2 border-gold hover:border-2 hover:border-gray-400 transition-all duration-300"
        >
          SEND MESSAGE
        </button>
      </div>
    </section>
  );
}
