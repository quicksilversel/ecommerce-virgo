import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


import Header from './components/header'
import NavBar from './components/navbar'
import Sidebar from './components/sidebar'
import ProductList from './components/productList'
import Footer from './components/footer'


function App() {
  return (
    <Container>
      <Jumbotron>
        <Header></Header>
        <NavBar></NavBar>
        <Row>
          <Col sm={4}>
            <Sidebar></Sidebar>
          </Col>
          <Col sm={8}>
            <ProductList></ProductList>
          </Col>
        </Row>
        <Footer></Footer>
      </Jumbotron>
    </Container>
  );
}

export default App;
