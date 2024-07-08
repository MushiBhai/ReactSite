import React from 'react';

export default function CaseStudies() {
  return (
    <div id='CaseStudies'>
      <section
        id="CaseStudiesTopHeading"
        className="mx-[8vw] flex items-center h-20 gap-5 mt-32 mb-10"
      >
        <span className="">
          <h2 className="text-[40px] font-medium w-fit py-0 px-3 rounded-lg bg-[#b9ff66]">
            Case Studies
          </h2>
        </span>
        <span>
          <p className="text-lg leading-6 tracking-normal">
            Explore Real-Life Examples of Our Proven Digital Marketing <br />
            Success through Our Case Studies
          </p>
        </span>
      </section>
      <section id='CaseStudies' className="mx-[8vw] bg-[#191A23] rounded-[35px] p-16 mb-8 flex gap-16 justify-center items-center">
        <div id="left_side" className="w-[33%] border-r-2 pr-8">
          <span>
            <p className="text-white text-lg">
              For a local restaurant, we <br />
              implemented a targeted PPC <br />
              campaign that resulted in a 50% <br />
              increase in website traffic and a <br />
              25% increase in sales.
            </p>
          </span>
          <span className="mt-5 flex gap-3 group transition-all duration-200 ease-in-out w-fit">
            <button className="text-xl text-[#b9ff66] font-[450]">
              Learn more
            </button>
            <i className="fa-solid fa-arrow-right text-2xl text-[#b9ff66] group-hover:animate-bounce hover transition-all duration-200 ease-in-out cursor-pointer -rotate-[30deg] px-[12px] py-[6px] rounded-full"></i>
          </span>
        </div>

        <div id="center" className="w-[33%] border-r-2 pr-8">
          <span>
            <p className="text-white text-lg">
              For a local restaurant, we <br />
              implemented a targeted PPC <br />
              campaign that resulted in a 50% <br />
              increase in website traffic and a <br />
              25% increase in sales.
            </p>
          </span>
          <span className="mt-5 flex gap-3 group transition-all duration-200 ease-in-out w-fit">
            <button className="text-xl text-[#b9ff66] font-[450]">
              Learn more
            </button>
            <i className="fa-solid fa-arrow-right text-2xl text-[#b9ff66] group-hover:animate-bounce hover transition-all duration-200 ease-in-out cursor-pointer -rotate-[30deg] px-[12px] py-[6px] rounded-full"></i>
          </span>
        </div>
        <div id="right_side" className="w-[33%]">
          <span>
            <p className="text-white text-lg">
              For a local restaurant, we <br />
              implemented a targeted PPC <br />
              campaign that resulted in a 50% <br />
              increase in website traffic and a <br />
              25% increase in sales.
            </p>
          </span>
          <span className="mt-5 flex gap-3 group transition-all duration-200 ease-in-out w-fit">
            <button className="text-xl text-[#b9ff66] font-[450]">
              Learn more
            </button>
            <i className="fa-solid fa-arrow-right text-2xl text-[#b9ff66] group-hover:animate-bounce hover transition-all duration-200 ease-in-out cursor-pointer -rotate-[30deg] px-[12px] py-[6px] rounded-full"></i>
          </span>
        </div>
      </section>
      
    </div>
  );
}
