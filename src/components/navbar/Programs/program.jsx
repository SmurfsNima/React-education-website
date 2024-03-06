const Program = ({src,icon,text}) => {
    return ( <div className="program">
        <img src={src} alt="" />
        <div className="caption">
            <img src={icon} alt="" />
            <p>{text}</p>
        </div>
    </div> );
}
 
export default Program;