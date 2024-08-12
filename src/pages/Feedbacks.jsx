

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementVote, incrementVote } from "../store/reducer";

export default function Feedbacks() {
  const { products, feedbacks } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();

  return (
    <div className="container py-3">
      {feedbacks.length < 1 ? (
        <div className="d-flex justify-content-center align-items-center">
          <div className="my-5 h3">No feedbacks</div>
        </div>
      ) : (
        feedbacks.map((item, index) => (
          <div className="card mb-3" key={index}>
            <div className="row g-0">
              <div className="col-md-3 d-flex align-items-center ps-md-3">
                <div>
                  <img
                    src={products[item?.productId]?.src}
                    alt="..."
                    className="img-fluid rounded"
                  />
                </div>
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <p>
                    <strong>Product Name: </strong>
                    {products[item?.productId]?.name}
                  </p>
                  <p>
                    <strong>Product Price: </strong>
                    {products[item?.productId]?.price}
                  </p>
                  <p>
                    <strong>Feedback Title: </strong>
                    {item?.title}
                  </p>
                  <p>
                    <strong>Feedback Description: </strong>
                    {item?.description}
                  </p>
                  <p>
                    <strong>Feedback Customer Name: </strong>
                    {item?.userName}
                  </p>
                  <p>
                    <strong>Feedback Rating: </strong>
                    <span className="star">
                      {Array.from({ length: item?.rating || 0 }).map(
                        (_, index) => (
                          <i
                            key={index}
                            className="fas fa-star text-warning"
                          ></i>
                        )
                      )}
                    </span>
                  </p>
                  <div
                    className="d-flex justify-content-start align-items-center"
                    role="group"
                  >
                    <p className="mb-0">
                      <strong>Vote: &nbsp;&nbsp;&nbsp;</strong>
                    </p>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() =>
                        dispatch(
                          decrementVote({ productId: item?.productId })
                        )
                      }
                    >
                      -
                    </button>
                    <div className="mx-3">{item?.count || 0}</div>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() =>
                        dispatch(
                          incrementVote({ productId: item?.productId })
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
