interface LoaderProps {
  isLoading: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  if (!isLoading) return null;
  return (
    <div className="flex justify-center items-center">
      <div className="loader"></div>
    </div>
  );
};