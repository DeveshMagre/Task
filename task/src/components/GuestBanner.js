 function GuestBanner() {
    return (
      <div className="relative bg-[#7FE6E6] min-h-[300px] flex items-center justify-center px-4 py-16 overflow-hidden">
        <div 
          className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-[#6CD9D9] opacity-50"
          style={{
            filter: 'blur(2px)'
          }}
        />
        <div className="relative max-w-2xl mx-auto text-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Become a Guest, Find Delicous Meals Near by
          </h1>
    
          <p className="text-[#2A4747] text-base sm:text-lg max-w-xl mx-auto mb-8">
            Qui ut exercitation officia proident enim non tempor tempor ipsum ex nulla ea adipisicing sit consequat enim elit cupidatat origin
          </p>

          <button 
            className="inline-flex items-center justify-center bg-[#CDFF63] hover:bg-[#BDEE53] text-gray-800 px-8 py-2.5 rounded-full font-medium transition-all duration-200 hover:shadow-lg"
          >
            Contact us
          </button>
        </div>
      </div>
    )
  }

  export default GuestBanner;
  
  