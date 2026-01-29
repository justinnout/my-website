import Navigation from "@/components/Navigation";
import Image from "next/image";
import Footer from "@/components/Footer";
import profileImage from "../../../public/profile.png";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Navigation />
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-sans font-bold mb-8 tracking-tight">
            About Me
          </h1>
          <div className="flex justify-center my-12">
            <Image
              src={profileImage}
              alt="Justin Herrera"
              width={256}
              height={256}
              className="grayscale"
              priority
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Hi, I&apos;m Justin.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I work at the intersection of faith, technology, and community—building tools, mentoring builders, and helping teams slow down and move with intention.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I&apos;m interested in formation: how seasons of growth, doubt, and waiting shape us, and how the things we build shape us in return.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Outside of work, I&apos;m usually running miles, cooking, or gathering friends around a table.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              More than what I&apos;m building, I care about who I&apos;m becoming - one mile, one meal, and one prayer at a time.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
