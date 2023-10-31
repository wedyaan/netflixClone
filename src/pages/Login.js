import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/Authanti";

export default function Login() {
  // read more
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <div>
      <p className="extra-content">
        تخضع المعلومات التي تجمعها خدمة reCAPTCHA من Google إلى
        <a href="" className="text-[#0080ff]">
          سياسةالخصوصية
        </a>
        و
        <a href="" className="text-[#0080ff]">
          بنود الخدمة
        </a>{" "}
        المعمول بهما لدى Google، وتُستخدم لتقديم خدمة reCAPTCHA وصيانتها
        وتحسينها، فضلاً عن أغراض الأمان العامة (لا تُستخدم لأغراض تقديم
        الإعلانات المخصصة بواسطة Google).
      </p>
    </div>
  );
  const linkName = readMore ? "   " : "تعرف على المزيد    ";
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const { user, logIn } = UserAuth("");
  const [accept, setAccept] = useState(false);
  const [emailError, setEmailError] = useState("");
  // const [flag, setFlag] = useState(false);

  // Auth login

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // async function Submit(e) {
  //   let flag = false;
  //   e.preventDefault();
  //   setAccept(true);
  //   if (email === "" || password.length < 4 || password.length > 60) {
  //     flag = false;
  //   } else flag = true;

  //   try {
  //     if (flag) {
  //       let res = await axios.post("http://127.0.0.1:8000/api/rregister", {
  //         email: email,
  //         password: password,
  //       });
  //       if (res.status === 201) {
  //         window.localStorage.setItem("email", email);
  //         window.location.pathname = "/register";
  //       }
  //     }
  //   } catch (error) {
  //     setEmailError(error);
  //   }
  // }

  return (
    <div>
      <section className=" bg-no-repeat bf bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/cff275af-b0fc-4cbe-8cbd-436d485db632/SA-ar-20231009-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-gray-700 bg-blend-multiply">
        {/* logo icon */}
        {/* <div className="">
          <h1 className=" flex justify-end text-[#E50914] text-[3.5rem] mr-10 ">
            NETFLIX
          </h1>
        </div> */}
        {/* form */}
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 l">
          <div className="mx-auto max-w-md px-6 py-12 bg-[rgba(0,0,0,.75)] border-0 shadow-lg sm:rounded-3xl">
            <h1 className="text-2xl font-bold mb-8 text-white text-right">
              تسجيل الدخول
            </h1>
            <form id="form" onSubmit={handleSubmit}>
              <div className="relative z-0 w-full mb-5">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  name="text"
                  placeholder=" البريد الالكتروني او رقم الهاتف  "
                  className="pt-3 text-right pb-2 block w-full px-0 mt-0 bg-[#333] text-[#fff]  border-0     appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                {email === "" && accept && (
                  <p className="text-[#e87c03] text-right">
                    يرجى إدخال عنوان بريد إلكتروني صالح أو رقم هاتف صالح
                  </p>
                )}
                {accept && emailError === 422 && (
                  <p className="text-[#e87c03] text-right">
                    email is already token
                  </p>
                )}
              </div>

              <div className="relative z-0 w-full mb-5">
                <input
                  value={password}
                  onChange={(e) => setPass(e.target.value)}
                  type="password"
                  name="password"
                  placeholder=" كلمة المرور"
                  className="pt-3 text-right pb-2 block w-full px-0 mt-0 bg-[#333] text-[#fff]  border-0     appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                {password.length < 4 && accept && (
                  <p className="text-[#e87c03] text-right">
                    يجب أن تتضمن كلمة المرور ما بين 4 إلى 60 حرفًا
                  </p>
                )}
              </div>

              <button
                id="button"
                type="submit"
                className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-[#E50914]  focus:outline-none"
              >
                تسجيل الدخول
              </button>

              <div className="flex justify-between pt-4 text-[#b3b3b3] text=[13px]">
                <div className="flex">
                  <p className=""> تحتاج للمساعدة ؟ </p>
                </div>

                <div className="flex gap-2   items-center">
                  <p> تذكرني </p>
                  <input
                    type="checkbox"
                    className=" bg-white checked:bg-[#8c8c8c] border-none focus:none border-[3px] outline-none"
                  ></input>
                </div>
              </div>

              <div className="text-right  pt-12 flex justify-end gap-1">
                <Link to="/signUp" className="text-white">
                  التسجيل الان
                </Link>
                <p className="text-[gray]"> ؟ Netflix جديد على</p>
              </div>

              <div className="text-right  pt-12 flex justify-end gap-1 text-[13px]">
                <p className="text-[#8c8c8c] text-[13px]">
                  هذه الصفحة محمية بواسطة خدمة reCAPTCHA من Google لضمان أنك لست
                  إنسانًا آليًا
                  <a
                    className="text-[#0071eb]"
                    onClick={() => {
                      setReadMore(!readMore);
                    }}
                  >
                    {linkName}
                  </a>
                  {readMore && extraContent}
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* end form   */}
        {/* footer */}
        <footer className="bg-[rgba(0,0,0,.75)] text-[#757575] text-[13px] py-[30px]  ">
          <div className="mx-auto w-full max-w-screen-xl">
            <h2 className="      flex justify-end     text-sm font-semibold     dark:text-white">
              هل لديك أسئلة؟ اتصل بالرقم ‎800-850-1261
            </h2>
            <div className="grid grid-cols-2 gap-8 lg:py-8 md:grid-cols-4  text-right  ">
              <div>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://example.com" className=" hover:underline">
                      الخصوصية
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://example.com" className="hover:underline">
                      بنود الاستخدام
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://example.com" className="hover:underline">
                      مركز خدمة العملاء{" "}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://example.com" className="hover:underline">
                      معلومات الشركة
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://example.com" className="hover:underline">
                      الأسئلة الشائعة
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://example.com" className="hover:underline">
                      تفضيلات الكوكيز
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* dropdown */}
            <div className="   text-right mb-12  h-4  ">
              <select className=" bg-[rgba(0,0,0,.75)] text-[#8c8c8c] text-[13px] border-white border-[2px] gap-3    focus:outline-none focus:ring-white-300 font-medium   text-sm px-5 py-2.5   text-center inline-flex items-center   ">
                <option defaultValue>العربية</option>
                <option value="english">English</option>
              </select>

              {/*   EARTH ICON
                <svg
                  className="w-2.5 h-2.5 ml-2.5 text-[#757575]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
                العربية
                <svg
                  className="text-[#757575]"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                  fill="#757575"
                >
                  {" "}
                  <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                </svg>
              </button>

             */}
            </div>
          </div>
        </footer>
        {/* end footer  */}
      </section>
    </div>
  );
}
