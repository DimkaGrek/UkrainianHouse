export const NewsForm = () => {
  return (
    <form>
      <div>
        <label>
          Title
          <input type="text" name="title" placeholder="Enter the title" />
        </label>
      </div>
      <div>
        <label>
          Content
          <textarea
            type="text"
            name="content"
            placeholder="Enter the content"
          />
        </label>
      </div>
      <div>
        <label>
          Photos
          <input type="file" name="photos" multiple />
        </label>
      </div>
      <button type="submit">Add news</button>
    </form>
  );
};
