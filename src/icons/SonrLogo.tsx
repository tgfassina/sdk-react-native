import * as React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  textFill?: string;
};

function SonrLogo(props: Props) {
  return (
    <Svg width={117} height={40} fill="none">
      <Path
        d="M18.712 14.071l-4.685 4.703a1.734 1.734 0 000 2.445l4.685 4.703a1.72 1.72 0 002.438 0l4.686-4.703a1.734 1.734 0 000-2.445L21.15 14.07a1.72 1.72 0 00-2.438 0z"
        fill="#1792FF"
      />
      <Path
        d="M19.93 38.333a9.057 9.057 0 01-6.475-2.689l-.996-1 4.248-4.263.996 1a3.135 3.135 0 004.44 0l9.123-9.154a3.16 3.16 0 000-4.454l-4.555-4.566 4.248-4.263 4.563 4.578a9.205 9.205 0 012.674 6.49 9.205 9.205 0 01-2.674 6.49l-9.125 9.155a9.053 9.053 0 01-6.467 2.677zM8.893 31.068L4.34 26.49A9.178 9.178 0 011.66 20a9.205 9.205 0 012.68-6.49l9.122-9.154a9.142 9.142 0 016.468-2.69 9.117 9.117 0 016.467 2.69l.996 1-4.248 4.263-.996-1a3.135 3.135 0 00-4.44 0l-9.123 9.154A3.15 3.15 0 007.667 20a3.159 3.159 0 00.92 2.227l4.562 4.578-4.256 4.263z"
        fill="#1792FF"
      />
      <Path
        d="M48.113 28.198a2.154 2.154 0 01-.376-.569c-.085-.19-.012-.399.22-.633l2.103-2.087a.573.573 0 01.548-.175c.205.07.393.183.55.333.314.316.664.64 1.05.973.394.331.814.628 1.257.888.46.268.95.48 1.46.633.54.163 1.1.244 1.664.243a4.976 4.976 0 001.664-.243 3.94 3.94 0 001.241-.681 2.9 2.9 0 00.785-.974c.174-.358.265-.753.265-1.153a1.89 1.89 0 00-.453-1.282 4.11 4.11 0 00-1.116-.886 7.682 7.682 0 00-1.427-.601 20.84 20.84 0 00-1.398-.394c-2.533-.76-4.465-1.693-5.796-2.8a5.37 5.37 0 01-1.504-1.94 5.412 5.412 0 01-.488-2.411 5.778 5.778 0 01.611-2.657A6.162 6.162 0 0150.7 9.71a8.109 8.109 0 012.685-1.346 11.893 11.893 0 013.453-.486c1.382-.001 2.745.333 3.972.973a13.106 13.106 0 013.31 2.404c.38.402.368.813-.03 1.234l-1.725 1.859a.565.565 0 01-.596.175 2.268 2.268 0 01-.597-.365c-.241-.21-.538-.443-.862-.696-.339-.262-.695-.5-1.067-.71-.39-.223-.8-.408-1.224-.555a4.12 4.12 0 00-1.336-.222 8.435 8.435 0 00-1.238.095 3.636 3.636 0 00-1.162.365 2.385 2.385 0 00-.864.76c-.25.39-.37.848-.346 1.31-.009.376.107.743.329 1.045.254.325.576.59.944.776.465.246.95.453 1.449.618.553.19 1.166.38 1.835.57 1.022.3 2.028.653 3.014 1.058.888.356 1.72.838 2.472 1.433a6.646 6.646 0 011.69 2.024c.44.871.655 1.839.628 2.816a6.204 6.204 0 01-.724 2.99 7.257 7.257 0 01-1.932 2.292 8.818 8.818 0 01-2.794 1.46c-2.639.835-5.494.631-7.99-.57a12.414 12.414 0 01-3.88-2.82zM67.329 24.055c-.006-1.07.2-2.13.607-3.12a8.051 8.051 0 011.76-2.637 8.248 8.248 0 012.588-1.742 8.089 8.089 0 014.722-.498 8.126 8.126 0 014.195 2.24 8.31 8.31 0 011.741 2.594 7.86 7.86 0 01.645 3.163 7.77 7.77 0 01-.645 3.148 8.192 8.192 0 01-1.74 2.563 8.203 8.203 0 01-2.572 1.722 8.266 8.266 0 01-6.344 0 8.354 8.354 0 01-2.59-1.723 7.9 7.9 0 01-1.765-2.611 7.948 7.948 0 01-.607-3.1h.005zm4.175.031a4.227 4.227 0 001.13 2.92c.354.379.781.68 1.256.886a4.06 4.06 0 003.139 0 3.785 3.785 0 001.255-.886c.358-.384.645-.829.848-1.314a4.222 4.222 0 000-3.195 4.458 4.458 0 00-.848-1.311 4.014 4.014 0 00-1.255-.903 3.897 3.897 0 00-3.14 0 4.014 4.014 0 00-1.255.903 4.215 4.215 0 00-1.13 2.92v-.02zM88.248 16.24c.246-.017.492.039.707.16.16.109.286.263.36.443.09.207.153.424.188.647.044.243.094.501.157.776a7.452 7.452 0 011.949-1.518 5.484 5.484 0 012.762-.696 6.685 6.685 0 012.606.487c.72.293 1.373.735 1.915 1.297a5.49 5.49 0 011.193 1.975c.274.806.41 1.652.401 2.504v8.699a.756.756 0 01-.189.601.853.853 0 01-.565.158h-2.869c-.335 0-.538-.046-.613-.141a1.06 1.06 0 01-.109-.587v-8.002a2.737 2.737 0 00-.816-2.073 2.853 2.853 0 00-2.04-.774c-.362.005-.72.08-1.053.221a4.248 4.248 0 00-1.02.584 3.528 3.528 0 00-.8.871 2.835 2.835 0 00-.426 1.076v8.13a.752.752 0 01-.154.554.99.99 0 01-.63.141h-2.826a.831.831 0 01-.62-.148.804.804 0 01-.143-.538V17.19c0-.636.314-.953.942-.952h1.693zM106.946 17.127c.022.105.075.312.157.616s.137.511.157.618c.209-.277.435-.541.676-.79a5.08 5.08 0 01.896-.745c.339-.224.702-.41 1.082-.555a3.57 3.57 0 011.272-.222h.297a1.5 1.5 0 01.3.035c.344.034.682.116 1.004.243.367.137.723.3 1.067.486.302.16.587.35.848.57a.813.813 0 01.345.555.883.883 0 01-.157.443l-1.255 2.055a.805.805 0 01-.66.443 1.024 1.024 0 01-.376-.112 6.022 6.022 0 01-.534-.267 3.51 3.51 0 00-.77-.443 2.12 2.12 0 00-.768-.127 2.777 2.777 0 00-2.173.973 3.237 3.237 0 00-.582.996c-.132.35-.202.719-.206 1.092v8.003c0 .527-.282.791-.847.791h-2.594c-.542 0-.814-.264-.816-.79V17.126a.762.762 0 01.242-.618.877.877 0 01.565-.207h2.009a.623.623 0 01.55.244c.12.178.211.375.271.581z"
        fill={props.textFill || "#fff"}
      />
    </Svg>
  );
}

export default SonrLogo;
