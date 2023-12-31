import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../common/components/navbar";
import Container from "../common/components/contaner";
import BreadCrumbs from "../common/components/breadCrumbs";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white">
        <Container>
          <Navbar />
        </Container>
      </header>
      <main className="grow ">
        <Container>
          <BreadCrumbs />
          <div className="my-5">{children}</div>
        </Container>
      </main>
      <footer className="shrink-0 bg-white p-5">
        <Container>
          <div className="flex items-center justify-center">
            <Link
              to="https://github.com/Bellusfennec/02-hackathon"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              React team 2
            </Link>
            <div className="px-2">- c любовью</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
        </Container>
      </footer>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default MainLayout;
