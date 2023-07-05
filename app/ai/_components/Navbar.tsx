import Link from "./atoms/Link";

const Navbar: React.FC = () => {
  return (
    <nav className="h-[var(--nav-h)] sticky top-0 z-50 flex items-center justify-between px-24 bg-slate-700 shadow">
      <div className="flex items-center">
        <Link href="/" className="text-2xl">
          Home
        </Link>
      </div>
      <div className="flex items-center space-x-8">
        <Link href="/ai/create">Create</Link>
        <Link href="/ai/submit">Submit</Link>
        <Link href="/ai/learn">Learn to prompt</Link>
      </div>
    </nav>
  );
};

export default Navbar;
