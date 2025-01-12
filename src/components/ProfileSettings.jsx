import { Component } from "react";
import "../style.css";

class ProfileSettings extends Component {
  render() {
    return (
      <main className="w-75 m-auto py-5">
        <h1 className="h2 text-white-50">Account</h1>
        <hr className="border border-secondary my-3" />
        <div className="d-md-flex justify-content-between">
          <div>
            <h2 className="h4 text-white-50">MEMBERSHIP & BILLING</h2>
            <button
              type="button"
              className="bg-secondary-subtle fs-5 p-2 px-5 px-md-3 shadow border-0"
            >
              Cancel Membership
            </button>
          </div>
          <div className="accountInfo">
            <div className="mt-2">
              <div className="d-flex justify-content-between">
                <p className="text-black fw-bold text-white-50">Epicoder1@gmail.com</p>
                <a href="javascript:void(0)" className="d-block text-end text-white text-decoration-none">Change account email</a>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-white-50">Password:**********</p>
                <a href="javascript:void(0)"className="d-block text-end text-white text-decoration-none">Change password</a>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-white-50">Phone: 329 631 3393</p>
                <a href="javascript:void(0)"className="d-block text-end text-white text-decoration-none">Change phone number</a>
              </div>
            </div>
            <hr className="border border-secondary my-3" />
            <div className="d-flex justify-content-between">
              <div>
                <img src="" width="80em" />
                <p className="text-black fw-bold text-white-50">Epicoder1@gmail.com</p>
              </div>
              <div>
                <a href="javascript:void(0)" className="d-block text-end text-white text-decoration-none">
                  Update payment info
                </a>
                <a href="javascript:void(0)" className="d-block text-end text-white text-decoration-none">
                  Billing details
                </a>
                <a href="javascript:void(0)" className="d-block text-end text-white text-decoration-none">
                  Redeem giftcard or promo code
                </a>
                <a href="javascript:void(0)" className="d-block text-end text-white text-decoration-none">
                  Where to buy gift cards?
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="border border-secondary my-3" />
        <div className="d-md-flex justify-content-md-between">
          <div className="d-md-flex justify-content-lg-between plan">
            <h2 className="h4 text-white-50">PLAN DETAILS</h2>
            <p className="fw-bold ms-3 text-white-50">
              Standard<i className="bi bi-badge-hd "></i>
            </p>
          </div>
          <a href="javscript:void(0)" className="d-block text-end text-white text-decoration-none">
            Change plan
          </a>
        </div>
        <hr className="border border-secondary my-3" />
        <div className="d-md-flex justify-content-lg-between settings">
          <h2 className="h4 text-white-50 me-md-5">SETTINGS</h2>
          <div>
            <a
              href="javscript:void(0)"
              className="d-block ms-md-3 mt-3 mt-md-0 text-white text-decoration-none"
            >
              Parent Controls
            </a>
            <a href="javscript:void(0)" className="d-block mt-3 ms-md-3 text-white text-decoration-none">
              Test Partecipation
            </a>
            <a href="javscript:void(0)" className="d-block mt-3 ms-md-3 text-white text-decoration-none">
              Manage download devices
            </a>
            <a href="javscript:void(0)" className="d-block mt-3 ms-md-3 text-white text-decoration-none">
              Activate a device
            </a>
            <a href="javscript:void(0)" className="d-block mt-3 ms-md-3 text-white text-decoration-none">
              Recent device streaming acitivity
            </a>
            <a href="javscript:void(0)" className="d-block mt-3 ms-md-3 text-white text-decoration-none">
              Signout all devices
            </a>
          </div>
        </div>
        <hr className="border border-secondary my-3" />
        <div className="d-md-flex justify-content-lg-between myProfile">
          <h2 className="h4 text-white-50">MY PROFILE</h2>
          <div className="ms-md-5">
            <div className="d-flex justify-content-between">
              <p className="fw-bold text-white">
                <img src="src\assets\bf4274c4a610e7781296e51d0681447b.jpg" style={{ width: "55px" }}  />
                &nbsp; Epicoder #1
              </p>
              <div className="ms-md-5">
                <a href="javascript:void(0)" className="d-block text-end text-white text-decoration-none">
                  Manage profiles
                </a>
                <a href="javascript:void(0)" className="d-block text-end text-white text-decoration-none">
                  Add profile email
                </a>
              </div>
            </div>
            <a href="javscript:void(0)" className="d-block mt-3 text-white text-decoration-none">
              Language
            </a>
            <a href="javscript:void(0)" className="d-block mt-3 text-white text-decoration-none">
              Playback settings
            </a>
            <a href="javscript:void(0)" className="d-block mt-3 text-white text-decoration-none">
              Subtitle appearence
            </a>
            <a href="javscript:void(0)" className="d-block mt-3 text-white text-decoration-none">
              Viewing activity
            </a>
            <a href="javscript:void(0)" className="d-block mt-3 text-white text-decoration-none">
              Ratings
            </a>
          </div>
        </div>
      </main>
    );
  }
}

export default ProfileSettings;
