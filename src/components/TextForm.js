import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const words = text.trim().split(/\s+/).filter(Boolean);
  const readingMinutes = (words.length * 0.008).toFixed(1);

  const convert = (transform, message) => {
    setText(transform(text));
    props.showAlert(message, 'success');
  };
  const handleCamelCase = () => convert((value) => value.trim().toLowerCase().split(/\s+/).map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join(''), 'Converted to Camel Case!');
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      props.showAlert('Text copied to clipboard!', 'success');
    } catch {
      props.showAlert('Clipboard access is unavailable in this browser.', 'danger');
    }
  };

  return (
    <div className={`textutils-page theme-${props.mode}`}>
      <section className="workspace-hero">
        <div>
          <span className="eyebrow">YOUR EVERYDAY TEXT TOOLKIT</span>
          <h1>Make your words <em>work for you.</em></h1>
          <p>Clean up, transform, and understand your text in one simple place.</p>
        </div>
        <div className="hero-orbit" aria-hidden="true"><span>Aa</span><i>✳</i></div>
      </section>

      <section className="editor-panel" aria-labelledby="editor-title">
        <div className="panel-heading">
          <div><span className="eyebrow">TEXT WORKSPACE</span><h2 id="editor-title">Paste or write your text</h2></div>
          <span className="live-status"><i /> Ready to edit</span>
        </div>
        <textarea className="form-control text-editor" value={text} onChange={(event) => setText(event.target.value)} placeholder="Start typing or paste your text here…" aria-label="Text to analyze and transform" />
        <div className="editor-footer"><span>{text.length} characters</span><span>Changes stay in your browser</span></div>
        <div className="action-toolbar" aria-label="Text actions">
          <button disabled={!text} className="btn action-button action-primary" onClick={() => convert((value) => value.toUpperCase(), 'Converted to Upper Case!')}><span>AA</span> Uppercase</button>
          <button disabled={!text} className="btn action-button" onClick={() => convert((value) => value.toLowerCase(), 'Converted to Lower Case!')}><span>aa</span> Lowercase</button>
          <button disabled={!text} className="btn action-button" onClick={handleCamelCase}><span>Aa</span> camelCase</button>
          <button disabled={!text} className="btn action-button" onClick={handleCopy}><span>⧉</span> Copy</button>
          <button disabled={!text} className="btn action-button action-clear" onClick={() => convert(() => '', 'Text cleared!')}><span>⌫</span> Clear</button>
        </div>
      </section>

      <section className="summary-section">
        <div className="summary-title"><div><span className="eyebrow">AT A GLANCE</span><h2>Your text summary</h2></div><span className="summary-caption">Updates as you type</span></div>
        <div className="summary-grid">
          <article className="summary-card"><span className="summary-icon">✳</span><span className="summary-label">Words</span><strong>{words.length}</strong><small>in your text</small></article>
          <article className="summary-card"><span className="summary-icon peach">Aa</span><span className="summary-label">Characters</span><strong>{text.length}</strong><small>including spaces</small></article>
          <article className="summary-card"><span className="summary-icon blue">◷</span><span className="summary-label">Reading time</span><strong>{readingMinutes}<small> min</small></strong><small>estimated aloud</small></article>
        </div>
      </section>

      <section className="preview-panel"><div className="panel-heading"><div><span className="eyebrow">LIVE RESULT</span><h2>Preview</h2></div><span className="preview-badge">{text ? 'Your text' : 'Waiting for text'}</span></div><p className={text ? 'preview-copy' : 'preview-copy preview-empty'}>{text || 'Your text will appear here as you type.'}</p></section>
    </div>
  );
}
