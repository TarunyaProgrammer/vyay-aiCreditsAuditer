(function() {
  const containerId = 'vyay-audit-widget';
  const container = document.getElementById(containerId);
  if (!container) return;

  const theme = container.getAttribute('data-theme') || 'dark';
  const isCompact = container.getAttribute('data-compact') === 'true';
  const isDark = theme === 'dark';

  const bgColor = isDark ? '#000' : '#fff';
  const textColor = isDark ? '#fff' : '#000';
  const mutedColor = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)';
  const btnBg = isDark ? '#fff' : '#000';
  const btnText = isDark ? '#000' : '#fff';

  const style = document.createElement('style');
  style.textContent = `
    .vyay-widget {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: ${bgColor};
      color: ${textColor};
      padding: ${isCompact ? '16px' : '24px'};
      border-radius: 16px;
      max-width: ${isCompact ? '300px' : '350px'};
      text-align: center;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      border: 1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'};
    }
    .vyay-widget h3 {
      font-family: serif;
      font-style: italic;
      margin: 0 0 8px 0;
      font-size: ${isCompact ? '18px' : '20px'};
    }
    .vyay-widget p {
      font-size: 13px;
      color: ${mutedColor};
      margin-bottom: 16px;
      line-height: 1.4;
    }
    .vyay-widget input {
      width: 100%;
      padding: 10px;
      margin-bottom: 12px;
      border-radius: 8px;
      border: 1px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'};
      background: transparent;
      color: ${textColor};
      box-sizing: border-box;
      font-size: 13px;
    }
    .vyay-widget .preview-btn {
      display: block;
      width: 100%;
      background: ${btnBg};
      color: ${btnText};
      border: none;
      padding: 12px;
      border-radius: 8px;
      font-weight: bold;
      font-size: 13px;
      cursor: pointer;
      transition: opacity 0.2s;
    }
    .vyay-widget .preview-btn:hover {
      opacity: 0.9;
    }
    .vyay-savings-preview {
      display: none;
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px dashed ${mutedColor};
    }
    .vyay-savings-preview .amount {
      font-family: serif;
      font-style: italic;
      font-size: 24px;
      color: #F59E0B;
      margin: 4px 0;
    }
  `;
  document.head.appendChild(style);

  container.innerHTML = `
    <div class="vyay-widget">
      <h3>Vyay AI Audit</h3>
      <p>Audit your AI spend in 60 seconds.</p>
      <input type="number" id="vyay-engineers" placeholder="Number of engineers">
      <button class="preview-btn" id="vyay-preview">Preview Savings</button>
      
      <div id="vyay-preview-area" class="vyay-savings-preview">
        <p style="margin-bottom: 4px">Est. Annual Savings</p>
        <div class="amount" id="vyay-amount">$0</div>
        <a href="https://vyaytarunya.vercel.app/audit" target="_blank" style="color: #F59E0B; font-size: 12px; text-decoration: none; font-weight: bold;">Get Full Audit →</a>
      </div>
    </div>
  `;

  document.getElementById('vyay-preview').addEventListener('click', function() {
    const engineers = parseInt(document.getElementById('vyay-engineers').value) || 0;
    if (engineers > 0) {
      const estSavings = Math.round(engineers * 480); // Simple benchmark: $40/mo per eng
      document.getElementById('vyay-amount').textContent = '$' + estSavings.toLocaleString();
      document.getElementById('vyay-preview-area').style.display = 'block';
      this.textContent = 'Recalculate';
    }
  });
})();
