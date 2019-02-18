import React, { Component } from 'react';
import './styles.scss';
import './footer.css';
import { SocialIcon } from 'react-social-icons';
import {Link, NavLink} from "react-router-dom";
import About from "../About/About";

class Footer extends Component{
    render() {
        return (
          <div className='footer'>
              <div className="row">
                  <div className="col-md-12">
                      <footer className="flex-rw">
                          <ul className="footer-list-top">
                              <li>
                                  <NavLink exact={true} to="/about" className="generic-anchor footer-list-anchor" itemProp="significantLink"> <h4 className="footer-list-header">About Unsplash</h4></NavLink></li>
                          </ul>
                          <ul className="footer-list-top">
                              <li>
                                  <a href='https://unsplash.com/terms' className="generic-anchor footer-list-anchor" itemProp="significantLink"> <h4 className="footer-list-header">Terms and Conditions</h4></a></li>
                          </ul>
                          <ul className="footer-list-top">
                              <li>
                                  <a href='https://medium.com/unsplash?utm_source=unsplash&utm_medium=referral' className="generic-anchor footer-list-anchor" itemProp="significantLink"> <h4 className="footer-list-header">Blog</h4></a></li>
                          </ul>

                          <section className="footer-social-section flex-rw">
      <span className="footer-social-overlap footer-social-connect">
      CONNECT <span className="footer-social-small">with</span> US
      </span>
                              <span className="footer-social-overlap footer-social-icons-wrapper">
                              <SocialIcon url="http://instagram.com/unsplash" />
                              <SocialIcon url="http://facebook.com/unsplash" />
                              <SocialIcon url="http://google.com/unsplash" />
                              <SocialIcon url="http://youtube.com/unsplash" />
                              <SocialIcon url="http://vimeo.com/unsplash" />
                              <SocialIcon url="http://pinterest.com/unsplash" />
                              </span>
                          </section>
                          <section className="footer-bottom-section flex-rw">
                              <div className="footer-bottom-wrapper">
                                  <i className="fa fa-copyright" >

                                  </i> 2019 Unsplash in <address className="footer-address">Bergen, NY</address><span
                                  className="footer-bottom-rights"> - All Rights Reserved - </span>
                              </div>
                          </section>
                      </footer>
                  </div>
              </div>          </div>
        );
    }
}

export default Footer;