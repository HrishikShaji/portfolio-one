import { Headings } from "./Headings";
import { TimelineRow } from "./TimelineRow";

interface TimelineProps {
  educationData: any[];
  experienceData: any[];
}

export const Timeline: React.FC<TimelineProps> = ({
  educationData,
  experienceData,
}) => {
  const educationLength = educationData.length;

  return (
    <div className="flex flex-col ">
      <Headings text="JOURNEY"></Headings>
      <div className="flex flex-col py-20 overflow-hidden">
        {educationData.map((item, i) => (
          <TimelineRow
            key={i}
            i={i}
            year={item.endYear}
            position={item.major}
            place={item.university}
            desc={item.description}
          />
        ))}
        {experienceData.map((item, i) => (
          <TimelineRow
            key={i + educationLength}
            i={i + educationLength}
            year={item.endYear}
            position={item.position}
            place={item.company}
            desc={item.description}
          />
        ))}
      </div>
    </div>
  );
};
