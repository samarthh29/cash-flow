export const Appbar = ({ name }) => {
  return (
    <div className="shadow h-16 flex justify-between items-center">
      <div className="flex flex-col justify-center text-xl font-bold h-full ml-4">
        CashFlow
      </div>
      <div className="flex items-center">
        <div className="h-full mr-6 font-bold">Hello {name}!</div>
      </div>
    </div>
  );
};
