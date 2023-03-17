
const Profile = () => {
    return (
        <form className="m-5 align-items-center">
            <legend className="fs-2">Profile settings.</legend>
            <div className="row">
                <label
                    htmlFor="staticEmail"
                    className="col-sm-2 col-form-label fw-bold"
                >
                    First Name:
                </label>
                <div className="col">
                    <input
                        type="text"
                        readOnly
                        className="form-control-plaintext"
                        id="staticEmail"
                        value="first name example"
                    />
                </div>
                <label
                    htmlFor="staticEmail"
                    className="col-sm-2 col-form-label fw-bold"
                >
                    Last Name:
                </label>
                <div className="col">
                    <input
                        type="text"
                        readOnly
                        className="form-control-plaintext"
                        id="staticEmail"
                        value="last name example"
                    />
                </div>
            </div>
            <label htmlFor="inputStoreName" className="form-label fw-bold">
                Rol
            </label>
            <div className="col">
                <input
                    type="text"
                    readOnly
                    className="form-control-plaintext"
                    id="staticEmail"
                    value="last name example"
                />
            </div>
            <div className="mb-3 mt-3 row">
                <label htmlFor="inputEmail" className="form-label fw-bold">
                    Email
                </label>
                <div className="col-sm-10">
                    <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        placeholder="name@example.com"
                    />
                </div>
            </div>

            <legend className="my-2 fs-2">Store settings.</legend>

            <div className="col-md-6">
                <label htmlFor="inputStoreName" className="form-label fw-bold">
                    Store name
                </label>
                <input type="text" className="form-control" id="inputStoreName" />
            </div>
            <div className="col-md-3">
                <label htmlFor="inputRUT" className="form-label fw-bold">
                    RUT
                </label>
                <input type="text" className="form-control" id="inputRUT" />
            </div>
            <div className="col-md-4">
                <label htmlFor="inputIndustry" className="form-label fw-bold">
                    Industry
                </label>
                <select id="inputIndustry" className="form-select">
                    <option selected>Choose...</option>
                    <option>Commerce</option>
                    <option>Food;Drink</option>
                </select>
            </div>
            <div className="col-md-6">
                <label htmlFor="inputAddress" className="form-label fw-bold">
                    Address
                </label>
                <input type="text" className="form-control" id="inputAddress" />
            </div>
            <div className="col-12 my-4">
                <button type="submit" className="btn btn-primary">
                    Save
                </button>
            </div>
        </form>
    );
};

export default Profile;
