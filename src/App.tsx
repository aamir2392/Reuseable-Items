import Dropdown from "./components/Dropdown";
import ProductsTable from "./components/ProductsTable";

const App = () => {
  return (
    <div className="bg-gray-500  h-screen w-full">
      <div className="bg-white p-6 flex justify-between items-center">
        <h1>Products</h1>
        <Dropdown />
      </div>

      <div className="bg-white min-w-screen-lg p-6 mt-5">
        <ProductsTable />
      </div>
    </div>
  );
};

export default App;
