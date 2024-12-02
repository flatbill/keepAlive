// YOUR_BASE_DIRECTORY/netlify/functions/test-scheduled-function.mts

import type { Config } from "@netlify/functions"

export default async (req: Request) => {
    const { next_run } = await req.json()
    console.log("Received event! Next invocation at:", next_run)
    return new Response("Ok")
}

export const config: Config = {
    // schedule: "@hourly"
    schedule: "12 * * * *"
}

