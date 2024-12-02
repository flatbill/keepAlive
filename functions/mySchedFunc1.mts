// YOUR_BASE_DIRECTORY/netlify/functions/test-scheduled-function.mts

import type { Config } from "@netlify/functions"
import apiSupabase from '../../../src/utils/apiSupabase'


export default async (req: Request) => {
    const { next_run } = await req.json()
    console.log("Received event! Next invocation at:", next_run)
    console.log("running mySchedFunc1.mts")
    console.log('ready to read supabase')
    this.supaFldsCustQid = {"cust": '2', "qid": '1'}
    await this.launchReadSupabase('qtUsers',this.supaFldsCustQid) 
    console.log('done reading supabase')
    return new Response("Ok")
}

export const config: Config = {
    // schedule: "@hourly"  
    schedule: "45 * * * *"
}

