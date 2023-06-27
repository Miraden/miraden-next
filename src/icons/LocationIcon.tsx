import { FC, SVGAttributes } from "react";
import {theme} from "../../styles/tokens";

const LocationIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="18"
      height="18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill={theme.colors.text.black}
        d="M 7 0.125 C 3.2851896 0.125 0.25 3.1237208 0.25 6.8125 C 0.25 9.1427205 1.5602837 11.333529 2.9804688 12.984375 C 3.6905612 13.809798 4.4360886 14.499544 5.1074219 15 C 5.4430884 15.250229 5.7600384 15.454133 6.0605469 15.605469 C 6.3610553 15.756804 6.6290841 15.875 7 15.875 C 7.3709159 15.875 7.6389447 15.756804 7.9394531 15.605469 C 8.2399616 15.454133 8.5569116 15.250229 8.8925781 15 C 9.5639114 14.499544 10.309439 13.809798 11.019531 12.984375 C 12.439717 11.333529 13.75 9.1427205 13.75 6.8125 C 13.75 3.1237193 10.714801 0.125 7 0.125 z M 7 1.625 C 9.9125852 1.625 12.25 3.9429139 12.25 6.8125 C 12.25 8.5531714 11.160669 10.518188 9.8808594 12.005859 C 9.2409546 12.749696 8.5622581 13.374818 7.9960938 13.796875 C 7.7130116 14.007904 7.4573031 14.169096 7.265625 14.265625 C 7.1365397 14.330632 7.0350141 14.35645 7 14.367188 C 6.9649859 14.356449 6.8634601 14.33063 6.734375 14.265625 C 6.5426969 14.169096 6.2869885 14.007904 6.0039062 13.796875 C 5.437742 13.374818 4.7590454 12.749696 4.1191406 12.005859 C 2.8393311 10.518188 1.75 8.5531714 1.75 6.8125 C 1.75 3.9429123 4.0874036 1.625 7 1.625 z M 7 4.25 C 6.6213208 4.25 6.117927 4.3275406 5.6308594 4.6699219 C 5.1437918 5.0123031 4.75 5.677497 4.75 6.5 C 4.75 7.322503 5.1437918 7.9876969 5.6308594 8.3300781 C 6.117927 8.6724594 6.6213208 8.75 7 8.75 C 7.3786792 8.75 7.882073 8.6724594 8.3691406 8.3300781 C 8.8562082 7.9876969 9.25 7.322503 9.25 6.5 C 9.25 5.677497 8.8562082 5.0123031 8.3691406 4.6699219 C 7.882073 4.3275406 7.3786792 4.25 7 4.25 z M 7 5.75 C 7.1213198 5.75 7.3679282 5.8014801 7.5058594 5.8984375 C 7.6437904 5.9953954 7.75 6.0798654 7.75 6.5 C 7.75 6.9201346 7.6437904 7.0046046 7.5058594 7.1015625 C 7.3679282 7.1985204 7.1213198 7.25 7 7.25 C 6.8786802 7.25 6.6320718 7.1985204 6.4941406 7.1015625 C 6.3562096 7.0046046 6.25 6.9201346 6.25 6.5 C 6.25 6.0798654 6.3562096 5.9953954 6.4941406 5.8984375 C 6.6320718 5.8014796 6.8786802 5.75 7 5.75 z "
      />
    </svg>
  );
};

export { LocationIcon };
