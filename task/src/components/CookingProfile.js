import { useState } from 'react';
import women from '../Images/Women.png';
import { ChevronRight } from 'lucide-react';

function CookingProfile() {
  const [activeDot, setActiveDot] = useState(0);
  
  const handleArrowClick = () => {
    setActiveDot((prevDot) => (prevDot === 4 ? 0 : prevDot + 1));
  };

  return (
    <div className="mx-auto p-4 md:p-8 lg:p-32">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 space-y-6 mr-20">
          <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left">
            Shaileja is cooking Biryani Today
          </h1>

          <p className="text-gray-600 text-center md:text-left">
            "Aliqua cupidatat id duis irure sunt exercitation voluptate cillum. Consectetur ad ex
            do in reprehenderit est dolor elit et exercitation do ad. Consectetur ad ex do in
            reprehenderit est dolor elit et exercitation"
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 mt-6">
            <button className="bg-[#CDFF63] hover:bg-[#BDEE53] text-black px-6 py-2 rounded-full text-sm font-medium transition-colors h-14 w-full md:w-auto">
              Join! Become a guest
            </button>

            <div className="p-4">
              <div className="flex items-start justify-between flex-col">
                <h3 className="font-semibold text-lg">Shaileja</h3>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-500 text-sm mt-1 text-center md:text-left">Viman nagar, Pune</p>
            </div>
          </div>

          <div className="flex gap-2 mt-8 justify-center items-center md:justify-start">
            {[0, 1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeDot ? 'w-8 bg-teal-500' : 'w-2 bg-gray-200'
                }`}
              />
            ))}
            <ChevronRight
              onClick={handleArrowClick}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="w-full md:w-52 h-64">
          <img
            src={women}
            alt="Chef preparing food"
            className="w-full h-full object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default CookingProfile;
