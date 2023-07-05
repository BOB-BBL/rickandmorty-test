interface SectionProps {
  children: React.ReactNode;
  title?: string;
  [x: string]: any;
}

const Section: React.FC<SectionProps> = ({ children, ...props }) => {
  return (
    <section
      {...props}
      className="flex flex-col items-center justify-between w-full outline outline-2 outline-white p-4 rounded-md"
    >
      <h3 className="text-2xl font-bold text-left w-full text-blue-500">
        {props.title}
      </h3>
      {children}
    </section>
  );
};

export default Section;
