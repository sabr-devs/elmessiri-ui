import { HeroDarkShapeSVG, HeroLightShapeSVG } from '@/components/svg/svgImages'
import FadeUpAnimation from '../animations/FadeUpAnimation'

export default function GuidHero() {
  return (
    <section
      className="hero max-mb:pb-[70px] max-mb:pb-[70px] relative overflow-hidden  pb-20 pt-[230px] dark:bg-dark-300 max-lg:pb-25 max-lg:pt-[160px]"
      id="scene">
      <div className="to{-48.41%} absolute left-0 top-0 h-full max-h-[400px] w-full bg-[linear-gradient(180deg,var(--tw-gradient-stops))] from-[#F3FDD9] from-[-2.27%] to-[#F3FDD9]/10 dark:hidden"></div>

      <div className="absolute left-1/2 top-0 max-w-[1612px] -translate-x-1/2 max-lg:hidden">
        <HeroLightShapeSVG />
      </div>

      <div className="absolute bottom-0 left-0 w-full lg:hidden">
        <HeroDarkShapeSVG />
      </div>
      <FadeUpAnimation className="container">
        <div className="relative z-10 text-center ">
          <h2 className="mb-12 max-md:mb-8">
            الدليل الإجرائي
          </h2>
          <p className="mx-auto mb-12 max-w-[790px] max-md:mb-8">
          هذا الدليل الإجرائي يتناول النموذج التفسيري المركب الذي طوره عالم الاجتماع المصري عبد الوهاب المسيري. حيث يقدم الدليل تلخيصاً لأهم نقاط النموذج التفسيري المركب، مُستلهَماً من كتابات المسيري نفسه، ويوضح تعارضه مع الموضوعية المادية الاختزالية، وذلك من خلال قالب شبه منهجي ميسر يساعد الباحثين في مجال العلوم الإنسانية على اعتماده بطريقة متماسكة أثناء أبحاثهم، كما يوجههم بشأن تطبيق هذا النموذج في أبحاثهم.
          </p>

       
        </div>
      </FadeUpAnimation>
    </section>
  )
}
