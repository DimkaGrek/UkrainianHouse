import { Button } from '../Button/Button';

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
      <Button type="submit">Add News</Button>
    </form>
  );
};
