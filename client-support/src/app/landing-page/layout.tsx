export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <div className="flex-grow md:overflow-y-auto">{children}</div>
    </div>
  );
}