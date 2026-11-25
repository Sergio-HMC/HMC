/** @type {import('next').NextConfig} */
module.exports = { async redirects() { return [
{"source": "/home-1", "destination": "/", "permanent": true},
{"source": "/copy-of-home-1", "destination": "/inversion-inmobiliaria", "permanent": true},
{"source": "/visasyresidencia", "destination": "/visas-y-residencias", "permanent": true},
{"source": "/en/home-1", "destination": "/en", "permanent": true},
{"source": "/en/copy-of-home-1", "destination": "/en/investment", "permanent": true},
{"source": "/en/visasyresidencia", "destination": "/en/residency", "permanent": true},
{"source": "/en/nosotros", "destination": "/en/about", "permanent": true},
{"source": "/en/contacto", "destination": "/en/contact", "permanent": true},
{"source": "/en/proyectos", "destination": "/en", "permanent": false},
{"source": "/proyectos", "destination": "/", "permanent": false}
]; } };
