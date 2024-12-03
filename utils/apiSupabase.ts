// callers of funcs in this here apiSupabase must await  fetch-promise to resolve.
// example from a caller:
// this.supaRes = await apiSupabase.addSupabase(tbl,flds)
// grand parent and great grandparent func will have to wait, if they use fetch response.

  let readSupabase = (tbl:any,flds:object) => {
    console.log(Date.now()/10000,'running readSupabase in apiSupabase')
    let myFldNamesArray = Object.keys(flds)   //.map(x => x )
    let myFldValsArray = Object.values(flds) //.map(x => x + 'fee' )
    let myUrl = 'https://play.flytechfree.com/.netlify/functions/readSupabase'
    myUrl += '?tbl=' + tbl
    for (let i=0;  i < myFldNamesArray.length; i++){
      myUrl += '&' + myFldNamesArray[i]
      myUrl += '=' + myFldValsArray[i]
    } // end for loop
    console.log('12 apiSupabase readSupabase myUrl: ', myUrl)
    return fetch(myUrl)
     .then((response) => {
       console.log (Date.now()/10000, '15 readSupabase .then of fetch')
       return response.json()
     }) // end .then
  } // end readSupabase //////////////////////////////////////////////////////

  async function addSupabase (tbl:any,flds:object) {
    console.log(Date.now()/10000,'21 running addSupabase in apiSupabase.js')
    let myFldNamesArray = Object.keys(flds)  //.map(x => x )
    let myFldValsArray = Object.values(flds) //.map(x => x )
    let myUrl = new URL ("https://play.flytechfree.com/.netlify/functions/addSupabase")
    let myType = ''
    let tmpFldVal = ''
    myUrl.searchParams.append("tbl",tbl)
    for (let i=0;  i < myFldNamesArray.length; i++){    
      myType = (typeof (myFldValsArray[i]))
      tmpFldVal = '' + myFldValsArray[i]
      if (tmpFldVal.includes('"')){
        console.log('tmpFldVal includes a dbl quote.') //chg double quotes cuz supabase chokes.
        tmpFldVal = '' +  myFldValsArray[i].replaceAll('"',"'")
        myFldValsArray[i] = tmpFldVal
        console.log('myFldValsArray[i]', myFldValsArray[i])
      } // end if
     
      if (tmpFldVal.includes('\n')){
        console.log('tmpFldVal includes a newline.') //chg newline cuz supabase chokes.
        tmpFldVal = '' +  myFldValsArray[i].replaceAll('\n',"\\n")
        myFldValsArray[i] = tmpFldVal
        console.log('myFldValsArray[i]', myFldValsArray[i])
      } // end if

      if ( myType ==  'object') {
        //console.log('yes myType is an object.').  in this case, it means this is a sub-array.
        myFldValsArray[i] = '{' + myFldValsArray[i] + '}' // postGres wants brackets on sub-array.
      } // end if
      myUrl.searchParams.append(myFldNamesArray[i],myFldValsArray[i]) // magic url append
    } // end for
    let response = await fetch(myUrl) // first return is a promise,
    return response.json()  // caller of api.addSupbase must wait also.
  } // end addSupabase //////////////////////////////////////////////////////////
  
  async function delSupabase (tbl:any,flds:object)  {
    console.log(Date.now()/10000,'running delSupabase in apiSupabase')
    let myFldNamesArray = Object.keys(flds)  //.map(x => x )
    let myFldValsArray = Object.values(flds) //.map(x => x + 'fee' )
    let myUrl = 'https://play.flytechfree.com/.netlify/functions/delSupabase'
    myUrl += '?tbl=' + tbl
    for (let i=0;  i < myFldNamesArray.length; i++){
      myUrl += '&' + myFldNamesArray[i]
      myUrl += '=' + myFldValsArray[i]
    } // end for loop
    console.log('69 apiSupabase delSupabase myUrl: ', myUrl)
    let response = await fetch(myUrl)
    return response.json() 
  } // end delSupabase //////////////////////////////////////////////////////
  
  let chgSupabase = (tbl:any,flds:object) => {
    console.log(Date.now()/10000,'running chgSupabase in apiSupabase')
    let myFldNamesArray = Object.keys(flds)  //.map(x => x )
    let myFldValsArray = Object.values(flds) //.map(x => x + 'fee' )
    let myUrl = 'https://play.flytechfree.com/.netlify/functions/chgSupabase'
    myUrl += '?tbl=' + tbl
    for (let i=0;  i < myFldNamesArray.length; i++){
      myUrl += '&' + myFldNamesArray[i]
      myUrl += '=' + myFldValsArray[i]
    } // end for loop
    console.log('87 apiSupabase chgSupabase myUrl: ', myUrl)
    return fetch(myUrl)
     .then((response) => {
       console.log (Date.now()/10000, '90 chgSupabase .then of fetch')
       return response.json()
     }) // end .then
  } // end chgSupabase //////////////////////////////////////////////////////
  
  let delSupabaseMulti = (tbl:any,flds:object) => {
    console.log(Date.now()/10000,'running delSupabaseMulti in apiSupabase')
    let myFldNamesArray = Object.keys(flds)  //.map(x => x )
    let myFldValsArray = Object.values(flds) //.map(x => x + 'fee' )
    let myUrl = 'https://play.flytechfree.com/.netlify/functions/delSupabaseMulti'
    myUrl += '?tbl=' + tbl
    for (let i=0;  i < myFldNamesArray.length; i++){
      myUrl += '&' + myFldNamesArray[i]
      myUrl += '=' + myFldValsArray[i]
    } // end for loop
    console.log('12 apiSupabase delSupabaseMulti myUrl: ', myUrl)
    return fetch(myUrl)
     .then((response) => {
       console.log (Date.now()/10000, '15 delSupabaseMulti .then of fetch')
       return response.json()
     }) // end .then
  } // end delSupabaseMulti //////////////////////////////////////////////////////

  export default  {
    readSupabase: readSupabase,
    addSupabase: addSupabase,
    chgSupabase: chgSupabase,
    delSupabase: delSupabase,
    delSupabaseMulti: delSupabaseMulti
  } // end export
