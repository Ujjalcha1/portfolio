import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  name?: string;
  type?: string;
  image?: string;
}

export function SEO({
  title = "Ujjal Kr. Chatterjee | MERN Stack Developer Portfolio",
  description = "Explore the professional portfolio of Ujjal Kr. Chatterjee, a skilled MERN Stack Developer specializing in React, Node.js, Express, and MongoDB.",
  name = "Ujjal Kr. Chatterjee",
  type = "website",
  image = "https://i.pinimg.com/736x/c4/14/db/c414dbebbd15f8ce3dc6b01749810ec6.jpg"
}: SEOProps) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type === 'website' ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
