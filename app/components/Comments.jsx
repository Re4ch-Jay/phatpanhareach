import React, { useEffect } from 'react';

function Comments() {
  const script = document.createElement('script');
  useEffect(() => {
    // script.src = 'https://utteranc.es/client.js';
    // script.async = true;
    script.setAttribute('src', 'https://utteranc.es/client.js')
    script.setAttribute('repo', 'Re4ch-Jay/phatpanhareach'); // Replace with your repository name
    script.setAttribute('issue-term', 'url');
    script.setAttribute('theme', 'github-dark');
    script.setAttribute('async', true);
    script.setAttribute('crossorigin', 'anonymous');
    document.getElementById('utterances-container').appendChild(script);
  }, [script]);

  return <div id="utterances-container" />;
}

export default Comments;
