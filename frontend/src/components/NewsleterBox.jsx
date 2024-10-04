import React from "react";

const NewsLeterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subcribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat itaque
        repellat nemo sed laboriosam debitis nihil exercitationem minus eveniet,
        illo nesciunt nobis officia similique sequi error. Ullam iure temporibus
        distinctio.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email"
        />
        <button
          className="bg-black text-white text-xs px-10 py-4"
          type="submit"
        >
          SUBCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLeterBox;
