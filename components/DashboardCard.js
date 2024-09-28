import React from 'react';
import { Card, CardBody, CardHeader } from "@nextui-org/react";

// This is home/overview card componenet.
const DashboardCard = ({ value, title, icon }) => {
    return (
        <Card shadow="sm" isPressable className='py-4' style={{ width: '15rem', height: '13rem', border: '1px solid rgb(120, 40, 200)' }}>
            <CardHeader className="flex-col items-center">
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <h3 style={{ fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: 'bold' }} className='text-center text-default-500 mb-5'>{title}</h3>
                <div className='flex gap-5 justify-center items-center text-default-500'>
                    {icon}
                    <h3 className='font-semibold text-xl'>
                        {value}
                    </h3>
                </div>

            </CardBody>
        </Card>
    )
}

export default DashboardCard;
