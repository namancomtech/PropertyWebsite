import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
export default function Filter({ location, setLocation, lowestToLargest, setLowestToLargest, priceRange, setPriceRange }) {
    function clearFilter() {
        setPriceRange(0);
        setLocation("");
    }
    return (
        <Container>
            <h2 className='display-6 text-center text-uppercase fw-normal'>Featured Homes</h2>
            <hr />
            <form action="">
                <Row className='py-2 justify-content-md-between align-items-center'>
                    <Col lg="auto" className='text-center'>
                        <div>
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <label htmlFor="price" className="fw-semibold">Price</label>
                                <span className="badge bg-primary">
                                    ₹{Number(priceRange).toLocaleString('en-IN')}
                                </span>
                            </div>

                            <div className="d-flex align-items-center gap-3">
                                <span className="text-muted">₹10,000</span>
                                <input
                                    type="range"
                                    id="price"
                                    min="10000"
                                    max="200000"
                                    step="10000"
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(e.target.value)}
                                    className="form-range flex-grow-1"
                                />
                                <span className="text-muted">₹2,00,000</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg="auto" className=''>
                        <label htmlFor="location" className='me-3'>Location</label>
                        <Form.Control type="text" placeholder="Search by Location" id='location' value={location} onChange={(e) => (setLocation(e.target.value))} />
                    </Col>
                    <Col lg="auto">
                        <Form.Select aria-label="Default select example" id="sort" name="dropdown-sort" onChange={(e) => (setLowestToLargest(e.target.value))}>
                            <option value="select">Sort</option>
                            <option value="lowestToLargestPrice">Lowest to Largest Price</option>
                            <option value="largestToLowest">Largest to Lowest Price</option>
                        </Form.Select>

                    </Col>
                    <Col lg="auto">
                        <button type='button' className='btn btn-danger' onClick={() => clearFilter()}>Clear Filter</button>
                    </Col>
                </Row>
            </form>
            <hr  className='mb-4'/>
        </Container>
    )
}
