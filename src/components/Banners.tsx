export default function InstagramBanner() {
  return (
    <article className="bg-indigo-600 px-4 py-3 text-white fixed w-screen">
      <p className="text-center text-sm font-medium ">
        Lecturas personalizadas en &nbsp;
        <a
          href="https://instagram.com/tarot.mercurial"
          target="_blank"
          className="inline-flex gap-2 underline"
        >
          @tarot.mercurial
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M16.5 7.5l0 .01" />
          </svg>
        </a>
      </p>
    </article>
  );
}
