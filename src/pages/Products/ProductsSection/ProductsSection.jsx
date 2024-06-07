import React from 'react';

const products = [
  'truck', 'globe', 'jacket', 'cap', 'boots',
  'sneakers', 'wheels', 'trashcans', 'socks',
  'jeans', 'shirt', 'boots', 'shirt', 'wheels', 'sneakers'
];

function ProductsSection() {
  return (
    <section className="justify-center items-center overflow-hidden h-screen">
      <h1 className="font-din tracking-custom text-6xl text-center mt-36">PRODUCTS</h1>

      <div className="font-din tracking-custom grid grid-cols-3 md:grid-cols-5 gap-5 md:gap-6 p-48 m-40 -mt-40 w-[70%] mx-auto">

        {products.map((product, index) => (

          <div key={index} className="group bg-[#E6C9DE] rounded-lg shadow-md relative">

            <img src={`/products/${product}.svg`} alt={product} className="w-[75%] h-36 object-contain mx-auto transition duration-300 ease-in-out" />

            <div className="absolute inset-0 bg-[#E6C9DE] opacity-0 group-hover:opacity-80 flex items-center justify-center transition-opacity duration-300 ease-in-out">
              <span className="text-black text-xl md:text-2xl hidden group-hover:block tracking-custom">{product.toUpperCase()}</span>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;


