const Button = ({ classes, title }: { classes: string; title: string }) => {
  return <button className={classes}>{title}</button>;
};

export default Button;
