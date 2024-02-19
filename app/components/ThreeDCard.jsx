import "./ThreeDCard.css";

export default function ThreeDCard() {
  return (
    <div className=" mr-5">
      <div className="card ms-10">
        <div className="wrapper">
          <img src="/Card.jpg" className="cover-image" />
        </div>
        <img
          src="/title.png"
          className="title"
        />
        <img src="/Character.png" className="character" />
      </div>
    </div>
  );
}
