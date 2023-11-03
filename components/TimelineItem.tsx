import React from "react";
import IconComponent from "./IconComponent";

const TimelineItem = ({ title, description, fontAwesomeIconName }) => {
    return (
        <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <IconComponent icon={fontAwesomeIconName} size={12} color="text-base-500" />
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>
            </div>
        </li>
    )
}

export default TimelineItem;