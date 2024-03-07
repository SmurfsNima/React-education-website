import './title.css'
const Title = ({text,head}) => {
  return (
    <div className="title">
      <p>{text}</p>
      <h2>{head}</h2>
    </div>
  );
};

export default Title;
