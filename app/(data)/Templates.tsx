export default  [
    {
        name:'Blog Title',
        desc:'An AI tool that generate blog title depends on yout blog information',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt:'Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
                
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
        slug: 'blog-content-generation',
        aiPrompt: 'Generate Blog Content based on topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required:true
            },
            {
                label: 'Enter blog Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
        slug: 'blog-topic-idea',
        aiPrompt: 'Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format',
        form: [
            {
                label: 'Enter your Niche',
                field: 'input',
                name: 'niche',
                required:true
            },
        ]
    },
    {
        name: 'Youtube SEO Title',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/402/402075.png',
        slug: 'youtube-seo-title',
        aiPrompt: 'Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline and give me result in HTML tags format',
        form: [
            {
                label: 'Enter your youtube video topic keyowords',
                field: 'input',
                name: 'keywords',
                required:true
            },
            {
                label: 'Enter youtube description Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]

    },
    {

        name: 'Youtube Description',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111748.png',
        slug: 'youtube-description',
        aiPrompt: 'Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter your blog topic/title',
                field: 'input',
                name: 'topic',
                required:true
            },
            {
                label: 'Enter youtube Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Youtube Tags',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674918.png',
        slug: 'youtube-tag',

        aiPrompt: 'Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format',

        form: [
            {
                label: 'Enter your youtube title',
                field: 'input',
                name: 'title',
                required:true
            },
            {
                label: 'Enter youtube video Outline here (Optional)',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },

    /*{
        name: 'Rewrite Article (Plagiarism Free)',
        desc: 'Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png',
        category: 'Rewriting Tool',
        slug: 'rewrite-article',
        aiPrompt: 'Rewrite give article without any Plagiarism in rich text editor format',
        form: [
            {
                label: '🤖 Provide your Article/Blogpost or any other content to rewrite.',
                field: 'textarea',
                name: 'article',
                required:true
            }
        ]
    },*/
    {
        name: 'Text Improver',
        desc: 'This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png',
        category: 'Writing Assistant',
        slug: 'text-improver',
        aiPrompt: 'Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format',
        form: [
            {
                label: 'Enter text that you want to re-write or improve',
                field: 'textarea',
                name: 'textToImprove'
            }
        ]
    },
    {
        name: 'Add Emojis to Text',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
        category: 'blog',
        slug: 'add-emoji-to-text',
        aiPrompt: 'Add Emoji to outline text depends on outline and rewrite it in rich text editor format',
        form: [
            {
                label: 'Enter your text to add emojis',
                field: 'textarea',
                name: 'outline',
                required:true
            }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
        category: 'blog',
       
        slug: 'instagram-post-generator',
        aiPrompt: 'Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords for your post',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
    /*{
        name: 'Instagram Hash Tag Generator',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
        category: 'blog',
       
        slug: 'instagram-hash-tag-generator',
        aiPrompt: 'Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords for your instagram hastag',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },*/
    {
        name: 'Instagram Post/Reel Idea',
        desc: 'An AI tool that generate New and trending instagram idea depends on your niche',
        icon: 'https://cdn-icons-png.flaticon.com/128/1029/1029183.png',
        category: 'instagram',
       
        slug: 'instagram-post-idea-generator',
        aiPrompt: 'Generate 5-10 Instagram idea depends on niche with latest trend and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords / Niche for your instagram idea',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
    {
        name: 'English Grammer Check',
        desc: 'AI Model to Correct your english grammer by providing the text',
        icon:'https://cdn-icons-png.flaticon.com/128/12596/12596700.png',
        category: 'english',
       
        slug: 'english-grammer-checker',
        aiPrompt: 'Rewrite the inputText by correcting the grammer and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter text to correct the grammer',
                field: 'input',
                name: 'inputText',
                required:true
            },
           
        ]
    },
    {
        name: 'Write Code',
        desc: 'AI Model to generate programming code in any language',
        icon:'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
        category: 'Coding',
       
        slug: 'write-code',
        aiPrompt: 'Depends on user codeDescription write a code and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter description of code you want along with Programming Lang',
                field: 'textarea',
                name: 'codeDesscripton',
                required:true
            },
           
        ]
    },
    {
        name: 'Explain Code',
        desc: 'AI Model to explain programming code in any language',
        icon:'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
        category: 'Coding',
       
        slug: 'explain-code',
        aiPrompt: 'Depends on user codeDescription explain code line by line and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter code which you want to understand',
                field: 'textarea',
                name: 'codeDesscripton',
                required:true
            },
           
        ]
    },
    {
        name: 'Code Bug Detector',
        desc: 'This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.',
        icon:'https://cdn-icons-png.flaticon.com/128/4426/4426267.png',
        category: 'code-bug-detector',
       
        slug: 'code-bug-detector',
        aiPrompt: 'Depends on user codeInput find bug in code and give solution and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter code which you want to test bug',
                field: 'textarea',
                name: 'codeInput',
                required:true
            },
           
        ]
    },
    {
        name: 'Tagline Generator',
        desc: 'Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.',
        icon:'https://cdn-icons-png.flaticon.com/128/2178/2178616.png',
        category: 'Marketting',
       
        slug: 'tagline-generator',
        aiPrompt: 'Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output  in rich text editor format ',
        form: [
            {
                label: 'Product/Brand Name',
                field: 'input',
                name: 'productName',
                required:true
            },
            {
                label: 'What you are selling / Marketting',
                field: 'textarea',
                name: 'outline',
                required:true
            },
           
        ]
    },
    {
        name: 'Product Description',
        desc: 'This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.',
        icon:'https://cdn-icons-png.flaticon.com/128/679/679922.png',
        category: 'Marketting',
       
        slug: 'product-description',
        aiPrompt: 'Depends on user productName and description generate small description for product for e-commer business give output  in rich text editor format  ',
        form: [
            {
                label: 'Product Name',
                field: 'input',
                name: 'productName',
                required:true
            },
            {
                label: 'Product Details',
                field: 'textarea',
                name: 'outline',
                required:true
            },
           
        ]
    },
    
    {
        name: 'Resume Builder',
        desc: 'An AI tool to help you create a professional resume by generating content based on your inputs like education, skills, and work experience.',
        category: 'Career',
        icon: 'https://cdn-icons-png.flaticon.com/128/3135/3135692.png',
        slug: 'resume-builder',
        aiPrompt: 'Generate a professional resume in rich text editor format based on user inputs such as education, skills, and work experience.',
        form: [
            {
                label: 'Enter your education details',
                field: 'textarea',
                name: 'education',
                required: true
            },
            {
                label: 'Enter your work experience',
                field: 'textarea',
                name: 'workExperience',
            },
            {
                label: 'Enter your skills',
                field: 'input',
                name: 'skills',
            }
        ]
    },
    {
        name: 'Business Name Generator',
        desc: 'Generate unique business name ideas based on keywords and industry type.',
        category: 'Business',
        icon: 'https://cdn-icons-png.flaticon.com/128/7890/7890493.png',
        slug: 'business-name-generator',
        aiPrompt: 'Generate 5 business name ideas based on industry and keywords in bullet format.',
        form: [
            {
                label: 'Enter industry type',
                field: 'input',
                name: 'industry',
                required: true
            },
            {
                label: 'Enter keywords',
                field: 'input',
                name: 'keywords',
            }
        ]
    },
    {
        name: 'Email Subject Generator',
        desc: 'An AI tool to generate captivating email subject lines that increase open rates.',
        category: 'Email Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/732/732200.png',
        slug: 'email-subject-generator',
        aiPrompt: 'Generate 5 engaging email subject lines based on the given purpose and target audience.',
        form: [
            {
                label: 'Enter the email purpose',
                field: 'input',
                name: 'purpose',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'input',
                name: 'audience',
            }
        ]
    },
    {
        name: 'Twitter Bio Generator',
        desc: 'Create a compelling Twitter bio that stands out, based on your interests and profession.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/733/733579.png',
        slug: 'twitter-bio-generator',
        aiPrompt: 'Generate a professional or casual Twitter bio based on interests and profession in rich text editor format.',
        form: [
            {
                label: 'Enter your profession',
                field: 'input',
                name: 'profession',
                required: true
            },
            {
                label: 'Enter your interests',
                field: 'input',
                name: 'interests',
            }
        ]
    },
    {
        name: 'LinkedIn Summary Generator',
        desc: 'An AI tool to craft a professional LinkedIn summary based on your career and goals.',
        category: 'Career',
        icon: 'https://cdn-icons-png.flaticon.com/128/2504/2504923.png',
        slug: 'linkedin-summary-generator',
        aiPrompt: 'Generate a LinkedIn summary based on user’s career goals and experience in rich text editor format.',
        form: [
            {
                label: 'Enter your career goals',
                field: 'textarea',
                name: 'careerGoals',
                required: true
            },
            {
                label: 'Enter your work experience',
                field: 'textarea',
                name: 'workExperience',
            }
        ]
    },
    {
        name: 'Advertisement Copy Generator',
        desc: 'Generate catchy and effective ad copies for social media and search engines.',
        category: 'Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/1055/1055664.png',
        slug: 'advertisement-copy-generator',
        aiPrompt: 'Generate 3 short and catchy advertisement copies based on product/service description and target audience in bullet points.',
        form: [
            {
                label: 'Enter product/service description',
                field: 'textarea',
                name: 'description',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'input',
                name: 'audience',
            }
        ]
    },
    {
        name: 'Podcast Episode Title Generator',
        desc: 'An AI tool to generate compelling titles for podcast episodes based on the episode theme.',
        category: 'Podcast',
        icon: 'https://cdn-icons-png.flaticon.com/128/2628/2628834.png',
        slug: 'podcast-title-generator',
        aiPrompt: 'Generate 5 podcast episode title ideas in bullet points based on the theme and niche in rich text editor format.',
        form: [
            {
                label: 'Enter podcast theme',
                field: 'input',
                name: 'theme',
                required: true
            },
            {
                label: 'Enter niche (Optional)',
                field: 'input',
                name: 'niche',
            }
        ]
    },
    {
        name: 'Catchy and Rich Slogans Generator',
        desc: 'Create catchy slogans for your brand or product with this AI tool.',
        category: 'Branding',
        icon: 'https://cdn-icons-png.flaticon.com/128/16495/16495894.png',
        slug: 'slogan-generator',
        aiPrompt: 'Generate 5 catchy slogans based on the product description and target audience in rich text editor format.',
        form: [
            {
                label: 'Enter product description',
                field: 'textarea',
                name: 'description',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'input',
                name: 'audience',
            }
        ]
    },
    {
    name: "Recipe Generator",
    desc: "An AI tool that generates delicious recipes based on the ingredients you have at home, helping you create meals easily.",
    category: "Cooking",
    icon: "https://cdn-icons-png.flaticon.com/128/3565/3565418.png",
    slug: "recipe-generator",
    aiPrompt: "Generate a detailed recipe using the ingredients provided and give the output in rich text editor format.",
    form: [
        {
            label: "Enter available ingredients",
            field: "textarea",
            name: "ingredients",
            required: true
        },
        {
            label: "Preferred cuisine (optional)",
            field: "input",
            name: "cuisine"
        }
    ]
},
{
    name: "Poetry Generator",
    desc: "An AI tool that creates beautiful poems based on your mood, themes, or keywords, capturing emotions in a few verses.",
    category: "Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/9087/9087118.png",
    slug: "poetry-generator",
    aiPrompt: "Generate a poem of 10-12 lines based on the given theme, mood, or keywords, and output it in rich text editor format.",
    form: [
        {
            label: "Enter a theme or mood for the poem",
            field: "input",
            name: "theme",
            required: true
        },
        {
            label: "Enter keywords (optional)",
            field: "textarea",
            name: "keywords"
        }
    ]
},
{
    name: 'Job Application Maker',
    desc: 'An AI tool that assists you in creating professional job applications tailored to specific job descriptions and company requirements.',
    category: 'Job Tools',
    icon: 'https://cdn-icons-png.flaticon.com/128/1436/1436690.png',
    slug: 'job-application-generator',
    aiPrompt: 'Generate a tailored job application letter based on the provided job description, your skills, and experiences in rich text editor format.',
    form: [
        {
            label: 'Enter the job title you are applying for',
            field: 'input',
            name: 'jobTitle',
            required: true
        },
        {
            label: 'Enter the job description or requirements',
            field: 'textarea',
            name: 'jobDescription',
            required: true
        },
        {
            label: 'Enter your relevant skills and experiences',
            field: 'textarea',
            name: 'skillsExperiences',
            required: true
        }
    ]
},
{
    name: 'Hashtag Generator',
    desc: 'An AI tool that generates effective and relevant hashtags for your Instagram posts, enhancing visibility and engagement.',
    category: 'Social Media Tools',
    icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
    slug: 'instagram-hashtag-generator',
    aiPrompt: 'Generate 15 relevant Instagram hashtags based on the provided keywords and theme for better engagement in rich text editor format.',
    form: [
        {
            label: 'Enter keywords or themes for your Instagram post',
            field: 'input',
            name: 'keywords',
            required: true
        },
        {
            label: 'Enter the target audience or niche (Optional)',
            field: 'input',
            name: 'niche'
        }
    ]
}







]