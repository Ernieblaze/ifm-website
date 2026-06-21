export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
        Contact
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
        Get in Touch
      </h1>
      <p className="mt-6 text-neutral-600">
        Have a question or want to connect with IFM? Reach out below.
      </p>

      <form className="mt-10 space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-neutral-900"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="mt-2 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm text-neutral-900 focus:border-neutral-500 focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral-900"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-2 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm text-neutral-900 focus:border-neutral-500 focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-neutral-900"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="mt-2 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm text-neutral-900 focus:border-neutral-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="rounded-md bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700"
        >
          Send Message
        </button>
      </form>

      <div className="mt-12 border-t border-neutral-200 pt-8">
        <p className="text-sm font-semibold text-neutral-900">
          Find us on social media
        </p>
        <ul className="mt-3 flex gap-6 text-sm text-neutral-600">
          <li>Facebook</li>
          <li>Instagram</li>
          <li>YouTube</li>
        </ul>
      </div>
    </section>
  );
}
