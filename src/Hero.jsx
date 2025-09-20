import heroImage from "./assets/heroPicture.png"; 
import Navbar from "./Navbar";

export default function Hero() {

  const scrollToActions = () => {
    const actionsSection = document.getElementById("actions");
    if (actionsSection) {
      actionsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="px-4 mt-8">
      <div className="rounded-xl bg-[#E6F2FA] text-[#1A3B5D] shadow-lg hover:shadow-xl transition p-8 w-[95%] mx-auto  min-h-[80vh] flex flex-col">
        
        {/* Navbar at the top inside hero */}
        <div className="mb-10 bg-white">
          <Navbar />
        </div>

        {/* Content row */}
        <div className="flex flex-col md:flex-row items-center gap-12 ">
          
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold leading-snug">
              Fact Checker AI
              <br />
              <span className="text-blue-600">Uncover Truth. Expose Deception.</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Instantly verify news, images, and social media posts.
            </p>
            <div className="mt-6">
              <button
                onClick={scrollToActions}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Check Fact
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img
              src={heroImage}
              alt="Fact Checking"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
