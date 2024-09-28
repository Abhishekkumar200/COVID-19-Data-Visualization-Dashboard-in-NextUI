import DashboardCard from '../../components/DashboardCard';
import data from '../../data/data';
import { ClipboardPlus, HeartPulse, Skull } from 'lucide-react';
import DashLineChart from '../../components/charts/DashLineChart';

//This file includes components for home page and logic for calculating total cases from data.

export default function Home() {
  let totalCase = 0;
  let totalRecovery = 0;
  let totalDeath = 0;

  for (let i = 0; i < data.length; i++) {
    totalCase += data[i].total_case;
    totalRecovery += data[i].recovered;
    totalDeath += data[i].death;
  }
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard value={totalCase} title='Total Cases' icon={<ClipboardPlus size={72} />} />
        <DashboardCard value={totalRecovery} title='Total Recoveries' icon={<HeartPulse size={72} />} />
        <DashboardCard value={totalDeath} title='Total Deaths' icon={<Skull size={72} />} />
      </div>

      <DashLineChart />
    </>
  );
}
