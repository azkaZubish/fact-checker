import feature1 from "./assets/feature1.png"
import feature2 from "./assets/feature2.png"
import feature3 from "./assets/feature3.png"

export default function FeatureSection() {
  return (
    <section className="bg-white py-12">
      <div className="rounded-xl px-6 mt-4 bg-white text-[#1A3B5D] shadow-lg hover:shadow-xl transition p-10 w-[93%] mx-auto min-h-[75vh] flex flex-col">
        
        {/* Centered Heading */}
        <h3 className="text-4xl font-bold mb-12 text-center">New Features</h3>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Feature 1 */}
          <div className="p-8 bg-[#E6F0FA] rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <img src={feature1} alt="Protection" className="w-32 h-32 mb-6" />
            <h4 className="text-xl font-semibold text-blue-900">Protection from Misinformation</h4>
          </div>

          {/* Feature 2 */}
          <div className="p-8 bg-[#E6F0FA] rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <img src={feature2} alt="Analysis" className="w-32 h-32 mb-6" />
            <h4 className="text-xl font-semibold text-blue-900">Balanced Analysis</h4>
          </div>

          {/* Feature 3 */}
          <div className="p-8 bg-[#E6F0FA] rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <img src={feature3} alt="Verified" className="w-32 h-32 mb-6" />
            <h4 className="text-xl font-semibold text-blue-900">Verified Facts</h4>
          </div>

        </div>
      </div>
    </section>
  );
}

