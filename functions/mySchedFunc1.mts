// YOUR_BASE_DIRECTORY/netlify/functions/test-scheduled-function.mts

import type { Config } from "@netlify/functions"
import apiSupabase from '../utils/apiSupabase'
import apiTurso    from '../utils/apiTurso'
// import getEnvVar from '../utils/getEnvVars'
export default async (req: Request) => {
  const { next_run } = await req.json()
  console.log(performance.now() + "Received event! Next invocation at:", next_run)
  console.log(performance.now() + "running mySchedFunc1.mts")
  console.log(performance.now() + 'ready to read supabase')
  /////// read supabase //////////////////////
  let supaFlds = {"cust": '2', "qid": '1', "status":'active'}
  let supaDataArray = []
  let supaRes = await apiSupabase.readSupabase('qtUsers',supaFlds )
  console.log(performance.now()  + 'done awaiting apiSupabase.')
  if (supaRes.supabaseData === undefined) {
    console.log(performance.now()  + 'supaRes.supabaseData is undefined')
  } else {
    if (supaRes.supabaseData.length>0 ) {
      console.log(performance.now()  +  ' supabase active user:')
      console.log(performance.now()  + supaRes.supabaseData[0].qUserId)
    }//end if
  }// end if else
  /////// read turso:
  console.log(performance.now()  +  ' attempt to read turso user:')
  let tblKeys = {  rowid: '1' }
  let tursoResponse = await apiTurso.readTurso('teamMembers',tblKeys)  
  console.log(performance.now()  + tursoResponse)
} // end export

export const config: Config = {
    // schedule: "@daily"        
    schedule: "11 * * * *" //xx minutes past the hour. use this to test. 
}
