import { FaFileMedical } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";

const privatePilot = {
  data: {
    title: "Private Pilot",
    tagline: "No Checkride Waits - Finish on Time!",
    url: "/programs/private-pilot",
    slug: "private-pilot",
    siteTitle: "Private Pilot License Training in Ogden, Utah | Blitz Aviation",
    siteDescription:
      "Earn your Private Pilot License in as little as 3 months at Blitz Aviation in Ogden, UT. Learn to fly with expert CFIs in a structured, affordable program with Cessna aircraft and personalized instruction.",
    siteKeywords:
      "private pilot license Utah, PPL training Salt Lake City, student pilot course Ogden, beginner flight training Utah, recreational pilot license, private pilot certification Utah, learn to fly private pilot, flight training for beginners Utah, private pilot ground school, Utah private pilot course, flight training Ogden, pilot school Salt Lake City, aviation training Northern Utah, discovery flight Utah",
    primaryImage:
      "/src/assets/images/student-of-the-private-pilot-flight-training-program.webp",
    primaryAlt:
      "Woman smiling and leaning on an airplane while looking at the camera inside a hangar",
    secondaryImage:
      "/src/assets/images/student-at-ground-school-blitz-aviation.webp",
    secondaryAlt: "Teacher making an explanation during class in front of a white board with writing on it",
    intro:
      "The Private Pilot License (PPL) is your first step toward professional training and qualifies you to fly for personal or recreational purposes. At Blitz Aviation, our Private Pilot course integrates flight training and ground instruction through a structured syllabus, accelerating your learning and laying the foundation for future advanced ratings and certifications.",
    description: [
      "The Private Pilot License (PPL) is the first step in your journey to becoming a pilot. Whether you're looking to fly for personal enjoyment or pursue a career in aviation, the PPL is the foundation of your training. At Blitz Aviation, our comprehensive program is designed to provide you with the knowledge and skills needed to become a safe and proficient pilot.",
      "Our PPL program combines ground instruction with flight training to give you a well-rounded education in aviation. With a focus on safety, professionalism, and individual attention, our program prepares you to pass the FAA written and practical exams and earn your pilot's license. Whether you're a beginner or an experienced pilot looking to advance your skills, our program is tailored to meet your needs and help you achieve your goals.",
    ],
    prerequisites: [
      "Be able to read, speak, write, and understand the English language.",
      "Be at least 17 years old.",
    ],
    duration: "3 months, 2-3 times/week",
    steps: [
      {
        title: "Medical Exam",
        icon: FaFileMedical,
        description:
          "Before you can start flight training, you must pass a medical exam. The exam is conducted by an FAA-designated medical examiner and is a requirement for all pilot training programs.",
      },
      {
        title: "Written Test",
        icon: FaRegEdit,
        description:
          "The written test is a multiple-choice test that covers topics such as aerodynamics, weather, navigation, and regulations. You must pass the written test before you can take the flight test.",
      },
      {
        title: "Flight Test (Check Ride)",
        icon: FaRegPaperPlane,
        description:
          "The flight test, also known as the check ride, is the final step in the process of obtaining your pilot's license. During the check ride, you will demonstrate your flying skills to an FAA examiner. If you pass the check ride, you will be issued your pilot's license.",
      },
    ],
    cta: {
      title: "Ready to Start Your Flight Training?",
      description:
        "Take the first step toward earning your Private Pilot Certificate with Blitz Aviation. Contact us today to schedule your introductory flight and begin your journey in aviation!",
      link: "/enrollment-form",
      linkText: "Enroll Now",
      imagePath:
        "/src/assets/images/Student Checkride Devren passing PPL checkride CFI Hank and Mycah.webp",
      imageAlt: "Man in front of an airplane holding a poster with \"Private Pilot\" written on it",
    },
  },
};

export default privatePilot;
