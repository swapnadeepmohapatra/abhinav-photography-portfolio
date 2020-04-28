import React from 'react';

function Feedback() {
	return (
		<section id="feedback">
			<div className="container">
				<div className="row">
					<div className="col m10 offset-m1 s12">
						<p className="center-align">Feel free to put down any of your feedback</p>
						<div className="row">
							<form className="col m8 offset-m2 s12">
								<div className="row">
									<div className="input-field col s12">
										<label for="name">Name</label>
										<input id="name" type="text" />
									</div>
									<div className="input-field col s12">
										<label for="email">Email</label>
										<input id="email" type="email" className="form-input" />
									</div>
									<div className="input-field col s12">
										<label for="message">Message</label>
										<textarea id="message" className="materialize-textarea"></textarea>
									</div>
								</div>

								<div className="divider"></div>
								<div className="row">
									<div className="col m12">
										<p className="right-align">
											<button
												className="btn btn-large waves-effect waves-light"
												type="button"
												name="action"
											>
												Send Message
											</button>
										</p>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Feedback;
