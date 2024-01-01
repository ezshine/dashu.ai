'use client'

import { motion } from 'framer-motion'

import { SparkleIcon, UFOIcon } from '~/assets'
import { SocialLink } from '~/components/links/SocialLink'

function Developer() {
  return (
    <span className="group">
      <span className="font-mono">&lt;</span>老猿
      <span className="font-mono">/&gt;</span>
      <span className="invisible inline-flex text-zinc-300 before:content-['|'] group-hover:visible group-hover:animate-typing dark:text-zinc-500" />
    </span>
  )
}

function Designer() {
  return (
    <span className="group relative rounded-2xl bg-black/5 p-1 dark:bg-white/5">
      <span className="pointer-events-none absolute inset-0 border border-lime-700/90 opacity-70 group-hover:border-dashed group-hover:opacity-100 dark:border-lime-400/90">
        <span className="absolute -left-0.5 -top-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -bottom-0.5 -left-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
      </span>
      大帅
    </span>
  )
}

function OCD() {
  return (
    <span className="group">
      <SparkleIcon className="mr-1 inline-flex transform-gpu transition-transform duration-500 group-hover:rotate-180" />
      <span>细节控</span>
    </span>
  )
}

function Founder() {
  return (
    <span className="group">
      <UFOIcon className="mr-1 inline-flex group-hover:fill-zinc-600/20 dark:group-hover:fill-zinc-200/20" />
      <span>硬地骇客</span>
    </span>
  )
}

export function Headline() {
  return (
    <div className="max-w-2xl">
      <motion.h1
        className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 100,
          duration: 0.3,
        }}
      >
        <Designer /> <Developer />
        <br />
      </motion.h1>
      <motion.p
        className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 85,
          duration: 0.3,
          delay: 0.1,
        }}
      >
        <span>
          我是大帅，一个热爱编程的老程序猿。我喜欢通过编程去实现创新的设计和交互体验，希望有一天也可以像我的偶像乔布斯一样，创造出能影响世界的产品。
        </span>
      </motion.p>
      <motion.div
        className="mt-6 flex gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 50,
          stiffness: 90,
          duration: 0.35,
          delay: 0.25,
        }}
      >
        <SocialLink
          href="https://x.com/ezshine"
          aria-label="我的推特"
          platform="twitter"
        />
        <SocialLink
          href="https://youtube.com/@ezshine"
          aria-label="我的 YouTube"
          platform="youtube"
        />
        <SocialLink
          href="https://space.bilibili.com/422646817"
          aria-label="我的 Bilibili"
          platform="bilibili"
        />
        <SocialLink
          href="https://github/ezshine"
          aria-label="我的 GitHub"
          platform="github"
        />
        <SocialLink
          href="https://discord.gg/jpGEg6A7"
          aria-label="我的 Discord"
          platform="discord"
        />
        <SocialLink href="/feed.xml" platform="rss" aria-label="RSS 订阅" />
        <SocialLink
          href="https://open.weixin.qq.com/qr/code?username=ezfullstack"
          aria-label="我的 微信"
          platform="wechat"
        />
      </motion.div>
    </div>
  )
}
