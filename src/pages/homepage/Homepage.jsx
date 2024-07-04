import React, { useEffect, useState } from "react";
import { getAllProductsApi } from "../../apis/Api";
import ProductCard from "../../components/ProductCard";

const Homepage = () => {
  //1. State for all fetched products
  const [products, setProducts] = useState([]); //array

  // 2. Call api initially(page load) - set all fetched products to state
  useEffect(() => {
    getAllProductsApi()
      .then((res) => {
        // response: res.data.products (All Products)
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="container">
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Heels</h5>
                <p>20% OFF</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Boots</h5>
                <p>Boots on sale</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://images.pexels.com/photos/2057318/pexels-photo-2057318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
                "
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Puma shoes</h5>
                <p>30% off on puma</p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <h2 className="mt-2">Available Products</h2>

        <div class="row row-cols-1 row-cols-md-4 g-4">
          {products.map((singleProduct) => (
            <div class="col">
              <ProductCard
                productInformation={singleProduct}
                color={"purple"}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;
