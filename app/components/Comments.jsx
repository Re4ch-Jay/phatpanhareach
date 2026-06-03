'use client';

import React, { useEffect, useRef } from 'react';

function Comments() {
  const containerRef = useRef(null);
  const injectedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    // Inject only once. The guard survives React StrictMode's dev
    // double-invoke (setup → cleanup → setup on the same instance), so we
    // never append a second widget — and we never remove the in-flight
    // Utterances script, which would break its self-replacing injection.
    if (!container || injectedRef.current) return;
    injectedRef.current = true;

    const script = document.createElement('script');
    script.setAttribute('src', 'https://utteranc.es/client.js');
    script.setAttribute('repo', 'Re4ch-Jay/phatpanhareach'); // Replace with your repository name
    script.setAttribute('issue-term', 'url');
    script.setAttribute('theme', 'github-dark');
    script.setAttribute('async', true);
    script.setAttribute('crossorigin', 'anonymous');
    container.appendChild(script);
  }, []);

  return <div ref={containerRef} />;
}

export default Comments;
