import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/notion_face.png"
              alt="Justin Herrera"
              width={40}
              height={40}
              className="rounded-full"
            />
          </Link>
          <div className="flex space-x-8">
            <Link
              href="https://blog.justinherrera.com"
              className="text-[#2c2c2c] hover:text-gray-600 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-[#2c2c2c] hover:text-gray-600 transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
