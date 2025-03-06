import React from "react";
import { useParams } from "react-router-dom";

export default function VideoPlayer() {
  const { url } = useParams();
  const videourl = decodeURIComponent(url);
  const embedUrl = videourl ? videourl.replace("youtu.be/", "www.youtube.com/embed/") + "?autoplay=1" : "";
  console.log(embedUrl);

  // Sample quiz questions
  const quizQuestions = [
    {
      question: "What is the main topic of this video?",
      options: ["React", "JavaScript", "Bootstrap", "Node.js"],
      correctAnswer: "React",
    },
    {
      question: "Which hook is used to access URL parameters in React?",
      options: ["useState", "useEffect", "useParams", "useContext"],
      correctAnswer: "useParams",
    },
  ];

  // Sample reference links
  const referenceLinks = [
    {
      title: "React Documentation",
      url: "https://reactjs.org/docs/getting-started.html",
    },
    {
      title: "Bootstrap Documentation",
      url: "https://getbootstrap.com/docs/5.3/getting-started/introduction/",
    },
    {
      title: "React Router Documentation",
      url: "https://reactrouter.com/en/main",
    },
  ];

  return (
    <div className="container my-5">
      {/* Video Player Section */}
      <div className="text-center mb-5">
        <h2 className="text-primary mb-4">Course Video</h2>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="ratio ratio-16x9">
            <iframe
              src={embedUrl}
              title="Course Video"
              allow="autoplay; encrypted-media"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Quiz Section */}
      <div className="mb-5">
        <h3 className="text-primary mb-4">Quiz</h3>
        <div className="row g-4">
          {quizQuestions.map((quiz, index) => (
            <div key={index} className="col-md-6">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Question {index + 1}</h5>
                  <p className="card-text">{quiz.question}</p>
                  <ul className="list-group list-group-flush">
                    {quiz.options.map((option, i) => (
                      <li key={i} className="list-group-item">
                        <input
                          type="radio"
                          name={`question-${index}`}
                          id={`option-${index}-${i}`}
                          className="form-check-input me-2"
                        />
                        <label htmlFor={`option-${index}-${i}`} className="form-check-label">
                          {option}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reference Links Section */}
      <div>
        <h3 className="text-primary mb-4">Reference Links</h3>
        <div className="list-group">
          {referenceLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            >
              {link.title}
              <span className="badge bg-primary rounded-pill">Visit</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}