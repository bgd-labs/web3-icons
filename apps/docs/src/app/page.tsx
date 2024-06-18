import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h1 className="mx-auto mb-6 text-center text-7xl font-bold leading-snug">
        Reliable{" "}
        <span className="mx-3‰ rounded-xl bg-gray-100 px-2 py-1 font-mono font-normal text-gray-600">
          {"<svg/>"}
        </span>{" "}
        web3 icons
      </h1>
      <div className="mx-auto mb-20 flex items-center justify-center gap-3">
        <Link
          href="/icons"
          className="text-md w-56 rounded border border-gray-900 bg-gray-900 py-3 text-center font-semibold text-white"
        >
          Explore icons
        </Link>
        <a
          href="https://github.com/bgd-labs/icons"
          className="text-md flex w-56 items-center justify-center gap-2 rounded border border-gray-300 py-3 font-semibold text-gray-800 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 text-gray-400"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
          View on GitHub
        </a>
      </div>
    </main>
  );
}
