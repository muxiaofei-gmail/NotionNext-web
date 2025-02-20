import { siteConfig } from '@/lib/config'
import SocialButton from '@/themes/fukasawa/components/SocialButton'
import CONFIG from '../config'
import { Logo } from './Logo'
import { SVGFooterCircleBG } from './svg/SVGFooterCircleBG'

/* eslint-disable @next/next/no-img-element */
export const Footer = props => {
  const footerPostCount = siteConfig('STARTER_FOOTER_POST_COUNT', 2)
  const latestPosts = props?.latestPosts
    ? props?.latestPosts.slice(0, footerPostCount)
    : []
  const STARTER_FOOTER_LINK_GROUP = siteConfig('STARTER_FOOTER_LINK_GROUP', [])
  return (
    <>
      {/* <!-- ====== Footer Section Start --> */}
      <footer
        className='wow fadeInUp relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]'
        data-wow-delay='.15s'>
        <div className='container'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12'>
              <div className='mb-10 w-full'>
                <a className='-mx-4 mb-6 inline-block max-w-[180px]'>
                  <Logo white={true} />
                </a>
                <p className='mb-8 max-w-[270px] text-base text-gray-7'>
                  {siteConfig('STARTER_FOOTER_SLOGAN')}
                </p>
                <div className='-mx-3 flex items-center'>
                  <div className='mx-3'>
                    <SocialButton />
                  </div>
                </div>
              </div>
            </div>

            {/* 中间三列菜单组 */}
            {STARTER_FOOTER_LINK_GROUP?.map((item, index) => {
              return (
                <div
                  key={index}
                  className='w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12'>
                  <div className='mb-10 w-full'>
                    <h4 className='mb-9 text-lg font-semibold text-white'>
                      {item.TITLE}
                    </h4>
                    <ul>
                      {item?.LINK_GROUP?.map((l, i) => {
                        return (
                          <li key={i}>
                            <a
                              href={l.URL}
                              className='mb-3 inline-block text-base text-gray-7 hover:text-primary'>
                              {l.TITLE}
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              )
            })}

            {/* 页脚右侧最新博文 */}
            <div className='w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12'>
              <div className='mb-10 w-full bg-white p-2 flex flex-col items-center rounded-lg transform transition-transform duration-300 hover:scale-110 ease-in-out'>
                <h4 className='mb-3 text-lg font-semibold text-black mt-4'>
                  {siteConfig('STARTER_FOOTER_BLOG_LATEST_TITLE')}
                </h4>
                <p className='text-sm text-black text-center mb-3'>
                  扫描二维码添加客服微信在线咨询。
                </p>
                {/* 展示两条最新博客文章 */}
                <div className='flex flex-col gap-8 items-center'>
                  <div
                    className="mb-4 sm:mb-8 h-[100px] w-[100px] flex justify-center items-center"
                  >
                    <img
                      src={siteConfig('STARTER_WX', null, CONFIG)}
                      alt="about image"
                      className="h-[100px] w-[100px] object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部版权信息相关 */}

        <div className='mt-12 border-t border-[#8890A4] border-opacity-40 py-8 lg:mt-[60px]'>
          <div className='container'>
            <div className='-mx-4 flex flex-wrap'>
              <div className='w-full px-4 md:w-2/3 lg:w-1/2'>
                <div className='my-1'>
                  <div className='-mx-3 flex items-center justify-center md:justify-start'>
                    <a
                      href={siteConfig('STARTER_FOOTER_PRIVACY_POLICY_URL')}
                      className='px-3 text-base text-gray-7 hover:text-white hover:underline'>
                      {siteConfig('STARTER_FOOTER_PRIVACY_POLICY_TEXT')}
                    </a>
                    <a
                      href={siteConfig(
                        'STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL'
                      )}
                      className='px-3 text-base text-gray-7 hover:text-white hover:underline'>
                      {siteConfig('STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT')}
                    </a>
                    <a
                      href={siteConfig(
                        'STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL'
                      )}
                      className='px-3 text-base text-gray-7 hover:text-white hover:underline'>
                      {siteConfig(
                        'STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT'
                      )}
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full px-4 md:w-1/3 lg:w-1/2'>
                <div className='my-1 flex justify-center md:justify-end'>
                  <p className='text-base text-gray-7'>
                    Designed and Developed by
                    <a
                      href='https://web.xh1024.cn/'
                      rel='nofollow noopner noreferrer'
                      target='_blank'
                      className='px-1 text-gray-1 hover:underline'>
                      小花独立站
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer 背景 */}
        <div>
          <span className='absolute left-0 top-0 z-[-1]'>
            <img src='/images/starter/footer/shape-1.svg' alt='' />
          </span>

          <span className='absolute bottom-0 right-0 z-[-1]'>
            <img src='/images/starter/footer/shape-3.svg' alt='' />
          </span>

          <span className='absolute right-0 top-0 z-[-1]'>
            <SVGFooterCircleBG />
          </span>
        </div>
      </footer>
      {/* <!-- ====== Footer Section End --> */}
    </>
  )
}
