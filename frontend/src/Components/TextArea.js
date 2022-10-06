const TextArea = ({ question }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{question}</label>

      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style={{height: 100}}
        ></textarea>
        <label htmlFor="floatingTextarea2">Comments</label>
      </div>
    </div>
  );
};

export default TextArea;
