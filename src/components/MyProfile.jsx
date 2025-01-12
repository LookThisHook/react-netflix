import { Component } from "react";
import "../style.css";

class MyProfile extends Component {
  render() {
    return (
      <>
        <main className="bg-netflix d-flex flex-column align-items-center  pb-5">
          <div>
            <h1 className="text-white mt-5">Edit Profile</h1>
            <div className="py-4 d-lg-flex align-items-start border-top border-bottom border-dark border-2">
              <img src="src\assets\bf4274c4a610e7781296e51d0681447b.jpg" width="110px" className="me-3" />
              <div className="mt-3 mt-lg-0">
                <div>
                  <input
                    type="text"
                    className="bg-secondary border border-1 border-dark text-white p-1 px-2 pe-5"
                    placeholder="Epicoder #1"
                  />
                  <p className="m-0 mt-4 text-white">Language:</p>
                  <button
                    className="px-2 bg-black text-white border border-2 border-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    English &nbsp; &nbsp;
                  </button>
                </div>
                <div className="maturity py-4 mt-4 border-top border-bottom border-dark border-2">
                  <p className="m-0 text-white">Maturity Settings:</p>
                  <button
                    className="px-1 bg-secondary text-white border-0 p-1 px-2 mt-2"
                    type="button"
                  >
                    ALL MATURITY RATINGS
                  </button>
                  <p className="text-white small m-0 mt-2">
                    Show titles of all maturity ratings for this Profile
                  </p>
                  <button
                    className="spacing p-1 px-3 mt-3 bg-netflix text-secondary border border-2 border-secondary"
                    type="button"
                  >
                    EDIT
                  </button>
                </div>
                <div>
                  <p className="m-0 text-white">Autoplay controls</p>

                  <p className="text-white m-0">
                    <input type="checkbox" className="me-1 checkbox" />
                    Autoplay next episode in a series on all devices.
                  </p>
                  <p className="text-white m-0">
                    <input type="checkbox" className="me-1 checkbox" />
                    Autoplay previews while browsing on all devices.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="spacing p-1 px-3 mt-3 me-2 bg-white text-black border-0 fw-medium border border-2 border-white d-block d-lg-inline-block"
              type="button"
            >
              SAVE
            </button>
            <button
              className="fw-medium spacing p-1 px-3 mt-3 me-2 bg-netflix text-secondary border border-2 border-secondary d-block d-lg-inline-block"
              type="button"
            >
              CANCEL
            </button>
            <button
              className="fw-medium spacing p-1 px-3 mt-3 bg-netflix text-secondary border border-2 border-secondary d-block d-lg-inline-block"
              type="button"
            >
              DELETE PROFILE
            </button>
          </div>
        </main>
      </>
    );
  }
}

export default MyProfile;
