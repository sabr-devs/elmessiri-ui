import Image from "next/image";
import heroChartDark from "@/public/assets/images/hero/hero-chart-dark.png";
import heroChartLight from "@/public/assets/images/hero/hero-chart.png";
import heroCircleDark from "@/public/assets/images/hero/hero-circle-dark.png";
import heroCircleLight from "@/public/assets/images/hero/hero-circle.png";
import heroPolicyDark from "@/public/assets/images/hero/hero-policy-dark.png";
import heroPolicyLight from "@/public/assets/images/hero/hero-policy.png";
import heroRatingDark from "@/public/assets/images/hero/hero-rating-dark.png";
import heroRatingLight from "@/public/assets/images/hero/hero-rating.png";
import FadeUpAnimation from "../animations/FadeUpAnimation";

const HeroContent = () => {
  return (
    <FadeUpAnimation className="relative z-10 grid grid-cols-12 items-center max-lg:gap-y-10">
      <div className="col-span-12 md:col-span-6">
        <p className="mb-8 font-medium uppercase max-lg:mb-4">اسم المبادرة</p>
        <h2 className="mb-12 max-md:mb-8">
          مبادرة معرفية ميدانية مستوحاة من رؤية المسيري
        </h2>
        <p className="mb-12 max-w-[590px] max-md:mb-8">
          تعريف سريع بالمبادرة وأهدافها الرئيسية
        </p>
      </div>
      <div className="col-span-12 md:col-span-6">
        <div className="relative min-h-[530px] w-full max-md:min-h-[400px] lg:ml-15">
          <div className="absolute !left-1/2 !top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src={heroCircleLight}
              alt="hero Image"
              className="inline-block h-auto w-auto  dark:hidden"
            />
            <Image
              src={heroCircleDark}
              alt="hero Image"
              className="hidden h-auto w-auto  dark:inline-block"
            />
          </div>
          <div className="absolute !-left-[40px] !top-15 max-lg:!left-0 max-lg:aspect-video max-lg:w-[220px] max-md:!top-5 lg:!-top-[20px]">
            <Image
              src={heroPolicyLight}
              alt="hero Image"
              className="inline-block h-auto w-auto dark:hidden"
            />
            <Image
              src={heroPolicyDark}
              alt="hero Image"
              className="hidden h-auto w-auto dark:inline-block"
            />
          </div>
          <div className="absolute !bottom-[150px] !left-[50px] max-lg:aspect-square max-lg:w-28 max-md:!bottom-[70px]  max-md:!left-[50px] lg:!bottom-0 lg:!left-[45px] xl:!left-[85px]">
            <Image
              src={heroRatingLight}
              alt="hero Image"
              className="inline-block h-auto w-auto  dark:hidden"
            />
            <Image
              src={heroRatingDark}
              alt="hero Image"
              className="hidden h-auto w-auto  dark:inline-block"
            />
          </div>
          <div className="lg:!not-sr-only-bottom-[45px] absolute !-bottom-0 !-right-5 max-lg:w-[196px] max-md:!-bottom-5 max-md:!-right-5 lg:right-0 xl:right-[30px]">
            <Image
              src={heroChartLight}
              alt="hero Image"
              className="inline-block dark:hidden"
            />
            <Image
              src={heroChartDark}
              alt="hero Image"
              className="hidden dark:inline-block"
            />
          </div>
        </div>
      </div>
    </FadeUpAnimation>
  );
};

export default HeroContent;
