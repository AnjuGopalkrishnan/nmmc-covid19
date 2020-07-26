import React, { Component } from 'react';
import { Map, CircleMarker, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

class MapComponent extends Component {

  render() {
    let data = {
        place: [
            { "name": "Belapur", "coordinates": [73.03909472408442, 19.01898695], "cases": this.props.caseList ? this.props.caseList.filter(p => p.placeName === "Belapur").map(c => c.Positive)[0] : 0 },
            { "name": "Nerul", "coordinates": [73.01813957492513, 19.033611800000003], "cases": this.props.caseList ? this.props.caseList.filter(p => p.placeName === "Nerul").map(c => c.Positive)[0] : 0 },
            { "name": "Vashi", "coordinates": [72.99904980384244, 19.063404050000003], "cases": this.props.caseList ?this.props.caseList.filter(p => p.placeName === "Vashi").map(c => c.Positive)[0] : 0 },
            { "name": "Turbhe", "coordinates": [73.01766154369602, 19.0761648], "cases": this.props.caseList ? this.props.caseList.filter(p => p.placeName === "Turbhe").map(c => c.Positive)[0] : 0 },
            { "name": "Koperkhairane", "coordinates": [72.9983561, 19.1000811], "cases": this.props.caseList ? this.props.caseList.filter(p => p.placeName === "Koperkhairane").map(c => c.Positive)[0] : 0 },
            { "name": "Ghansoli", "coordinates": [73.00699279145043, 19.11637965], "cases": this.props.caseList ? this.props.caseList.filter(p => p.placeName === "Ghansoli").map(c => c.Positive)[0] : 0 },
            { "name": "Airoli", "coordinates": [72.99940185331164, 19.158514699999998], "cases": this.props.caseList ? this.props.caseList.filter(p => p.placeName === "Airoli").map(c => c.Positive)[0] : 0 },
            { "name": "Digha", "coordinates": [72.99608230590822, 19.180354659827724], "cases": this.props.caseList ? this.props.caseList.filter(p => p.placeName === "Digha").map(c => c.Positive)[0] : 0 }
        ],
        minLat: 19.033559718886284,
        maxLat: 19.175166344677702,
        minLong: 72.98423767089845,
        maxLong: 73.00535202026369
    }


    var centerLat = (data.minLat + data.maxLat) / 2;
    var distanceLat = data.maxLat - data.minLat;
    var bufferLat = distanceLat * 0.05;
    var centerLong = (data.minLong + data.maxLong) / 2;
    var distanceLong = data.maxLong - data.minLong;
    var bufferLong = distanceLong * 0.05;
    return (
      <div>
        <Map
          style={{ height: "480px", width: "100%" }}
          zoom={1}
          center={[centerLat, centerLong]}
          bounds={[
            [data.minLat - bufferLat, data.minLong - bufferLong],
            [data.maxLat + bufferLat, data.maxLong + bufferLong]
          ]}
        >
          <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {data.place.map((city, k) => {
            return (
              <CircleMarker
                key={k}
                center={[city["coordinates"][1], city["coordinates"][0]]}
                radius={20 * Math.log(city["cases"] / 8)}
                fillOpacity={0.5}
                stroke={false}
              >
                <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
                  <span>{city["name"] + ": "  + city["cases"] + " cases today" }</span>
                </Tooltip>
              </CircleMarker>)
          })
          }
        </Map>
      </div>
    );
  }
}

export default MapComponent;