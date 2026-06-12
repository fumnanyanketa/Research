# If Claude Fable stops helping you, you'll never know

- Author: Simon Willison
- Date: 2026-06-10
- URL: https://simonwillison.net/2026/Jun/10/if-claude-fable-stops-helping-you/#atom-everything

**[If Claude Fable stops helping you, you'll never know](https://jonready.com/blog/posts/claude-fable5-is-allowed-to-sabotage-your-app-if-youre-a-competitor.html)**

Jonathon Ready highlights one of the more eyebrow-raising details from the [319 page system card](https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf) for Fable 5 and Mythos 5. Here's a longer excerpt, highlights mine:

> In light of the ability of recent models to [accelerate their own development](https://www.anthropic.com/institute/recursive-self-improvement), we’ve **implemented new interventions** that limit Claude’s effectiveness for requests targeting frontier LLM development (for example, on **building pretraining pipelines, distributed training infrastructure, or ML accelerator design**). Using Claude to develop competing models already violates our [Terms of Service](https://www.anthropic.com/legal/consumer-terms), but enforcing this restriction through our safeguards avoids accelerating the actors most willing to violate these terms.
> 
> Unlike our interventions for cybersecurity, biology and chemistry, and distillation attempts, **these safeguards will not be visible to the user**. Fable 5 will not fall back to a different model. Instead, the safeguards will limit effectiveness through methods such as prompt modification, steering vectors, or parameter-efficient fine-tuning (PEFT). These interventions will not affect the vast majority of coding work. We estimate they will impact ~0.03% of traffic, concentrated in fewer than 0.1% of organizations.

I believe this is the first time Anthropic have announced these kinds of silent interventions. The justification still feels pretty science-fiction to me - the linked article talks about "recursive self-improvement". I'm not at all keen on a model that silently corrupts its replies to questions about "ML accelerator design" purely to slow down research that might conflict with Anthropic's own goals!

**Update** : Anthropic [walked back this policy](https://simonwillison.net/2026/Jun/11/anthropic-walks-back-policy/) in the face of widespread outrage from the research community. 

Via [Hacker News](https://news.ycombinator.com/item?id=48467896)

Tags: [ai](https://simonwillison.net/tags/ai), [generative-ai](https://simonwillison.net/tags/generative-ai), [llms](https://simonwillison.net/tags/llms), [anthropic](https://simonwillison.net/tags/anthropic), [claude](https://simonwillison.net/tags/claude), [ai-ethics](https://simonwillison.net/tags/ai-ethics), [claude-mythos](https://simonwillison.net/tags/claude-mythos)

