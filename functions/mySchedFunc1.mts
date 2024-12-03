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
    let supaDataArray = []
    supaDataArray = supaRes.supabaseData
    console.log('supaDataArray:')
    console.table(supaDataArray)
    console.log('done reading supabase')
    if (this.supaDataArray.length > 0 ) {
        reportActiveAssTaker(supaDataArray)
    } else {
        console.log('supaDataArray is null for qtUsers  ' + supaFlds)
    }
    return new Response("Ok")
     
    function reportActiveAssTaker(supaDataArray:any){
      console.log('found an active assessment taker:')
      console.log("qUserId: " + supaData[0].qUserId)
    } // end fun reportActiveAssTaker
} // end export

export const config: Config = {
    // schedule: "@hourly"  
    schedule: "53 * * * *"
}

