import Image from "next/image";
import React from "react";
import mesiriImage from "@/public/assets/images/home/mesiri.webp";
import mesiriImageDark from "@/public/assets/images/home/mesiri.webp";
import { cn } from "@/lib/utils";
export default function WhoIsSection({ className }: { className?: string }) {
  return (
    <main>
      <section className=" relative overflow-hidden pb-150  max-md:pb-25 ">
        <div className="container relative z-10">
          <div className="grid grid-cols-2 items-center gap-10 max-md:grid-cols-1 1xl:gap-x-24">
            {/* <CoreValueAnimation /> */}
            <div className="mx-auto">
              <Image
                src={mesiriImage}
                alt="banking image"
                className="max-w-[250px] dark:hidden lg:max-w-[320px] xl:max-w-[420px]"
              />
              <Image
                src={mesiriImageDark}
                alt="banking image"
                className="hidden max-w-[250px]  dark:inline-block lg:max-w-[320px] xl:max-w-[420px]"
              />
            </div>
            <div>
              <p className="section-tagline">عن المسيري</p>
              <h2 className=" mb-8 max-md:mb-4">
                حياة المسيري وإنجازاته الأكاديمية
              </h2>
              <p className="mb-11  max-md:mb-6 text-justify">
                عبد الوهاب المسيري، أحد أبرز المفكرين العرب الذين تركوا بصمة في
                عالم الفكر والمعرفة، سعى طوال حياته إلى تحرير العقل العربي من
                القيود التي فرضتها النماذج المعرفية الغربية. وُلِدَ في دمنهور
                عام 1938 وتوفي رحمه الله في القاهرة عام 2008، ومرّ بمراحل
                أكاديمية مميزة، من دراسته للغة الإنجليزية في جامعة الإسكندرية
                إلى حصوله على الدكتوراه من جامعة رتجرز في الولايات المتحدة عام
                1969. لكنه لم يكن مجرد أكاديمي تقليدي؛ بل كان صاحب رؤية معرفية
                عميقة تسعى لإعادة بناء الخريطة الإدراكية العربية بعيداً عن
                الاستعمار الثقافي.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className={cn("relative pb-150 max-md:overflow-hidden", className)}
      >
        <div className="container relative">
          <div className="relative z-10">
            <div className="absolute -top-150 left-1/2 -z-10 h-full w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')]  bg-contain bg-center bg-no-repeat p-[350px] opacity-70 md:hidden"></div>
            <div className=" grid grid-cols-3 gap-8 max-md:grid-cols-1">
              <div className=" bg-white p-2.5 shadow-nav dark:bg-dark-200">
                <div className=" h-full rounded border border-dashed border-gray-100 p-7 dark:border-borderColor-dark ">
                <h3 className="mb-3 text-lg font-bold leading-7 text-center">
                مشروع المسيري {" "}
                  </h3>
                  <blockquote className="mb-5 italic leading-[1.75] text-paragraph dark:text-white text-justify">
                    مشروعه الموسوعي، وخاصة في كتاباته عن &quot;اليهود واليهودية
                    والصهيونية&quot;، لم يكن مجرد دراسة تاريخية، بل محاولة لفهم
                    النموذج المعرفي الكامن خلف الظواهر. عمل على تفكيك المفاهيم
                    المختزلة التي أنتجتها المركزية الغربية، وأعاد صياغتها بما
                    ينسجم مع التجربة الحضارية العربية. رأى المسيري أن المعرفة
                    ليست مجرد تراكم للمعلومات، بل هي عملية تفسيرية ترتكز على فهم
                    الإنسان ككائن مركب يحمل في داخله أبعاداً تتجاوز المادية
                    المحضة.
                  </blockquote>
                </div>
              </div>
              <div className=" bg-white p-2.5 shadow-nav dark:bg-dark-200">
                <div className=" h-full rounded border border-dashed border-gray-100 p-7 dark:border-borderColor-dark ">
                  <h3 className="mb-3 text-lg font-bold leading-7 text-center">
                    نقد المسيري للنزعات المادية ودعوته للتفسير المركب
                  </h3>
                  <blockquote className="mb-5 italic leading-[1.75] text-paragraph dark:text-white text-justify">
                    تنقل المسيري بين عدة محطات أكاديمية، لكنه ظل ملتزماً بنقد
                    النزعات المادية في البحث العلمي، محذراً من الاستسلام للخرائط
                    الإدراكية الغربية التي تقلص دور الإنسان إلى مجرد رقم في
                    معادلة. كان يرى أن المعرفة الحقيقية تبدأ من التساؤل، وأن
                    النموذج التفسيري يجب أن يعيد الاعتبار للإنسان كفاعل في فهم
                    العالم وليس كموضوع مستهلك لخطابات مهيمنة.
                  </blockquote>
                </div>
              </div>
              <div className=" bg-white p-2.5 shadow-nav dark:bg-dark-200">
                <div className=" h-full rounded border border-dashed border-gray-100 p-7 dark:border-borderColor-dark ">
                <h3 className="mb-3 text-lg font-bold leading-7 text-center">
                رؤية المسيري: 
                  </h3>
                  <blockquote className="mb-5 italic leading-[1.75] text-paragraph dark:text-white text-justify">
                    رؤيته كانت واضحة: لا يمكن فصل المعرفة عن السياق الحضاري
                    والثقافي. ولذلك، لم يكن عمله مجرد مشروع أكاديمي، بل دعوة
                    لتحرير العقل من قوالب مهيمنة، وإعادة بناء نماذج معرفية تعكس
                    التجربة الإنسانية بتعقيداتها.
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
