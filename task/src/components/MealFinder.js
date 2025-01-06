import Meal from '../Images/meal.png';


function MealFinder() {
  return (
    <div className="w-full min-h-[300px] bg-[#40CFC3] relative overflow-hidden mt-10">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-48 h-48 rounded-full bg-[#5CD6CC] opacity-50 -top-12 right-0 sm:w-32 sm:h-32" />
        <div className="absolute w-64 h-64 rounded-full bg-[#5CD6CC] opacity-50 -bottom-20 left-0 sm:w-48 sm:h-48" />
        <div className="absolute w-32 h-32 rounded-full bg-[#5CD6CC] opacity-50 top-20 left-12 sm:w-24 sm:h-24" />
        <div className="absolute w-32 h-32 rounded-full bg-[#5CD6CC] opacity-50 top-60 right-60 sm:w-24 sm:h-24" />
      </div>
      <div className="relative z-10 container  mx-auto px-4 py-12 md:px-0 flex flex-col items-center justify-center">
        <h1 className="text-center text-5xl font-bold text-gray-800 mb-8  sm:mb-4">
          Find a homely meal nearby
        </h1>
        <img
          className="max-w-full h-auto min-w-[700px] sm:min-w-[500px] md:min-w-[700px] lg:min-w-[900px]"
          src={Meal}
          alt="Meal Finder"
        />
      </div>
    </div>

  );
}

export default MealFinder;
