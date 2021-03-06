import React from 'react'
import Image from 'next/image'

const Strategies = () => {
  return (
    <div id='process' className='pt-5'>
      <div className='container-fluid  my-5 text-center '>
        <h2 className='fw-bold '>Our Process</h2>

        <div className='container'>
          <div className='row gy-5 pt-3 mt-3'>
            <div className='col-lg-4 col-md-4 col-sm-12 col-12 py-2 my-auto'>
              <h2>
                <span
                  className='fw-bolder custom-text-primary'
                  style={{ fontSize: '300%' }}
                >
                  01
                </span>
                Strategy
              </h2>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12 col-12 py-2 my-auto process'>
              <Image
                priority
                width='180'
                height='160'
                src='/images/strategy.jpg'
                alt='Strategy'
                className='img-fluid rounded-3 border custom-border-primary border-5 process-img'
              />
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12 col-12 py-2 custom-text-primary my-auto text-start'>
              <p>
                We define your competition and target audience. Discover what is
                working in your online industry, then design your website
                accordingly.
              </p>
            </div>

            <div className='col-lg-4 col-md-4 col-sm-12 col-12 py-2 custom-text-primary my-auto text-end'>
              <p>
                Color scheme, layout, sitemap, and style. We will bring your
                brand to life with a one of a kind masterpiece, built just for
                you.
              </p>
            </div>

            <div className='col-lg-4 col-md-4 col-sm-12 col-12 py-2 my-auto'>
              <Image
                priority
                width='180'
                height='160'
                src='/images/design.jpg'
                alt='Design'
                className='img-fluid rounded-3 border custom-border-primary border-5'
              />
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12 col-12 py-2 my-auto'>
              <h2>
                Design
                <span
                  className='fw-bolder custom-text-primary'
                  style={{ fontSize: '300%' }}
                >
                  02
                </span>
              </h2>
            </div>

            <div className='col-lg-4 col-md-4 col-sm-12 col-12 py-2 my-auto'>
              <h2>
                <span
                  className='fw-bolder custom-text-primary'
                  style={{ fontSize: '300%' }}
                >
                  03
                </span>
                Develop
              </h2>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12 col-12 py-2 my-auto'>
              <Image
                priority
                width='180'
                height='160'
                src='/images/develop.jpg'
                alt='Develop'
                className='img-fluid rounded-3 border custom-border-primary border-5'
              />
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12 col-12 py-2 custom-text-primary my-auto text-start'>
              <p>
                {`
                
                We turn your ideas into a reality. & our website is placed on a
                "development server" where you get to watch the whole process,
                live.
                `}
              </p>
            </div>

            <div className='col-lg-4 col-md-4 col-sm-12 col-12 py-2 custom-text-primary my-auto text-end'>
              <p>
                {`
                This is where you go live, to the world. Design, marketing, and
                maintenance; we'll be at your side for the life of your site.
                `}
              </p>
            </div>

            <div className='col-lg-4 col-md-4 col-sm-12 col-12 py-2 my-auto'>
              <Image
                priority
                width='180'
                height='160'
                src='/images/support.jpg'
                alt='Support'
                className='img-fluid rounded-3 border custom-border-primary border-5'
              />
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12 col-12 py-2 my-auto'>
              <h2>
                Support
                <span
                  className='fw-bolder custom-text-primary'
                  style={{ fontSize: '300%' }}
                >
                  04
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Strategies
