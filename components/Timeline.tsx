import React from "react";
import TimelineItem from "./TimelineItem";

const Timeline = ({ details }) => {
    return (
        <section id="timeline">
            <div className="container mx-auto px-8 py-20">
                <div className="mx-auto">
                    <div className="flex flex-col justify-center items-center mx-auto">
                        <h2 className="flex flex-row justify-center text-2xl">{details.title}</h2>
                        <p className="flex flex-row justify-center text-center py-8">{details.description}</p>
                    </div>
                    <ol className="items-center sm:flex py-12">
                        {details.items.map((item, index) => {
                            return (
                                <TimelineItem
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    fontAwesomeIconName={item.fontAwesomeIconName}
                                />
                            )
                        })}
                    </ol>
                </div>
            </div>
        </section>
    )
};

export default Timeline;