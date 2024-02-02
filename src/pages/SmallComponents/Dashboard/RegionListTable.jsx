import React from "react";
import { BiSearchAlt } from "react-icons/bi";
const RegionListTable = ({ regions }) => {
  return (
    <div className="overflow-x-auto rounded-[10px] bg-white w-full min-h-[710px] border-2 border-[#E6E6E6]">
      <div className="flex gap-3 items-center justify-end py-6 pr-6">
        <div className="relative">
          <BiSearchAlt
            size={16}
            className="absolute z-[2] top-[50%] translate-x-[50%] -translate-y-[50%] text-[#495057]"
          />
          <input
            type="text"
            placeholder="Search..."
            className="appearance-none border border-[#495057] border-opacity-20 w-[290px] py-1.5 pl-10 rounded-[25px] focus:outline-none text-[#495057] relative z-[1]"
          />
        </div>
        <div>
          <select className="border border-[#495057] border-opacity-20 w-[290px] py-1.5 px-2 rounded-[25px] focus:outline-none text-[#495057]">
            <option value="5">5</option>
            <option value="10" selected>
              10
            </option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
      <div className="w-full">
        <table className="w-full rounded-lg table-fixed">
          <thead className="bg-[#f8f9fa] font-semibold text-left">
            <tr>
              <th className="pl-10 w-[120px]">
                <input type="checkbox" className="h-4 w-4 py-2" />
              </th>
              <th className="py-2 w-[120px] font-[500]">Sl. No</th>
              <th className="py-2 font-[500]">Region</th>
            </tr>
          </thead>
          <tbody>
            {regions.map((region, index) => (
              <tr
                className="hover:bg-[#f8f9fa] border-2 border-b border-[#EFF2F7]"
                key={index}
              >
                <td className="pl-10">
                  <input type="checkbox" className="h-4 w-4 py-2" />
                </td>
                <td className="py-2">{index + 1}</td>
                <td className="py-2">{region.region}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegionListTable;
