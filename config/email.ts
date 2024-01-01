export const emailConfig = {
  from: 'hi@dashu.ai',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://dashu.ai`
      : 'http://localhost:3000',
}
