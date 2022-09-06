'use strict';
module.exports = {
    pathPrefix: '/wingbot',
    
    plugins: [
        {
            resolve: 'smooth-doc',
            options: {
                name: 'Wingbot Chatbot Framework Documentation',
                description: 'Wingbot Chatbot Framework Documentation',
                siteUrl: 'https://wingbotai.github.io/',
                sections: ['GETTING STARTED WITH CHATBOTS', 'GETTING STARTED WITH WINGBOT.AI', 'VARIABLES AND CONVERSATION STATE', 'MARKETING AND AUDIENCES', 'ADVANCED CONVERSATIONS', 'NLP', 'TESTING'],
                githubRepositoryURL: 'https://github.com/wingbotai/wingbot'
            }
        },
       
    ]
};
