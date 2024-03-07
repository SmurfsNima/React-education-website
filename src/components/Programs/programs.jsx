import "./programs.css";
import Program from "./program";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import icon_1 from "../../assets/program-icon-1.png";
import icon_2 from "../../assets/program-icon-2.png";
import icon_3 from "../../assets/program-icon-3.png";

const Programs = () => {
  return (
    <>
  
      <div className="programs">
        <Program src={program_1} icon={icon_1} text="Graduation Degree" />
        <Program src={program_2} icon={icon_2} text="Graduation Degree" />
        <Program src={program_3} icon={icon_3} text="Graduation Degree" />
      </div>
    </>
  );
};

export default Programs;
