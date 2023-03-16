import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Form,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
} from "reactstrap"
import classnames from "classnames"
import { isEmpty, map } from "lodash"

//Import Star Ratings
import StarRatings from "react-star-ratings"

// RangeSlider
import Nouislider from "nouislider-react"
import "nouislider/distribute/nouislider.css"

//Import Product Images
import { productImages } from "../assets/images/product"

//Import Breadcrumb
import Breadcrumbs from "../Components/Common/Breadcrumb"

//Import data
import { discountData, productsData } from "../common/data"

//Import actions
import { getProducts as onGetProducts } from "../store/e-commerce/actions"

//redux
import { useSelector, useDispatch } from "react-redux"

import { product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13 } from "../assets/images/product"

const EcommerceProducts = props => {
  const dispatch = useDispatch()

//   const { products } = useSelector(state => ({
//     products: state.ecommerce.products,
//   }))

  const { history } = props
  // eslint-disable-next-line no-unused-vars
  const [FilterClothes, setFilterClothes] = useState([
    { id: 1, name: "T-shirts", link: "#" },
    { id: 2, name: "Shirts", link: "#" },
    { id: 3, name: "Jeans", link: "#" },
    { id: 4, name: "Jackets", link: "#" },
  ])

  const [productList, setProductList] = useState([{
    image : product1,
    name : "Prem Narayan",
    id : 1,
    rating :3.5,
    newPrice : 1200,
  },
  {
    image : product2,
    name : "Ram Singh",
    id : 2,
    rating : 4.5,
    newPrice : 1200,
  },
  {
    image : product3,
    name : "Chutanku",
    id : 3,
    rating : 2,
    newPrice : 1200,
  },
  {
    image : product4,
    name : "Hargun",
    id : 4,
    rating : 4.5 ,
    newPrice : 5000,
  }]);

  const [activeTab, setActiveTab] = useState("1")
  // eslint-disable-next-line no-unused-vars
  const [discountDataList, setDiscountDataList] = useState([])
  const [filters, setFilters] = useState({
    discount: [],
    price: { min: 0, max: 500 },
  })
  const [page, setPage] = useState(1)
  // eslint-disable-next-line no-unused-vars
  const [totalPage, setTotalPage] = useState(5)

  useEffect(() => {
    // setProductList(products)
    setDiscountDataList(discountData)
  }, [ discountData])

  useEffect(() => {
    dispatch(onGetProducts())
  }, [dispatch])

//   useEffect(() => {
//     if (!isEmpty(products)) setProductList(products)
//   }, [products])

  const toggleTab = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }

  const onSelectDiscount = e => {
    const { value, checked } = e.target
    const { discount } = filters
    var existing = [...discount]
    if (checked) {
      existing = [...discount, value]
      setFilters({
        ...filters,
        discount: existing,
      })
    } else {
      const unCheckedItem = discount.find(item => item === value)
      if (unCheckedItem) {
        existing = discount.filter(item => item !== value)
      }
    }
    setFilters({
      ...filters,
      discount: existing,
    })
    // onFilterProducts(value, checked)

    let filteredProducts = productsData
    if (checked && parseInt(value) === 0) {
      filteredProducts = productsData.filter(product => product.offer < 10)
    } else if (checked && existing.length > 0) {
      filteredProducts = productsData.filter(
        product => product.offer >= Math.min(...existing)
      )
    }
    setProductList(filteredProducts)
  }
  const onUpdate = (render, handle, value) => {
    setProductList(
      productList.filter(
        product => product.newPrice >= value[0] && product.newPrice <= value[1]
      )
    )
  }

  const [ratingvalues, setRatingvalues] = useState([])
  /*
  on change rating checkbox method
  */
  const onChangeRating = value => {
    setProductList(productsData.filter(product => product.rating >= value))

    var modifiedRating = [...ratingvalues]
    modifiedRating.push(value)
    setRatingvalues(modifiedRating)
  }

  const onSelectRating = value => {
    setProductList(productsData.filter(product => product.rating === value))
  }

  const onUncheckMark = (value) => {
    var modifiedRating = [...ratingvalues]
    const modifiedData = (modifiedRating || []).filter(x => x !== value)
    /*
    find min values
    */
    var filteredProducts = productsData
    if (modifiedData && modifiedData.length && value !== 1) {
      var minValue = Math.min(...modifiedData)
      if (minValue && minValue !== Infinity) {
        filteredProducts = productsData.filter(
          product => product.rating >= minValue
        )
        setRatingvalues(modifiedData)
      }
    } else {
      filteredProducts = productsData
    }
    setProductList(filteredProducts)
  }

  const handlePageClick = page => {
    setPage(page)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col lg="3">
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Filter</CardTitle>
                  
                  <div className="mt-3 ">
                    <h5 className="font-size-14 mb-4">Price</h5>
                    <br />

                    <Nouislider
                      range={{ min: 100, max: 5000 }}
                      tooltips={true}
                      start={[100, 5000]}
                      connect
                      onSlide={onUpdate}
                    />
                  </div>

                
                  <div className="mt-4 pt-3">
                    <h5 className="font-size-14 mb-3">Customer Rating</h5>
                    <div>
                      <div className="form-check mt-2">
                        <Input
                          type="checkbox"
                          className="form-check-input"
                          id="productratingCheck1"
                          onChange={e => {
                            if (e.target.checked) {
                              onChangeRating(4)
                            } else {
                              onUncheckMark(4)
                            }
                          }}
                        />
                        <Label
                          className="form-check-label"
                          htmlFor="productratingCheck1"
                        >
                          4 <i className="bx bx-star text-warning" /> & Above
                        </Label>
                      </div>
                      <div className="form-check mt-2">
                        <Input
                          type="checkbox"
                          className="form-check-input"
                          id="productratingCheck2"
                          onChange={e => {
                            if (e.target.checked) {
                              onChangeRating(3)
                            } else {
                              onUncheckMark(3)
                            }
                          }}
                        />
                        <Label
                          className="form-check-label"
                          htmlFor="productratingCheck2"
                        >
                          3 <i className="bx bx-star text-warning" /> & Above
                        </Label>
                      </div>
                      <div className="form-check mt-2">
                        <Input
                          type="checkbox"
                          className="form-check-input"
                          id="productratingCheck3"
                          onChange={e => {
                            if (e.target.checked) {
                              onChangeRating(2)
                            } else {
                              onUncheckMark(2)
                            }
                          }}
                        />
                        <Label
                          className="form-check-label"
                          htmlFor="productratingCheck3"
                        >
                          2 <i className="bx bx-star text-warning" /> & Above
                        </Label>
                      </div>
                      <div className="form-check mt-2">
                        <Input
                          type="checkbox"
                          className="form-check-input"
                          id="productratingCheck4"
                          onChange={e => {
                            if (e.target.checked) {
                              onSelectRating(1)
                            } else {
                              onUncheckMark(1)
                            }
                          }}
                        />
                        <Label
                          className="form-check-label"
                          htmlFor="productratingCheck4"
                        >
                          1 <i className="bx bx-star text-warning" />
                        </Label>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg="9">
              <Row className="mb-3">
                <Col xl="4" sm="6">
                  <div className="mt-2">
                    <h5>Carpenter</h5>
                  </div>
                </Col>
                
              </Row>
              <Row>
                {!isEmpty(productList) &&
                  productList.map((product, key) => (
                    <Col xl="4" sm="6" key={"_col_" + key}>
                      <Card
                        onClick={() =>
                          history.push(
                            `/ecommerce-product-detail/${product.id}`
                          )
                        }
                      >
                        <CardBody>
                          <div className="product-img position-relative">
                            {product.isOffer ? (
                              <div className="avatar-sm product-ribbon">
                                <span className="avatar-title rounded-circle bg-primary">
                                  {`-${product.offer}%`}
                                </span>
                              </div>
                            ) : null}

                            <img
                              src={product.image}
                              alt=""
                              className="img-fluid mx-auto d-block"
                            />
                          </div>
                          <div className="mt-4 text-center">
                            <h5 className="mb-3 text-truncate">
                              <Link
                                to={"/ecommerce-product-detail/" + product.id}
                                className="text-dark"
                              >
                                {product.name}{" "}
                              </Link>
                            </h5>
                            <div className="text-muted mb-3">
                              <StarRatings
                                rating={product.rating}
                                starRatedColor="#F1B44C"
                                starEmptyColor="#2D363F"
                                numberOfStars={5}
                                name="rating"
                                starDimension="14px"
                                starSpacing="3px"
                              />
                            </div>
                            <h5 className="my-0">
                             
                              <b>₹{product.newPrice}</b>
                            </h5>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
              </Row>

              <Row>
                <Col lg="12">
                  <Pagination className="pagination pagination-rounded justify-content-end mb-2">
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
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}



export default EcommerceProducts
