import { FC, SVGAttributes } from "react";

const DealsIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.413 4.806c-.41.145-.895.278-1.413.278s-1.003-.133-1.412-.278c-.29-.102-.597-.233-.866-.347a31.382 31.382 0 0 0-.276-.117c-.763-.316-1.113-.364-1.35-.271-.12.047-.239.096-.357.148-.233.102-.446.384-.763 1.146l-.113.278c-.109.271-.233.58-.366.858-.187.392-.436.828-.802 1.194-.366.366-.802.616-1.195.803-.277.132-.586.257-.857.366-.099.04-.193.077-.278.113-.762.316-1.045.529-1.147.762-.051.118-.1.238-.148.358-.093.236-.044.586.271 1.35l.117.276c.114.269.245.575.348.865.145.41.277.895.277 1.413s-.132 1.003-.277 1.412c-.103.29-.234.597-.348.865l-.117.277c-.315.763-.364 1.113-.27 1.35.046.12.096.239.147.357.102.233.384.446 1.147.762.085.036.179.073.278.113.27.11.58.234.857.366.393.187.829.437 1.195.803.366.366.615.802.802 1.194.133.278.257.587.366.858l.113.278c.317.762.53 1.045.763 1.146.118.052.237.101.357.149.237.093.587.044 1.35-.272l.277-.116c.268-.115.575-.245.865-.348.41-.145.894-.278 1.412-.278.518 0 1.003.133 1.413.278.29.103.596.233.865.348l.276.116c.763.316 1.113.365 1.35.272.12-.048.239-.097.357-.149.233-.101.447-.384.763-1.146l.113-.278c.109-.271.233-.58.366-.858.187-.392.436-.829.802-1.195.366-.366.803-.615 1.195-.802.278-.133.587-.257.858-.366l.277-.113c.763-.317 1.046-.53 1.147-.763.052-.118.1-.237.148-.357.093-.236.045-.586-.271-1.35a29.652 29.652 0 0 0-.117-.276 15.449 15.449 0 0 1-.348-.865c-.145-.41-.277-.895-.277-1.412 0-.518.132-1.003.277-1.413.103-.29.234-.596.348-.865l.117-.277c.316-.763.364-1.113.271-1.35-.047-.12-.097-.239-.148-.357-.102-.233-.384-.446-1.147-.763a31.414 31.414 0 0 0-.278-.113c-.27-.109-.58-.233-.857-.366-.392-.187-.829-.436-1.195-.802-.366-.366-.615-.802-.802-1.194a15.477 15.477 0 0 1-.366-.858l-.113-.278c-.316-.762-.53-1.044-.763-1.146-.118-.052-.237-.101-.357-.148-.237-.093-.587-.045-1.35.27l-.276.118c-.269.114-.575.245-.865.347Zm.377-2.312c.69-.286 1.768-.709 2.846-.285.143.057.285.115.425.177 1.061.463 1.524 1.524 1.81 2.213l.146.357c.1.247.187.465.291.684.145.304.278.507.411.64.134.134.337.267.642.412.218.104.436.192.683.292.112.045.23.092.357.145.69.286 1.75.749 2.214 1.81.061.14.12.282.176.426.425 1.078.001 2.156-.284 2.846l-.15.356c-.105.245-.197.461-.277.69-.113.317-.163.555-.163.744 0 .188.05.426.163.744.08.228.172.444.277.69l.15.355c.285.69.709 1.768.284 2.847-.056.142-.114.283-.175.423-.464 1.062-1.525 1.525-2.215 1.811l-.357.146c-.247.099-.465.187-.683.29-.305.146-.508.279-.642.412-.133.134-.266.337-.41.642-.105.218-.193.436-.292.683l-.146.357c-.286.69-.748 1.752-1.81 2.215-.14.06-.282.12-.425.176-1.078.424-2.157 0-2.846-.285-.128-.052-.245-.102-.356-.15-.245-.104-.461-.196-.69-.277-.317-.113-.555-.163-.744-.163-.189 0-.426.05-.744.163-.229.08-.444.173-.69.277-.11.048-.228.098-.355.15-.69.286-1.768.71-2.847.285a12.544 12.544 0 0 1-.425-.176c-1.061-.463-1.524-1.525-1.81-2.214-.053-.127-.1-.245-.145-.357-.1-.248-.188-.465-.292-.684-.145-.304-.278-.508-.411-.641-.134-.134-.337-.266-.642-.411-.218-.105-.436-.192-.683-.292l-.357-.145c-.69-.286-1.75-.75-2.214-1.81a12.58 12.58 0 0 1-.176-.425c-.424-1.079-.001-2.157.284-2.847l.15-.356c.105-.245.197-.46.278-.689.112-.318.162-.556.162-.744 0-.19-.05-.427-.162-.745-.081-.228-.173-.444-.278-.689l-.15-.356c-.285-.69-.708-1.768-.284-2.847.056-.142.115-.284.176-.424C2.848 7.878 3.91 7.415 4.6 7.13c.127-.054.245-.101.357-.146.247-.1.465-.187.684-.292.304-.145.507-.277.64-.41.134-.134.267-.338.412-.642.104-.219.192-.436.292-.684.045-.112.092-.23.145-.357.286-.69.749-1.75 1.81-2.213.14-.062.282-.12.425-.177 1.079-.424 2.157 0 2.847.285l.356.15c.245.104.46.196.689.277.318.113.555.163.744.163.189 0 .427-.05.745-.163.228-.08.444-.173.689-.277l.356-.15Zm-4.412 8.992a.077.077 0 1 0 .108-.109.077.077 0 0 0-.108.109Zm-1.306-1.414a1.924 1.924 0 1 1 2.72 2.72 1.924 1.924 0 0 1-2.72-2.72Zm7.247.609a1 1 0 0 1 0 1.414l-5.224 5.224a1 1 0 1 1-1.414-1.414l5.224-5.224a1 1 0 0 1 1.414 0Zm-2.11 4.528a1.923 1.923 0 1 1 2.72 2.72 1.923 1.923 0 0 1-2.72-2.72Zm1.305 1.414a.076.076 0 1 0 .109-.108.076.076 0 0 0-.109.108Z"
        fill="#3B4A69"
      />
    </svg>
  );
};

export { DealsIcon };
