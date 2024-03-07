const Userinfo = ({userImg,name,loc,comment}) => {
  return (
    <li>
      <div className="slide">
        <div className="user-info">

          <img src={userImg} alt="" />
          <div>
            <h3>{name}</h3>
            <span>{loc}</span>
          </div>
        </div>
        <p>{comment}</p>
      </div>
    </li>
  );
};

export default Userinfo;
