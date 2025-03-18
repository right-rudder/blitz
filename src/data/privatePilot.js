import { FaFileMedical } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";

const privatePilot = {
  data: {
    title: "Private Pilot",
    url: "/programs/private-pilot",
    slug: "private-pilot",
    siteTitle: "Private Pilot | Blitz Aviation",
    siteDescription:
      "Blitz Aviation believes that anyone with a passion for flying can become a pilot with the right training, dedication, and support. Watch our video by Bill Macon that outlines the three main tests you need to pass to obtain your pilot's license: the medical exam, written test, and flight test (check ride). We believe that the key to your success lies in our commitment to providing the highest quality flight training available, with a focus on safety, professionalism, and individual attention.",
    primaryImage: "/src/assets/images/pexels-tracvu-5741643.jpg",
    primaryAlt: "Pilot flying on IFR flight",
    intro:
      "The Private Pilot License (PPL) is your first step toward professional training and qualifies you to fly for personal or recreational purposes. At Blitz Aviation, our Private Pilot course integrates flight training and ground instruction through a structured syllabus, accelerating your learning and laying the foundation for future advanced ratings and certifications.",
    prerequisites: [
      "Be able to read, speak, write, and understand the English language.",
      "Be at least 17 years old.",
      "Obtain a valid FAA 3rd Class Medical Certificate or a higher class",
    ],
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
    faqs: [
      {
        question: "¿Cuál es la duración de la carrera?",
        answer:
          "<p>4 meses de curso teórico y, al finalizar el curso teórico:</p><ul className='list-disc ml-5'><li>41 horas de vuelo</li><li>10 horas de simulador</li></ul>",
      },
      {
        question: "¿Qué incluye la carrera?",
        answer:
          "<ul className='list-disc ml-5'><li>Teoría</li><li>41 horas de vuelo</li><li>10 horas de simulador</li></ul>",
      },
      {
        question: "¿Qué credencial obtengo al finalizar la carrera?",
        answer:
          "<ul className='list-disc ml-5'><li>Licencia de piloto comercial de ala fija</li></ul>",
      },
    ],
  },
};

export default privatePilot;
