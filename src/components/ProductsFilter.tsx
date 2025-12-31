type Props = {
  categories: Category[];
  selectedCategory: number | null;
  setSelectedCategory: (id: number | null) => void;
};

const ProductsFilter = ({ categories, selectedCategory, setSelectedCategory }: Props) => {
  return (
    <div className="w-[260px] flex flex-col gap-6">
      <div>
        <div className="flex justify-between items-center font-semibold mb-3">Category</div>
        <div className="flex flex-col gap-2 text-sm">
          <div
            className={`cursor-pointer ${selectedCategory === null ? "text-red-500" : ""}`}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </div>
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`text-sm cursor-pointer ${selectedCategory === cat.id ? "text-red-500" : ""}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.categoryName}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsFilter;
