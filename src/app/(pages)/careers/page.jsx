import React from "react";
import JobNotification from "./JobNotification";
import JobApplicationForm from "./JobApplicationForm";
import JobListings from "./JobListings";

const offers = [
  {
    title: "Competitive Salary and Bonus Packages",
    description:
      "We believe in compensating our employees for their hard work and dedication, which is why we offer competitive salaries and bonuses that reward performance and incentivize success.",
  },
  {
    title: "Flexible Work Schedule",
    description:
      "We understand that our employees have busy lives and responsibilities outside of work, which is why we offer a flexible work schedule that allows for remote work, flexible hours, and part-time work arrangements.",
  },
  {
    title: "Health Insurance and Dental Benefits",
    description:
      "We are committed to providing our employees with health insurance and dental benefits to help them maintain their well-being and ensure their optimal health.",
  },
  {
    title: "Employee Development Programs",
    description:
      "We believe in providing our employees with opportunities for development and growth, which is why we offer employee development programs that include training, certification, and performance reviews.",
  },
  {
    title: "Employee Engagement Programs",
    description:
      "We believe in promoting the well-being of our employees by providing them with opportunities for engagement and motivation, which is why we offer employee engagement programs that include workshops, team-building activities, and events.",
  },
  {
    title: "Employee Recognition and Rewards",
    description:
      "We believe in recognizing and rewarding our employees for their hard work and achievements, which is why we offer bonuses, employee of the month awards, and public recognition for accomplishments.",
  },
  {
    title: "Collaborative and Fun Work Environment",
    description:
      "We believe that a fun and collaborative work environment leads to better results, which is why we offer team-building activities, social events, and a casual dress code.",
  },
];

function CareersPage() {
  const handleSubscribe = () => {
    alert("Subscribed!");
  };

  return (
    <>
      {/* hero section  */}
      <div>
        <div className="relative bg-black bg-center bg-no-repeat bg-cover h-screen">
          <div
            className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-[0.05] transition-all duration-300"
            style={{
              backgroundImage: `url(/images/careers-banner.webp)`,
            }}
          ></div>
          <div className="relative z-10 p-10 md:w-[80vw] ps-[8vw] text-start pt-[30vh]">
            <h1
              data-aos="fade-down"
              className="text-white mt-32 ps-2 text-2xl md:text-5xl font-bold mb-4"
            >
              We&apos;re looking for you!
            </h1>

            <p className="text-blue-600 ps-4 capitalize">
              {" "}
              - jobs & internships at Rank
            </p>

            <div
              data-aos="fade-up"
              className="flex justify-start max-w-sm ps-2 text-white mt-1 text-md font_barlow font-semibold text-opacity-85"
            >
              <div className="flex gap-2 items-center">
                Rank BPO is expanding progressively, and as a result we’re
                always on the lookout for new talent to join our dynamic
                projects.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-10 md:px-28">
        <JobNotification
          profileImage="/images/careers-banner.webp"
          jobTitle="Frontend Developer"
          notificationText="Hi, you have received a job for"
          titleText="Stay Updated with the Latest Job Openings!"
          descriptionText="Receive notifications about new job opportunities in your field."
          placeholderText="Enter your email here"
          // onSubscribe={handleSubscribe}
        />
      </div>

      <JobApplicationForm />

      {/* available jobs */}
      <div className="p-10 md:px-28 mt-7">
        <p
          data-aos="fade-right"
          className="text-4xl font-extrabold text-md text-opacity-85 font_barlow text-start uppercase"
        >
          Current Openings
          <div className="w-[40%] md:w-[10%] h-1 rounded-full bg-blue-600 mt-5 ms-1"></div>
        </p>

        <p className="pt-10">
          Would you like to develop the Internet of tomorrow in a motivated
          team? Are you ambitious and willing to take on responsibility in order
          to advance the further development of Boolmind together with us? Then
          we look forward to receiving your application!
        </p>

        <JobListings />
      </div>

      {/* offers */}
      <div className="p-10 md:px-28">
        <p
          data-aos="fade-right"
          className="text-4xl font-extrabold text-md text-opacity-85 font_barlow text-start mb-10"
        >
          WHAT WE OFFER
          <div className="w-[40%] md:w-[10%] h-1 rounded-full bg-blue-600 mt-5 ms-1"></div>
        </p>

        {offers.map((offer) => (
          <div className=" my-4" key={offer.title}>
            <h2 className="font-semibold text-lg">{offer.title}</h2>
            <p className="text-white/50 text-justify">{offer.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CareersPage;
