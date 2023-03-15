import React from "react";

const Rating = ({ rating, color, numReviews }) => {
    return (
        <div className="rating">
            <span>
                <i
                    style={{ color }}
                    className={
                        rating >= 1
                            ? "fas fa-star"
                            : rating >= 0.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                    }
                ></i>
            </span>
            <span>
                <i
                    style={{ color }}
                    className={
                        rating >= 2
                            ? "fas fa-star"
                            : rating >= 1.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                    }
                ></i>
            </span>
            <span>
                <i
                    style={{ color }}
                    className={
                        rating >= 3
                            ? "fas fa-star"
                            : rating >= 2.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                    }
                ></i>
            </span>
            <span>
                <i
                    style={{ color }}
                    className={
                        rating >= 4
                            ? "fas fa-star"
                            : rating >= 3.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                    }
                ></i>
            </span>
            <span>
                <i
                    style={{ color }}
                    className={
                        rating >= 5
                            ? "fas fa-star"
                            : rating >= 4.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                    }
                ></i>
            </span>
            <span className="review"> ({numReviews} )</span>
        </div>
    );
};

Rating.defaultProps = {
    color: "orange",
};

export default Rating;