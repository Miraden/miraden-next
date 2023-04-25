import { FC, SVGAttributes } from "react";

const ApplePayIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="42"
      height="42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.316 15.143c-.469.562-1.219 1.005-1.969.942-.094-.76.273-1.566.703-2.065.469-.577 1.29-.988 1.953-1.02.079.79-.226 1.566-.687 2.143Zm.674 1.084c-.661-.038-1.264.201-1.751.395-.314.125-.58.23-.781.23-.227 0-.503-.111-.814-.236-.406-.163-.871-.35-1.359-.341-1.117.016-2.156.656-2.727 1.677-1.172 2.04-.305 5.062.828 6.724.555.822 1.22 1.724 2.095 1.692.385-.014.662-.133.948-.256.33-.142.673-.29 1.209-.29.516 0 .844.144 1.159.282.3.13.586.256 1.013.249.907-.016 1.477-.823 2.032-1.646a7.274 7.274 0 0 0 .902-1.875l.004-.015a.228.228 0 0 0-.02-.01c-.201-.093-1.731-.802-1.746-2.704-.014-1.595 1.214-2.404 1.407-2.531l.023-.016c-.781-1.17-2-1.297-2.422-1.329Zm6.27 10.043V13.937h4.57c2.36 0 4.01 1.646 4.01 4.05 0 2.405-1.68 4.066-4.072 4.066H17.15v4.217h-1.89Zm1.894-10.711h2.18c1.64 0 2.578.886 2.578 2.444 0 1.558-.937 2.452-2.586 2.452h-2.172v-4.896Zm12.945 9.226c-.5.965-1.602 1.574-2.79 1.574-1.758 0-2.985-1.06-2.985-2.658 0-1.582 1.188-2.491 3.384-2.626l2.36-.142v-.68c0-1.005-.649-1.551-1.805-1.551-.954 0-1.649.498-1.79 1.258H24.77c.054-1.598 1.54-2.761 3.547-2.761 2.165 0 3.572 1.147 3.572 2.927v6.138h-1.75v-1.479h-.04Zm-2.29.128c-1.008 0-1.649-.49-1.649-1.242 0-.775.617-1.226 1.797-1.297l2.102-.134v.696c0 1.154-.969 1.977-2.25 1.977Zm9.87 1.852c-.758 2.16-1.625 2.872-3.47 2.872-.14 0-.61-.016-.719-.048V28.11c.118.016.407.032.555.032.837 0 1.305-.356 1.594-1.282l.172-.546-3.204-8.978h1.977l2.228 7.286h.039l2.227-7.286H41l-3.32 9.43Z"
        fill="#000"
      />
    </svg>
  );
};

export { ApplePayIcon };