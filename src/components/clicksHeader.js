import React from 'react';

const ClicksHeader = () => {
	return (
		<React.Fragment>
			<header id="workHeader">
				<div className="row banner">
					<div className="banner-text">
						<h1 className="responsive-headline" style={{ textAlign: 'center' }}>
							My Pics
						</h1>
					</div>
				</div>
				<p className="scrolldown">
					<a className="smoothscroll" href="#photo">
						<i className="icon-down-circle" />
					</a>
				</p>
			</header>
		</React.Fragment>
	);
};

export default ClicksHeader;
