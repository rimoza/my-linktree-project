import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin, FaEdge } from "react-icons/fa";

const links = [
  { url: "https://twitter.com/rimoza_10", name: 'Twitter', icon: <FaTwitter /> },
  { url: "https://github.com/rimoza", name: 'Github', icon: <FaGithub /> },
  { url: "https://linkedin.com/rimoza", name: 'Linkedin', icon: <FaLinkedin /> },
  { url: "https://rimoza.vercel.app", name: 'Website', icon: <FaEdge /> },
];

export default function Home() {
  return (
    <div className="min-h-screen max-h-screen bg-black flex justify-center">
      <div className="w-full max-w-md max-h-screen bg-white md:m-10 shadow-sm rounded-lg">
      <header className="shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">Linktree</h1>
          <Image src="/p.jfif" alt="Profile Image" width={300} height={300} className="w-16 h-16 rounded-full" />
        </div>
      </header>
      <main className="p-10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-1 gap-4 py-5">
            {links.map((link) => (
              <li key={link.url}>
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-100 shadow rounded-lg p-4 flex items-center justify-center space-x-5 text-blue-500 hover:text-gray-700"
                >
                  <>
                    <span className="text-4xl flex justify-center items-center">{link.icon}</span>
                    <span className="uppercase">{link.name}</span>
                  </>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      </div>
    </div>
  );
}
