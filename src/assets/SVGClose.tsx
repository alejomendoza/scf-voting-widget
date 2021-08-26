import { h } from 'preact';

const SVGClose = (props: any) => {
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      xmlns="http://www.w3.org/2000/svg"
      class="ionicon"
      viewBox="0 0 512 512"
    >
      <title>Close</title>
      <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
    </svg>
  );
};

export default SVGClose;
