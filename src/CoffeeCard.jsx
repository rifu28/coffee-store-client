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
          <div className="btn-group mt-5 space-x-4 text-center">
            <button className="btn btn-active">view</button>
            <button className="btn">edit</button>
            <button className="btn">delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
