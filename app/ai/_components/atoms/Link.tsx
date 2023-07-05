import NextLink, { LinkProps } from "next/link";

interface ILink extends LinkProps {
  className?: string;
  children?: React.ReactNode;
}

const Link: React.FC<ILink> = ({ href, className, children }) => {
  return (
    <NextLink
      href={href}
      className={`text-xl font-bold text-blue-500 hover:text-blue-600 ${className}`}
    >
      {children}
    </NextLink>
  );
};

export default Link;
