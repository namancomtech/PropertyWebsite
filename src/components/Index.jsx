import Header from "../components/Header"
import Filter from '../components/Filter'
import Body from '../components/Body'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useState } from 'react'
import Data from "../components/Data";
import MyCarousel from '../components/MyCarousel';
import Footer from '../components/Footer';
export default function Index() {
    const [location, setLocation] = useState("");
    const [lowestToLargest, setLowestToLargest] = useState("");
    let [priceRange, setPriceRange] = useState(0);

    const regex = new RegExp(location, "i");

    let filteredData = Data.filter(value => value.address.match(regex));

    priceRange > 0 && (filteredData = filteredData.filter(value => value.price <= priceRange));

    if (lowestToLargest == "lowestToLargestPrice") {
        filteredData = filteredData.sort((a, b) => a.price - b.price); //asc
    }
    else if(lowestToLargest == "largestToLowest") {
        filteredData = filteredData.sort((a, b) => b.price - a.price); //dsc
    }

    return (
        <div>
            <Header></Header>
            <MyCarousel></MyCarousel>
            <Container className='py-5'>
            <Filter location={location} setLocation={setLocation} lowestToLargest={lowestToLargest} setLowestToLargest={setLowestToLargest} priceRange={priceRange} setPriceRange={setPriceRange}></Filter>
                <Row>
                    <Body data={filteredData}></Body>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    )
}
