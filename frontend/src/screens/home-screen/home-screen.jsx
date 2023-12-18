import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { useGetProductsQuery } from '../../slices/productsSlice';
import Product from '../../components/product';
import Loader from '../../components/loader';
import Message from '../../components/message';

export default function HomeScreen() {
  const {
    data: products, isLoading, isSuccess, isError,
  } = useGetProductsQuery();
  return (
    <>
      {isLoading && <Loader />}
      {isError && (<Message variant="danger">An error occurred</Message>)}
      {isSuccess && (
      <>
        <h1>Latest Products</h1>
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm="12" md="6" lg="4" xl="3">
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </>
      )}
    </>
  );
}
