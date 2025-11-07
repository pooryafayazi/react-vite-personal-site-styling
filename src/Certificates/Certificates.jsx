// src\Certificates\Certificates.jsx
import { useMemo, useState } from 'react'
import { Carousel, Button } from 'react-bootstrap'
import data from './certificates.json'
import './Certificates.css'

export default function Certificates(){
  const items = useMemo(() => data ?? [], [])
  const [index, setIndex] = useState(0)

  if (!items.length) return null
  const item = items[index]

  return (
    <section aria-label="گواهینامه‌های من" className="certs">
      <div className="certs-head">
        <h3>گواهینامه‌های من</h3>
        <div className="certs-counter">{index + 1}/{items.length}</div>
      </div>

      <div className="certs-viewport">
        <Carousel
          activeIndex={index}
          onSelect={(i) => setIndex(i)}
          fade
          controls
          indicators={false}
          interval={2800}
          pause="hover"
          wrap
          touch
          keyboard
        >
          {items.map((it, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block certs-img"
                src={it.image}
                alt={`${it.title} – ${it.issuer}`}
                loading="lazy"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="certs-meta">
        <div>
          <strong>{item.title}</strong>
          <span className="dot">•</span>
          <span>{item.issuer}</span>
          <span className="dot">•</span>
          <span>{item.year}</span>
        </div>

        {item.link && (
          <Button
            as="a"
            href={item.link}
            target="_blank"
            rel="noreferrer"
            size="sm"
          >
            مشاهده/دانلود
          </Button>
        )}
      </div>
    </section>
  )
}
