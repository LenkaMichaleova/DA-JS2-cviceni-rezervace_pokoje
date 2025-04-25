export const Cancel = ({ title, paragraphs }) => {
  return (
    <div className="summary__cancal">
      <h3>{title}</h3>
      <div className="summary__cancel-text">
        {paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
};