"use client"

import React, { useEffect, useState } from 'react';
import MeetingTypeList from "@/components/MeetingTypeList";

interface TimeOptions {
  hour12: boolean;
  hour: "numeric" | "2-digit";
  minute: "numeric" | "2-digit";
  hourCycle: "h12";
}

const Home = () => {
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const options: TimeOptions = {
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
    hourCycle: "h12",
  };

  const formattedTime = time.toLocaleTimeString("en-US", options);
  const formattedDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    date
  );

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at: 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{formattedTime}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{formattedDate}</p>
          </div>
        </div>
      </div>
  
      <MeetingTypeList />
    </section>
  );
};

export default Home;