import Link from "next/link";

export const PageCtas = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <Link
        href="/contact"
        className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold bg-teal-700 text-white hover:bg-teal-600 transition"
      >
        Hire Me
      </Link>
      <Link
        href="/projects"
        className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold border border-teal-200 bg-teal-50 text-teal-800 hover:bg-teal-100 transition"
      >
        View Projects
      </Link>
      <Link
        href="/Basir_Khan_Resume.pdf"
        target="_blank"
        className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-100 transition"
      >
        Download Resume
      </Link>
    </div>
  );
};
