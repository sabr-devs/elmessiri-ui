import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VisionLine1 from "../icons/VisionLine1";
import VisionLine2 from "../icons/VisionLine2";
import VisionLine3 from "../icons/VisionLine3";
import VisionLine4 from "../icons/VisionLine4";
import VisionAnimation from './VisionAnimation'

export default function OurVision() {
  return (
    <section className="relative -mt-24 overflow-hidden  pb-150 pt-[300px] dark:-mt-24 dark:bg-dark max-md:-mt-60 max-md:pb-20 max-md:pt-[320px] dark:max-md:-mt-60">
      <div className="absolute left-0 top-0 max-w-[1612px] max-md:hidden">
        <VisionLine1 />
      </div>
      <div className="absolute right-0 top-0 max-w-[1612px] max-md:hidden">
        <VisionLine2 />
      </div>
      <div className="absolute left-0 top-0 max-w-[1612px] md:hidden">
        <VisionLine3 />
      </div>
      <div className="absolute right-0 top-0 max-w-[1612px] md:hidden">
        <VisionLine4 />
      </div>
      <div className="container relative z-10 p-5">
        <div className="grid grid-cols-2 items-end gap-10 max-md:grid-cols-1 1xl:gap-x-24">
          <div>
            <h2 className="mb-8 max-lg:mb-4">كيف نحقق رؤيتنا؟</h2>
            <p className="mb-11 max-lg:mb-5 text-justify">
              مستلهمين من أدواتنا التي تم تحديدها في الفقرة السابقة، نعمل على
              ترجمة رؤيتنا إلى واقع وذلك من خلال نهج استراتيجي يتمثل في:
            </p>
            <ul className="mb-14 [&>*:not(:last-child)]:mb-6 max-lg:[&>*:not(:last-child)]:mb-4 ">
              <li className="flex items-center gap-x-2 ">
                <span className=" shadow-icon item-center relative flex h-7 w-7 justify-center rounded-full bg-slate-100  dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary "
                  />
                </span>
                <span className="font-cairo font-medium dark:text-white text-justify"></span>{" "}
                <span className="font-bold">  دمج النظرية بالتطبيق: </span>
               عبر تصميم برامج تدريبية ومناهج تعليمية متكاملة.
              </li>
              <li className="flex items-center gap-x-2">
                <span className=" shadow-icon item-center relative flex h-7 w-7 justify-center rounded-full bg-slate-100  dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary "
                  />
                </span>
                <span className="font-jakarta_sans font-medium dark:text-white text-justify ">
                <span className="font-bold">  إعداد البنية البحثية: </span>{" "}
                   من خلال توفير أدوات مرنة وفعالة تسهل
                  تبني النموذج التفسيري.{" "}
                </span>
              </li>
              <li className="flex items-center gap-x-2 ">
                <span className=" shadow-icon item-center relative flex h-7 w-7 justify-center rounded-full bg-slate-100 dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary "
                  />
                </span>

                <span className="font-jakarta_sans font-medium dark:text-white text-justify">
                <span className="font-bold">   التفاعل المجتمعي: </span>{" "}
                   ببناء شبكات تربط بين الأكاديميين والمهنيين
                  لنشر التفكير التفسيري.{" "}
                </span>
              </li>
              <li className="flex items-center gap-x-2 ">
                <span className=" shadow-icon item-center relative flex h-7 w-7 justify-center rounded-full bg-slate-100 dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary "
                  />
                </span>

                <span className="font-jakarta_sans font-medium dark:text-white text-justify">
                <span className="font-bold">     إعادة تشكيل البحث العلمي: </span>{" "}
                  من خلال نقد الأنماط التقليدية وتقديم
                  بدائل تعكس تعقيد الظواهر الإنسانية.{" "}
                </span>
              </li>
            </ul>
          </div>
          <VisionAnimation />
        </div>
      </div>
    </section>
  );
}
