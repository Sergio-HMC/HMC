/** @type {import('next').NextConfig} */
const nextConfig={async redirects(){return [{source:'/home-1',destination:'/',permanent:true},{source:'/copy-of-home-1',destination:'/inversion-inmobiliaria',permanent:true},{source:'/visasyresidencia',destination:'/visas-y-residencias',permanent:true}]}};module.exports=nextConfig;
