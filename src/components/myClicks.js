import React from "react";
import { withRouter, Redirect, Link } from "react-router-dom";

const MyClicks = ({ data }, props, context) => {
  const handleClick = () => {
    context.history.push("/photoDetails");
    console.log("Clicked");
    // photoDetails
  };

  return (
    <section id="photo">
      <div className="row">
        <div className="tewelve columns collapsed">
          <h1>Check out some of my photos</h1>
          <div id="photo-wrapper" className="bgrid-halves s-bgrid-thirds cf">
            {data &&
              data.map(item => {
                return (
                  <div className="columns photo-item">
                    <div className="item-wrap">
                      <Link
                        to={{
                          pathname: "/photoDetails",
                          state: {
                            item
                          }
                        }}
                      >
                        <img src={`${item.imgurl}`} className="item-img" />
                        <div className="overlay">
                          <div className="photo-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(MyClicks);
