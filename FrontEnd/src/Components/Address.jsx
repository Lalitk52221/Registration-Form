const Address = () => {
  return (
    <div>
      <p className="text-xl font-semibold mt-5 underline text-gray-400">
        Address{" "}
      </p>
      <form>
        <div className="flex text-xl flex-wrap items-center justify-start">
          <div className="flex gap-2 m-3 flex-col">
            <span className="">Address:</span>
            <input
              type="text"
              className="border rounded-md px-3 py-1 text-lg w-64"
              required
            />
          </div>

          <div className="flex gap-2  m-3 flex-col">
            <span className="">State:</span>
            <select
              className="border rounded-md px-3 py-1 text-lg w-64"
              required
            >
              <option value="select">select</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>
        </div>
        {/*   <button type="submit" className='m-3 bg-red-900'>Submit</button> */}
      </form>
    </div>
  );
};

export default Address;
