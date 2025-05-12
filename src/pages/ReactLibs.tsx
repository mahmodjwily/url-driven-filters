import libs from "@/service/react-libs.json";
import { Input } from "@/components/ui/input";
import { useFilter } from "@/hooks/useFilter";
import { CardItem } from "@/components/CardItem";

export const ReactLibs = () => {
  const { filteredData, value, handleSearch } = useFilter(libs);

  return (
    <main className="w-screen h-screen overflow-x-hidden">
      <div className="w-full max-w-4xl m-auto h-full p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-5">
          React Libraries
        </h1>
        <div className="mb-5">
          <Input
            type="text"
            placeholder="Search libraries..."
            value={value}
            onChange={handleSearch}
            className="w-full p-3 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        {!!filteredData.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map((item) => (
              <CardItem key={item.title} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-center w-full py-5 text-gray-500 text-xl">
            No results found
          </p>
        )}
      </div>
    </main>
  );
};
