import { FaFileMedical } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";

const cfii = {
  data: {
    title: "Certified Flight Instructor Instrument",
    url: "/programs/cfii",
    slug: "cfii",
    siteTitle: "Certified Flight Instructor Instrument | Blitz Aviation",
    siteDescription:
      "Experience the power and precision of multi engine aircraft as our expert instructors guide you through comprehensive training. With advanced systems, twin engines, and enhanced performance capabilities, Blitz Aviation's Piper Seminole provides an exceptional platform for honing your multi engine skills.",
    intro:
      "Becoming a Certified Flight Instructor - Instrument (CFII) takes your teaching skills to the next level, enabling you to instruct students in instrument flying techniques. Our CFII program at Blitz Aviation equips you with the expertise to teach instrument rating candidates, further refining your own instrument flying skills and deepening your understanding of IFR procedures.",
    description: [
      "The Certified Flight Instructor - Instrument (CFII) rating is a valuable addition to your qualifications, allowing you to teach students the intricacies of instrument flight. Whether you're looking to enhance your teaching abilities, build your instrument proficiency, or expand your career opportunities, the CFII rating is a critical step in your journey. At Blitz Aviation, our CFII program provides you with the knowledge and skills needed to excel as an instrument flight instructor.",
      "Our CFII program is designed to enhance your understanding of instrument flight and deepen your proficiency in IFR operations. With a focus on teaching techniques, instrument procedures, and flight safety, our program prepares you to guide students through the complexities of instrument flying. By combining advanced flight training with expert instruction, we'll help you become a skilled and effective CFII.",
    ],
    primaryImage:
      "/src/assets/images/pexels-iryna-liabiodkina-75708745-8578729.jpg",
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

export default cfii;
