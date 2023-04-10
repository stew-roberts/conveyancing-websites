import * as FAIcons from "react-icons/fa";

interface Props {
  icon: string;
  color?: string;
  w?: number;
  h?: number;
  outline?: boolean;
}

export const FontAwesomeIcon = (props: Props): JSX.Element => {
  const { icon, color, w, h, outline = false } = props;

  const { ...icons } = FAIcons;

  // @ts-ignore
  const Icon: JSX.Element = icons[icon];

  const classes = [
    `${color ? color : 'text-black'}`,
    h ? h : 'h-6',
    w ? w : 'w-6',
  ];

  return (
    // @ts-ignore
    <Icon className={classes.join(' ')} />
  );
};