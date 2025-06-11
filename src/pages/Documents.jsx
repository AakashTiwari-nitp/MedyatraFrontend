import { React, useState } from 'react';
import { FaEye, FaDownload, FaTimes, FaFilePdf, FaFileImage } from "react-icons/fa";
import { RiRobot3Line } from "react-icons/ri";
import { MdOutlineDocumentScanner } from "react-icons/md";

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
    "id": 2,
    "title": "Medical Report of Anuj",
    "type": "docx",
    "patient": "Anuj",
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
    "id": 3,
    "title": "Medical Report of Anuj",
    "type": "jpg",
    "patient": "Anuj Pratap",
    "category": "lab results",
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
    "id": 4,
    "title": "Medical Report of Anuj",
    "type": "pdf",
    "patient": "Anuj Pratap",
    "category": "prescription",
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
    "id": 5,
    "title": "Medical Report of Anuj",
    "type": "docx",
    "patient": "Anuj",
    "category": "imaging",
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
    "url": "https://drive.google.com/file/d/1hpWcmIXJLV9q0iyKMDw4VPNYFmQQkonJ/preview",
    "size": "196 KB",
    "updatedAt": "2025-06-04T00:00:00"
  },
  {
    "id": 6,
    "title": "Medical Report of Anuj",
    "type": "jpg",
    "patient": "Anuj Pratap",
    "category": "medical reports",
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
];

const Documents = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Documents</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
        {docs.map(doc => (
          <DocumentCard key={doc.id} doc={doc} />
        ))}
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
