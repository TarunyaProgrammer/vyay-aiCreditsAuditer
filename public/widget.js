(function() {
  const containerId = 'vyay-audit-widget';
  const container = document.getElementById(containerId);
  if (!container) return;

  const style = document.createElement('style');
  style.textContent = `
    .vyay-widget {
      font-family: serif;
      background: #000;
      color: #fff;
      padding: 24px;
      border-radius: 16px;
      max-width: 350px;
      text-align: center;
      box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    }
    .vyay-widget h3 {
      font-style: italic;
      margin: 0 0 12px 0;
      font-size: 20px;
    }
    .vyay-widget p {
      font-size: 14px;
      color: rgba(255,255,255,0.6);
      margin-bottom: 20px;
      line-height: 1.5;
    }
    .vyay-widget a {
      display: block;
      background: #fff;
      color: #000;
      text-decoration: none;
      padding: 12px;
      border-radius: 8px;
      font-weight: bold;
      font-size: 14px;
      transition: opacity 0.2s;
    }
    .vyay-widget a:hover {
      opacity: 0.9;
    }
  `;
  document.head.appendChild(style);

  container.innerHTML = `
    <div class="vyay-widget">
      <h3>Vyay AI Audit</h3>
      <p>Audit your AI spend in 60 seconds. We find an average of $2,400/year in savings for small teams.</p>
      <a href="https://vyay.ai/audit" target="_blank">Start Free Audit</a>
    </div>
  `;
})();
