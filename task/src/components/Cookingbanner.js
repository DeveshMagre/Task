
import Cooking from '../Images/cooking.png';
function CookingBanner() {
    return (
      <div className="bg-[#001414] w-full py-12 px-32">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Illustration */}
          <div className="w-48 md:w-64">
            <img
              src={Cooking}
              alt="Chef cooking illustration"
              className="w-full h-auto"
            />
          </div>
  
          {/* Content */}
          <div className="flex-1 text-center md:text-left max-w-xl">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Cooking Special Today!
            </h1>
            <p className="text-white/90 text-xl md:text-2xl mb-8">
              Host a meal! Share a Happiness!!
            </p>
            <button className="bg-[#CDFF63] hover:bg-[#BDEE53] text-[#001414] px-6 py-3 rounded-full font-medium transition-colors">
              Host a Meal on MealAround
            </button>
          </div>
        </div>
      </div>
    )
  }

  export default CookingBanner;
  