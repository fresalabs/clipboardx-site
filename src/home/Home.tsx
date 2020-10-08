import React from 'react';
import Features from './Features';
import Heading from "./Heading";

class Home extends React.Component<{}> {
  render() {
    return (
      <div>
        <Heading/>
        <Features />
      </div>
    );
  }
}

export default Home;
