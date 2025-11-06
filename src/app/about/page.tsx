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
              Lately, I’ve been:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-600 dark:text-gray-300 leading-relaxed ml-4">
              <li>
                Building tools that help Christians live with purpose and rhythm
              </li>
              <li>
                Helping mission-minded teams think through tech and product
                strategy
              </li>
              <li>
                Exploring how the gospel speaks into seasons of doubt, change,
                and waiting
              </li>
            </ul>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Outside of work, I’m training for a marathon and experimenting
              with Californian dishes (secretly a J kenji wannabe). I love long walks, deep talks, helping
              friends name their gifts, and crafting small moments of delight —
              whether in an app or over dinner.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              At the end of the day, I care less about what I’m building and
              more about who I’m becoming. Still learning that one — one mile,
              one meal, and one prayer at a time.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
