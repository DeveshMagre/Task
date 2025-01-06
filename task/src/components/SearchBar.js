import { useState } from "react";
import { MapPin, Search, Calendar, User } from "lucide-react";

function SearchBar() {
  const [date, setDate] = useState(null);
  const [guestCount, setGuestCount] = useState(1);

  return (
    <div
      style={{
        marginTop: "-27px",
        opacity: "1",
        position: "relative",
      }}
      className="max-w-6xl mx-auto bg-white rounded-none md:rounded-full shadow-lg p-2 flex flex-col md:flex-row justify-around"
    >
      <div className="relative flex items-center p-2 w-full md:w-auto">
        <span className="text-gray-500">
          <MapPin />
        </span>
        <input
          type="text"
          placeholder="Where?"
          className="pl-10 p-2 rounded-md border border-none w-full"
        />
      </div>
      <span
        className="h-12 w-px bg-gray-300 mx-2 my-4 md:my-0 hidden md:block"
        style={{ transform: "scaleY(1)" }}
      ></span>

      <div className="flex items-center w-full md:w-auto p-2">
        <span className="flex justify-center items-center text-gray-500">
          <Calendar />
        </span>
        <select className="w-full p-2 rounded-md border border-none">
          <option value="today">Today</option>
          <option value="tomorrow">Tomorrow</option>
          <option value="next-week">Next Week</option>
        </select>
      </div>

      <span
        className="h-12 w-px bg-gray-300 mx-2 my-4 md:my-0 hidden md:block"
        style={{ transform: "scaleY(1)" }}
      ></span>
      <div className="flex items-center w-full md:w-auto p-2">
        <span className="flex justify-center items-center text-gray-500">
          <User />
        </span>
        <select className="w-full p-2 rounded-md border border-none">
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4+ Guests</option>
        </select>
      </div>
      <div className="flex items-center w-full md:w-auto p-2">
        <button className="h-10 w-10 bg-[#40CFC3] hover:bg-[#3BBEB2] text-white rounded-full flex justify-center items-center">
          <Search className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
