"use client";
import dynamic from "next/dynamic";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import CardDataStats from "../CardDataStats";
import HeroSection from "../HeroSection/HeroSection";
import MapOne from "@/components/Maps/MapOne";
import KeyStatistics from "../Keyword/keywordstatic";

const ChartThree = dynamic(() => import("@/components/Charts/ChartThree"), {
  ssr: false,
});

const ECommerce: React.FC = () => {
  const stats = {
    totalDentists: 12000,
    citiesCovered: 500,
    dataPointsAnalyzed: 250000,
    avgPerformanceIncrease: 15, // Optional
  };
  return (
    <>
      <div className="">
        <HeroSection />
      </div>
      <div className="container mx-auto p-6">
        <KeyStatistics
          totalDentists={stats.totalDentists}
          citiesCovered={stats.citiesCovered}
          dataPointsAnalyzed={stats.dataPointsAnalyzed}
          avgPerformanceIncrease={stats.avgPerformanceIncrease}
        />
      </div >
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <div className="col-span-12 xl:col-span-8">

        </div>

      </div>
    </>
  );
};

export default ECommerce;
