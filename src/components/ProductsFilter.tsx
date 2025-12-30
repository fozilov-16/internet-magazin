import { Checkbox, Radio, Slider, InputNumber, Button } from "antd";
// import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";

const ProductsFilter = () => {
  const [price, setPrice] = useState<[number, number]>([0, 999999]);

  return (
    <div className="w-[260px] flex flex-col gap-6">
        
      <div>
        <div className="flex justify-between items-center font-semibold mb-3">
          Category
           {/* <DownOutlined /> */}
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <span className="text-red-500 cursor-pointer">All products</span>
          <span>Electronics</span>
          <span>Home & Lifestyle</span>
          <span>Medicine</span>
          <span>Sports & Outdoor</span>
          <span className="text-red-500 cursor-pointer mt-2">See all</span>
        </div>
      </div>

      <hr />

      <div>
        <div className="flex justify-between items-center font-semibold mb-3">
          Brands
           {/* <DownOutlined /> */}
        </div>

        <Checkbox.Group className="flex flex-col gap-2">
          <Checkbox value="Samsung">Samsung</Checkbox>
          <Checkbox value="Apple">Apple</Checkbox>
          <Checkbox value="Huawei">Huawei</Checkbox>
          <Checkbox value="Pocco">Pocco</Checkbox>
          <Checkbox value="Lenovo">Lenovo</Checkbox>
        </Checkbox.Group>

        <div className="text-red-500 cursor-pointer mt-2 text-sm">
          See all
        </div>
      </div>

      <hr />

      <div>
        <div className="flex justify-between items-center font-semibold mb-3">
          Features
           {/* <DownOutlined /> */}
        </div>

        <Checkbox.Group className="flex flex-col gap-2">
          <Checkbox value="Metallic">Metallic</Checkbox>
          <Checkbox value="Plastic">Plastic cover</Checkbox>
          <Checkbox value="8GB">8GB Ram</Checkbox>
          <Checkbox value="Power">Super power</Checkbox>
          <Checkbox value="Memory">Large Memory</Checkbox>
        </Checkbox.Group>

        <div className="text-red-500 cursor-pointer mt-2 text-sm">
          See all
        </div>
      </div>

      <hr />

      <div>
        <div className="flex justify-between items-center font-semibold mb-3">
          Price range
           {/* <DownOutlined /> */}
        </div>

        <Slider
          range
          min={0}
          max={999999}
          value={price}
          onChange={(value) => setPrice(value as [number, number])}
        />

        <div className="flex gap-2 mb-3">
          <InputNumber
            min={0}
            value={price[0]}
            onChange={(value) =>
              setPrice([value || 0, price[1]])
            }
            className="w-full"
            placeholder="Min"
          />
          <InputNumber
            min={0}
            value={price[1]}
            onChange={(value) =>
              setPrice([price[0], value || 0])
            }
            className="w-full"
            placeholder="Max"
          />
        </div>

        <Button danger block>
          Apply
        </Button>
      </div>

      <hr />

      <div>
        <div className="flex justify-between items-center font-semibold mb-3">
          Condition
           {/* <DownOutlined /> */}
        </div>

        <Radio.Group className="flex flex-col gap-2" defaultValue="any">
          <Radio value="any">Any</Radio>
          <Radio value="refurbished">Refurbished</Radio>
          <Radio value="new">Brand new</Radio>
          <Radio value="old">Old items</Radio>
        </Radio.Group>
      </div>

      <hr />

      <div>
        <div className="flex justify-between items-center font-semibold mb-3">
          Ratings
           {/* <DownOutlined /> */}
        </div>

        <Checkbox.Group className="flex flex-col gap-2">
          <Checkbox value="5">⭐⭐⭐⭐⭐</Checkbox>
          <Checkbox value="4">⭐⭐⭐⭐☆</Checkbox>
          <Checkbox value="3">⭐⭐⭐☆☆</Checkbox>
          <Checkbox value="2">⭐⭐☆☆☆</Checkbox>
        </Checkbox.Group>
      </div>
    </div>
  );
};

export default ProductsFilter;