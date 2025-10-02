export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <div className="flex-grow lg:overflow-y-auto">{children}</div>
    </div>
  );
}