/* All content sourced from S M Nadim Uddin's CV. */

export const focus = [
  { id: "CLASS_01", title: "Depth & 3D Perception",
    desc: "Monocular, stereo and event based depth, 3D reconstruction and sensor fusion across RGB, IR, LiDAR, RADAR and IMU." },
  { id: "CLASS_02", title: "Generative & Low-level Vision",
    desc: "Image inpainting, HDR reconstruction, super resolution and reversed ISP restoration with attention and generative models." },
  { id: "CLASS_03", title: "In-cabin & Driver Monitoring",
    desc: "DMS and OMS pipelines: gaze, 3D body keypoints, seat pose and child presence detection for vehicle safety." },
  { id: "CLASS_04", title: "ADAS Perception",
    desc: "Pedestrian and obstacle detection, distance and trajectory estimation, real time perception on edge devices." },
];

export const experience = [
  { years: "2024 → Now", role: "Senior AI/ML Researcher", org: "Deep In Sight", place: "Seoul, South Korea",
    desc: "R&D, AI Lab. Driver monitoring (DMS) and in-cabin perception: object detection, semantic and instance segmentation, monocular depth estimation, model compression and pipeline integration." },
  { years: "2022 → 2024", role: "AI Researcher → Project Lead → Group Lead", org: "DeltaX.ai", place: "Seoul, South Korea",
    desc: "Automotive Perception Group, AI Lab. DMS and OMS, depth estimation, 3D body keypoints, 3D reconstruction, sensor fusion (RGB, IR, LiDAR, IMU, RADAR), detection and segmentation, path planning, trajectory estimation, model compression and pipeline integration." },
  { years: "2019 → 2022", role: "Vision Researcher", org: "CVIP Lab, Gachon University", place: "South Korea",
    desc: "Computer Vision and Image Processing Lab. Depth estimation, 3D reconstruction and generative vision modeling (GANs)." },
  { years: "2018 → 2019", role: "Analyst, Business Development", org: "Apex DMIT Ltd.", place: "Dhaka, Bangladesh",
    desc: "Analysing and managing overseas assets and developing business (formerly Kazi IT Center)." },
  { years: "2018", role: "Teaching Assistant", org: "Dept. of EEE, University of Liberal Arts", place: "Dhaka, Bangladesh",
    desc: "Lectures on course concepts, hands-on training on circuits and devices, and grading." },
];

export const education = [
  { years: "2019 → 2021", degree: "Master of Engineering", field: "IT Convergence Engineering",
    school: "Gachon University, South Korea", gpa: "4.43 / 4.50",
    thesis: "Deep Learning-based Image Inpainting for Irregular Masks using Attention." },
  { years: "2013 → 2017", degree: "Bachelor of Engineering", field: "Electronics & Telecommunication Engineering",
    school: "University of Liberal Arts, Bangladesh", gpa: "3.83 / 4.00",
    thesis: "Instantaneous Estimation of Shot Importance for Multimedia Summarization using Two-stream CNN." },
];

export const skills = [
  { k: "Languages", v: ["Python", "C++"] },
  { k: "Frameworks", v: ["PyTorch", "TensorFlow", "Keras", "ONNX", "TFLite", "ROS"] },
  { k: "Libraries", v: ["NumPy", "SciPy", "OpenCV", "Open3D", "scikit-learn", "pandas", "Matplotlib"] },
  { k: "Versioning", v: ["Git", "Docker"] },
  { k: "Management", v: ["Jira", "Confluence", "Azure DevOps", "Notion"] },
];

/* Industrial projects (featured = shown on homepage) */
export const projects = [
  { title: "Monocular Depth Estimation", area: "In-cabin Monitoring Unit", partner: "SL / Mobase / Mobis & Deep In Sight",
    years: "2024-2026", tags: ["depth", "in-cabin", "edge"], featured: true,
    desc: "Monocular depth estimation for in-cabin monitoring units." },
  { title: "Level-4 ADAS Perception", area: "Pedestrian Detection, Distance & Predictive Trajectory Estimation", partner: "KADIF & DeltaX",
    years: "2023-2027", tags: ["detection", "trajectory", "ADAS"], featured: true,
    desc: "Pedestrian detection, distance estimation and predictive trajectory estimation for a Level-4 PoC ADAS system." },
  { title: "Deep Stereo Matching & Motion Deblurring", area: "Stereo Event Camera", partner: "SK hynix & CVIP Lab",
    years: "2021-2022", tags: ["event", "stereo", "3D"], featured: true,
    desc: "Deep stereo matching and motion deblurring algorithms using a stereo event camera." },
  { title: "Real-time Eye Distance Estimation", area: "3D Light Field Display", partner: "Hyundai Mopic & DeltaX",
    years: "2023", tags: ["real-time", "3D"], featured: true,
    desc: "Real-time eye distance estimation from a glasses-free 3D light-field display." },
  { title: "Workers' Detection & Tracking", area: "Long-Wave Infrared Camera", partner: "Korea Railway Research Institute & DeltaX",
    years: "2022-2023", tags: ["LWIR", "tracking"], featured: true,
    desc: "Detection, distance estimation, localization and tracking of workers using a long-wave infrared camera." },
  { title: "Real-time Pupil Tracking", area: "Holographic Display Detection Engine", partner: "ETRI & CVIP Lab",
    years: "2019-2020", tags: ["tracking", "real-time"], featured: true,
    desc: "High-speed machine-learning detection engine for real-time pupil tracking of a holographic display." },
  { title: "3D Body Keypoint Estimation", area: "In-cabin Monitoring Unit", partner: "SL / Mobase & Deep In Sight",
    years: "2026", tags: ["keypoints", "in-cabin"], featured: false,
    desc: "3D body keypoint estimation for in-cabin monitoring." },
  { title: "Child Presence Estimation", area: "In-cabin Monitoring Unit", partner: "SL / Mobase & Deep In Sight",
    years: "2025", tags: ["in-cabin", "safety"], featured: false,
    desc: "Child presence detection for in-cabin safety." },
  { title: "Seat Pose Estimation", area: "In-cabin Monitoring Unit", partner: "SL / Mobase & Deep In Sight",
    years: "2025", tags: ["pose", "in-cabin"], featured: false,
    desc: "Seat pose estimation for in-cabin monitoring." },
  { title: "Gaze Estimation", area: "In-cabin Monitoring Unit", partner: "SL / Mobase & Deep In Sight",
    years: "2024", tags: ["gaze", "DMS"], featured: false,
    desc: "Driver gaze estimation for the in-cabin monitoring unit." },
  { title: "In-cabin Monitoring System", area: "Automotive", partner: "42dot & DeltaX",
    years: "2024", tags: ["in-cabin", "DMS"], featured: false,
    desc: "In-cabin monitoring system development." },
  { title: "Pothole, Crack & Fallen Object Detection", area: "ADAS System", partner: "42dot & DeltaX",
    years: "2024", tags: ["detection", "ADAS"], featured: false,
    desc: "Road hazard detection (potholes, cracks, fallen objects) for ADAS." },
  { title: "Off-road ADAS", area: "ADAS System", partner: "KIA Customer Experience Team & DeltaX",
    years: "2023", tags: ["ADAS", "off-road"], featured: false,
    desc: "Off-road ADAS perception." },
  { title: "Automatic Modulation Classification", area: "Deep Learning Signal Processing", partner: "LIG Nex1 & CVIP Lab",
    years: "2022-2023", tags: ["deep-learning", "signals"], featured: false,
    desc: "Development of automatic modulation classification methods using deep-learning techniques." },
];

/* Proof-of-concepts */
export const pocs = [
  { title: "Real-time OCR, Mono Depth & Obstacle Warning", partner: "Hyundai AutoEver & DeltaX", years: "2023", tags: ["OCR", "depth", "dashcam"] },
  { title: "Smart Navigation for Level-3 ADAS", partner: "Hyundai Mobis & DeltaX", years: "2023", tags: ["navigation", "ADAS"] },
  { title: "Pedestrian Detection in Lighting-Invariant Environment", partner: "HL Klemove & DeltaX", years: "2023", tags: ["detection", "monochrome"] },
  { title: "UltraFast Monocular Depth Model for Edge Devices", partner: "DeltaX", years: "2023", tags: ["depth", "edge"] },
  { title: "Real-time 3D PointCloud Segmentation", partner: "DeltaX", years: "2023", tags: ["3D", "segmentation"] },
  { title: "360° Surround View Generation", partner: "DeltaX", years: "2023", tags: ["surround-view", "3D"] },
  { title: "Intelligent Traffic Management using CR-VANET", partner: "University of Liberal Arts", years: "2016-2017", tags: ["VANET", "traffic"] },
];

export const awards = [
  { year: "2025", text: "<b>5th / 67 teams</b>, AIM 2025 Challenge on Inverse Tone Mapping, ICCV" },
  { year: "2024", text: "<b>11th / 50 teams</b>, NTIRE 2024 Challenge on Image Super-Resolution (×4), CVPR" },
  { year: "2023", text: "<b>7th / 101 teams</b>, 2nd Monocular Depth Estimation Challenge, CVPR" },
  { year: "2022", text: "<b>11th / 157 teams</b>, AIM Reversed ISP Challenge, ECCV" },
  { year: "2020", text: "<b>8th / 88 teams</b>, AIM Extreme Image Inpainting Challenge, ECCV" },
  { year: "2019", text: "<b>Best Paper Award</b> (Poster), Int. Conf. on Next Generation Computing, Thailand" },
  { year: "2018", text: "Excellent Achievement, Work Order Analysis Training, Kazi IT Center, Bangladesh" },
  { year: "2016", text: "Honorable Mention, Best Paper (Oral), ICAICT, Bangladesh" },
  { year: "2015-16", text: "Dean's Honor List (Undergraduate), University of Liberal Arts, Bangladesh" },
];

export type Pub = {
  title: string; authors: string; venue: string; year: number;
  tag: string; type: "journal" | "conference"; q1?: boolean; award?: string;
  rank?: string; selected?: boolean; links?: { label: string; href: string }[];
};

export const publications: Pub[] = [
  { title: "AIM 2025 Challenge on Inverse Tone Mapping: Methods and Results", year: 2025,
    authors: "C. Wang, F. Banterle, &#8230; <em>S M Nadim Uddin</em>, &#8230;", venue: "ICCV Workshops",
    tag: "ICCV-W", type: "conference", rank: "5th / 67 teams" },
  { title: "NTIRE 2024 Challenge on Image Super-Resolution (×4): Methods and Results", year: 2024,
    authors: "Z. Chen, Z. Wu, &#8230; <em>S M Nadim Uddin</em>, &#8230;", venue: "CVPR Workshops",
    tag: "CVPR-W", type: "conference", rank: "11th / 50 teams" },
  { title: "The Second Monocular Depth Estimation Challenge (MDEC)", year: 2023,
    authors: "J. Spencer, C. S. Qian, &#8230; <em>S M Nadim Uddin</em>, &#8230;", venue: "CVPR Workshops",
    tag: "CVPR-W", type: "conference", rank: "7th / 101 teams", selected: true,
    links: [{ label: "arxiv", href: "https://arxiv.org/abs/2304.07051" }] },
  { title: "Unsupervised Deep Event Stereo for Depth Estimation", year: 2022,
    authors: "<em>S M Nadim Uddin</em>, S. H. Ahmed, Y. J. Jung", venue: "IEEE Trans. on Circuits and Systems for Video Technology",
    tag: "TCSVT", type: "journal", q1: true, selected: true,
    links: [{ label: "ieee", href: "https://ieeexplore.ieee.org/abstract/document/9819909" }] },
  { title: "SIFNet: Free-form Image Inpainting using Color Split-Inpaint-Fuse Approach", year: 2022,
    authors: "<em>S M Nadim Uddin</em>, Y. J. Jung", venue: "Computer Vision and Image Understanding",
    tag: "CVIU", type: "journal", q1: true, selected: true,
    links: [{ label: "sciencedirect", href: "https://www.sciencedirect.com/science/article/pii/S1077314222000613" }] },
  { title: "Multi-Scale Attention-Guided Non-Local Network for HDR Image Reconstruction", year: 2022,
    authors: "H. Yoon, <em>S M Nadim Uddin</em>, Y. J. Jung", venue: "Sensors",
    tag: "Sensors", type: "journal", q1: true,
    links: [{ label: "mdpi", href: "https://www.mdpi.com/1424-8220/22/18/7044" }] },
  { title: "AIM 2022 Challenge on Reversed ISP", year: 2022,
    authors: "E. Ntavelis, A. Romero, &#8230; <em>S M Nadim Uddin</em>, &#8230;", venue: "ECCV Workshops (AIM)",
    tag: "ECCV-W", type: "conference", rank: "11th / 157 teams" },
  { title: "Deep Event Stereo Leveraged by Event-to-Image Translation", year: 2021,
    authors: "S. H. Ahmed, H. W. Jang, <em>S M Nadim Uddin</em>, Y. J. Jung", venue: "AAAI Conference on Artificial Intelligence",
    tag: "AAAI", type: "conference", selected: true,
    links: [{ label: "aaai", href: "https://ojs.aaai.org/index.php/AAAI/article/view/16171" }] },
  { title: "AIM 2020 Challenge on Image Extreme Inpainting", year: 2020,
    authors: "E. Ntavelis, A. Romero, &#8230; <em>S M Nadim Uddin</em>, &#8230;", venue: "ECCV Workshops (AIM)",
    tag: "ECCV-W", type: "conference", rank: "8th / 88 teams",
    links: [{ label: "springer", href: "https://link.springer.com/chapter/10.1007/978-3-030-67070-2_43" }] },
  { title: "Global and Local Attention-Based Free-Form Image Inpainting", year: 2020,
    authors: "<em>S M Nadim Uddin</em>, Y. J. Jung", venue: "Sensors",
    tag: "Sensors", type: "journal", q1: true, selected: true,
    links: [{ label: "mdpi", href: "https://www.mdpi.com/1424-8220/20/11/3204/htm" }] },
  { title: "Mask Pruning-Based Global Attention for Image Inpainting", year: 2019,
    authors: "<em>S M Nadim Uddin</em>, Y. J. Jung", venue: "Int. Conf. on Next Generation Computing (ICNGC)",
    tag: "ICNGC", type: "conference", award: "Best Paper" },
  { title: "A Framework for Event Anomaly Detection in Cognitive Radio Based Smart Community", year: 2016,
    authors: "<em>S M Nadim Uddin</em>, N. Mansoor, M. Rahman, N. Mohammed, S. Hossain", venue: "Int. Workshop on Computational Intelligence (IWCI), IEEE",
    tag: "IWCI", type: "conference",
    links: [{ label: "ieee", href: "https://ieeexplore.ieee.org/abstract/document/7860356" }] },
  { title: "Cognitive Radio Enabled VANET for Multi-agent Based Intelligent Traffic Management System", year: 2016,
    authors: "<em>S M Nadim Uddin</em>, N. Mansoor, S. Hossain", venue: "Int. Conf. on Advanced Information and Communication Technology (ICAICT)",
    tag: "ICAICT", type: "conference" },
];

export const news = [
  { date: "2025.09", kind: "challenge", text: "5th of 67 teams in the AIM 2025 Inverse Tone Mapping challenge at ICCV 2025." },
  { date: "2024.11", kind: "job", text: 'Joined <a href="https://www.dinsight.ai/">Deep In Sight</a> as a Senior AI/ML Researcher.' },
  { date: "2024.06", kind: "challenge", text: "11th of 50 teams in the NTIRE 2024 Image Super-Resolution (×4) challenge at CVPR." },
  { date: "2023.11", kind: "role", text: "Promoted to Group Lead of the Automotive Perception Group at DeltaX.ai." },
  { date: "2023.04", kind: "challenge", text: "7th of 101 teams in the 2nd Monocular Depth Estimation Challenge at CVPR." },
  { date: "2022.10", kind: "job", text: "Joined DeltaX.ai as a Team Lead and AI Researcher." },
  { date: "2022.06", kind: "journal", text: '"Unsupervised Deep Event Stereo for Depth Estimation" accepted to IEEE TCSVT (Q1).' },
  { date: "2021.02", kind: "conference", text: '"Deep Event Stereo Leveraged by Event-to-Image Translation" published at AAAI-21.' },
];
