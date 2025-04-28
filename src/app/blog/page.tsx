import Navigation from "@/components/Navigation";

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#2c2c2c]">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif mb-8">Blog</h1>
        <div className="grid gap-8">
          {/* Blog posts will be added here */}
          <p className="text-lg text-[#666]">Coming soon...</p>
        </div>
      </main>
    </div>
  );
}
