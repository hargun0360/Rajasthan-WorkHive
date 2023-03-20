import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { map } from "lodash";
import {
  Badge,
  Card,
  CardBody,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import images from "../assets/images";
import companies from "../assets/images/companies";
import { geoLocation } from './geoLocation'
import { getNearbyStore } from '../Services/ApiServices'

const CardProject = () => {

   const [projects , setProjects] = useState([])

    const [bank , setBank] = useState([]);
    const [gov , setGov] = useState([]);
    const [hospital , setHospital] = useState([]);
    const [railway , setRailway] = useState([]);
    const [registration , setRegistration] = useState([]);
    const [ticket , setTicket] = useState([]);

    const {name} = useParams(); 

    const latitude = localStorage.getItem("latitude");
    const longitude = localStorage.getItem("longitude")

   useEffect(() => {
    if (!latitude && !longitude) {
        geoLocation();
      } else {
        let obj = {
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude)
        }
        getNearbyStore(obj)
        .then((res) => {
            console.log(res);
            if(name) {
                console.log(name);
                if(name == "bank"){
                    setProjects(res.data.bank_stores);
                }else if(name == "hospital"){
                    setProjects(res.data.hospital_stores);
                }else if(name == "gov"){
                    setProjects(res.data.govt_office_stores);
                }else if(name == "railway"){
                    setProjects(res.data.railway_stores);
                }else if(name == "reg"){
                    setProjects(res.data.reg_camp_stores);
                }else if(name == "ticket"){
                    setProjects(res.data.ticket_system_stores);
                }
            }
            
            setBank(res.data.bank_stores);
            setGov(res.data.govt_office_stores);
            setHospital(res.data.hospital_stores);
            setRailway(res.data.railway_stores);
            setRegistration(res.data.reg_camp_stores);
            setTicket(res.data.ticket_system_stores);
        }).catch((err) => {
            console.log(err);
        })
    }
   },[name]);



  
  return (
    <React.Fragment>
      {projects && projects.length > 0 ? projects.map((project, key) => (
        <Col xl="4" sm="6" key={key}>
          <Card>
            <CardBody>
              <div className="d-flex">
                <div className="avatar-md me-4">
                  <span className="avatar-title rounded-circle bg-light text-danger font-size-16">
                    <img src={project.profile_pic} alt="" height="30" />
                  </span>
                </div>

                <div className="flex-grow-1 overflow-hidden">
                  <h5 className="text-truncate font-size-15">
                    <Link
                      to={`/projects-overview/${project.id}`}
                      className="text-dark"
                    >
                      {project.name}
                    </Link>
                  </h5>
                  <p className="text-muted mb-4">{project.about}</p>

                  <div className="avatar-group">
                    
                  </div>
                </div>
              </div>
            </CardBody>
            <div className="px-4 py-3 border-top">
              <ul className="list-inline mb-0 d-flex">
                <li className="list-inline-item me-3">
                  <Badge  className= { project.customer && project.customer.length < 10 ?    "bg-" + "danger" : "bg-" + "success" }>
                    { project.customer && project.customer.length < 10 ?   "waiting" : "available"}
                  </Badge>
                </li>
                <li className="list-inline-item me-3" id="dueDate">
                  <i className="bx bx-calendar me-1" /> {project.timings}
                </li>
                
                  <li style={{margin:"0" , padding : "0" , cursor : "pointer"}} className="text-decoration-underline text-reset">More info <i className="mdi mdi-arrow-right"></i></li>
              
              </ul>
            </div>
          </Card>
        </Col>
      )) : null}
    </React.Fragment>
  );
};



export default CardProject;
