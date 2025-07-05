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
              Hi, I&apos;m Justin — a builder and a believer.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I&apos;ve spent the past few years working at the intersection of
              faith, technology, and community. Whether I&apos;m mentoring
              entrepreneurs and builders, or contributing to digital missions,
              I&apos;m driven by a desire to see people flourish — spiritually,
              relationally, and practically.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Right now, I&apos;m focused on a few things that are close to my
              heart:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-600 dark:text-gray-300 leading-relaxed ml-4">
              <li>
                Building tools that help Christians live with intentionality
              </li>
              <li>
                Supporting mission-minded teams with product and technical
                guidance
              </li>
              <li>
                Exploring how the gospel speaks into various aspects of life —
                especially during seasons of doubt, transition, or waiting
              </li>
            </ul>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Outside of work, I&apos;m training for a half-marathon,
              experimenting with Californian dishes, and learning how to rest
              well. I love deep conversations, helping friends name what
              they&apos;re good at, and crafting little moments of delight —
              whether in apps or homemade meals.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Above all, I believe that who we&apos;re becoming matters more
              than what we&apos;re building — and I&apos;m trying to live that
              out a day at a time, by God&apos;s grace.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
