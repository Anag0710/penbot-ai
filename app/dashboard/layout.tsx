"use client";
import React, { useState } from 'react';
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UpdateCreditUsageContext } from '../(context)/UpdateCreditUsageContext';

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [totalUsage, setTotalUsage] = useState<Number>(0);
  const [UpdateCreditUsage, setUpdateCreditUsage] = useState<any>();

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UpdateCreditUsageContext.Provider value={{ UpdateCreditUsage, setUpdateCreditUsage }}>
        <head>
          <link rel="icon" href="/favicon.png" type="image/png" /> 
          <title>PENBOT AI</title>
        </head>
        <div className='bg-slate-100 min-h-screen'>
          <div className='md:w=64 hidden md:block fixed'>
            <SideNav />
          </div>
          <div className='md:ml-64'>
            <Header />
            {children}
          </div>
        </div>
      </UpdateCreditUsageContext.Provider>
    </TotalUsageContext.Provider>
  );
}

export default layout;
