const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-between p-24 bg-black shadow">
      <div>
        Project by{" "}
        <a
          href="https://github.com/Azhtian"
          className="text-blue-500 hover:text-blue-600"
        >
          Azhtian
        </a>
      </div>
    </footer>
  );
};

export default Footer;
