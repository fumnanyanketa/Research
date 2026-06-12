# DiffusionGemma

- Author: Simon Willison
- Date: 2026-06-10
- URL: https://simonwillison.net/2026/Jun/10/diffusiongemma/#atom-everything

**[DiffusionGemma](https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/)**

Last May Google briefly released an experimental Gemini Diffusion model. I [tried the preview at the time](https://simonwillison.net/2025/May/21/gemini-diffusion/) and recorded it running at 857 tokens/second. It was an exciting model, but Google made no further announcements about it.

That research has returned in the best possible way: as a new open weight (Apache 2 licensed) Gemma model, [google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it).

NVIDIA are currently [hosting the model for free](https://build.nvidia.com/google/diffusiongemma-26b-a4b-it) on their NIM cloud API. I used that API to [generate this pelican](https://tools.simonwillison.net/markdown-svg-renderer#url=https%3A%2F%2Fgist.github.com%2Fsimonw%2Fe5e234a6dc6eef61e209ce1629620042), which took 4.4s (according to `time uv run generate.py`) to return 2,409 tokens - so at least 500 tokens/second.

Via [Hacker News](https://news.ycombinator.com/item?id=48478471)

Tags: [google](https://simonwillison.net/tags/google), [ai](https://simonwillison.net/tags/ai), [generative-ai](https://simonwillison.net/tags/generative-ai), [llms](https://simonwillison.net/tags/llms), [nvidia](https://simonwillison.net/tags/nvidia), [pelican-riding-a-bicycle](https://simonwillison.net/tags/pelican-riding-a-bicycle), [gemma](https://simonwillison.net/tags/gemma), [llm-release](https://simonwillison.net/tags/llm-release), [llm-performance](https://simonwillison.net/tags/llm-performance)

