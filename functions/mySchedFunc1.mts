// YOUR_BASE_DIRECTORY/netlify/functions/test-scheduled-function.mts

import type { Config } from "@netlify/functions"
import apiSupabase from '../utils/apiSupabase'
import apiTurso    from '../utils/apiTurso'
// import getEnvVar from '../utils/getEnvVars'
export default async (req: Request) => {
  const { next_run } = await req.json()
  console.log(Date.now()/1000 + "Received event! Next invocation at:", next_run)
  console.log(Date.now()/1000 + "running mySchedFunc1.mts")
  console.log(Date.now()/1000 + 'ready to read supabase')
  /////// read supabase //////////////////////
  let supaFlds = {"cust": '2', "qid": '1', "status":'active'}
  let supaDataArray = []
  let supaRes = await apiSupabase.readSupabase('qtUsers',supaFlds )
  console.log(Date.now()/1000  + 'done awaiting apiSupabase.')
  if (supaRes.supabaseData === undefined) {
    console.log(Date.now()/1000  + 'supaRes.supabaseData is undefined')
  } else {
    if (supaRes.supabaseData.length>0 ) {
      console.log(Date.now()/1000  +  ' supabase active user:')
      console.log(Date.now()/1000  + supaRes.supabaseData[0].qUserId)
    }//end if
  }// end if else
  /////// read turso:
  console.log(Date.now()/1000  +  ' attempt to read turso qtSubscribers:')
  let tblKeys = {  rowid: '1' }
  let tursoResponse = await apiTurso.readTurso('qtSubscribers',tblKeys)  
  console.log(Date.now()/1000  + tursoResponse.body)
  console.log(Date.now()/1000  + ' end of mySchedFunc1.mts')
} // end export

export const config: Config = {
    // schedule: "@daily"        
    schedule: "44 * * * *" //xx minutes past the hour. use this to test. 
}
