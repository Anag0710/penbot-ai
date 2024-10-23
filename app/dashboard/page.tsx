"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

function Dasboard() {
  const [userSearchInput,setUserSearchInput]=useState<string>()
  return (
    <div>
      {/*Search Section*/}
      <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)} />


      {/*Template List Section*/}
      <TemplateListSection userSearchInput ={userSearchInput}/>
    </div>
  )
}

export default Dasboard