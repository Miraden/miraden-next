import { FC, SVGAttributes } from "react";

const CashIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="18"
      height="18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.505 4.875a.562.562 0 0 0 .141.157c.172.145.466.31.894.463C6.39 5.798 7.613 6 9 6s2.61-.202 3.46-.505c.428-.153.722-.318.894-.463a.56.56 0 0 0 .141-.157.56.56 0 0 0-.141-.157c-.172-.145-.466-.31-.894-.463-.85-.303-2.073-.505-3.46-.505s-2.61.202-3.46.505c-.428.153-.722.318-.894.463a.562.562 0 0 0-.141.157ZM13.5 6.688c-.17.08-.35.153-.535.22-1.05.374-2.453.592-3.965.592s-2.914-.218-3.965-.593a6.045 6.045 0 0 1-.535-.22v1.177a.49.49 0 0 0 .146.168c.172.145.466.31.894.463C6.39 8.798 7.613 9 9 9s2.61-.202 3.46-.505c.428-.153.722-.318.894-.463a.49.49 0 0 0 .146-.168V6.688Zm0 3c-.17.08-.35.153-.535.22-1.05.374-2.453.592-3.965.592s-2.914-.218-3.965-.593a6.045 6.045 0 0 1-.535-.219v1.176a.49.49 0 0 0 .146.168c.172.145.466.31.894.463.85.303 2.073.505 3.46.505s2.61-.202 3.46-.505c.428-.153.722-.318.894-.463a.49.49 0 0 0 .146-.168V9.688Zm0 3c-.17.08-.35.153-.535.22-1.05.374-2.453.592-3.965.592s-2.914-.218-3.965-.593a6.039 6.039 0 0 1-.535-.22v1.178a.49.49 0 0 0 .146.167c.172.145.466.31.894.463.85.303 2.073.505 3.46.505s2.61-.202 3.46-.505c.428-.153.722-.318.894-.463a.49.49 0 0 0 .146-.168v-1.176Zm.002 1.17-.001.004v-.004Zm-9.004 0 .001.004a.01.01 0 0 1 0-.004Zm0-3 .001.004a.01.01 0 0 1 0-.004ZM3 10.875v3c0 .565.323 1.002.679 1.303.359.303.835.543 1.356.73 1.05.374 2.453.592 3.965.592s2.914-.218 3.965-.593c.521-.186.997-.426 1.356-.73.356-.3.679-.737.679-1.302v-9c0-.565-.323-1.002-.679-1.303-.359-.303-.835-.543-1.356-.73-1.05-.374-2.453-.592-3.965-.592s-2.914.218-3.965.593c-.521.186-.997.426-1.356.73-.356.3-.679.737-.679 1.302v6Zm1.498-3.016.001.003a.01.01 0 0 1 0-.003Zm9.003 3.003v-.004.004Zm0-3a.01.01 0 0 1 0-.003v.003Zm0-3a.01.01 0 0 1 0-.003v.003Zm-9.002 0a.01.01 0 0 1 0-.003v.003Z"
        fill="#7786A5"
      />
    </svg>
  );
};

export { CashIcon };