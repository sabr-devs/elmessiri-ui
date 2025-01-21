import Image from "next/image";

const OurMessageSection = () => {
  return (
    <section className="wrapper">
      <div className="container">
        <div className="card bg-[#eff7fa] dark:bg-dark-200  !mt-2 mb-[4rem] xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem]">
          <div className="card-body xl:!p-[2.5rem] lg:!p-[2.5rem] md:!p-[2.5rem] xl:!py-12 xl:!px-20 p-[40px]">
            <div className="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-[-20px] mt-[-50px] items-center">
              {/* Left Section */}
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] xl:px-0 lg:px-[20px] mt-[50px] max-w-full xl:!order-2 lg:!order-2 flex !relative">
                <Image
                  className="max-w-full h-auto !ml-auto !mx-auto "
                  src="/assets/images/about-us/co3.png"
                  alt="image"
                  width={400} // Adjust width
                  height={400} // Adjust height
                />
              
              </div>

              {/* Right Section */}
              <div
                className="xl:w-6/12 lg:w-6/12 flex-[0_0_auto] px-[15px] xl:px-0 lg:px-[20px] mt-[50px] max-w-full text-center lg:text-right xl:text-right"
                data-cues="slideInDown"
                data-group="page-title"
                data-delay="600"
              >
                <h1 className="xl:text-[2.4rem] text-[calc(1.365rem_+_1.38vw)] !leading-[1.15] !font-DMSerif !font-normal !tracking-normal mb-5 [word-spacing:normal!important]">
                رسالتنا
                </h1>
                <p className="lead !text-[1.1rem] !leading-[1.5] font-medium mb-7 xl:pr-10 text-justify ">
                في مواجهة النموذج المادي الذي يقنن المعرفة داخل إطار الموضوعية المتلقية والحيادية الزائفة، نؤمن بأن البحث ليس مجرد جمع معلومات أو تحليل ظواهر معزولة، بل هو عملية تفاعل معقدة بين الإنسان والظواهر، تتطلب مواقف بحثية تتحدى الاختزال وتحتفي بالتشابك والتعقيد.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMessageSection;
