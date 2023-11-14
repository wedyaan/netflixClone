import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

  // useState
  const linkName = readMore ? "   " : "تعرف على المزيد    ";
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const { user, logIn } = UserAuth();
  // const [accept, setAccept] = useState(false);
  const [error, setError] = useState("");
  const nav = useNavigate();
  // const [flag, setFlag] = useState(false);

  // Auth login

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (email === "" || password.length < 4 || password.length > 60) {
        alert("add Email and password ");
      } else {
        await logIn(email, password);
        nav("/");
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
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
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 l">
          <div className="mx-auto max-w-md px-6 py-12 bg-[rgba(0,0,0,.75)] border-0 shadow-lg sm:rounded-3xl">
            <h1 className="text-2xl font-bold mb-8 text-white text-right">
              تسجيل الدخول
            </h1>
            {error ? <p className="p-3 bg-red-400 my-2">{error}</p> : null}

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

              {/* <div className="text-right  pt-12 flex justify-end gap-1">
                <Link to="/signUp" className="text-white">
                  التسجيل الان
                </Link>
                <p className="text-[gray]"> ؟ Netflix جديد على</p>
              </div> */}

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
            </div>
          </div>
        </footer>
        {/* end footer  */}
      </section>
    </div>
  );
}
