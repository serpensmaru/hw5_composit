import React from 'react';
import './Banner.css';

export default function Banner({ src, alt, href }) {
  return (
    <a className="banner-link" href={href}>
      <img className="banner-img" src={src} alt={alt} />
    </a>
  );
}