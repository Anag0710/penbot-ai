"use client";
import { Button } from '@/components/ui/button';
import { AIOutput } from '@/utils/schema';
import { db } from '@/utils/db';
import { eq } from 'drizzle-orm';
import { useUser } from '@clerk/nextjs';
import React, { useContext, useEffect } from 'react';
import { HISTORY } from '../history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';

function UsageTrack() {
    const { user } = useUser();
    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
    const { UpdateCreditUsage } = useContext(UpdateCreditUsageContext);

    useEffect(() => {
        user && GetData();
    }, [user]);

    useEffect(() => {
        user && GetData();
    }, [UpdateCreditUsage]);

    const GetData = async () => {
        //@ts-ignore
        const result: HISTORY[] = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));
        GetTotalUsage(result);
    };

    const GetTotalUsage = (result: HISTORY[]) => {
        let total: number = 0;
        result.forEach(element => {
            total += Number(element.aiResponse?.length);
        });
        setTotalUsage(total);
        console.log(total);
    };

    return (
        <div className='m-5'>
            <div className='bg-primary text-white rounded-lg p-3'>
                <h2 className='font-medium'>Credits</h2>
                <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
                    <div className='h-2 bg-white rounded-full'
                        style={{
                            width: (totalUsage / 30000) * 100 + "%"
                        }}
                    ></div>
                </div>
                <h2 className='text-sm my-2'>{totalUsage}/30,000 Credit Used!</h2>
            </div>
            <div className="flex flex-col items-center w-full">
                <a href="https://bento.me/anag" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button 
                        variant={'secondary'} 
                        className='w-full my-3 text-primary transition-transform duration-300 hover:scale-105'
                    >
                        Checkout my profile!
                    </Button>
                    <p className=" w-full text-center text-sm text-gray-500 transition-opacity duration-300 hover:opacity-80 ">
                        Developed by Anag Aggarwal </p>
                </a>
            </div>
        </div>
    );
}

export default UsageTrack;
