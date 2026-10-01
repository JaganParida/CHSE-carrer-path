export const STREAM_SUBJECTS = {
  Science: ["Physics", "Chemistry", "Mathematics", "Biology", "IT", "English", "Odia"],
  Commerce: ["Accountancy", "BSM", "BMS", "Economics", "IT", "English", "Odia"],
  Arts: ["History", "Political Science", "Economics", "Logic", "Sociology", "English", "Odia"],
};

export const SUBJ_THEMES = {
  Physics: { color: "from-sky-500/20 to-blue-600/10", border: "border-sky-500/30", text: "text-sky-400", badge: "bg-sky-500/10 text-sky-400 border-sky-500/20" },
  Chemistry: { color: "from-indigo-500/20 to-purple-600/10", border: "border-indigo-500/30", text: "text-indigo-400", badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" },
  Mathematics: { color: "from-cyan-500/20 to-teal-600/10", border: "border-cyan-500/30", text: "text-cyan-400", badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
  Biology: { color: "from-emerald-500/20 to-green-600/10", border: "border-emerald-500/30", text: "text-emerald-400", badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
  IT: { color: "from-blue-500/20 to-slate-600/10", border: "border-blue-500/30", text: "text-blue-400", badge: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  English: { color: "from-rose-500/20 to-red-600/10", border: "border-rose-500/30", text: "text-rose-400", badge: "bg-rose-500/10 text-rose-400 border-rose-500/20" },
  Odia: { color: "from-teal-500/20 to-emerald-600/10", border: "border-teal-500/30", text: "text-teal-400", badge: "bg-teal-500/10 text-teal-400 border-teal-500/20" },
  Accountancy: { color: "from-emerald-500/20 to-teal-600/10", border: "border-emerald-500/30", text: "text-emerald-400", badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
  BSM: { color: "from-blue-500/20 to-indigo-600/10", border: "border-blue-500/30", text: "text-blue-400", badge: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  BMS: { color: "from-indigo-500/20 to-cyan-600/10", border: "border-indigo-500/30", text: "text-indigo-400", badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" },
  Economics: { color: "from-amber-500/20 to-orange-600/10", border: "border-amber-500/30", text: "text-amber-400", badge: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
  History: { color: "from-orange-500/20 to-amber-600/10", border: "border-orange-500/30", text: "text-orange-400", badge: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
  "Political Science": { color: "from-purple-500/20 to-violet-600/10", border: "border-purple-500/30", text: "text-purple-400", badge: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
  Logic: { color: "from-cyan-500/20 to-blue-600/10", border: "border-cyan-500/30", text: "text-cyan-400", badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
  Sociology: { color: "from-pink-500/20 to-rose-600/10", border: "border-pink-500/30", text: "text-pink-400", badge: "bg-pink-500/10 text-pink-400 border-pink-500/20" },
};

export const SYLLABUS_DATA = {
  "Physics": {
    "11": [
      {
        "unitId": "ph11_u1",
        "unit": "Unit I: Physical World and Measurement",
        "chapters": [
          {
            "id": "ph11_1_1",
            "title": "Physical World, Units and Dimensions",
            "desc": "SI Units, accuracy, precision, errors in measurement, significant figures, dimensional analysis.",
            "videoUrl": "https://youtu.be/tx76BJIqOd4"
          },
          {
            "id": "ph11_1_2",
            "title": "Mathematical Tools for Physics",
            "desc": "Elementary calculus, coordinate systems, and vector algebra basics.",
            "videoUrl": "https://youtu.be/tx76BJIqOd4"
          }
        ]
      },
      {
        "unitId": "ph11_u2",
        "unit": "Unit II: Kinematics",
        "chapters": [
          {
            "id": "ph11_2_1",
            "title": "Motion in a Straight Line",
            "desc": "Frame of reference, position-time graphs, speed, velocity, uniform acceleration equations.",
            "videoUrl": "https://youtu.be/HYQdPGN3ZXQ"
          },
          {
            "id": "ph11_2_2",
            "title": "Motion in a Plane & Projectiles",
            "desc": "Scalars and vectors, relative velocity, unit vectors, projectile motion, uniform circular motion.",
            "videoUrl": "https://youtu.be/HYQdPGN3ZXQ"
          }
        ]
      },
      {
        "unitId": "ph11_u3",
        "unit": "Unit III: Laws of Motion",
        "chapters": [
          {
            "id": "ph11_3_1",
            "title": "Newton's Laws of Motion & Friction",
            "desc": "Concept of force, inertia, Newton's laws, linear momentum conservation, static & kinetic friction.",
            "videoUrl": "https://youtu.be/PLQ0_vZF25o"
          },
          {
            "id": "ph11_3_2",
            "title": "Dynamics of Circular Motion",
            "desc": "Centripetal force, banked curves, vehicle dynamics on circular tracks.",
            "videoUrl": "https://youtu.be/PLQ0_vZF25o"
          }
        ]
      },
      {
        "unitId": "ph11_u4",
        "unit": "Unit IV: Work, Energy, and Power",
        "chapters": [
          {
            "id": "ph11_4_1",
            "title": "Work, Energy, and Power",
            "desc": "Work done by constant & variable forces, work-energy theorem, kinetic & potential energy.",
            "videoUrl": "https://youtu.be/eACeA8W0tCQ"
          },
          {
            "id": "ph11_4_2",
            "title": "Collisions & Conservation Principles",
            "desc": "Conservative forces, mechanical energy conservation, elastic & inelastic collisions in 1D.",
            "videoUrl": "https://youtu.be/eACeA8W0tCQ"
          }
        ]
      },
      {
        "unitId": "ph11_u5",
        "unit": "Unit V: Motion of System of Particles and Rigid Bodies",
        "chapters": [
          {
            "id": "ph11_5_1",
            "title": "Centre of Mass & Rotational Motion",
            "desc": "Centre of mass of 2-particle system, momentum conservation, torque, angular momentum.",
            "videoUrl": "https://youtu.be/Y5qK2_m8w-k"
          },
          {
            "id": "ph11_5_2",
            "title": "Moment of Inertia",
            "desc": "Moment of inertia, radius of gyration, rotational theorems for simple geometric bodies.",
            "videoUrl": "https://youtu.be/Y5qK2_m8w-k"
          }
        ]
      },
      {
        "unitId": "ph11_u6",
        "unit": "Unit VI: Gravitation",
        "chapters": [
          {
            "id": "ph11_6_1",
            "title": "Gravitation & Planetary Laws",
            "desc": "Kepler's laws, universal gravitation, acceleration due to gravity (g) variations.",
            "videoUrl": "https://youtu.be/u8sL8m9b7w0"
          },
          {
            "id": "ph11_6_2",
            "title": "Gravitational Potential & Satellites",
            "desc": "Gravitational potential energy, escape velocity, orbital velocity of satellites.",
            "videoUrl": "https://youtu.be/u8sL8m9b7w0"
          }
        ]
      },
      {
        "unitId": "ph11_u7",
        "unit": "Unit VII: Properties of Bulk Matter",
        "chapters": [
          {
            "id": "ph11_7_1",
            "title": "Mechanical Properties of Solids",
            "desc": "Elastic behavior, stress-strain relationship, Hooke's law, Young's modulus.",
            "videoUrl": "https://youtu.be/tx76BJIqOd4"
          },
          {
            "id": "ph11_7_2",
            "title": "Mechanical Properties of Fluids",
            "desc": "Pascal's law, surface tension, viscosity, Stokes' law, terminal velocity, Bernoulli's theorem.",
            "videoUrl": "https://youtu.be/tx76BJIqOd4"
          },
          {
            "id": "ph11_7_3",
            "title": "Thermal Properties of Matter",
            "desc": "Heat, temperature, thermal expansion, specific heat capacity, calorimetry, heat transfer.",
            "videoUrl": "https://youtu.be/tx76BJIqOd4"
          }
        ]
      },
      {
        "unitId": "ph11_u8",
        "unit": "Unit VIII: Thermodynamics",
        "chapters": [
          {
            "id": "ph11_8_1",
            "title": "Thermodynamics & Thermodynamic Processes",
            "desc": "Thermal equilibrium, Zeroth law, internal energy, First law, isothermal & adiabatic processes, Second law.",
            "videoUrl": "https://youtu.be/tx76BJIqOd4"
          }
        ]
      },
      {
        "unitId": "ph11_u9",
        "unit": "Unit IX: Kinetic Theory of Gases",
        "chapters": [
          {
            "id": "ph11_9_1",
            "title": "Kinetic Theory of Gases",
            "desc": "Equation of state of ideal gas, RMS speed, degrees of freedom, law of equipartition of energy.",
            "videoUrl": "https://youtu.be/tx76BJIqOd4"
          }
        ]
      },
      {
        "unitId": "ph11_u10",
        "unit": "Unit X: Oscillations and Waves",
        "chapters": [
          {
            "id": "ph11_10_1",
            "title": "Oscillations & SHM",
            "desc": "Periodic motion, frequency, Simple Harmonic Motion (SHM), simple pendulum.",
            "videoUrl": "https://youtu.be/tx76BJIqOd4"
          },
          {
            "id": "ph11_10_2",
            "title": "Waves & Acoustics",
            "desc": "Longitudinal & transverse waves, wave speed, superposition principle, standing waves in strings and pipes.",
            "videoUrl": "https://youtu.be/tx76BJIqOd4"
          }
        ]
      }
    ],
    "12": [
      {
        "unitId": "ph12_u1",
        "unit": "Unit I: Electrostatics",
        "chapters": [
          {
            "id": "ph12_1_1",
            "title": "Electric Charges and Fields",
            "desc": "Coulomb's law, electric field due to point charge, dipole, electric flux, Gauss's theorem.",
            "videoUrl": "https://youtu.be/P_r3N9pC5p4"
          },
          {
            "id": "ph12_1_2",
            "title": "Electrostatic Potential and Capacitance",
            "desc": "Electric potential, equipotential surfaces, capacitors in series/parallel, energy stored in capacitor.",
            "videoUrl": "https://youtu.be/6_Z_W9_b2-g"
          }
        ]
      },
      {
        "unitId": "ph12_u2",
        "unit": "Unit II: Current Electricity",
        "chapters": [
          {
            "id": "ph12_2_1",
            "title": "Current Electricity",
            "desc": "Drift velocity, Ohm's law, V-I characteristics, Kirchhoff's laws, Wheatstone bridge, Potentiometer.",
            "videoUrl": "https://youtu.be/7oZ_m9_c3-h"
          }
        ]
      },
      {
        "unitId": "ph12_u3",
        "unit": "Unit III: Magnetic Effect of Current and Magnetism",
        "chapters": [
          {
            "id": "ph12_3_1",
            "title": "Moving Charges and Magnetism",
            "desc": "Biot-Savart law, Ampere's circuital law, Lorentz force on charged particles, moving coil galvanometer.",
            "videoUrl": "https://youtu.be/8pZ_n0_d4-j"
          },
          {
            "id": "ph12_3_2",
            "title": "Magnetism and Matter",
            "desc": "Magnetic dipole, Earth's magnetic elements, Dia-, Para-, and Ferro-magnetic materials.",
            "videoUrl": "https://youtu.be/9qZ_p1_e5-k"
          }
        ]
      },
      {
        "unitId": "ph12_u4",
        "unit": "Unit IV: Electromagnetic Induction and Alternating Current",
        "chapters": [
          {
            "id": "ph12_4_1",
            "title": "Electromagnetic Induction",
            "desc": "Faraday's laws, Lenz's law, eddy currents, self and mutual induction.",
            "videoUrl": "https://youtu.be/0rZ_q2_f6-l"
          },
          {
            "id": "ph12_4_2",
            "title": "Alternating Current",
            "desc": "Peak & RMS values, LCR series resonance, AC power, AC generators and transformers.",
            "videoUrl": "https://youtu.be/1sZ_r3_g7-m"
          }
        ]
      },
      {
        "unitId": "ph12_u5",
        "unit": "Unit V: Electromagnetic Waves",
        "chapters": [
          {
            "id": "ph12_5_1",
            "title": "Electromagnetic Spectrum & Propagation",
            "desc": "Displacement current, EM wave features, radio, microwave, IR, visible, UV, X-ray, gamma rays.",
            "videoUrl": "https://youtu.be/2tZ_s4_h8-n"
          }
        ]
      },
      {
        "unitId": "ph12_u6",
        "unit": "Unit VI: Optics",
        "chapters": [
          {
            "id": "ph12_6_1",
            "title": "Ray Optics and Optical Instruments",
            "desc": "Refraction, total internal reflection, lenses, lens maker's formula, microscopes and telescopes.",
            "videoUrl": "https://youtu.be/2tZ_s4_h8-n"
          },
          {
            "id": "ph12_6_2",
            "title": "Wave Optics",
            "desc": "Wavefront, Huygens principle, Young's double slit interference, diffraction at single slit.",
            "videoUrl": "https://youtu.be/3uZ_t5_i9-o"
          }
        ]
      },
      {
        "unitId": "ph12_u7",
        "unit": "Unit VII: Dual Nature of Radiation and Matter",
        "chapters": [
          {
            "id": "ph12_7_1",
            "title": "Dual Nature of Radiation & Photoelectric Effect",
            "desc": "Photoelectric effect observations, Einstein's photoelectric equation, de-Broglie relation.",
            "videoUrl": "https://youtu.be/4vZ_u6_j0-p"
          }
        ]
      },
      {
        "unitId": "ph12_u8",
        "unit": "Unit VIII: Atoms and Nuclei",
        "chapters": [
          {
            "id": "ph12_8_1",
            "title": "Atoms",
            "desc": "Alpha-particle scattering, Rutherford & Bohr models, hydrogen emission spectrum.",
            "videoUrl": "https://youtu.be/5wZ_v7_k1-q"
          },
          {
            "id": "ph12_8_2",
            "title": "Nuclei",
            "desc": "Nuclear composition, mass-energy relation, binding energy curve, nuclear fission and fusion.",
            "videoUrl": "https://youtu.be/5wZ_v7_k1-q"
          }
        ]
      },
      {
        "unitId": "ph12_u9",
        "unit": "Unit IX: Semiconductor Electronics",
        "chapters": [
          {
            "id": "ph12_9_1",
            "title": "Semiconductor Devices & Diodes",
            "desc": "Energy bands, p-n junction diode, I-V characteristics, half and full-wave rectifiers.",
            "videoUrl": "https://youtu.be/6xZ_w8_l2-r"
          },
          {
            "id": "ph12_9_2",
            "title": "Logic Gates & Digital Circuits",
            "desc": "OR, AND, NOT, NAND, NOR logic gates, truth tables and basic digital circuit design.",
            "videoUrl": "https://youtu.be/6xZ_w8_l2-r"
          }
        ]
      },
      {
        "unitId": "ph12_u10",
        "unit": "Unit X: Communication System",
        "chapters": [
          {
            "id": "ph12_10_1",
            "title": "Principles of Communication System",
            "desc": "Elements of communication, EM wave propagation through atmosphere, modulation need, AM and FM.",
            "videoUrl": "https://youtu.be/6xZ_w8_l2-r"
          }
        ]
      }
    ]
  },
  "Chemistry": {
    "11": [
      {
        "unitId": "ch11_u1",
        "unit": "Unit I: Some Basic Concepts of Chemistry",
        "chapters": [
          {
            "id": "ch11_1_1",
            "title": "Mole Concept & Stoichiometry",
            "desc": "Atomic and molecular masses, mole concept, molar mass, stoichiometry, solution concentration.",
            "videoUrl": "https://youtu.be/X3fL_8K-g"
          }
        ]
      },
      {
        "unitId": "ch11_u2",
        "unit": "Unit II: Structure of Atom",
        "chapters": [
          {
            "id": "ch11_2_1",
            "title": "Atomic Structure & Quantum Numbers",
            "desc": "Bohr's model, dual nature of matter (de Broglie), Heisenberg uncertainty principle, quantum numbers.",
            "videoUrl": "https://youtu.be/X3fL_8K-g"
          }
        ]
      },
      {
        "unitId": "ch11_u3",
        "unit": "Unit III: Classification of Elements and Periodicity",
        "chapters": [
          {
            "id": "ch11_3_1",
            "title": "Modern Periodic Table & Trends",
            "desc": "Modern periodic law, atomic radii, ionization enthalpy, electron gain enthalpy, electronegativity.",
            "videoUrl": "https://youtu.be/X3fL_8K-g"
          }
        ]
      },
      {
        "unitId": "ch11_u4",
        "unit": "Unit IV: Chemical Bonding and Molecular Structure",
        "chapters": [
          {
            "id": "ch11_4_1",
            "title": "Chemical Bonding, VSEPR & Hybridization",
            "desc": "Ionic & covalent bonds, Lewis structures, VSEPR geometry, hybridization (sp, sp2, sp3), hydrogen bonding.",
            "videoUrl": "https://youtu.be/X3fL_8K-g"
          }
        ]
      },
      {
        "unitId": "ch11_u5",
        "unit": "Unit V: States of Matter: Gases and Liquids",
        "chapters": [
          {
            "id": "ch11_5_1",
            "title": "States of Matter & Gas Laws",
            "desc": "Boyle's law, Charles's law, Avogadro's law, ideal gas equation, Dalton's law, kinetic molecular speeds.",
            "videoUrl": "https://youtu.be/X3fL_8K-g"
          }
        ]
      },
      {
        "unitId": "ch11_u6",
        "unit": "Unit VI: Chemical Thermodynamics",
        "chapters": [
          {
            "id": "ch11_6_1",
            "title": "Thermodynamics & Thermochemistry",
            "desc": "System & surroundings, First law, enthalpy (H), Hess's law, entropy (S), Gibbs free energy change (G).",
            "videoUrl": "https://youtu.be/X3fL_8K-g"
          }
        ]
      },
      {
        "unitId": "ch11_u7",
        "unit": "Unit VII: Equilibrium",
        "chapters": [
          {
            "id": "ch11_7_1",
            "title": "Chemical & Ionic Equilibrium",
            "desc": "Equilibrium constant Kc/Kp, Le Chatelier's principle, pH scale, ionization of acids/bases, buffers.",
            "videoUrl": "https://youtu.be/X3fL_8K-g"
          }
        ]
      },
      {
        "unitId": "ch11_u8",
        "unit": "Unit VIII: Redox Reactions",
        "chapters": [
          {
            "id": "ch11_8_1",
            "title": "Redox Reactions & Balancing",
            "desc": "Concept of oxidation and reduction, oxidation number determination, balancing redox equations.",
            "videoUrl": "https://youtu.be/X3fL_8K-g"
          }
        ]
      },
      {
        "unitId": "ch11_u9",
        "unit": "Unit IX: Hydrogen",
        "chapters": [
          {
            "id": "ch11_9_1",
            "title": "Hydrogen & Its Compounds",
            "desc": "Position in periodic table, isotopes, preparation, properties and heavy water.",
            "videoUrl": "https://youtu.be/X3fL_8K-g"
          }
        ]
      },
      {
        "unitId": "ch11_u10",
        "unit": "Unit X: s-Block Elements",
        "chapters": [
          {
            "id": "ch11_10_1",
            "title": "Alkali & Alkaline Earth Metals",
            "desc": "Group 1 & Group 2 elements: electronic configuration, chemical reactivity trends, anomalous properties.",
            "videoUrl": "https://youtu.be/X3fL_8K-g"
          }
        ]
      },
      {
        "unitId": "ch11_u11",
        "unit": "Unit XI: Some p-Block Elements",
        "chapters": [
          {
            "id": "ch11_11_1",
            "title": "Group 13 & Group 14 Elements",
            "desc": "General trends, Boron family, Carbon family, allotropes of carbon, silicon compounds.",
            "videoUrl": "https://youtu.be/X3fL_8K-g"
          }
        ]
      },
      {
        "unitId": "ch11_u12",
        "unit": "Unit XII: Organic Chemistry – Basic Principles and Techniques",
        "chapters": [
          {
            "id": "ch11_12_1",
            "title": "Organic Basics & Reaction Mechanisms",
            "desc": "IUPAC nomenclature, inductive, electromeric, resonance & hyperconjugation effects, reaction intermediates.",
            "videoUrl": "https://youtu.be/X3fL_8K-g"
          }
        ]
      },
      {
        "unitId": "ch11_u13",
        "unit": "Unit XIII: Hydrocarbons",
        "chapters": [
          {
            "id": "ch11_13_1",
            "title": "Alkanes, Alkenes, Alkynes & Arenes",
            "desc": "Classification, preparation, physical & chemical properties of aliphatic and aromatic hydrocarbons.",
            "videoUrl": "https://youtu.be/X3fL_8K-g"
          }
        ]
      }
    ],
    "12": [
      {
        "unitId": "ch12_u1",
        "unit": "Unit I: Solid State",
        "chapters": [
          {
            "id": "ch12_1_1",
            "title": "Solid State",
            "desc": "Crystalline vs amorphous solids, unit cells, close packing, packing efficiency, point defects.",
            "videoUrl": "https://youtu.be/6_Z_W9_b2-g"
          }
        ]
      },
      {
        "unitId": "ch12_u2",
        "unit": "Unit II: Solutions",
        "chapters": [
          {
            "id": "ch12_2_1",
            "title": "Solutions & Colligative Properties",
            "desc": "Solubility of gases (Henry's law), Raoult's law, colligative properties (osmotic pressure, boiling point elevation).",
            "videoUrl": "https://youtu.be/6_Z_W9_b2-g"
          }
        ]
      },
      {
        "unitId": "ch12_u3",
        "unit": "Unit III: Electrochemistry",
        "chapters": [
          {
            "id": "ch12_3_1",
            "title": "Electrochemistry & Galvanic Cells",
            "desc": "Electrolytic conductance, Kohlrausch's law, Nernst equation, EMF of a cell, batteries and fuel cells.",
            "videoUrl": "https://youtu.be/6_Z_W9_b2-g"
          }
        ]
      },
      {
        "unitId": "ch12_u4",
        "unit": "Unit IV: Chemical Kinetics",
        "chapters": [
          {
            "id": "ch12_4_1",
            "title": "Chemical Kinetics",
            "desc": "Rate of reaction, factors affecting rate, order and molecularity, integrated rate equations, Arrhenius theory.",
            "videoUrl": "https://youtu.be/6_Z_W9_b2-g"
          }
        ]
      },
      {
        "unitId": "ch12_u5",
        "unit": "Unit V: Surface Chemistry",
        "chapters": [
          {
            "id": "ch12_5_1",
            "title": "Surface Chemistry & Colloids",
            "desc": "Adsorption isotherms, homogeneous & heterogeneous catalysis, colloids, Tyndall effect, emulsions.",
            "videoUrl": "https://youtu.be/6_Z_W9_b2-g"
          }
        ]
      },
      {
        "unitId": "ch12_u6",
        "unit": "Unit VI: General Principles & Isolation of Elements",
        "chapters": [
          {
            "id": "ch12_6_1",
            "title": "Metallurgy & Extraction of Metals",
            "desc": "Principles and methods of extraction: concentration, oxidation, reduction, refining of metals.",
            "videoUrl": "https://youtu.be/6_Z_W9_b2-g"
          }
        ]
      },
      {
        "unitId": "ch12_u7",
        "unit": "Unit VII: p-Block Elements",
        "chapters": [
          {
            "id": "ch12_7_1",
            "title": "p-Block Elements (Groups 15 to 18)",
            "desc": "Group 15 (Nitrogen), Group 16 (Oxygen), Group 17 (Halogens), Group 18 (Noble gases) and compounds.",
            "videoUrl": "https://youtu.be/6_Z_W9_b2-g"
          }
        ]
      },
      {
        "unitId": "ch12_u8",
        "unit": "Unit VIII: d and f Block Elements",
        "chapters": [
          {
            "id": "ch12_8_1",
            "title": "Transition Elements, Lanthanides & Actinides",
            "desc": "Electronic configurations, oxidation states, magnetic properties, catalytic behavior, lanthanoid contraction.",
            "videoUrl": "https://youtu.be/6_Z_W9_b2-g"
          }
        ]
      },
      {
        "unitId": "ch12_u9",
        "unit": "Unit IX: Coordination Compounds",
        "chapters": [
          {
            "id": "ch12_9_1",
            "title": "Coordination Compounds",
            "desc": "Werner's theory, ligands, IUPAC nomenclature, Valence Bond Theory (VBT), Crystal Field Theory (CFT).",
            "videoUrl": "https://youtu.be/6_Z_W9_b2-g"
          }
        ]
      },
      {
        "unitId": "ch12_u10",
        "unit": "Unit X: Haloalkanes and Haloarenes",
        "chapters": [
          {
            "id": "ch12_10_1",
            "title": "Haloalkanes and Haloarenes",
            "desc": "Nomenclature, nature of C-X bond, nucleophilic substitution reactions (SN1 and SN2), optical rotation.",
            "videoUrl": "https://youtu.be/6_Z_W9_b2-g"
          }
        ]
      },
      {
        "unitId": "ch12_u11",
        "unit": "Unit XI: Alcohols, Phenols and Ethers",
        "chapters": [
          {
            "id": "ch12_11_1",
            "title": "Alcohols, Phenols and Ethers",
            "desc": "Preparation methods, physical properties, acidic nature of phenols, electrophilic aromatic substitution, ethers.",
            "videoUrl": "https://youtu.be/6_Z_W9_b2-g"
          }
        ]
      },
      {
        "unitId": "ch12_u12",
        "unit": "Unit XII: Aldehydes, Ketones and Carboxylic Acids",
        "chapters": [
          {
            "id": "ch12_12_1",
            "title": "Aldehydes, Ketones and Carboxylic Acids",
            "desc": "Carbonyl group, nucleophilic addition, Aldol condensation, Cannizzaro reaction, acidity of carboxylic acids.",
            "videoUrl": "https://youtu.be/6_Z_W9_b2-g"
          }
        ]
      },
      {
        "unitId": "ch12_u13",
        "unit": "Unit XIII: Organic Compounds Containing Nitrogen",
        "chapters": [
          {
            "id": "ch12_13_1",
            "title": "Amines & Diazonium Salts",
            "desc": "Classification, basic character of amines, Gabriel phthalimide synthesis, diazonium salts in synthesis.",
            "videoUrl": "https://youtu.be/6_Z_W9_b2-g"
          }
        ]
      },
      {
        "unitId": "ch12_u14",
        "unit": "Unit XIV: Biomolecules",
        "chapters": [
          {
            "id": "ch12_14_1",
            "title": "Biomolecules",
            "desc": "Carbohydrates (monosaccharides, polysaccharides), proteins, amino acids, peptide bond, vitamins, nucleic acids.",
            "videoUrl": "https://youtu.be/6_Z_W9_b2-g"
          }
        ]
      },
      {
        "unitId": "ch12_u15",
        "unit": "Unit XV: Polymers",
        "chapters": [
          {
            "id": "ch12_15_1",
            "title": "Polymers",
            "desc": "Natural and synthetic polymers, addition & condensation polymerization, nylon, bakelite, rubber.",
            "videoUrl": "https://youtu.be/6_Z_W9_b2-g"
          }
        ]
      },
      {
        "unitId": "ch12_u16",
        "unit": "Unit XVI: Chemistry in Everyday Life",
        "chapters": [
          {
            "id": "ch12_16_1",
            "title": "Chemistry in Everyday Life",
            "desc": "Chemicals in medicines (analgesics, antibiotics, antiseptics), artificial sweeteners, soaps and detergents.",
            "videoUrl": "https://youtu.be/6_Z_W9_b2-g"
          }
        ]
      }
    ]
  },
  "Mathematics": {
    "11": [
      {
        "unitId": "ma11_u1",
        "unit": "UNIT - I: Sets and Functions",
        "chapters": [
          {
            "id": "ma11_1_1",
            "title": "Sets and Subsets",
            "desc": "Sets, subsets, power sets, Venn diagrams, union, intersection, complement of sets.",
            "videoUrl": "https://youtu.be/pG4_q2-r3"
          },
          {
            "id": "ma11_1_2",
            "title": "Relations & Functions",
            "desc": "Cartesian products, domain, range, polynomial and rational functions.",
            "videoUrl": "https://youtu.be/pG4_q2-r3"
          },
          {
            "id": "ma11_1_3",
            "title": "Trigonometric Functions",
            "desc": "Angles, signs of trigonometric functions, sum and product identities.",
            "videoUrl": "https://youtu.be/pG4_q2-r3"
          }
        ]
      },
      {
        "unitId": "ma11_u2",
        "unit": "UNIT - II: Algebra",
        "chapters": [
          {
            "id": "ma11_2_1",
            "title": "Complex Numbers & Quadratics",
            "desc": "Complex numbers, Argand plane, quadratic equations with complex roots.",
            "videoUrl": "https://youtu.be/pG4_q2-r3"
          },
          {
            "id": "ma11_2_2",
            "title": "Linear Inequalities, Permutations & Combinations",
            "desc": "Algebraic solutions of inequalities, fundamental principle of counting, permutation & combination formulas.",
            "videoUrl": "https://youtu.be/pG4_q2-r3"
          },
          {
            "id": "ma11_2_3",
            "title": "Binomial Theorem, Sequence & Series",
            "desc": "Binomial theorem for positive integers, AP and GP sequences, arithmetic and geometric means.",
            "videoUrl": "https://youtu.be/pG4_q2-r3"
          }
        ]
      },
      {
        "unitId": "ma11_u3",
        "unit": "UNIT - III: Co-ordinate Geometry",
        "chapters": [
          {
            "id": "ma11_3_1",
            "title": "Straight Lines",
            "desc": "Slope of a line, various forms of line equations, angle between lines, distance of a point from a line.",
            "videoUrl": "https://youtu.be/pG4_q2-r3"
          },
          {
            "id": "ma11_3_2",
            "title": "Conic Sections & 3D Geometry",
            "desc": "Circles, ellipse, parabola, hyperbola, coordinates of points in three-dimensional space.",
            "videoUrl": "https://youtu.be/pG4_q2-r3"
          }
        ]
      },
      {
        "unitId": "ma11_u4",
        "unit": "UNIT - IV: Calculus",
        "chapters": [
          {
            "id": "ma11_4_1",
            "title": "Limits and Derivatives",
            "desc": "Limits of polynomials and trigonometric functions, derivative as rate of change, derivatives of standard functions.",
            "videoUrl": "https://youtu.be/pG4_q2-r3"
          }
        ]
      },
      {
        "unitId": "ma11_u5",
        "unit": "UNIT - V: Mathematical Reasoning",
        "chapters": [
          {
            "id": "ma11_5_1",
            "title": "Mathematical Reasoning",
            "desc": "Mathematically acceptable statements, negations, compound statements, logical connectives (and, or, implies).",
            "videoUrl": "https://youtu.be/pG4_q2-r3"
          }
        ]
      },
      {
        "unitId": "ma11_u6",
        "unit": "UNIT - VI: Statistics and Probability",
        "chapters": [
          {
            "id": "ma11_6_1",
            "title": "Measures of Dispersion & Probability",
            "desc": "Mean deviation, variance, standard deviation, random experiments, event probability.",
            "videoUrl": "https://youtu.be/pG4_q2-r3"
          }
        ]
      }
    ],
    "12": [
      {
        "unitId": "ma12_u1",
        "unit": "UNIT - I: Relations and Functions",
        "chapters": [
          {
            "id": "ma12_1_1",
            "title": "Relations & Inverse Trigonometric Functions",
            "desc": "Equivalence relations, domain and range of inverse trig functions, principal value branches.",
            "videoUrl": "https://youtu.be/pG4_q2-r3"
          },
          {
            "id": "ma12_1_2",
            "title": "Linear Programming (L.P.P)",
            "desc": "Objective function, constraints, graphical feasible region solution for linear programming problems.",
            "videoUrl": "https://youtu.be/pG4_q2-r3"
          }
        ]
      },
      {
        "unitId": "ma12_u2",
        "unit": "UNIT - II: Algebra",
        "chapters": [
          {
            "id": "ma12_2_1",
            "title": "Matrices",
            "desc": "Matrix operations, transpose, symmetric & skew-symmetric matrices, elementary row operations.",
            "videoUrl": "https://youtu.be/pG4_q2-r3"
          },
          {
            "id": "ma12_2_2",
            "title": "Determinants",
            "desc": "Determinant properties, area of triangle, minors, cofactors, adjoint and inverse, Cramer's rule.",
            "videoUrl": "https://youtu.be/pG4_q2-r3"
          }
        ]
      },
      {
        "unitId": "ma12_u3",
        "unit": "UNIT - III: Differential Calculus",
        "chapters": [
          {
            "id": "ma12_3_1",
            "title": "Continuity and Differentiability",
            "desc": "Continuity, differentiability, chain rule, derivatives of implicit and parametric functions.",
            "videoUrl": "https://youtu.be/pG4_q2-r3"
          },
          {
            "id": "ma12_3_2",
            "title": "Applications of Derivatives",
            "desc": "Rate of change, tangents and normals, increasing/decreasing functions, maxima and minima.",
            "videoUrl": "https://youtu.be/pG4_q2-r3"
          }
        ]
      },
      {
        "unitId": "ma12_u4",
        "unit": "UNIT - IV: Integral Calculus",
        "chapters": [
          {
            "id": "ma12_4_1",
            "title": "Integrals",
            "desc": "Integration as inverse of differentiation, substitution, partial fractions, parts, definite integral properties.",
            "videoUrl": "https://youtu.be/pG4_q2-r3"
          },
          {
            "id": "ma12_4_2",
            "title": "Applications of Integrals & Differential Equations",
            "desc": "Area under curves, order & degree of differential equations, general and particular solutions.",
            "videoUrl": "https://youtu.be/pG4_q2-r3"
          }
        ]
      },
      {
        "unitId": "ma12_u5",
        "unit": "UNIT - V: Vectors and 3D Geometry",
        "chapters": [
          {
            "id": "ma12_5_1",
            "title": "Vector Algebra",
            "desc": "Magnitude & direction, dot and cross products, scalar triple product.",
            "videoUrl": "https://youtu.be/pG4_q2-r3"
          },
          {
            "id": "ma12_5_2",
            "title": "Three-Dimensional Geometry",
            "desc": "Direction cosines and ratios, Cartesian and vector equations of lines and planes.",
            "videoUrl": "https://youtu.be/pG4_q2-r3"
          }
        ]
      }
    ]
  },
  "Biology": {
    "11": [
      {
        "unitId": "bi11_u1",
        "unit": "Unit I: Diversity in Living World (Botany & Zoology)",
        "chapters": [
          {
            "id": "bi11_1_1",
            "title": "Plant Kingdom Diversity (Botany)",
            "desc": "Five Kingdom classification: Monera, Protista, Fungi, Algae, Bryophytes, Pteridophytes, Gymnosperms.",
            "videoUrl": "https://youtu.be/8mK_v1_z2-w"
          },
          {
            "id": "bi11_1_2",
            "title": "Animal Kingdom Diversity (Zoology)",
            "desc": "Biodiversity, binomial nomenclature, non-chordates and chordates classification.",
            "videoUrl": "https://youtu.be/8mK_v1_z2-w"
          }
        ]
      },
      {
        "unitId": "bi11_u2",
        "unit": "Unit II: Structural Organisation in Animals",
        "chapters": [
          {
            "id": "bi11_2_1",
            "title": "Animal Tissues (Zoology)",
            "desc": "Epithelial, connective, muscular and nervous tissues structure and functions.",
            "videoUrl": "https://youtu.be/8mK_v1_z2-w"
          }
        ]
      },
      {
        "unitId": "bi11_u3",
        "unit": "Unit III: Cell Structure and Function",
        "chapters": [
          {
            "id": "bi11_3_1",
            "title": "Cell Biology & Biomolecules (Botany)",
            "desc": "Cell theory, cell organelles, proteins, carbohydrates, lipids, nucleic acids, enzymes.",
            "videoUrl": "https://youtu.be/8mK_v1_z2-w"
          },
          {
            "id": "bi11_3_2",
            "title": "Cell Division: Mitosis & Meiosis (Botany)",
            "desc": "Cell cycle, stages and biological significance of mitosis and meiosis.",
            "videoUrl": "https://youtu.be/8mK_v1_z2-w"
          }
        ]
      },
      {
        "unitId": "bi11_u4",
        "unit": "Unit IV: Plant Physiology (Botany)",
        "chapters": [
          {
            "id": "bi11_4_1",
            "title": "Photosynthesis in Higher Plants",
            "desc": "Pigments, light reaction, cyclic & non-cyclic photophosphorylation, Calvin cycle.",
            "videoUrl": "https://youtu.be/8mK_v1_z2-w"
          },
          {
            "id": "bi11_4_2",
            "title": "Plant Respiration & Growth Regulators",
            "desc": "Glycolysis, Krebs cycle, electron transport, plant hormones (Auxin, Gibberellin, Cytokinin).",
            "videoUrl": "https://youtu.be/8mK_v1_z2-w"
          }
        ]
      },
      {
        "unitId": "bi11_u5",
        "unit": "Unit V: Human Physiology (Zoology)",
        "chapters": [
          {
            "id": "bi11_5_1",
            "title": "Breathing & Body Fluids Circulation",
            "desc": "Respiratory mechanism, gas exchange, blood composition, heart structure, cardiac cycle.",
            "videoUrl": "https://youtu.be/8mK_v1_z2-w"
          },
          {
            "id": "bi11_5_2",
            "title": "Excretion, Neural & Chemical Coordination",
            "desc": "Kidney structure, urine formation, neuron impulse, endocrine glands and hormone actions.",
            "videoUrl": "https://youtu.be/8mK_v1_z2-w"
          }
        ]
      }
    ],
    "12": [
      {
        "unitId": "bi12_u1",
        "unit": "Unit I: Reproduction (Botany & Zoology)",
        "chapters": [
          {
            "id": "bi12_1_1",
            "title": "Sexual Reproduction in Flowering Plants (Botany)",
            "desc": "Flower structure, pollination, double fertilization, seed and fruit formation.",
            "videoUrl": "https://youtu.be/8mK_v1_z2-w"
          },
          {
            "id": "bi12_1_2",
            "title": "Human Reproduction & Reproductive Health (Zoology)",
            "desc": "Male/female reproductive systems, gametogenesis, menstrual cycle, pregnancy, contraception, IVF/ART.",
            "videoUrl": "https://youtu.be/8mK_v1_z2-w"
          }
        ]
      },
      {
        "unitId": "bi12_u2",
        "unit": "Unit II: Genetics and Evolution (Zoology)",
        "chapters": [
          {
            "id": "bi12_2_1",
            "title": "Heredity and Variation",
            "desc": "Mendelian inheritance, chromosome theory, blood group genetics, sex determination.",
            "videoUrl": "https://youtu.be/8mK_v1_z2-w"
          },
          {
            "id": "bi12_2_2",
            "title": "Molecular Basis of Inheritance",
            "desc": "DNA & RNA structure, DNA replication, transcription, genetic code, translation, gene expression.",
            "videoUrl": "https://youtu.be/8mK_v1_z2-w"
          }
        ]
      },
      {
        "unitId": "bi12_u3",
        "unit": "Unit III: Biology and Human Welfare (Botany & Zoology)",
        "chapters": [
          {
            "id": "bi12_3_1",
            "title": "Food Production & Microbes in Human Welfare (Botany)",
            "desc": "Biofortification, microbes in household products, sewage treatment, biogas, biofertilizers.",
            "videoUrl": "https://youtu.be/8mK_v1_z2-w"
          },
          {
            "id": "bi12_3_2",
            "title": "Human Health and Common Diseases (Zoology)",
            "desc": "Malaria, Typhoid, Pneumonia pathogens, immunity types, allergy, AIDS, cancer.",
            "videoUrl": "https://youtu.be/8mK_v1_z2-w"
          }
        ]
      },
      {
        "unitId": "bi12_u4",
        "unit": "Unit IV: Biotechnology (Zoology)",
        "chapters": [
          {
            "id": "bi12_4_1",
            "title": "Biotechnology: Principles and Processes",
            "desc": "Recombinant DNA technology, restriction enzymes, vectors, PCR technique, downstream processing.",
            "videoUrl": "https://youtu.be/8mK_v1_z2-w"
          },
          {
            "id": "bi12_4_2",
            "title": "Biotechnology and Its Applications",
            "desc": "Applications in agriculture (Bt cotton), medicine (human insulin), gene therapy, biosafety.",
            "videoUrl": "https://youtu.be/8mK_v1_z2-w"
          }
        ]
      },
      {
        "unitId": "bi12_u5",
        "unit": "Unit V: Ecology and Environment (Botany & Zoology)",
        "chapters": [
          {
            "id": "bi12_5_1",
            "title": "Organisms, Populations & Ecosystems",
            "desc": "Population interactions (mutualism, competition, predation), energy flow, ecological pyramids.",
            "videoUrl": "https://youtu.be/8mK_v1_z2-w"
          },
          {
            "id": "bi12_5_2",
            "title": "Biodiversity and Its Conservation",
            "desc": "Biodiversity patterns, importance, threats, in-situ and ex-situ conservation sanctuaries.",
            "videoUrl": "https://youtu.be/8mK_v1_z2-w"
          }
        ]
      }
    ]
  },
  "Accountancy": {
    "11": [
      {
        "unitId": "ac11_u1",
        "unit": "Unit - I: Introduction to Accounting & Basic Concepts",
        "chapters": [
          {
            "id": "ac11_1_1",
            "title": "Evolution & Need for Accounting",
            "desc": "Bookkeeping vs accounting, objectives, users of accounting information, accounting branches and cycle.",
            "videoUrl": "https://youtu.be/ac11_intro"
          },
          {
            "id": "ac11_1_2",
            "title": "GAAP Principles & Accounting Equation",
            "desc": "GAAP concepts, conventions, AS & IFRS, assets, liabilities, capital, accounting equation formulation.",
            "videoUrl": "https://youtu.be/ac11_gaap"
          }
        ]
      },
      {
        "unitId": "ac11_u2",
        "unit": "Unit - II: Journal, Ledger, Subsidiary Books and Trial Balance",
        "chapters": [
          {
            "id": "ac11_2_1",
            "title": "Journal & Ledger Posting",
            "desc": "Rules of debit and credit, recording journal entries, ledger accounts balancing.",
            "videoUrl": "https://youtu.be/ac11_journal"
          },
          {
            "id": "ac11_2_2",
            "title": "Subsidiary Books & Trial Balance",
            "desc": "Cash book, purchase/sales books, journal proper, preparation and redrafting of Trial Balance.",
            "videoUrl": "https://youtu.be/ac11_trial"
          }
        ]
      },
      {
        "unitId": "ac11_u3",
        "unit": "Unit - III: Bills of Exchange and Computerized Accounting",
        "chapters": [
          {
            "id": "ac11_3_1",
            "title": "Bills of Exchange",
            "desc": "Parties, terms of bills, days of grace, honour, dishonour, renewal and retirement of trade bills.",
            "videoUrl": "https://youtu.be/ac11_bills"
          },
          {
            "id": "ac11_3_2",
            "title": "Computerized Accounting System (AIS)",
            "desc": "Components, functions, advantages of computerized accounting, Accounting Information Systems.",
            "videoUrl": "https://youtu.be/ac11_ais"
          }
        ]
      },
      {
        "unitId": "ac11_u4",
        "unit": "Unit - IV: Rectification of Errors & Bank Reconciliation Statement",
        "chapters": [
          {
            "id": "ac11_4_1",
            "title": "Rectification of Errors",
            "desc": "Types of errors, errors affecting and not affecting trial balance, suspense account usage.",
            "videoUrl": "https://youtu.be/ac11_errors"
          },
          {
            "id": "ac11_4_2",
            "title": "Bank Reconciliation Statement (BRS)",
            "desc": "Meaning, necessity and preparation of BRS from cash book and pass book balances.",
            "videoUrl": "https://youtu.be/ac11_brs"
          }
        ]
      }
    ],
    "12": [
      {
        "unitId": "ac12_u1",
        "unit": "Unit - I: Financial Statements of Sole Trade & Not-for-Profit",
        "chapters": [
          {
            "id": "ac12_1_1",
            "title": "Final Accounts of Sole Trader",
            "desc": "Trading account, Profit & Loss account, Balance sheet with standard adjustments.",
            "videoUrl": "https://youtu.be/ac12_final"
          },
          {
            "id": "ac12_1_2",
            "title": "Not-for-Profit Organizations (NPO)",
            "desc": "Receipts and Payments account, Income and Expenditure account, closing balance sheet.",
            "videoUrl": "https://youtu.be/ac12_npo"
          }
        ]
      },
      {
        "unitId": "ac12_u2",
        "unit": "Unit - II: Depreciation & Single Entry System",
        "chapters": [
          {
            "id": "ac12_2_1",
            "title": "Accounting for Depreciation",
            "desc": "Straight line method, written down value method, provision for depreciation.",
            "videoUrl": "https://youtu.be/ac12_depr"
          },
          {
            "id": "ac12_2_2",
            "title": "Accounting from Incomplete Records (Single Entry)",
            "desc": "Single entry limitations, statement of affairs method for ascertainment of profit/loss.",
            "videoUrl": "https://youtu.be/ac12_single"
          }
        ]
      },
      {
        "unitId": "ac12_u3",
        "unit": "Unit - III: Accounting for Partnership Firm",
        "chapters": [
          {
            "id": "ac12_3_1",
            "title": "Partnership Fundamentals & Goodwill",
            "desc": "Partnership deed, P&L Appropriation, valuation of goodwill (average profit, super profit, capitalization).",
            "videoUrl": "https://youtu.be/ac12_partner"
          },
          {
            "id": "ac12_3_2",
            "title": "Reconstitution & Admission of Partner",
            "desc": "Sacrificing & gaining ratios, asset revaluation, reserve distribution, admission without capital adjustments.",
            "videoUrl": "https://youtu.be/ac12_admission"
          }
        ]
      },
      {
        "unitId": "ac12_u4",
        "unit": "Unit - IV: Accounting for Companies",
        "chapters": [
          {
            "id": "ac12_4_1",
            "title": "Accounting for Share Capital",
            "desc": "Issue of shares at par, premium, calls in arrears/advance, forfeiture and reissue of shares.",
            "videoUrl": "https://youtu.be/ac12_shares"
          },
          {
            "id": "ac12_4_2",
            "title": "Accounting for Debentures",
            "desc": "Issue of debentures at par, premium, discount and consideration other than cash.",
            "videoUrl": "https://youtu.be/ac12_debentures"
          }
        ]
      },
      {
        "unitId": "ac12_u5",
        "unit": "Unit - V: Project Work & Viva",
        "chapters": [
          {
            "id": "ac12_5_1",
            "title": "Comprehensive Accounting Project & Viva",
            "desc": "Source documents collection, vouchers, journal to ledger, trial balance, final accounts analysis.",
            "videoUrl": "https://youtu.be/ac12_project"
          }
        ]
      }
    ]
  },
  "BSM": {
    "11": [
      {
        "unitId": "bsm11_u1",
        "unit": "Unit - I: Nature, Purpose and Forms of Business Organization",
        "chapters": [
          {
            "id": "bsm11_1_1",
            "title": "Nature and Purpose of Business",
            "desc": "Characteristics, industry, commerce, trade, aids to trade, business risk concept.",
            "videoUrl": "https://youtu.be/bsm11_nature"
          },
          {
            "id": "bsm11_1_2",
            "title": "Forms of Business: Sole Proprietorship & Partnership",
            "desc": "Sole proprietorship, partnership types, partnership deed contents, registration process.",
            "videoUrl": "https://youtu.be/bsm11_forms"
          }
        ]
      },
      {
        "unitId": "bsm11_u2",
        "unit": "Unit - II: Company, Co-operative & Global Enterprises",
        "chapters": [
          {
            "id": "bsm11_2_1",
            "title": "Joint Stock Company & Co-operative Society",
            "desc": "Company formation, MOA, AOA, public vs private company, co-operative society features.",
            "videoUrl": "https://youtu.be/bsm11_company"
          },
          {
            "id": "bsm11_2_2",
            "title": "Public, Private & Global Enterprises",
            "desc": "Departmental undertakings, statutory corporations, government companies, joint ventures, PPP.",
            "videoUrl": "https://youtu.be/bsm11_public"
          }
        ]
      },
      {
        "unitId": "bsm11_u3",
        "unit": "Unit - III: Internal Trade",
        "chapters": [
          {
            "id": "bsm11_3_1",
            "title": "Wholesale and Retail Trade",
            "desc": "Wholesalers, retailers, itinerant traders, services to manufacturers and consumers.",
            "videoUrl": "https://youtu.be/bsm11_retail"
          },
          {
            "id": "bsm11_3_2",
            "title": "Large Scale Retail Organizations",
            "desc": "Departmental stores, multiple shops, supermarkets, network marketing, e-marketing.",
            "videoUrl": "https://youtu.be/bsm11_large"
          }
        ]
      },
      {
        "unitId": "bsm11_u4",
        "unit": "Unit - IV: International Trade & Business Services",
        "chapters": [
          {
            "id": "bsm11_4_1",
            "title": "International Trade & Procedures",
            "desc": "Export & import procedure, documentation, foreign exchange formalities, letter of credit.",
            "videoUrl": "https://youtu.be/bsm11_intl"
          },
          {
            "id": "bsm11_4_2",
            "title": "Warehousing & Transportation",
            "desc": "Warehousing functions, rail, air and water transport importance in modern trade.",
            "videoUrl": "https://youtu.be/bsm11_services"
          }
        ]
      }
    ],
    "12": [
      {
        "unitId": "bsm12_u1",
        "unit": "Unit - I: Nature, Significance & Functions of Management",
        "chapters": [
          {
            "id": "bsm12_1_1",
            "title": "Principles & Levels of Management",
            "desc": "Management as science, art, profession, levels of management, managerial hierarchy.",
            "videoUrl": "https://youtu.be/bsm12_mgmt"
          },
          {
            "id": "bsm12_1_2",
            "title": "Core Functions of Management",
            "desc": "Planning, organizing, staffing, directing and controlling concepts and importance.",
            "videoUrl": "https://youtu.be/bsm12_functions"
          }
        ]
      },
      {
        "unitId": "bsm12_u2",
        "unit": "Unit - II: Principles of Management & Business Environment",
        "chapters": [
          {
            "id": "bsm12_2_1",
            "title": "Fayol's & Taylor's Principles of Management",
            "desc": "Fayol's 14 principles of management, Taylor's scientific management principles and techniques.",
            "videoUrl": "https://youtu.be/bsm12_principles"
          },
          {
            "id": "bsm12_2_2",
            "title": "Business Environment & LPG Reforms",
            "desc": "Dimensions of business environment, liberalization, privatization and globalization in India.",
            "videoUrl": "https://youtu.be/bsm12_env"
          }
        ]
      },
      {
        "unitId": "bsm12_u3",
        "unit": "Unit - III: Financial Markets & Marketing Management",
        "chapters": [
          {
            "id": "bsm12_3_1",
            "title": "Financial Markets & SEBI",
            "desc": "Money market instruments, capital market (primary & secondary), stock exchanges, SEBI objectives.",
            "videoUrl": "https://youtu.be/bsm12_finance"
          },
          {
            "id": "bsm12_3_2",
            "title": "Marketing Management & The 4 Ps",
            "desc": "Marketing mix: product, price, place (distribution channels), and promotion (advertising, personal selling).",
            "videoUrl": "https://youtu.be/bsm12_marketing"
          }
        ]
      },
      {
        "unitId": "bsm12_u4",
        "unit": "Unit - IV: Consumer Protection",
        "chapters": [
          {
            "id": "bsm12_4_1",
            "title": "Consumer Protection Act & Redressal",
            "desc": "Consumer rights, responsibilities, grievance redressal forums, role of consumer NGOs.",
            "videoUrl": "https://youtu.be/bsm12_consumer"
          }
        ]
      },
      {
        "unitId": "bsm12_u5",
        "unit": "Unit - V: Project Work & Viva",
        "chapters": [
          {
            "id": "bsm12_5_1",
            "title": "Business Project Work & Viva",
            "desc": "Case study on Fayol/Taylor principles, packaging evolution, stock market listed firms.",
            "videoUrl": "https://youtu.be/bsm12_project"
          }
        ]
      }
    ]
  },
  "BMS": {
    "11": [
      {
        "unitId": "bms11_u1",
        "unit": "Unit - I: Business Arithmetic - I",
        "chapters": [
          {
            "id": "bms11_1_1",
            "title": "Profit & Loss and Partnership",
            "desc": "Cost price, selling price, discounts, partnership profit sharing ratio calculations.",
            "videoUrl": "https://youtu.be/bms11_profit"
          },
          {
            "id": "bms11_1_2",
            "title": "Logarithms & Simple/Compound Interest",
            "desc": "Laws of logarithms, log/antilog determination, simple interest, compound interest calculations.",
            "videoUrl": "https://youtu.be/bms11_log"
          }
        ]
      },
      {
        "unitId": "bms11_u2",
        "unit": "Unit - II: Business Arithmetic - II",
        "chapters": [
          {
            "id": "bms11_2_1",
            "title": "Annuity & Sinking Funds",
            "desc": "Future and present value of annuity, loan amortization, sinking fund techniques.",
            "videoUrl": "https://youtu.be/bms11_annuity"
          },
          {
            "id": "bms11_2_2",
            "title": "Bills of Exchange & Stocks/Shares",
            "desc": "Banker's discount, true discount, banker's gain, stock vs shares, dividend and yield calculations.",
            "videoUrl": "https://youtu.be/bms11_stocks"
          }
        ]
      },
      {
        "unitId": "bms11_u3",
        "unit": "Unit - III: Business Statistics - Conceptual Framework",
        "chapters": [
          {
            "id": "bms11_3_1",
            "title": "Statistics Framework & Survey Methods",
            "desc": "Meaning, origin, scope and functions of statistics, steps in statistical survey design.",
            "videoUrl": "https://youtu.be/bms11_survey"
          }
        ]
      },
      {
        "unitId": "bms11_u4",
        "unit": "Unit - IV: Business Statistics - Data Handling",
        "chapters": [
          {
            "id": "bms11_4_1",
            "title": "Data Collection, Classification & Tabulation",
            "desc": "Primary and secondary data sources, methods of data collection, data classification and statistical tables.",
            "videoUrl": "https://youtu.be/bms11_data"
          }
        ]
      }
    ],
    "12": [
      {
        "unitId": "bms12_u1",
        "unit": "Unit - I: Business Mathematics",
        "chapters": [
          {
            "id": "bms12_1_1",
            "title": "Determinants & Matrices",
            "desc": "Determinants up to 3rd order, Cramer's rule, matrix algebra, solving linear equations.",
            "videoUrl": "https://youtu.be/bms12_matrices"
          },
          {
            "id": "bms12_1_2",
            "title": "Set Theory & Functions",
            "desc": "Set operations (union, intersection), relations and functions in commercial applications.",
            "videoUrl": "https://youtu.be/bms12_sets"
          }
        ]
      },
      {
        "unitId": "bms12_u2",
        "unit": "Unit - II: Calculus",
        "chapters": [
          {
            "id": "bms12_2_1",
            "title": "Limits, Continuity & Differentiation",
            "desc": "Evaluation of limits, continuity conditions, differentiation of algebraic functions.",
            "videoUrl": "https://youtu.be/bms12_diff"
          },
          {
            "id": "bms12_2_2",
            "title": "Integration",
            "desc": "Basic integration rules, integration by substitution method in economic problems.",
            "videoUrl": "https://youtu.be/bms12_integ"
          }
        ]
      },
      {
        "unitId": "bms12_u3",
        "unit": "Unit - III: Measures of Central Tendency",
        "chapters": [
          {
            "id": "bms12_3_1",
            "title": "Mathematical Averages (AM, GM, HM)",
            "desc": "Arithmetic Mean (simple & weighted), Geometric Mean, Harmonic Mean properties.",
            "videoUrl": "https://youtu.be/bms12_averages"
          },
          {
            "id": "bms12_3_2",
            "title": "Positional Averages (Median, Mode, Quartiles)",
            "desc": "Median, Mode, quartiles, deciles, percentiles, empirical relationship between mean, median, mode.",
            "videoUrl": "https://youtu.be/bms12_median"
          }
        ]
      },
      {
        "unitId": "bms12_u4",
        "unit": "Unit - IV: Measures of Dispersion",
        "chapters": [
          {
            "id": "bms12_4_1",
            "title": "Positional & Mathematical Dispersion",
            "desc": "Range, Quartile Deviation, Mean Deviation, Standard Deviation, coefficient of variation.",
            "videoUrl": "https://youtu.be/bms12_dispersion"
          }
        ]
      },
      {
        "unitId": "bms12_u5",
        "unit": "Unit - V: Project Work & Viva",
        "chapters": [
          {
            "id": "bms12_5_1",
            "title": "Statistical Analysis Project & Viva",
            "desc": "Real life application of matrices, average & dispersion computation from Odisha corporate datasets.",
            "videoUrl": "https://youtu.be/bms12_project"
          }
        ]
      }
    ]
  },
  "IT": {
    "11": [
      {
        "unitId": "it11_u1",
        "unit": "Unit - 1: Introduction to Computer System & Software",
        "chapters": [
          {
            "id": "it11_1_1",
            "title": "Computer Organization & Hardware Concepts",
            "desc": "CPU, RAM, ROM, I/O devices (OCR, OMR, biometric sensors), storage devices, memory units.",
            "videoUrl": "https://youtu.be/it11_hardware"
          },
          {
            "id": "it11_1_2",
            "title": "Software Types & Open Source Concepts",
            "desc": "System software, OS, compilers/interpreters, utility tools, FOSS, GNU/Linux, Unicode, fonts.",
            "videoUrl": "https://youtu.be/it11_software"
          }
        ]
      },
      {
        "unitId": "it11_u2",
        "unit": "Unit - 2: Introduction to Programming",
        "chapters": [
          {
            "id": "it11_2_1",
            "title": "IDE Programming & Java Swing GUI",
            "desc": "Rapid application development, JFrame, JButton, JTextField, JCheckBox, JComboBox, methods.",
            "videoUrl": "https://youtu.be/it11_swing"
          },
          {
            "id": "it11_2_2",
            "title": "Java Fundamentals & Control Flow",
            "desc": "Data types, variable scope, parseInt/parseDouble, if-else, switch, while, do-while, for loops.",
            "videoUrl": "https://youtu.be/it11_loops"
          }
        ]
      },
      {
        "unitId": "it11_u3",
        "unit": "Unit - 3: Relational Database Management System (RDBMS)",
        "chapters": [
          {
            "id": "it11_3_1",
            "title": "Database Fundamentals & Architecture",
            "desc": "Relational data model, tables, tuples, attributes, keys (primary, candidate, foreign key).",
            "videoUrl": "https://youtu.be/it11_rdbms"
          },
          {
            "id": "it11_3_2",
            "title": "MySQL DDL & DML Commands",
            "desc": "CREATE, DROP, ALTER, SELECT, INSERT, UPDATE, DELETE, WHERE clause, logical & comparison operators.",
            "videoUrl": "https://youtu.be/it11_mysql"
          }
        ]
      },
      {
        "unitId": "it11_u4",
        "unit": "Unit - 4: IT Applications",
        "chapters": [
          {
            "id": "it11_4_1",
            "title": "E-Governance & E-Learning",
            "desc": "Definitions, citizen benefits, e-learning platforms, societal impact, challenges and solutions.",
            "videoUrl": "https://youtu.be/it11_apps"
          }
        ]
      }
    ],
    "12": [
      {
        "unitId": "it12_u1",
        "unit": "UNIT-1: Networking & Open Standards",
        "chapters": [
          {
            "id": "it12_1_1",
            "title": "Computer Networks & Topologies",
            "desc": "Hub, switch, router, gateway, LAN, MAN, WAN, PAN, Star, Ring, Bus, Tree, wired and wireless media.",
            "videoUrl": "https://youtu.be/it12_net"
          },
          {
            "id": "it12_1_2",
            "title": "Internet Protocols, Applications & Cyber Security",
            "desc": "TCP/IP, HTTP, DNS, IP/MAC address, VoIP, firewall, cookies, digital signatures, cyber laws.",
            "videoUrl": "https://youtu.be/it12_security"
          }
        ]
      },
      {
        "unitId": "it12_u2",
        "unit": "UNIT-2: Programming & Web Technologies",
        "chapters": [
          {
            "id": "it12_2_1",
            "title": "Java Object-Oriented Programming & JDBC",
            "desc": "Access specifiers, inheritance, String & Math library methods, connecting Java to MySQL with JDBC.",
            "videoUrl": "https://youtu.be/it12_java"
          },
          {
            "id": "it12_2_2",
            "title": "HTML / DHTML Web Page Development",
            "desc": "Tags: headings, lists, tables, forms, frames, CSS basics, XML introduction.",
            "videoUrl": "https://youtu.be/it12_html"
          }
        ]
      },
      {
        "unitId": "it12_u3",
        "unit": "UNIT-3: Relational Database Management System - II",
        "chapters": [
          {
            "id": "it12_3_1",
            "title": "SQL Transactions & Aggregate Functions",
            "desc": "COMMIT, ROLLBACK, GROUP BY, aggregate functions (COUNT, SUM, AVG, MAX, MIN).",
            "videoUrl": "https://youtu.be/it12_sql"
          },
          {
            "id": "it12_3_2",
            "title": "Multi-Table Queries & SQL Joins",
            "desc": "Cartesian product, equi-join, natural join, ORDER BY clause, working with NULL values.",
            "videoUrl": "https://youtu.be/it12_joins"
          }
        ]
      }
    ]
  },
  "History": {
    "11": [
      {
        "unitId": "hi11_u1",
        "unit": "UNIT-1: Meaning of History, Evolution & Early Civilisations",
        "chapters": [
          {
            "id": "hi11_1_1",
            "title": "History: Meaning, Relevance & Human Evolution",
            "desc": "Precursors of modern human beings, tool making, communication modes, early pastoralism.",
            "videoUrl": "https://youtu.be/hi11_evolution"
          },
          {
            "id": "hi11_1_2",
            "title": "Ancient River Valley Civilisations",
            "desc": "Contributions of Egypt, Mesopotamia, and China civilisations to world heritage.",
            "videoUrl": "https://youtu.be/hi11_valleys"
          }
        ]
      },
      {
        "unitId": "hi11_u2",
        "unit": "UNIT-II: Classical Civilisations & Feudalism",
        "chapters": [
          {
            "id": "hi11_2_1",
            "title": "Ancient Greece & Rome",
            "desc": "Athens & Sparta, direct democracy, Pericles, Roman society, constitution, Julius Caesar.",
            "videoUrl": "https://youtu.be/hi11_greece_rome"
          },
          {
            "id": "hi11_2_2",
            "title": "Feudalism in Medieval Europe",
            "desc": "Features, manorial system, knightly culture, merits and demerits of feudal society.",
            "videoUrl": "https://youtu.be/hi11_feudalism"
          }
        ]
      },
      {
        "unitId": "hi11_u3",
        "unit": "UNIT-III: Religions, Science & Explorations",
        "chapters": [
          {
            "id": "hi11_3_1",
            "title": "Major Religions & Renaissance Science",
            "desc": "Christianity, Islam, changing cultural traditions in Europe (11th-17th C), new scientific ideas.",
            "videoUrl": "https://youtu.be/hi11_religions"
          },
          {
            "id": "hi11_3_2",
            "title": "Voyages of Discovery & Americas Civilisations",
            "desc": "European voyages of exploration, Maya, Aztec and Inca civilisations.",
            "videoUrl": "https://youtu.be/hi11_americas"
          }
        ]
      },
      {
        "unitId": "hi11_u4",
        "unit": "UNIT-IV: Industrialisation & Revolutions",
        "chapters": [
          {
            "id": "hi11_4_1",
            "title": "Industrial Revolution",
            "desc": "Innovations, technological breakthroughs, transformation of labor and urban society.",
            "videoUrl": "https://youtu.be/hi11_industrial"
          },
          {
            "id": "hi11_4_2",
            "title": "American & French Revolutions",
            "desc": "American War of Independence, French Revolution of 1789 causes and global significance.",
            "videoUrl": "https://youtu.be/hi11_revolutions"
          }
        ]
      },
      {
        "unitId": "hi11_u5",
        "unit": "UNIT-V: Modern World Conflicts & The United Nations",
        "chapters": [
          {
            "id": "hi11_5_1",
            "title": "World War I & Russian Revolution",
            "desc": "World War I causes/consequences, Russian Revolution of 1917, events leading to WWII.",
            "videoUrl": "https://youtu.be/hi11_ww1_russia"
          },
          {
            "id": "hi11_5_2",
            "title": "The United Nations Organization (UNO)",
            "desc": "Origin, Charter principles, General Assembly, Security Council, structure and achievements.",
            "videoUrl": "https://youtu.be/hi11_un"
          }
        ]
      }
    ],
    "12": [
      {
        "unitId": "hi12_u1",
        "unit": "UNIT-I: Ancient Foundations of Indian Culture",
        "chapters": [
          {
            "id": "hi12_1_1",
            "title": "Sources of Indian History & Harappan Civilisation",
            "desc": "Archaeological/literary sources, Indus valley town planning, trade, craft, religious beliefs.",
            "videoUrl": "https://youtu.be/hi12_sources_harappa"
          },
          {
            "id": "hi12_1_2",
            "title": "Vedic Age & Sixteen Mahajanapadas",
            "desc": "Rig Vedic and Later Vedic society, religion, early states and Mahajanapadas.",
            "videoUrl": "https://youtu.be/hi12_vedic"
          }
        ]
      },
      {
        "unitId": "hi12_u2",
        "unit": "UNIT-II: Religions, Empires & Classical Era",
        "chapters": [
          {
            "id": "hi12_2_1",
            "title": "Religious Movements of 6th Century B.C.",
            "desc": "Jainism and Buddhism teachings, philosophy, contribution to Indian art and culture.",
            "videoUrl": "https://youtu.be/hi12_jain_buddh"
          },
          {
            "id": "hi12_2_2",
            "title": "Kalinga War, Mauryas & Gupta Classical Age",
            "desc": "Kalinga war causes/effects, Ashoka's Dhamma, Mauryan administration, Gupta cultural achievements.",
            "videoUrl": "https://youtu.be/hi12_mauryas_guptas"
          }
        ]
      },
      {
        "unitId": "hi12_u3",
        "unit": "UNIT-III: Medieval India, Travelers & Cultural Synthesis",
        "chapters": [
          {
            "id": "hi12_3_1",
            "title": "Medieval Travelers' Accounts & Delhi Sultanate",
            "desc": "Accounts of Al-Biruni, Ibn Battuta, Bernier, Delhi Sultanate state nature, women's position.",
            "videoUrl": "https://youtu.be/hi12_travelers"
          },
          {
            "id": "hi12_3_2",
            "title": "Mughal Empire Culture & Bhakti/Sufi Movements",
            "desc": "Mughal architecture, Din-i-Ilahi, paintings, tenets and social impact of Sufi and Bhakti saints.",
            "videoUrl": "https://youtu.be/hi12_mughals_bhakti"
          }
        ]
      },
      {
        "unitId": "hi12_u4",
        "unit": "UNIT-IV: British Rule, Rebellions & Freedom Movement",
        "chapters": [
          {
            "id": "hi12_4_1",
            "title": "Colonial Economic Policies & 1857 Revolt",
            "desc": "Drain of wealth, revenue policies, Paika/Khurda Rebellion of 1817, Santal rebellion, 1857 Revolt.",
            "videoUrl": "https://youtu.be/hi12_revolts"
          },
          {
            "id": "hi12_4_2",
            "title": "Gandhian Movements & Freedom Struggle in Odisha",
            "desc": "Non-Cooperation, Civil Disobedience, Quit India movement, Odisha's heroic role.",
            "videoUrl": "https://youtu.be/hi12_freedom_odisha"
          }
        ]
      },
      {
        "unitId": "hi12_u5",
        "unit": "UNIT-V: Colonial Urbanism, Making of Odisha & Constitution",
        "chapters": [
          {
            "id": "hi12_5_1",
            "title": "Colonial Cities & Formation of Separate Odisha Province",
            "desc": "Colonial architecture, Madhusudan Das, Gopabandhu Das, Krushna Chandra Gajapati, Rama Devi.",
            "videoUrl": "https://youtu.be/hi12_odisha_province"
          },
          {
            "id": "hi12_5_2",
            "title": "Framing the Indian Constitution",
            "desc": "Making of the Constituent Assembly, Ambedkar's vision, preamble, salient features.",
            "videoUrl": "https://youtu.be/hi12_constitution"
          }
        ]
      }
    ]
  },
  "Political Science": {
    "11": [
      {
        "unitId": "ps11_u1",
        "unit": "UNIT-I: Understanding Political Theory",
        "chapters": [
          {
            "id": "ps11_1_1",
            "title": "Introduction to Political Theory & State",
            "desc": "What is politics, nature and scope of politics, definition and elements of state.",
            "videoUrl": "https://youtu.be/ps11_intro"
          },
          {
            "id": "ps11_1_2",
            "title": "Nature of State Activity",
            "desc": "Individualism, welfare state model, globalization impact on state sovereignty.",
            "videoUrl": "https://youtu.be/ps11_state"
          }
        ]
      },
      {
        "unitId": "ps11_u2",
        "unit": "UNIT-II: Basic Political Concepts",
        "chapters": [
          {
            "id": "ps11_2_1",
            "title": "Liberty, Equality and Justice",
            "desc": "Positive vs negative liberty, dimensions of equality, social justice principles.",
            "videoUrl": "https://youtu.be/ps11_liberty"
          },
          {
            "id": "ps11_2_2",
            "title": "Rights, Secularism and Development",
            "desc": "Human rights, Western vs Indian secularism, capitalist & socialist development models.",
            "videoUrl": "https://youtu.be/ps11_rights"
          }
        ]
      },
      {
        "unitId": "ps11_u3",
        "unit": "UNIT-III: Indian Constitution",
        "chapters": [
          {
            "id": "ps11_3_1",
            "title": "Philosophy & Making of the Indian Constitution",
            "desc": "Constituent Assembly, Preamble, basic features, constitutional amendment procedure.",
            "videoUrl": "https://youtu.be/ps11_preamble"
          },
          {
            "id": "ps11_3_2",
            "title": "Fundamental Rights, DPSP & Fundamental Duties",
            "desc": "Part III Fundamental Rights, Directive Principles of State Policy, Fundamental Duties.",
            "videoUrl": "https://youtu.be/ps11_rights_dpsp"
          }
        ]
      },
      {
        "unitId": "ps11_u4",
        "unit": "UNIT-IV: Constitution at Work - Elections & Legislature",
        "chapters": [
          {
            "id": "ps11_4_1",
            "title": "Elections & Representation",
            "desc": "Election Commission composition, powers, free and fair elections, electoral reforms.",
            "videoUrl": "https://youtu.be/ps11_elections"
          },
          {
            "id": "ps11_4_2",
            "title": "Legislature: Union Parliament & Odisha Vidhan Sabha",
            "desc": "Lok Sabha, Rajya Sabha powers, legislative process, Odisha Legislative Assembly structure.",
            "videoUrl": "https://youtu.be/ps11_parliament"
          }
        ]
      },
      {
        "unitId": "ps11_u5",
        "unit": "UNIT-V: Constitution at Work - Executive & Judiciary",
        "chapters": [
          {
            "id": "ps11_5_1",
            "title": "Union & State Executive",
            "desc": "President powers and position, Prime Minister role, Governor and Chief Minister functions.",
            "videoUrl": "https://youtu.be/ps11_executive"
          },
          {
            "id": "ps11_5_2",
            "title": "Judiciary in India",
            "desc": "Supreme Court, High Courts jurisdiction, judicial review, judicial activism in public interest.",
            "videoUrl": "https://youtu.be/ps11_judiciary"
          }
        ]
      }
    ],
    "12": [
      {
        "unitId": "ps12_u1",
        "unit": "UNIT-I: Democracy & Party System in India",
        "chapters": [
          {
            "id": "ps12_1_1",
            "title": "Democracy & Challenges in India",
            "desc": "Meaning, direct/indirect democracy, challenges: inequality, illiteracy, regionalism, naxalism.",
            "videoUrl": "https://youtu.be/ps12_democracy"
          },
          {
            "id": "ps12_1_2",
            "title": "Party System & Coalition Politics",
            "desc": "One party dominance, multi-party system, coalition governments, national and regional parties.",
            "videoUrl": "https://youtu.be/ps12_parties"
          }
        ]
      },
      {
        "unitId": "ps12_u2",
        "unit": "UNIT-II: Democratic Process - Federalism & Local Governance",
        "chapters": [
          {
            "id": "ps12_2_1",
            "title": "Federalism in India",
            "desc": "Federal features, Centre-State legislative, administrative & financial relations, recent trends.",
            "videoUrl": "https://youtu.be/ps12_federalism"
          },
          {
            "id": "ps12_2_2",
            "title": "Local Governance (Panchayati Raj & Municipalities)",
            "desc": "73rd and 74th Constitutional amendments, rural and urban local bodies composition and powers.",
            "videoUrl": "https://youtu.be/ps12_local"
          }
        ]
      },
      {
        "unitId": "ps12_u3",
        "unit": "UNIT-III: Nation-Building & Popular Movements",
        "chapters": [
          {
            "id": "ps12_3_1",
            "title": "Challenges to Nation-Building",
            "desc": "Communalism, casteism, regionalism, terrorism, remedies for national integration.",
            "videoUrl": "https://youtu.be/ps12_nation"
          },
          {
            "id": "ps12_3_2",
            "title": "Popular Social Movements",
            "desc": "Women's movements, environmental movements (Chipko, Narmada), development-displacement agitations.",
            "videoUrl": "https://youtu.be/ps12_movements"
          }
        ]
      },
      {
        "unitId": "ps12_u4",
        "unit": "UNIT-IV: India in Contemporary World Politics",
        "chapters": [
          {
            "id": "ps12_4_1",
            "title": "Indian Foreign Policy & Neighbors",
            "desc": "Non-alignment, Panchsheel, relations with China and Pakistan, SAARC.",
            "videoUrl": "https://youtu.be/ps12_foreign"
          },
          {
            "id": "ps12_4_2",
            "title": "International Organizations (UN, World Bank, IMF)",
            "desc": "UN General Assembly, Security Council reform, India's claim to permanent seat, Bretton Woods institutions.",
            "videoUrl": "https://youtu.be/ps12_un"
          }
        ]
      },
      {
        "unitId": "ps12_u5",
        "unit": "UNIT-V: Security & Global Environmental Issues",
        "chapters": [
          {
            "id": "ps12_5_1",
            "title": "Changing Dimensions of Security",
            "desc": "Traditional vs non-traditional security, arms race, human security: poverty, health, education.",
            "videoUrl": "https://youtu.be/ps12_security"
          },
          {
            "id": "ps12_5_2",
            "title": "Global Environmental Governance",
            "desc": "Global warming, climate change, Kyoto Protocol, Paris Accord, India's environmental diplomacy.",
            "videoUrl": "https://youtu.be/ps12_environment"
          }
        ]
      }
    ]
  },
  "Economics": {
    "11": [
      {
        "unitId": "ec11_u1",
        "unit": "Unit I: Status of Indian Economy",
        "chapters": [
          {
            "id": "ec11_1_1",
            "title": "Features of Contemporary Indian Economy",
            "desc": "Basic characteristics, relative contributions of primary, secondary and tertiary sectors.",
            "videoUrl": "https://youtu.be/ec11_features"
          },
          {
            "id": "ec11_1_2",
            "title": "Demographic Profile of India",
            "desc": "Population trends, adverse effects of population explosion, National Population Policy.",
            "videoUrl": "https://youtu.be/ec11_population"
          }
        ]
      },
      {
        "unitId": "ec11_u2",
        "unit": "Unit II: Sectoral Development in India",
        "chapters": [
          {
            "id": "ec11_2_1",
            "title": "Agriculture & Green Revolution",
            "desc": "Importance of agriculture, low productivity causes, Green Revolution impacts.",
            "videoUrl": "https://youtu.be/ec11_agri"
          },
          {
            "id": "ec11_2_2",
            "title": "Industry, Infrastructure & Foreign Trade",
            "desc": "Industrial Policies 1948, 1956, 1991, economic & social infrastructure, foreign trade composition.",
            "videoUrl": "https://youtu.be/ec11_industry"
          }
        ]
      },
      {
        "unitId": "ec11_u3",
        "unit": "Unit III: Economic Planning & Reforms",
        "chapters": [
          {
            "id": "ec11_3_1",
            "title": "Economic Planning & NITI Aayog",
            "desc": "Planning objectives, Five Year Plans achievements and failures, role of NITI Aayog.",
            "videoUrl": "https://youtu.be/ec11_planning"
          },
          {
            "id": "ec11_3_2",
            "title": "Economic Reforms Since 1991 (LPG)",
            "desc": "Need for NEP 1991, Liberalisation, Privatisation, and Globalisation policies.",
            "videoUrl": "https://youtu.be/ec11_lpg"
          }
        ]
      },
      {
        "unitId": "ec11_u4",
        "unit": "Unit IV: Current Challenges Facing Indian Economy",
        "chapters": [
          {
            "id": "ec11_4_1",
            "title": "Poverty & Unemployment",
            "desc": "Absolute/relative poverty, alleviation schemes, unemployment types, MGNREGA.",
            "videoUrl": "https://youtu.be/ec11_poverty"
          },
          {
            "id": "ec11_4_2",
            "title": "Inflation & Sustainable Development",
            "desc": "Causes of inflation, anti-inflationary policies, environment-growth conflict, global warming.",
            "videoUrl": "https://youtu.be/ec11_inflation"
          }
        ]
      },
      {
        "unitId": "ec11_u5",
        "unit": "Unit V: Introductory Statistics for Economics",
        "chapters": [
          {
            "id": "ec11_5_1",
            "title": "Scope & Sources of Statistical Data",
            "desc": "Meaning, uses of statistics, primary & secondary sources, NSSO and Census of India.",
            "videoUrl": "https://youtu.be/ec11_stats"
          }
        ]
      },
      {
        "unitId": "ec11_u6",
        "unit": "Unit VI: Frequency Distribution & Data Presentation",
        "chapters": [
          {
            "id": "ec11_6_1",
            "title": "Tabular & Diagrammatic Presentation",
            "desc": "Bar diagrams, pie diagrams, histograms, frequency polygons, ogives, line graphs.",
            "videoUrl": "https://youtu.be/ec11_diagrams"
          }
        ]
      },
      {
        "unitId": "ec11_u7",
        "unit": "Unit VII: Measures of Central Tendency & Dispersion",
        "chapters": [
          {
            "id": "ec11_7_1",
            "title": "Averages (Mean, Median, Mode)",
            "desc": "Simple and weighted arithmetic mean, median, mode, geometric & harmonic mean.",
            "videoUrl": "https://youtu.be/ec11_mean"
          },
          {
            "id": "ec11_7_2",
            "title": "Measures of Dispersion",
            "desc": "Range, quartile deviation, mean deviation, standard deviation, relative measures.",
            "videoUrl": "https://youtu.be/ec11_dispersion"
          }
        ]
      },
      {
        "unitId": "ec11_u8",
        "unit": "Unit VIII: Correlation, Regression & Index Numbers",
        "chapters": [
          {
            "id": "ec11_8_1",
            "title": "Correlation, Regression & Index Numbers",
            "desc": "Scatter diagrams, Karl Pearson correlation, regression uses, CPI, WPI, time series.",
            "videoUrl": "https://youtu.be/ec11_index"
          }
        ]
      }
    ],
    "12": [
      {
        "unitId": "ec12_u1",
        "unit": "Unit I: Introduction to Microeconomics",
        "chapters": [
          {
            "id": "ec12_1_1",
            "title": "Central Problems of an Economy",
            "desc": "Scarcity and choice, what, how and for whom to produce, opportunity cost, PPF curve.",
            "videoUrl": "https://youtu.be/ec12_intro"
          }
        ]
      },
      {
        "unitId": "ec12_u2",
        "unit": "Unit II: Consumption and Demand",
        "chapters": [
          {
            "id": "ec12_2_1",
            "title": "Utility Analysis & Demand Theory",
            "desc": "Law of diminishing marginal utility, consumer's equilibrium, demand curve, determinants.",
            "videoUrl": "https://youtu.be/ec12_demand"
          },
          {
            "id": "ec12_2_2",
            "title": "Price Elasticity of Demand",
            "desc": "Measurement of elasticity (percentage, geometric), relationship with total expenditure.",
            "videoUrl": "https://youtu.be/ec12_elasticity"
          }
        ]
      },
      {
        "unitId": "ec12_u3",
        "unit": "Unit III: Production",
        "chapters": [
          {
            "id": "ec12_3_1",
            "title": "Production Function & Laws of Returns",
            "desc": "Short run vs long run, Total, Average and Marginal product, Law of variable proportions.",
            "videoUrl": "https://youtu.be/ec12_production"
          }
        ]
      },
      {
        "unitId": "ec12_u4",
        "unit": "Unit IV: Cost, Revenue and Supply",
        "chapters": [
          {
            "id": "ec12_4_1",
            "title": "Cost & Revenue Concepts",
            "desc": "Fixed vs variable costs, short run cost curves, total, average and marginal revenue curves.",
            "videoUrl": "https://youtu.be/ec12_cost"
          },
          {
            "id": "ec12_4_2",
            "title": "Law of Supply & Elasticity",
            "desc": "Determinants of supply, supply curve shifts, price elasticity of supply.",
            "videoUrl": "https://youtu.be/ec12_supply"
          }
        ]
      },
      {
        "unitId": "ec12_u5",
        "unit": "Unit V: Forms of Market & Price Determination",
        "chapters": [
          {
            "id": "ec12_5_1",
            "title": "Market Structures (Competition, Monopoly)",
            "desc": "Perfect competition price determination, monopoly, monopolistic competition, oligopoly features.",
            "videoUrl": "https://youtu.be/ec12_markets"
          }
        ]
      },
      {
        "unitId": "ec12_u6",
        "unit": "Unit VI: Introduction to Macroeconomics",
        "chapters": [
          {
            "id": "ec12_6_1",
            "title": "Micro vs Macroeconomics",
            "desc": "Subject matter of macroeconomics, circular flow of income in two-sector economy.",
            "videoUrl": "https://youtu.be/ec12_macro"
          }
        ]
      },
      {
        "unitId": "ec12_u7",
        "unit": "Unit VII: National Income & Income Determination",
        "chapters": [
          {
            "id": "ec12_7_1",
            "title": "National Income Aggregates",
            "desc": "GDP, GNP, NDP, NNP at market price and factor cost, nominal vs real GDP.",
            "videoUrl": "https://youtu.be/ec12_gdp"
          },
          {
            "id": "ec12_7_2",
            "title": "Keynesian Theory of Income Determination",
            "desc": "Aggregate demand and aggregate supply, effective demand, Keynesian multiplier.",
            "videoUrl": "https://youtu.be/ec12_keynes"
          }
        ]
      },
      {
        "unitId": "ec12_u8",
        "unit": "Unit VIII: Money, Banking and Public Finance",
        "chapters": [
          {
            "id": "ec12_8_1",
            "title": "Money & Commercial Banking",
            "desc": "Functions of money, credit creation by commercial banks, central banking functions.",
            "videoUrl": "https://youtu.be/ec12_banking"
          },
          {
            "id": "ec12_8_2",
            "title": "Government Budget & Fiscal Operations",
            "desc": "Objectives of budget, revenue vs capital receipts/expenditures, fiscal deficit concepts.",
            "videoUrl": "https://youtu.be/ec12_budget"
          }
        ]
      }
    ]
  },
  "Logic": {
    "11": [
      {
        "unitId": "lo11_u1",
        "unit": "UNIT-1: Nature of Logic & Language",
        "chapters": [
          {
            "id": "lo11_1_1",
            "title": "Nature and Scope of Logic",
            "desc": "Definition of logic, argument structure, truth vs validity, sound and unsound arguments.",
            "videoUrl": "https://youtu.be/lo11_nature"
          },
          {
            "id": "lo11_1_2",
            "title": "Logic and Language",
            "desc": "Functions of language, words vs terms, denotation, connotation and extension.",
            "videoUrl": "https://youtu.be/lo11_language"
          }
        ]
      },
      {
        "unitId": "lo11_u2",
        "unit": "UNIT-2: Propositions & Square of Opposition",
        "chapters": [
          {
            "id": "lo11_2_1",
            "title": "Classification of Propositions",
            "desc": "Categorical propositions (A, E, I, O), reduction to logical form, distribution of terms.",
            "videoUrl": "https://youtu.be/lo11_propositions"
          },
          {
            "id": "lo11_2_2",
            "title": "Opposition of Propositions",
            "desc": "Sevenfold relation of propositions, traditional Square of Opposition (contrary, subcontrary).",
            "videoUrl": "https://youtu.be/lo11_opposition"
          }
        ]
      },
      {
        "unitId": "lo11_u3",
        "unit": "UNIT-3: Nature and Procedures of Induction",
        "chapters": [
          {
            "id": "lo11_3_1",
            "title": "Induction vs Deduction",
            "desc": "Primary and secondary induction, problem of induction, scientific induction.",
            "videoUrl": "https://youtu.be/lo11_induction"
          },
          {
            "id": "lo11_3_2",
            "title": "Probable Inference & Analogy",
            "desc": "Induction by simple enumeration, analogy, statistical syllogism.",
            "videoUrl": "https://youtu.be/lo11_analogy"
          }
        ]
      },
      {
        "unitId": "lo11_u4",
        "unit": "UNIT-4: Grounds of Induction & Hypothesis",
        "chapters": [
          {
            "id": "lo11_4_1",
            "title": "Formal & Material Grounds of Induction",
            "desc": "Law of uniformity of nature, law of causation, cause vs condition, observation and experiment.",
            "videoUrl": "https://youtu.be/lo11_causation"
          },
          {
            "id": "lo11_4_2",
            "title": "Hypothesis in Scientific Method",
            "desc": "Definition of hypothesis, conditions of legitimate hypothesis, verification and proof.",
            "videoUrl": "https://youtu.be/lo11_hypothesis"
          }
        ]
      },
      {
        "unitId": "lo11_u5",
        "unit": "UNIT-5: Indian Epistemology (Jainism & Buddhism)",
        "chapters": [
          {
            "id": "lo11_5_1",
            "title": "Jain Epistemology: Syadavada & Anekantavada",
            "desc": "Characteristics of Indian philosophy, Jain theory of judgment (Syadavada) and multiple perspectives.",
            "videoUrl": "https://youtu.be/lo11_jain"
          },
          {
            "id": "lo11_5_2",
            "title": "Buddhist Philosophy: Four Noble Truths",
            "desc": "Four Noble Truths and the doctrine of Dependent Origination (Pratityasamutpada).",
            "videoUrl": "https://youtu.be/lo11_buddhism"
          }
        ]
      }
    ],
    "12": [
      {
        "unitId": "lo12_u1",
        "unit": "UNIT-1: Theory of Inference & Categorical Syllogism",
        "chapters": [
          {
            "id": "lo12_1_1",
            "title": "Immediate Inference: Conversion & Obversion",
            "desc": "Classification of inference, rules of conversion and obversion.",
            "videoUrl": "https://youtu.be/lo12_inference"
          },
          {
            "id": "lo12_1_2",
            "title": "Categorical Syllogism Structure & Moods",
            "desc": "Structure, figures, moods, general rules of syllogism, determination of valid moods.",
            "videoUrl": "https://youtu.be/lo12_syllogism"
          }
        ]
      },
      {
        "unitId": "lo12_u2",
        "unit": "UNIT-2: Special Rules, Reduction & Mixed Syllogisms",
        "chapters": [
          {
            "id": "lo12_2_1",
            "title": "Special Rules of Figures & Aristotle's Dictum",
            "desc": "Direct and indirect reduction of syllogisms, dictum de omni et nullo.",
            "videoUrl": "https://youtu.be/lo12_reduction"
          },
          {
            "id": "lo12_2_2",
            "title": "Mixed Syllogisms & Dilemma",
            "desc": "Hypothetical-categorical, disjunctive-categorical syllogism, forms of dilemma, refutation.",
            "videoUrl": "https://youtu.be/lo12_dilemma"
          }
        ]
      },
      {
        "unitId": "lo12_u3",
        "unit": "UNIT-3: Fallacies in Logic",
        "chapters": [
          {
            "id": "lo12_3_1",
            "title": "Deductive, Inductive & Semi-Logical Fallacies",
            "desc": "Fallacies of four terms, illicit major/minor, illicit generalization, false analogy, Ignoratio Elenchi.",
            "videoUrl": "https://youtu.be/lo12_fallacies"
          }
        ]
      },
      {
        "unitId": "lo12_u4",
        "unit": "UNIT-4: Propositional Symbolic Logic",
        "chapters": [
          {
            "id": "lo12_4_1",
            "title": "Symbolic Logic & Truth Tables",
            "desc": "Propositional variables, connectives (conjunction, disjunction, implication), truth tables, validity testing.",
            "videoUrl": "https://youtu.be/lo12_symbolic"
          }
        ]
      },
      {
        "unitId": "lo12_u5",
        "unit": "UNIT-5: Experimental Enquiry & Nyaya Theory",
        "chapters": [
          {
            "id": "lo12_5_1",
            "title": "Mill's Experimental Enquiry Methods",
            "desc": "Methods of Agreement, Difference, Joint Method, Concomitant Variation, Residues.",
            "videoUrl": "https://youtu.be/lo12_mills"
          },
          {
            "id": "lo12_5_2",
            "title": "Nyaya Theory of Knowledge & Gita Karma",
            "desc": "Perception, inference, Vyapti, Gita's Niskama Karma, Gandhian non-violence philosophy.",
            "videoUrl": "https://youtu.be/lo12_nyaya"
          }
        ]
      }
    ]
  },
  "Sociology": {
    "11": [
      {
        "unitId": "so11_u1",
        "unit": "Unit - I: Sociology & Its Relationship",
        "chapters": [
          {
            "id": "so11_1_1",
            "title": "Emergence & Scope of Sociology",
            "desc": "Emergence, meaning, nature and relationship with History, Economics, Pol Science, Psychology.",
            "videoUrl": "https://youtu.be/so11_scope"
          }
        ]
      },
      {
        "unitId": "so11_u2",
        "unit": "Unit - II: Basic Sociological Concepts",
        "chapters": [
          {
            "id": "so11_2_1",
            "title": "Society, Community & Association",
            "desc": "Characteristics of society, individual and society relationship, community and association.",
            "videoUrl": "https://youtu.be/so11_society"
          },
          {
            "id": "so11_2_2",
            "title": "Social Groups & Culture",
            "desc": "Primary/secondary groups, in-group/out-group, material and non-material culture.",
            "videoUrl": "https://youtu.be/so11_groups"
          }
        ]
      },
      {
        "unitId": "so11_u3",
        "unit": "Unit - III: Social Institutions",
        "chapters": [
          {
            "id": "so11_3_1",
            "title": "Family, Kinship, Education & Economy",
            "desc": "Family types and functions, kinship rules, education as institution, property and division of labor.",
            "videoUrl": "https://youtu.be/so11_institutions"
          }
        ]
      },
      {
        "unitId": "so11_u4",
        "unit": "Unit - IV: Process, Stratification and Change",
        "chapters": [
          {
            "id": "so11_4_1",
            "title": "Social Processes (Cooperation, Conflict)",
            "desc": "Associative processes (cooperation, accommodation) vs dissociative (competition, conflict).",
            "videoUrl": "https://youtu.be/so11_processes"
          },
          {
            "id": "so11_4_2",
            "title": "Social Stratification & Change",
            "desc": "Bases of stratification: caste, class, gender, technological and cultural factors of social change.",
            "videoUrl": "https://youtu.be/so11_stratification"
          }
        ]
      },
      {
        "unitId": "so11_u5",
        "unit": "Unit - V: Sociology Thinkers, Methods & Techniques",
        "chapters": [
          {
            "id": "so11_5_1",
            "title": "Pioneering Sociologists (Comte, Durkheim, Srinivas)",
            "desc": "Comte's three stages, Durkheim on suicide, Ghurye on caste, Srinivas on Sanskritisation.",
            "videoUrl": "https://youtu.be/so11_thinkers"
          },
          {
            "id": "so11_5_2",
            "title": "Sociological Research Methods",
            "desc": "Observation methods, questionnaire and schedule design, merits and limitations.",
            "videoUrl": "https://youtu.be/so11_research"
          }
        ]
      }
    ],
    "12": [
      {
        "unitId": "so12_u1",
        "unit": "Unit - I: Introducing Indian Society",
        "chapters": [
          {
            "id": "so12_1_1",
            "title": "Composition of Indian Society",
            "desc": "Demographic, linguistic, religious, racial and tribal diversity in India.",
            "videoUrl": "https://youtu.be/so12_composition"
          },
          {
            "id": "so12_1_2",
            "title": "Unity in Diversity",
            "desc": "Geographical, cultural and political bonds of unity amidst social diversity.",
            "videoUrl": "https://youtu.be/so12_unity"
          }
        ]
      },
      {
        "unitId": "so12_u2",
        "unit": "Unit - II: Indian Social Structure",
        "chapters": [
          {
            "id": "so12_2_1",
            "title": "Caste System & Hindu Joint Family",
            "desc": "Caste characteristics, recent transformations, joint family merits/demerits and nuclearization.",
            "videoUrl": "https://youtu.be/so12_caste_family"
          },
          {
            "id": "so12_2_2",
            "title": "Village Community & Rural-Urban Linkages",
            "desc": "Indian village community characteristics, rural-urban migration and divisions.",
            "videoUrl": "https://youtu.be/so12_village"
          }
        ]
      },
      {
        "unitId": "so12_u3",
        "unit": "Unit - III: Challenges of Cultural Diversity",
        "chapters": [
          {
            "id": "so12_3_1",
            "title": "National Integration & Divisive Forces",
            "desc": "Obstacles to national integration: communalism, regionalism, casteism, terrorism.",
            "videoUrl": "https://youtu.be/so12_integration"
          }
        ]
      },
      {
        "unitId": "so12_u4",
        "unit": "Unit - IV: Social Inequality, Exclusion and Movement",
        "chapters": [
          {
            "id": "so12_4_1",
            "title": "Caste/Class Inequality & Marginalized Classes",
            "desc": "Scheduled Castes, Scheduled Tribes, constitutional safeguards and affirmative actions.",
            "videoUrl": "https://youtu.be/so12_marginalized"
          },
          {
            "id": "so12_4_2",
            "title": "Tribal and Peasant Movements",
            "desc": "Historical and contemporary tribal agitations, peasant struggles in independent India.",
            "videoUrl": "https://youtu.be/so12_movements"
          }
        ]
      },
      {
        "unitId": "so12_u5",
        "unit": "Unit - V: Change and Development in India",
        "chapters": [
          {
            "id": "so12_5_1",
            "title": "Industrialisation, Urbanisation & Modernisation",
            "desc": "Social impacts of industrial expansion, smart urban centres, westernization and modernization.",
            "videoUrl": "https://youtu.be/so12_urbanisation"
          },
          {
            "id": "so12_5_2",
            "title": "Globalisation and Indian Society",
            "desc": "Economic reforms impact on culture, consumerism, youth aspirations, media influence.",
            "videoUrl": "https://youtu.be/so12_globalisation"
          }
        ]
      }
    ]
  },
  "English": {
    "11": [
      {
        "unitId": "en11_u1",
        "unit": "UNIT - I : PROSE",
        "chapters": [
          {
            "id": "en11_1_1",
            "title": "Standing Up for Yourself — Yevgeny Yevtushenko",
            "desc": "Courage, overcoming intimidation and childhood survival in wartime Moscow.",
            "videoUrl": "https://youtu.be/en11_standing"
          },
          {
            "id": "en11_1_2",
            "title": "The Legend behind a Legend — Hariharan Balakrishnan",
            "desc": "Tribute to dedicated wildlife conservation and Similipal tiger sanctuary.",
            "videoUrl": "https://youtu.be/en11_legend"
          },
          {
            "id": "en11_1_3",
            "title": "The Golden Touch — Nathaniel Hawthorne",
            "desc": "The myth of King Midas, avarice, and the true wealth of human affection.",
            "videoUrl": "https://youtu.be/en11_midas"
          },
          {
            "id": "en11_1_4",
            "title": "In London In Minus Fours — Louis Fischer",
            "desc": "Mahatma Gandhi's journey to England in khadi, humor, and moral resolve.",
            "videoUrl": "https://youtu.be/en11_gandhi"
          },
          {
            "id": "en11_1_5",
            "title": "The Cancer Fight, from Hiroshima to Houston — Ritsuko Komaki",
            "desc": "A survivor's heroic medical crusade against radiation and malignancy.",
            "videoUrl": "https://youtu.be/en11_cancer"
          }
        ]
      },
      {
        "unitId": "en11_u2",
        "unit": "UNIT - II : POETRY",
        "chapters": [
          {
            "id": "en11_2_1",
            "title": "Stopping by Woods on a Snowy Evening — Robert Frost",
            "desc": "Nature's tranquil beauty and moral duties to keep before the final sleep.",
            "videoUrl": "https://youtu.be/en11_woods"
          },
          {
            "id": "en11_2_2",
            "title": "Oft. in the Stilly Night — Thomas Moore",
            "desc": "Melancholic reminiscence of bygone childhood friendships and lost companions.",
            "videoUrl": "https://youtu.be/en11_stilly"
          },
          {
            "id": "en11_2_3",
            "title": "The Inchcape Rock — Robert Southey",
            "desc": "Ballad of Sir Ralph the Rover, poetic justice and retribution for malice.",
            "videoUrl": "https://youtu.be/en11_inchcape"
          },
          {
            "id": "en11_2_4",
            "title": "To My True Friend — Elizabeth Pinard",
            "desc": "Ode to unconditional loyalty, empathetic listening, and steadfast support.",
            "videoUrl": "https://youtu.be/en11_friend"
          },
          {
            "id": "en11_2_5",
            "title": "Fishing — Gopa Ranjan Mishra",
            "desc": "The delicate balance of nature, human reflection, and patient observation.",
            "videoUrl": "https://youtu.be/en11_fishing"
          }
        ]
      },
      {
        "unitId": "en11_u3",
        "unit": "UNIT - III : NON DETAILED STUDY",
        "chapters": [
          {
            "id": "en11_3_1",
            "title": "Three Questions — Leo Tolstoy",
            "desc": "The king's philosophical quest: the right time, the right person, and the most important deed.",
            "videoUrl": "https://youtu.be/en11_questions"
          },
          {
            "id": "en11_3_2",
            "title": "After Twenty Years — O. Henry",
            "desc": "Classic tale of loyalty, duty, and tragic rendezvous between policeman and outlaw.",
            "videoUrl": "https://youtu.be/en11_twenty"
          },
          {
            "id": "en11_3_3",
            "title": "The Open Window — Saki",
            "desc": "Masterpiece of juvenile deception and mischievous storytelling over nervous travelers.",
            "videoUrl": "https://youtu.be/en11_window"
          },
          {
            "id": "en11_3_4",
            "title": "The One and Only Houdini — Robert Lado",
            "desc": "Life, daring escapes, and legendary illusions of Harry Houdini.",
            "videoUrl": "https://youtu.be/en11_houdini"
          },
          {
            "id": "en11_3_5",
            "title": "Childhood — Jawaharlal Nehru",
            "desc": "Early reflections, aristocratic family atmosphere, and moral lessons of India's first PM.",
            "videoUrl": "https://youtu.be/en11_nehru"
          },
          {
            "id": "en11_3_6",
            "title": "Marriage — Dr. Rajendra Prasad",
            "desc": "Traditional matrimonial customs, social decorum, and simplicity of India's first President.",
            "videoUrl": "https://youtu.be/en11_prasad"
          }
        ]
      },
      {
        "unitId": "en11_u4",
        "unit": "UNIT - IV : WRITING SKILLS",
        "chapters": [
          {
            "id": "en11_4_1",
            "title": "Paragraph Writing & Developing Ideas",
            "desc": "Topic sentence, coherence, developmental details, logical expansion of themes.",
            "videoUrl": "https://youtu.be/en11_para"
          },
          {
            "id": "en11_4_2",
            "title": "Official, Business & Personal Letters",
            "desc": "Formal applications, business inquiries, complaints, and personal correspondence formats.",
            "videoUrl": "https://youtu.be/en11_letters"
          },
          {
            "id": "en11_4_3",
            "title": "Emails, Notices, Advertisements & Graphics",
            "desc": "Short public notices, display advertisements, email etiquette, graph interpretation.",
            "videoUrl": "https://youtu.be/en11_notices"
          }
        ]
      },
      {
        "unitId": "en11_u5",
        "unit": "UNIT - V : GRAMMAR",
        "chapters": [
          {
            "id": "en11_5_1",
            "title": "Countable/Uncountable Nouns & Tense Patterns",
            "desc": "Noun categories, quantifiers, present, past and future temporal aspects.",
            "videoUrl": "https://youtu.be/en11_tenses"
          },
          {
            "id": "en11_5_2",
            "title": "Modal Verbs, Prepositions & Imperatives",
            "desc": "Auxiliary modals (can, must, should, would), spatial/temporal prepositions, commanding expressions.",
            "videoUrl": "https://youtu.be/en11_modals"
          }
        ]
      }
    ],
    "12": [
      {
        "unitId": "en12_u1",
        "unit": "UNIT - I : PROSE",
        "chapters": [
          {
            "id": "en12_1_1",
            "title": "My Greatest Olympic Prize — Jesse Owens",
            "desc": "Sportsmanship and friendship between Jesse Owens and German athlete Luz Long in Berlin 1936.",
            "videoUrl": "https://youtu.be/en12_owens"
          },
          {
            "id": "en12_1_2",
            "title": "On Examinations — Winston S. Churchill",
            "desc": "Churchill's humorous memories of school entrance exams at Harrow and learning English grammar.",
            "videoUrl": "https://youtu.be/en12_churchill"
          },
          {
            "id": "en12_1_3",
            "title": "The Portrait of a Lady — Khushwant Singh",
            "desc": "Touching biographical portrait of the author's pious grandmother and generational change.",
            "videoUrl": "https://youtu.be/en12_portrait"
          },
          {
            "id": "en12_1_4",
            "title": "The Magic of Teamwork — Sam Pitroda",
            "desc": "Importance of collaborative spirit, mutual respect, and overcoming ego in modern organizations.",
            "videoUrl": "https://youtu.be/en12_teamwork"
          },
          {
            "id": "en12_1_5",
            "title": "The Price of Pollution — Susan Berfield",
            "desc": "Industrial pollution, ecological destruction, and the heavy human cost of toxic waste.",
            "videoUrl": "https://youtu.be/en12_pollution"
          }
        ]
      },
      {
        "unitId": "en12_u2",
        "unit": "UNIT - II : POETRY",
        "chapters": [
          {
            "id": "en12_2_1",
            "title": "Daffodils — William Wordsworth",
            "desc": "The sublime joy of nature and the introspective bliss of memory's inward eye.",
            "videoUrl": "https://youtu.be/en12_daffodils"
          },
          {
            "id": "en12_2_2",
            "title": "The Ballad of Father Gilligan — W.B. Yeats",
            "desc": "Divine compassion, tireless pastoral duty, and God's angel sent to minister to the dying.",
            "videoUrl": "https://youtu.be/en12_gilligan"
          },
          {
            "id": "en12_2_3",
            "title": "A Psalm of Life — Henry W. Longfellow",
            "desc": "Inspirational anthem urging proactive effort, courage, and leaving footprints in the sands of time.",
            "videoUrl": "https://youtu.be/en12_psalm"
          },
          {
            "id": "en12_2_4",
            "title": "Television — Roald Dahl",
            "desc": "Satirical warning against screen addiction, advocating the boundless delight of books.",
            "videoUrl": "https://youtu.be/en12_tv"
          },
          {
            "id": "en12_2_5",
            "title": "Money Madness — D.H. Lawrence",
            "desc": "Critique of capitalist obsession with wealth, collective hysteria, and true human dignity.",
            "videoUrl": "https://youtu.be/en12_money"
          }
        ]
      },
      {
        "unitId": "en12_u3",
        "unit": "UNIT - III : NON DETAILED STUDY",
        "chapters": [
          {
            "id": "en12_3_1",
            "title": "The Doctor's Word — R.K. Narayan",
            "desc": "Dr. Raman's uncompromising truthfulness and the miraculous healing power of human trust.",
            "videoUrl": "https://youtu.be/en12_doc"
          },
          {
            "id": "en12_3_2",
            "title": "The Nightingale and the Rose — Oscar Wilde",
            "desc": "Poignant fairy tale on sacrificial romantic idealism vs shallow materialism.",
            "videoUrl": "https://youtu.be/en12_rose"
          },
          {
            "id": "en12_3_3",
            "title": "Mystery of the Missing Cap — Manoj Das",
            "desc": "Satirical humor around village politics, minister Moharana's visit, and monkey mischief.",
            "videoUrl": "https://youtu.be/en12_cap"
          },
          {
            "id": "en12_3_4",
            "title": "The Monkey's Paw — W.W. Jacobs",
            "desc": "Supernatural horror, fatal wishes, and the grim consequence of interfering with fate.",
            "videoUrl": "https://youtu.be/en12_paw"
          },
          {
            "id": "en12_3_5",
            "title": "My Mother — Charlie Chaplin",
            "desc": "Chaplin's poignant recollection of his mother's acting courage and childhood poverty.",
            "videoUrl": "https://youtu.be/en12_mother"
          },
          {
            "id": "en12_3_6",
            "title": "Stay Hungry. Stay Foolish — Steve Jobs",
            "desc": "Stanford commencement address on connecting the dots, loving your work, and facing mortality.",
            "videoUrl": "https://youtu.be/en12_jobs"
          }
        ]
      },
      {
        "unitId": "en12_u4",
        "unit": "UNIT - IV : WRITING SKILLS",
        "chapters": [
          {
            "id": "en12_4_1",
            "title": "Data Interpretation & Report Writing",
            "desc": "Analyzing bar graphs, pie charts, diagrams, and drafting event/press reports.",
            "videoUrl": "https://youtu.be/en12_reports"
          },
          {
            "id": "en12_4_2",
            "title": "Note-Making, Summarizing & Extended Writing",
            "desc": "Linear note-taking, precis summarizing, writing formal essays and business documents.",
            "videoUrl": "https://youtu.be/en12_summary"
          }
        ]
      },
      {
        "unitId": "en12_u5",
        "unit": "UNIT - V : GRAMMAR",
        "chapters": [
          {
            "id": "en12_5_1",
            "title": "Conditionals, Passive Voice & Speech",
            "desc": "Zero, 1st, 2nd, 3rd conditionals, passive conversions, direct and reported speech rules.",
            "videoUrl": "https://youtu.be/en12_passive"
          },
          {
            "id": "en12_5_2",
            "title": "Interrogatives & Sentence Patterns",
            "desc": "Wh-questions, question tags, inversion, formal sentence patterns for academic examinations.",
            "videoUrl": "https://youtu.be/en12_grammar"
          }
        ]
      }
    ]
  },
  "Odia": {
    "11": [
      {
        "unitId": "od11_u1",
        "unit": "ପ୍ରଥମ ଏକକ : ଗଦ୍ୟ (Prose)",
        "chapters": [
          {
            "id": "od11_1_1",
            "title": "ଶରଣୁ ପଶିବର — ଗୋପୀନାଥ ମହାନ୍ତି",
            "desc": "ମାନବୀୟ ମୂଲ୍ୟବୋଧ, ଆତ୍ମନିବେଦନ ଓ ଦାର୍ଶନିକ ଜୀବନ ଦୃଷ୍ଟି।",
            "videoUrl": "https://youtu.be/od11_sharanu"
          },
          {
            "id": "od11_1_2",
            "title": "ଝେଲମ୍ ନଦୀରେ ସନ୍ଧ୍ୟା — କୁଞ୍ଜବିହାରୀ ଦାଶ",
            "desc": "କାଶ୍ମୀରର ପ୍ରକୃତି ସୌନ୍ଦର୍ଯ୍ୟ ଓ ଝେଲମ ନଦୀ ତଟର ମନୋରମ ସନ୍ଧ୍ୟାର ଭ୍ରମଣ ଅନୁଭୂତି।",
            "videoUrl": "https://youtu.be/od11_jhelum"
          },
          {
            "id": "od11_1_3",
            "title": "ମଧୁବାବୁ — ଚିନ୍ତାମଣି ଆଚାର୍ଯ୍ୟ",
            "desc": "ଉତ୍କଳ ଗୌରବ ମଧୁସୂଦନ ଦାସଙ୍କ ଜାତୀୟତାବାଦ, ସ୍ୱାଭିମାନ ଓ ସେବା ମନୋଭାବ।",
            "videoUrl": "https://youtu.be/od11_madhubabu"
          },
          {
            "id": "od11_1_4",
            "title": "ସେହି ସ୍ମରଣୀୟ ଦିବସ — ହରେକୃଷ୍ଣ ମହତାବ",
            "desc": "ଓଡ଼ିଶାର ଇତିହାସରେ ଏକ ଐତିହାସିକ ଦିବସର ସ୍ମୃତି ଚିତ୍ରଣ ଓ ସ୍ୱାଧୀନତା ଆନ୍ଦୋଳନ।",
            "videoUrl": "https://youtu.be/od11_divasa"
          }
        ]
      },
      {
        "unitId": "od11_u2",
        "unit": "ଦ୍ୱିତୀୟ ଏକକ : ପଦ୍ୟ (Poetry)",
        "chapters": [
          {
            "id": "od11_2_1",
            "title": "ସାହାଡ଼ା ବୃକ୍ଷ — ସାରଳା ଦାସ",
            "desc": "ମହାଭାରତର ଉପାଖ୍ୟାନ ଆଧାରରେ ତ୍ୟାଗ ଓ ମହାନତାର ପ୍ରତୀକ ସାହାଡ଼ା ବୃକ୍ଷର ମହିମା।",
            "videoUrl": "https://youtu.be/od11_sahada"
          },
          {
            "id": "od11_2_2",
            "title": "ଶାପ ମୋଚନ — ଜଗନ୍ନାଥ ଦାସ",
            "desc": "ଓଡ଼ିଆ ଭାଗବତର ଅନ୍ତର୍ଗତ ପବିତ୍ର ଭକ୍ତିରସ, ମାୟା ଓ ଶାପମୋଚନର ରହସ୍ୟ।",
            "videoUrl": "https://youtu.be/od11_shapa"
          },
          {
            "id": "od11_2_3",
            "title": "ହିମକାଳ — ଦୀନକୃଷ୍ଣ ଦାସ",
            "desc": "ପ୍ରାଚୀନ ରୀତିକାବ୍ୟ ପରମ୍ପରାରେ ଶୀତଋତୁର ରୂପଶ୍ରୀ ଓ ପ୍ରକୃତି ବର୍ଣ୍ଣନା।",
            "videoUrl": "https://youtu.be/od11_himakala"
          },
          {
            "id": "od11_2_4",
            "title": "ମିତ୍ରତା — ଉପେନ୍ଦ୍ର ଭଞ୍ଜ",
            "desc": "କବିସମ୍ରାଟଙ୍କ ଉପମା-ବହୁଳ ମିତ୍ରତାର ମହାନ ଆଦର୍ଶ ଓ ବନ୍ଧୁତାର ଗଭୀରତା।",
            "videoUrl": "https://youtu.be/od11_mitrata"
          },
          {
            "id": "od11_2_5",
            "title": "ପୟରେ ପଶୁଛି ଶରଣ — ଭୀମ ଭୋଇ",
            "desc": "ମହିମା ଧର୍ମର ପ୍ରଚାରକ ସନ୍ଥ କବିଙ୍କ ଆକୁଳ ନିବେଦନ ଓ ବିଶ୍ୱ କଲ୍ୟାଣ ପ୍ରାର୍ଥନା।",
            "videoUrl": "https://youtu.be/od11_payare"
          }
        ]
      },
      {
        "unitId": "od11_u3",
        "unit": "ତୃତୀୟ ଏକକ : ଏକାଙ୍କିକା (One-Act Play)",
        "chapters": [
          {
            "id": "od11_3_1",
            "title": "ଅତ୍ୟାଚାରିତ — ପ୍ରାଣବନ୍ଧୁ କର",
            "desc": "ସାମାଜିକ ଅସମାନତା, ନିଷ୍ପେଷିତ ମଣିଷର ବେଦନା ଓ ସଂଘର୍ଷର ନାଟ୍ୟ ରୂପ।",
            "videoUrl": "https://youtu.be/od11_atyacharita"
          },
          {
            "id": "od11_3_2",
            "title": "ଭାଲୁ ଉପଦ୍ରବ — ବିଜୟ ମିଶ୍ର",
            "desc": "ଗ୍ରାମ୍ୟ ପରିବେଶରେ ଉପୁଜିଥିବା ସାମାଜିକ ଭୟ ଓ ଲୋକ ଚରିତ୍ରର ବାସ୍ତବବାଦୀ ପ୍ରତିଫଳନ।",
            "videoUrl": "https://youtu.be/od11_bhalu"
          },
          {
            "id": "od11_3_3",
            "title": "ସୀମିତ ସମ୍ପର୍କ — କାର୍ତ୍ତିକ ଚନ୍ଦ୍ର ରଥ",
            "desc": "ଆଧୁନିକ ଜୀବନଶୈଳୀରେ ମାନବୀୟ ସମ୍ପର୍କର ସଂକୋଚନ ଓ ଆବେଗିକ ଦ୍ୱନ୍ଦ୍ୱ।",
            "videoUrl": "https://youtu.be/od11_samparka"
          }
        ]
      },
      {
        "unitId": "od11_u4",
        "unit": "ଚତୁର୍ଥ ଏକକ : ବୋଧଜ୍ଞାନ ପରୀକ୍ଷଣ (Comprehension)",
        "chapters": [
          {
            "id": "od11_4_1",
            "title": "ଅବବୋଧ ପରୀକ୍ଷଣ (ଗଦ୍ୟାଂଶ ଓ ପଦ୍ୟାଂଶ)",
            "desc": "ଅଜ୍ଞାତ ଗଦ୍ୟ ଓ ପଦ୍ୟ ଅଂଶ ପାଠ କରି ଭାବାର୍ଥ ଗ୍ରହଣ ଓ ପ୍ରଶ୍ନୋତ୍ତର ରଚନା।",
            "videoUrl": "https://youtu.be/od11_comprehension"
          },
          {
            "id": "od11_4_2",
            "title": "ସମ୍ବାଦ ଲିଖନ (News Reporting)",
            "desc": "ସମ୍ବାଦର ଶୀର୍ଷକ, ଘଟଣାବଳୀର କ୍ରମାନୁସାର ବର୍ଣ୍ଣନା ଓ ବସ୍ତୁନିଷ୍ଠ ସମ୍ବାଦ ପ୍ରସ୍ତୁତି।",
            "videoUrl": "https://youtu.be/od11_news"
          }
        ]
      },
      {
        "unitId": "od11_u5",
        "unit": "ପଞ୍ଚମ ଏକକ : ପ୍ରବନ୍ଧ ଓ ବ୍ୟାକରଣ (Essay & Grammar)",
        "chapters": [
          {
            "id": "od11_5_1",
            "title": "ପ୍ରବନ୍ଧ ଓ ପତ୍ରଲିଖନ",
            "desc": "ସମସାମୟିକ ସାମାଜିକ ବିଷୟବସ୍ତୁ ଉପରେ ପ୍ରବନ୍ଧ ଓ ଦରଖାସ୍ତ ଲିଖନ କୌଶଳ।",
            "videoUrl": "https://youtu.be/od11_prabandha"
          },
          {
            "id": "od11_5_2",
            "title": "ବ୍ୟାକରଣ: ପଦ ପ୍ରକରଣ",
            "desc": "ପଦ ବିଭାଗ: ବିଶେଷ୍ୟ, ବିଶେଷଣ, ସର୍ବନାମ, ଅବ୍ୟୟ ଓ କ୍ରିୟା ପଦର ଲକ୍ଷଣ ଓ ପ୍ରୟୋଗ।",
            "videoUrl": "https://youtu.be/od11_grammar"
          }
        ]
      }
    ],
    "12": [
      {
        "unitId": "od12_u1",
        "unit": "UNIT - I : Prose (ଗଦ୍ୟ)",
        "chapters": [
          {
            "id": "od12_1_1",
            "title": "ଇତିହାସ — ବିଶ୍ୱନାଥ କର",
            "desc": "ଜାତିର ଅଗ୍ରଗତିରେ ଇତିହାସର ମହତ୍ତ୍ୱ ଓ ଜୀବନ ଗଠନରେ ଅତୀତର ଶିକ୍ଷା।",
            "videoUrl": "https://youtu.be/od12_itihasa"
          },
          {
            "id": "od12_1_2",
            "title": "ସ୍ୱାଧୀନ ଦେଶର ଶିକ୍ଷା ଚିନ୍ତା — ଗୋଲୋକ ବିହାରୀ ଧଳ",
            "desc": "ଭାରତର ପ୍ରଚଳିତ ଶିକ୍ଷା ବ୍ୟବସ୍ଥାର ତ୍ରୁଟି ଓ ମାତୃଭାଷା ମାଧ୍ୟମରେ ପ୍ରକୃତ ଶିକ୍ଷା ଦାନର ଆବଶ୍ୟକତା।",
            "videoUrl": "https://youtu.be/od12_sikshya"
          },
          {
            "id": "od12_1_3",
            "title": "ପୁଷ୍ପପୁରରେ ବର୍ଷାବରଣ — କୃଷ୍ଣଚନ୍ଦ୍ର ପାଣିଗ୍ରାହୀ",
            "desc": "ମେଘଦୂତ ଆଦର୍ଶରେ ଓଡ଼ିଶାର ଭୂଗୋଳ, ଇତିହାସ ଓ ସଂସ୍କୃତିର ହୃଦୟସ୍ପର୍ଶୀ ବର୍ଣ୍ଣନା।",
            "videoUrl": "https://youtu.be/od12_pushpapura"
          },
          {
            "id": "od12_1_4",
            "title": "ତିନି ତୁଣ୍ଡରେ — ଭୁବନେଶ୍ୱର ବେହେରା",
            "desc": "ସାମାଜିକ ଗୁଜବ ଓ ଅନ୍ଧବିଶ୍ୱାସର କୁପରିଣାମ ଉପରେ ଏକ ବ୍ୟଙ୍ଗାତ୍ମକ ରମ୍ୟରଚନା।",
            "videoUrl": "https://youtu.be/od12_tinitundare"
          }
        ]
      },
      {
        "unitId": "od12_u2",
        "unit": "UNIT - II : Poetry (ପଦ୍ୟ)",
        "chapters": [
          {
            "id": "od12_2_1",
            "title": "ବଡ଼ପଣ — ରାଧାନାଥ ରାୟ",
            "desc": "ରାଜା ଓ ଜମିଦାରମାନଙ୍କ ଅହଙ୍କାର ନିନ୍ଦା କରି ତ୍ୟାଗ ଓ ସତ୍ୟ ମାଧ୍ୟମରେ ପ୍ରକୃତ ବଡ଼ପଣର ଆହ୍ୱାନ।",
            "videoUrl": "https://youtu.be/od12_badapana"
          },
          {
            "id": "od12_2_2",
            "title": "ତପସ୍ୱିନୀର ପତ୍ର — ଗଙ୍ଗାଧର ମେହେର",
            "desc": "ବାଲ୍ମୀକି ଆଶ୍ରମରେ ସୀତାଙ୍କ ପତିଭକ୍ତି, ବିରହ ବେଦନା ଓ ଉଦାର ମାତୃହୃଦୟର ପ୍ରକାଶ।",
            "videoUrl": "https://youtu.be/od12_tapaswini"
          },
          {
            "id": "od12_2_3",
            "title": "ବନ୍ଦୀର ବିରହ ବ୍ୟଥା — ଗୋପବନ୍ଧୁ ଦାସ",
            "desc": "ହଜାରିବାଗ ଜେଲରେ ଉତ୍କଳମଣିଙ୍କ ଜନ୍ମଭୂମି ବିରହ ଓ ଦେଶମାତୃକା ପାଇଁ ଆତ୍ମବଳିଦାନର ଭାବନା।",
            "videoUrl": "https://youtu.be/od12_bandira"
          },
          {
            "id": "od12_2_4",
            "title": "ବାର୍ତ୍ତା — ସଚ୍ଚିଦାନନ୍ଦ ରାଉତରାୟ",
            "desc": "ନବଯୁଗର ଆହ୍ୱାନରେ ଶୋଷିତ ସର୍ବହରା ଶ୍ରେଣୀର ମୁକ୍ତି ଓ ବିପ୍ଳବର ବାର୍ତ୍ତା।",
            "videoUrl": "https://youtu.be/od12_bartta"
          },
          {
            "id": "od12_2_5",
            "title": "ପିଙ୍ଗଳାର ଅଭିସାର — ରାଧାମୋହନ ଗଡ଼ନାୟକ",
            "desc": "ପ୍ରାକୃତିକ କାମନାରୁ ଆଧ୍ୟାତ୍ମିକ ଚେତନା ଓ ଈଶ୍ୱର ପ୍ରେମକୁ ପିଙ୍ଗଳାର ରୂପାନ୍ତର।",
            "videoUrl": "https://youtu.be/od12_pingala"
          }
        ]
      },
      {
        "unitId": "od12_u3",
        "unit": "UNIT - III : Short Story (ଗଳ୍ପ)",
        "chapters": [
          {
            "id": "od12_3_1",
            "title": "ସଭ୍ୟ ଜମିଦାର — ଫକୀର ମୋହନ ସେନାପତି",
            "desc": "ଇଂରାଜୀ ଶିକ୍ଷିତ ରାଜୀବଲୋଚନଙ୍କ ମାତୃଭାଷା ଓ ମାତୃଭୂମି ପ୍ରତି ଉଦାସୀନତାର କଟାକ୍ଷ।",
            "videoUrl": "https://youtu.be/od12_sabhya"
          },
          {
            "id": "od12_3_2",
            "title": "ପତାକା ଉତ୍ତୋଳନ — ସୁରେନ୍ଦ୍ର ମହାନ୍ତି",
            "desc": "ସ୍ୱାଧୀନତା ଦିବସର ଉତ୍ସବ ମଧ୍ୟରେ ଏକ ଅବହେଳିତ ସ୍ୱାଧୀନତା ସଂଗ୍ରାମୀଙ୍କ ଆବେଗିକ କଥା।",
            "videoUrl": "https://youtu.be/od12_pataka"
          },
          {
            "id": "od12_3_3",
            "title": "ରୂପନାରାୟଣ ସାହା — ଅଖିଳ ମୋହନ ପଟ୍ଟନାୟକ",
            "desc": "ଜୀବନର ଅସହାୟତା ଓ ମଧ୍ୟବିତ୍ତ ମଣିଷର ଅନ୍ତର୍ଦ୍ୱନ୍ଦ୍ୱକୁ ନେଇ ଏକ ବାସ୍ତବଧର୍ମୀ ଗଳ୍ପ।",
            "videoUrl": "https://youtu.be/od12_rupanarayan"
          },
          {
            "id": "od12_3_4",
            "title": "ଆକାଶ କଇଁଛ — ମନୋଜ ଦାସ",
            "desc": "ମିଥ୍ୟା ପ୍ରତିଶ୍ରୁତି, ରାଜନୈତିକ ପ୍ରତାରଣା ଓ ମୂର୍ଖତାର ଏକ ଚମତ୍କାର ରୂପକ ଗଳ୍ପ।",
            "videoUrl": "https://youtu.be/od12_akasha"
          }
        ]
      },
      {
        "unitId": "od12_u4",
        "unit": "UNIT - IV : Comprehension (ବୋଧଜ୍ଞାନ ପରୀକ୍ଷଣ)",
        "chapters": [
          {
            "id": "od12_4_1",
            "title": "ଗଦ୍ୟାଂଶ ଓ ପଦ୍ୟାଂଶ ଅବବୋଧ",
            "desc": "ଭାରତ ଭାବନା, ତୀର୍ଥ ଯାତ୍ରା, ଗୁରୁଶିଷ୍ୟ ଅବଲମ୍ବନରେ ଭାବବୋଧ ଓ ପ୍ରଶ୍ନୋତ୍ତର।",
            "videoUrl": "https://youtu.be/od12_comprehension"
          },
          {
            "id": "od12_4_2",
            "title": "ରୂଢି, ପ୍ରବାଦ, ପ୍ରବଚନ ଓ ସୂକ୍ତି",
            "desc": "ନୈତିକତା ଓ ମୂଲ୍ୟବୋଧ ଆଧାରିତ ଲୋକବାଣୀ ଓ ରୂଢି ପ୍ରୟୋଗ (ଧର୍ମର ଜୟ ପାପର କ୍ଷୟ ଇତ୍ୟାଦି)।",
            "videoUrl": "https://youtu.be/od12_rudhi"
          }
        ]
      },
      {
        "unitId": "od12_u5",
        "unit": "UNIT - V : Essay & Grammar (ପ୍ରବନ୍ଧ ଓ ବ୍ୟାକରଣ)",
        "chapters": [
          {
            "id": "od12_5_1",
            "title": "ଦରଖାସ୍ତ ଓ ପତ୍ରଲିଖନ (ବ୍ୟବସାୟିକ, ସରକାରୀ, ସମ୍ପାଦକଙ୍କୁ)",
            "desc": "ସରକାରୀ କାର୍ଯ୍ୟାଳୟ ସମ୍ବନ୍ଧୀୟ ଦରଖାସ୍ତ, ବ୍ୟବସାୟିକ ପତ୍ର ଓ ସମ୍ପାଦକଙ୍କୁ ପତ୍ର।",
            "videoUrl": "https://youtu.be/od12_letters"
          },
          {
            "id": "od12_5_2",
            "title": "ସଂକ୍ଷିପ୍ତକରଣ ଓ ବ୍ୟାକରଣ (ଭ୍ରମ ସଂଶୋଧନ)",
            "desc": "ଦତ୍ତ ଅନୁଚ୍ଛେଦର ଏକ ତୃତୀୟାଂଶ ସଂକ୍ଷେପଣ, ସମାର୍ଥବୋଧକ ଶବ୍ଦ ଓ ବନାନ ଶୁଦ୍ଧିକରଣ।",
            "videoUrl": "https://youtu.be/od12_grammar"
          }
        ]
      }
    ]
  }
};

// Helper to look up human-readable topic info from chapter ID
export const resolveChapterInfo = (chapterId) => {
  if (!chapterId) return null;
  for (const [subject, classes] of Object.entries(SYLLABUS_DATA)) {
    for (const [cls, units] of Object.entries(classes)) {
      for (const unit of units) {
        const found = unit.chapters?.find((ch) => ch.id === chapterId);
        if (found) {
          return {
            subject,
            class: cls,
            unit: unit.unit,
            title: found.title,
            desc: found.desc,
            videoUrl: found.videoUrl,
          };
        }
      }
    }
  }
  return null;
};
