import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Product() {
  const { id } = useParams();
  console.log("id", id);
  const [data, setData] = useState([]);

  useEffect(() => {
    getSingleproduct();
  }, [id]);

  let getSingleproduct = async () => {
    let response = await axios.get(`https://dummyjson.com/products/${id}`);
    setData([response.data]);
  };

  console.log(`data in ${id}`, data);
  return (
    <>
      <div class="container mt-5 mb-5">
        {data.length > 0
          ? data.map((data) => (
              <div class="row d-flex justify-content-center">
                <div class="col-md-10">
                  <div class="card">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="images p-3">
                          <div class="text-center p-4">
                            {" "}
                            <img
                              id="main-image"
                              src={data.thumbnail}
                              width="250"
                            />{" "}
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="product p-4">
                          <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex align-items-center">
                              {" "}
                              <i class="fa fa-long-arrow-left"></i>{" "}
                              <a
                                class="ml-1"
                                // href="/"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                <Link to="/">Back</Link>
                              </a>{" "}
                            </div>{" "}
                            <i class="fa fa-shopping-cart text-muted"></i>
                          </div>
                          <div class="mt-4 mb-3">
                            {/* <span class="text-uppercase text-muted brand">Orianz</span> */}
                            <h5 class="text-uppercase">{data.title}</h5>
                            <h6>{data.category}</h6>
                            <div class="price d-flex flex-row align-items-center">
                              <span class="act-price">$.{data.price}</span>
                              {/* <div class="ml-2"> <small class="dis-price">$59</small> <span>40% OFF</span> </div> */}
                            </div>
                          </div>
                          <p class="about">{data.description}</p>
                          <div class="sizes mt-5">
                            {/* <h6 class="text-uppercase">Size</h6> <label class="radio"> <input type="radio" name="size" value="S" checked/> <span>S</span> </label> <label class="radio"> <input type="radio" name="size" value="M"/> <span>M</span> </label> <label class="radio"> <input type="radio" name="size" value="L"/> <span>L</span> </label> <label class="radio"> <input type="radio" name="size" value="XL"/> <span>XL</span> </label> <label class="radio"> <input type="radio" name="size" value="XXL"/> <span>XXL</span> </label> */}
                          </div>
                          <div class="cart mt-4 align-items-center">
                            {" "}
                            <button class="btn btn-danger text-uppercase mr-2 px-4">
                              Add to cart
                            </button>{" "}
                            <i class="fa fa-heart text-muted"></i>{" "}
                            <i class="fa fa-share-alt text-muted"></i>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : "Loading..."}
      </div>
    </>
  );
}
