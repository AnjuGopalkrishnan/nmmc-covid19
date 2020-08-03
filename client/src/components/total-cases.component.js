import React, { Component } from 'react';
import { Card, CardDeck } from 'react-bootstrap'
import desceaseIcon from '../icon/skull.png';
import positiveIcon from '../icon/microscope.png';
import recoverIcon from '../icon/shield.png';
import activeIcon from '../icon/first-aid-kit.png';

export default class TotalCaseBox extends Component {
  render() {
    var options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };

    //calculate rise/drop in count
    let lastTwoDays = [];
    let riseDropIconPos , riseDropIconRec, riseDropIconPosRecn, riseDropIconPosDec = "";
    let todayRecovering = 0;
    if(this.props.dailyRise){
      lastTwoDays = this.props.dailyRise.slice(-2);

      if(lastTwoDays[1].dailytotalPosiive > lastTwoDays[0].dailytotalPosiive){
        riseDropIconPos = <i class="fa fa-level-up"></i>
      }else if(lastTwoDays[1].dailytotalPosiive < lastTwoDays[0].dailytotalPosiive){
        riseDropIconPos = <i class="fa fa-level-down"></i>
      }else if(lastTwoDays[1].dailytotalPosiive == lastTwoDays[0].dailytotalPosiive){
        riseDropIconPos = <i class="fa fa-arrows-h"></i>
      }

      if(lastTwoDays[1].dailytotalRecovered > lastTwoDays[0].dailytotalRecovered){
        riseDropIconRec = <i class="fa fa-level-up"></i>
      }else if(lastTwoDays[1].dailytotalRecovered < lastTwoDays[0].dailytotalRecovered){
        riseDropIconRec = <i class="fa fa-level-down"></i>
      }else if(lastTwoDays[1].dailytotalRecovered == lastTwoDays[0].dailytotalRecovered){
        riseDropIconRec = <i class="fa fa-arrows-h"></i>
      }

      if(lastTwoDays[1].dailyDeceased > lastTwoDays[0].dailyDeceased){
        riseDropIconPosDec = <i class="fa fa-level-up"></i>
      }else if(lastTwoDays[1].dailyDeceased < lastTwoDays[0].dailyDeceased){
        riseDropIconPosDec = <i class="fa fa-level-down"></i>
      }else if(lastTwoDays[1].dailyDeceased == lastTwoDays[0].dailyDeceased){
        riseDropIconPosDec = <i class="fa fa-arrows-h"></i>
      }

      let lastRecovering = lastTwoDays[0].dailytotalPosiive - lastTwoDays[0].dailytotalRecovered - lastTwoDays[0].dailyDeceased;
      todayRecovering = lastTwoDays[1].dailytotalPosiive - lastTwoDays[1].dailytotalRecovered - lastTwoDays[1].dailyDeceased;
      if(todayRecovering > lastRecovering){
        riseDropIconPosRecn = <i class="fa fa-level-up"></i>
      }else if(todayRecovering < lastRecovering){
        riseDropIconPosRecn = <i class="fa fa-level-down"></i>
      }else if(todayRecovering == lastRecovering){
        riseDropIconPosRecn = <i class="fa fa-arrows-h"></i>
      }
    }
    return (
      <div style={{ "font-size": "19px" }}>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div style={{ "font-size": "15px", alignItems:"center" }}><i class="fa fa-clock-o" aria-hidden="true"></i>  Last updated {this.props.totals ? new Date(this.props.totals[0].updatedAt).toLocaleString("en-IN", options) : ""}</div>
        <br />
        <CardDeck style={{display: "flex"}}>
          <Card
            bg='danger'
            text='white'
            style={{ width: '18rem', height: '9rem', marginRight:"10px" }}
            className="mb-2"
          >
            <Card.Header>Confirmed </Card.Header>
            <Card.Body>
              <Card.Title> 
                {this.props.totals ? this.props.totals[0].totalPosiive : ""} 
                <span style={{ float:"right", opacity: 0.9 }}><img src={positiveIcon} /></span> 
                <small style={{float:"right", paddingRight:"10px", paddingTop:"5px"}}>{riseDropIconPos}&nbsp;{lastTwoDays.length > 0 ? lastTwoDays[1].dailytotalPosiive : ""}</small>
              </Card.Title>
            </Card.Body>
          </Card>

          <Card
            bg='success'
            text='white'
            style={{ width: '18rem', height: '9rem', marginRight:"10px" }}
            className="mb-2"
          >
            <Card.Header>Recovered</Card.Header>
            <Card.Body>
              <Card.Title> 
                {this.props.totals ? this.props.totals[0].totalRecovered : ""} 
                <span style={{ float:"right", opacity: 0.9 }}><img src={recoverIcon} /></span>
                <small style={{float:"right", paddingRight:"10px", paddingTop:"5px"}}>{riseDropIconRec}&nbsp;{lastTwoDays.length > 0 ? lastTwoDays[1].dailytotalRecovered : ""}</small>
              </Card.Title>

            </Card.Body>
          </Card>


        </CardDeck>
        <CardDeck style={{display: "flex"}}>
          <Card
            bg='info'
            text='white'
            style={{ width: '18rem', height: '9rem', marginRight:"10px" }}
            className="mb-2"
          >
            <Card.Header>Recovering</Card.Header>
            <Card.Body>
              <Card.Title> 
                {this.props.totals ? this.props.totals[0].totalPosiive - this.props.totals[0].totalRecovered - this.props.totals[0].totalDeceased : ""} 
                <span style={{ float:"right", opacity: 0.9 }}><img src={activeIcon} /></span> 
                <small style={{float:"right", paddingRight:"15px", paddingTop:"5px"}}>{riseDropIconPosRecn}&nbsp;{todayRecovering}</small>
              </Card.Title>
            </Card.Body>
          </Card>

          <Card
            bg='secondary'
            text='white'
            style={{ width: '18rem', height: '9rem', marginRight:"10px" }}
            className="mb-2"
          >
            <Card.Header>Deceased</Card.Header>
            <Card.Body>
              <Card.Title>   
                {this.props.totals ? this.props.totals[0].totalDeceased : ""} 
                <span style={{ float:"right", opacity: 0.9 }}><img src={desceaseIcon} /></span>
                <small style={{float:"right", paddingRight:"35px", paddingTop:"5px"}}>{riseDropIconPosDec}&nbsp;{lastTwoDays.length > 0 ? lastTwoDays[1].dailyDeceased : ""}</small>
              </Card.Title>
            </Card.Body>
          </Card>
        </CardDeck>
        
      </div>

    )
  }
}