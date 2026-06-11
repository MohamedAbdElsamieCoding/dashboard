import { clsx } from "clsx";
import type { IconType } from "react-icons";
import { PiTrendUpThin } from "react-icons/pi";

type CardProps = {
  title: string;
  value: string;
  percentage?: string;
  icon: IconType;
  iconClassName?: string;
};

const Card = ({
  title,
  value,
  percentage,
  iconClassName,
  icon: Icon,
}: CardProps) => {
  return (
    <div className="relative p-6 flex flex-col gap-1 bg-surface border border-border rounded-xl overflow-hidden">
      <div className="absolute -top-15 -right-15 bg-[#908FA0] rounded-full h-24 w-24 blur-3xl" />
      <div
        className={clsx(
          "flex items-center",
          percentage ? "justify-between" : "justify-end",
        )}
      >
        <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-xl">
          <Icon className={clsx("text-xl", iconClassName)} />
        </div>

        {percentage && (
          <div className="text-secondary flex items-center gap-1">
            <span className="text-sm font-medium">{percentage}</span>
            <PiTrendUpThin className="text-lg" />
          </div>
        )}
      </div>

      <p className="pt-3 text-text-muted tracking-wide font-medium text-xs text">
        {title}
      </p>

      <h2 className="font-semibold text-2xl tracking-tight text-text">
        {value}
      </h2>
    </div>
  );
};

export default Card;
