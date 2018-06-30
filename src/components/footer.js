import React from 'react';

import linkedinLogo from '../assets/images/footer/linkedin.jpg';
import githubLogo from '../assets/images/footer/github.png';

export default props =>{
    return(
        <section className="footer">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <h3>Let's Connect!</h3>
                <hr className="sub"/>
                <p className="text-faded contact dark"></p>
                
                <div className="row footerRow">
                  <div className="footer-links">
                    <a className="" target="_blank" href="https://github.com/midstreamer"><img id="github-logo" src={githubLogo} alt="Github" /><br/>Github</a>
                  </div>
                <div className="footer-links">
                    <a target="_blank" href="https://www.linkedin.com/in/chad-j-alessi-b00a012/"><img id="linkedin-logo" src={linkedinLogo} alt="LinkedIn" /><br/>LinkedIn</a>
                </div>

                </div>
 
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            ©2018 Chad Alessi.
            <div className="right">Built with React and MaterializeCSS</div> 
            </div>
          </div>
        </section>
    );
}