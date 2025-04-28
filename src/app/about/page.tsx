import Navigation from "@/components/Navigation";
import Image from "next/image";
import Footer from "@/components/Footer";

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
              src="/profile.png"
              alt="Justin Herrera"
              width={256}
              height={256}
              className="rounded-full"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Hi, I&apos;m Justin! I&apos;m a software engineer with a deep
              passion for tech and faith. I&apos;ve spent years building tools
              that unite people and solve real-world problems. Outside of tech,
              I&apos;m actively involved in Christian ministry, always looking
              for ways to combine my work with my faith, whether it&apos;s
              through prayer initiatives, tech for missions, or empowering
              others. When I&apos;m not coding, you&apos;ll find me
              experimenting with coffee brewing, training for marathons, or
              reflecting on life&apos;s big questions. I believe in
              purpose-driven work and am always exploring how tech can be a
              force for good.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              This is a place where I share my thoughts, experiences, and
              projects. Feel free to explore and connect with me through the
              links below.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
