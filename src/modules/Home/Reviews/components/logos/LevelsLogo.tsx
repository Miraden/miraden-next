import { FC, SVGAttributes } from "react";

const LevelsLogo: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="51"
      height="50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.72 36.585v1.111c-.563.271-.901.542-1.296.542-.423 0-.818-.163-.818-.596 0-.705.705-1.084 2.115-1.057Zm-3.1-1.762c.563-.379 1.437-.677 2.057-.677.875 0 1.072.27 1.072 1.057-2.453.054-4.229.677-4.229 2.601 0 1.03.649 2.006 2.425 2.006.986 0 1.691-.271 2.368-.786.45.732 1.043.786 1.41.786.281 0 .563-.054.563-.136v-1.517c-.564.054-.564-.407-.564-1.057v-2.087c0-.786-.113-2.466-2.847-2.466-.48 0-1.748.054-3.101.976l.846 1.3ZM5.34 38.51c.902.895 1.72 1.301 2.96 1.301 1.804 0 3.862-.921 3.862-3.74 0-2.927-2.312-3.523-3.806-3.523-.62 0-1.748.217-2.79 1.057l1.099 1.165a2.148 2.148 0 0 1 1.635-.704c1.297 0 1.41 1.002 1.438 1.49L7.37 35.42v1.572l2.368-.136c-.028.407-.198 1.436-1.466 1.436-.874 0-1.466-.46-1.833-.894l-1.1 1.111Zm9.078-4.2v5.69h1.973v-5.69h1.973v-1.627h-5.638v1.627h1.691Zm17.309 5.69h1.86v-3.333c.846-.054 1.015.326 1.495 1.328.423.867.846 1.816 2.086 1.816.197 0 .366-.027.648-.136v-1.517c-.564-.054-.507-.271-.93-.949-.592-1.002-.93-1.246-1.325-1.3.62-.163.902-.543 1.1-.814.31-.433.535-.84 1.014-.84.057 0-.14 0 .141.027v-1.599c-.282-.108-.338-.135-.676-.135-1.1 0-1.72.705-2.368 1.68-.339.515-.649.949-1.213.895v-2.44h-1.973v2.467c-.564.054-.761-.407-1.1-.895-.648-1.002-1.24-1.68-2.34-1.68-.338 0-.507.054-.789.136v1.571c0-.027.198-.027.254-.027.48 0 .79.407 1.1.84.197.271.45.65 1.07.813-.394.055-.93.326-1.522 1.301-.422.678-.338.922-1.184.949v1.518c.282.108.677.135.874.135 1.24 0 1.776-.949 2.227-1.816.508-1.002.282-1.382 1.41-1.328V40h.141Zm9.754-3.685v-3.632h-1.973V40h1.973v-1.328l2.537-2.548V40h1.974v-7.318h-1.974v1.111l-2.537 2.521ZM27.182 29.837h-14.39l1.789-13.671 12.134-7.332 10.579 12.372.078.535-10.657-11.61v1.376l10.656 10.769.078.534-10.656-10.005v1.528l10.734 9.012.078.535L26.87 15.63v1.375l10.89 7.408.077.535-10.89-6.569v1.299l10.968 5.805.078.534-10.968-4.964v1.375l11.123 4.2.078.535-11.123-3.36v1.527l11.2 2.444.079.535-11.279-1.68v1.374l11.356.764.078.764-11.356.305Z"
        fill="#3B4A69"
      />
    </svg>
  );
};

export { LevelsLogo };
