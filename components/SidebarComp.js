"use client";

import React, { useState, useEffect, createContext, useContext } from 'react';
import { ChevronFirst, MoreVertical, ChevronLast, CircleUserRound } from 'lucide-react';
import { Link } from "@nextui-org/react";
import NextLink from 'next/link';

// This file includes the elements of sidebar component and logic to expand and collapse the sidebar.

const SidebarContext = createContext();

export function SidebarComp({ children }) {
    const [expanded, setExpanded] = useState(true);

    // Collapse the sidebar on medium screens automatically
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setExpanded(true); // Expanded on larger screens
            } else {
                setExpanded(false); // Collapsed on smaller screens
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize(); // Call on mount to set the initial state
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <aside className={`h-full dark:bg-foreground flex flex-col bg-white border-r shadow-sm transition-all duration-300 ${expanded ? "w-64" : "w-20"} overflow-y-auto`}>
            <nav className="h-full flex flex-col">
                <div className="p-4 pb-2 flex justify-end">
                    <button
                        className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
                        onClick={() => setExpanded(!expanded)} // Toggle expanded state
                    >
                        {expanded ? <ChevronFirst /> : <ChevronLast />}
                    </button>
                </div>


                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3">{children}</ul>
                </SidebarContext.Provider>

                <div className="border-t flex p-3 text-gray-600">
                    <CircleUserRound size={32} />
                    <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
                        <div className="leading-4">
                            <h4 className="font-semibold ">Abhishek Kumar</h4>
                            <span className="text-xs">abhishek909977@gmail.com</span>
                        </div>
                        <MoreVertical size={20} />
                    </div>
                </div>
            </nav>
        </aside>
    );
}



export function SidebarItem({ icon, text, active, alert, route }) {
    const { expanded } = useContext(SidebarContext);
    return (
        <li
            className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active
                ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                : "hover:bg-indigo-50 text-gray-600"
                }`}
        >
            {icon}
            <Link className={`text-gray-500 overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`} href={route} as={NextLink}>{text}</Link>
            {alert && <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`} />}

            {!expanded && (
                <div
                    className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
                >
                    {text}
                </div>
            )}
        </li>
    );
}
