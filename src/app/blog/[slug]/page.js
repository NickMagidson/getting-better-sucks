import BlogPost from '../../../components/BlogPost';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

// Force dynamic rendering to avoid build-time API calls
export const dynamic = 'force-dynamic';

// Mock blog post data
const mockBlogPosts = {
  'business-consulting-101': {
    title: "Business Consulting 101: A Comprehensive Guide",
    description: "A comprehensive guide to understanding business consulting, its benefits, types, and how to choose the right consultant.",
    publishDate: "January 4, 2025",
    slug: "business-consulting-101",
    featuredImage: {
      url: "/6844bb1f53fa2b65f941ef9b_Blog_Images_03.jpg",
      alt: "Business consulting guide illustration"
    },
    content: `
      <p>Business consulting has become an essential service in today's competitive landscape. Whether you're a startup looking to establish your market presence or an established company seeking to optimize operations, understanding the fundamentals of business consulting can be invaluable.</p>
      
      <h2>What is Business Consulting?</h2>
      <p>Business consulting involves working with professional advisors who provide expert advice to help organizations improve their performance and achieve their goals. Consultants bring external perspectives, specialized knowledge, and proven methodologies to solve complex business challenges.</p>
      
      <h2>Types of Business Consulting</h2>
      <p>There are various types of consulting services available:</p>
      <ul>
        <li><strong>Strategy Consulting:</strong> Focuses on high-level organizational strategy and direction</li>
        <li><strong>Operations Consulting:</strong> Improves day-to-day business operations and processes</li>
        <li><strong>Technology Consulting:</strong> Helps organizations leverage technology for competitive advantage</li>
        <li><strong>Financial Consulting:</strong> Provides expertise in financial planning and management</li>
      </ul>
      
      <h2>Benefits of Business Consulting</h2>
      <p>Working with business consultants offers numerous advantages:</p>
      <ul>
        <li>Access to specialized expertise and industry knowledge</li>
        <li>Objective, external perspective on your business challenges</li>
        <li>Proven methodologies and best practices</li>
        <li>Accelerated problem-solving and implementation</li>
        <li>Cost-effective access to high-level talent</li>
      </ul>
      
      <h2>Choosing the Right Consultant</h2>
      <p>Selecting the right consulting partner is crucial for success. Consider these factors:</p>
      <ul>
        <li>Relevant industry experience and expertise</li>
        <li>Track record of successful engagements</li>
        <li>Cultural fit with your organization</li>
        <li>Clear communication and project management skills</li>
        <li>Transparent pricing and deliverables</li>
      </ul>
      
      <p>Business consulting can be a powerful catalyst for growth and improvement when approached strategically. By understanding the different types of consulting services available and how to select the right partner, you can maximize the value of your consulting investment.</p>
    `
  },
  'navigating-business-challenges': {
    title: "Navigating Business Challenges: Strategies for Success",
    description: "Strategies for overcoming common business challenges and ensuring success in a competitive landscape.",
    publishDate: "January 4, 2025",
    slug: "navigating-business-challenges",
    featuredImage: {
      url: "/6844bb3b2da81548f6440053_Blog_Images_05.jpg",
      alt: "Business challenges illustration"
    },
    content: `
      <p>Every business faces challenges, from economic uncertainty to technological disruption. The key to long-term success lies not in avoiding these challenges, but in developing effective strategies to navigate them.</p>
      
      <h2>Common Business Challenges</h2>
      <p>Today's businesses commonly face several key challenges:</p>
      <ul>
        <li>Rapid technological change and digital transformation</li>
        <li>Increasing competition and market saturation</li>
        <li>Economic volatility and uncertainty</li>
        <li>Changing customer expectations and preferences</li>
        <li>Talent acquisition and retention</li>
        <li>Regulatory compliance and risk management</li>
      </ul>
      
      <h2>Strategic Approaches to Problem-Solving</h2>
      <p>Successful businesses employ several key strategies when facing challenges:</p>
      
      <h3>1. Embrace Adaptability</h3>
      <p>Organizations that thrive in challenging environments are those that can quickly adapt to changing circumstances. This requires:</p>
      <ul>
        <li>Flexible business models and processes</li>
        <li>Agile decision-making structures</li>
        <li>Continuous learning and improvement mindset</li>
      </ul>
      
      <h3>2. Focus on Customer Value</h3>
      <p>During difficult times, maintaining a laser focus on delivering customer value becomes even more critical:</p>
      <ul>
        <li>Regular customer feedback and engagement</li>
        <li>Product and service innovation</li>
        <li>Exceptional customer service</li>
      </ul>
      
      <h3>3. Build Strong Teams</h3>
      <p>Your team is your greatest asset when navigating challenges:</p>
      <ul>
        <li>Invest in employee development and training</li>
        <li>Foster open communication and collaboration</li>
        <li>Recognize and reward resilience and innovation</li>
      </ul>
      
      <h2>Risk Management and Mitigation</h2>
      <p>Proactive risk management is essential for business resilience:</p>
      <ul>
        <li>Identify potential risks and vulnerabilities</li>
        <li>Develop contingency plans and backup strategies</li>
        <li>Diversify revenue streams and market presence</li>
        <li>Maintain adequate financial reserves</li>
      </ul>
      
      <p>Remember, challenges are often opportunities in disguise. By developing robust strategies for navigating difficulties, businesses can emerge stronger and more competitive than before.</p>
    `
  },
  'effective-leadership-in-business': {
    title: "Effective Leadership in Business: Best Practices",
    description: "Best practices for effective leadership in business, highlighting key characteristics of successful leaders.",
    publishDate: "January 4, 2025",
    slug: "effective-leadership-in-business",
    featuredImage: {
      url: "/6844bae51cb96c5fd37072ff_Blog_Images_01.jpg",
      alt: "Leadership in business illustration"
    },
    content: `
      <p>Effective leadership is the cornerstone of successful organizations. In today's rapidly evolving business landscape, leaders must possess a diverse set of skills and characteristics to guide their teams toward success.</p>
      
      <h2>Core Leadership Characteristics</h2>
      <p>Successful business leaders share several key characteristics:</p>
      
      <h3>Vision and Strategic Thinking</h3>
      <p>Great leaders have the ability to see the big picture and chart a course for the future:</p>
      <ul>
        <li>Develop and communicate a clear vision</li>
        <li>Think strategically about long-term goals</li>
        <li>Anticipate market trends and opportunities</li>
      </ul>
      
      <h3>Emotional Intelligence</h3>
      <p>Understanding and managing emotions is crucial for effective leadership:</p>
      <ul>
        <li>Self-awareness and self-regulation</li>
        <li>Empathy and social skills</li>
        <li>Ability to motivate and inspire others</li>
      </ul>
      
      <h3>Decision-Making Skills</h3>
      <p>Leaders must be able to make tough decisions under pressure:</p>
      <ul>
        <li>Gather and analyze relevant information</li>
        <li>Consider multiple perspectives and options</li>
        <li>Take decisive action when needed</li>
      </ul>
      
      <h2>Building and Leading Teams</h2>
      <p>Effective leaders know how to build and manage high-performing teams:</p>
      
      <h3>Communication</h3>
      <ul>
        <li>Clear, transparent, and consistent messaging</li>
        <li>Active listening and feedback</li>
        <li>Regular team meetings and updates</li>
      </ul>
      
      <h3>Delegation and Empowerment</h3>
      <ul>
        <li>Trust team members with important responsibilities</li>
        <li>Provide necessary resources and support</li>
        <li>Allow for autonomy and creativity</li>
      </ul>
      
      <h2>Continuous Learning and Development</h2>
      <p>The best leaders never stop learning and growing:</p>
      <ul>
        <li>Stay current with industry trends and best practices</li>
        <li>Seek feedback and coaching</li>
        <li>Invest in personal and professional development</li>
        <li>Learn from both successes and failures</li>
      </ul>
      
      <p>Effective leadership is not about having all the answers, but about creating an environment where teams can thrive and achieve exceptional results together.</p>
    `
  },
  'the-role-of-technology-in-business': {
    title: "The Role of Technology in Modern Business",
    description: "An overview of the impact of technology on modern business operations and its benefits.",
    publishDate: "January 4, 2025",
    slug: "the-role-of-technology-in-business",
    featuredImage: {
      url: "/6844baf9d29deecec6ac0b05_Blog_Images_02.jpg",
      alt: "Technology in business illustration"
    },
    content: `
      <p>Technology has fundamentally transformed the way businesses operate, compete, and deliver value to customers. Understanding and leveraging technology effectively has become essential for business success in the digital age.</p>
      
      <h2>Digital Transformation</h2>
      <p>Digital transformation involves integrating digital technology into all areas of business, fundamentally changing how you operate and deliver value to customers:</p>
      <ul>
        <li>Process automation and optimization</li>
        <li>Data-driven decision making</li>
        <li>Enhanced customer experiences</li>
        <li>New business models and revenue streams</li>
      </ul>
      
      <h2>Key Technology Areas</h2>
      <p>Several key technology areas are driving business transformation:</p>
      
      <h3>Cloud Computing</h3>
      <p>Cloud technology offers numerous benefits for businesses:</p>
      <ul>
        <li>Scalability and flexibility</li>
        <li>Cost efficiency and reduced IT overhead</li>
        <li>Enhanced collaboration and remote work capabilities</li>
        <li>Improved data security and backup</li>
      </ul>
      
      <h3>Artificial Intelligence and Machine Learning</h3>
      <p>AI and ML are revolutionizing business operations:</p>
      <ul>
        <li>Automated customer service and support</li>
        <li>Predictive analytics and forecasting</li>
        <li>Personalized marketing and recommendations</li>
        <li>Process optimization and efficiency gains</li>
      </ul>
      
      <h3>Data Analytics</h3>
      <p>Data has become a critical business asset:</p>
      <ul>
        <li>Customer behavior insights</li>
        <li>Operational performance monitoring</li>
        <li>Market trend analysis</li>
        <li>Risk assessment and management</li>
      </ul>
      
      <h2>Implementation Strategies</h2>
      <p>Successfully implementing technology requires strategic planning:</p>
      <ul>
        <li>Assess current technology infrastructure and needs</li>
        <li>Develop a comprehensive digital strategy</li>
        <li>Invest in employee training and change management</li>
        <li>Start with pilot projects and scale gradually</li>
        <li>Measure and optimize technology investments</li>
      </ul>
      
      <p>Technology is not just a tool but a strategic enabler that can drive innovation, efficiency, and competitive advantage when implemented thoughtfully and strategically.</p>
    `
  },
  'strategic-planning-in-business': {
    title: "Strategic Planning in Business: Key Insights",
    description: "An exploration of strategic planning in business, outlining its importance and the steps involved in the process.",
    publishDate: "January 4, 2025",
    slug: "strategic-planning-in-business",
    featuredImage: {
      url: "/6844bb2ea37eff1cf4462c82_Blog_Images_04.jpg",
      alt: "Strategic planning illustration"
    },
    content: `
      <p>Strategic planning is the process of defining an organization's direction and making decisions on allocating resources to pursue this strategy. It's a fundamental business practice that sets the foundation for long-term success.</p>
      
      <h2>What is Strategic Planning?</h2>
      <p>Strategic planning involves several key components:</p>
      <ul>
        <li>Defining the organization's mission and vision</li>
        <li>Analyzing the internal and external environment</li>
        <li>Setting strategic objectives and goals</li>
        <li>Developing action plans and tactics</li>
        <li>Monitoring and evaluating progress</li>
      </ul>
      
      <h2>The Strategic Planning Process</h2>
      <p>Effective strategic planning follows a structured approach:</p>
      
      <h3>1. Environmental Analysis</h3>
      <p>Understanding your operating environment is crucial:</p>
      <ul>
        <li><strong>SWOT Analysis:</strong> Identify strengths, weaknesses, opportunities, and threats</li>
        <li><strong>Market Research:</strong> Analyze industry trends and customer needs</li>
        <li><strong>Competitive Analysis:</strong> Assess competitor strategies and positioning</li>
      </ul>
      
      <h3>2. Goal Setting</h3>
      <p>Establish clear, measurable objectives:</p>
      <ul>
        <li>Use SMART criteria (Specific, Measurable, Achievable, Relevant, Time-bound)</li>
        <li>Align goals with organizational mission and values</li>
        <li>Consider both short-term and long-term objectives</li>
      </ul>
      
      <h3>3. Strategy Development</h3>
      <p>Create strategies to achieve your goals:</p>
      <ul>
        <li>Identify key strategic initiatives</li>
        <li>Allocate resources effectively</li>
        <li>Consider multiple scenarios and contingencies</li>
      </ul>
      
      <h3>4. Implementation Planning</h3>
      <p>Develop detailed action plans:</p>
      <ul>
        <li>Define specific tasks and responsibilities</li>
        <li>Set timelines and milestones</li>
        <li>Establish communication and reporting structures</li>
      </ul>
      
      <h2>Benefits of Strategic Planning</h2>
      <p>Organizations that engage in strategic planning enjoy several advantages:</p>
      <ul>
        <li>Clear direction and focus</li>
        <li>Better resource allocation</li>
        <li>Improved decision-making</li>
        <li>Enhanced coordination and communication</li>
        <li>Increased adaptability to change</li>
        <li>Better financial performance</li>
      </ul>
      
      <h2>Common Pitfalls to Avoid</h2>
      <p>Be aware of these common strategic planning mistakes:</p>
      <ul>
        <li>Creating plans that are too rigid or inflexible</li>
        <li>Failing to involve key stakeholders in the process</li>
        <li>Setting unrealistic or unattainable goals</li>
        <li>Not allocating sufficient resources for implementation</li>
        <li>Lack of regular monitoring and review</li>
      </ul>
      
      <p>Strategic planning is an ongoing process that requires commitment, flexibility, and regular review. When done well, it provides a roadmap for organizational success and sustainable growth.</p>
    `
  }
};

// Related posts data
const getRelatedPosts = (currentSlug) => {
  return Object.values(mockBlogPosts)
    .filter(post => post.slug !== currentSlug)
    .slice(0, 3)
    .map(post => ({
      title: post.title,
      description: post.description,
      publishDate: post.publishDate,
      slug: post.slug,
      featuredImage: post.featuredImage
    }));
};

// Export generateStaticParams for static generation
export async function generateStaticParams() {
  return Object.keys(mockBlogPosts).map(slug => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = mockBlogPosts[resolvedParams.slug];
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }
  
  return {
    title: `${post.title} - Serenya Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.featuredImage.url],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const post = mockBlogPosts[resolvedParams.slug];
  
  if (!post) {
    return (
      <>
        <Navbar />
        <div className="section">
          <div className="container">
            <h1>Blog Post Not Found</h1>
            <p>The requested blog post could not be found.</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const relatedPosts = getRelatedPosts(resolvedParams.slug);
  
  // Social share URLs
  const socialShareUrls = {
    facebook: `https://facebook.com/sharer?u=${encodeURIComponent(`https://yoursite.com/blog/${resolvedParams.slug}`)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://yoursite.com/blog/${resolvedParams.slug}`)}&text=${encodeURIComponent(post.title)}`,
    linkedin: `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://yoursite.com/blog/${resolvedParams.slug}`)}`,
    copy: `https://yoursite.com/blog/${resolvedParams.slug}`
  };

  return (
    <>
      <Navbar />
      <BlogPost 
        post={post} 
        relatedPosts={relatedPosts}
        socialShareUrls={socialShareUrls}
      />
      <Footer />
    </>
  );
}
