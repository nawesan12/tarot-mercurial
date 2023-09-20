import Link from "next/link";

export default function MainMenu() {
  return (
    <aside className="lg:col-span-2 lg:row-span-3 p-4 outline outline-violet-700">
      <ul className="space-y-4 text-2xl">
        <li className="hover:underline">
          <Link href="/">Inicio</Link>
        </li>
        <li className="hover:underline">
          <Link href="/tarot">Cartas</Link>
        </li>
        <li className="hover:underline">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="hover:underline">
          <Link href="/aprender">Quiero aprender</Link>
        </li>
        <li className="hover:underline">
          <Link href="/astrologia">Astrologia</Link>
        </li>
        <li className="hover:underline">
          <Link href="/consultar">Consultar al tarot</Link>
        </li>
      </ul>
    </aside>
  );
}
