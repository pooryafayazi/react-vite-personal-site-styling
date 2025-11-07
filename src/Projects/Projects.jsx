// src\Projects\Projects.jsx
import data from './projects.json'
import { Row, Col, Card, Badge, Button } from 'react-bootstrap'

export default function Projects(){
  return (
    <section className="py-3">
      <h2 className="h3 text-primary fw-bold mb-3">نمونه‌کارها</h2>
      <Row xs={1} md={2} className="g-3">
        {data.map(item => (
          <Col key={item.id}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start">
                  <Card.Title className="text-info">{item.title}</Card.Title>
                  {item.year && <Badge bg="light" text="dark">{item.year}</Badge>}
                </div>
                <Card.Subtitle className="text-muted small my-1">
                  {item.stack.join(' • ')}
                </Card.Subtitle>
                <Card.Text>{item.description}</Card.Text>
                <div className="d-flex gap-2">
                  {item.demo && <Button size="sm" href={item.demo} target="_blank">دمو</Button>}
                  {item.repo && <Button size="sm" variant="outline-primary" href={item.repo} target="_blank">لینک</Button>}
                  {item.docs && <Button size="sm" variant="outline-secondary" href={item.docs} target="_blank">مستندات</Button>}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  )
}