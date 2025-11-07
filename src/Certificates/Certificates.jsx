// src\Certificates\Certificates.jsx
import React, { useMemo, useState } from 'react';
import Button from '../Button/Button';
import data from './certificates.json';
import './Certificates.css'


const Certificates = () => {
    const [idx, setIdx] = useState(0);
    const items = useMemo(() => data, []);
    const max = items.length;

    const prev = () => setIdx(i => (i - 1 + max) % max);
    const next = () => setIdx(i => (i + 1) % max);

    if (!max) return null;

    const item = items[idx];

    return (
        <section aria-label="گواهینامه‌های من" className="certs">
            <div className="certs-head">
                <h3>گواهینامه‌های من</h3>
                <div className="certs-controls">
                    {/* <button type="button" onClick={prev} aria-label="قبلی">‹</button> */}
                    <Button onClick={prev} aria-label="قبلی" variant="outline" size="sm">‹</Button>
                    <span className="counter">{idx + 1}/{max}</span>
                    {/* <button type="button" onClick={next} aria-label="بعدی">›</button> */}
                    <Button onClick={next} aria-label="بعدی" variant="outline" size="sm">›</Button>
                </div>
            </div>

            <div className="certs-viewport">
                <img
                    src={item.image}
                    alt={`${item.title} – ${item.issuer}`}
                    className="certs-img"
                    loading="lazy"
                />
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
                    <a className="btn" href={item.link} target="_blank" rel="noreferrer">
                        مشاهده/دانلود
                    </a>
                )}
            </div>
        </section>
    );
}


export default Certificates;