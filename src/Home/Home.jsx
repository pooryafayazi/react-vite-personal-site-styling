// src\Home\Home.jsx
import { Carousel } from 'react-bootstrap'

export default function Home(){
  return (
    <section className="py-3">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100 rounded-4"
               src="https://itmeter.ir/static/images/slider-03.webp" alt="" />
          <Carousel.Caption className="text-start">
            <h3 className="fw-bold text-info">سلام! من پوریا هستم</h3>
            <p>توسعه‌دهندهٔ بک‌اند با تمرکز روی Django/DRF و PostgreSQL.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 rounded-4"
               src="https://itmeter.ir/static/images/slider-02-.webp" alt="" />
          <Carousel.Caption className="text-start">
            <h3 className="fw-bold">استقرار پایدار با Docker و Nginx</h3>
            <p>Healthcheck، لاگینگ، و دیپلوی stage/production.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 rounded-4"
               src="https://itmeter.ir/static/images/slider-01.webp" alt="" />
          <Carousel.Caption className="text-start">
            <h3 className="fw-bold">پروژه‌های واقعی نمایندگی</h3>
            <p>QuickService، Motor، CarNews و ...</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  )
}