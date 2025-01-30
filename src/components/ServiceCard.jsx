const ServiceCard = (props) => {
  return (
    <div className="service-card">
      <span>{props.icon}</span>
      <h3 className="service-card-title">{props.title}</h3>
      <p className="service-card-description">{props.description}</p>
    </div>
  );
};

export default ServiceCard;
