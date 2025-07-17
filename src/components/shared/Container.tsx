interface ContainerProps {
  children: React.ReactNode;
  classname?: string;
}

export const Container = ({ children, classname = "" }: ContainerProps) => {
  return (
    <div
      className={`mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 ${classname}`}
    >
      {children}
    </div>
  );
};
