import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-neutral-100">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Iwhuruohna First Movement
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Uniting, preserving, and projecting Iwhuruohna identity — for
            generations to come.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-neutral-600">
            A digital home for the Iwhuruohna (Ikwerre) people of Rivers
            State, Nigeria — wherever they are in the world.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="rounded-md bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700"
            >
              Learn About the Movement
            </Link>
            <Link
              href="/history"
              className="rounded-md border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:border-neutral-400"
            >
              Explore Our History
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-neutral-900">Who We Are</h2>
        <p className="mt-4 max-w-3xl text-neutral-600">
          IFM is a socio-cultural and nationalist movement for the Iwhuruohna
          people — built to unite our community, preserve our history and
          language, inform members of movement updates, amplify the voices of
          our people, and project our identity to the world.
        </p>
      </section>
    </>
  );
}
