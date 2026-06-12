# Anthropic Walks Back Policy That Could Have ‘Sabotaged’ AI Researchers Using Claude

- Author: Simon Willison
- Date: 2026-06-11
- URL: https://simonwillison.net/2026/Jun/11/anthropic-walks-back-policy/#atom-everything

**[Anthropic Walks Back Policy That Could Have ‘Sabotaged’ AI Researchers Using Claude](https://www.wired.com/story/anthropic-responds-to-backlash-on-claudes-secret-sabotage-on-ai-research/)**

Big scoop for Maxwell Zeff at Wired:

> “We’re changing Fable 5’s safeguards for frontier LLM development to make them visible.” Anthropic said in a statement to WIRED. “We made the wrong tradeoff and we apologize for not getting the balance right.”

There's been a _huge_ outcry about Anthropic's policy, [tucked away in their system card](https://simonwillison.net/2026/Jun/10/if-claude-fable-stops-helping-you/), that Claude Fable/Mythos would identify "requests targeting frontier LLM development" and "limit effectiveness" without notifying the user.

It's good news that they're dropping the invisible aspect of this. It would be a whole lot better of they dropped this category of refusals entirely.

**Update** : More details from [@ClaudeDevs on Twitter](https://twitter.com/claudedevs/status/2064949876463645026):

> We’re rolling out changes to make Fable 5’s safeguards for frontier LLM development visible.
> 
> Starting this week, flagged requests will visibly fall back to Opus 4.8—the same as our safeguards for cyber and bio. You will see this every time it happens. On the API, any flagged requests will return a reason for their refusal (coming to server-side fallback in the next few days).
> 
> We wanted to deploy Fable 5 to our users quickly and safely. Visible safeguards can be probed, so they have to be robust, which takes time to get right. Invisible safeguards can be targeted more narrowly, allowing us to ship quickly with very few false positives. We went with invisible safeguards for this reason—and that was the wrong tradeoff. You should have visibility into the safeguards we have in place, and why. We’re sorry for not getting the balance right.

Via [@zeffmax](https://twitter.com/zeffmax/status/2064910040503627917)

Tags: [ai](https://simonwillison.net/tags/ai), [generative-ai](https://simonwillison.net/tags/generative-ai), [llms](https://simonwillison.net/tags/llms), [anthropic](https://simonwillison.net/tags/anthropic), [claude](https://simonwillison.net/tags/claude), [ai-ethics](https://simonwillison.net/tags/ai-ethics), [claude-mythos](https://simonwillison.net/tags/claude-mythos)

