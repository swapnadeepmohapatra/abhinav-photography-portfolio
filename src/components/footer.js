import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<footer>
				<div className="row">
					<div className="twelve columns">
						<ul className="social-links">
							<h2>This Website was developed by Swapnadeep Mohapatra.</h2>
							<h5 style={{ fontWeight: 'lighter', color: '#c1c1c1' }}>
								&#169; {new Date().getFullYear()},{' '}
								<a style={{ fontWeight: 'lighter', color: '#fafafa' }} href="http://swapnadeep.com/">
									Swapnadeep Mohapatra
								</a>{' '}
								| All right reserved.
							</h5>

							{/* {resumeData.socialLinks &&
                resumeData.socialLinks.map(item => {
                  return (
                    <li>
                      <a href={item.url}>
                        <i className={item.className} />
                      </a>
                    </li>
                  );
                })} */}
						</ul>
					</div>
					<div id="go-top">
						<a className="smoothscroll" title="Back to Top" href="#home">
							<i className="icon-up-open" />
						</a>
					</div>
				</div>
			</footer>
		);
	}
}
