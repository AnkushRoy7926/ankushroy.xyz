import "@styles/contact.css";

export default function About() {
    return (
      <div className="contact_us_6">
        <div className="responsive-container-block container">
          <form className="form-box">
            <div className="container-block form-wrapper">
              <div className="mob-text">
                <p className="text-blk contactus-head">
                  Get in Touch
                </p>
                <p className="text-blk contactus-subhead">
                  Feel free to share your views and opinions.
                </p>
              </div>
              <div className="responsive-container-block" id="i2cbk">
                <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i10mt-3">
                  <p className="text-blk input-title">
                    NAME
                  </p>
                  <input className="input" id="ijowk-3" name="FirstName" placeholder="Please enter your name..." />
                </div>
                <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="ip1yp">
                  <p className="text-blk input-title">
                    EMAIL
                  </p>
                  <input className="input" id="ipmgh-3" name="Email" placeholder="Please enter email..." />
                </div>
                <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="ih9wi">
                  <p className="text-blk input-title">
                    PHONE NUMBER
                  </p>
                  <input className="input" id="imgis-3" name="PhoneNumber" placeholder="Enter phone number... (Optional)" />
                </div>
                <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-3">
                  <p className="text-blk input-title">
                    WHAT DO YOU HAVE IN MIND ?
                  </p>
                  <textarea className="textinput" id="i5vyy-3" placeholder="Please enter query..."></textarea>
                </div>
              </div>
              <button className="submit-btn" id="w-c-s-bgc_p-1-dm-id-2">
                Submit
              </button>
            </div>
          </form>
          
        </div>
      </div>
    );
  }