import Button from "../button";
import React from "react";
import PropTypes from "prop-types";

const Favorite = (props) => {
  const { id, isFavorite, onRemove, onSet } = props;
  return (
    <div className="absolute right-5 top-5">
      {isFavorite ? (
        <Button
          type="button"
          onClick={() => onRemove(id)}
          bg="white"
          color="black"
          py="0"
          px="0"
          ring="none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5"
            />
          </svg>
        </Button>
      ) : (
        <Button
          type="button"
          onClick={() => onSet(id)}
          bg="white"
          color="black"
          py="0"
          px="0"
          ring="none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            />
          </svg>
        </Button>
      )}
    </div>
  );
};
Favorite.propTypes = {
  isFavorite: PropTypes.bool,
  onRemove: PropTypes.func,
  onSet: PropTypes.func,
  id: PropTypes.number
};
export default Favorite;
