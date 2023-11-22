export const Contact = () => {
  return (
    <div className="mt-36">
      <h1 className="text-xl m-4 p-4">Contact Us Page</h1>
      <div className="mx-4 px-2">
        <form>
          <input
            type="text"
            placeholder="name"
            className="border border-black rounded-sm p-2 m-2"
          />
          <input
            type="text"
            placeholder="message"
            className="border border-black rounded-sm p-2 m-2"
          />
          <button className="bg-green-100 m-2 p-2 px-4 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
