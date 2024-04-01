import { data } from "@/lib/data";
import { Headings } from "./Headings";
import { TimelineRow } from "./TimelineRow";

export const Timeline = () => {
  const educationLength = data.education.data.length;

  return (
    <div className="flex flex-col ">
      <Headings text="JOURNEY"></Headings>
      <div className="flex flex-col py-20 overflow-hidden">
        {data.education.data.map((item, i) => (
          <TimelineRow
            key={i}
            i={i}
            year={item.endYear}
            position={item.major}
            place={item.university}
            desc={item.description}
          />
        ))}
        {data.experience.data.map((item, i) => (
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
