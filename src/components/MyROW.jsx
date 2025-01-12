import { Component } from "react";
import { Spinner, Carousel } from "react-bootstrap";

class MyROW extends Component {
  state = {
    shows: [],
    isLoading: true,
  };

  getShows = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=8eb9f91f&s=" + this.props.search
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({
          shows: data.Search,
          isLoading: false,
        });
      } else {
        throw new Error("Error in API response");
      }
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false,
      });
    }
  };

  componentDidMount() {
    this.getShows();
  }

  render() {
    return (
      <>
        {this.state.isLoading && (
          <div className="text-center">
            <Spinner animation="border" variant="danger" />
          </div>
        )}

        {/* Carosello visibile solo su sm e md */}
        {!this.state.isLoading && this.state.shows.length > 0 && (
          <div className="d-none d-sm-block d-md-none d-lg-none mb-4">
            <Carousel>
              {this.state.shows.map((show) => (
                <Carousel.Item key={show.imdbID}>
                  <img
                    className="d-block w-100"
                    src={show.Poster}
                    alt={show.Title}
                    style={{ height: "625px", objectFit: "scale", width:"350px" }}
                  />
                  <Carousel.Caption>
                    <h5>{show.Title}</h5>
                    <p>{show.Year}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        )}

        {/* Griglia visibile su tutti i dispositivi */}
        <div className="d-none d-md-block">
        <div className="row ">
          {this.state.shows.map((show) => (
            <div key={show.imdbID} className="col mb-2 text-center px-1">
              <img
                className="img-fluid"
                src={show.Poster}
                alt={show.Title}
                style={{ height: "280px", objectFit: "cover", width:"200px" }}
              />
            </div>
          ))}
        </div>
        </div>
      </>
    );
  }
}
export default MyROW






