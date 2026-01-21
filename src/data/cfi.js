import { FaFileMedical } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";

const cfi = {
  data: {
    title: "Certified Flight Instructor",
    url: "/programs/cfi",
    slug: "cfi",
    siteTitle:
      "Certified Flight Instructor Course in Utah | CFI Training at Blitz Aviation",
    siteDescription:
      "Launch your aviation career as a Certified Flight Instructor at Blitz Aviation in Ogden, Utah. Build flight hours, gain real-world teaching experience, and earn while developing your commercial pilot skills.",
    siteKeywords:
      "CFI training Utah, flight instructor certification Salt Lake City, certified flight instructor course Ogden, teaching endorsement Utah, aviation instructor training, CFI checkride preparation Utah, flight instructor school Utah, becoming a flight instructor, CFI certificate Utah, flight training instructor course, flight training Ogden, pilot school Utah, aviation education career",
    intro:
      "Becoming a Certified Flight Instructor (CFI) is a strategic step for aspiring airline pilots, enabling you to build flight hours while earning a income. Our tailored CFI programs at Blitz Aviation equip you with confidence, professionalism, and refined skills to instruct effectively and accelerate your airline career.",
    description: [
      "The Certified Flight Instructor (CFI) certificate is a valuable qualification that allows you to teach and mentor aspiring pilots. Whether you're looking to build flight hours, share your passion for aviation, or prepare for a career with the airlines, the CFI certificate is an essential step in your journey. At Blitz Aviation, our CFI program provides you with the knowledge and skills needed to excel as a flight instructor.",
      "Our CFI program is designed to enhance your teaching abilities, deepen your understanding of aviation regulations, and refine your flight skills. With a focus on professionalism and safety, our program prepares you to guide students through the complexities of flight training. By combining expert instruction with hands-on experience, we'll help you become a skilled and effective CFI.",
    ],
    primaryImage:
      "/src/assets/images/ground-school-at-blitz-aviation-blitz-aviation-ogden-zero-to-hero-pilot-program.webp",
    primaryAlt: "Certified Flight Instructor at Blitz Aviation",
    secondaryImage: "/src/assets/images/cessna-172p-at-ogden-airport.webp",
    secondaryAlt: "Cessna 172p at Ogden Airport, Utah",
    prerequisites: [
      "Hold either a commercial pilot certificate or an airline transport pilot certificate with an instrument rating",
      "Secure a valid FAA 3rd Class Medical Certificate or a higher class",
      "Accumulated at least 250 hours of flight time",
    ],
    duration: "",
    steps: [
      {
        title: "Meet Federal Aviation Regulations (FAR) Requirements",
        icon: FaFileMedical,
        description:
          "To become a Certified Flight Instructor (CFI), you must meet the Federal Aviation Regulations (FAR) requirements. These include holding a commercial pilot certificate or an airline transport pilot certificate with an instrument rating, securing a valid FAA 3rd Class Medical Certificate or a higher class, and accumulating at least 250 hours of flight time. Our instructors will guide you through the process of meeting these requirements, ensuring that you are well prepared to begin your CFI training.",
      },
      {
        title: "Complete CFI Ground School",
        icon: FaRegEdit,
        description:
          "Our CFI Ground School provides you with the knowledge and skills needed to become an effective flight instructor. You'll learn about teaching techniques, flight training regulations, and instructional methods that will help you guide and mentor aspiring pilots. With a focus on professionalism and safety, our instructors will equip you with the tools you need to succeed in the dynamic field of aviation instruction.",
      },
      {
        title: "Pass the Fundamentals of Instruction (FOI) Written Exam",
        icon: FaRegPaperPlane,
        description:
          "As part of your CFI training, you'll need to pass the Fundamentals of Instruction (FOI) written exam. This exam covers topics such as learning theory, teaching methods, and human behavior, providing you with a solid foundation in instructional techniques. Our instructors will help you prepare for the exam, ensuring that you have the knowledge and skills needed to pass with confidence.",
      },
    ],
    cta: {
      title: "Share Your Passion for Aviation",
      description:
        "Inspire the next generation of pilots as a Certified Flight Instructor. Train with Blitz Aviation and take the next step in your professional flying career.",

      link: "/enrollment-form",
      linkText: "Enroll Now",
      imagePath: "/src/assets/images/student-checkride-cfi-tim-blitz-aviation-ogden-pilot-training.webp",
      imageAlt: "Student in front of an airplane while holding a poster with \"Certified Flight Instructor Instrument Rated\" on it",
    },
  },
};

export default cfi;
