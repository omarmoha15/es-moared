import React from 'react'

function About() {
  
  return (
    <div className="p-15">
<div className="p-20 bg-gray-200 rounded-3xl shadow-2xl mt-6">
  <div className="mt-20 text-center  border-b pb-12">
    <h1 className="text-4xl font-medium text-gray-700">عمر محمد, <span className="font-light text-gray-500">27</span></h1>
    <p className="font-light text-gray-600 mt-3">السعوديه, ابها</p>

    <p className="mt-8 text-gray-500">مبرمج - Front-end </p>
    <p className="mt-2 text-gray-500">University of Computer Science</p>

    <div className="">
          <div className="container mx-auto my-5 p-5">
            <div className="md:flex no-wrap md:-mx-2">
              {/* Left Side */}
              <div className="w-full md:w-3/12 md:mx-2">
                {/* Profile Card */}
                <div className="bg-white p-3 border-t-4 rounded-2xl border-gray-400">
                
                  <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                    عمر محمد
                  </h1>
                  <h3 className="text-gray-600 font-lg text-semibold leading-6">
                    مبرمج واجهات اماميه.
                  </h3>
                  <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
                    non deserunt
                  </p>
                  <ul
                    className="bg-gray-100 text-gray-600 rounded-2xl hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y  shadow-sm"
                  >
                    <li className="flex items-center py-3">
                      <span className=' ml-1'>الحاله</span>
                      <span className="ml-auto">
                        <span
                          className="bg-green-500 py-1 px-2 rounded text-white text-sm"
                        >
                          موظف
                        </span>
                      </span>
                    </li>
                    <li className="flex items-center py-3">
                      <span>تاريخ التعيين </span>
                      <span className="ml-auto">Sep 01, 2023</span>
                    </li>
                  </ul>
                </div>
               
                
              </div>
              {/* Right Side */}
              <div className="w-full md:w-9/12 mx-2 h-64">
                {/* Profile tab */}
                {/* About Section */}
                <div className="bg-white p-3 shadow-sm  rounded-2xl my-2">
                  <div
                    className="flex items-center space-x-2 font-semibold text-gray-900 leading-8"
                  >
                    <span className="text-gray-900">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide">بياناتي</span>
                  </div>
                  <div className="text-gray-700 ">
                    <div className="grid md:grid-cols-2 text-sm">
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">الاسم الاول</div>
                        <div className="px-4 py-2">عمر</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold"> الاسم الاخير</div>
                        <div className="px-4 py-2">سعيد</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">الجنس</div>
                        <div className="px-4 py-2">ذكر</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold"> رقم الهاتف.</div>
                        <div className="px-4 py-2">+11 998001001</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold"> العنوان</div>
                        <div className="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold"> العنوان</div>
                        <div className="px-4 py-2">ابها, امارة منطقة عسير</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">البريد الالكتروني</div>
                        <div className="px-4 py-2">
                          <a className="text-blue-800" href="mailto:jane@example.com">example@example.com</a>
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">تاريخ</div>
                        <div className="px-4 py-2">Nov 05, 1998</div>
                      </div>
                    </div>
                  </div>
                
                </div>
                {/* End of about section */}

                {/* <div className="my-4"></div> */}

                {/* Experience and education */}
                <div className="bg-white p-1 shadow-sm  rounded-2xl">
                  <div className="grid grid-cols-2">
                    <div>
                      <div
                        className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3"
                      >
                        <span className="text-gray-500">
                          <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </span>
                        <span className="tracking-wide">Experience</span>
                      </div>
                      <ul className="list-inside space-y-2">
                        <li>
                          <div className="text-blue-600">Owner at Her Company Inc.</div>
                          <div className="text-gray-500 text-xs">March 2020 - Now</div>
                        </li>
                        <li>
                          <div className="text-blue-600">Owner at Her Company Inc.</div>
                          <div className="text-gray-500 text-xs">March 2020 - Now</div>
                        </li>
                       
                      </ul>
                    </div>
                    <div>
                      <div
                        className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3"
                      >
                        <span className="text-green-500">
                          <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path
                              fill="#fff"
                              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                            />
                         
                          </svg>
                        </span>
                        <span className="tracking-wide">Education</span>
                      </div>
                      <ul className="list-inside space-y-2">
                        <li>
                          <div className="text-blue-600">Masters Degree in Oxford</div>
                          <div className="text-gray-500 text-xs">March 2020 - Now</div>
                        </li>
                        <li>
                          <div className="text-blue-600">Bachelors Degree in LPU</div>
                          <div className="text-gray-500 text-xs">March 2020 - Now</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End of Experience and education grid */}
                </div>
                {/* End of profile tab */}
              </div>
            </div>
          </div>
        </div>
  </div>

</div>
</div>
  )
}

export default About