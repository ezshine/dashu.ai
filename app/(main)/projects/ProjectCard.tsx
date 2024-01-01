'use client'

import {
  AnimatePresence,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

import { ExternalLinkIcon } from '~/assets'
import { Card } from '~/components/ui/Card'
import { urlForImage } from '~/sanity/lib/image'
import { type Project } from '~/sanity/schemas/project'

export function ProjectCard({ project }: { project: Project }) {
  const { _id, url, icon, name, description } = project

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const radius = useMotionValue(0)
  const handleMouseMove = React.useCallback(
    ({ clientX, clientY, currentTarget }: React.MouseEvent) => {
      const bounds = currentTarget.getBoundingClientRect()
      mouseX.set(clientX - bounds.left)
      mouseY.set(clientY - bounds.top)
      radius.set(Math.sqrt(bounds.width ** 2 + bounds.height ** 2) / 2)
    },
    [mouseX, mouseY, radius]
  )
  const maskBackground = useMotionTemplate`radial-gradient(circle ${radius}px at ${mouseX}px ${mouseY}px, black 40%, transparent)`
  const [isHovering, setIsHovering] = React.useState(false)

  return (
    <Card
      as="li"
      key={_id}
      onMouseEnter={() => setIsHovering(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-xl bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={urlForImage(icon)?.size(100, 100).auto('format').url()}
          alt=""
          width={36}
          height={36}
          className="h-24 w-24 rounded-xl"
          unoptimized
        />
      </div>
      <h2 className="mt-6 text-base font-bold text-zinc-800 dark:text-zinc-100">
        <Card.Link href={url} target="_blank">
          {name}
        </Card.Link>
      </h2>
      <Card.Description className='line-clamp-2'>{description}</Card.Description>
      <p className="pointer-events-none relative z-40 mt-6 flex items-center text-sm font-medium text-zinc-400 transition group-hover:-translate-y-0.5 group-hover:text-lime-600 dark:text-zinc-200 dark:group-hover:text-lime-400">
        <span className="mr-2">{new URL(url).host}</span>
        <ExternalLinkIcon className="h-4 w-4 flex-none" />
      </p>
    </Card>
  )
}
