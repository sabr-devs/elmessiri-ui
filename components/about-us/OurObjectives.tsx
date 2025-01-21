import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function OurObjectives() {
  return (
    <section className="relative mb-[40px]">
      <div className="container relative ">
        <div className="relative grid grid-cols-2 items-end gap-25 max-md:grid-cols-1 1xl:gap-x-24">
          <div className="relative mx-auto  max-md:order-2">
            <Image
              src="/assets/images/about-us/co3.png"
              alt="image"
              className="max-w-full h-auto"
              width={400} // Adjust width
              height={400} // Adjust height
            />
          </div>
          <div className="relative  max-md:order-1">
            {/* <p className="section-tagline">EXPLORE POSSIBILITIES</p> */}

            <h2 className="mb-8">أهدافنا</h2>
            <ul className="mb-14 max-w-[490px] [&>*:not(:last-child)]:mb-5">
              <li className="flex items-center gap-x-5 rounded border border-dashed border-gray-100 p-2.5 dark:border-borderColor-dark">
                <span className=" shadow-icon relative h-10 w-10 gap-6 rounded-full bg-[#F3F8E8]  dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary"
                  />
                </span>
                <span className="font-jakarta_sans font-semibold text-justify">
                  {" "}
                  إعادة تعريف البحث العلمي: كعملية تفسيرية إنسانية تتجاوز القيود
                  التقليدية للنزعة المادية.{" "}
                </span>
              </li>
              <li className="flex items-center gap-x-5 rounded border border-dashed border-gray-100 p-2.5 dark:border-borderColor-dark">
                <span className=" shadow-icon relative h-10 w-10 gap-6 rounded-full bg-[#F3F8E8]  dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary"
                  />
                </span>
                <span className="font-jakarta_sans font-semibold text-justify">
                  {" "}
               تعزيز النزعة التفسيرية: من خلال أدوات معرفية ومواقف بحثية تعكس التشابك والتعقيد في الظواهر الإنسانية.{" "}
                </span>
              </li>
              <li className="flex items-center gap-x-5 rounded border border-dashed border-gray-100 p-2.5 dark:border-borderColor-dark">
                <span className=" shadow-icon relative h-10 w-10 gap-6 rounded-full bg-[#F3F8E8]  dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary"
                  />
                </span>
                <span className="font-jakarta_sans font-semibold text-justify">
                  {" "}
                 نقد النزعة المعرفية الكولونيالية: من خلال تفكيك التعسف المعرفي للنموذج الغربي المهيمن على روح الأكاديميات العربية ومراكز أبحاثنا، والذي يدعي العالمية والحيادية.{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
