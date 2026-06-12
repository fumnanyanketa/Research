# datasette-agent-edit 0.1a0

- Author: Simon Willison
- Date: 2026-06-07
- URL: https://simonwillison.net/2026/Jun/7/datasette-agent-edit/#atom-everything

**Release:** [datasette-agent-edit 0.1a0](https://github.com/datasette/datasette-agent-edit/releases/tag/0.1a0)

I'm planning several plugins for [Datasette Agent](https://agent.datasette.io/) which can make edits to existing pieces of text - things like collaborative Markdown editing, updating large SQL queries, and editing SVG files.

Agentic editing of text is a little tricky to get right. My favorite published design for this is for the [Claude text editor](https://platform.claude.com/docs/en/agents-and-tools/tool-use/text-editor-tool#use-the-text-editor-tool), which implements the following tools:

  * `view` \- view sections of a file, with line numbers added to every line.
  * `str_replace` \- find an exact `old_str` and replace it with `new_str` \- fail if the original string is not unique
  * `insert` \- insert the specified text after the specified line number



Rather than recreate these patterns for every plugin that needs them I decided to create this base plugin, `datasette-agent-edit`, which implements the core tools in a way that allows them to be adapted for other plugins.

Tags: [ai](https://simonwillison.net/tags/ai), [datasette](https://simonwillison.net/tags/datasette), [generative-ai](https://simonwillison.net/tags/generative-ai), [llms](https://simonwillison.net/tags/llms), [llm-tool-use](https://simonwillison.net/tags/llm-tool-use), [datasette-agent](https://simonwillison.net/tags/datasette-agent)

