import { FaFileMedical } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";

const instrumentRating = {
  data: {
    title: "Instrument Rating",
    url: "/programs/instrument-rating",
    slug: "instrument-rating",
    siteTitle:
      "Instrument Rating Course in Utah | IFR Flight Training at Blitz Aviation",
    siteDescription:
      "Master instrument flying with Blitz Aviation's 2-month IFR training program in Ogden, Utah. Learn to navigate in all weather conditions with advanced avionics and gain the skills needed for a professional flying career.",
    siteKeywords:
      "instrument rating Utah, IFR training Salt Lake City, instrument flight training Ogden, weather flying training Utah, precision approach training, instrument pilot certification, IFR checkride preparation Utah, instrument rating course Utah, advanced pilot training, instrument flight rules training, flight training Ogden, pilot school Utah, aviation training Northern Utah",
    intro:
      "Earning an Instrument Rating (IR) enables you to fly in low visibility and adverse weather conditions using instruments. At Blitz Aviation, our IR training emphasizes precision in IFR operations, preparing you for commercial aviation and airline operations.",
    description: [
      "The Instrument Rating (IR) is a critical qualification that allows you to fly in low visibility and adverse weather conditions using instruments. Whether you're looking to enhance your private pilot skills or pursue a career in commercial aviation, the IR is an essential step in your journey. At Blitz Aviation, our IR program provides you with the knowledge and skills needed to excel as an instrument-rated pilot.",
      "Our IR program is designed to deepen your understanding of instrument flight and enhance your proficiency in IFR operations. With a focus on precision and safety, our program prepares you to navigate and operate aircraft using instrument references alone. By combining expert instruction with hands-on experience, we'll help you become a skilled and confident instrument-rated pilot.",
    ],
    primaryImage:
      "/src/assets/images/student-in-a-flight-lesson-at-blitz-aviation.webp",
    primaryAlt: "Pilot flying on IFR flight",
    secondaryImage: "/src/assets/images/cessna-172xp-control-panel.webp",
    secondaryAlt: "Cessna 172XP control panel",
    prerequisites: [
      "Hold a current private pilot certificate or apply for one alongside the instrument rating.",
      "Accumulate a specific amount of flight time, including: 50 hours of cross-country PIC (Pilot in Command) time. 40 hours of instrument training",
      "Hold a valid FAA 3rd Class Medical Certificate or a higher class",
    ],
    duration: "2 months, 3-5 times/week",
    steps: [
      {
        title: "Start Flight Training",
        icon: FaFileMedical,
        description:
          "Start your Instrument Rating by pairing up with a CFII. Accumulate a minimum of 50 hours of cross country flight time as PIC, including 40 hours of dedicated instrument training. Through guided practice in navigating approaches and holds, you'll gain the confidence to fly solely by reference to instruments, enabling safe and effective flight in diverse conditions.",
      },
      {
        title: "Pass the Written Exam",
        icon: FaRegEdit,
        description:
          "Prepare to succeed by learning the topics covered in the Instrument Rating written exam. Study regulations, navigation, meteorology, and instrument systems, demonstrating a comprehensive understanding of instrument flight principles. Passing this exam not only signifies your theoretical expertise but also solidifies your ability to make informed decisions in real world instrument flying situations.",
      },
      {
        title: "Complete Long Cross Country",
        icon: FaRegPaperPlane,
        description:
          "A pivotal step in your journey is completing an instrument cross-country flight, covering a minimum of 250 nautical miles along airways or ATC-directed routes. This experience equips you with the ability to navigate under IFR conditions, exposing you to diverse weather and navigation challenges. Successfully completing this flight showcases your proficiency in real-world instrument navigation.",
      },
      {
        title: "Complete the Instrument Checkride",
        icon: FaRegPaperPlane,
        description:
          "The checkride marks the culmination of your efforts, assessing both your theoretical knowledge and practical instrument flying skills. Pass the oral portion of the exam which covers regulations, procedures, and decision making. Then, complete a flight test where you'll demonstrate precise instrument maneuvers, approaches, and communications. Upon passing, you'll emerge as a confident instrument rated pilot, ready to safely navigate the skies in challenging weather conditions.",
      },
    ],
  },
};

export default instrumentRating;
