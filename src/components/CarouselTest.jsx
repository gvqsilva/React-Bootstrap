import Carousel from 'react-bootstrap/Carousel';

function CarouselTest() {
    return (
        <Carousel>
            <Carousel.Item>
                <img src="https://images.hdqwalls.com/download/minimal-landscape-sunrise-4k-jy-1600x900.jpg" alt="" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://images.hdqwalls.com/download/minimal-landscape-sunrise-4k-jy-1600x900.jpg" alt="" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://images.hdqwalls.com/download/minimal-landscape-sunrise-4k-jy-1600x900.jpg" alt="" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselTest;