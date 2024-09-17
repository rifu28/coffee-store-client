import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, quantity, supplier, taste, category, photo } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

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
            <button className="btn">view</button>
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn">edit</button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn">
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
