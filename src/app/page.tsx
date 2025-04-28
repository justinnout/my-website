import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col justify-between">
      <Navigation />
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-32">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Justin Herrera
          </h1>
          <p className="text-xl text-gray-600 mb-12 font-light tracking-wide">
            just passing by
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
