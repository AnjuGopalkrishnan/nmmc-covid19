import React, { Component } from 'react';

export default class Footer extends Component {


  render() {
    var style = {
      backgroundColor: "#F8F8F8",
      borderTop: "1px solid #E7E7E7",
      textAlign: "center",
      padding: "20px",
      left: "0",
      bottom: "0",
      height: "80px",
      width: "100%",
    }

    var phantom = {
      display: 'block',
      padding: '10px',
      height: '30px',
      width: '100%',
    }
    return (
      <div>
        <div style={phantom} />
        <div style={style}>
          <p><i class="fa fa-copyright"></i> 2020 <a class="w3-hover-text-green">Anju Gopalkrishnan</a>. Stay Safe!<br />
            <font size="2" >Data source : NMMC</font>
          </p>
        </div>
      </div>
    )
      ;
  }
}
