const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const photo = form.photo.value;

    const newCoffee = { name, quantity, supplier, taste, category, photo };
    console.log(newCoffee);
  };

  return (
    <div className="bg-[#F4F3F0] p-24 mb-8">
      <h2 className="text-3xl font-extrabold text-center my-5">Add coffee</h2>
      <form onSubmit={handleAddCoffee}>
        <div className="grid grid-cols-2 gap-10">
          {/* name */}
          <div className="w-full">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Coffee Name</span>
              </div>
              <input
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
                name="category"
                type="text"
                placeholder="Supplier Name"
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
                name="details"
                type="text"
                placeholder="Supplier Name"
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
          value="Add Now"
          className="btn btn-block bg-gray-400 mt-8"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
