import React from "react";
import foundationalDark from "@/public/assets/images/guide/foundation-light.svg";
import cognitiveReadinessDark from "@/public/assets/images/guide/cognitive-readiness-dark.svg";
import cognitiveReadiness from "@/public/assets/images/guide/cognitive-readiness.svg";
import rightArrowDark from "@/public/assets/images/guide/account-right-arrow-dark.png";
import rightArrow from "@/public/assets/images/guide/account-right-arrow.png";
import methodologicalPreparationDark from "@/public/assets/images/guide/methodological-preparation-dark.svg";
import methodologicalPreparation from "@/public/assets/images/guide/methodological-preparation.svg";
import proceduralDark from "@/public/assets/images/guide/procedural-dark.svg";
import procedural from "@/public/assets/images/guide/procedural.svg";
import foundational from "@/public/assets/images/guide/foundation.svg";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const ProcessInstallation = () => {
  const processItems = [
    {
      id: 1,
      lightImg: foundational,
      darkImg: foundationalDark,
      subtitle: "المرحلة الأولى ",
      title: "التأسيسية",
      arrow: rightArrow,
      darkArrow: rightArrowDark,
      borderClass: "border-[#DC6428]",
      service: {
        id: "1",
        svg: foundational,
        darkSvg: foundationalDark,
        slug: "foundational",
        title: "خدمة التأسيس",
        description: "تفاصيل حول المرحلة التأسيسية.",
        button: "اقرأ المزيد",
      },
    },
    {
      id: 2,
      lightImg: cognitiveReadiness,
      darkImg: cognitiveReadinessDark,
      subtitle: "المرحلة الثانية ",
      title: "الاستعدادية المعرفية",
      arrow: rightArrow,
      darkArrow: rightArrowDark,
      borderClass: "border-[#469178]",
      service: {
        id: "2",
        svg: cognitiveReadiness,
        darkSvg: cognitiveReadinessDark,
        slug: "knowledge-preparation",
        title: "خدمة المعرفة",
        description: "تفاصيل حول الاستعدادية المعرفية.",
        button: "اقرأ المزيد",
      },
    },
    {
      id: 3,
      lightImg: methodologicalPreparation,
      darkImg: methodologicalPreparationDark,
      subtitle: "المرحلة الثالثة ",
      title: "التجهيزية المنهجية",
      arrow: rightArrow,
      darkArrow: rightArrowDark,
      borderClass: "border-[#9B3250]",
      service: {
        id: "3",
        svg: methodologicalPreparation,
        darkSvg: methodologicalPreparationDark,
        slug: "methodology-preparation",
        title: "خدمة المنهجية",
        description: "تفاصيل حول التجهيزية المنهجية.",
        button: "اقرأ المزيد",
      },
    },
    {
      id: 4,
      lightImg: procedural,
      darkImg: proceduralDark,
      subtitle: "المرحلة الرابعة ",
      title: "الإجرائية",
      borderClass: "border-[#785A96]",
      service: {
        id: "4",
        svg: procedural,
        darkSvg: proceduralDark,
        slug: "procedural",
        title: "خدمة الإجرائية",
        description: "تفاصيل حول المرحلة الإجرائية.",
        button: "اقرأ المزيد",
      },
    },
  ];

  return (
    <section className="container pb-[220px]">
      <div className="mx-auto mb-25 max-w-[620px] text-center">
        {/* <h2 className="mb-8">
          الدليل الإجرائي <br />
        </h2> */}
      </div>
      {/* Grid Container */}
      <div className="grid grid-cols-1 gap-y-12 md:grid-cols-4 md:gap-x-5 lg:gap-x-12">
        {processItems.map((process) => (
          <div key={process.id}>
            {/* Step */}
            <div className="flex flex-row items-center gap-5">
              <figure className="relative flex h-[110px] w-[110px] shrink-0 scale-100 items-center justify-center rounded-full bg-white p-2.5 shadow-nav transition-transform duration-500 hover:scale-105 hover:transition-transform hover:duration-500 dark:bg-dark-200 max-lg:p-2">
                <div className={cn("h-full rounded-full border border-dashed border-gray-100 p-6 dark:border-gray-100 dark:border-opacity-15 max-lg:p-5",process?.borderClass)}>
                  <Image
                    src={process.lightImg}
                    width={40}
                    height={40}
                    alt="account Light"
                    className="inline-block dark:hidden"
                  />
                  <Image
                    src={process.darkImg}
                    width={40}
                    height={40}
                    alt="account Dark"
                    className="hidden dark:inline-block"
                  />
                </div>
              </figure>
              <div className="text-center">
                <h6>{process.subtitle}</h6>
                <h3 className="leading-8">{process.title}</h3>
              </div>
              {process.arrow && (
                <div className="h-auto w-12 hidden md:block">
                  <Image
                    src={process.arrow}
                    alt="Arrow Icon"
                    width={100}
                    height={100}
                    quality={60}
                    className="h-full w-full dark:hidden"
                  />
                  <Image
                    src={process.darkArrow}
                    alt="Arrow Icon"
                    width={100}
                    height={100}
                    quality={60}
                    className="hidden h-full w-full dark:inline-block"
                  />
                </div>
              )}
            </div>

            {/* Card */}
            <div className="relative mt-5 scale-100 rounded-medium bg-white p-[8px] shadow-nav transition-transform duration-500 hover:scale-105 hover:transition-transform hover:duration-500 dark:bg-dark-200 lg:h-full flex flex-col">
              <div className={cn("dark:border-borderColour-dark rounded border border-dashed border-gray-100 dark:border-gray-100 p-10 dark:border-opacity-15 max-lg:p-5 flex flex-col flex-grow",process?.borderClass)}>
                {/* <Image
                  src={process.service.svg}
                  alt="service logo"
                  className="mb-6 inline-block dark:hidden"
                />
                <Image
                  src={process.service.darkSvg}
                  alt="service logo"
                  className="mb-6 hidden dark:inline-block"
                /> */}
                <Link
                  href={`/services/${process.service.slug}`}
                  className="block"
                >
                  <h3 className="mb-2.5">{process.service.title}</h3>
                </Link>
                <p className="mb-6 flex-grow">{process.service.description}</p>
                <Link
                  href={`/services/${process.service.slug}`}
                  className="btn-outline btn-sm mt-auto "
                >
                  {process.service.button}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessInstallation;
