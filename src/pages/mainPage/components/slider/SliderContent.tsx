import classes from "./Main.module.scss";

interface MyObject {
  title: string;
  description: string;
  urls: string;
}

function SliderContent(props: any) {
  const { activeIndex, sliderImage } = props;

  return (
    <div className={classes.all_content}>
      {sliderImage.map((slide: MyObject, index: number) => (
        <div
          key={index}
          className={
            index === activeIndex
              ? [classes.active, classes.slides].join(" ")
              : classes.inactive
          }
        >
          {/* Start  Mobile version text */}
          <div className={classes.text_container_adaptive}>
            <h2 className={classes.slide_title_adaptive}>{slide.title}</h2>
            <h3 className={classes.slide_text_adaptive}>{slide.description}</h3>
          </div>
          {/* End  Mobile version text */}

          <img className={classes.slide_image} src={slide.urls} alt="" />
          <div className={classes.text_container}>
            <h2 className={classes.slide_title}>{slide.title}</h2>
            <h3 className={classes.slide_text}>{slide.description}</h3>
          </div>
          <button className={classes.btn_slider}>Подробнее</button>
        </div>
      ))}
    </div>
  );
}

export default SliderContent;
