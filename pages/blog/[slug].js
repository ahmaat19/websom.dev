import Head from 'next/head'
import Image from 'next/image'
import moment from 'moment'
import readingTime from 'reading-time'
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import { FaUserAlt } from 'react-icons/fa'
import Meta from '../../components/Meta'

const PostDetails = ({ post, slug, content }) => {
  return (
    <div>
      <>
        <Meta
          title={post.title}
          description={post.description}
          image={post.image}
          url={`https://websom.dev/blog/${slug}`}
          author='Ahmed Ibrahim'
        />

        <div className='row'>
          <div className='col-md-9 col-12 mx-auto'>
            <div className='card-body'>
              <h1 className='card-title fs-1 fw-bold'>{post.title}</h1>

              <div className='row'>
                <div className='col-md-7 col-12'>
                  <div className='d-flex align-items-center'>
                    <FaUserAlt className='bg-secondary text-light rounded-pill p-2 fs-2' />
                    <div
                      className=' ms-1'
                      style={{ fontSize: '14px', lineHeight: '1.2' }}
                    >
                      <span className='author fw-bold'>{post.author}</span>
                      <span
                        className='author mx-2'
                        style={{ fontSize: '12px' }}
                      >
                        {moment(post.createdAt).format('Do MMM Y')}
                      </span>
                      <span> {readingTime(content).text}</span>
                    </div>
                  </div>
                </div>
                <div className='col-md-5 '>
                  {slug && (
                    <div className='float-end'>
                      <FacebookShareButton
                        url={`https://websom.dev/blog/${slug}`}
                      >
                        <FacebookIcon
                          size={28}
                          round={true}
                          className='mb-1 custom-text-primary'
                        />
                      </FacebookShareButton>
                      <TwitterShareButton
                        url={`https://websom.dev/blog/${slug}`}
                      >
                        <TwitterIcon
                          size={28}
                          round={true}
                          className='mb-1 custom-text-primary mx-1'
                        />
                      </TwitterShareButton>
                      <WhatsappShareButton
                        url={`https://websom.dev/blog/${slug}`}
                      >
                        <WhatsappIcon
                          size={28}
                          round={true}
                          className='mb-1 custom-text-primary'
                        />
                      </WhatsappShareButton>
                    </div>
                  )}
                </div>
              </div>

              {post.image && (
                <div className='image-wrapper my-3'>
                  <Image
                    src={post.image}
                    width='1000'
                    height='420'
                    className='card-img-top img-fluid image '
                    alt={post.image}
                  />
                </div>
              )}
              <p className='card-text'>
                {post.tag.map((hash) => (
                  <button
                    key={hash}
                    className='btn btn-light btn-sm me-2 text-muted'
                  >
                    #{hash}
                  </button>
                ))}
              </p>
              <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default PostDetails

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: post, content } = matter(markdownWithMeta)
  return {
    props: { post, slug, content },
  }
}
