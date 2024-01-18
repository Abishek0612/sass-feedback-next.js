import Image from "next/image";
import React from "react";
import "../../app/styles/nav.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <Image
          src="/assets/shared/icon-new-feedback.svg"
          width={20}
          height={20}
          alt="nav"
        />
        <h2>6 Suggestions</h2>

        <h4>Sort by : Most Upvotes</h4>
      </div>

      <div className="nav-right">
        <Link href="/api/add-feedback " style={{ textDecoration: "none" }}>
          <button className="add-button">
            <Image
              src="/assets/shared/icon-new-feedback.svg"
              width={20}
              height={20}
              alt="nav"
            />
            Add
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
