export const Services = ({ title, items }) => {
  return (
    <div className="summary__services">
      <h3>{title}</h3>
      {items.map((service, index) => (
        <div key={index} className="summary__service">
          {service}
        </div>
      ))}
    </div>
  );
};