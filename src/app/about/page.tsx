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
              I&apos;ve spent the past few years helping small teams ship
              software that (hopefully) makes life a little easier—first as a
              startup CTO and now as a wandering engineer-mentor. These days
              I&apos;m still figuring things out: how healthy communities form,
              and where faith and tech can quietly work together for good.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Outside the terminal, you&apos;ll catch me tweaking a pour-over
              recipe, jogging (slowly) toward a half-marathon, or sketching
              ideas for tools that help churches pray, translate, or simply stay
              connected.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My north star: love God, love others, and ship meaningful stuff.
              If that resonates, let&apos;s connect—I&apos;d love to swap
              stories, share a freshly brewed cup, and see where collaboration
              (and a lot of grace) might lead.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
