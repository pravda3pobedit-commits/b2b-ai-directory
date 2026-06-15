export default function OpenClawPreviewTestPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
        OpenClaw preview smoke test
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-950">
        Preview branch is working
      </h1>
      <p className="mt-4 text-lg leading-8 text-gray-700">
        This page exists only on the temporary preview branch. It should not be
        merged into production.
      </p>
    </main>
  );
}
