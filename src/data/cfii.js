import { FaFileMedical } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";

const cfii = {
  data: {
    title: "Certified Flight Instructor Instrument",
    url: "/programs/cfii",
    slug: "cfii",
    siteTitle:
      "CFII Training in Utah | Instrument Instructor Course at Blitz Aviation",
    siteDescription:
      "Advance your teaching credentials with Blitz Aviation's CFII program in Ogden, Utah. Learn to instruct instrument students and refine your IFR flying skills while increasing your value in the aviation job market.",
    siteKeywords:
      "CFII training Utah, instrument flight instructor, certified flight instructor instrument, teaching IFR flying, instrument instruction certification, advanced flight instructor training, CFII checkride preparation, aviation career advancement, instrument teaching qualification, instrument flight rules instructor, IFR teaching career",
    intro:
      "Becoming a Certified Flight Instructor - Instrument (CFII) takes your teaching skills to the next level, enabling you to instruct students in instrument flying techniques. Our CFII program at Blitz Aviation equips you with the expertise to teach instrument rating candidates, further refining your own instrument flying skills and deepening your understanding of IFR procedures.",
    description: [
      "The Certified Flight Instructor - Instrument (CFII) rating is a valuable addition to your qualifications, allowing you to teach students the intricacies of instrument flight. Whether you're looking to enhance your teaching abilities, build your instrument proficiency, or expand your career opportunities, the CFII rating is a critical step in your journey. At Blitz Aviation, our CFII program provides you with the knowledge and skills needed to excel as an instrument flight instructor.",
      "Our CFII program is designed to enhance your understanding of instrument flight and deepen your proficiency in IFR operations. With a focus on teaching techniques, instrument procedures, and flight safety, our program prepares you to guide students through the complexities of instrument flying. By combining advanced flight training with expert instruction, we'll help you become a skilled and effective CFII.",
    ],
    primaryImage: "/src/assets/images/cfi-at-blitz-aviation.webp",
    primaryAlt: "Certified Flight Instructor Instrument CFII at Blitz Aviation",
    secondaryImage:
      "/src/assets/images/student-consultation-in-blitz-office.webp",
    secondaryAlt: "Student consultation in Blitz Aviation office",
    prerequisites: [
      "Hold a current private pilot certificate",
      "Hold a valid FAA 3rd Class Medical Certificate or a higher class",
    ],
    duration: "",
    steps: [
      {
        title: "Complete Ground School and Flight Training",
        icon: FaFileMedical,
        description:
          "The CFII program begins with a structured ground school that reinforces the principles of instrument flight, focusing on teaching techniques and best practices for instrument instruction. You'll review IFR regulations, procedures, and navigation while learning how to effectively teach these concepts to future instrument students. Our experienced instructors will guide you through advanced instructional techniques, ensuring that you're prepared to deliver clear and concise explanations in both the classroom and cockpit. During the flight portion, you'll apply these teaching principles while flying simulated instrument scenarios, refining your ability to demonstrate and explain IFR maneuvers from the right seat.",
      },
      {
        title: "Accumulate Flight Time and Teaching Practice",
        icon: FaRegEdit,
        description:
          "As you advance in the program, you'll gain experience teaching instrument procedures while flying under simulated IFR conditions. You'll practice guiding students through instrument approaches, holds, and enroute navigation. Our instructors will mentor you through scenario-based training sessions, where you'll refine your ability to manage diverse student learning styles and build confidence in providing effective IFR instruction. This stage also emphasizes honing your ability to identify and correct student errors during complex instrument operations.",
      },
      {
        title: "Pass Written and Practical Exams",
        icon: FaRegPaperPlane,
        description:
          "To obtain your CFII certificate, you'll need to pass the FAA’s CFII knowledge test and the practical flight test (checkride). The written exam evaluates your knowledge of instrument procedures and instructional techniques, while the practical exam assesses your ability to teach instrument flight skills in real-world scenarios. Our instructors will ensure you are fully prepared, providing personalized guidance and mock oral exams to build your confidence. With focused preparation and hands-on training, you'll be ready to excel in your checkride and earn your CFII certification.",
      },
    ],
  },
};

export default cfii;
