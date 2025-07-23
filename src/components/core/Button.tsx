const Button = ({
  classes,
  title,
  btnType,
}: {
  classes: string;
  title: string;
  btnType?: any;
}) => {
  return (
    <button className={classes} type={btnType && btnType}>
      {title}
    </button>
  );
};

export default Button;
