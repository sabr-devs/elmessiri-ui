import Image from 'next/image'

const Features = () => {
  const CoreFeatures = [
    {
      id: 1,
      title: 'الطلاب والباحثون: ',
      iconLight: '/assets/images/about-us/icon/invoice.svg',
      iconDark: '/assets/images/about-us/icon/invoice-dark.svg',
      desc: 'لتطوير أدواتهم النقدية وتوسيع أفقهم المعرفي بما يتجاوز القوالب الجامدة للنماذج المعرفية المادية الغربية.',
    },
    {
      id: 2,
      title: 'الإعلاميون وصناع المحتوى:',
      iconLight: '/assets/images/about-us/icon/insight.svg',
      iconDark: '/assets/images/about-us/icon/insight-dark.svg',
      desc: 'لتمكينهم من إنتاج محتوى يعكس فهماً أعمق للظواهر الإنسانية والاجتماعية.',
    },
    {
      id: 3,
      title: 'المؤسسات الأكاديمية والمهنية: ',
      iconLight: '/assets/images/about-us/icon/inventory.svg',
      iconDark: '/assets/images/about-us/icon/inventory-dark.svg',
      desc: 'لدعمها في تصميم مشاريع بحثية تتبنى رؤية تفسيرية مركبة ومرنة.',
    },
  ]
  return (
    <section className="relative pt-150">
      <div className="absolute left-0 right-0 top-150 h-full w-full bg-[url('/images/core-gradient.png')] bg-[length:600px_1800px] bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container">
        <div className="mx-auto mb-12 max-w-[575px] text-center">
          <h2>لمن نتوجه؟</h2>
        </div>

        <div className="relative z-10">
          <div className="relative flex  flex-col [&>*:not(:last-child)]:after:absolute [&>*:not(:last-child)]:after:bottom-0 [&>*:not(:last-child)]:after:h-0.5 [&>*:not(:last-child)]:after:w-full [&>*:not(:last-child)]:after:overflow-hidden [&>*:not(:last-child)]:after:content-[url('/images/payment/seperator.png')] dark:[&>*:not(:last-child)]:after:content-[url('/images/payment/seperator-dark.png')] max-md:[&>*:not(:last-child)]:after:hidden">
            <div className="relative grid grid-cols-3 max-lg:grid-cols-1 [&>*:nth-child(3n+1)]:before:absolute [&>*:nth-child(3n+1)]:before:left-0 [&>*:nth-child(3n+1)]:before:top-1/2 [&>*:nth-child(3n+1)]:before:h-full [&>*:nth-child(3n+1)]:before:w-[1px] [&>*:nth-child(3n+1)]:before:-translate-y-1/2 [&>*:nth-child(3n+1)]:before:content-[url('/images/payment/coreborder-right.svg')] dark:[&>*:nth-child(3n+1)]:before:content-[url('/images/payment/coreborder-right-dark.svg')] max-lg:[&>*:nth-child(3n+1)]:before:hidden ">
              {CoreFeatures.slice(0, 3).map((items) => (
                <div
                  className=" group  relative px-0 py-12 after:absolute after:overflow-hidden max-lg:top-auto max-lg:after:bottom-0 max-lg:after:h-[1px] max-lg:after:w-full max-lg:after:content-[url('/images/payment/coreborder-bottom-mobile.svg')] dark:max-lg:after:content-[url('/images/payment/coreborder-bottom-mobile-dark.svg')] lg:px-12 lg:after:right-0 lg:after:top-1/2  lg:after:h-full lg:after:w-[1px] lg:after:-translate-y-1/2 lg:after:content-[url('/images/payment/coreborder-right.svg')] lg:dark:after:content-[url('/images/payment/coreborder-right-dark.svg')]"
                  key={items.id}>
                  <Image
                    src={items.iconLight}
                    alt="payment logo"
                    className="mb-6 inline-block h-auto w-auto dark:hidden"
                    width={40}
                    height={40}
                  />
                  <Image
                    src={items.iconDark}
                    alt="payment logo"
                    className="mb-6 hidden h-auto w-auto dark:inline-block"
                    width={40}
                    height={40}
                  />
                  <h3 className="relative mb-2.5 after:absolute after:-left-[49px] after:h-full after:w-0.5 after:bg-primary after:opacity-0 after:transition-opacity after:duration-500 group-hover:after:opacity-100">
                    {items.title}
                  </h3>
                  <p>{items.desc}</p>
                </div>
              ))}
            </div>
            <div className="relative grid grid-cols-3 max-lg:grid-cols-1 [&>*:nth-child(3n+1)]:before:absolute [&>*:nth-child(3n+1)]:before:left-0 [&>*:nth-child(3n+1)]:before:top-1/2 [&>*:nth-child(3n+1)]:before:h-full [&>*:nth-child(3n+1)]:before:w-[1px] [&>*:nth-child(3n+1)]:before:-translate-y-1/2 [&>*:nth-child(3n+1)]:before:content-[url('/images/payment/coreborder-right.svg')] dark:[&>*:nth-child(3n+1)]:before:content-[url('/images/payment/coreborder-right-dark.svg')] max-lg:[&>*:nth-child(3n+1)]:before:hidden ">
              {CoreFeatures.slice(3, 6).map((items) => (
                <div
                  className=" group  relative px-0 py-12 after:absolute after:overflow-hidden max-lg:top-auto max-lg:after:bottom-0 max-lg:after:h-[1px] max-lg:after:w-full max-lg:after:content-[url('/images/payment/coreborder-bottom-mobile.svg')] dark:max-lg:after:content-[url('/images/payment/coreborder-bottom-mobile-dark.svg')] lg:px-12 lg:after:right-0 lg:after:top-1/2  lg:after:h-full lg:after:w-[1px] lg:after:-translate-y-1/2 lg:after:content-[url('/images/payment/coreborder-right.svg')] lg:dark:after:content-[url('/images/payment/coreborder-right-dark.svg')]"
                  key={items.id}>
                  <Image
                    src={items.iconLight}
                    alt="payment logo"
                    className="mb-6 inline-block h-auto w-auto dark:hidden"
                    width={40}
                    height={40}
                  />
                  <Image
                    src={items.iconDark}
                    alt="payment logo"
                    className="mb-6 hidden h-auto w-auto dark:inline-block"
                    width={40}
                    height={40}
                  />
                  <h3 className="relative mb-2.5 after:absolute after:-left-[49px] after:h-full after:w-0.5 after:bg-primary after:opacity-0 after:transition-opacity after:duration-500 group-hover:after:opacity-100">
                    {items.title}
                  </h3>
                  <p className='text-justify'>{items.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
