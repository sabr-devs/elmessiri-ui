import { cn } from '@/utils/cn'

const WhySection = ({
  sectionTitle = true,
  sectionDetails = true,
  className = 'pt-[140px] pb-[145px] max-lg:py-20 bg-white dark:bg-dark-300 ',
}) => {
  return (
    <section className={cn('client', className)}>
      <div className="container overflow-hidden max-lg:!px-0">
        <div className=" px-10px mx-auto max-w-[750px] text-center max-lg:px-2.5">
          {sectionTitle && <h2 className="mb-10">لماذا النموذج التفسيري؟</h2>}
          {sectionDetails && <p className="text-light mb-15 text-[18px]">لأننا نؤمن بأنه المنهج المتميز بقدرته على تجاوز العتاد المادي للنظريات المادية المتمركزة حول الخطاب الغربي (Western-centric discourse)، من خلال رؤيته التي تضع الإنسان في مركز العملية البحثية، وتستعيد للبحث العلمي إنسانيته المفقودة، بعيداً عن الانحصار في إطار الموضوعية المتلقية وأوهام الحيادية المطلقة.</p>}
        </div>

        <div className="relative py-8 before:absolute before:-right-0.5 before:top-1/2 before:z-10 before:h-[40px] before:w-[120px] before:-translate-y-1/2  before:bg-gradient-to-l before:from-white before:from-[37.5%] after:absolute after:-left-0.5 after:top-1/2 after:z-10 after:h-[40px] after:w-[120px] after:-translate-y-1/2  after:bg-gradient-to-r after:from-white  after:from-[37.5%] dark:before:from-dark-gradient dark:after:from-dark-gradient">

        </div>
      </div>
    </section>
  )
}

export default WhySection
