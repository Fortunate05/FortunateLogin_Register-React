import Carousel from 'react-bootstrap/Carousel';
import '../Components/Slider.css'

function Slider() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block"
          src="data:image/jpeg;base64,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"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5> Welcome to Digital Academcy </h5>
          <p> this is a leadership for IT student.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://plus.unsplash.com/premium_photo-1677717787558-c0c9c2090973?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8YWV1NnJMLWo2ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60
          "alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Student as Information Technology</h5>
          <p>WE LEARN NEW THING FROM CODE.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://media.istockphoto.com/id/1423550628/photo/multi-tasking-computer-programmers-working-in-a-modern-office.jpg?s=612x612&w=is&k=20&c=3RkKfh_TgKZJ6-X-JxNbP0hmc-AFzcbbm9TlFoZgzhs="
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Our Office</h5>
          <p>
            this is a our place in Digital Academy.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;