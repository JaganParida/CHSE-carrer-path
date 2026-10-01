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
  Physics: {
    11: [
      {
        unitId: "ph11_u1",
        unit: "Unit I: Physical World and Measurement",
        chapters: [
          { id: "ph11_1_1", title: "Physical World, Units & Dimensions", desc: "Scope of physics, SI units, dimension analysis.", videoUrl: "https://youtu.be/tx76BJIqOd4" },
          { id: "ph11_1_2", title: "Mathematical Foundation for Physics", desc: "Vectors, basic calculus, coordinate frames.", videoUrl: "https://youtu.be/tx76BJIqOd4" },
        ],
      },
      {
        unitId: "ph11_u2",
        unit: "Unit II: Kinematics & Mechanics",
        chapters: [
          { id: "ph11_2_1", title: "Motion in 1D and 2D", desc: "Velocity, acceleration, projectile motion.", videoUrl: "https://youtu.be/HYQdPGN3ZXQ" },
          { id: "ph11_2_2", title: "Newton's Laws of Motion & Friction", desc: "Inertia, momentum, frictional resistance.", videoUrl: "https://youtu.be/PLQ0_vZF25o" },
          { id: "ph11_2_3", title: "Work, Energy, Power & Circular Motion", desc: "Work-energy theorem, potential energy, centripetal acceleration.", videoUrl: "https://youtu.be/eACeA8W0tCQ" },
        ],
      },
      {
        unitId: "ph11_u3",
        unit: "Unit III: System of Particles & Rotational Motion",
        chapters: [
          { id: "ph11_3_1", title: "Centre of Mass & Rotational Motion", desc: "Torque, angular momentum, moment of inertia theorems.", videoUrl: "https://youtu.be/Y5qK2_m8w-k" },
          { id: "ph11_3_2", title: "Gravitation & Planetary Orbits", desc: "Universal gravitation, Kepler's laws, escape velocity.", videoUrl: "https://youtu.be/u8sL8m9b7w0" },
        ],
      },
      {
        unitId: "ph11_u4",
        unit: "Unit IV: Properties of Bulk Matter & Thermodynamics",
        chapters: [
          { id: "ph11_4_1", title: "Elasticity, Viscosity & Fluid Mechanics", desc: "Hooke's law, Pascal's principle, Bernoulli's equation.", videoUrl: "" },
          { id: "ph11_4_2", title: "Thermal Properties & Thermodynamics", desc: "Heat transfer, laws of thermodynamics, heat engines.", videoUrl: "" },
        ],
      },
      {
        unitId: "ph11_u5",
        unit: "Unit V: Oscillations & Waves",
        chapters: [
          { id: "ph11_5_1", title: "Simple Harmonic Motion", desc: "Periodic motion, spring system, simple pendulum.", videoUrl: "" },
          { id: "ph11_5_2", title: "Waves & Sound", desc: "Longitudinal & transverse waves, Doppler effect, beats.", videoUrl: "" },
        ],
      },
    ],
    12: [
      {
        unitId: "ph12_u1",
        unit: "Unit I: Electrostatics",
        chapters: [
          { id: "ph12_1_1", title: "Electric Charges and Fields", desc: "Coulomb's Law, Electric dipole, Gauss's Theorem and applications.", videoUrl: "https://youtu.be/P_r3N9pC5p4" },
          { id: "ph12_1_2", title: "Electrostatic Potential and Capacitance", desc: "Electric potential, Equipotential surfaces, Capacitors in series and parallel.", videoUrl: "https://youtu.be/6_Z_W9_b2-g" },
        ],
      },
      {
        unitId: "ph12_u2",
        unit: "Unit II: Current Electricity",
        chapters: [
          { id: "ph12_2_1", title: "Current Electricity", desc: "Ohm's Law, Drift velocity, Kirchhoff's Laws, Wheatstone Bridge, Potentiometer.", videoUrl: "https://youtu.be/7oZ_m9_c3-h" },
        ],
      },
      {
        unitId: "ph12_u3",
        unit: "Unit III: Magnetic Effects of Current & Magnetism",
        chapters: [
          { id: "ph12_3_1", title: "Moving Charges and Magnetism", desc: "Biot-Savart law, Ampere's circuital law, Force on current carrying conductor.", videoUrl: "https://youtu.be/8pZ_n0_d4-j" },
          { id: "ph12_3_2", title: "Magnetism and Matter", desc: "Bar magnet, Magnetic dipole moment, Earth's magnetism, Magnetic materials.", videoUrl: "https://youtu.be/9qZ_p1_e5-k" },
        ],
      },
      {
        unitId: "ph12_u4",
        unit: "Unit IV: Electromagnetic Induction & AC",
        chapters: [
          { id: "ph12_4_1", title: "Electromagnetic Induction", desc: "Faraday's laws, Lenz's Law, Eddy currents, Self and mutual inductance.", videoUrl: "https://youtu.be/0rZ_q2_f6-l" },
          { id: "ph12_4_2", title: "Alternating Current", desc: "Peak and RMS value, LCR series circuit, Resonance, Power in AC, Transformers.", videoUrl: "https://youtu.be/1sZ_r3_g7-m" },
        ],
      },
      {
        unitId: "ph12_u5",
        unit: "Unit V: Optics",
        chapters: [
          { id: "ph12_5_1", title: "Ray Optics and Optical Instruments", desc: "Reflection, Refraction, Total internal reflection, Lens formula, Microscope, Telescope.", videoUrl: "https://youtu.be/2tZ_s4_h8-n" },
          { id: "ph12_5_2", title: "Wave Optics", desc: "Wavefront, Huygens principle, Young's double slit experiment, Diffraction, Polarization.", videoUrl: "https://youtu.be/3uZ_t5_i9-o" },
        ],
      },
      {
        unitId: "ph12_u6",
        unit: "Unit VI: Modern Physics & Semiconductors",
        chapters: [
          { id: "ph12_6_1", title: "Dual Nature of Radiation & Atoms", desc: "Photoelectric effect, Einstein's equation, de-Broglie hypothesis, Bohr model.", videoUrl: "https://youtu.be/4vZ_u6_j0-p" },
          { id: "ph12_6_2", title: "Nuclei & Nuclear Energy", desc: "Binding energy, Radioactivity, Nuclear fission and fusion.", videoUrl: "https://youtu.be/5wZ_v7_k1-q" },
          { id: "ph12_6_3", title: "Semiconductor Electronics", desc: "Energy bands, p-n junction diode, Rectifiers, Zener diode, Logic gates.", videoUrl: "https://youtu.be/6xZ_w8_l2-r" },
        ],
      },
    ],
  },

  Chemistry: {
    11: [
      {
        unitId: "ch11_u1",
        unit: "Unit I: Basics & Atomic Structure",
        chapters: [
          { id: "ch11_1_1", title: "Some Basic Concepts of Chemistry", desc: "Mole concept, Stoichiometry, Empirical formula.", videoUrl: "" },
          { id: "ch11_1_2", title: "Structure of Atom", desc: "Bohr's model, Quantum numbers, Electronic configuration.", videoUrl: "" },
        ],
      },
      {
        unitId: "ch11_u2",
        unit: "Unit II: Periodic Properties & Chemical Bonding",
        chapters: [
          { id: "ch11_2_1", title: "Periodic Table & Periodicity", desc: "Modern periodic law, Ionization enthalpy, Electronegativity.", videoUrl: "" },
          { id: "ch11_2_2", title: "Chemical Bonding & Molecular Structure", desc: "VSEPR theory, Hybridization, Molecular orbital theory.", videoUrl: "" },
        ],
      },
      {
        unitId: "ch11_u3",
        unit: "Unit III: Physical Chemistry Principles",
        chapters: [
          { id: "ch11_3_1", title: "Thermodynamics & Equilibrium", desc: "Enthalpy, Entropy, Gibbs free energy, Le Chatelier's principle, pH scale.", videoUrl: "" },
          { id: "ch11_3_2", title: "Redox Reactions", desc: "Oxidation numbers, Balancing redox reactions.", videoUrl: "" },
        ],
      },
      {
        unitId: "ch11_u4",
        unit: "Unit IV: Organic Chemistry Basics",
        chapters: [
          { id: "ch11_4_1", title: "Organic Chemistry: Principles & Techniques", desc: "IUPAC nomenclature, Isomerism, Inductive & electromeric effects.", videoUrl: "" },
          { id: "ch11_4_2", title: "Hydrocarbons", desc: "Alkanes, Alkenes, Alkynes, Aromaticity, Electrophilic aromatic substitution.", videoUrl: "" },
        ],
      },
    ],
    12: [
      {
        unitId: "ch12_u1",
        unit: "Unit I: Solutions & Electrochemistry",
        chapters: [
          { id: "ch12_1_1", title: "Solutions", desc: "Types of solutions, Raoult's law, Colligative properties, van't Hoff factor.", videoUrl: "https://youtu.be/r6Z_w8_b1-a" },
          { id: "ch12_1_2", title: "Electrochemistry", desc: "Galvanic cells, Nernst equation, Conductance, Kohlrausch's law, Electrolysis.", videoUrl: "https://youtu.be/s7Z_x9_c2-b" },
          { id: "ch12_1_3", title: "Chemical Kinetics", desc: "Rate of reaction, Order and molecularity, Integrated rate equations, Arrhenius equation.", videoUrl: "https://youtu.be/t8Z_y0_d3-c" },
        ],
      },
      {
        unitId: "ch12_u2",
        unit: "Unit II: Inorganic Chemistry",
        chapters: [
          { id: "ch12_2_1", title: "d and f Block Elements", desc: "Transition metals, Lanthanoids, Actinoids, K2Cr2O7 and KMnO4.", videoUrl: "https://youtu.be/u9Z_z1_e4-d" },
          { id: "ch12_2_2", title: "Coordination Compounds", desc: "Werner's theory, IUPAC nomenclature, Valence bond theory, Crystal field theory.", videoUrl: "https://youtu.be/v0Z_a2_f5-e" },
        ],
      },
      {
        unitId: "ch12_u3",
        unit: "Unit III: Organic Chemistry",
        chapters: [
          { id: "ch12_3_1", title: "Haloalkanes and Haloarenes", desc: "SN1 and SN2 mechanisms, Optical rotation, Polyhalogen compounds.", videoUrl: "https://youtu.be/w1Z_b3_g6-f" },
          { id: "ch12_3_2", title: "Alcohols, Phenols and Ethers", desc: "Preparation, Acidic nature, Reimer-Tiemann reaction, Kolbe's reaction, Williamson synthesis.", videoUrl: "https://youtu.be/x2Z_c4_h7-g" },
          { id: "ch12_3_3", title: "Aldehydes, Ketones and Carboxylic Acids", desc: "Nucleophilic addition, Aldol condensation, Cannizzaro reaction, Acidity of carboxylic acids.", videoUrl: "https://youtu.be/y3Z_d5_i8-h" },
          { id: "ch12_3_4", title: "Amines & Biomolecules", desc: "Basicity of amines, Diazonium salts, Carbohydrates, Proteins, Nucleic acids.", videoUrl: "https://youtu.be/z4Z_e6_j9-i" },
        ],
      },
    ],
  },

  Mathematics: {
    11: [
      {
        unitId: "ma11_u1",
        unit: "Unit I: Sets & Functions",
        chapters: [
          { id: "ma11_1_1", title: "Sets and Relations", desc: "Venn diagrams, Subsets, Cartesian product, Types of relations.", videoUrl: "" },
          { id: "ma11_1_2", title: "Trigonometric Functions", desc: "Trigonometric identities, Compound angles, General solutions.", videoUrl: "" },
        ],
      },
      {
        unitId: "ma11_u2",
        unit: "Unit II: Algebra",
        chapters: [
          { id: "ma11_2_1", title: "Complex Numbers & Quadratic Equations", desc: "Algebraic properties, Argand plane, Modulus and argument.", videoUrl: "" },
          { id: "ma11_2_2", title: "Permutations, Combinations & Binomial Theorem", desc: "Fundamental counting principle, Binomial expansion.", videoUrl: "" },
          { id: "ma11_2_3", title: "Sequences and Series", desc: "Arithmetic & geometric progressions, Sum of infinite terms.", videoUrl: "" },
        ],
      },
      {
        unitId: "ma11_u3",
        unit: "Unit III: Coordinate Geometry & Calculus",
        chapters: [
          { id: "ma11_3_1", title: "Straight Lines & Conic Sections", desc: "Slope, Standard circle, Parabola, Ellipse, Hyperbola equations.", videoUrl: "" },
          { id: "ma11_3_2", title: "Limits and Derivatives", desc: "Intuitive idea of limits, Derivatives of standard algebraic and trigonometric functions.", videoUrl: "" },
          { id: "ma11_3_3", title: "Statistics and Probability", desc: "Standard deviation, Variance, Axiomatic probability.", videoUrl: "" },
        ],
      },
    ],
    12: [
      {
        unitId: "ma12_u1",
        unit: "Unit I: Relations and Functions",
        chapters: [
          { id: "ma12_1_1", title: "Relations and Functions", desc: "Types of relations, Equivalence relations, One-one and onto functions, Composite functions.", videoUrl: "https://youtu.be/a5Z_f7_k0-j" },
          { id: "ma12_1_2", title: "Inverse Trigonometric Functions", desc: "Principal value branch, Domain, Range, and key algebraic properties.", videoUrl: "https://youtu.be/b6Z_g8_l1-k" },
        ],
      },
      {
        unitId: "ma12_u2",
        unit: "Unit II: Algebra (Matrices & Determinants)",
        chapters: [
          { id: "ma12_2_1", title: "Matrices", desc: "Matrix operations, Symmetric and skew-symmetric, Invertible matrices.", videoUrl: "https://youtu.be/c7Z_h9_m2-l" },
          { id: "ma12_2_2", title: "Determinants", desc: "Properties of determinants, Area of triangles, Adjoint and inverse, Cramer's rule.", videoUrl: "https://youtu.be/d8Z_i0_n3-m" },
        ],
      },
      {
        unitId: "ma12_u3",
        unit: "Unit III: Differential Calculus",
        chapters: [
          { id: "ma12_3_1", title: "Continuity and Differentiability", desc: "Continuity, Chain rule, Implicit functions, Exponential & Logarithmic differentiation.", videoUrl: "https://youtu.be/e9Z_j1_o4-n" },
          { id: "ma12_3_2", title: "Applications of Derivatives", desc: "Rate of change, Tangents and normals, Maxima and minima, Increasing/decreasing functions.", videoUrl: "https://youtu.be/f0Z_k2_p5-o" },
        ],
      },
      {
        unitId: "ma12_u4",
        unit: "Unit IV: Integral Calculus",
        chapters: [
          { id: "ma12_4_1", title: "Integrals", desc: "Indefinite & definite integrals, Integration by substitution, Parts, Partial fractions.", videoUrl: "https://youtu.be/g1Z_l3_q6-p" },
          { id: "ma12_4_2", title: "Applications of Integrals & Differential Equations", desc: "Area under curves, Order & degree, Variable separable method, Linear differential equations.", videoUrl: "https://youtu.be/h2Z_m4_r7-q" },
        ],
      },
      {
        unitId: "ma12_u5",
        unit: "Unit V: Vectors, 3D & Probability",
        chapters: [
          { id: "ma12_5_1", title: "Vectors and 3-Dimensional Geometry", desc: "Dot and cross products, Direction cosines, Line and plane equations.", videoUrl: "https://youtu.be/i3Z_n5_s8-r" },
          { id: "ma12_5_2", title: "Linear Programming and Probability", desc: "Graphical LPP, Conditional probability, Bayes' Theorem, Bernoulli trials.", videoUrl: "https://youtu.be/j4Z_o6_t9-s" },
        ],
      },
    ],
  },

  Biology: {
    11: [
      {
        unitId: "bi11_u1",
        unit: "Unit I: Diversity in the Living World",
        chapters: [
          { id: "bi11_1_1", title: "The Living World & Biological Classification", desc: "Taxonomic categories, Five kingdom classification, Monera, Protista, Fungi.", videoUrl: "" },
          { id: "bi11_1_2", title: "Plant Kingdom & Animal Kingdom", desc: "Algae, Bryophytes, Pteridophytes, Gymnosperms, Chordates & non-chordates.", videoUrl: "" },
        ],
      },
      {
        unitId: "bi11_u2",
        unit: "Unit II: Structural Organisation in Plants & Animals",
        chapters: [
          { id: "bi11_2_1", title: "Morphology & Anatomy of Flowering Plants", desc: "Root, stem, leaf modifications, Inflorescence, Tissues, Secondary growth.", videoUrl: "" },
          { id: "bi11_2_2", title: "Structural Organisation in Animals", desc: "Animal tissues, Morphology and anatomy of frog/cockroach.", videoUrl: "" },
        ],
      },
      {
        unitId: "bi11_u3",
        unit: "Unit III: Cell Structure and Function",
        chapters: [
          { id: "bi11_3_1", title: "Cell: The Unit of Life & Biomolecules", desc: "Prokaryotic and eukaryotic cells, Cell organelles, Proteins, Carbohydrates, Enzymes.", videoUrl: "" },
          { id: "bi11_3_2", title: "Cell Cycle and Cell Division", desc: "Mitosis, Meiosis, Significance of cell division.", videoUrl: "" },
        ],
      },
      {
        unitId: "bi11_u4",
        unit: "Unit IV: Plant & Human Physiology",
        chapters: [
          { id: "bi11_4_1", title: "Plant Physiology: Photosynthesis & Respiration", desc: "Light reaction, Calvin cycle, Glycolysis, Krebs cycle, Plant growth regulators.", videoUrl: "" },
          { id: "bi11_4_2", title: "Human Physiology: Circulation & Respiration", desc: "Gas exchange, Blood groups, Cardiac cycle, ECG, Regulation of respiration.", videoUrl: "" },
          { id: "bi11_4_3", title: "Excretion, Locomotion & Neural Control", desc: "Nephron function, Muscle contraction, Nerve impulse conduction, Endocrine glands.", videoUrl: "" },
        ],
      },
    ],
    12: [
      // 5 UNITS PER CHSE SYLLABUS DIRECTIVE (Only Unit Write)
      {
        unitId: "bi12_u1",
        unit: "Unit I: Reproduction",
        chapters: [
          { id: "bi12_1_1", title: "Sexual Reproduction in Flowering Plants", desc: "Male & female gametophytes, Pollination mechanisms, Double fertilisation, Endosperm & embryo.", videoUrl: "https://youtu.be/6eZ_w8_l2-r" },
          { id: "bi12_1_2", title: "Human Reproduction & Reproductive Health", desc: "Gametogenesis, Menstrual cycle, Fertilisation, Implantation, Pregnancy, Contraception, ART, IVF.", videoUrl: "https://youtu.be/7fZ_x9_m3-s" },
        ],
      },
      {
        unitId: "bi12_u2",
        unit: "Unit II: Genetics and Evolution",
        chapters: [
          { id: "bi12_2_1", title: "Principles of Inheritance and Variation", desc: "Mendelian ratios, Linkage and crossing over, Sex-linked inheritance, Hemophilia, Down's syndrome.", videoUrl: "https://youtu.be/8gZ_y0_n4-t" },
          { id: "bi12_2_2", title: "Molecular Basis of Inheritance & Evolution", desc: "DNA replication, Genetic code, Transcription, Translation, Operon model, Darwin's theory, Hardy-Weinberg law.", videoUrl: "https://youtu.be/9hZ_z1_o5-u" },
        ],
      },
      {
        unitId: "bi12_u3",
        unit: "Unit III: Biology and Human Welfare",
        chapters: [
          { id: "bi12_3_1", title: "Human Health and Disease", desc: "Infectious diseases, Innate and acquired immunity, Allergies, Autoimmunity, AIDS, Cancer.", videoUrl: "https://youtu.be/0iZ_a2_p6-v" },
          { id: "bi12_3_2", title: "Microbes in Human Welfare", desc: "Fermented beverages, Antibiotics, Sewage treatment plants, Methanogens, Biofertilisers.", videoUrl: "https://youtu.be/1jZ_b3_q7-w" },
        ],
      },
      {
        unitId: "bi12_u4",
        unit: "Unit IV: Biotechnology and its Applications",
        chapters: [
          { id: "bi12_4_1", title: "Biotechnology: Principles and Processes", desc: "Recombinant DNA technology, Restriction endonucleases, Vectors, PCR technique, Bioreactors.", videoUrl: "https://youtu.be/2kZ_c4_r8-x" },
          { id: "bi12_4_2", title: "Applications of Biotechnology", desc: "Genetically modified crops (Bt cotton, pest resistance), Genetically engineered insulin, Gene therapy, Transgenic animals.", videoUrl: "https://youtu.be/3lZ_d5_s9-y" },
        ],
      },
      {
        unitId: "bi12_u5",
        unit: "Unit V: Ecology and Environment",
        chapters: [
          { id: "bi12_5_1", title: "Organisms and Populations", desc: "Organism and its environment, Adaptations, Population growth models, Mutualism, Parasitism.", videoUrl: "https://youtu.be/4mZ_e6_t0-z" },
          { id: "bi12_5_2", title: "Ecosystem & Biodiversity Conservation", desc: "Trophic levels, Ecological pyramids, Carbon cycle, Hotspots of biodiversity, Red Data Book, National parks.", videoUrl: "https://youtu.be/5nZ_f7_u1-a" },
        ],
      },
    ],
  },

  English: {
    11: [
      {
        unitId: "en11_u1",
        unit: "Unit I: Literature (Prose & Poetry)",
        chapters: [
          { id: "en11_1_1", title: "Standing Up for Yourself & Stopping by Woods", desc: "Yevgeny Yevtushenko's courage narrative and Robert Frost's reflective masterpiece.", videoUrl: "" },
          { id: "en11_1_2", title: "The Legend Behind a Legend & Oft in a Stilly Night", desc: "Biographical portrait of legendary excellence and Thomas Moore's nostalgic lyric.", videoUrl: "" },
          { id: "en11_1_3", title: "Three Questions & The Golden Touch", desc: "Leo Tolstoy's philosophical tale of wisdom and the tragic greed of King Midas.", videoUrl: "" },
          { id: "en11_1_4", title: "After Twenty Years & The Inchcape Rock", desc: "O. Henry's twist of duty vs friendship and Robert Southey's ballad of retribution.", videoUrl: "" },
          { id: "en11_1_5", title: "In London in Minus Fours & The Open Window", desc: "Humorous travel memoirs and Saki's clever psychological mystery.", videoUrl: "" },
        ],
      },
      {
        unitId: "en11_u2",
        unit: "Unit II: Grammar & Writing Skills",
        chapters: [
          { id: "en11_2_1", title: "Countable Nouns, Tenses & Prepositions", desc: "Core syntax rules, prepositional phrases, imperative constructions.", videoUrl: "" },
          { id: "en11_2_2", title: "Data Interpretation & Report Writing", desc: "Synthesizing bar graphs, pie charts, official event reporting.", videoUrl: "" },
        ],
      },
    ],
    12: [
      {
        unitId: "en12_u1",
        unit: "Unit I: Prose",
        chapters: [
          { id: "en12_1_1", title: "The Greatest Olympic Prize", desc: "Jesse Owens' heartwarming story of true sportsmanship and friendship in Berlin Olympics.", videoUrl: "https://youtu.be/g6Z_h8_v2-b" },
          { id: "en12_1_2", title: "On Examinations", desc: "Winston Churchill's humorous perspective on academic assessments and examinations.", videoUrl: "https://youtu.be/h7Z_i9_w3-c" },
          { id: "en12_1_3", title: "The Portrait of a Lady", desc: "Khushwant Singh's tender biographical portrait of his grandmother and emotional bonds.", videoUrl: "https://youtu.be/i8Z_j0_x4-d" },
          { id: "en12_1_4", title: "The Magic of Teamwork", desc: "Sam Pitroda's insightful essay on collaboration, institutional building, and division of labor.", videoUrl: "https://youtu.be/j9Z_k1_y5-e" },
        ],
      },
      {
        unitId: "en12_u2",
        unit: "Unit II: Poetry",
        chapters: [
          { id: "en12_2_1", title: "Daffodils & The Ballad of Father Gilligan", desc: "William Wordsworth's nature lyric and W.B. Yeats' spiritual ballad of devotion.", videoUrl: "https://youtu.be/k0Z_l2_z6-f" },
          { id: "en12_2_2", title: "Psalm of Life & Television & Money Madness", desc: "Longfellow's inspiring philosophy, Roald Dahl's satire on screens, and D.H. Lawrence's critique of greed.", videoUrl: "https://youtu.be/l1Z_m3_a7-g" },
        ],
      },
      {
        unitId: "en12_u3",
        unit: "Unit III: Non-Detailed Study",
        chapters: [
          { id: "en12_3_1", title: "The Doctor's Word & The Nightingale and the Rose", desc: "R.K. Narayan's classic story of Dr. Raman and Oscar Wilde's timeless romantic fable.", videoUrl: "https://youtu.be/m2Z_n4_b8-h" },
          { id: "en12_3_2", title: "Mystery of a Missing Cap & The Monkey's Paw & Stay Hungry", desc: "Manoj Das' political satire, W.W. Jacobs' suspense classic, and Steve Jobs' Stanford address.", videoUrl: "https://youtu.be/n3Z_o5_c9-i" },
        ],
      },
      {
        unitId: "en12_u4",
        unit: "Unit IV: Writing Skills & Grammar",
        chapters: [
          { id: "en12_4_1", title: "Data Interpretation, Report Writing & Note Making", desc: "Interpreting graphs and charts, professional journalistic reports, systematic note-taking.", videoUrl: "https://youtu.be/o4Z_p6_d0-j" },
          { id: "en12_4_2", title: "Advanced Grammar: Tenses, Modals, Voice & Speech", desc: "Mastery over tenses, active/passive voice, direct/indirect narration, conditional clauses.", videoUrl: "https://youtu.be/p5Z_q7_e1-k" },
        ],
      },
    ],
  },

  Odia: {
    11: [
      {
        unitId: "od11_u1",
        unit: "Unit I: ଗଦ୍ୟ ଓ ପଦ୍ୟ",
        chapters: [
          { id: "od11_1_1", title: "ସାହାଡ଼ା ବୃକ୍ଷ ଓ ଶାପମୋଚନ", desc: "ସାରଳା ଦାସଙ୍କ 'ସାହାଡ଼ା ବୃକ୍ଷ' ଓ ଜଗନ୍ନାଥ ଦାସଙ୍କ 'ଶାପମୋଚନ'।", videoUrl: "" },
          { id: "od11_1_2", title: "ସର୍ସୂପଦର୍ ଓ ଝେଲମ୍ ନଦୀର ସନ୍ଧ୍ୟା", desc: "ଗୋପୀନାଥ ମହାନ୍ତିଙ୍କ ଉପନ୍ୟାସ ଅଂଶ ଓ କାଳିନ୍ଦୀ ଚରଣ ପାଣିଗ୍ରାହୀଙ୍କ ରଚନା।", videoUrl: "" },
          { id: "od11_1_3", title: "ଅତ୍ୟାଚାରିତ ଓ ହିମକାଳ", desc: "ମଧୁସୂଦନ ରାଓ ଓ ରାଧାନାଥ ରାୟଙ୍କ ପ୍ରକୃତି ଓ ଚେତନାଧର୍ମୀ କବିତା।", videoUrl: "" },
        ],
      },
      {
        unitId: "od11_u2",
        unit: "Unit II: ଗଳ୍ପ ଓ ବ୍ୟାକରଣ",
        chapters: [
          { id: "od11_2_1", title: "ମଧୁବାବୁ, ମିତ୍ରତା ଓ ଭାଲୁ ଉପଦ୍ରବ", desc: "ମହାପୁରୁଷ ଜୀବନୀ ଓ ସାମାଜିକ ଗଳ୍ପ।", videoUrl: "" },
          { id: "od11_2_2", title: "ଓଡ଼ିଆ ବ୍ୟାକରଣ ଓ ପ୍ରବନ୍ଧ ରଚନା", desc: "ସନ୍ଧି, ସମାସ, କୃଦନ୍ତ, ତଦ୍ଧିତ ଏବଂ ଆଦର୍ଶ ରଚନା ଶୈଳୀ।", videoUrl: "" },
        ],
      },
    ],
    12: [
      {
        unitId: "od12_u1",
        unit: "Unit I: ଗଦ୍ୟ (Prose)",
        chapters: [
          { id: "od12_1_1", title: "ଇତିହାସ ଓ ପୁଷ୍ପପୁରରେ ବର୍ଷାବରଣ", desc: "ବିଶ୍ୱନାଥ କରଙ୍କ 'ଇତିହାସ' ପ୍ରବନ୍ଧ ଓ କୃଷ୍ଣଚନ୍ଦ୍ର ପାଣିଗ୍ରାହୀଙ୍କ 'ପୁଷ୍ପପୁରରେ ବର୍ଷାବରଣ'।", videoUrl: "https://youtu.be/q6Z_r8_f2-l" },
          { id: "od12_1_2", title: "ତିନି ତୁଣ୍ଡରେ ଓ ସ୍ୱାଧୀନ ଦେଶରେ ଶିକ୍ଷାଚିନ୍ତା", desc: "ଭୁବନେଶ୍ୱର ବେହେରାଙ୍କ 'ତିନି ତୁଣ୍ଡରେ' ଏବଂ ଗୋଲକ ବିହାରୀ ଧଳଙ୍କ ଶିକ୍ଷା ଆଲେଖ୍ୟ।", videoUrl: "https://youtu.be/r7Z_s9_g3-m" },
        ],
      },
      {
        unitId: "od12_u2",
        unit: "Unit II: ପଦ୍ୟ (Poetry)",
        chapters: [
          { id: "od12_2_1", title: "ବଡ଼ପଣ ଓ ତପସ୍ୱିନୀର ପତ୍ର", desc: "ରାଧାନାଥ ରାୟଙ୍କ 'ବଡ଼ପଣ' ଏବଂ ଗଙ୍ଗାଧର ମେହେରଙ୍କ 'ତପସ୍ୱିନୀର ପତ୍ର'।", videoUrl: "https://youtu.be/s8Z_t0_h4-n" },
          { id: "od12_2_2", title: "ବନ୍ଦୀର ବିରହ ବ୍ୟଥା, ପିଙ୍ଗଳାର ଅଭିସାର ଓ ବାର୍ତ୍ତା", desc: "ଗୋପବନ୍ଧୁ ଦାସ, ରାଧାମୋହନ ଗଡ଼ନାୟକ ଓ ସଚ୍ଚି ରାଉତରାୟଙ୍କ କବିତା।", videoUrl: "https://youtu.be/t9Z_u1_i5-o" },
        ],
      },
      {
        unitId: "od12_u3",
        unit: "Unit III: ଗଳ୍ପ (Short Stories)",
        chapters: [
          { id: "od12_3_1", title: "ସଭ୍ୟ ଜମିଦାର ଓ ପତାକା ଉତ୍ତୋଳନ", desc: "ଫକୀର ମୋହନ ସେନାପତିଙ୍କ 'ସଭ୍ୟ ଜମିଦାର' ଓ ସୁରେନ୍ଦ୍ର ମହାନ୍ତିଙ୍କ 'ପତାକା ଉତ୍ତୋଳନ'।", videoUrl: "https://youtu.be/u0Z_v2_j6-p" },
          { id: "od12_3_2", title: "ରୂପ ନାରାୟଣ ସାହା ଓ ଆକାଶ କଇଁଛ", desc: "ଅଖିଳ ମୋହନ ପଟ୍ଟନାୟକଙ୍କ 'ରୂପ ନାରାୟଣ ସାହା' ଓ ମନୋଜ ଦାସଙ୍କ 'ଆକାଶ କଇଁଛ'।", videoUrl: "https://youtu.be/v1Z_w3_k7-q" },
        ],
      },
      {
        unitId: "od12_u4",
        unit: "Unit IV: ବୋଧଜ୍ଞାନ, ପ୍ରବନ୍ଧ ଓ ବ୍ୟାକରଣ",
        chapters: [
          { id: "od12_4_1", title: "ବୋଧଜ୍ଞାନ ପରୀକ୍ଷଣ, ସର୍ଜନାତ୍ମକ ରଚନା ଓ ବ୍ୟାକରଣ", desc: "ଅବବୋଧ ପରୀକ୍ଷଣ, ଦରଖାସ୍ତ ଲିଖନ, ପ୍ରବନ୍ଧ ରଚନା, ରୂଢ଼ି ଓ ଲୋକବାଣୀ, ଶବ୍ଦଶୁଦ୍ଧି।", videoUrl: "https://youtu.be/w2Z_x4_l8-r" },
        ],
      },
    ],
  },

  IT: {
    11: [
      {
        unitId: "it11_u1",
        unit: "Unit I: Hardware & Software Concepts",
        chapters: [
          { id: "it11_1_1", title: "Hardware Concepts & Types of Software", desc: "CPU, memory hierarchy, system software, application software.", videoUrl: "" },
          { id: "it11_1_2", title: "Open Source Concepts & Programming Intro", desc: "FOSS licenses, algorithm design, flowcharts, pseudocode.", videoUrl: "" },
        ],
      },
      {
        unitId: "it11_u2",
        unit: "Unit II: Database & Digital Platforms",
        chapters: [
          { id: "it11_2_1", title: "DBMS & MySQL Introduction", desc: "Relational database terms, tables, fields, basic SQL commands.", videoUrl: "" },
          { id: "it11_2_2", title: "E-Governance & E-Learning", desc: "Digital India initiatives, online learning systems, portal security.", videoUrl: "" },
        ],
      },
    ],
    12: [
      {
        unitId: "it12_u1",
        unit: "Unit I: Computer Networking & Web",
        chapters: [
          { id: "it12_1_1", title: "Computer Networking & Internet Applications", desc: "Network topologies, Transmission media, OSI model, TCP/IP, DNS, Web browsers.", videoUrl: "https://youtu.be/x3Z_y5_m9-s" },
          { id: "it12_1_2", title: "Network Security & HTML Web Pages", desc: "Firewalls, Malware, Cryptography, HTML structure, Form inputs, CSS styling basics.", videoUrl: "https://youtu.be/y4Z_z6_n0-t" },
        ],
      },
      {
        unitId: "it12_u2",
        unit: "Unit II: Database & Programming",
        chapters: [
          { id: "it12_2_1", title: "Programming Fundamentals & Database Concepts", desc: "Data types, Control flow, Functions, Relational data model, Primary and foreign keys.", videoUrl: "https://youtu.be/z5Z_a7_o1-u" },
          { id: "it12_2_2", title: "MySQL Queries & E-Business Systems", desc: "DDL and DML commands, SELECT, WHERE, GROUP BY, E-Commerce models, Digital payment gateways.", videoUrl: "https://youtu.be/a6Z_b8_p2-v" },
        ],
      },
    ],
  },
};

export const resolveChapterInfo = (chapterId) => {
  if (!chapterId) {
    return { id: "", title: "Unknown Topic", subject: "General", class: "12", unitName: "General" };
  }

  for (const [subjectName, classesMap] of Object.entries(SYLLABUS_DATA)) {
    for (const [className, unitsList] of Object.entries(classesMap)) {
      if (Array.isArray(unitsList)) {
        for (const unit of unitsList) {
          if (Array.isArray(unit.chapters)) {
            const found = unit.chapters.find((c) => c.id === chapterId);
            if (found) {
              return {
                id: chapterId,
                title: found.title || chapterId,
                desc: found.desc || "",
                subject: subjectName,
                class: className,
                unitId: unit.unitId,
                unitName: unit.unit,
              };
            }
          }
        }
      }
    }
  }

  // Fallback parsing from ID prefix
  const prefix = chapterId.slice(0, 2).toLowerCase();
  const classMatch = chapterId.match(/\d{2}/);
  const classVal = classMatch ? classMatch[0] : (chapterId.includes("12") ? "12" : "11");
  const subMap = {
    ph: "Physics",
    ch: "Chemistry",
    mt: "Mathematics",
    ma: "Mathematics",
    bi: "Biology",
    it: "IT",
    en: "English",
    od: "Odia",
    ac: "Accountancy",
    bs: "BSM",
    bm: "BMS",
    ec: "Economics",
    hi: "History",
    po: "Political Science",
    so: "Sociology",
    lo: "Logic",
  };

  return {
    id: chapterId,
    title: chapterId,
    desc: "",
    subject: subMap[prefix] || "General",
    class: classVal,
    unitId: "unit_general",
    unitName: "Curriculum Topic",
  };
};
