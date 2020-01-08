import React, { Component } from "react";

import Monday from "./days/Monday";
import Tuesday from "./days/Tuesday";
import Wednesday from "./days/Wednesday";
import Thursday from "./days/Thursday";
import Friday from "./days/Friday";

class WkAtAGlance extends Component {
  render () {
    return ( 
      
      <div className="waag-box">
        <h1 style={{ 
          color: "white",
          textAlign: "center",
          marginTop: "15px"
        }}>
        
        Week At A Glance
        
        </h1>

        <div className="the-days">
          <Monday />
          <Tuesday />
          <Wednesday />
          <Thursday />
          <Friday />
        </div>
      </div>
    );
  };
};

export default WkAtAGlance;
