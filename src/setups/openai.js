const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
   organization: "org-T8Su9wEl3AA1mLKGvOjGDwAc",
   apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

export const openai = new OpenAIApi(configuration);
