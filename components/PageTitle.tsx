export default function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl">
      {children}
    </h1>
  );
}
