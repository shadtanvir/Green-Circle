import React from "react";

const Terms = () => {
  return (
    <div className="px-4 font-lora max-w-4xl space-y-4 mx-auto s py-15 md:py-30  ">
      <h1 className="text-3xl text-center md:text-4xl font-merriweather font-bold text-success mb-4">
        Terms of Service
      </h1>
      <p className="text-[#3F2200] text-center text-lg mb-6">
        By using Green Circle, you agree to follow our community standards and
        use this platform responsibly.
      </p>
      <ul className="list-disc pl-5 md:pl-30 space-y-2 text-xl ">
        <li>
          Respect all community members and avoid harmful or offensive content.
        </li>
        <li>
          Only post original gardening tips, photos, or information you have
          rights to share.
        </li>
        <li>
          Misuse or spamming may result in account restrictions or removal.
        </li>
        <li>
          We reserve the right to modify terms as needed with prior notice.
        </li>
      </ul>
      <p className="text-center mt-10 text-[#3F2200] text-lg">
        Continued use of our platform indicates your agreement with these terms.
      </p>
    </div>
  );
};

export default Terms;
