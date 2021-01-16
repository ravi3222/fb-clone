import React from "react";

function Widgets() {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcnbc&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>

      {/* <iframe
        width="320"
        height="220"
        src="https://www.youtube.com/embed/B-kxUMHBxNo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
        Helllo
      </iframe> */}
    </div>
  );
}

export default Widgets;
