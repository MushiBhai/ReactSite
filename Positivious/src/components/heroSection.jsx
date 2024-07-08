import React from 'react'

export default function HeroSection() {
  return (
    <section id="hero_section" className="gap-1 mt-20 h-screen flex align-middle x items-center justify-center mx-[8vw]">
    <div id="content" className="w-[50%]">
      <span>
        <h2 className="text-[65px] leading-[80px] font-medium">
          Navigating the <br />digital landscape <br />for success
        </h2>
      </span>
      <span>
        <p className="mt-5 text-black font-regular text-lg">
          Our digital marketing agency helps businesses <br />
          grow and succeed online through a range of <br />
          services including SEO, PPC, social media marketing, <br />
          and content creation.
        </p>
      </span>
      <span><button
          className="mt-7 border-[1px] active:scale-90 transition-all duration-150 text-lg text-white bg-black py-5 rounded-xl px-10">
          Book a Consulatation
        </button></span>
    </div>
    <div id="image_part" className="w-[50%]">
      <img className="w-[90%]" src=".\images\Illustration1.png" alt="" />
    </div>
  </section>
  )
}
