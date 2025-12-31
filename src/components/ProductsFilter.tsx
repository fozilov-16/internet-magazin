type Category = {
  id: number;
  categoryName: string;
};

type Props = {
  categories: Category[];
  selectedCategory: number | null;
  setSelectedCategory: (id: number | null) => void;
};

const ProductsFilter = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: Props) => {
  return (
    <div className="w-[260px] flex flex-col gap-6">
      <div>
        <div className="flex justify-between items-center font-semibold mb-3">
          Category
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <div
            onClick={() => setSelectedCategory(null)}
            className={`cursor-pointer ${
              selectedCategory === null ? "text-red-500" : ""
            }`}
          >
            All
          </div>

          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`cursor-pointer ${
                selectedCategory === cat.id ? "text-red-500" : ""
              }`}
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