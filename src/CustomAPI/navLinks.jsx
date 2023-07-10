import UserContainer from "./userContainer";

function NavLinks() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <a>Home</a>
      <a>About</a>
      <UserContainer />
    </div>
  );
}

export default NavLinks;
