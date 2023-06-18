import { ITitleProps } from "../types/titleTypes";

const Title = ({ title, subtitle }: ITitleProps) => {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{subtitle}</span>
      </h2>
    </div>
  );
};
export default Title;
