import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, photo, details } =
    coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const details = form.details.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      photo,
      details,
    };
    console.log(updatedCoffee);

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-24 mb-8">
      <h2 className="text-3xl font-extrabold text-center my-5">
        Update coffee of the : <p className="text-red-500 inline"> {name}</p>
      </h2>
      <form onSubmit={handleUpdateCoffee}>
        <div className="grid grid-cols-2 gap-10">
          {/* name */}
          <div className="w-full">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Coffee Name</span>
              </div>
              <input
                defaultValue={name}
                name="name"
                type="text"
                placeholder="Coffee Name"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          {/* quantity */}
          <div className="w-full">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Available Quantity</span>
              </div>
              <input
                defaultValue={quantity}
                name="quantity"
                type="text"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* Supplier */}
          <div className="w-full">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Supplier</span>
              </div>
              <input
                defaultValue={supplier}
                name="supplier"
                type="text"
                placeholder="Supplier Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* Taste */}
          <div className="w-full">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Taste</span>
              </div>
              <input
                defaultValue={taste}
                name="taste"
                type="text"
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* Category */}
          <div className="w-full">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <input
                defaultValue={category}
                name="category"
                type="text"
                placeholder="category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* Details */}
          <div className="w-full">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Details</span>
              </div>
              <input
                defaultValue={details}
                name="details"
                type="text"
                placeholder="details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* Form photo url */}
          <div className="w-full col-span-2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Photo URL</span>
              </div>
              <input
                defaultValue={photo}
                name="photo"
                type="text"
                placeholder="Give a Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="update coffee"
          className="btn btn-block bg-gray-400 mt-8"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
