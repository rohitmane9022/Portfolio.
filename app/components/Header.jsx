import Link from "next/link";


export default function Header() {
  return (
    <header>
      <nav className="py-4 sm:py-8 flex flex-row justify-between items-center mx-[0.5rem] sm:mx-0">
        <h1 className="sm:hidden">Rohit</h1>
      <ul className="hidden sm:flex text-xl">
        <li><a href="#" className="hover:text-white cursor-pointer rounded-md px-4 py-[4.8px] transition-all duration-150 hover:bg-zinc-800 font-normal	">Home</a></li>
        <li><a href="#projects" className="hover:text-white cursor-pointer rounded-md px-4 py-[4.8px] transition-all duration-150 hover:bg-zinc-800 font-normal	">Projects</a></li>
        <li><a href="#skills" className="hover:text-white cursor-pointer rounded-md px-4 py-[4.8px] transition-all duration-150 hover:bg-zinc-800 font-normal	">Skills</a></li>
        <li><a href="#contact" className="hover:text-white cursor-pointer rounded-md px-4 py-[4.8px] transition-all duration-150 hover:bg-zinc-800 font-normal	">Contact</a> </li>
      </ul>
      <Link href="https://github.com/rohitmane9022" target="_black" className="rounded-lg bg-zinc-800 p-2 text-2xl ring-zinc-500 hover:ring-2 transition-all duration-200">
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="bg-zinc-800"><path d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822 0 5.277-3.002 6.824-5.823 7.279.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 0 1-.728-.728v-3.73a2.497 2.497 0 0 0-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187 0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 0 0 .09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 0 0-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185 0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 0 1-.728.728.718.718 0 0 1-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092-.455-.546-.819-1.001-1.274-1.092-.09-.091-.364-.455-.273-.819.091-.364.455-.637.82-.455.91.182 1.455.91 2 1.547.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093-2.73-.546-5.914-2.093-5.914-7.279 0-1.456.455-2.73 1.365-3.822-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 0 1 6.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"></path></svg>
      
      </Link>
      </nav>
    </header>
  )
}
