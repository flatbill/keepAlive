// YOUR_BASE_DIRECTORY/netlify/functions/test-scheduled-function.mts

import type { Config } from "@netlify/functions"
// import apiSupabase from '../../../src/utils/apiSupabase'
import {readSupabase} from '/functions/readSupabase.js'
// import {readSupabase} from 'readSupabase.js'
export default async (req: Request) => {
    const { next_run } = await req.json()
    console.log("Received event! Next invocation at:", next_run)
    console.log("running mySchedFunc1.mts")
    console.log('ready to read supabase')
    let supaFldsCustQid = {"cust": '2', "qid": '1'}
    // await this.launchReadSupabase('qtUsers',supaFldsCustQid)  
    // let supaRes = await apiSupabase.readSupabase('qtUsers',supaFldsCustQid)
    let supaRes = await  readSupabase('qtUsers',supaFldsCustQid)
    console.log('done reading supabase')
    return new Response("Ok")

    // async launchReadSupabase(tbl:any,flds:any){
    //     console.log(Date.now()/10000,'500 running launchReadSupabase...')
    //     console.table(flds)
    //     let supaRes = await apiSupabase.readSupabase(tbl,flds)
    //     console.log(Date.now()/10000,'503 done waiting for apiSupabase.  supaRes:')
    //     console.log(supaRes)  //supaRes is only a promise unless I await. 
    //                           //supaRes is null if fieldname is wrong.
    //                           //supaRes is an empty object if no data found.
    //                           //supaRes.supaData is null if no data found.
    //     let supaData = supaRes.supabaseData
    //     // if (supaData === null) {this.supaData = []}
    //     console.log(Date.now()/10000,'509 end of launchReadSupabase.')
    // } // end launchReadSupabase
      
} // end export

export const config: Config = {
    // schedule: "@hourly"  
    schedule: "21 * * * *"
}

