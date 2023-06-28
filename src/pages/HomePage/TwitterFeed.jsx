import React, { useEffect } from 'react';

const TwitterFeed = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <div className="twitter-embed" style={{
      height: '200px', // adjust the height to your preference
      width: '300px', // adjust the width to your preference
      overflow: 'auto', // add scroll bars
      margin: '0 auto', // center the container
      padding: '10px', // add some padding around the tweets
      borderRadius: '10px', // round the corners of the box
      background: '#F5F8FA' // light gray background to match Twitter's style
    }}>
      <a className="twitter-timeline" href="https://twitter.com/elonmusk?ref_src=twsrc%5Etfw">Tweets by elonmusk</a>
    </div>
  );
}

export default TwitterFeed;
