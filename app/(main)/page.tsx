import React from 'react'

import { BlogPosts } from '~/app/(main)/blog/BlogPosts'
import { Headline } from '~/app/(main)/Headline'
import { Newsletter } from '~/app/(main)/Newsletter'
// import { Photos } from '~/app/(main)/Photos'
// import { Resume } from '~/app/(main)/Resume'
import { PencilSwooshIcon,SparkleIcon } from '~/assets'
import { Container } from '~/components/ui/Container'
import { Projects } from '~/app/(main)/projects/Projects'

export default function BlogHomePage() {
  return (
    <>
      <Container className="mt-12">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-6">
              <Headline />
            </div>
          <aside className="space-y-10 sticky:top-0 lg:top-8 lg:h-fit lg:pl-16 xl:pl-20">
              <Newsletter />
          </aside>
        </div>
      </Container>
      <Container className="mt-16">
        <div className="flex flex-col gap-6 pt-6">
          <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <SparkleIcon className="h-5 w-5 flex-none" />
            <span className="ml-2">我的项目</span>
          </h2>
        </div>
        <div className="flex mt-6 flex-col gap-6 pt-6">
          <Projects />
        </div>
      </Container>
      <Container className="mt-16">
        <div className="flex flex-col gap-6 pt-6">
          <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <PencilSwooshIcon className="h-5 w-5 flex-none" />
            <span className="ml-2">近期文章</span>
          </h2>
        </div>
        <div className='grid mt-6 gap-6 pt-6 grid-cols-1 lg:max-w-none lg:grid-cols-2'>
          <BlogPosts />
        </div>
      </Container>
    </>
  )
}

export const revalidate = 60
