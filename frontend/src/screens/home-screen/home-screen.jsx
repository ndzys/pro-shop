import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useGetProductsQuery } from '../../slices/productsSlice';
import Product from '../../components/product';

export default function HomeScreen() {
  const {
    data: products, isLoading, isSuccess, isError,
  } = useGetProductsQuery();
  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {isError && (<h2>An error occured</h2>)}
      {isSuccess && (
      <>
        <h1>Latest Products</h1>
        <Row>
          {products.map((product) => (
            <Col key={product.id} sm="12" md="6" lg="4" xl="3">
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </>
      )}
    </>
  );
}
