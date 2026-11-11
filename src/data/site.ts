export const profile = {
  name: 'Dominic Parosh Yamarthi',
  role: 'Senior GenAI Engineer, Verizon',
  location: 'Basking Ridge, NJ',
  email: 'dominicparoshyamarthi@gmail.com',
  github: 'https://github.com/DominicParosh',
  linkedin: 'https://www.linkedin.com/in/dominicparoshyamarthi',
  resume: 'https://github.com/DominicParosh/Resume/blob/main/Dominic_Resume.pdf',
};

export const experience = [
  {
    title: 'Senior Generative AI Engineer',
    org: 'Verizon',
    period: 'Apr 2025 – now',
    place: 'Basking Ridge, NJ',
    points: [
      'Delivered GenTaaS, which turns requirements into test cases and executable test scripts.',
      'Built the evaluation framework behind it: correctness, coverage and diversity scorecards with automated regression detection.',
      'Shipped 20+ REST APIs on AWS with Docker and Kubernetes.',
    ],
  },
  {
    title: 'Research Assistant and Graduate TA',
    org: 'University at Buffalo, SUNY',
    period: 'Jan 2024 – Mar 2025',
    place: 'Buffalo, NY',
    points: [
      'Prototyped NLP and computer vision systems in PyTorch, including multimodal pipelines over image embeddings and metadata.',
      'Taught and mentored 200+ students in CS 487/587.',
    ],
  },
  {
    title: 'Machine Learning Engineer',
    org: 'TechNVision (Emagia)',
    period: 'Aug 2018 – Dec 2022',
    place: 'Hyderabad, India',
    points: [
      'Built GiaDocs, document intelligence for invoices, purchase orders, remittances and bank statements, used by 500+ enterprise users in 90+ countries.',
      'Designed the OCR and layout pipeline (Faster R-CNN, YOLOv3) and cash-flow forecasting models.',
    ],
  },
];

export const education = [
  { degree: 'M.S. Data Science', school: 'University at Buffalo, SUNY', period: '2023 – 2024' },
  { degree: 'B.Tech Computer Science', school: 'JNTU Kakinada', period: '2014 – 2018' },
];

// TODO(Domi): exact titles, co-authors, venues and links.
export const papers = [
  {
    title: 'TODO: NLDM 2025 paper title',
    venue: 'NLDM 2025',
    authors: 'D. P. Yamarthi, et al.',
    note: 'Add abstract, PDF, code and BibTeX.',
    links: [] as { label: string; href: string }[],
  },
  {
    title: 'United States Road Accident Prediction using Machine Learning Algorithms',
    venue: 'arXiv preprint',
    authors: 'D. P. Yamarthi, et al.',
    note: 'Add arXiv ID and year.',
    links: [
      {
        label: 'Code',
        href: 'https://github.com/DominicParosh/United-States-Road-Accident-Prediction-using-Machine-Learning-Algorithms',
      },
    ],
  },
];

export const interests = [
  'Calibrated abstention: when a model should decline to answer',
  'Retrieval-augmented generation and grounding',
  'Knowledge graph construction',
  'Multi-agent systems and their failure modes',
];

// The scripted "Ask this page" demo on the homepage.
// Every answer must be supported by content on this site.
export const questions = [
  {
    q: 'What does he build?',
    a: 'Production LLM systems at Verizon. GenTaaS turns requirements into test cases and runnable scripts. The Order Analyzer Remediator triages order-fulfilment failures with a multi-agent LangGraph and MCP system.',
    confidence: 0.94,
    sources: [
      { label: 'GenTaaS', href: '/work/gentaas/' },
      { label: 'Order Analyzer', href: '/work/order-analyzer/' },
    ],
  },
  {
    q: 'How does he know it works?',
    a: 'He builds the evaluation before the feature: golden datasets, scorecards for correctness, coverage and diversity, and regression checks on every change. GenTaaS output reached 95% agreement with subject-matter experts.',
    confidence: 0.91,
    sources: [
      { label: 'GenTaaS', href: '/work/gentaas/' },
      { label: 'EGR-SRC', href: '/work/egr-src/' },
    ],
  },
  {
    q: 'Has he published?',
    a: 'Yes: a paper at NLDM 2025 and an arXiv preprint on predicting US road accidents. His research thread is calibrated abstention, teaching extraction and RAG systems to decline instead of guess.',
    confidence: 0.88,
    sources: [{ label: 'Research', href: '/research/' }],
  },
  {
    q: "What's his favourite pizza topping?",
    a: "Nothing on this site answers that, so I'm not going to guess.",
    confidence: 0.07,
    sources: [],
  },
];

export const threshold = 0.6;

export const archive = [
  { name: 'deliberation-engine', desc: 'Proposer and Critic agents that turn vague feature requests into decision documents.', tag: 'Agents' },
  { name: 'RAG-models', desc: 'Eight RAG architectures, from naive to agentic, on a renewable-energy corpus.', tag: 'RAG' },
  { name: 'RAG-Systems-and-AI-Agents', desc: 'Naive RAG, then reranking, then agentic RAG with tool use.', tag: 'RAG' },
  { name: 'NLP-Pipelines', desc: 'TF-IDF to fine-tuned transformers to an LLM backbone with structured output.', tag: 'NLP' },
  { name: 'recommendation-system-MLOps', desc: 'ALS, two-tower retrieval, then LLM-augmented recommendations.', tag: 'RecSys' },
  { name: 'RL-based-load-balancer', desc: 'PPO load balancer for LLM inference pods with SLO constraints.', tag: 'RL' },
  { name: 'Multimodal-Fake-Review-Detection', desc: 'RoBERTa and CLIP with cross-modal attention fusion.', tag: 'Multimodal' },
  { name: 'Customer-Churn-and-Lifetime-Value-Prediction', desc: 'XGBoost and RFM, survival analysis, temporal GNNs.', tag: 'ML' },
  { name: 'Marketing-Attribution-and-Marketing-Mix-Modeling-MMM', desc: 'Last-touch, Bayesian MMM, causal inference with double ML.', tag: 'Causal' },
  { name: 'nanogpt', desc: 'Character-level GPT trained on Shakespeare, written from scratch.', tag: 'From scratch' },
  { name: 'neural-networks', desc: 'Neural network fundamentals, implemented by hand.', tag: 'From scratch' },
  { name: 'ml-diagnostics-from-scratch', desc: 'Overfitting, bias–variance and model capacity in five notebooks.', tag: 'From scratch' },
  { name: 'attention-and-gan', desc: 'Autoencoders, GANs and attention.', tag: 'Deep learning' },
  { name: 'langchain-for-LLM-development', desc: 'Chains, agents and tool integrations with LangChain.', tag: 'LLM apps' },
  { name: 'RAG-projects', desc: 'Retrieval experiments.', tag: 'RAG' },
  { name: 'ai-engineering', desc: 'AI Engineering by Domi, a course site adapted from an open-source curriculum.', tag: 'Teaching' },
  { name: 'Gender-Prediction-using-RNN-on-Sonograms', desc: 'RNN classifier on sonogram images.', tag: 'CV' },
  { name: 'salsesforce_churn', desc: 'CRM churn with SMOTE and threshold tuning.', tag: 'Data science' },
  { name: 'Spotify_popularity', desc: 'Song popularity with gradient boosting.', tag: 'Data science' },
  { name: 'diabetes_prediction', desc: 'Five classifiers compared with ROC and feature importance.', tag: 'Data science' },
  { name: 'netflix_clustering', desc: 'KMeans and DBSCAN with PCA and t-SNE.', tag: 'Data science' },
  { name: 'Database-Management-System-with-Tableau-Visualization-', desc: 'FIFA 23 database design and Tableau dashboards.', tag: 'Data' },
];
