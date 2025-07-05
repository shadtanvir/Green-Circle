import React from "react";

const Cookies = () => {
  return (
    <div className="px-4 font-lora max-w-4xl space-y-4 mx-auto s py-15 md:py-30  ">
      <h1 className="text-3xl text-center md:text-4xl font-merriweather font-bold text-success mb-4">
        Cookie Policy
      </h1>
      <p className="text-[#3F2200] text-center text-lg mb-6">
        Green Circle uses cookies to personalize your experience and enhance
        performance.
      </p>
      <ul className="list-disc pl-5 md:pl-30 space-y-2 text-xl">
        <li>
          Cookies store preferences like dark/light theme and login sessions.
        </li>
        <li>We do not use cookies to track you outside our platform.</li>
        <li>You can clear or disable cookies in your browser settings.</li>
      </ul>
      <p className="text-center mt-10 text-[#3F2200] text-lg">
        By continuing to use our site, you consent to our cookie policy.
      </p>
    </div>
  );
};

export default Cookies;
