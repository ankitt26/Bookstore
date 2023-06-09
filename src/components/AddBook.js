const AddBook = () => (
  <>
    <form onSubmit={() => {}}>
      <h2>Add New Book</h2>
      <input type="text" onChange={() => {}} placeholder="Title" required />
      <select id="dropdown" name="Categories">
        <option value="science">Science</option>
        <option value="economy">Economy</option>
        <option value="action">Action</option>
        <option value="sports">Sports</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  </>
);

export default AddBook;
