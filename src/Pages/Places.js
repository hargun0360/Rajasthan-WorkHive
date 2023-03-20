import React, { useEffect, useState } from "react";
import { map } from "lodash";
import {
  Col,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../Components/Common/Breadcrumb";

//Import Cards
import CardProject from "./card-project";

// import { getProjects as onGetProjects } from "../store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";

import images from "../assets/images";
import companies from "../assets/images/companies";

const Places = props => {
  const dispatch = useDispatch();

//   const { projects } = useSelector(state => ({
//     projects: state.projects.projects,
//   }));

const projects = [{id:1,img:2,description:"hello",team:[]},
{id:1,img:2,description:"hello",team:[]},
{id:1,img:2,description:"hello",team:[]},
{id:1,img:2,description:"hello",team:[]},
{id:1,img:2,description:"hello",team:[]}];

  const [page, setPage] = useState(1);
  const [totalPage] = useState(5);

//   useEffect(() => {
//     dispatch(onGetProjects());
//   }, [dispatch]);

  const handlePageClick = page => {
    setPage(page);
  };

  return (
    <React.Fragment>
      <div>
       
        <Container >
         
          <Breadcrumbs breadcrumbItem="Nearby Places" />

          <Row>
           
            <CardProject projects={projects} />
          </Row>

          <Row>
            <Col lg="12">
              <Pagination className="pagination pagination-rounded justify-content-center mb-2">
                <PaginationItem disabled={page === 1}>
                  <PaginationLink
                    previous
                    href="#"
                    onClick={() => handlePageClick(page - 1)}
                  />
                </PaginationItem>
                {map(Array(totalPage), (item, i) => (
                  <PaginationItem active={i + 1 === page} key={i}>
                    <PaginationLink
                      onClick={() => handlePageClick(i + 1)}
                      href="#"
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem disabled={page === totalPage}>
                  <PaginationLink
                    next
                    href="#"
                    onClick={() => handlePageClick(page + 1)}
                  />
                </PaginationItem>
              </Pagination>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Places;
