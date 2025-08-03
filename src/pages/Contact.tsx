import React from 'react';

const Contact = React.memo(() => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="text-md">Reach out via email at demo@example.com or call 123-456-7890.</p>
    </div>
  );
});

export default Contact;