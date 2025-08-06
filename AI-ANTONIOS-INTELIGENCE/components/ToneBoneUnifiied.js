import { useEffect, useRef } from 'react';

export default function ToneBoneUnified() {
  const rayRef = useRef(null);
  const yarboughRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
      if (rayRef.current) rayRef.current.srcObject = stream;
      if (yarboughRef.current) yarboughRef.current.srcObject = stream;
    });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Antonio Roschelle Yarbough’s Rhyming Family Tree</h1>
      <p>Powered by Antonio Roschelle Ray Sr's ToneBone AI.</p>
      <img src="/logo.png" alt="ToneBone Logo" style={{ width: '200px' }} />

      <h2>🎤 Tone Bone's Cipher Classroom</h2>
      <p>📹 Feed 1 — Ray</p>
      <video ref={rayRef} autoPlay style={{ width: '300px', marginRight: '1rem' }} />
      <p>📹 Feed 2 — Yarbough</p>
      <video ref={yarboughRef} autoPlay style={{ width: '300px' }} />
      <p>✨ Choose your identity.</p>
      <p>✨ Enter Cipher Mode.</p>
      <p>✨ Graduate in rhyme.</p>
      <button>ENTER CLASSROOM</button>

      <h2>🧠 ToneBone A.I. MODEL</h2>
      <p>This is A.I.'s V.R.—Where honesty is our security, and respect fuels every rhythm.</p>
      <p><strong>ToneBone Prime Idol</strong></p>
      <button>Enter the V.R.</button>
    </div>
  );
}