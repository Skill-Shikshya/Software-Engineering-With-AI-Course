import React, { useEffect, useState } from "react";
import Button from "./components/Input";
import ProductCard from "./components/ProductCard";
import { initialProducts } from "./utils/dummy";
import NewComponent from "./components/newComponent";
import RenderInput from "./components/RenderInput";
import AppContext from "./components/context";

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");

  const selectedProduct = (id) => {
    return products.find((product) => product.id === id) ?? null;
  };

  const addProduct = () => {
    const newName = prompt("Enter product name");
    const newDescription = prompt("Enter product description");
    const newPrice = prompt("Enter product price");
    const newUrl = prompt("Enter product image URL");

    if (!newName || !newDescription || !newPrice || !newUrl) {
      alert("All fields are required.");
      return;
    }

    const product = {
      id: Date.now(),
      name: newName,
      description: newDescription,
      price: Number(newPrice),
      url: newUrl,
    };

    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const editProduct = (id) => {
    if (!id) {
      alert("Please select a product first.");
      return;
    }

    const product = selectedProduct(id);
    const newName = prompt("Enter product name", product.name);
    const newDescription = prompt(
      "Enter product description",
      product.description,
    );
    const newPrice = prompt("Enter product price", product.price);
    const newUrl = prompt("Enter product image URL", product.url);

    if (
      newName === null ||
      newDescription === null ||
      newPrice === null ||
      newUrl === null
    ) {
      return;
    }

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              name: newName,
              description: newDescription,
              price: Number(newPrice),
              url: newUrl,
            }
          : product,
      ),
    );
  };

  const deleteProduct = (id) => {
    if (!id) {
      alert("Please select a product first.");
      return;
    }

    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${selectedProduct(id)?.name}?`,
    );

    if (!confirmDelete) {
      return;
    }

    const updatedProducts = products.filter((product) => product.id !== id);

    setProducts(updatedProducts);
  };

  function SayHello() {
    console.log("Hello, welcome to the store!");
  }

  return (
    <main className="storefront">
      {/* <p>{searchTerm}</p> */}
      {/* <p style={{ backgroundColor: "red" }}>{debouncedValue}</p> */}

      <AppContext value={{ searchTerm, setSearchTerm }}>
        <NewComponent
          name="hello welcome"
          description="Welcome to the store"
          sayHello={SayHello}
        >
          <h1>this is heading</h1>
          {true ? (
            <>
              <h1>this is heading</h1>
              <p>iuihiu</p>
            </>
          ) : null}
          <p>This is a child paragraph inside the NewComponent.</p>
        </NewComponent>
      </AppContext>

      <RenderInput text={searchTerm} />

      {/* <NewComponent
        name="hello welcome"
        description="Welcome to the store"
        sayHello={SayHello}
      >
        <p>This is a child paragraph inside the NewComponent.</p>
      </NewComponent> */}

      {/* <header className="store-header">
        <div>
          <p className="eyebrow">Spring 2026 / collection 04</p>
          <h1>Featured devices</h1>
        </div>
        <Button name="＋ Add product" onClick={addProduct} />
      </header>
      <section className="product-grid" aria-label="Products">
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onEdit={() => editProduct(product.id)}
            onDelete={() => deleteProduct(product.id)}
          />
        )) || <p>No products available.</p>}
      </section> */}
    </main>
  );
}

export default App;
