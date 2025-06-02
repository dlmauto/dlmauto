import Logo from "../../common/Logo";

import { LuClock } from "react-icons/lu";

const WorkDayRange = ({ time }: { time: string }) => {
  return (
    <div>
      <LuClock className="inline-block mr-2 text-red-600 " /> {time}
    </div>
  );
};

const WorkHours = () => {
  return (
    <>
      <WorkDayRange
        time="Mo - Fr 09:00 - 12:00 /
          13:30 - 17:30 Uhr"
      />
      <WorkDayRange time="Sa 09:00 - 12:30 Uhr" />
      <WorkDayRange time="oder nach Vereinbarung" />
    </>
  );
};

export default WorkHours;
