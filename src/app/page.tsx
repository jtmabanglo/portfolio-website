import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="flex flex-row justify-between bg-gray-50">
        <h1 className="font-sans p-10">JARED MABANGLO</h1>
        <nav className="flex flex-row p-10">
          <h1 className="px-5">About</h1>
          <h1 className="px-5">Resume</h1>
          <h1 className="px-5">Projects</h1>
          <h1 className="px-5">Contact</h1>
        </nav>
      </header>
      <section id="hero">
        <p>Hero Section</p>
      </section>
      <section id="hero">
        <p>Hero Section</p>
      </section>
      <section id="hero">
        <p>Hero Section</p>
      </section>
      <section id="hero">
        <p>Hero Section</p>
      </section>
      <section id="hero">
        <p>Hero Section</p>
      </section>
    </div>
  );
}
