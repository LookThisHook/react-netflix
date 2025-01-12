import { Component } from "react";
import MyROW from "./MyROW";

class MyHome extends Component {
  render() {
    return (
      <div className="px-2">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4">TV Shows</h2>
            <div className="btn-group" role="group">
              <div className="dropdown ms-4 mt-1">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ backgroundColor: "#221f1f" }}
                >
                  Genres
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Comedy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Drama
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Thriller
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <i className="bi bi-grid icons"></i>
            <i className="bi bi-grid-3x3 icons"></i>
          </div>
        </div>
        <h4>Trending Now</h4>
        <div className="row mb-4">
          <MyROW search="Marvel" />
        </div>
        <h4>Watch it Again</h4>
        <div className="row mb-4">
          <MyROW search="harry potter" />
        </div>
        <h4>New Releases</h4>
        <div className="row mb-4">
          <MyROW search="Anime" />
        </div>
      </div>
    );
  }
}

export default MyHome;
