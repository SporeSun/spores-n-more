import React from "react";

function FeaturedCategories() {
  return (
    <div className="page-width">
      <div className="mb-2 mt-3">
        <h2 className="text-center">OUR CATEGORIES</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="relative col-span-1 row-span-2 men-cat">
          <img src="/Avery.jpg" alt="Shop Cubes" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="#">
            SHOP CUBENSIS SPORES
          </a>
        </div>
        <div className="relative col-span-1 row-span-1 women-cat">
          <img src="/subag.jpg" alt="Shop exotics" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="#">
            SHOP EXOTIC PSILOCYBIN MUSHROOM SPORES
          </a>
        </div>
        <div className="relative col-span-1 row-span-1 kid-cat">
          <img src="/antler_reishi.jpg" alt="Shop Gourmets" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="#">
            SHOP GOURMET AND MEDICINAL CULTURES
          </a>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCategories;

export const layout = {
  areaId: "content",
  sortOrder: 5,
};
