import React from "react";
import { ContentTotalData } from "../data-home/ContentTotalData";
import { ListGroup, ListGroupItem, Card } from "flowbite-react";
import { GoPlus } from "react-icons/go";
import ChartBx from "@/components/chart-bx/chart-bx";



const ContentTotal = (props) => {

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Sales",
      data: [12, 19, 8, 15, 10, 17],
      borderColor: "#3b9e62",
      backgroundColor: "rgba(55, 138, 221, 0)",
     borderWidth: 2,
        tension: 0.4, // Smooth curve
        fill: true, // Fills the area below the line
        pointRadius: 0, // Removes points
    },
  ],
};

// ✅ options prop
 // Options for the chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: true,
      },
    }, // <-- This closing brace was missing
    scales: {
      x: { display: false }, // Hide x-axis
      y: { display: false }, // Hide y-axis
    },
    plugins: {
      legend: { display: false }, // Hide legend
      tooltip: { enabled: false }, // Hide tooltips
    },
  };

  return (
    <>
      <ul
        className={`grid grid-cols-12 gap-4  bg-transparent border-transparent`}
      >
        {ContentTotalData.map((item) => {
          return (
            <li
              key={item.id}
              id={item.id}
              className={` xs:col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3 xl:col-span-3  px-0  w-[100%] &_a]:hidden`}
            >
              <div
                className={`rounded-lg border border-gray-200 shadow-md 
                    dark:border-gray-700 dark:bg-gray-800  p-0 relative 
                    transition-all duration-300 ease-in-out
                     hover:-translate-y-1 hover:scale-[1.02] 
                     hover:shadow-xl  w-[100%] `}
              >
              <div className={`card-body p-0 h-[75px] absolute bottom-0 left-0 right-0 opacity-20`}>
                    <ChartBx type="Line" data={data} options={options}  />
                </div>
                <h5 className={`text-2xl font-semibold tracking-tight 
                text-gray-900 dark:text-white flex items-baseline-last justify-left `}>
                  <span
                    className={` relative w-[54px] h-[73px] flex items-center justify-center 
                        text-white text-[32px] 
                        bg-gradient-to-b from-[#3b9e62] to-[#007f32]
                        rounded-t-[20px] rounded-b-[60px]
                        before:content-[''] 
                    before:absolute before:top-0 before:right-0
                    before:w-[40px] before:h-[40px]
                    before:bg-black/20
                    before:clip-path-triangle
                `}
                 suppressHydrationWarning >
                  
                    {item.iconName}
                  </span>
                  <span className="p-6 pt-0 font-(family-name:--font-lato)"> {item.titel}</span>
                </h5>
                {item.ToletPrice ? (
                  <p className={`p-6 pt-0 pb-6 font-(family-name:--font-lato) font-bold text-gray-700 dark:text-gray-400 text-xl flex
                   justify-left items-end`}>
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                    }).format(item.ToletPrice)}
                  </p>
                ) : (
                  <p
                    className={`p-6 pt-0 pb-6 font-bold text-gray-700 dark:text-gray-400 text-xl flex
                   justify-left items-end`}
                  >
                    <GoPlus /> <span>{item.ToletNo}</span>
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContentTotal;
