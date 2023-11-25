import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Helmet, HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <title>Phat Panhareach - Portfolio</title>
        <meta property="og:title" content="Phat Panhareach - Portfolio" />
        <meta property="og:description" content="I'm an enthusiastic learner who thrives on exploring novel technologies. My journey has led me to captivating projects, and I'm an active creator and contributor to open-source initiatives."/>
        <meta property="og:image" content="/banner.png" />
        <meta property="og:url" content="https://phatpanhareach.vercel.app/"/>
        <meta property="og:type" content="website"/>
      </Helmet>
    <App/>
    </HelmetProvider>
  </React.StrictMode>,
)
