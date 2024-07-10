// TODO: need add styles

"use client";

export const SearchField = () => {
  return (
    <div className="mb-12 w-full">
      <input
        className="w-full"
        type="text"
        value={""}
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </div>
  );
};
