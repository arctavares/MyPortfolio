import { Carousel } from 'react-carousel-minimal';
import projectsData from '../data/projects.json';

function ProjectsCarousel() {

  const captionStyle = {
    fontSize: '2em',
    fontWeight: '600',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h1 className="subTitleProject">My Projects</h1>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={projectsData}
            time={3500}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="50px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="top"
            automatic={true}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="#0a192f   "
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            thumbnailHeight="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectsCarousel;