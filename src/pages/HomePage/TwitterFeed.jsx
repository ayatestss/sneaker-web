import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const TwitterFeed = () => {
  return (
    <div style={{ 
      width: '100%', // set the width of container to be 100% of its parent component
      maxWidth: '800px', // limit the maximum width of container to 800px
      overflow: 'auto', // add scroll bars if the content inside overflows the container
      margin: '0 auto', // center the container horizontally
      background: 'black'
    }}>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="elonmusk"
        options={{height: 400, theme: 'dark', transparent: true}}
      />
    </div>
  );x
}

export default TwitterFeed;
