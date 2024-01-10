import React from "react";

function Logo() {
  return (
    <div className="image">
      <a href="/">
        <img src="/SporeSun.png" alt="Sporesun Logo" />
      </a>
    </div>
  );
}

export default Logo;

export const layout = {
  areaId: "header",
  sortOrder: 0,
};
