import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Rectangle,
} from "recharts";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

// This is the Barchart of Charts section.

const BarChartComp = ({ data }) => {
    return (
        <Card className="py-4 max-w-500">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold text-default-500">Comparision between daily new cases, death and recoveries</p>
                <small className="text-default-500">Analytics for current month</small>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Bar
                                dataKey="total_case"
                                fill="#0088fe"
                                activeBar={<Rectangle stroke="#D3D3D3" />}
                            />
                            <Bar
                                dataKey="death"
                                fill="red"
                                activeBar={<Rectangle stroke="#D3D3D3" />}
                            />
                            <Bar
                                dataKey="recovered"
                                fill="#00c49f"
                                activeBar={<Rectangle stroke="#D3D3D3" />}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardBody>
        </Card>

    )
}

export default BarChartComp;
