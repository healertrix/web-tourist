export default function Login() {
	return (
    <>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body items-center text-center">
          <h2 class="card-title">Login Page</h2>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="Joe ..."
              class="input input-bordered w-full max-w-xs"
            />
          </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="****"
              class="input input-bordered w-full max-w-xs"
            />
          </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Select user type</span>
            </label>
            <select class="select select-bordered">
              <option disabled selected>
                User type
              </option>
              <option>Teacher</option>
              <option>Student</option>
              <option>Admin</option>
            </select>
          </div>

          <div class="card-actions">
            <button className="btn ">Login </button>
          </div>
        </div>
      </div>
    </>
  );
}
