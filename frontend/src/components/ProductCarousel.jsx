import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import Message from './Message';
import { useGetTopProductsQuery } from '../slices/productsApiSlice';

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? null : error ? (
    <Message variant='danger'>{error?.data?.message || error.error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-dark mb-4'>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
        <Link to={`/product/${product._id}`}>
          <Image 
            src={product.image} 
            alt={product.name} 
            fluid 
            style={{
              height: '400px', 
              width: '50%', 
              objectFit: 'contain',
              backgroundColor: '#f8f9fa'
            }}
          />
          <Carousel.Caption className='carousel-caption'>
            <h2 className='text-white text-right'>
              {product.name} (${product.price})
              <br />
             
            </h2>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
      
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
