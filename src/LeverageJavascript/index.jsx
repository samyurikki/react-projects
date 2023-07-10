import { people } from "./data";

function Leverage() {
  const data = people;

  return (
    <>
      {data.map((person) => {
        return <Person key={person.name} {...person} />;
      })}
    </>
  );
}

function Person({ images, name, nickName }) {
  const img = images?.[0].small?.url;
  return (
    <div>
      <h3>Name: {name}</h3>
      <h4>Nickname: {nickName || "Shake And Bake"}</h4>
      <img src={img} alt={name} style={{ width: "50px", height: "50px" }} />
    </div>
  );
}

export default Leverage;
