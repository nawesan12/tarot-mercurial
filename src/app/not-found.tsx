import Link from "next/link";

export default function Custom404() {
  return (
    <section>
      <div className="flex items-center justify-center flex-1">
        <div className="max-w-xl px-4 py-8 mx-auto text-center">
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Pagina no encontrada
          </h1>

          <Link
            href="/"
            className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            Volver
          </Link>
        </div>
      </div>
    </section>
  );
}
