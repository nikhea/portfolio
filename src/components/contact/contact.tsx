import React from "react";
import { FaMapMarkedAlt, FaMailBulk } from "react-icons/fa";

const Contact = () => {
  const contact = ContactData.map((contact, index) => (
    <div
      className="flex flex-col items-center text-center lg:text-start lg:flex-row"
      key={index}
    >
      <div className="flex items-center justify-center w-20 h-20 p-5 mb-5 bg-white rounded-full shadow-lg ">
        <span>{contact.icon}</span>
      </div>
      <div className="mx-5 space-y-2 ">
        <h1 className="text-xl font-bold">{contact.name}</h1>
        <p className="text-lg text-gray-500 ">{contact.text}</p>
      </div>
    </div>
  ));
  return (
    <div className={`container`}>
      <div className={` my-20  flex flex-col justify-center`}>
        {" "}
        <div className="my-10 text-center lg:text-start">
          <h1 className="text-xl font-bold text-blue-600 uppercase">contact</h1>
          <p className="text-2xl font-bold">Don't be shy! Hit me up! 👇</p>
        </div>
        <div className="flex flex-col items-center gap-10 my-5 lg:flex-row">
          {contact}
        </div>
      </div>
    </div>
  );
};

export default Contact;

export const ContactData = [
  {
    icon: <FaMapMarkedAlt className="w-10 h-10 text-blue-600 " />,
    name: "Location",
    text: "Lagos, Nigeria",
  },
  {
    icon: <FaMailBulk className="w-10 h-10 text-blue-600" />,
    name: "mail",
    text: "imonikheaugbodaga@gmail.com",
  },
];
