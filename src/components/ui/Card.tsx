import type { IconType } from "react-icons";
import { PiTrendUpThin } from "react-icons/pi";

type CardProps = {
  title: string;
  value: string;
  percentage: string;
  icon: IconType;
};

const Card = ({ title, value, percentage, icon: Icon }: CardProps) => {
  return (
    <div className="relative p-6 flex flex-col gap-1 bg-surface border border-border rounded-xl overflow-hidden">
      <div className="absolute -top-15 -right-15 bg-[#908FA0] rounded-full h-24 w-24 blur-3xl" />
      <div className="flex items-start justify-between">
        <div className="bg-primary/10 h-10 w-10 rounded-xl flex items-center justify-center text-primary">
          <Icon className="text-xl" />
        </div>

        <div className="flex items-center text-secondary">
          <p className="text-base font-normal">{percentage}</p>
          <PiTrendUpThin />
        </div>
      </div>

      <p className="pt-3 text-text-muted tracking-wide font-medium text-xs">
        {title}
      </p>

      <h2 className="font-semibold text-2xl tracking-tight text-text">
        {value}
      </h2>
    </div>
  );
};

export default Card;
