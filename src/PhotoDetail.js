import React from 'react';
import { Link } from 'react-router-dom';

function PhotoDetail(props) {
	const { name, imgurl, description, subTitle } = props.location.state.item;
	const imageUrl = imgurl.split('/')[2];
	console.log(imageUrl);

	return (
		<div
			className="App "
			style={{
				margin: 0,
				overflow: 'hidden',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				background: '#1e1e1e',
				flexDirection: 'column',
				height: '100%',
			}}
		>
			<nav className="photo-details">
				<ul id="nav">
					<li>
						<Link to="/">
							<button className="back-btn">Go Back</button>
						</Link>
					</li>
				</ul>
			</nav>
			<img
				alt="some images"
				src={`${imgurl}`}
				className="item-img"
				style={{
					marginTop: '30px',
					boxShadow: '5px 5px 10px #1f2225, -5px -5px 10px #41464d',
					background: '#303439',
					borderRadius: '10px',
					padding: 10,
				}}
			/>
			<div style={{ marginLeft: 20, marginRight: 20 }}>
				<h1 style={{ color: '#fff' }}>{name}</h1>
				<h3 style={{ color: '#99AAAB' }}>{subTitle}</h3>
				<p style={{ color: '#fff' }}>{description}</p>
			</div>
			<footer>Swapnadeep</footer>
		</div>
	);
}

export default PhotoDetail;
