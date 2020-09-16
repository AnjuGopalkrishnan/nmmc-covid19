import React, { Component } from "react";
import Accordion from 'react-bootstrap/Accordion'
import { Card } from 'react-bootstrap'

class Hospitals extends Component {
  render() {

    return (
      <Accordion defaultActiveKey="0">
        <h5 style={{ padding: "10px", textAlign: "-webkit-center" }}>Navi Mumbai Covid-19 Hospitals and Care centres </h5>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            BELAPUR
    </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul><u>Dedicated COVID Health Centers / Dedicated COVID Hospitals</u></ul>
              <ul><a href="https://www.mgmhospitalcbd.com/" target="_blank">MGM Hospital</a></ul>
              <ul><a href="https://www.apollohospitals.com/locations/india/mumbai" target="_blank">Apollo Hospital</a></ul>
              <ul><u>COVID Care Centers (CCC)</u></ul>
              <ul>Multi-Purpose Bhavan</ul>
              <ul>India Bulls Residency Panvel</ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            NERUL
    </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <ul><u>Dedicated COVID Health Centers / Dedicated COVID Hospitals</u></ul>
              <ul><a href="http://ternahospital.org/" target="_blank">Terna Hospital</a></ul>
              <ul><a href="https://www.neurogen.in/contact" target="_blank">Neurogen BSI Hospital</a></ul>
              <ul><a href="https://sunshinehospital.org/" target="_blank">Sunshine Hospital</a></ul>
              <ul><a href="http://www.dypatilhospitals.com/" target="_blank">Dr. D. Y. Patil Hospital</a></ul>
              <ul><a href="https://www.justdial.com/Mumbai/Manak-Health-Care-Hospital-Near-Rajiv-Gandhi-Bridge-Sector-No-8-Nerul/022PG022553_BZDET" target="_blank">New Manak hospital</a></ul>
              <ul><u>COVID Care Centers (CCC)</u></ul>
              <ul>Agri Koli Bhavan</ul>
              <ul>Nerul Multipurpose Hall</ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            SANPADA
    </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <ul><u>Dedicated COVID Health Centers / Dedicated COVID Hospitals</u></ul>
              <ul><a href="https://mpcthospital.in/contact-us/" target="_blank">MPCT Hospital</a></ul>
              <ul><a href="https://newmillenniumhospital.in/" target="_blank">New Millennium hospital</a></ul>
              <ul>MGM Hospital</ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            VASHI
    </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <ul><u>Dedicated COVID Health Centers / Dedicated COVID Hospitals</u></ul>
              <ul><a href="https://www.nmmc.gov.in/navimumbai/general-hospital-vashi-cps" target="_blank">NMMC General Hospital</a></ul>
              <ul><a href="https://www.fortishealthcare.com/india/hiranandani-fortis-network-hospital-in-vashi-maharashtra" target="_blank">Fortis Hospital</a></ul>
              <ul><a href="https://pkchospital.com/" target="_blank">PKC Hospital</a></ul>
              <ul><a href="http://www.acecec.com/contact.php" target="_blank">CIDCO Exhibition Center</a></ul>
              <ul><a href="http://www.mgmhospitalvashi.net/site/web/sites/home/homepage" target="_blank">MGM Hospital</a></ul>
              <ul><u>COVID Care Centers (CCC)</u></ul>
              <ul>K Star Vashi DCCC</ul>
              <ul>CIDCO Exhibition Hall</ul>
              <ul>Multi-Purpose Cultural Bhavan Sec 14</ul>
              <ul>ETC VASHI</ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            TURBHE
    </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <ul><u>Dedicated COVID Health Centers / Dedicated COVID Hospitals</u></ul>
              <ul><a href="https://www.justdial.com/Mumbai/Radha-Soami-Satsang-Beas-Turbhe/022PXX22-XX22-180424175400-P1Z1_BZDET" target="_blank">Radha Swami Satsang Hall</a></ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="5">
            KOPERKHAIRNE
    </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              <ul><u>Dedicated COVID Health Centers / Dedicated COVID Hospitals</u></ul>
              <ul><a href="https://www.reliancehospitals.com/" target="_blank">Reliance Hospital</a></ul>
              <ul><a href="https://www.justdial.com/Mumbai/Nirmal-Multi-Speciality-Hospital-Opposite-Railway-Station-Beside-Central-Bank-Of-India-Kopar-Khairane/022PXX22-XX22-110122133048-W2W1_BZDET" target="_blank">Nirmal Multispeciality Hospital. Contact : 9967745745</a></ul>
              <ul><a href="https://www.justdial.com/Mumbai/Rajpal-Hospital-Sector-10-Near-Dmart-Kopar-Khairane/022PXX22-XX22-160917145019-X8M6_BZDET" target="_blank">Rajpal Hospital</a></ul>
              <ul><a href="https://www.justdial.com/Mumbai/Siddhika-Super-Specialty-Hospital-Kopar-Khairane/022PXX22-XX22-191116070225-J9B4_BZDET" target="_blank">Siddhika Hospital</a></ul>
              <ul>Export House Building</ul>
              <ul><u>COVID Care Centers (CCC)</u></ul>
              <ul>Koparkhairne Samaj Mandir</ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="6">
            GHANSOLI
    </Accordion.Toggle>
          <Accordion.Collapse eventKey="6">
            <Card.Body>
              <ul><u>Dedicated COVID Health Centers / Dedicated COVID Hospitals</u></ul>
              <ul><a href="https://www.justdial.com/Mumbai/Laxmi-Multispeciality-Hospital-And-Icu-Besides-Bank-Of-India-Ghansoli/022PXX22-XX22-140220235325-C9X5_BZDET" target="_blank">Laxmi Multispeciality Hospital</a></ul>
              <ul><a href="https://www.justdial.com/Mumbai/Frisson-Multi-Speciality-Hospital-Near-Mother-Merry-School-Ghansoli/022PXX22-XX22-170901091721-G5N1_BZDET" target="_blank">Frisson Multispeciality hospital</a></ul>
              <ul><a href="https://www.justdial.com/Mumbai/Venus-Multispeciality-Hospital-Opposite-Rajendra-Ashram-Sector-No-1-Ghansoli/022PXX22-XX22-181024133100-Z3C3_BZDET" target="_blank">Venus multispeciality hospital</a></ul>
              <ul><u>COVID Care Centers (CCC)</u></ul>
              <ul>Reliance IT Park</ul>
              <ul>Mango suites mahape</ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="7">
            AIROLI
    </Accordion.Toggle>
          <Accordion.Collapse eventKey="7">
            <Card.Body>
              <ul><u>Dedicated COVID Health Centers / Dedicated COVID Hospitals</u></ul>
              <ul><a href="https://indravatihospital.com/" target="_blank">Indravati Hospital</a></ul>
              <ul><a href="http://www.heritagehealthcare.in/" target="_blank">Heritage Hospital</a></ul>
              <ul><u>COVID Care Centers (CCC)</u></ul>
              <ul>Airoli Samaj Mandir</ul>
              <ul>Leva Patidar samaj Hall</ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <br />
        <p>Dedicated COVID Hospitals (DCH) : Treatment of corona positive individuals with severe symptoms
      <br />Dedicated COVID Health Centers (DCHC) : Treatment of moderately symptomatic corona positive individuals
      <br />COVID Care Centers (CCC) : For patients with mild symptoms and asymptomatic</p>

  Please visit <a href="http://nmmchealthfacilities.com/HospitalInfo/showhospitalist" target="_blank">NMMC Health facilites website</a> to get real-time hospital beds/ICU/Ventilator availability
        <br /><br /><small><i class="fa fa-lightbulb-o" /> Click on place name to see hospital list</small>
      </Accordion>
    );
  }
}

export default Hospitals;