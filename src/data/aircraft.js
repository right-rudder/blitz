const aircraft = [
  {
    name: "Cessna 172XP",
    number: "N122XP",
    image1: "/src/assets/images/cessna-172xp-blitz-aviation-wasatch-front-commercial-pilot.webp",
    image1Alt: "Cessna 172XP",
    image2: "/src/assets/images/cessna-172xp-control-panel-blitz-aviation-wasatch-front-pilot-training.webp",
    image2Alt: "Control Panel of Cessna 172XP",
    image3: "/src/assets/images/cessna-172xp-at-airport-blitz-aviation-wasatch-front-instrument-rating.webp",
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
    image1: "/src/assets/images/cessna-172p-blitz-aviation-wasatch-front-certified-flight-instructor-instrument.webp",
    image1Alt: "Cessna 172P",
    image2: "/src/assets/images/cessna-172p-rear-view-blitz-aviation-ogden-zero-to-hero-pilot-program.webp",
    image2Alt: "Cessna 172P about to takeoff",
    image3: "/src/assets/images/cessna-172p-at-airport-blitz-aviation-northern-utah-flight-school.webp",
    image3Alt: "Cessna 172P at Ogden Airport, Utah",
    description:
      "The Cessna 172P is a classic trainer that has been used by generations of pilots to earn their wings. With its simple design, reliable performance, and forgiving flight characteristics, the 172P is an ideal aircraft for student pilots and experienced aviators alike.",
    equipment: ["Dual Garmin G5", "Garmin 625 GPS", "Climb Prop"],
  },
  {
    name: "Piper Archer PA-28",
    number: "N2569Q",
    image1: "/src/assets/images/piper-cherokee-n2569q-outside-blitz-aviation-utah-accelerated-flight-training.webp",
    image1Alt: "Piper Archer Cherokee at Salt Lake",
    image2: "/src/assets/images/piper-cherokee-n2569q-inside-blitz-aviation-northern-utah-accelerated-flight-training.webp",
    image2Alt: "Piper PA-28 inside cockpit G5",
    image3: "/src/assets/images/piper-cherokee-n2569q-outside-3-blitz-aviation-davis-county-accelerated-flight-training.webp",
    image3Alt: "Piper Cherokee in Ogden Utah",
    description:
      "This Piper Archer II is a reliable, IFR-capable trainer equipped with modern avionics for today's student pilot. With dual Garmin G5s, a GNC 355 GPS navigator, and the GFC 500 autopilot, it offers a perfect balance of analog feel and digital precision, ideal for both VFR and IFR training.",
    equipment: [
      "Dual Garmin G5",
      "Garmin GNC 355 WAAS",
      "Garmin GFC 500 Autopilot",
    ],
  },
  {
    name: "Cessna 172M",
    number: "N9650V",
    image1: "/src/assets/images/cessna-172-blitz-aviation-utah-commercial-pilot.jpeg",
    image1Alt: "Cessna 172M parked on the ramp",
    image2: "/src/assets/images/cessna-172-panel-blitz-aviation-davis-county-commercial-pilot.jpeg",
    image2Alt: "Cessna 172M cockpit with avionics panel",
    image3: "/src/assets/images/cessna-172-side-blitz-aviation-northern-utah-flight-school.jpeg",
    image3Alt: "Side view of Cessna 172M in flight",
    description:
      "Our Cessna 172M is a classic, IFR-capable trainer ideal for private pilot and instrument training. Equipped with a Garmin 650 WAAS, dual Garmin G5, and a reliable steam gauge panel, it provides an excellent foundation for both VFR and IFR students.",
    equipment: ["Garmin 650 WAAS", "GFC 500 Autopilot", "Dual Garmin G5"],
  },
  /* {
    name: "Piper PA-30 Twin Comanche",
    number: "N808TY",
    image1: "/src/assets/images/twin-comanche-blitz-aviation-utah-aircraft-rental.jpeg",
    image1Alt: "Piper PA-30 Twin Comanche on the tarmac",
    image2: "/src/assets/images/twin-comanche-panel-blitz-aviation-northern-utah-certified-flight-instructor-instrument.jpeg",
    image2Alt: "Piper PA-30 Twin Comanche cockpit panel",
    image3: "/src/assets/images/twin-comanche-top-blitz-aviation-ogden-private-pilot.jpeg",
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
  }, */
  {
    name: "Beechcraft 55 Baron",
    number: "N8145R",
    image1: "/src/assets/images/front-view-beechcraft-55-baron-n8145r-multi-engine-rating-blitz-aviation-wasatch-front-accelerated-flight-training.jpg",
    image1Alt: "Front view of a Beechcraft 55 Baron multi engine aircraft",
    description:
      "The Beechcraft 55 Baron is a light, twin-engine piston aircraft known for its speed and performance. Additionally, due to its responsive handling, comfortable cabin, and suitability for IFR training, it is the perfect option for your multi-engine rating lessons.",
    equipment: [
      "Garmin G500 glass panel", 
      "Garmin GTN 650",
    ],
  },
  // {
  //   name: "Cirrus SR22T",
  //   number: "N345PK",
  //   image1: "/src/assets/images/n345pk-blitz-airplane-blitz-aviation-northern-utah-private-pilot.png",
  //   image1Alt: "Cirrus SR22T at Blitz Aviation",
  //   image2: "/src/assets/images/n345pk-rearview-blitz-aviation-salt-city-lake-multi-engine-rating.jpeg",
  //   image2Alt: "Cirrus SR22T rear view",
  //   image3: "/src/assets/images/n345pk-sideview-blitz-aviation-wasatch-front-discovery-flight.jpeg",
  //   image3Alt: "Cirrus SR22T side view",
  //   description:
  //     "The Cirrus SR22T is a top-of-the-line, high-performance single-engine aircraft equipped with the latest in safety, comfort, and avionics. With its powerful turbocharged engine, luxurious cabin, and advanced technology, it's the perfect aircraft for cross-country flights, business travel, or high-end personal flying.",
  //   equipment: [
  //     "Continental TSIO-550-K Turbocharged Engine (315 HP)",
  //     "Garmin Perspective+ Avionics Suite",
  //     "GFC 700 Autopilot",
  //     "Flight Into Known Icing (FIKI) System",
  //     "Cirrus Airframe Parachute System (CAPS)",
  //   ],
  // },
];

export default aircraft;
