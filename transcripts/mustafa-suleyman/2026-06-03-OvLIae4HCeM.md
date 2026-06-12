# Microsoft AI CEO unveils 7 new AI models | Mustafa Suleyman at Microsoft Build 2026

- Channel: Microsoft
- Date: 2026-06-03
- URL: https://www.youtube.com/watch?v=OvLIae4HCeM

## Transcript

Thank you.
Good morning everybody.
You know, we really are living
in the most remarkable times.
since I started working in AI,
The compute that we use to train frontier models
has increased by 1 trillion fold.
That's 12 orders of magnitude
of computation in just 15 years.
It's now clear that
a consistent exponential increase in computation
leads to predictable advances in AI capabilities.
And in the next few years,
we're going to see three more orders
of magnitude of compute
applied to train frontier models.
Intelligence is now a function of compute.
Log linear hillclimbing has become the norm.
The scaling laws are clearly holding,
and it is a remarkable time in our industry.
And so in this context,
we at MAI are building towards
what we call Humanist Superintelligence.
State of the art
AI capabilities that are explicitly designed
to serve people and organizations
and not replace them, because the type of
AI that we create really does matter.
We need an AI that places humanity first,
that always prioritizes human
well-being and human progress.
This is the core philosophy and motivation
behind our superintelligence
efforts at Microsoft,
and it shapes everything that we do.
And as a platform company,
our job
and our commitment
is to keep you
developers building at the absolute frontier.
So today,
we are very excited to announce
a family of seven new models
across image, voice, transcription and coding.
These are all built with real
attention to detail
and a commitment to making very practical
and efficient tools
that are tuned to
just how you work in the real world.
So first up, MAI Image 2.5 and its Flash variant,
two super strong models
that deliver a step change in quality,
now at number two on the leaderboard,
surpassing the score of Nano Banana 2
on image editing.
They give you precise
editing with incredible control and consistency
flash is here
for super efficient production workloads,
while 2.5 gives you
that maximum
fidelity and professional-grade performance.
They are live in PowerPoint today
they're rolling out to OneDrive,
and right now you can access them on Foundry
at a market leading quality per dollar.
Next up we've got MAI Transcribe 1.5.
This is the best transcription model in the world.
State of the art accuracy across 43 languages,
beating out
Gemini and OpenAI's flagship transcription models.
We've optimized it for real world use
so that you can produce
highly accurate transcripts for any bespoke
use case, five times faster than all rival models.
It's now being integrated inside of GitHub,
Teams, Copilot, Dynamics 365 Contact Center,
and it's now also available in Foundry,
where I'm very excited to say it is the fastest,
most efficient, and most cost effective
transcription model of any of
the hyperscalers out there.
So paired with that, we've got MAI Voice 2.
This is our latest speech generation model.
It has beautiful prosody,
natural sounding delivery,
fine-grained emotional control.
And it's available in 15 languages,
with many more coming soon.
We're also announcing Voice 2 Flash,
and that provides
the very best value and speed for ultra latency
sensitive voice agents,
which of course is the big thing in 2026.
Next up, our text foundation model.
MAI Thinking 1.
This is our first reasoning model,
and it's exceptionally strong in our target
use cases of reasoning,
and SWE tasks.
It's a 35 billion
active parameter MOE with a 256k context window.
That means that it competes in the medium size
weight class, where it's
certainly punching above its weight,
and independent
human raters on Surge prefer it in overall quality
side by side versus Sonnet 4.6.
It's achieved
97% on AME 2025.
Obviously, the key measure of its general purpose
reasoning abilities.
But most importantly of all, it's now at 53%
on SWE Bench Pro,
which places it
right alongside Opus 46 at least on the toughest
coding benchmark that's out there.
So we're very happy with that.
Now, there's plenty more for us to do
as we get this
into production and hillclimb against real-world
tasks and real-world traffic.
What is actually most remarkable
about this model,
we think, is that
it has climbed entirely from the bottom,
and that means that it hasn't targeted
any of the benchmarks specifically.
And it's done so with absolutely zero distillation.
And to us, this is critical
because it means that
the model is created
with an enterprise grade,
clean and commercially licensed data lineage.
That means that you can put it
into production
in a very trustworthy way with complete confidence.
Now finally,
I'm incredibly excited to announce
MAI Code 1 Flash.
This is our new inference efficient coding model,
which has been especially tuned for VS Code
and of course GitHub Copilot CLI.
It achieves 51% on SWE Bench Pro despite
having just 5 billion parameters.
And so it's much closer to Haiku in terms of size,
but cheaper in cost,
delivering really strong coding performance
at great inference efficiency.
And it's rolling out today inside of VS Code.
Alongside distribution on foundry
and optimization for our 1P products.
We're also very excited
to make our models
available on OpenRouter
as well as Fireworks and Baseten.
So this means that for the first time,
you're going to be able to tune the weights
directly yourself in an ecosystem of your choice.
Now, across this entire family, safety
and security have been built in from the start.
Our voice models come with protections
against unauthorized cloning.
Everything is watermarked from scratch.
We've reduced our over-refusals,
improved representation,
including for people with disabilities.
We're also publishing
a very detailed technical report today
to give you a full and transparent
understanding of how we put all of this together.
Now, one of the things
I'm particularly excited about
is that we have been carefully
co-designing our models with our own silicon.
So that means that we've optimized
MAI Thinking 1,
on our very own Maia 200 chip and benchmarked
it head to head against the GB-200.
And so on top of the 30% performance improvement
that Satya talked about earlier,
we're now seeing a further 1.4x performance
per watt gain
when we run our MAI models
on the Maia 200, end to end.
And that's huge,
because as everybody knows, at this scale,
every watt counts and silicon
and model co-design is a really key advantage
that we think is going to help
keep everybody here
right on the frontier with the most efficient
and most powerful
thinking and coding agents out there.
We're also super excited that these faster
and more efficient
MAI models are coming to the N1X
that Satya mentioned a few moments ago,
and we think that's going to be able
to deliver the very best performance
on Windows in a few months time.
Now to us,
this is what owning the full stack end-to-end
looks like.
It's the foundation of
Microsoft Frontier Tuning, lets you customize
the MAI models using our full stack
hillclimbing machine right where you want it,
and it means that the disciplined
and very relentless engineering
that has gone into building
our models, is now available
to all of you, on a platform that you can trust,
working on your behalf
to create custom agents that you will control.
So the really big thing,
of course, that's happened in the last year
is these RLEs,
reinforcement learning environments, these unique
training gyms for your AIs.
They create company and task specific agents,
adapted only to you, built on MAI models.
So for example, within Microsoft
we use our RLEs combined with our MAI models
to climb towards the best agentic
use cases on Excel.
Our MAI tuned model is now on par with
GPT 5.4 on public and private benchmarks,
whilst at the same time
being ten times more efficient on cost.
You know, and many other early adopters are seeing
similar results.
When we've tuned our models on McKinsey's tasks,
MAI delivered the highest win rate,
even outperforming GPT 5.5 and againrate,
delivering 10x greater efficiency on cost.
So to us, this is the advantage of very carefully
calibrated Frontier Tuning.
And importantly,
unlike with some of the other companies,
with MAI you don't rent intelligence
from a shared model
that learns from everybody.
Only you keep the benefits of your
hard-earned workflows,
know how,
knowledge and your own institutional data.
Only you get to control the resulting model.
And so with us, the RLEs and the models
that you build inside of them,
they become your moat.
I really think this is distinct.
It marks a new era in AI
that we're all very, very excited about.
Okay, so now just one final announcement
that I'm very excited about.
We are taking customization
and co-creation of our models
to the highest level possible.
On what I think of as perhaps
the most important application of AI, healthcare.
So today, we're very proud
to be announcing
that we're partnering with Mayo Clinic
to jointly develop a new frontier model for health
and then deploy it around the world
in their hospitals and beyond.
So this morning, please help me in welcoming
to the stage a physician,
groundbreaking researcher, president and CEO
of the Mayo Clinic, Doctor Gianrico Farrugia.
Thank you so much for being here,
Gianrico.
Now, of course, everyone will recognize
Mayo as perhaps the leading hospital in the world
with an incredible track record of research
and innovation and clinical practice.
Tell us a little bit more about what
you hope to get out of our collaboration.
Well, first of all, thanks for having me here.
Thanks to Satya as well.
Mayo clinic is known for being able
to live up to our primary value.
The needs of the patient come first.
We deliver outstanding healthcare.
We are ranked number one
healthcare organization in the world,
yet we know most people in the world
will not have access to Mayo Clinic.
So seven years ago we decided to create a platform,
the Mayo Clinic platform,
moving all of healthcare
from a pipeline to a platform.
And with our partners, that platform
now is in four continents and
and reaches about 100 million people.
It has created
the largest, to our knowledge,
deepest longitudinal healthcare
dataset in the world, multimodal,
including genomics.
So here together now
we have the opportunity to do what we do
best together,
which is to create a frontier model for healthcare.
What it means
if you're a patient,
if you're somebody interested in healthcare,
you can get clinical and logistical answers
to your healthcare.
But if you're a healthcare provider,
if you're a physician, it can give you insight.
It can act as your real-time team member
that can tell you what is likely to happen next,
but it can also prevent harm
and therefore increase patient safety
and giving valuable insights
that make the team better at giving you
what you need most, which is better healthcare.
Yeah, and I think one of the things
that we're most excited about
is that the models are already pretty incredible
at textbook knowledge.
They've read all the journals and all the papers,
but what they're really lacking
is the kind of clinical practice
and clinical expertise of your team
and your clinicians that you developed over
the last many decades.
So how do you think we might go
about using that clinical practice
to improve the performance
of the model in production?
So the exciting part here is
we each do what we do best,
and we can tackle something
that has eluded healthcare
for a long time, trusted, scalable solutions.
And to do that, you need to have the right data.
You certainly need to have the right people,
but you also need to have
a very patient-focused lens.
And between the two us,
you now have all this together
so we can build this frontier model, and then offer
safe, secure, trustworthy and of course,
effective healthcare solutions for all.
Well, our number one objective,
of course, is to put the patient first,
deliver the highest quality
we can in a trusted way,
and then hopefully share that with the world over.
So we're very excited for this partnership.
Can't wait to share more
with everyone in the future.
Us too. Thank you.
So, today marks some very, very exciting steps
that we're taking on our journey to create
Humanist Superintelligence at Microsoft.
We now have an incredible roster of seven new
world class models to keep everybody working
at the absolute frontier,
and we're really looking forward to everybody
being able to co-create your own unique agents
adapted to you that you all control.
I really feel like this is a new era in AI,
an era of AI that you control on your terms.
So let's build it together.
Thank you very much, everyone.
Captions template.
