import { Button, Card, } from "flowbite-react";

const WelcomeUser = (props) => {
  return (
    <>
      <Card className={`max-w mt-[10px] bg-[#3b9e6247]`}>
        <div className={`grid grid-cols-12 `}>
          <div className={`col-span-8 `}>
            <h2 className="text-[34px] font-bold tracking-tight text-gray-900 dark:text-white">
              Welcome back, <strong>John!</strong>
            </h2>
            <p className="font-normal text-gray-700 dark:text-gray-400">
             Your students complated 80% of the tasks
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
             Progress is very good!
            </p>
          </div>
          <div className={`col-span-4 `}>
                <img src="/images/custom-1.svg" alt="..." className={`w-[70%] float-right`} />
          </div>
        </div>
      </Card>
    </>
  );
};

export default WelcomeUser;
