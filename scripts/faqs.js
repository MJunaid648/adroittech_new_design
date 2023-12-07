const accordian = document.querySelector(".accordian");
const faqData = [
  {
    question: "What services does your company provide?",
    answer:
      "Adroit Tech offers a comprehensive range of services tailored to client needs. Services include:\n" +
      "1. UI/UX Design: Skilled designers create user-centric interfaces prioritizing usability and visual appeal.\n" +
      "2. Software Development: Experts develop custom software using the latest tech and agile methods.\n" +
      "3. Digital Marketing: Result-driven strategies encompass SEO, PPC, social media, and content marketing.\n" +
      "4. Outsourced Project Development: Partnering for end-to-end solutions, delivering quality within timelines.",
  },
  {
    question: "What technologies do you use to provide your services?",
    answer:
      "At Adroit Tech, we leverage a wide range of cutting-edge technologies and tools to deliver exceptional services. Some of the key technologies and tools we utilize include:\n" +
      "• Programming Languages: Python, JavaScript\n" +
      "• Front-end Development: Angular, React\n" +
      "• Back-end Development: Node.js, Django, web2py, Flask\n" +
      "• Version Control and Collaboration: GitHub\n" +
      "• Continuous Integration/Continuous Deployment (CI/CD): Jenkins\n" +
      "• Containerization and Orchestration: Docker, Kubernetes\n" +
      "• Test Automation: Selenium\n" +
      "• Cloud Solutions: We have expertise in AWS (Amazon Web Services), Google Cloud Products, and SAP BW/4Hana.",
  },
  {
    question: "What sets your company apart from other outsourcing companies?",
    answer:
      "Unlike many outsourcing companies that offer a wide range of services, we have carved a niche in developing cutting-edge software using continuous integration/deployment. This specialization allows us to bring deep expertise and innovation to any type of business, driving its growth and success in the digital landscape.",
  },
  {
    question: "What industries do you provide your services for?",
    answer:
      "Our versatile services are designed to meet the needs of businesses from different sectors, including the E-commerce Industry & Online Services, the Clinical and Health Industry, Software Development, the Public and Private Sector Industries, the Tourism Industry, and the Fashion Industry.",
  },
  {
    question: "What customer support channels do you offer?",
    answer:
      "Adroit Tech offers seamless customer support through multiple channels:\n" +
      "1. Phone Support: Reach dedicated reps during business hours for assistance.\n" +
      "2. Email Support: Receive prompt help via email communication.\n" +
      "3. Online Help Center: Access FAQs, guides, and troubleshooting resources for self-service.\n" +
      "4. Social Media: Connect via official platforms like Facebook, Instagram, and LinkedIn for responsive assistance.",
  },
  {
    question: "How do you handle customer feedback and complaints?",
    answer:
      "Adroit Tech values customer feedback for growth and follows a systematic process:\n" +
      "• Active Listening: Encouraging feedback via various channels to understand experiences.\n" +
      "• Prompt Response: Swift acknowledgment and initiation of necessary steps upon receiving feedback.\n" +
      "• Thorough Investigation: In-depth understanding by gathering info and involving customers if needed.\n" +
      "• Effective Communication: Transparent updates on investigation progress and expected resolution time.\n" +
      "• Fair Resolution: Dedication to satisfying customers and rectifying issues for improved solutions.\n" +
      "• Continuous Improvement: Feedback as learning, leading to root cause analysis and proactive changes.",
  },
  {
    question:
      "What is the project management process followed by your company?",
    answer:
      "Adroit Tech's project management ensures efficiency and success. We start by understanding project details, create comprehensive plans, and employ cross-functional teams for execution, closely monitoring progress and maintaining quality. This structured approach aims to deliver on time and within budget while prioritizing communication and stakeholder satisfaction.",
  },
  {
    question: "What is your approach to security and data privacy?",
    answer:
      "At Adroit Tech, security and data privacy are foundational. We use encryption for secure data transmission/storage, maintain a secure IT infrastructure, and control data access through strict measures and multi-factor authentication. Vigilant monitoring, compliance with regulations, employee training, and defined data retention policies contribute to their commitment. Third-party standards are upheld, ensuring comprehensive security and data integrity across all operations. Adroit Tech prioritizes continuous monitoring and adaptation to evolving threats for customer trust and confidence.",
  },
  {
    question: "Does your company offer post-project support and maintenance?",
    answer:
      "Absolutely, at Adroit Tech, our commitment to our clients extends far beyond project completion. We firmly believe in building long-term partnerships and providing exceptional customer care. As part of our commitment to customer satisfaction, we offer comprehensive post-project support and maintenance services such as bug fixes and updates, security enhancements, and performance optimization.",
  },
  {
    question:
      "Is your company open to collaborating with other agencies or internal development teams?",
    answer:
      "Yes, at Adroit Tech, we are enthusiastic about collaboration and value the opportunity to work alongside other agencies or internal development teams. We believe that collaborative efforts often lead to the most innovative and comprehensive solutions for our clients. Our team is experienced in collaborating with a diverse range of partners, and we welcome the chance to join forces with other agencies or internal teams to deliver exceptional results.",
  },
];
// faqData.forEach((item) => {
//   const contentContainer = document.createElement("div");
//   contentContainer.classList.add("content-container");

//   const questionDiv = document.createElement("div");
//   questionDiv.classList.add("question");
//   questionDiv.textContent = item.question;

//   const answerDiv = document.createElement("div");
//   answerDiv.classList.add("answer");
//   answerDiv.textContent = item.answer;

//   contentContainer.appendChild(questionDiv);
//   contentContainer.appendChild(answerDiv);

//   accordian.appendChild(contentContainer);
// });

// const contentContainer = document.getElementsByClassName("content-container");

// for (var i = 0; i < contentContainer.length; i++) {
//   contentContainer[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//   });
// }
console.log(faqData.length);

faqData.forEach((item) => {
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("content-container");

  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");
  questionDiv.textContent = item.question;

  const answerDiv = document.createElement("div");
  answerDiv.classList.add("answer");

  // Convert answer to HTML
  const answerList = document.createElement("ul");
  item.answer.split("\n").forEach((line) => {
    if (line.trim() !== "") {
      const listItem = document.createElement("li");
      listItem.textContent = line.trim();
      answerList.appendChild(listItem);
    }
  });
  answerDiv.appendChild(answerList);

  contentContainer.appendChild(questionDiv);
  contentContainer.appendChild(answerDiv);

  accordian.appendChild(contentContainer);
});

const contentContainers = document.querySelectorAll(".content-container");

contentContainers.forEach((container) => {
  container.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});
