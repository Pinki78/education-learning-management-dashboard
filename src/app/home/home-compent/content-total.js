import React from "react";
import { ContentTotalData } from "../data-home/ContentTotalData";
import { ListGroup, ListGroupItem, Card } from "flowbite-react";
const ContentTotal = (props) => {
  return (
    <>
      <ListGroup className={`grid grid-cols-12 gap-2`}>
        {ContentTotalData.map((item) => {
          return (
            <>
              <ListGroupItem key={item.id} className={`col-span-3 px-0  w-[100%]`}>
                <Card className=" w-[100%]">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.iconName} <span> {item.titel}</span>
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {item.ToletNo}
                  </p>
                </Card>
              </ListGroupItem>
            </>
          );
        })}
      </ListGroup>
    </>
  );
};

export default ContentTotal;
