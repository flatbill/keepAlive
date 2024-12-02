import { schedule } from '@netlify/functions'

export const handler = schedule("5 18 * * *", async () => {
  console.log("It's 18:05 ")
})