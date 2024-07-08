import React from 'react';

export default function CtaSection() {
  return (
    <section className="mx-[8vw] bg-[#F3F3F3] rounded-[35px] my-24 flex items-center justify-center align-middle h-[400px] pl-20">
      <div id="content" className="w-[50%]">
        <span>
          <h2 className="text-[32px] leading-[80px] font-medium">
            Let's Make Things happen
          </h2>
        </span>
        <span className="text-lg leading-6 tracking-normal">
          Contact us today to learn more about how our digital <br />
          marketing services can help your business grow and <br />
          succeed online.
        </span>
        <br />
        <span>
          <button className="mt-7 border-[1px] active:scale-90 transition-all duration-150 text-lg text-white bg-black py-5 rounded-xl px-10">
            Get your free Proposal
          </button>
        </span>
      </div>
      <div id="image" className="w-[50%]">
        <img
          className="w-[70%]"
          src="./images/Illustration (6).png"
          alt=""
        />
      </div>
    </section>
  );
}
