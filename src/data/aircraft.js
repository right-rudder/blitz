const aircraft = [
  {
    name: "Cessna 172XP",
    number: "N122XP",
    image1: "/src/assets/images/cessna-172xp.webp",
    image1Alt: "Cessna 172XP",
    image2: "/src/assets/images/cessna-172xp-control-panel.webp",
    image2Alt: "Control Panel of Cessna 172XP",
    image3: "/src/assets/images/cessna-172xp-at-ogden-airport.webp",
    image3Alt: "Cessna 172XP at Blitz Aviation in Ogden, Utah",
    description:
      "The Cessna 172XP is a versatile and reliable aircraft that is perfect for flight training, sightseeing, and cross-country flights. With its advanced avionics and comfortable cabin, the 172XP is a popular choice among pilots of all experience levels.",
    equipment: [
      "GFC 500 Autopilot (TAA)",
      "Garmin G530 WAAS",
      "Dual Garmin G5s",
    ],
  },
  {
    name: "Cessna 172P",
    number: "N99832",
    image1: "/src/assets/images/cessna-172p.webp",
    image1Alt: "Cessna 172P",
    image2: "/src/assets/images/cessna-172p-rear-view.webp",
    image2Alt: "Cessna 172P about to takeoff",
    image3: "/src/assets/images/cessna-172p-at-ogden-airport.webp",
    image3Alt: "Cessna 172P at Ogden Airport, Utah",
    description:
      "The Cessna 172P is a classic trainer that has been used by generations of pilots to earn their wings. With its simple design, reliable performance, and forgiving flight characteristics, the 172P is an ideal aircraft for student pilots and experienced aviators alike.",
    equipment: ["Dual Garmin G5", "Garmin 625 GPS", "Climb Prop"],
  },
  {
    name: "Piper Archer PA-28",
    number: "N2569Q",
    image1: "/src/assets/images/piper-cherokee-N2569Q-outside.webp",
    image1Alt: "Piper Archer Cherokee at Salt Lake",
    image2: "/src/assets/images/piper-cherokee-N2569Q-inside.webp",
    image2Alt: "Piper PA-28 inside cockpit G5",
    image3: "/src/assets/images/piper-cherokee-N2569Q-outside-3.webp",
    image3Alt: "Piper Cherokee in Ogden Utah",
    description:
      "This Piper Archer II is a reliable, IFR-capable trainer equipped with modern avionics for today's student pilot. With dual Garmin G5s, a GNC 355 GPS navigator, and the GFC 500 autopilot, it offers a perfect balance of analog feel and digital precision—ideal for both VFR and IFR training.",
    equipment: [
      "Dual Garmin G5",
      "Garmin GNC 355 WAAS",
      "Garmin GFC 500 Autopilot",
    ],
  },
  {
    name: "Cessna 172M",
    number: "N9650V",
    image1: "/src/assets/images/cessna-172.jpeg",
    image1Alt: "Cessna 172M parked on the ramp",
    image2: "/src/assets/images/cessna-172-panel.jpeg",
    image2Alt: "Cessna 172M cockpit with avionics panel",
    image3: "/src/assets/images/cessna-172-side.jpeg",
    image3Alt: "Side view of Cessna 172M in flight",
    description:
      "Our Cessna 172M is a classic, IFR-capable trainer ideal for private pilot and instrument training. Equipped with a Garmin GNS 430 WAAS GPS/NAV/COM, dual VOR/ILS, and a reliable steam gauge panel, it provides an excellent foundation for both VFR and IFR students.",
    equipment: [
      "Garmin GNS 430 WAAS GPS/NAV/COM",
      "King KX-155 NAV/COM",
      "Garmin GTX Transponder (ADS-B Out)",
      "Dual VOR/ILS",
    ],
  },
  {
    name: "Piper PA-30 Twin Comanche",
    number: "N808TY",
    image1: "/src/assets/images/twin-comanche.jpeg",
    image1Alt: "Piper PA-30 Twin Comanche on the tarmac",
    image2: "/src/assets/images/twin-comanche-panel.jpeg",
    image2Alt: "Piper PA-30 Twin Comanche cockpit panel",
    image3: "/src/assets/images/twin-comanche-top.jpeg",
    image3Alt: "Top view of Piper PA-30 Twin Comanche in flight",
    description:
      "Our Piper PA-30 Twin Comanche is a fast, efficient multi-engine trainer ideal for pilots pursuing their multi-engine rating or building time. It offers excellent performance, range, and fuel efficiency for both training and cross-country flights.",
    equipment: [
      "Dual Garmin G5 Electronic Flight Instruments",
      "Garmin GTN 650 WAAS GPS/NAV/COM",
      "Garmin GTX 345 Transponder (ADS-B In/Out)",
      "PS Engineering Audio Panel",
      "JPI EDM-760 Engine Monitoring System",
    ],
  },
];

export default aircraft;
