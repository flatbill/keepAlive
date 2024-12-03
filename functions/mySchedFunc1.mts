// YOUR_BASE_DIRECTORY/netlify/functions/test-scheduled-function.mts

import type { Config } from "@netlify/functions"
import apiSupabase from '../utils/apiSupabase'
// import {readSupabase} from '@netlify/functions/readSupabase.js'
// import {readSupabase} from 'readSupabase.js'
export default async (req: Request) => {
    const { next_run } = await req.json()
    console.log("Received event! Next invocation at:", next_run)
    console.log("running mySchedFunc1.mts")
    console.log('ready to read supabase')
    let supaFldsCustQid = {"cust": '2', "qid": '1'}
    // let supaRes = await  readSupabase('qtUsers',supaFldsCustQid) 
    let supaRes = await apiSupabase.readSupabase('qtUsers',supaFldsCustQid)
    let supaData = supaRes.supabaseData
    console.log('supaData:')
    console.table(supaData)
    console.log('done reading supabase')
    hiBaby(supaData)
    return new Response("Ok")
    function hiBaby(supaData:any){console.log("hi " + supaData.firstName)}
} // end export

export const config: Config = {
    // schedule: "@hourly"  
    schedule: "57 * * * *"
}

