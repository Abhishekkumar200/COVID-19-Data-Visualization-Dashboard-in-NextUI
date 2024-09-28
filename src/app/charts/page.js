'use client';
import { React, useState, useEffect } from 'react';
import LineChartComp from '../../../components/charts/LineChartComp';
import BarChartComp from '../../../components/charts/BarChartComp';
import { DateRangePicker } from "@nextui-org/react";
import { parseDate, getLocalTimeZone } from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";
import data from '../../../data/data';

//Main page for route -'/charts'. This file render components- date range picker, line chart, and barchart for chart section and logic to filter data based on date range.

// Helper function to convert 'dd-mm-yyyy' to Date object and remove time
const convertToDate = (dateString) => {
    const [day, month, year] = dateString.split('-');
    const date = new Date(`${year}-${month}-${day}`);
    date.setHours(0, 0, 0, 0);  // Reset time to midnight (00:00:00)
    return date;
};

// Helper function to normalize date (set time to 00:00:00)
const normalizeDate = (date) => {
    const normalizedDate = new Date(date);
    normalizedDate.setHours(0, 0, 0, 0); // Reset time to 00:00:00
    return normalizedDate;
};

const ChartsPage = () => {
    const [value, setValue] = useState({
        start: parseDate("2024-09-01"),
        end: parseDate("2024-09-10"),
    });
    const [filteredData, setFilteredData] = useState(data);

    let formatter = useDateFormatter();

    // Function to filter data based on selected range, including both start and end dates
    const filterDates = (range) => {
        const startDate = normalizeDate(range.start.toDate(getLocalTimeZone()));
        const endDate = normalizeDate(range.end.toDate(getLocalTimeZone()));

        const filtered = data.filter((item) => {
            const currentDate = convertToDate(item.date);
            return currentDate >= startDate && currentDate <= endDate; // Inclusive of both start and end
        });
        setFilteredData(filtered);
    };

    // UseEffect to filter dates whenever the date range changes
    useEffect(() => {
        filterDates(value);
    }, [value]);

    return (
        <div className="flex flex-col space-y-5 ">
            <DateRangePicker
                label="Filter data by date"
                className="max-w-xs "
                variant='bordered'
                value={value}
                onChange={setValue}
                minValue={parseDate("2024-09-01")}
                maxValue={parseDate("2024-09-10")}
                description="Please choose the date range between '01-09-2024' to '10-09-2024'."
            />

            <LineChartComp data={filteredData} />
            <BarChartComp data={filteredData} />

        </div>
    )
}

export default ChartsPage;
