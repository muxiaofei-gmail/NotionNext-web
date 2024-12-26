/* eslint-disable @next/next/no-img-element */

import { siteConfig } from '@/lib/config'

/**
 * 合作伙伴
 * @returns
 */
export const Brand = () => {
  const brands = siteConfig('STARTER_BRANDS')
  return (
    <>
      {/* <!-- ====== Brands Section Start --> */}
      <section className='py-20 dark:bg-dark'>
        <div className='container px-4'>
          <div className='-mx-4 flex flex-wrap items-center justify-center gap-8 xl:gap-11'>
            {brands?.map((item, index) => {
              return (
                <a key={index} href={item.URL} className="group">
                  <img
                    src={item.IMAGE}
                    alt={item.TITLE}
                    className='dark:hidden transform transition-transform duration-300 ease-in-out hover:scale-110'
                  />
                  <img
                    src={item.IMAGE_WHITE}
                    alt={item.TITLE}
                    className='hidden dark:block hover:scale-110'
                  />
                </a>
              )
            })}
          </div>
        </div>
      </section>
      {/* <!-- ====== Brands Section End --> */}
    </>
  )
}
