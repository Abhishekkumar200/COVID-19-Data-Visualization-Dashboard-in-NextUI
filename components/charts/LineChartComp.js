import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import { Card, CardHeader, CardBody } from "@nextui-org/react";

// This is Linechart of charts section.

const LineChartComp = ({ data }) => {
    return (
        <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold text-default-500">Daily New Cases</p>
                <small className="text-default-500">Analytics for current month</small>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <LineChart width={1100} height={300} data={data}>
                            <Line type='monotone' dataKey='new_case' stroke='#8884d8' />
                            <CartesianGrid stroke='#ccc' />
                            <XAxis dataKey='date' />
                            <YAxis />
                            <Tooltip />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardBody>
        </Card>
    )
}

export default LineChartComp;
