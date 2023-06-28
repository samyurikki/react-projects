import { FaQuoteRight } from "react-icons/fa";

function Review({ image, name, job, text, id }) {
  return (
    <article
      style={{
        display: "flex",
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
        width: "80vw",
      }}
    >
      <div
        style={{
          backgroundColor: "#0100ee",
          position: "relative",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          top: "-0.25rem",
          right: "-0.5rem",
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            left: "-0.5rem",
            position: "relative",
          }}
        />
        <span
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "2.5rem",
            height: "2.5rem",
            transform: "translateY(25%)",
            backgroundColor: "#0100ee",
            display: "grid",
            placeItems: "center",
            borderRadius: "50%",
            color: "#ffffff",
          }}
        >
          <FaQuoteRight />
        </span>
      </div>
      <h3 style={{ textTransform: "capitalize", lineHeight: "0.25rem" }}>
        {name}
      </h3>
      <h5 style={{ textTransform: "uppercase", lineHeight: "0.1rem" }}>
        {job}
      </h5>
      <p
        style={{
          textAlign: "center",
          lineHeight: "1rem",
          fontFamily: "sans-serif",
          fontSize: "14px",
        }}
      >
        {text}
      </p>
    </article>
  );
}

export default Review;
