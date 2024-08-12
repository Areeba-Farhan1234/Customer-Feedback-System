import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFeedbacks, setProducts } from "../store/reducer";

function Home() {
  return (
    <>
      <ProductsList />

      <section id="sm-banner" className="section-p1">
        <div className="banner-box">
          <h4>Crazy deals</h4>
          <h2>buy 1 get 1 free</h2>
          <span>The best classic dress is on sale at care</span>
          <button className="white">Learn More</button>
        </div>
        <div className="banner-box banner-box2">
          <h4>Spring/Summer</h4>
          <h2>Upcoming Season</h2>
          <span>The best classic dress is on sale at care</span>
          <button className="white">Collection</button>
        </div>
      </section>

      <section id="banner3">
        <div className="banner-box">
          <h2>Season Sale</h2>
          <h3>Winter Collection -50% OFF</h3>
        </div>
        <div className="banner-box banner-box2">
          <h2>NEW FOOTWEAR COLLECTION</h2>
          <h3>Spring / Summer 2023</h3>
        </div>
        <div className="banner-box banner-box3">
          <h2>T-SHIRTS</h2>
          <h3>New Trendy Prints </h3>
        </div>
      </section>

      <section id="Newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up for Newsletters</h4>
          <p>
            Get E-mail updates about our latest shop and{" "}
            <span>special offers.</span>{" "}
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your email address" />
          <button className="normal">Sign Up</button>
        </div>
      </section>
    </>
  );
}

export default Home;

const ProductsList = () => {
  const [productId, setProductId] = useState();

  const dispatch = useDispatch();
  const { products, feedbacks } = useSelector((state) => state.appReducer);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        const productsData = json.map((item) => ({
          name: item?.title,
          src: item?.image,
          brand: item?.category,
          price: "$" + item?.price,
        }));
        dispatch(setProducts(productsData));
      });
  }, []);

  return (
    <section id="product1" className="section-p1">
      <h2>Products List</h2>
      <div className="pro-container">
        {products.map((product, index) => (
          <div key={index} className="pro">
            <img src={product.src} alt={product.name}  />
            <div className="des">
              <span>{product.brand}</span>
              <h5>{product.name}</h5>
              {/* <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div> */}
              <h4>{product.price}</h4>
            </div>
            <div className="d-grid mb-1">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={() => setProductId(index)}
              >
                Submit Feedback
              </button>
            </div>
          </div>
        ))}
        {/* modal start */}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <FeedbackForm id={productId} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeedbackForm = ({ id }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    rating: "0",
    userName: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    if (type === "radio") {
      setFormData((prevState) => ({
        ...prevState,
        rating: checked ? value : prevState.rating,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.rating == "0") {
      alert("Please select rating");
    } else {
      dispatch(setFeedbacks({ ...formData, productId: id }));
      closeModal();
      const closeButton = document.querySelector("#closeModalButton");
      if (closeButton) {
        closeButton.click();
      }
    }
  };

  const closeModal = () => {
    setFormData({
      title: "",
      description: "",
      rating: "0",
      userName: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">
          Customer Feedback
        </h1>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          onClick={closeModal}
        ></button>
      </div>
      <div className="modal-body">
        <div className="mb-3">
          <label htmlFor="title" className="col-form-label">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="col-form-label">
            Description:
          </label>
          <textarea
            className="form-control"
            id="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="rating">
          {[5, 4, 3, 2, 1].map((star) => (
            <React.Fragment key={star}>
              <input
                type="radio"
                name="rating"
                value={star}
                id={`rating-${star}`}
                checked={formData.rating === star.toString()}
                onChange={handleChange}
              />
              <label htmlFor={`rating-${star}`}>☆</label>{" "}
            </React.Fragment>
          ))}
        </div>
        <div className="mb-3">
          <label htmlFor="userName" className="col-form-label">
            Customer Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="userName"
            value={formData.userName}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
          onClick={closeModal}
          id="closeModalButton"
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};
