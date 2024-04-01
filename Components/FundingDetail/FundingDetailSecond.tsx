import GridComponent from '@/Components/FundingDetail/GridComponent';

export default function FundingDetaillSecond() { 
  return (
    <div className="flex w-full">
      <div className="w-3/4 p-4">
        <GridComponent />
      </div>
      <div className="w-1/4 p-4 bg-blue-500"></div>
    </div>
  );
}