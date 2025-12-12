import { FaFileMedical } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";

const commercialPilot = {
  data: {
    title: "Commercial Pilot",
    tagline: "No Checkride Waits - Finish on Time!",
    url: "/programs/commercial-pilot",
    slug: "commercial-pilot",
    siteTitle:
      "Commercial Pilot Training in Utah | Professional Aviation Career at Blitz Aviation",
    siteDescription:
      "Train to become a commercial pilot in just 3 months at Blitz Aviation in Ogden, Utah. Master advanced maneuvers and complex aircraft operations while preparing for a professional aviation career with our experienced instructors.",
    siteKeywords:
      "commercial pilot license Utah, CPL training Salt Lake City, professional pilot training Ogden, career pilot course Utah, airline pilot preparation, commercial aviation training Utah, professional pilot certification, aviation career training Utah, commercial pilot course, airline pilot training Utah, flight training Ogden, pilot school Salt Lake City, aviation training Northern Utah",
    intro:
      "The Commercial Pilot Certificate (CPL) elevates your skills to professional standards, enabling you to receive compensation for flying services. Our CPL program at Blitz Aviation focuses on advanced maneuvers, complex aircraft operations, and aviation professionalism, unlocking opportunities in passenger transport, cargo, and specialized aviation fields.",
    description: [
      "The Commercial Pilot Certificate (CPL) is the gateway to a career in aviation, allowing you to fly for hire or compensation. Whether you're looking to become a flight instructor, fly for a charter company, or pursue a career with the airlines, the CPL is a critical step in your journey. At Blitz Aviation, our comprehensive program prepares you for the challenges and opportunities of professional flying.",
      "Our CPL program is designed to build on your existing skills and experience, taking you to the next level of proficiency and professionalism. With a focus on advanced flight maneuvers, complex aircraft operations, and aviation regulations, our program equips you with the knowledge and skills needed to succeed in the competitive world of commercial aviation.",
    ],
    primaryImage:
      "/src/assets/images/cfi-and-student-at-blitz-accelerated-training-program-blitz-aviation-ogden-accelerated-flight-training.webp",
    primaryAlt: "Two men chatting with mountains on the background",
    secondaryImage:
      "/src/assets/images/student-pulling-cessna-out-of-the-hangar-at-blitz-aviation-blitz-aviation-utah-discovery-flight.webp",
    secondaryAlt:
      "Student pulling Cessna out of the hangar at Blitz Aviation in Ogden, Utah",
    prerequisites: [
      "Hold a current private pilot certificate",
      "Have a minimum of 250 hours of flight time, including 100 hours of pilot-in-command time",
      "Obtain a valid FAA 2nd Class Medical Certificate or a higher class",
    ],
    duration: "3 months, 3-5 times/week",
    steps: [
      {
        title: "Build the Flight Hours",
        icon: FaFileMedical,
        description:
          "Our program guides you towards amassing the required 250 flight hours, including 100 hours as PIC. With a structured blend of flight training, cross country missions, and solo experiences, you'll gain the necessary hands on exposure to diverse flying conditions, enhancing your skills and building the confidence that defines a seasoned commercial pilot.",
      },
      {
        title: "Pass the Written Exam",
        icon: FaRegEdit,
        description:
          "Our comprehensive curriculum covers a wide spectrum of subjects, from aviation regulations and meteorology to navigation and aerodynamics. Our experienced instructors ensure that you are well equipped to succeed in the written examination. We provide targeted guidance to help you not only pass the test but also acquire a good understanding of necessary aeronautical knowledge.",
      },
      {
        title: "Complete Requirements",
        icon: FaRegPaperPlane,
        description:
          "Achieving your Commercial Pilot Certificate involves fulfilling specific flight requirements, including demanding long cross country flights and other critical experiences. At Blitz Aviation, our commercial program ensures that you master advanced flight maneuvers and precise navigation techniques. With your long cross country flight, you'll demonstrate your ability to plan and execute complex missions, showcasing your aptitude for real world challenges.",
      },
      {
        title: "Pass the Commercial Checkride",
        icon: FaRegPaperPlane,
        description:
          "With a focus on safety and precision, our instructors ensure that you are thoroughly ready for the check ride. As you confidently take to the skies with the examiner, you'll showcase the culmination of your training and the expertise you've gained throughout your journey with Blitz Aviation.",
      },
    ],
    cta: {
      title: "Turn Your Passion into a Career",
      description:
        "Take the leap from private flying to professional aviation with a Commercial Pilot Certificate from Blitz Aviation. Start your training today and prepare for a career in the skies.",
      link: "/enrollment-form",
      linkText: "Enroll Now",
      imagePath: "/src/assets/images/student-checkride-jordan-commercial-blitz-aviation-davis-county-instrument-rating.webp",
      imageAlt: "Student and CFI standing in front of and airplane while holding a poster with \"Commercial Rated\" on it",
    },
  },
};

export default commercialPilot;
