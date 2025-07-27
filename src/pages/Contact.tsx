import { useEffect, useState } from "react";
import Button from "../components/core/Button";
import Input from "../components/core/Input";
import { Bounce, toast } from "react-toastify";
import BreadCrumb from "../components/core/BreadCrumb";

const Contact = ({ pageTitle }: any) => {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (
      formData.firstName ||
      formData.lastName ||
      formData.email ||
      formData.phone ||
      formData.message
    ) {
      toast.success("Your Inquiry have been Submitted Successfully!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      toast.error("All Fields Are Required!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="w-full flex justify-center flex-col items-center">
      <BreadCrumb heading="Contact Us" page="Contact" />
      <div className="px-10 md:px-20 lg:px-40 w-full flex justify-center mt-10 flex-col items-center">
        <h1 className="text-gray-500 font-bold text-3xl mb-10">Contact Form</h1>
        <form
          className="flex flex-col items-center gap-5 w-full lg:w-2/3 mb-10 animate__animated animate__headShake"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-3 w-full">
            <Input
              inpType="text"
              placeholder="First Name"
              label="First Name"
              name="firstName"
              inpVal={formData.firstName}
              onChangeFun={handleChange}
            />
            <Input
              inpType="text"
              placeholder="Last Name"
              name="lastName"
              label="Last Name"
              inpVal={formData.lastName}
              onChangeFun={handleChange}
            />
          </div>
          <div className="flex gap-3 w-full">
            <Input
              inpType="text"
              placeholder="Email Address"
              name="email"
              label="Email Address"
              inpVal={formData.email}
              onChangeFun={handleChange}
            />
            <Input
              inpType="text"
              placeholder="Phone Number"
              name="phone"
              label="Phone Number"
              inpVal={formData.phone}
              onChangeFun={handleChange}
            />
          </div>
          <div className="w-full">
            <p className="text-sm mb-1 text-slate-600">Message</p>
            <textarea
              className="p-2 bg-white w-full border rounded"
              placeholder="Enter You Your Query"
              cols={3}
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <Button
            title="Subscribe Now"
            classes="transitionClasses w-max btnCommen bg-purple-500 text-white p-2 border border-purple-500 hover:text-purple-500 hover:bg-white"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
