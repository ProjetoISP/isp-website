import foto1 from "./img1.jpg";
import foto2 from "./img2.jpg";
import { Carousel } from "./Carousel";
import "./StylesCarousel/index.css";

export const CarouselContainer = () => {
  const data = [
    {
      image: foto1,
      caption: `<div>
        <h3 class="titulo__banner">PROJETO CONSTRUINDO O FUTURO</h3>
                <p class="paragrafo__banner">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor.
      </p>
      </div>`,
    },
    {
      image: foto2,
      caption: `<div>
      <h3 class="titulo__banner">PROGRAMA CONECTA GERAÇÃO JOVEM</h3>
      <p class="paragrafo__banner">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor.

      </p>
      </div>`,
    },
  ];

  const captionStyle = {
    fontSize: "15px",
    top: "20px",
  };
  const slideNumberStyle = {};

  return (
    <div className="App">
      <section></section>

      <div style={{ textAlign: "center" }}>
        <div style={{}}>
          <Carousel
            data={data}
            time={2000}
            width="1440px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            showNavBtn={true}
            style={{
              textAlign: "center",
              maxWidth: "1440px",
            }}
          />
        </div>
      </div>

      <section></section>

      <section></section>
    </div>
  );
};
