import React from "react";

const Privacy = () => {
  return (
    <div className="px-4 font-lora max-w-4xl space-y-4 mx-auto s py-15 md:py-30  ">
      <h1 className="text-3xl text-center md:text-4xl font-merriweather font-bold text-success mb-4">
        Privacy Policy
      </h1>
      <p className="text-shadow-gray-700 text-center text-lg mb-6">
        Your privacy is important to us. We collect only essential information
        to improve your experience.
      </p>
      <ul className="list-disc pl-5 md:pl-30 space-y-2  text-xl ">
        <li>We store your name, email, and profile picture securely.</li>
        <li>We do not share or sell your personal data to third parties.</li>
        <li>You can delete your account and data anytime by contacting us.</li>
        <li>We may collect anonymous usage data to improve site features.</li>
      </ul>
      <p className="text-center mt-10 text-shadow-gray-700 text-lg">
        Please contact us if you have any concerns about how your data is used.
      </p>
    </div>
  );
};

export default Privacy;
