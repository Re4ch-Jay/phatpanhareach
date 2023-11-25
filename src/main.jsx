import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Helmet } from 'react-helmet';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Helmet>
      <title>Phat Panhareach - Portfolio</title>
      <meta name="og:description" content="I'm an enthusiastic learner who thrives on exploring novel technologies. My journey has led me to captivating projects, and I'm an active creator and contributor to open-source initiatives."/>
      <meta property="og:image" content="/banner.png" />
    </Helmet>
    <App />
  </React.StrictMode>,
)
