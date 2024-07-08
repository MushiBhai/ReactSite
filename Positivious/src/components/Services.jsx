import React from 'react';

export default function Services() {
  return (
    <div id="services">
      <section
        id="serviesTopHeadings"
        className="mx-[8vw] flex items-center h-20 gap-5 mt-32 mb-10"
      >
        <span className="">
          <h2 className="text-[40px] font-medium w-fit py-0 px-3 rounded-lg bg-[#b9ff66]">
            Services
          </h2>
        </span>
        <span>
          <p className="text-lg leading-6 tracking-normal">
            At our digital marketing agency, we offer a range of services to
            <br />
            help businesses grow and succeed online. These services include:
          </p>
        </span>
      </section>
      <section
        id="services"
        className="px-[8vw] my-10 grid grid-cols-2 items-center gap-8 place-items-center"
      >
        <div
          id="service1"
          className="bg-[#F3F3F3] w-fit flex gap-10 py-8 px-10 border-[1px] rounded-[35px] border-black border-b-8"
        >
          <div id="content" className="flex flex-col gap-20 w-[50%]">
            <span>
              <span className="">
                <h2 className="text-[30px] font-medium w-fit py-0 px-3 rounded-lg bg-[#b9ff66]">
                  Search engine
                </h2>
              </span>
              <span className="">
                <h2 className="text-[30px] font-medium w-fit py-0 px-3 rounded-lg bg-[#b9ff66]">
                  optimization
                </h2>
              </span>
            </span>
            <span className="flex gap-5 group transition-all duration-200 ease-in-out w-fit">
              <i className="fa-solid fa-arrow-right text-2xl text-[#b9ff66] bg-[#191A23] group-hover:animate-bounce hover transition-all duration-200 ease-in-out cursor-pointer -rotate-[30deg] px-[12px] py-[6px] rounded-full"></i>
              <button className="text-xl font-[450]">Learn more</button>
            </span>
          </div>
          <div id="img" className="w-[50%]">
            <img
              className="w-[250px]"
              src="./images/Illustration (1).png"
              alt=""
            />
          </div>
        </div>
        <div
          id="service2"
          className="bg-[#B9FF66] w-fit flex gap-10 py-8 px-10 border-[1px] rounded-[35px] border-black border-b-8"
        >
          <div id="content" className="flex flex-col gap-20 w-[50%]">
            <span>
              <span className="">
                <h2 className="text-[30px] font-medium w-fit py-0 px-3 rounded-lg bg-[#F3F3F3]">
                  Pay-Per-Click
                </h2>
              </span>
              <span className="">
                <h2 className="text-[30px] font-medium w-fit py-0 px-3 rounded-lg bg-[#F3F3F3]">
                  Advertising
                </h2>
              </span>
            </span>
            <span className="flex gap-5 group transition-all duration-200 ease-in-out w-fit">
              <i className="fa-solid fa-arrow-right text-2xl text-[#b9ff66] bg-[#191A23] group-hover:animate-bounce hover transition-all duration-200 ease-in-out cursor-pointer -rotate-[30deg] px-[12px] py-[6px] rounded-full"></i>
              <button className="text-xl font-[450]">Learn more</button>
            </span>
          </div>
          <div id="img" className="w-[50%]">
            <img
              className="w-[250px]"
              src="./images/Illustration (2).png"
              alt=""
            />
          </div>
        </div>
        <div
          id="service3"
          className="bg-[#191A23] w-fit flex gap-10 py-8 px-10 border-[1px] rounded-[35px] border-black border-b-8"
        >
          <div id="content" className="flex flex-col gap-28 w-[50%]">
            <span>
              <span className="">
                <h2 className="text-[30px] font-medium w-fit py-0 px-3 rounded-lg bg-[#F3F3F3]">
                  Social Media
                </h2>
              </span>
              <span className="">
                <h2 className="text-[30px] font-medium w-fit py-0 px-3 rounded-lg bg-[#F3F3F3]">
                  Marketing
                </h2>
              </span>
            </span>
            <span className="flex gap-5 group transition-all duration-200 ease-in-out w-fit">
              <i className="fa-solid fa-arrow-right text-2xl text-[#191A23] bg-[#F3F3F3] group-hover:animate-bounce hover transition-all duration-200 ease-in-out cursor-pointer -rotate-[30deg] px-[12px] py-[6px] rounded-full"></i>
              <button className="text-xl font-[450] text-[#F3F3F3]">
                Learn more
              </button>
            </span>
          </div>
          <div id="img" className="w-[50%]">
            <img
              className="w-[280px]"
              src="./images/Illustration (3).png"
              alt=""
            />
          </div>
        </div>
        <div
          id="service4"
          className="bg-[#F3F3F3] w-fit flex gap-10 py-8 px-10 border-[1px] rounded-[35px] border-black border-b-8"
        >
          <div id="content" className="flex flex-col gap-20 w-[50%]">
            <span>
              <span className="">
                <h2 className="text-[30px] font-medium w-fit py-4 px-3 rounded-lg bg-[#b9ff66]">
                  Email
                </h2>
              </span>
              <span className="">
                <h2 className="text-[30px] font-medium w-fit py-0 px-3 rounded-lg bg-[#b9ff66]">
                  Marketing
                </h2>
              </span>
            </span>
            <span className="flex gap-5 group transition-all duration-200 ease-in-out w-fit">
              <i className="fa-solid fa-arrow-right text-2xl text-[#b9ff66] bg-[#191A23] group-hover:animate-bounce hover transition-all duration-200 ease-in-out cursor-pointer -rotate-[30deg] px-[12px] py-[6px] rounded-full"></i>
              <button className="text-xl font-[450]">Learn more</button>
            </span>
          </div>
          <div id="img" className="w-[50%]">
            <img
              className="w-[300px]"
              src="./images/tokyo-sending-messages-from-one-place-to-another 1.png"
              alt=""
            />
          </div>
        </div>
        <div
          id="service5"
          className="bg-[#B9FF66] w-fit flex gap-10 py-8 px-10 border-[1px] rounded-[35px] border-black border-b-8"
        >
          <div id="content" className="flex flex-col gap-28 w-[50%]">
            <span>
              <span className="">
                <h2 className="text-[30px] font-medium w-fit py-0 px-3 rounded-lg bg-[#F3F3F3]">
                  Content
                </h2>
              </span>
              <span className="">
                <h2 className="text-[30px] font-medium w-fit py-0 px-3 rounded-lg bg-[#F3F3F3]">
                  Creation
                </h2>
              </span>
            </span>
            <span className="flex gap-5 group transition-all duration-200 ease-in-out w-fit">
              <i className="fa-solid fa-arrow-right text-2xl text-[#b9ff66] bg-[#191A23] group-hover:animate-bounce hover transition-all duration-200 ease-in-out cursor-pointer -rotate-[30deg] px-[12px] py-[6px] rounded-full"></i>
              <button className="text-xl font-[450]">Learn more</button>
            </span>
          </div>
          <div id="img" className="w-[50%]">
            <img
              className="w-[320px]"
              src="./images/Illustration (4).png"
              alt=""
            />
          </div>
        </div>
        <div
          id="service6"
          className="bg-[#191A23] w-fit flex gap-10 py-8 px-10 border-[1px] rounded-[35px] border-black border-b-8"
        >
          <div id="content" className="flex flex-col gap-20 w-[50%]">
            <span>
              <span className="">
                <h2 className="text-[30px] font-medium w-fit py-4 px-3 rounded-lg bg-[#F3F3F3]">
                  Analytics and
                </h2>
              </span>
              <span className="">
                <h2 className="text-[30px] font-medium w-fit py-0 px-3 rounded-lg bg-[#F3F3F3]">
                  Tracking
                </h2>
              </span>
            </span>
            <span className="flex gap-5 group transition-all duration-200 ease-in-out w-fit">
              <i className="fa-solid fa-arrow-right text-2xl text-[#191A23] bg-[#F3F3F3] group-hover:animate-bounce hover transition-all duration-200 ease-in-out cursor-pointer -rotate-[30deg] px-[12px] py-[6px] rounded-full"></i>
              <button className="text-xl font-[450] text-[#F3F3F3]">
                Learn more
              </button>
            </span>
          </div>
          <div id="img" className="w-[50%]">
            <img
              className="w-[250px]"
              src="./images/Illustration (5).png"
              alt=""
            />
          </div>
        </div>
      </section>
      
    </div>
  );
}
