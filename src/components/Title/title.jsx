import './title.css'
const Title = ({text,head}) => {
  return (
    <div className="title">
      
      <h2>{head}</h2>
      <p>{text}</p>
    </div>
  );
};

export default Title;
