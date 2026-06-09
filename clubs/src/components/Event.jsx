const Event = (props) => {
  return (
    <div className="Event">   
      <h5>{props.title}</h5>
      <h6>{props.description}</h6>
      <a href={`mailto:${props.email}`}>Email!</a>
    </div>
  );
};

export default Event;