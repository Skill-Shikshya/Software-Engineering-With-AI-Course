import { Link, NavLink } from "react-router";

function Header() {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      <NavLink to="/" className={({ isActive }) => (isActive ? "red" : "blue")}>
        Home
      </NavLink>
      <NavLink
        to="/apple"
        className={({ isActive }) => (isActive ? "red" : "blue")}
      >
        Apple
      </NavLink>
      <Link to="/banana">Banana</Link>
    </div>
  );
}

export default Header;
