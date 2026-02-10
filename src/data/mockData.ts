export const announcements = [
  { id: 1, title: "Mid-Semester Exams Schedule Released", category: "Exam", date: "2026-02-10", urgent: true, description: "Mid-semester examination schedule for all departments has been published. Check the exam cell portal." },
  { id: 2, title: "Hackathon 2026 Registrations Open", category: "Event", date: "2026-02-09", urgent: false, description: "Annual inter-college hackathon registrations are now open. Team size: 2-4 members." },
  { id: 3, title: "Library Hours Extended During Exams", category: "General", date: "2026-02-08", urgent: false, description: "Library will remain open until 10 PM during the examination period." },
  { id: 4, title: "Placement Drive: TCS & Infosys", category: "Placement", date: "2026-02-10", urgent: true, description: "TCS and Infosys campus placement drives scheduled for next week. Eligible students must register." },
  { id: 5, title: "Sports Day Postponed", category: "General", date: "2026-02-07", urgent: false, description: "Annual sports day has been rescheduled to March 5th due to weather conditions." },
];

export const upcomingEvents = [
  { id: 1, title: "Hackathon 2026", date: "2026-02-20", time: "9:00 AM", location: "Main Auditorium", club: "Tech Club", image: "🖥️" },
  { id: 2, title: "Cultural Fest - Sudhee", date: "2026-03-01", time: "10:00 AM", location: "Open Air Theatre", club: "Cultural Committee", image: "🎭" },
  { id: 3, title: "Workshop: AI/ML Basics", date: "2026-02-15", time: "2:00 PM", location: "Seminar Hall", club: "AI Club", image: "🤖" },
  { id: 4, title: "Blood Donation Camp", date: "2026-02-18", time: "9:00 AM", location: "Health Center", club: "NSS", image: "🩸" },
  { id: 5, title: "Alumni Meet 2026", date: "2026-03-10", time: "5:00 PM", location: "Convention Center", club: "Alumni Cell", image: "🎓" },
];

export const placementAlerts = [
  { id: 1, company: "TCS", role: "Software Engineer", package: "7 LPA", deadline: "2026-02-14", eligible: "CSE, IT, ECE" },
  { id: 2, company: "Infosys", role: "Systems Engineer", package: "6.5 LPA", deadline: "2026-02-15", eligible: "All Branches" },
  { id: 3, company: "Amazon", role: "SDE Intern", package: "60K/month", deadline: "2026-02-12", eligible: "CSE, IT" },
];

export const clubHighlights = [
  { id: 1, name: "Coding Club", members: 245, description: "Competitive programming and development", icon: "💻", recentActivity: "Weekly contest #42 completed" },
  { id: 2, name: "Robotics Club", members: 120, description: "Building robots and automation projects", icon: "🤖", recentActivity: "Won 2nd place at RoboWars" },
  { id: 3, name: "Literary Club", members: 89, description: "Debates, poetry, and creative writing", icon: "📚", recentActivity: "Inter-college debate finals" },
  { id: 4, name: "Photography Club", members: 156, description: "Capturing campus life and beyond", icon: "📷", recentActivity: "Photo exhibition this weekend" },
];

export const quickLinks = [
  { title: "CBIT Website", url: "https://www.cbit.ac.in", icon: "🏫" },
  { title: "LMS Portal", url: "#", icon: "📖" },
  { title: "Exam Cell", url: "#", icon: "📝" },
  { title: "Digital Library", url: "#", icon: "📚" },
  { title: "Fee Payment", url: "#", icon: "💳" },
  { title: "Grievance Portal", url: "#", icon: "📨" },
];

export const timetable = {
  Monday: [
    { time: "9:00 - 10:00", subject: "Data Structures", room: "CS-301", faculty: "Dr. Ramesh K" },
    { time: "10:00 - 11:00", subject: "DBMS", room: "CS-302", faculty: "Prof. Sunita M" },
    { time: "11:15 - 12:15", subject: "OS Lab", room: "Lab-4", faculty: "Dr. Venkat R" },
    { time: "1:00 - 2:00", subject: "Mathematics III", room: "LH-5", faculty: "Dr. Priya S" },
    { time: "2:00 - 3:00", subject: "English", room: "LH-5", faculty: "Prof. Anita D" },
  ],
  Tuesday: [
    { time: "9:00 - 10:00", subject: "DBMS", room: "CS-302", faculty: "Prof. Sunita M" },
    { time: "10:00 - 11:00", subject: "Data Structures Lab", room: "Lab-3", faculty: "Dr. Ramesh K" },
    { time: "11:15 - 12:15", subject: "Data Structures Lab", room: "Lab-3", faculty: "Dr. Ramesh K" },
    { time: "1:00 - 2:00", subject: "Computer Networks", room: "CS-303", faculty: "Prof. Arjun T" },
    { time: "2:00 - 3:00", subject: "Mathematics III", room: "LH-5", faculty: "Dr. Priya S" },
  ],
  Wednesday: [
    { time: "9:00 - 10:00", subject: "Operating Systems", room: "CS-301", faculty: "Dr. Venkat R" },
    { time: "10:00 - 11:00", subject: "Data Structures", room: "CS-301", faculty: "Dr. Ramesh K" },
    { time: "11:15 - 12:15", subject: "Computer Networks", room: "CS-303", faculty: "Prof. Arjun T" },
    { time: "1:00 - 2:00", subject: "DBMS Lab", room: "Lab-4", faculty: "Prof. Sunita M" },
    { time: "2:00 - 3:00", subject: "DBMS Lab", room: "Lab-4", faculty: "Prof. Sunita M" },
  ],
  Thursday: [
    { time: "9:00 - 10:00", subject: "Mathematics III", room: "LH-5", faculty: "Dr. Priya S" },
    { time: "10:00 - 11:00", subject: "Operating Systems", room: "CS-301", faculty: "Dr. Venkat R" },
    { time: "11:15 - 12:15", subject: "Data Structures", room: "CS-301", faculty: "Dr. Ramesh K" },
    { time: "1:00 - 2:00", subject: "English", room: "LH-5", faculty: "Prof. Anita D" },
    { time: "2:00 - 3:00", subject: "Computer Networks", room: "CS-303", faculty: "Prof. Arjun T" },
  ],
  Friday: [
    { time: "9:00 - 10:00", subject: "Computer Networks Lab", room: "Lab-5", faculty: "Prof. Arjun T" },
    { time: "10:00 - 11:00", subject: "Computer Networks Lab", room: "Lab-5", faculty: "Prof. Arjun T" },
    { time: "11:15 - 12:15", subject: "Operating Systems", room: "CS-301", faculty: "Dr. Venkat R" },
    { time: "1:00 - 2:00", subject: "DBMS", room: "CS-302", faculty: "Prof. Sunita M" },
    { time: "2:00 - 3:00", subject: "Library / Sports", room: "-", faculty: "-" },
  ],
  Saturday: [
    { time: "9:00 - 10:00", subject: "Data Structures", room: "CS-301", faculty: "Dr. Ramesh K" },
    { time: "10:00 - 11:00", subject: "Mathematics III", room: "LH-5", faculty: "Dr. Priya S" },
    { time: "11:15 - 12:15", subject: "Mentoring Session", room: "CS-301", faculty: "Dr. Ramesh K" },
  ],
};

export const attendance = [
  { subject: "Data Structures", attended: 38, total: 42, percentage: 90 },
  { subject: "DBMS", attended: 35, total: 40, percentage: 88 },
  { subject: "Operating Systems", attended: 30, total: 38, percentage: 79 },
  { subject: "Computer Networks", attended: 33, total: 36, percentage: 92 },
  { subject: "Mathematics III", attended: 28, total: 40, percentage: 70 },
  { subject: "English", attended: 20, total: 22, percentage: 91 },
];

export const internalMarks = [
  { subject: "Data Structures", mid1: 22, mid2: 24, assignment: 9, total: 55, max: 60 },
  { subject: "DBMS", mid1: 20, mid2: 21, assignment: 8, total: 49, max: 60 },
  { subject: "Operating Systems", mid1: 18, mid2: 22, assignment: 9, total: 49, max: 60 },
  { subject: "Computer Networks", mid1: 23, mid2: 20, assignment: 10, total: 53, max: 60 },
  { subject: "Mathematics III", mid1: 15, mid2: 18, assignment: 7, total: 40, max: 60 },
  { subject: "English", mid1: 24, mid2: 23, assignment: 10, total: 57, max: 60 },
];

export const busTimings = [
  { route: "Route 1", from: "Secunderabad", via: "Tarnaka, Habsiguda", departure: "7:30 AM", arrival: "8:30 AM" },
  { route: "Route 2", from: "Dilsukhnagar", via: "Malakpet, Chaderghat", departure: "7:15 AM", arrival: "8:20 AM" },
  { route: "Route 3", from: "Kukatpally", via: "JNTU, Miyapur", departure: "7:00 AM", arrival: "8:30 AM" },
  { route: "Route 4", from: "LB Nagar", via: "Kothapet, Amberpet", departure: "7:20 AM", arrival: "8:25 AM" },
  { route: "Route 5", from: "ECIL", via: "AS Rao Nagar, Malkajgiri", departure: "7:15 AM", arrival: "8:15 AM" },
];
