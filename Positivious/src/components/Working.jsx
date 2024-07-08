import React, { useState } from 'react';

const sections = [
  { title: 'Consultation', content: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.' },
  { title: 'Research and Strategy Development', content: 'We will conduct in-depth research and develop a comprehensive strategy tailored to your business needs and objectives.' },
  { title: 'Implementation', content: 'Our team will implement the strategies and plans to achieve the desired results and objectives.' },
  { title: 'Monitoring and Optimization', content: 'We continuously monitor the performance and optimize the strategies for the best possible outcomes.' },
  { title: 'Reporting and Communication', content: 'Regular reporting and communication ensure transparency and keep you informed about the progress and results.' },
  { title: 'Continual Improvement', content: 'We believe in continual improvement to stay ahead and ensure sustained success for your business.' }
];

export default function Working() {
  const [expandedSections, setExpandedSections] = useState(Array(sections.length).fill(false));

  const toggleSection = (index) => {
    setExpandedSections((prev) => {
      const newExpandedSections = [...prev];
      newExpandedSections[index] = !newExpandedSections[index];
      return newExpandedSections;
    });
  };

  return (
    <div id='Working' className='mx-[8vw]'>
      <section className="flex items-center h-20 gap-5 mt-32 mb-10">
        <span>
          <h2 className="text-[40px] font-medium w-fit py-0 px-3 rounded-lg bg-[#b9ff66]">
            Our Working Process
          </h2>
        </span>
        <span>
          <p className="text-lg leading-6 tracking-normal">
            Step-by-Step Guide to Achieving <br />
            Your Business Goals
          </p>
        </span>
      </section>

      {sections.map((section, index) => (
        <div key={index} id="disclousre" className={`transition-all duration-[0.100s] ease-in-out ${expandedSections[index] ? 'bg-[#b9ff66]' : 'bg-[#F3F3F3]'} rounded-[35px] my-16 border-[1px] border-black border-b-8`}>
          <div className="px-16 mt-5 z-30">
            <div className="border-b-[1px] border-black flex justify-between items-center pb-6">
              <span className="flex items-center gap-5">
                <span className="text-[50px] font-medium">{`0${index + 1} `}</span>
                <h2 className="text-[30px] font-medium">{section.title}</h2>
              </span>
              <i
                id="plusIcon"
                className={`transition-all duration-[0.100s] ease-in-out text-[26px] border-2 border-black py-2 rounded-full px-[10px] cursor-pointer fa-solid ${
                  expandedSections[index] ? 'fa-minus' : 'fa-plus'
                }`}
                onClick={() => toggleSection(index)}
              ></i>
            </div>
          </div>
          <div
            id="Consulatation_content"
            className={`transition-all duration-[0.100s] ease-in-out ${expandedSections[index] ? 'flex' : 'hidden'} -translate-y-0 h-32 pt-10 pb-5 w-full px-16 rounded-b-[28px] items-center`}
          >
            <span>
              <p className="text-lg leading-6 tracking-normal">
                {section.content}
              </p>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
