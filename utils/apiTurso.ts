// callers of funcs in this here apiTurso must await the function's
// fetch-promise to resolve.   example from a caller:
// this.tursoRes = await apiTurso.addTurso(tblNm,flds)
// grand parent and great grandparent func will have to await, 
// if they use some part of the prior fetch response.

async function readTurso (tblNm:any,flds:object) {
  console.log(Date.now()/10000,'running readTurso in apiTurso')
  let myFldNamesArray = Object.keys(flds)    
  let myFldValsArray = Object.values(flds)  
  let myUrl = 'https://www.flytechfree.com/.netlify/functions/readTurso'
  myUrl += '?tblNm=' + tblNm
  for (let i=0;  i < myFldNamesArray.length; i++){
    myUrl += '&' + myFldNamesArray[i]
    myUrl += '=' + myFldValsArray[i]
  } // end for loop
  console.log(Date.now()/10000,'16 readTurso apiTurso gonna fetch. myUrl:')
  console.log(Date.now()/10000,myUrl)
  let response       = await fetch(myUrl)    // first return is a promise
  let doubleResponse = await response.json() // promise is resolved
  console.log(Date.now()/10000,'21 readTurso apiTurso done double await.')
  console.log(Date.now()/10000,'22 readTurso apiTurso doubleResponse:')
  console.log(Date.now()/10000,doubleResponse)
  return doubleResponse
} // end readTurso //////////////////////////////////////////////////////

async function addTurso (tblNm:any,flds:object) {
  console.log(Date.now()/10000,'21 running addTurso in apiTurso.js')
  let myFldNamesArray = Object.keys(flds)   
  let myFldValsArray = Object.values(flds)  
  let myUrl =  ("https://www.flytechfree.com/.netlify/functions/addTurso")
  myUrl += '?tblNm=' + tblNm
  for (let i=0;  i < myFldNamesArray.length; i++){ 
    myUrl += '&' + myFldNamesArray[i]
    myUrl += '=' + myFldValsArray[i]
  }//end for  
  console.log(Date.now()/10000, '36 addTurso apiTurso gonna fetch. myUrl:')
  console.log(Date.now()/10000,myUrl)
  let response       = await fetch(myUrl) // first return is a promise
  let doubleResponse = await response.json() // promise is resolved
  console.log(Date.now()/10000,'40 addTurso apiTurso done double await. doubleResponse:')
  console.log(Date.now()/10000,doubleResponse)
  console.log(Date.now()/10000,'iterate apiTurso over doubleResponse:')
  for (const [key, val] of Object.entries(doubleResponse)) {
    console.log(Date.now()/10000,'43 apiTurso iteratingdoubleResponse ... key & val:')
    console.log(Date.now()/10000,key)
    console.log(Date.now()/10000,val)
  }// end for
  console.log(Date.now()/10000,'48 isPojo double response true or false?')
  console.log(Date.now()/10000,isPojo(doubleResponse)) // true
  console.log(Date.now()/10000,'50 apiTurso gonna return from addTurso apiTurso doubleResponse')
  return doubleResponse
  function isPojo(obj:any) {
    return obj.constructor === Object
  }// end isPojo()
} // end addTurso //////////////////////////////////////////////////////////

async function delTurso (tblNm:any,flds:object)  {
  console.log(Date.now()/10000,'running delTurso in apiTurso')
  let myFldNamesArray = Object.keys(flds)  
  let myFldValsArray = Object.values(flds) 
  let myUrl = 'https://www.flytechfree.com/.netlify/functions/delTurso'
  myUrl += '?tblNm=' + tblNm
  for (let i=0;  i < myFldNamesArray.length; i++){
    myUrl += '&' + myFldNamesArray[i]
    myUrl += '=' + myFldValsArray[i]
  } // end for loop
  console.log(Date.now()/10000, ' 67 apiTurso delTurso myUrl: ')
  console.log(Date.now()/10000, myUrl)
  let response       = await fetch(myUrl)    // first return is a promise
  let doubleResponse = await response.json() // promise is resolved
  console.log(Date.now()/10000,'71 delTurso apiTurso done double await.')
  console.log(Date.now()/10000,'72 delTurso apiTurso doubleResponse:')
  console.log(Date.now()/10000,doubleResponse)
  return doubleResponse
} // end delTurso //////////////////////////////////////////////////////

async function chgTurso (tblNm:any, flds:object) {
  console.log(Date.now()/10000,'running chgTurso in apiTurso')
  let myFldNamesArray = Object.keys(flds)   
  let myFldValsArray = Object.values(flds)  
  let myUrl = 'https://www.flytechfree.com/.netlify/functions/chgTurso'
  myUrl += '?tblNm=' + tblNm
   for (let i=0;  i < myFldNamesArray.length; i++){
      myUrl += '&' + myFldNamesArray[i]
      myUrl += '=' + myFldValsArray[i]
   } // end for loop
  console.log(Date.now()/10000,'88 chgTurso apiTurso gonna fetch. myUrl:')
  console.log(Date.now()/10000,myUrl)
  let response       = await fetch(myUrl)    // first return is a promise
  let doubleResponse = await response.json() // promise is resolved
  console.log(Date.now()/10000,'91 chgTurso apiTurso done double await.')
  console.log(Date.now()/10000,'92 chgTurso apiTurso doubleResponse:')
  console.log(Date.now()/10000,doubleResponse)
  return doubleResponse
} // end chgTurso //////////////////////////////////////////////////////

async function delTursoMulti(tblNm:any,flds:object) {
  console.log(Date.now()/10000,'running delTursoMulti in apiTurso')
  let myFldNamesArray = Object.keys(flds)   
  let myFldValsArray = Object.values(flds) 
  let myUrl = 'https://www.flytechfree.com/.netlify/functions/delTursoMulti'
  myUrl += '?tblNm=' + tblNm
  for (let i=0;  i < myFldNamesArray.length; i++){
    myUrl += '&' + myFldNamesArray[i]
    myUrl += '=' + myFldValsArray[i]
  } // end for loop
  console.log(Date.now()/10000,'109 delTursoMulti apiTurso gonna fetch. myUrl:')
  console.log(Date.now()/10000,myUrl)
  let response       = await fetch(myUrl)    // first return is a promise
  let doubleResponse = await response.json() // promise is resolved
  console.log(Date.now()/10000,'113 delTursoMulti apiTurso done double await.')
  console.log(Date.now()/10000,'114 delTursoMulti apiTurso doubleResponse:')
  console.log(Date.now()/10000,doubleResponse)
  return doubleResponse
} // end delTursoMulti //////////////////////////////////////////////////////

export default  {
  readTurso: readTurso,
  addTurso: addTurso,
  chgTurso: chgTurso,
  delTurso: delTurso,
  delTursoMulti: delTursoMulti
} // end export