interface Item {
  title: string;
  description: string;
}

interface ICardItem {
  item: Item;
}

export const CardItem = ({ item }: ICardItem) => {
  return (
    <div className="bg-white border border-slate-100 shadow-lg rounded-lg overflow-hidden">
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
        <p className="text-gray-600 mt-2">{item.description}</p>
      </div>
    </div>
  );
};
