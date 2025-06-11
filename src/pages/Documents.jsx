import { React, useState } from 'react';
import { FaEye, FaDownload, FaTimes, FaFilePdf, FaFileImage } from "react-icons/fa";
import { RiRobot3Line } from "react-icons/ri";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const docs = [
  {
    "id": 1,
    "title": "Medical Report of Anuj",
    "type": "pdf",
    "patient": "Anuj Pratap",
    "category": "reports",
    "aiSummary": {
      "overview": "Health report of Anuj showing key metrics and observations.",
      "vitals": [
        { "name": "Hemoglobin", "value": "15.1 g/dL", "normalRange": "13–17 g/dL", "status": "Normal" },
        { "name": "WBC Count", "value": "6,200 /μL", "normalRange": "4,000–11,000 /μL", "status": "Normal" },
        { "name": "Platelet Count", "value": "200,000 /μL", "normalRange": "150,000–450,000 /μL", "status": "Normal" },
        { "name": "Blood Sugar (Fasting)", "value": "95 mg/dL", "normalRange": "70–100 mg/dL", "status": "Normal" },
        { "name": "Cholesterol (Total)", "value": "205 mg/dL", "normalRange": "< 200 mg/dL", "status": "High" }
      ],
      "analysis": [
        "Values indicate no immediate critical health concern.",
        "Further evaluation might be needed for borderline results.",
        "Overall, patient is stable based on current data."
      ],
      "recommendations": [
        "Repeat test in 2 weeks.",
        "Maintain a balanced diet.",
        "Consult a specialist if symptoms persist."
      ]
    },
    "url": "https://drive.google.com/file/d/1hpWcmIXJLV9q0iyKMDw4VPNYFmQQkonJ/view?usp=drive_link",
    "previewUrl": "https://drive.google.com/file/d/1hpWcmIXJLV9q0iyKMDw4VPNYFmQQkonJ/preview",
    "size": "196 KB",
    "updatedAt": "2025-06-04T00:00:00"
  },
  {
    id: 2,
    title: "CT Scan Report of Priya",
    type: "jpg",
    patient: "Priya Sharma",
    category: "imaging",
    aiSummary: {
      overview: "CT scan revealing minor sinus inflammation.",
      vitals: [],
      analysis: [
        "No signs of structural abnormality.",
        "Minor inflammation in sinus cavities."
      ],
      recommendations: [
        "Consult ENT specialist.",
        "Use prescribed nasal sprays."
      ]
    },
    url: "https://example.com/file/2",
    previewUrl: "https://example.com/preview/2",
    size: "340 KB",
    updatedAt: "2025-05-27T00:00:00"
  },
  {
    id: 3,
    title: "Blood Report of Rahul",
    type: "pdf",
    patient: "Rahul Verma",
    category: "reports",
    aiSummary: {
      overview: "Routine blood test with slightly elevated cholesterol.",
      vitals: [
        { name: "Hemoglobin", value: "14.3 g/dL", normalRange: "13–17 g/dL", status: "Normal" },
        { name: "Cholesterol", value: "210 mg/dL", normalRange: "< 200 mg/dL", status: "High" }
      ],
      analysis: ["Mild hypercholesterolemia detected."],
      recommendations: ["Adopt low-fat diet.", "Retest after 1 month."]
    },
    url: "https://example.com/file/3",
    previewUrl: "https://example.com/preview/3",
    size: "182 KB",
    updatedAt: "2025-05-20T00:00:00"
  },
  {
    id: 4,
    title: "MRI Report of Sanya",
    type: "docx",
    patient: "Sanya Roy",
    category: "imaging",
    aiSummary: {
      overview: "MRI shows no abnormalities in brain scan.",
      vitals: [],
      analysis: ["Normal MRI scan; no signs of trauma or lesions."],
      recommendations: ["No immediate action required."]
    },
    url: "https://example.com/file/4",
    previewUrl: "https://example.com/preview/4",
    size: "512 KB",
    updatedAt: "2025-05-28T00:00:00"
  },
  {
    id: 5,
    title: "Liver Function Test - Abhishek",
    type: "pdf",
    patient: "Abhishek Singh",
    category: "reports",
    aiSummary: {
      overview: "LFT showing elevated SGPT and SGOT levels.",
      vitals: [
        { name: "SGPT", value: "60 U/L", normalRange: "7–56 U/L", status: "High" },
        { name: "SGOT", value: "58 U/L", normalRange: "5–40 U/L", status: "High" }
      ],
      analysis: ["Indicates possible liver inflammation or fatty liver."],
      recommendations: ["Reduce alcohol intake.", "Ultrasound advised."]
    },
    url: "https://example.com/file/5",
    previewUrl: "https://example.com/preview/5",
    size: "204 KB",
    updatedAt: "2025-06-01T00:00:00"
  },
  {
    id: 6,
    title: "X-ray Chest - Manish",
    type: "png",
    patient: "Manish Kumar",
    category: "imaging",
    aiSummary: {
      overview: "X-ray indicates clear lungs and no abnormalities.",
      vitals: [],
      analysis: ["Lung fields are normal.", "No evidence of fluid or mass."],
      recommendations: ["No further action necessary."]
    },
    url: "https://example.com/file/6",
    previewUrl: "https://example.com/preview/6",
    size: "299 KB",
    updatedAt: "2025-06-05T00:00:00"
  },
  {
    id: 7,
    title: "ECG Report - Reena",
    type: "jpeg",
    patient: "Reena Mishra",
    category: "cardiology",
    aiSummary: {
      overview: "ECG shows normal sinus rhythm.",
      vitals: [],
      analysis: ["No arrhythmia or abnormalities noted."],
      recommendations: ["Routine follow-up after 6 months."]
    },
    url: "https://example.com/file/7",
    previewUrl: "https://example.com/preview/7",
    size: "175 KB",
    updatedAt: "2025-05-15T00:00:00"
  },
  {
    id: 8,
    title: "Eye Test Report - Kunal",
    type: "pdf",
    patient: "Kunal Das",
    category: "vision",
    aiSummary: {
      overview: "Visual acuity report for both eyes.",
      vitals: [],
      analysis: ["Mild myopia in left eye."],
      recommendations: ["Prescription glasses recommended."]
    },
    url: "https://example.com/file/8",
    previewUrl: "https://example.com/preview/8",
    size: "120 KB",
    updatedAt: "2025-06-03T00:00:00"
  },
  {
    id: 9,
    title: "Thyroid Report of Sneha",
    type: "docx",
    patient: "Sneha Chatterjee",
    category: "hormones",
    aiSummary: {
      overview: "TSH slightly above normal range.",
      vitals: [
        { name: "TSH", value: "6.0 µIU/mL", normalRange: "0.4–4.0 µIU/mL", status: "High" }
      ],
      analysis: ["Suggestive of subclinical hypothyroidism."],
      recommendations: ["Monitor every 3 months.", "Consider endocrinologist consult."]
    },
    url: "https://example.com/file/9",
    previewUrl: "https://example.com/preview/9",
    size: "201 KB",
    updatedAt: "2025-06-06T00:00:00"
  },
  {
    id: 10,
    title: "CBC Report - Tanmay",
    type: "pdf",
    patient: "Tanmay Dey",
    category: "reports",
    aiSummary: {
      overview: "Complete blood count mostly within range.",
      vitals: [
        { name: "WBC", value: "5,500 /μL", normalRange: "4,000–11,000 /μL", status: "Normal" },
        { name: "RBC", value: "4.9 million/μL", normalRange: "4.5–6 million/μL", status: "Normal" }
      ],
      analysis: ["Healthy hematologic profile."],
      recommendations: ["Maintain hydration.", "Routine annual checkup."]
    },
    url: "https://example.com/file/10",
    previewUrl: "https://example.com/preview/10",
    size: "230 KB",
    updatedAt: "2025-05-30T00:00:00"
  },
  {
    id: 11,
    title: "Ultrasound Abdomen - Aditya",
    type: "jpeg",
    patient: "Aditya Mehta",
    category: "imaging",
    aiSummary: {
      overview: "Abdominal ultrasound normal except mild fatty liver.",
      vitals: [],
      analysis: ["Grade 1 fatty liver.", "Other organs appear normal."],
      recommendations: ["Lifestyle modification.", "Low-fat diet."]
    },
    url: "https://example.com/file/11",
    previewUrl: "https://example.com/preview/11",
    size: "345 KB",
    updatedAt: "2025-06-02T00:00:00"
  }
];

const Documents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBy, setSearchBy] = useState("all");
  const [sortBy, setSortBy] = useState("nameAsc");

  // console.log(filteredDocs);
  // console.log(searchBy);

  function parseInputDate(input) {
    let date = new Date(input);
    if (!isNaN(date)) return date;
    const ddmmyyyy = /^(\d{2})-(\d{2})-(\d{4})$/;
    const match = input.match(ddmmyyyy);
    if (match) {
      const [_, day, month, year] = match;
      return new Date(`${year}-${month}-${day}`);
    }
    return null;
  }

  const searchByOptions = {
    all: (doc) =>
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.patient.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.type.toLowerCase().includes(searchQuery.toLowerCase()),

    name: (doc) => doc.title.toLowerCase().includes(searchQuery.toLowerCase()),

    patient: (doc) => doc.patient.toLowerCase().includes(searchQuery.toLowerCase()),

    type: (doc) => doc.type.toLowerCase().includes(searchQuery.toLowerCase()),
  };

  const sortByOptions = {
    nameAsc: (a, b) => a.title.localeCompare(b.title),
    nameDec: (a, b) => b.title.localeCompare(a.title),
    patientAsc: (a, b) => a.patient.localeCompare(b.patient),
    patientDec: (a, b) => b.patient.localeCompare(a.patient),
    dateAsc: (a, b) => new Date(a.updatedAt) - new Date(b.updatedAt),
    dateDec: (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt),
    sizeAsc: (a, b) => parseFloat(a.size) - parseFloat(b.size),
    sizeDec: (a, b) => parseFloat(b.size) - parseFloat(a.size),
  };

  const filteredDocs = docs.filter((doc) =>
    searchByOptions[searchBy](doc) &&
    (searchQuery ? true : true) // Always true if searchQuery is empty
  ).sort(
    sortByOptions[sortBy] || sortByOptions.date // Default to date sorting if no sortBy is selected
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Documents</h2>

      {/* Search Options */}
      <div className="flex items-center gap-4 mb-4">
        <div>
          <h2 className='inline-block font-bold px-4'>Search By</h2>
          <select name="search" onChange={(e) => {
            setSearchBy(e.target.value);

          }} id="search" className="ml-2 px-3 py-2 border-2 border-slate-200 rounded-md focus:border-blue-500 transition-all focus:outline-none">
            <option value="all">All</option>
            <option value="name">Document Name</option>
            <option value="patient">Patient Name</option>
            <option value="type">Document Type</option>
          </select>
        </div>
        <div>
          <h2 className='inline-block font-bold px-4'>Sort By</h2>
          <select name="search" onChange={(e) => {
            setSortBy(e.target.value);
          }} id="search" className="ml-2 px-3 py-2 border-2 border-slate-200 rounded-md focus:border-blue-500 transition-all focus:outline-none">
            <option value="nameAsc">Document Name (A-Z)</option>
            <option value="nameDec">Document Name (Z-A)</option>
            <option value="patientAsc">Patient Name (A-Z)</option>
            <option value="patientDec">Patient Name (Z-A)</option>
            <option value="dateAsc">Date (Oldest)</option>
            <option value="dateDec">Date (Newest)</option>
            <option value="sizeAsc">Size (Smallest)</option>
            <option value="sizeDec">Size (Largest)</option>
          </select>
        </div>
      </div>

      {/* Search Button */}
      <div className="mt-4 ml-4 flex w-[75%] items-center border-2 border-slate-200 rounded-md focus:border-blue-500 transition-all focus-within:border-blue-500">
        <CiSearch className="text-2xl text-amber-900 ml-2" />
        <input
          type="text"
          className="w-full px-3 py-2 text-black bg-transparent focus:outline-none rounded-md"
          placeholder="Search Document..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>


      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
        {filteredDocs.length > 0 ? (filteredDocs.map(doc => (
          <DocumentCard key={doc.id} doc={doc} />
        ))) : (<div className="text-center py-10 col-span-full">
          <h3 className="mt-2 text-lg font-medium">No such documents found.</h3>
        </div>)}
      </div>
    </div>
  );
};


const iconMap = {
  pdf: <FaFilePdf />,
  docx: <MdOutlineDocumentScanner />,
  png: <FaFileImage />,
  jpeg: <FaFileImage />,
  jpg: <FaFileImage />,
  default: <MdOutlineDocumentScanner />
};

const DocumentCard = ({ doc }) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false);

  const avatar = doc.patient
    .split(" ")
    .map((name) => name[0].toUpperCase())
    .join("");

  // format date in dd mm yyyy format
  function formatDate(isoString) {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, '0');      // 2-digit day
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }

  return (
    <>
      {/* Card */}
      <div className="bg-white p-4 rounded-2xl shadow hover:shadow-xl transition-all border border-gray-200">
        {!!doc.title ? (
          <div className="flex items-center gap-2">
            <span className='text-2xl'>{iconMap[doc.type] || iconMap.default}</span>
            <h3 className="text-xl font-semibold text-black truncate">{doc.title}</h3>
          </div>
        ) : (
          <h3 className="text-xl font-bold text-blue-800">Medical Report</h3>
        )}

        <div className="mt-2 flex items-center gap-2 text-sm text-gray-700">
          {!!doc.type && <span className="bg-gray-200 px-2 py-1 rounded-md uppercase">{doc.type}</span>}
          {!!doc.size && <span className="text-black">{doc.size}</span>}
        </div>

        {!!doc.patient && (
          <div className="flex items-center gap-3 mt-2">
            <div className="w-10 h-10 bg-blue-100 text-blue-800 font-bold rounded-full flex items-center justify-center">
              {avatar}
            </div>
            <span className="text-md font-medium">{doc.patient}</span>
          </div>
        )}

        {!!doc.updatedAt && <h3 className='mt-2 text-sm text-gray-600'>Updated: {formatDate(doc.updatedAt)}</h3>}

        <div className="flex gap-2 mt-4 justify-around text-sm font-medium">
          {!!doc.previewUrl &&
            (<button
              onClick={() => setIsViewerOpen(true)}
              className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <FaEye /> View
            </button>)
          }

          {!!doc.url && (
            <button
              onClick={() => window.open(doc.url, "_blank", "noopener,noreferrer")}
              className="flex items-center gap-1 px-3 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              <FaDownload className="inline-block" />
              Download
            </button>
          )}

          {!!doc.aiSummary && (
            <button
              onClick={() => setIsAIAssistantOpen(true)}
              className="flex items-center gap-1 px-3 py-1.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
              <RiRobot3Line /> Ask AI
            </button>
          )}
        </div>
      </div>

      {/* Viewer Modal */}
      {isViewerOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[90%] max-w-5xl h-[80vh] overflow-hidden shadow-xl flex flex-col relative">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-bold text-gray-800">Document Preview</h2>
              <button
                onClick={() => setIsViewerOpen(false)}
                className="text-gray-500 hover:text-red-600 text-lg"
              >
                <FaTimes />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              {!!doc.url && (
                <iframe
                  src={doc.previewUrl}
                  className="w-full h-full"
                ></iframe>
              )}
            </div>
          </div>
        </div>
      )}

      {/* AI Assistant */}
      {
        isAIAssistantOpen && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-[90%] max-w-3xl max-h-screen h-fit overflow-y-auto shadow-xl flex flex-col relative">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-bold text-gray-800">AI Assistant</h2>
                <button
                  onClick={() => setIsAIAssistantOpen(false)}
                  className="text-gray-500 hover:text-red-600 text-lg"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="flex-1 p-4 overflow-y-auto">
                {!!doc.aiSummary.overview && <p className="text-gray-700 mb-2">{doc.aiSummary.overview}</p>}

                {doc.aiSummary.vitals?.length > 0 && (
                  <>
                    <h3 className="font-semibold mb-1">Vitals:</h3>
                    <ul className="list-disc pl-5 mb-4">
                      {doc.aiSummary.vitals.map((vital, index) => {
                        const status = vital.status.toLowerCase(); // Normalize casing
                        let textColor = "text-gray-700";

                        if (status === "high") textColor = "text-red-600 font-semibold";
                        else if (status === "low") textColor = "text-blue-600 font-semibold";
                        else if (status === "normal") textColor = "text-black font-medium";

                        return (
                          <li key={index} className={textColor}>
                            {vital.name}: {vital.value} ({vital.status})
                          </li>
                        );
                      })}
                    </ul>
                  </>
                )}

                {doc.aiSummary.analysis?.length > 0 && (
                  <>
                    <h3 className="font-semibold mb-1">Analysis:</h3>
                    <ul className="list-disc pl-5 mb-4">
                      {doc.aiSummary.analysis.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}

                {doc.aiSummary.recommendations?.length > 0 && (
                  <>
                    <h3 className="font-semibold mb-1">Recommendations:</h3>
                    <ol className="list-decimal pl-5">
                      {doc.aiSummary.recommendations.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ol>
                  </>
                )}
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

export default Documents;
