export default function ProductImage({
  image,
  imageAlt,
  lalbe = "bestseller",
  box = "Add to compare",
}) {
  return (
    <div className="position-relative w-100 p-3">
      <img src={image} alt={imageAlt} className="w-80" height={"200"} />
      <div className="badge bg-success position-absolute top-0 start-0 translate-middle ">
        {lalbe}
      </div>
      <div className="p-2 m-1">
        <input
          className="form-check-input me-3"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        {box}
      </div>
    </div>
  );
}
