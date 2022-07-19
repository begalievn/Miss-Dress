import classes from "./Main.module.scss";

function Dots(props: any) {
  const { activeIndex, onclick, sliderImage } = props;
  return (
    <div className={classes.all_dots}>
      {sliderImage.map((slide: string, index: number) => (
        <span
          className={
            activeIndex === index
              ? [classes.dot, classes.active_dot].join(" ")
              : classes.dot
          }
          key={index}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
}

export default Dots;
