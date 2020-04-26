import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import About from './components/about';
import ClicksHeader from './components/clicksHeader';
import MyClicks from './components/myClicks';
import ContactUs from './components/contact';
import ContactHeader from './components/contactHeader';
import Footer from './components/footer';
import { getFirebase } from './firebase';

const Home = () => {
	const [loading, setLoading] = useState(true);
	const [images, setImages] = useState([]);

	if (loading && !images.length) {
		getFirebase()
			.database()
			.ref('/photo')
			.orderByChild('_id')
			.once('value')
			.then((snapshot) => {
				console.log(snapshot.val());

				let posts = [];
				const snapshotVal = snapshot.val();
				for (let _id in snapshotVal) {
					posts.push(snapshotVal[_id]);
				}

				const newestFirst = posts.reverse();
				setImages(newestFirst);
				setLoading(false);
			});
	}

	return (
		<div className="App">
			<Navbar />
			<Header />
			<About />
			<ClicksHeader />
			{!loading && (
				<MyClicks
					// data={[
					// 	{
					// 		name: 'Golden Gate Bridge',
					// 		subTitle: 'San Francisco, California',
					// 		imgurl: 'images/pics/1585555921691_IMG-20200322-WA0011.jpeg',
					// 		description:
					// 			'The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide strait connecting San Francisco Bay and the Pacific Ocean.',
					// 	},
					// 	{
					// 		name: 'Times Square',
					// 		subTitle: 'New York',
					// 		description:
					// 			'Times Square is a major commercial intersection, tourist destination, entertainment center, and neighborhood in the Midtown Manhattan section of New York City, at the junction of Broadway and Seventh Avenue.',
					// 		imgurl: 'images/pics/UNADJUSTEDNONRAW_thumb_3a3a.jpeg',
					// 	},
					// ]}
					data={images}
				/>
			)}
			<ContactHeader />
			<ContactUs />
			<Footer />
		</div>
	);
};

export default Home;
