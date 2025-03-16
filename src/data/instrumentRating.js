import { FaFileMedical } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";

const instrumentRating = {
  data: {
    title: "Instrument Rating",
    url: "/programs/instrument-rating",
    slug: "instrument-rating",
    siteTitle: "Instrument Rating | Blitz Aviation",
    siteDescription:
      "Blitz Aviation is committed to helping you become a proficient instrument pilot, whether you're a private pilot looking to enhance your abilities or an aspiring professional pilot. Through a blend of comprehensive ground school instruction and hands on flight training, you'll acquire the knowledge and skills needed to confidently navigate and operate aircraft using instrument references alone.",
    intro: [
      "Blitz Aviation is committed to helping you become a proficient instrument pilot, whether you're a private pilot looking to enhance your abilities or an aspiring professional pilot. Through a blend of comprehensive ground school instruction and hands on flight training, you'll acquire the knowledge and skills needed to confidently navigate and operate aircraft using instrument references alone.",
      "Gain the expertise to fly in diverse weather conditions and execute precise instrument approaches. Take charge of your aviation journey and open doors to exciting new opportunities with our Instrument Training program at Blitz Aviation.",
    ],
    primaryImage: "/src/assets/images/pexels-junerydocto-15543665.jpg",
    primaryAlt: "Pilot flying on IFR flight",
    prerequisites: [
      "Hold a current private pilot certificate or apply for one alongside the instrument rating.",
      "Accumulate a specific amount of flight time, including: 50 hours of cross-country PIC (Pilot in Command) time. 40 hours of instrument training",
      "Hold a valid FAA 3rd Class Medical Certificate or a higher class",
    ],
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
