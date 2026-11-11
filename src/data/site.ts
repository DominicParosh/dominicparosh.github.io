export const profile = {
  name: 'Dominic Parosh Yamarthi',
  role: 'Generative AI Engineer',
  location: 'New Jersey, USA',
  email: 'dominicparoshyamarthi@gmail.com',
  github: 'https://github.com/DominicParosh',
  linkedin: 'https://www.linkedin.com/in/dominicparoshyamarthi',
  resume: '/dominic-parosh-yamarthi-resume.pdf',
};

export const experience = [
  {
    title: 'Generative AI Engineer, Enterprise AI Platforms',
    org: 'Verizon',
    period: 'Apr 2025 – Mar 2026',
    place: 'Basking Ridge, NJ',
    points: [
      'Engineered GenTaaS, an AI testing platform combining LLM generation, retrieval, validation and workflow automation; cut test-case turnaround by about 40%.',
      'Architected hybrid RAG on OpenSearch: vector and BM25 retrieval, metadata filtering and multi-index routing.',
      'Built LangGraph multi-agent workflows with generation, critique, validation and execution stages, retries and human-in-the-loop approval.',
      'Built an LLM-as-a-judge evaluation framework with criterion-level scoring and repeated-run consistency; assessments reported about 95% alignment with SME evaluations.',
      'Integrated 20+ REST endpoints connecting LLM services with Jira, qTest, Tapsium, GitLab and internal applications.',
      'Contributed to the Order Analyzer and Remediator, an agent system that investigates operational failures from Elasticsearch logs.',
    ],
  },
  {
    title: 'Research Assistant, AI and Machine Learning',
    org: 'University at Buffalo, SUNY',
    period: 'May 2024 – Mar 2025',
    place: 'Buffalo, NY',
    points: [
      'Built reproducible PyTorch and TensorFlow pipelines for multimodal deceptive-review detection.',
      'Investigated entity-relation extraction, evidence verification and knowledge graphs for grounding model outputs in identifiable sources.',
    ],
  },
  {
    title: 'Graduate Teaching Assistant, Data Intensive Computing',
    org: 'University at Buffalo, SUNY',
    period: 'Jan 2024 – May 2024',
    place: 'Buffalo, NY',
    points: [
      'Supported 200+ students in Python, large-scale data processing and distributed computing.',
    ],
  },
  {
    title: 'Machine Learning Engineer, Financial Technology',
    org: 'TechNVision / Emagia',
    period: 'Aug 2018 – Dec 2022',
    place: 'Hyderabad, India',
    points: [
      'Built intelligent document processing for financial documents: OCR, NLP, classification, named-entity recognition and structured extraction.',
      'Served ML inference to enterprise applications through Python REST APIs on Azure; the solutions supported 500+ users across 90+ countries.',
    ],
  },
];

export const education = [
  { degree: 'M.S. Data Science', school: 'University at Buffalo, SUNY', period: '2024' },
  { degree: 'B.Tech Computer Science', school: 'Gayatri Vidya Parishad College of Engineering', period: '2018' },
];

export const papers = [
  {
    title: 'United States Road Accident Prediction using Random Forest Predictor',
    venue: 'arXiv:2505.06246, 2025 (preprint)',
    authors: 'D. P. Yamarthi, et al.',
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2505.06246' },
      {
        label: 'Code',
        href: 'https://github.com/DominicParosh/United-States-Road-Accident-Prediction-using-Machine-Learning-Algorithms',
      },
    ],
  },
];

export const interests = [
  'Evidence-grounded extraction: provenance, verification and abstention',
  'Knowledge graphs and GraphRAG',
  'Retrieval-augmented generation and hybrid search',
  'LLM evaluation and multi-agent systems',
];

// Grouped from the résumé. Kept short: details live in the case studies.
export const skills = [
  { group: 'GenAI and agents', items: 'LangGraph, LangChain, RAG and agentic RAG, tool calling, structured outputs, multi-agent systems, human-in-the-loop workflows' },
  { group: 'Retrieval and knowledge graphs', items: 'OpenSearch, Elasticsearch, hybrid search (BM25 + vectors), FAISS, Pinecone, ChromaDB, Neo4j, GraphRAG patterns' },
  { group: 'Evaluation and observability', items: 'LLM-as-a-judge, golden datasets, SME alignment, retrieval evaluation, prompt regression tests, tracing, latency and token-cost monitoring' },
  { group: 'Machine learning', items: 'PyTorch, TensorFlow, Hugging Face Transformers, scikit-learn, NLP, anomaly detection' },
  { group: 'Backend and cloud', items: 'Python, FastAPI, SQL, AWS (Bedrock, SageMaker, S3, SQS), Azure OpenAI, Azure AI Search, Docker, Kubernetes, Kafka, Spark' },
];

// The scripted "Ask this page" demo on the homepage.
// Every answer must be supported by content on this site.
export const questions = [
  {
    q: 'What has he built?',
    a: 'At Verizon, GenTaaS: an AI testing platform that cut test-case turnaround by about 40%, using hybrid retrieval and LangGraph agents. He also contributed to the Order Analyzer and Remediator, which investigates operational failures from logs.',
    confidence: 0.94,
    sources: [
      { label: 'GenTaaS', href: '/work/gentaas/' },
      { label: 'Order Analyzer', href: '/work/order-analyzer/' },
    ],
  },
  {
    q: 'How does he know it works?',
    a: 'An LLM-as-a-judge framework scores each generated test case against reference cases, criterion by criterion, and checks consistency across repeated runs. Combined with golden datasets and SME review, assessments reported about 95% alignment with SMEs.',
    confidence: 0.91,
    sources: [{ label: 'GenTaaS', href: '/work/gentaas/' }],
  },
  {
    q: 'What does he research?',
    a: 'Evidence-grounded knowledge extraction: pulling entities and relations from documents along with the evidence for them, and abstaining when that evidence is missing. He also has a 2025 arXiv preprint on road-accident prediction.',
    confidence: 0.88,
    sources: [
      { label: 'Knowledge graph extraction', href: '/work/evidence-grounded-kg/' },
      { label: 'Research', href: '/research/' },
    ],
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
  { name: 'recommendation-system-MLOps', desc: 'ALS, two-tower retrieval, then LLM-augmented recommendations, evaluated with Precision@10, Recall@10, NDCG, RMSE and MAE.', tag: 'RecSys' },
  { name: 'RL-based-load-balancer', desc: 'PPO load balancer for LLM inference pods with SLO constraints.', tag: 'RL' },
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
