interface PageHeaderProps {
  title: string;
}

export const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold text-center">{title}</h1>
    </header>
  );
};
