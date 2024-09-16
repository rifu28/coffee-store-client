const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, photo } = coffee;
  console.log(photo);
  return (
    <div>
      <div className="card bg-base-100 w-96 mx-auto shadow-xl">
        <figure>
          <img src={photo} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{category}</div>
          </h2>
          <p>{quantity}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{supplier}</div>
            <div className="badge badge-outline">{taste}</div>
          </div>
          <div className="btn-group mt-5">
            <button className="btn btn-active">Button</button>
            <button className="btn">Button</button>
            <button className="btn">Button</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
