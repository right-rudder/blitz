import { FaFileMedical } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";

const multiEngine = {
  data: {
    title: "Multi-Engine Rating",
    url: "/programs/multi-engine",
    slug: "multi-engine",
    siteTitle: "Multi-Engine Rating | Blitz Aviation",
    siteDescription:
      "Experience the power and precision of multi engine aircraft as our expert instructors guide you through comprehensive training. With advanced systems, twin engines, and enhanced performance capabilities, Blitz Aviation's Piper Seminole provides an exceptional platform for honing your multi engine skills.",
    intro:
      "A Multi-Engine Rating qualifies you to fly multi-engine aircraft, a prerequisite for most commercial airline roles, and prepares you to handle complex scenarios like engine failures. At Blitz Aviation, our multi-engine training emphasizes precision, safety, and operational excellence, enhancing your credentials and expanding career opportunities in airline operations.",
    primaryImage: "/src/assets/images/pexels-kokorevas-5313876.jpg",
    primaryAlt: "Multi engine instructor pass checkride",
    prerequisites: [
      "Hold a current private pilot certificate",
      "Hold a valid FAA 3rd Class Medical Certificate or a higher class",
    ],
    steps: [
      {
        title: "Complete Ground School and Flight Training",
        icon: FaFileMedical,
        description:
          "Our multi engine training program begins with a comprehensive ground school that covers the principles of multi engine flight, systems, and procedures. You'll learn about the unique characteristics of multi engine aircraft and the critical considerations for safe operation. With our expert instructors, you'll then take to the skies in our Piper Seminole, where you'll gain hands-on experience with twin engines and advanced systems. Through a structured blend of flight training, you'll master multi engine operations and develop the skills needed to confidently pilot multi engine aircraft.",
      },
      {
        title: "Accumulate Flight Time",
        icon: FaRegEdit,
        description:
          "As you progress through the program, you'll accumulate the flight time required to demonstrate your proficiency in multi engine operations. With a focus on precision and safety, our instructors will guide you through a series of flight maneuvers and scenarios that will enhance your skills and build your confidence. From engine-out procedures to complex flight profiles, you'll develop the expertise needed to handle the challenges of multi engine flight.",
      },
      {
        title: "Pass Written and Practical Exams",
        icon: FaRegPaperPlane,
        description:
          "To earn your multi engine rating, you'll need to pass both a written exam and a practical flight test. Our instructors will ensure that you are well prepared for these assessments, guiding you through the necessary knowledge and skills to succeed. With a focus on excellence and professionalism, we'll help you achieve your goal of becoming a multi engine rated pilot.",
      },
    ],
  },
};

export default multiEngine;
