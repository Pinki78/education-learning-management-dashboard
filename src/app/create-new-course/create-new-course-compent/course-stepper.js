

const CourseStepper = ({ step = 1 })  => {
    const steps = ["Basic", "Curriculum", "Media", "Price", "Publish"];
  return (
    <>
         <div className="flex items-center justify-between mb-8">
      {steps.map((label, index) => {
        const isActive = index + 1 === step;
        return (
          <div key={label} className="flex-1 text-center">
            <div
              className={`w-6 h-6 mx-auto rounded-full ${
                isActive ? "bg-red-500" : "bg-gray-300"
              }`}
            />
            <p
              className={`text-xs mt-2 ${
                isActive ? "text-red-500" : "text-gray-400"
              }`}
            >
              {label.toUpperCase()}
            </p>
          </div>
        );
      })}
    </div>
    </>
  )
}



export default CourseStepper
