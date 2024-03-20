const Userinfo = ({userImg,name,loc,comment}) => {
  return (
    <li>
      <div className="slide">
        <div className="user-info">

        
          <div>
            <h3>{name}</h3>
            <span>{loc}</span>
          </div>
          <img src={userImg} alt="" />
        </div>
        <p>{comment}</p>
      </div>
    </li>
  );
};

export default Userinfo;
