import { FILTERS_BUTTONS } from "../consts";
import { type FilterValue } from "../types/types";

type Props = {
  filterSelected: FilterValue;
  onFilterChange: (filter: FilterValue) => void;
};
export const Filters = ({ filterSelected, onFilterChange }: Props) => {
  const handleClick =
    (filter: FilterValue) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      onFilterChange(filter);
      console.log("Filter selected:", filterSelected);
    };
  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        const isSelected = key === filterSelected;
        const className = isSelected ? "selected" : " ";
        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={handleClick(key as FilterValue)}
            >
              {literal}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
