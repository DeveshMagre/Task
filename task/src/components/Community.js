import Lady from "../Images/Lady.png";
import bag from "../Images/bag.png";
import smile from "../Images/smile.png";
import chef from "../Images/Chef.png";

function Community() {
  return (
    <div className="bg-[#E0F7F7] mx-4 sm:mx-8 md:mx-16 lg:mx-32 pt-12 mt-12 px-6 lg:px-24 rounded-3xl">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-6 lg:space-y-0">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-center lg:text-left w-full lg:w-[450px]">
          Join 2 million <span className="text-teal-600">MealAround</span> community!
        </h2>
        <p className="text-gray-600 text-center lg:text-left max-w-md mx-auto lg:mx-0">
          Voluptate magna nulla nulla duis voluptate elit dolore commodo reprehenderit est culpa et veniam fugiat cillum.
          Non minim eu et enim fugiat ipsum.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 mt-8">
        <div className="bg-white rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl shadow-lg p-6 w-full lg:w-72">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-teal-600 mr-10">23,00,000</span>
            <div className="w-8 h-8 bg-[#E0F7F7] justify-center flex items-center rounded-lg">
              <img src={smile} alt="smile" />
            </div>
          </div>
          <p className="text-sm text-gray-600">Hosts sharing meal</p>
        </div>
        <div className="w-full lg:w-auto flex justify-center">
          <img
            src={Lady}
            alt="Chef with cooking utensils"
            className="max-h-[90%] w-full lg:w-auto object-contain"
          />
        </div>

        <div className="w-full lg:w-[400px] mt-6 lg:mt-0 flex flex-col items-start lg:items-center lg:justify-center">
          <div>
            <div className="bg-[#CDFF63] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-none rounded-full py-2 px-4 flex items-center gap-2 whitespace-nowrap overflow-hidden">
              <img src={chef} alt="chef" />
              <span className="text-sm font-medium truncate">+21m Guests Enjoying Homely Meal</span>
            </div>

            <div className="mt-6 lg:mt-20">
              <div className="bg-teal-400 text-white rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-none py-2 px-4 flex items-center gap-2 whitespace-nowrap overflow-hidden w-2/3 sm:w-3/4 lg:w-full ml-0 sm:ml-8 lg:ml-24">
                <img src={bag} alt="bag" />
                <span className="text-sm font-medium truncate">+525k Earning Everyday</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
