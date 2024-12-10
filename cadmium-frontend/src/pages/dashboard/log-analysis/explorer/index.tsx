import React from "react";
import NumericStats from "./components/numeric-stats";
import { LogChart } from "./components/chart";
import LogTable from "./components/log-table";

const Explorer: React.FC = () => {

    return (
        <div className="">
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="grid auto-rows-min gap-4 grid-cols-1 md:grid-cols-3">
                    <div className="p-2 rounded-xl bg-card text-card-foreground col-span-1 md:col-span-1">
                        <NumericStats />
                    </div>
                    <div className="p-2 rounded-xl bg-card text-card-foreground col-span-1 md:col-span-2  border-none ring-0">
                        <LogChart />
                    </div>
                </div>
                <div className="flex-1 p-2 rounded-xl bg-card text-card-foreground" >
                    <LogTable />
                </div>
            </div>
        </div>
    );
}

export default Explorer