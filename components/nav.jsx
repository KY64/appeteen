import React from "react";
import Link from "next/link";

const links = [
  { href: "https://github.com/segmentio/create-next-app", label: "Github" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a className="nav-icon fas fa-home"></a>
        </Link>
      </li>
      <li>
        <Link prefetch href="/">
          <a className="nav-icon fas fa-receipt"></a>
        </Link>
      </li>
      <li>
        <Link prefetch href="/">
          <a className="nav-icon fas fa-bell"></a>
        </Link>
      </li>
      <li>
        <Link prefetch href="/">
          <a className="nav-icon fas fa-ellipsis-h"></a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      nav {
        text-align: center;
        background: #dd2e54;
        position: fixed;
        width: 100%;
        bottom: 0;
        box-shadow: 0 -1px 5px rgba(0,0,0,.4)
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 0px 16px;
      }
      li {
        display: flex;
        margin: 0 20px;
      }
      a {
        text-decoration: none;
        font-size: 13px;
        color: white;
      }
      .nav-icon {
        font-size: 14pt;
      }
    `}</style>
  </nav>
);

export default Nav;
