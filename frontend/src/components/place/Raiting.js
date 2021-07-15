import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Rating() {
  const token = useSelector((state) => {
    return {
      token: state.token.token,
      user: state.token.user,
    };
  });
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const { id } = useParams();
  return (
    <div>
      <div className="rating">
        {[...Array(5)].map((element, i) => {
          let ratingValue = i + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                hidden="true"
                value={ratingValue}
                onClick={() => {
                  setRating(ratingValue);
                  axios
                    .post(
                      `http://localhost:5000/rating`,
                      {
                        place_id: id,
                        user_id: token.user.id,
                        rate: ratingValue,
                      },
                      {
                        headers: {
                          authorization: "Bearer " + token.token,
                        },
                      }
                    )
                    .then((result) => {})
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              />
              <FaStar
                size={30}
                color={
                  ratingValue <= (hover || rating) ? "rgb(231, 231, 9)" : "gray"
                }
                onMouseEnter={() => {
                  setHover(ratingValue);
                }}
                onMouseLeave={() => {
                  setHover(null);
                }}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
}
