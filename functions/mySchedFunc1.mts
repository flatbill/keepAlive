// YOUR_BASE_DIRECTORY/netlify/functions/test-scheduled-function.mts

import type { Config } from "@netlify/functions"
import apiSupabase from '../utils/apiSupabase'
export default async (req: Request) => {
    const { next_run } = await req.json()
    console.log("Received event! Next invocation at:", next_run)
    console.log("running mySchedFunc1.mts")
    console.log('ready to read supabase')
    let supaFlds = {"cust": '2', "qid": '1', "status":'active'}
    let supaRes = await apiSupabase.readSupabase('qtUsers',supaFlds )
    let supaData = supaRes.supabaseData
    console.log('supaData:')
    console.table(supaData)
    console.log('done reading supabase')
    hiBaby(supaData)
    return new Response("Ok")
    function hiBaby(supaData:any){
        if(supaData.length > 0){
          console.log("hi " + supaData[0].firstName)
        }
    }
} // end export

export const config: Config = {
    // schedule: "@hourly"  
    schedule: "14 * * * *"
}

