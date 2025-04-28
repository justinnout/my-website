import Navigation from "@/components/Navigation";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-sans font-bold mb-8 tracking-tight">
            About Me
          </h1>
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Welcome to my personal website. I'm a developer passionate about
              creating meaningful experiences through code.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              This is a place where I share my thoughts, experiences, and
              projects. Feel free to explore and connect with me through the
              links below.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-sans font-semibold mb-4">Skills</h2>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Web Development</li>
                  <li>UI/UX Design</li>
                  <li>Problem Solving</li>
                  <li>Team Collaboration</li>
                </ul>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-sans font-semibold mb-4">
                  Interests
                </h2>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Technology</li>
                  <li>Design</li>
                  <li>Innovation</li>
                  <li>Learning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
