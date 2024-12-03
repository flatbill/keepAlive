// YOUR_BASE_DIRECTORY/netlify/functions/test-scheduled-function.mts

import type { Config } from "@netlify/functions"
import apiSupabase from '../utils/apiSupabase'
export default async (req: Request) => {
    const { next_run } = await req.json()
    console.log("Received event! Next invocation at:", next_run)
    console.log("running mySchedFunc1.mts")
    console.log('ready to read supabase')
    let supaFlds = {"cust": '2', "qid": '1', "status":'active'}
    let supaDataArray = []
    let supaRes = await apiSupabase.readSupabase('qtUsers',supaFlds )
    console.log('done awaiting apiSupabase.')
    // console.log(supaRes.length)//length is undefined
    console.log('supaRes.supabaseData:')
    console.log(supaRes.supabaseData)
    if (supaRes.supabaseData === undefined) {
        console.log('supaRes.supabaseData is undefined')
    } else {
        console.log('supaRes.supabaseData is NOT undefined')
        console.log( supaRes.supabaseData  )
        console.log( supaRes.supabaseData.length  )
        if (supaRes.supabaseData.length>0 ) {
          console.log('active user:')
          console.log(supaRes.supabaseData[0].qUserId)
        }//end if
    }// end if else
} // end export

export const config: Config = {
    // schedule: "@hourly"  
    schedule: "38 * * * *"
}
