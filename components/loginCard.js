export default function Login() {
  return (
    <>
      <div className="card w-96 bg-base-100 drop-shadow-[0_25px_25px_rgba(0,0,0,0.25)]">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Login Page</h2>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="text"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Select user type</span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                User type
              </option>
              <option>Teacher</option>
              <option>Student</option>
              <option>Admin</option>
            </select>
          </div> */}

          <div className="card-actions">
            <button className="btn bg-btnblue my-5">Login </button>
          </div>
        </div>
      </div>
    </>
  );
}
