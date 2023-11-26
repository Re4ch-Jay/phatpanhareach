import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Helmet ,HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <Helmet prioritizeSeoTags>
        <title>Phat Panhareach - Portfolio</title>
        <meta property="og:title" content="Phat Panhareach Portfolio" />
        <meta property="og:description" content="I'm an enthusiastic learner who thrives on exploring novel technologies." />
        <meta name='description' content="I'm an enthusiastic learner who thrives on exploring novel technologies." />
        <meta property="og:image" content="/banner.png"  />
      </Helmet>
    <App/>
    </HelmetProvider>
  </React.StrictMode>,
)
