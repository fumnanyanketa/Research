# Approaching the AI Event Horizon? Part 2, w/ Abhi Mahajan, Helen Toner, Jeremie Harris, @8teAPi

- Channel: The Cognitive Revolution
- Date: 2026-02-14
- URL: https://www.youtube.com/watch?v=c4RR-vUEQ4Q

## Transcript

Hello and welcome back to the cognitive
revolution. Coming up, you'll hear part
two of a marathon live show that I
co-hosted with my friend Pash, also
known as Adapai on Twitter, in which we
explore AI for science, recursive
self-improvement, and geopolitical
competition.
I love doing full deep dive episodes,
but I can only cover so many topics in
that way. And so I am experimenting with
higher inensity live shows as a way to
deliver what I hope is the same
high-quality analysis but in a denser
format. In the first half, which hit the
feed yesterday, we talked to Professor
James Zo of Stanford about his work on
AI for science. Sam Hammond about how
well the US administration is doing to
manage international AI competition and
Shashana Tikovski about AI agent
behavior in the wild.
In this second half, we talked to Abi
Mahajajan, also known as Owlposting
about AI for biology and medicine,
including the foundation models he's
building at Noetic AI to better predict
which patients will respond to which
cancer treatments, and why, though he's
skeptical of many AI for biology results
that have been published to date, he
does expect trends to continue to the
point where AI is ultimately
transformative for the field. Then we
talked to Helen Toner about a report
that CET just put out called when AI
builds AI which summarizes conversations
from a closed door workshop in which
participants tried but failed to
establish any consensus expectation
about the impact of automated AI R&amp;D
ultimately leading to the conclusion
that automated AI R&amp;D is simply a major
source of potential strategic surprise.
Then finally, we have Jeremy Harris
talking about the very challenging
position we find ourselves in, where we
lack both the technical means to
reliably control superhuman AI systems
and the trust and coordination
mechanisms needed for the US and China
to address this problem collaboratively.
Plus, a bit of discussion of how he
maintains situational awareness and how
our respective personal productivity
stacks are evolving.
As you'll hear, the challenges of making
sense of such massive disagreement among
leading AI experts and simply keeping up
to date with AI developments coming at
us daily comes up repeatedly in these
conversations. And to be real, nobody
seems to have perfect solutions. One
partial solution that I can't recommend
though is using large language models to
help identify blind spots. And for that
purpose, I am really enjoying the blind
spot finder recipe that I recently
created on Granola. Granola works at the
operating system level, so it can
capture all of the audio into and out of
your computer, including, if you wish,
the contents of this episode. And its
recipe feature can work across sessions
to identify trends, opportunities, or
yes, blind spots that only become
apparent with that zoomed out view.
Obviously, this is a tool that grows in
value over time, but if you want to try
it today, I suggest downloading the app,
starting a session while you play this
episode, and then asking it to identify
blind spots based on this conversation.
What is so cool about this feature, for
active granola users at least, is that
the blind spots it identifies for you
will be different from the ones it
identifies for me.
As I said last time, this was fun for
me, but especially because it is a new
format. I would love your feedback. Do
you feel that you got as much value from
this more timeefficient approach as you
usually do from our full deep dive
episodes? Or did we miss the mark in
some way? Please let me know in the
comments or if you prefer by reaching
out privately via our website cognitive
revolution. Or by DMing me on your
favorite social network. With that, I
hope you enjoy the cognitive revolution
live from February 11th co-hosted with
Adapai.
&gt;&gt; I'm going to add Abby Mahajin. Uh Abby
is owl posting uh online and he uh works
on AI for cancer at Noetic AI.
&gt;&gt; Abby, welcome.
&gt;&gt; Yeah, great to meet you. Thanks for
having me on.
you have the great distinction of being
recommended to me as the ZV for AI and
biology and the intersection of those
two. So big shoes to to fill, big
reputation to live up to, but excited to
meet this actually the first time we've
um properly spoken.
&gt;&gt; Yeah. And I learned from Ron Ron Alpha
that you built an entire competitive
intelligence platform LM based to feed
the clinical analysis pipeline. So I and
also that Claude recommends every every
cancer drug it sees. So let's let's
let's talk about that.
&gt;&gt; Um yeah, the the typical way that a lot
of um like increasingly a lot of
bioarmmers are interested in asset
acquisition as opposed to just
developing their drugs from scratch.
This is partially because like China's
pumping out a lot of very interesting
pre-clinical assets. Why not just buy
those for a few million dollars? They've
already done the optimization. Let's
just run those in patients. Most of the
time the way you look for these drugs is
either you mine your personal network or
you have these like clinical trial
aggregation platforms that like help you
do the job. Both of these are like
obviously lossy and like a better way is
just like scrape the entire semantic web
yourself and annotate every single
investigational drug you find with your
company's priorities, what you think is
like important to look for modalities
that are particularly interested in.
organize that all into a table, rank it
by some metric, and then you give that
to the therapeutics team to work off of.
Obviously, there's still a human due
diligence step. These models like still
are not perfect. Even like 5.2 5.3 not
perfect, but it's pretty good.
&gt;&gt; Uh, do you have an internal eval that
you run and when you swap model engines,
you know, regularly, do you do you
upgrade every every time a new model
engine shows up? You evaluate and then
decide.
&gt;&gt; It's like a pretty hacky process. the uh
the our metric for at least my personal
metric for evaluation is like amongst
the drugs that our therapeutics team are
really interesting and like want to move
forwards on does the next version next
generation of the LM continue to
recommend those drugs as these are like
very good and I don't actually think it
was pretty good at the very beginning I
only built this like pipeline a few
months ago it remains pretty good now I
don't think there's been like any
dramatic jump I partially think this is
due to like identifying what makes for a
good drug is a very like qualitative
process and a very vibe based like it
depends on the economic status of the
company. It depends on like do we know
anyone there because oftent times these
companies don't make it easy for you to
give them your money. It takes a super
long process to figure that out. Yeah,
it's pretty good though.
&gt;&gt; So I definitely recommend your blog
outposting.com.
I still got um quite a bit of archive to
work my way through, but I want to throw
a couple of what I thought were kind of
your more interesting, arguably hot
takes at you and then um get you to kind
of double click into some of the
intuition and implications of those.
&gt;&gt; Um one, because we're obviously in a
moment now where there's a tremendous
amount of interest in creating AI
scientists of of all kinds. Um, and one
of the big bets that companies are
making with some serious capital behind
them increasingly is that they're going
to close the loop by allowing AIs to
design and run their own experiments
through some sort of automation, feed
that data back in, and they're going to
get reinforcement learning from
basically experimental result.
&gt;&gt; Now, one of the things that you had said
in one of your posts is that there's not
a lot of verifiable ground truth in
biology.
&gt;&gt; Mhm. And [clears throat] I would love to
understand what that means exactly. And
then what does that mean in terms of the
ability to close that loop? Is there
some sort of fundamental messiness or
uncertainty that you see as kind of at
least in the near-term being irreducible
that would become the functional limit
on how much systems could learn from
that kind of closed loop
experimentation?
&gt;&gt; Yeah, I I like to say that biology has
no verifiable ground truth is probably a
little bit hyperbolic on my end. But
what I will defend is that there's not a
lot of verifiable ground truth for the
most clinically valuable problems. So
like yes, there there is verifiable
ground truth of like does this protein
exists in the solution? Is this like
variant that you uh your NGS sequencer
identified? Is this like true? Those are
both verifiable. But I don't think
you'll quite see the same explosion of
intelligence that happen in math and
code as you will in biology because like
rewards are like so cheap and so easy to
get in those fields. In biology,
it's just like an such a long iterative
process to get any iota of information.
So like one one easy analog to this is
like like training an RLVR model on the
on the task, right? The bestselling
book. Um there is technically a
verifiable reward, right? There's like
book sales, there is the the the country
that the author is writing from all
these sources of data, but it takes 18
months to get that singular data point.
And when you get that singular data
point, it's very hard to trace it back
to any one of these things. And like
like one one like biology grounded
example of this is like let's say you
want to do RLVR on toxicology
prediction. This is arguably the the
thing that sinks the vast majority of
phase one drugs out there. Toxicology
sounds like a very simple topic. It is
not. You can a drug can be toxic on the
order of seconds like snake venoms. It
can be order toxic on the order of
months, years. It potentially doesn't
kill an animal. It maybe just leads to
like cognitive deficits, heart damage.
Oftent times it's dose dependent. Also,
it could be species dependent. All these
like measures of toxicity.
There's like no real way to understand
them other than just observing them in
vivo like in vivo setting and then
seeing what they're read. There are
companies like one one SF based startup
called Axiom which is trying to create a
um like a model that can very easily
tell like given the small molecule what
is its tox toxic toxicity impact on
hypatocite cells in a cell dish. It's a
very clean simple problem that probably
saves like months of time in
pre-clinical settings but it doesn't
poke at like the much more important
problem of how does this perform in an
animal.
&gt;&gt; Just a segue here. So, Isomorphic Labs I
think yesterday announced
uh they have a they have a predictive
model uh which you know doubles the
performance of Alpha 3 on key
benchmarks, binding affinity, pocket
identification, structure prediction.
How does that fit in to how things go?
Like is this is this actually useful or
is this does this just create more
targets which need to be validated
anyway? Uh and it's not that useful.
Yeah, I mean I obviously like very
incredible piece of work isode and I'm
like no longer in the protein
engineering field but I I like I think
the benchmark they did like that like
leftmost plot they're presenting on
that's an incredibly difficult benchmark
to get better at and they're 2x better
than what was previously. So very good
but I'm sure like you've heard the
sentiment that the field is already a
wash with many really good pre-clinical
assets and the bottleneck is actually
how well do these work in patients. It's
it sounds perhaps obvious that if you
get better at this pre-clinical design
step, you get better at putting it into
humans.
&gt;&gt; That's a story that has been told for 10
years. It is not obviously clear that
any of it has borne for I imagine at
some point it will, but there isn't
really strong evidence to suggest that
it does. There's actually this really
great paper that um a chemistry paper
that came out uh just a few days ago
called the affinity advantage. That
paper is probably like one of like the
strongest bull cases that being able to
like optimize the optimize every facet
of like every protein that comes in
through pre-clinical pipeline
&gt;&gt; has like like nonlinear or superlinear
benefits to the drug development process
and it's just like a matter of time of
till these models get like even better.
It's not an opinion I share but I'm
sympathetic to it.
in uh Dario Amade's you know I think one
of his papers the blog post that he had
machines of living grace I think he
tried to kind of map out how he thought
biology developments in biology work and
he kind of pointed out that a lot of the
major developments in biology comes from
better kind of imaging and sensing
techniques that allow you to kind of
like look deeper and understand deeper
on what's happening in there and then
after that it becomes easier to do a lot
of other things downstream of that you
know starting microscopy and you know
which led to all all the downstream
developments from there and etc etc etc.
What do you think are potentially the
developments which might be coming up in
the next four to five years that might
do something like that? I guess like I
would like vaguely gesture to um
building models that generative models
of human invivo biology. I think like
there's layers of discussion to be had
like what other instruments do we need?
What other modalities do we need? But I
think there's a lot of low hanging fruit
in simply collecting a huge amount of uh
highly rich data collected from like
real like human tumors, intestinal
lesions, plasma readouts and just
feeding a model with that information
and like not paying attention to any of
the in vitro or like otherwise
biologically unrealistic settings. And
then from there maybe you get access to
like a human a genuine bonafide human
simulator of biology. And maybe that's
like a lot helpful for like fixing the
like current state of 97% of oncology
trials fail. I think that like the the
Daario pitch of like scientists in a
data center like turnurning out
interesting ideas. I think there's
already like [laughter]
tens of thousands of PhD students
turnurning out very good ideas. Most of
them can't be validated because it's too
expensive to do it.
&gt;&gt; Hey, we'll continue our interview in a
moment after a word from our sponsors.
Are you interested in a career in AI
policy research? If so, you should know
that Gov AI is hiring. 10 years ago, a
small group of researchers made a bet
that AI was going to change the world.
That bet became Govai, which is now one
of the world's leading organizations
studying how to manage the transition to
advanced AI systems. Gov AI advises
governments and companies on how to
address tough AI policy questions and
produces groundbreaking AI research.
Govai is now hiring its next cohort of
researchers to tackle hard problems that
will define AI's role in society. The
research scholar position is a one-year
appointment for talented, ambitious
individuals looking to transition into
the field. And they're also hiring for
research fellows, experienced
researchers doing high impact AI policy
work. Past scholars and fellows have
defined new research directions,
published in leading media outlets and
journals, done government seconments,
gone on to work in leading AI labs,
government agencies and research groups,
and even launched new organizations.
Applications close on February 15th, so
hurry to governance.ai/Opportunities.
That's governance.ai AI/Opportunities
or see the link in our show notes. Want
to accelerate software development by
500%.
Meet Blitzy, the only autonomous code
generation platform with infinite code
context. Purpose-built for large,
complex, enterprisecale code bases.
While other AI coding tools provide
snippets of code and struggle with
context, Blitzy ingests millions of
lines of code and orchestrates thousands
of agents that reason for hours to map
every linele level dependency. With a
complete contextual understanding of
your codebase, Blitzy is ready to be
deployed at the beginning of every
sprint, creating a bespoke agent plan
and then autonomously generating
enterprisegrade premium quality code
grounded in a deep understanding of your
existing codebase, services, and
standards.
Blitzy's orchestration layer of
cooperative agents thinks for hours to
days, autonomously planning, building,
improving, and validating code. It
executes spec and test-driven
development done at the speed of
compute. The platform completes more
than 80% of the work autonomously,
typically weeks to months of work while
providing a clear action plan for the
remaining human development. Used for
both large-scale feature additions and
modernization work, Blitzy is the secret
weapon for Fortune 500 companies
globally, unlocking 5x engineering
velocity and delivering months of
engineering work in a matter of days.
You can hear directly about Blitzy from
other Fortune 500 CTOs on the modern CTO
or CIO classified podcasts or meet
directly with the Blitzy team by
visiting blitzy.com.
That's blitzy.com.
Schedule a meeting with their AI
solutions consultants to discuss
enabling an AI native SDLC in your
organization today.
So that connects pretty directly it
seems like to what you are doing in your
work on cancer at Noetic right you guys
are focused first of all at the roughly
the clinical stage and try to predict
what
drugs will work best for a particular
patient given some
relatively deep data about their
specific condition. Right. So maybe walk
us through what that looks like. I I was
interested to learn that it is basically
a foundation model, you know, with with
lots of different um data sources thrown
into it and also
that it sort of is trained with this
kind of um
masking strategy where the the idea is
that the model has to learn how to
predict from partial data, whatever
partial data it might have. And I'm a
big believer in that strategy because
there just is so much obviously so many
modalities and and so much you know
noise going on inside the system that we
don't understand. I've been a big kind
of speculator about that being a driver
of how AI can help in health over time.
So give me the kind of double click past
what I have been able to learn with
online research into what you guys are
doing.
&gt;&gt; Yeah. So the the like let me start with
perhaps like the economic pitch for
noetic like 97% of oncology trials fail
and you could look at that and say like
wow we're awful bad at designing these
drugs maybe we should get better at
designing them but like one interesting
phenomenon is that if you look at a lot
of the papers that are published after a
cancer clinical trial fails there's
usually some patients who did respond to
the drug or respond to the regimen they
were they were on and the the
researchers try really hard to figure
out like like what is like what is the
exact biological archetype that makes up
this response population? And they
always come in with something super
complicated, very heterogeneous. It's
like this particular cytoine group or
granzyme granzyme genes were highly
expressed in the response population. It
never leads to anything particularly
interesting. Um, and so one argument you
could make is that maybe the biomarkers
that define patient response for this
particular drug is like non-human
legible. Like you need a blackbox
biomarker to encapsulate whatever that
piece of information is. And so noetic
is kind of built around that thesis. We
collect um vast amounts of human tumor
data. We profile them at four levels of
modality. So pathology which is kind of
like the blue chip that like almost
everyone has. Spatial proteomics a 16
plex panel to identify cell types.
Wholex spatial trans transcriptto so
this is 19,000 genes over the entire
surface of a tumor. Then to identify
like functional state of the tumor and
then exom sequencing to identify genetic
alterations. So like is this K RAS
positive? is this SDK knockout and so
on. And then the the the ML angle is
that you train yeah like exactly what
you said like a self-supervised mass
model in the hopes that like one you get
a very good representation of any given
tumor that walks into the door. So you
you now have like the ability to place
like in the universe of all the cancers
I've seen where does this patient fall
in that embedding space and so that's
what like we are doing a lot of we uh
gather patient samples from from like
people who have ran clinical trials.
patient samples. We profile them. We run
that through the model. See if the
response population falls in a different
area than the non-response population.
And if it does, maybe we have access to
a biioarker that no human on earth
understands, but we uniquely are able
to. The more interesting thing you can
do with us is use it, use the generative
capacity of the model and knock out
specific transcripts or specific genes
and see how that changes the expression
of transcripts within the tumor micro
environment. You can imagine there's
this like uh concept that's appearing in
the cancer literature called nudge drugs
which are drugs that don't actually
operate on the like the immune system or
like really the cancer the cancer site
itself but rather push it in a direction
that make makes it more sensitized to
other drugs. And so you can imagine, oh,
I I'll I'll knock out this uh this
particular transcript and then I will
like hallucinate what would it be like
if I add a kit, which is like an immune
checkpoint block that operates on the
PD1 access into into the site of the
tumor and maybe now you predict like oh
the tumor is like highly inflamed. It's
like hot. There's there's a high chance
that it'll just like melt away entirely.
Yeah. Like those are the two big
economic and ML strategies we're
pursuing.
Yeah, that's really super exciting when
you talk about the
first of all identifying or or having
access to I think was your phrase
biomarkers that nobody else has access
to because you can see a sort of
divergence in where different patient
populations fall in embedding space. Do
you have any means and you know if not
maybe I can introduce you to the good
folks at Goodfire who just did a version
of this with identifying biomarkers for
Alzheimer's that had been previously not
identified but do you have any means
right now of saying okay because one
thing to say these things are falling
you know these patient populations are
falling into different parts of
embedding space it's another thing to
then say why like what is it actually
that is causing that divergence how far
are you guys along in terms of being
able to make interpretable what it is
that the models have learned from their
unsupervised training.
&gt;&gt; Yeah, the uh the the the prim and good
fire post was very interesting to read.
We do have like a mechan research group
internally which like is exploring these
ideas. I have no doubt they'll find
something interesting. But one argument
against doing this at all is like why do
we care about interpretability? like in
in a clinical setting, we might care
about interpretability because like the
FDA gets very upset with you if you try
to do anything that's blackbox. And
maybe that was true a year ago, but
circa I think September or August 2025,
there was a pathology AI company called
Artera AI which came up with um what is
it basically a companion diagnostic as
to like like they intake in the
pathology slide of your prostate tumor
and they will predict whether you
respond you will respond to androgen
deprivation therapy. It's they have no
idea why this model works. They've like
retrospectively validated on thousands
of patients from prior phase three
trials and the and the FDA was fine with
that. So one argument against doing that
interpret all is that why why spend a
ton of resources exploring something
that the primary regulatory agency you
care most about doesn't really mind
whether or not it's white box or black
box.
&gt;&gt; I guess the obvious answer would be
because presumably that knowledge would
be a great input to further experimental
ideas or other knowledge.
Maybe you think it it's just so hard to,
you know, I don't know, there's no
verifiable ground truth or something
that would prevent that from working.
&gt;&gt; I Yeah, I guess like like like what like
um the like what was discovered in like
the preventment could fire pose. I
forgot what exactly it was, but it was
something about like like fragment omix
like something about how the like genes
are fragmented like is some potential
bioarker for Alzheimer's. It's a very
interesting piece of work. It sounds
very expensive to validate it. And so I
imagine like we would run into the exact
same problem like maybe we get like we
have a very good hypothesis like what
for what comes out of the system but we
already have so many other hypotheses
potentially ones that are like even have
like higher literature backing. I could
imagine a world in which like meant as a
field gets so good that you can like
triage this thing's going to be really
easy to validate this things going to be
really hard to validate. But right now,
the way that a mechan usually works in
biology is like you're staring at like
semantic segmentation plots a lot and
like trying to think like, oh, is this
real or is this fake? Is this the is
this the model? Like identifying some
very sperious correlation and that time
just simply feels better spent
elsewhere.
&gt;&gt; Interesting. Okay, here's another idea
of a place that it might be well spent.
Continual learning, of course, a huge
theme right now in AI in general.
The first conversation we had today with
professor James Jiao from Stanford
included a little talk about their
recent paper learning to discover at
test time where they're using you know
here like auto reggressive large
language models um and giving them
problems like make a faster CUDA kernel
or you know find a a a better solution
to this math problem you know with a
lower bound than than anybody has
previously found or you know find a a
better solution to this math problem,
you know, with a lower bound that
anybody has previously found. And they
interestingly
kind of flipped the usual model of like
what we're trying to do when we create
an ML model on its head and said, "What
if we just try to get this model to
produce the single best answer that we
can, and we don't care if it
generalizes, and in fact, we'll probably
throw away this model after this like
test time fine-tuning. What we want is
the answer." And they they were able to
find at like relatively reasonable cost,
like $500 compute cost, that they were
able to actually get some new
state-of-the-art answers on some of
these highly technical questions. If I'm
a cancer patient and you've got a a
general foundation model, a question
that naturally occurs to me is like, can
you fine-tune this on my data? Can we do
some like test time tuning? Can we do
sort of intensive masking on like just
my samples and like really dial this
thing in to understand my particular
biology? And then would it be if we did
that would it be like more accurate for
me? Do you think that does that line of
thinking have legs and why or why not?
&gt;&gt; So I I actually actually uh looked at
the paper and they actually have a
section for biology. They they do like
single cell RNA denoising using this
like test test training model which I
thought was really interesting. I I
guess my instinctive answer is it's an
interesting idea. it very well might
work and it falls into like the bucket
of ideas that we would simply have to
try it until like to make sure that it
does or does not work. The results for
single cell RNA denors that's in the
James Shiao paper are like certainly
good. They're like they're better than
the state-of-the-art, but they which I
thought they like for each one of these
case studies, they attached like a note
by like an actual domain expert saying
like how useful is this in practice? And
the domain expert in question for the
single cell RNA section did say like
this is very cool, but like at the end
of the day, we don't really care about
the results of single cell RNA denorsy.
We care about some biological utility
that is underlying that. And so maybe
you get better at solving this like
verified task problem, but that doesn't
translate to anything actually useful.
Maybe it would be like for the response
non-response prediction case, but it
kind of just sounds easier to fine-tune
the model like using normal supervised
supervised learning. Um like why go
through the RL process if the end result
is like binary, you know, like I think
they even called out in the paper like
the setup isn't really meant for binary
or sparse learning tasks. It's meant for
like fuzzier things. Yeah.
&gt;&gt; Yeah. That they're working on that, but
it's not done yet. I guess
maybe zoom out and like
you you kind of alluded earlier already
to this idea that a lot of people think
we just need better ideas for drug
candidates. And your consistent position
is like that's probably not really the
bottleneck. And you made a really
interesting point around how the ability
to evaluate a more accurate ability to
evaluate those candidates drives a lot
more value than just throwing a lot of a
lot more candidates through a pipeline.
&gt;&gt; Uh the quality of the pipeline matters
most uh more than it's like scalability.
So
again, I think you you kind of have
suggested where you think this can come
from with just like large scale
foundation model style training, but
give us the the next level of depth on
that. Like why why are all these other
ideas not so exciting? And is this
basically just a bitter lesson sort of
idea where all your cleverness is going
to be washed away by scale and so keep
your eyes on the prize. you gota data
max and compute max until you solve it
all. Is it is it kind of that
&gt;&gt; I I guess I kind of view things in like
three ideological camps. The first of
which like like like the first one is
like maybe us like we're index very
heavily on like human data is the only
thing that matters. You can't start from
like in vitro settings and bootstrap
your way up to something more
complicated. You need to start with the
more most complicated thing to begin
with. The second camp is very interested
in modeling like single biomolelecules
and like their interactions and in the
hopes that like maybe you can't
bootstrap your way upwards, but you
raise the absolute like success rate
from maybe 5% to to 20% and maybe that's
all you need. And I think like that like
the second camp like defines the vast
majority of ML bio companies that exist
today. I think like some of them have
clinical candidates that are ongoing
right now. We'll see what the results
are. I think generally it doesn't seem
like there has been like a massive step
change in their ability to design drugs
and this is not like like knocking them.
Drug discovery is hard. It's
everything's a bet at the end of the
day. The third camp is it's like maybe
it doesn't it's not really a for-profit
thing but you can just like improve the
clinical trial process to begin with and
this is arguably the path that like like
China like this is like China's main
advantage. So they're able to run
clinical trials far more cheaply than
anyone else. Partially because of like
lower cost of human labor, but also
because they've just like set up the
system pretty nicely such that it's not
such a a huge regulatory and financial
headache to get things going. This has
like some downsides. Drugs are treated
innocent before proven guilty. The FDA
is the other way around. But the obvious
benefit of doing that is like you're
betting neither on the AI in human data
getting better or the AI in vitro
settings data getting better. you're
trusting that the typical drug design
process, if just made slightly more
financially efficient, will like improve
things on it. I think all three of these
are important and I think it would be uh
probably like grandiose of me to like
assign an unequal waiting to any one of
them. Each one feels important to push
on.
&gt;&gt; There have been some interesting
&gt;&gt; Oh, sorry. Let me
&gt;&gt; I'm going to take a little bit of a
segue to something you said earlier
which is that um a lot of the new INDs
are coming in from China.
&gt;&gt; Yeah. Like what what is what has
happened in the last like couple of
years. Uh is it an AI thing? Is it you
know I the CEO of Jenko Bioworks was on
TVP and yesterday he said they just have
more hands and some people believe it's
a regulation thing. Some people believe
it's a clinical trial registration. they
they can just register more people like
what is driving some people believe it's
a US cost thing what is driving this
transfer of you know basic R&amp;D to China
at this point
&gt;&gt; I I I think like this particular subject
is very deep it's not something I have
expertise in I like my my instinctual
thought is that there are many different
answers to this and the one that I'm
most like I think is most interesting is
the idea that like China was always like
was always like like a very good
generics manufacturer and that's like
that's where they started. Slowly they
extended their way into like Wooi having
a very good CRO ecosystem and then at
some point enough talent began to be
incubated in China where they began to
realize we have all this infrastructure
here why not just develop our own drugs.
&gt;&gt; And [clears throat] there is something
very important about having this like
very close interplay between both the
person who is designing designing the
drug and the person who is actively
doing wet lab assays on the drug.
Whereas in America, you have like a
super long feedback loop of like I need
to get my SAP together. I need to go
reach out to VCs. I need to go buy a
lab. Whereas in China, that ecosystem is
a little bit set up already. Actually,
maybe the only missing part is that the
VCs are still like not super they're
more like like risk averse than perhaps
VCs in America. But the collocation of
like the grunt work and the intellectual
work is actually surprisingly important.
A few months ago, actually last year, I
interviewed one of the very few people
doing novel biotech research in India, a
guy named Soham who runs a company
called Popfax. He said like this is the
primary reason why he expects not only
China to start producing really
interesting drugs, but also potentially
India, potentially Egypt, places where
there is intellectual capital. There's a
lot of hands and it's just like those
combination lead to really good like
compounding results.
&gt;&gt; Indeed. and and does that accelerate
with the AI models this kind of co AI
co-scientists does that does that mean
that you know even if they don't have
that much intellectual capacity yet they
can they have the hands to to carry it
out
&gt;&gt; I guess like this is this is something
that's like it's a little bit opaque to
almost everyone as to like what exactly
is the level of um how impressive are
the bio AI models coming out of China I
think there's certainly some interesting
work that has been done it's not clear
to me that there's anything like
radically new there that won't be found
anywhere else. A fair amount of it is
like
like I like I don't want to say this in
a disparaging way, but it is like like
scaling up stuff that was originally
developed in either the UK, London, or
America.
&gt;&gt; And there's like nothing like you there
hasn't been really like a deepse thing
where there's something like radically
crazy that comes out of any of the
Chinese labs. I obviously could be wrong
on this though. There's I think the
whatever the bio AI labs are doing in
China, there's like much less American
visib visibility around it.
&gt;&gt; The worst thing about automation is how
often it breaks. You build a structured
workflow, carefully map every field from
step to step, and it works in testing,
but when real data hits or something
unexpected happens, the whole thing
fails. What started as a timesaver is
now a fire you have to put out. Tasklet
is different. It's an AI agent that runs
24/7. Just describe what you want in
plain English. Send a daily briefing,
triage support emails, or update your
CRM. And whatever it is, Tasklid figures
out how to make it happen. Tasklid
connects to more than 3,000 business
tools out of the box, plus any API or
MCP server. It can even use a computer
to handle anything that can't be done
programmatically.
Unlike Chat GPT, Tasklet [clears throat]
actually does the work for you. And
unlike traditional automation software,
it just works. No flowcharts, no tedious
setup, no knowledge silos where only one
person understands how it works. Listen
to my full interview with Tasklet
founder and CEO Andrew Lee. Try Tasklet
for free at tasklit.ai and use code
cogrev to get 50% off your first month
of any paid plan. That's code
cogrevllet.ai.
Your IT team wastes half their day on
repetitive tickets. And the more your
business grows, the more requests pile
up. Password resets, access requests,
onboarding, all pulling them away from
meaningful work. With Servil, you can
cut help desk tickets by more than 50%.
While legacy players are bolting AI onto
decades old systems, Servil was built
for AI agents from the ground up. Your
IT team describes what they need in
plain English, and Servil AI generates
productionready automations instantly.
Here's the transformation. A manager
onboards a new hire. The old process
takes hours pinging Slack, emailing it,
waiting on approvals. New hires sit
around for days. With Serville, the
manager asks to onboard someone in
Slack, and the AI provisions access to
everything automatically in seconds with
the necessary approvals. It never
touches it. Many companies automate over
50% of tickets immediately after setup.
And Servil guarantees 50% help desk
automation by week four of your free
pilot. As someone who does AI consulting
for a number of different companies,
I've seen firsthand how painful manual
provisioning can be. It often takes a
week or more before I can start actual
work. If only the companies I work with
were using Servil, I'd be productive
from day one. Servil powers the fastest
growing companies in the world like
Perplexity, Vicata, Merkor, and Clay. So
get your team out of the help desk and
back to the work they enjoy. Book your
free pilot at servil.com/cognitive.
That's sv.com/cognitive.
&gt;&gt; Uh, okay, Nathan, go ahead. One big
question I have is kind of I find it
very hard to calibrate myself on how
excited I should be about all these AI
for biology and AI for medicine
developments. I know that,
you know, there's always these kind of
headlines, AI does this, AI discovers
this drug. You know, I've done episodes
of the of the cognitive revolution on
it. One with Jim Collins, you know, he
has created a bunch of antibiotic
candidates. You know, there's a long
list, right? Professor Jou did the
nanobodies thing that came out of the
virtual lab. To hear him talk about it
earlier today, it sounds like those were
like reasonably well validated. But then
you always get this other side too
that's like well not so fast you know
it's all very messy we got a long way to
go you know most of these things don't
pan out and I feel like that sort of
parallels the debate that we hear in a
lot of different domains where you know
even in like programming which is one of
the more let's say legible domains we've
got something like a meter study that
showed slowdown of developers and that
was very confusing I'm like still quite
confident that it's making me faster and
I kind of want to throw that away or you
know there's of course just a lot of
denial and cope out there and all sorts
of motivated reasoning. How should one
try to ground their worldview?
Obviously, you know, subscribing to
alposting uh is something everyone
should do, but what else would you
advise me? Like how how can I patch
these blind spots in my worldview or or
get to a better position from which to
have my own sense of what really counts,
you know, what really matters and what
doesn't because, you know, again, this
happens all over the place where there's
this disagreement even among like some
of the most informed people about just
how big can AI reason or like how big of
a deal is it going to be. Uh, but in
biology, it's particularly hard for me
to make sense of. So, I' I'd love to um
get some tips for how to climb the
learning curve faster.
&gt;&gt; I've actually uh written about this in
the past a very long time ago. Uh the
title of the article is five things to
keep in mind when reading biology ML
papers. The the long and short of it is
the evaluations in biology I think are
very difficult. And so the vast like you
see this thing about like um in like
more typical wet lab biology of like oh
we cured cancer but it's in a mouse who
knows when it'll actually translate to
humans. There's a very similar
phenomenon in a lot of biology ML papers
where they're doing something that feels
like it should be useful but there's
like a lot of things that they're
probably hiding from you when explaining
the results that would only be obvious
to a domain expert. One one I think
really funny example of this is like
like small molecule binding affinity
papers. I I've I've written about like
one company's work in this but they
found that these like let's say you're
able to predict like these set of
molecules bind to this target these set
of molecules do not bind to the target
and you you're very happy with yourself.
You publish a nature article about it.
what they what these uh folks at a
company called Lee Bio found is that
this can often be confounded by which
chemists actually produce the molecule
in the first place because some chemists
are very attached to specific targets.
They're very good chemists, so they
often produce things that like bind to
that specific target. And these
chemicals like very importantly, all
look very similar to each other. And it
is this type of similarity that is like
very human vibes based and it's hard to
pin down to a singular metric. And so
they found that like these modes like
often confounded by like author overlap.
I think this like and then like these
problems just like appear over and over
again across like the in vitro biology
like biomolelecule generation where like
you can be confounded by variables that
you did not know even existed in the
data set. And so I I would probably like
like name that as like the thing to be
most aware of when reading these papers.
I like there there are like a few people
I like trust on Twitter and like people
in real life who can give a pretty good
overview of any arbitrary paper, but
like I think like with like LMS like
popular science people often like
retweet them and say like this is
transformative and like more often than
not they're probably correct opus 4.6
like genuinely crazy. I think when
people do that for bioml papers, there's
like a 50-50 chance that they're
completely missing the point because
they don't they're not in that field and
they don't understand how the failure
modes emerge in these models.
&gt;&gt; Yeah.
&gt;&gt; Do you think that an opus can like help
me identify those blind spots? Is it
&gt;&gt; the Sorry. Go ahead. Go ahead.
&gt;&gt; Yeah. Is it good enough to do that?
&gt;&gt; I I actually I've written an article
about this also. It's titled uh can can
01 preview find mistakes amongst 56 MLSB
papers? MLSB is a structural biology
workshop at Nurups and it's not very
good at it. Uh like this was like
obviously last generation of models
maybe it would be a lot better but
there's a there's um there there's some
problems that are going to reoccur in
almost every biology ML paper of like oh
your train sizes aren't large enough
your test sizes are like not stratified
correctly but like you kind of just like
learn to pick your battles in this field
and you just move on. There's like a lot
of more fundamental problems with
article with these papers that LLMs in
my experience just like often miss
entirely. I think the funnest like I in
almost every article I've written I have
found that like LM tell me something
about this particular sub field that the
domain experts completely disagree with
and they say like like that is not how
you should think about this domain. It's
like that's not the real problem we were
actually worried about. I don't know why
this is the case. It's it's kind of fun.
It's like like a domain of science that
LM still haven't quite captured human
taste.
&gt;&gt; Yeah. Fascinating. Okay. That leaves uh
a lot of work in front of us. Do you
want to go back briefly before we break
to knowetic again? I mean I've um
fortunately my son is doing well. He
recently got cancer three months ago.
I've like had a you know intensive crash
course in cancer and I hope to be able
to close the book on it and you know
return it to a more intellectual and
less personal uh interest going forward
and I think we're on good solid track to
do that but how I think you've
demonstrated in this conversation that
you're like not getting too carried away
with the promise of what AI systems can
do. We've got the data center of
geniuses. We've got the century of
progress compressed into 5 years kind of
visions. How much would you shave off of
those notions just to describe your own
expectations of what Noetic can do
specifically and and maybe what the
field more broadly is going to be able
to accomplish. I think um I'm very
optimistic that like human simulation
companies like akin to noic but I think
there's other players out there as well
will be able to vastly help with the
results of a few at least a few clinical
trials within the next few years that
feels like almost
like like you're not even paying
attention too much to the trend lines.
I'm almost like like indexing on like
what we're capable of today. I think
it's like pretty obvious like there like
there's papers going back like year like
years that are able to show like oh
we've developed an MLM or is able to
better able to stratify patients the
problem has always been like an
economical one and like how do you
actually deploy this in a real setting I
think we'll we'll be able to do that
just fine I think phase one phase one
drug uh sorry the failure of phase one
drugs will go down and I think this has
already been slightly proven now in like
I think a McKenzie study that was done a
five year a few years ago
that show that like AI design drugs have
like a 5 to 10% lower failure rate,
which maybe noise, maybe real. I do kind
of expect those trend lines to continue
a little bit. Where I'm like most unsure
of is whether these models will able to
discover brand new targets entirely,
which is ultimately what like people
care about. I think there's like a I
think like believing that these models
will be able to find like new targets
far faster than humans would really
requires you to index heavily on the
trend lines. Um, and I'm a bunch of
these index on the trend lines. So I
that these models will be able to
deliver very good target finding. But
I'm also very sympathetic to the mindset
of finding targets is just such an
unbelievably hard problem that the
models like will not make a dent in it
because you need this like human
iteration feedback loop and unless you
build a really good human human
simulator which is our bat like you're
not going to get get close to solving
that problem.
&gt;&gt; The way I put it is usually you can kind
of see like one order of magnitude ahead
maybe two. No one can see three orders
of magnitude ahead. It's just not
possible. you you have no idea what's
going to happen.
&gt;&gt; Abi, thank you so much. I I learned a
lot from this and uh hope to see you
online. Hope to see hope to read more of
your uh more of your blog.
&gt;&gt; Yeah, absolutely. Thanks for having me
&gt;&gt; Thanks for being here.
&gt;&gt; We'll be working our way through all
posting archives for some time to come.
&gt;&gt; Byebye. Our next guest is Helen Toner
who runs CISA at Georgetown. is a former
OpenAI board member and there's two
competing views here. She has on the one
hand the intelligence explosion is
coming. On the other hand, AI
capabilities may be permanently jagged.
So, uh let's add her to the stage.
Helen, nice to have you.
&gt;&gt; Hey, thanks for bringing it at the end
of your marathon. I'm impressed you guys
still going strong.
There's so much to cover, you know, and
uh we've all got to accelerate our our
personal productivity timelines and and
try to pack more information into, you
know, the same amount of time. So,
experimenting with with ways to do that.
&gt;&gt; I should talk super fast.
&gt;&gt; Yes, please. Um that's honestly one of
my reservations about live content is I
listen to everything at 2x speed and I'm
like I can't listen to it 2x speed if
it's live. So,
&gt;&gt; and I my my constant struggle is to talk
slower than I naturally want to. So, if
you want me to talk double speed, I'm
here for it.
&gt;&gt; Please go fast as you want. Go for it.
&gt;&gt; Um, okay. So, you guys just put out this
report. I think this is obviously uh a
great candidate, if not a shoein for the
most important question of our moment.
What is going on with the possibility of
automated AI R&amp;D? Do we have this
tipping point where we're starting to
hit recursive self-improvement? And if
so, like how big of a deal is that going
to be? You guys brought together a bunch
of people that authored this report and
some others as well that aren't
necessarily authors but contributed to
conversations. I understand like quite a
few people from frontier model
developers
&gt;&gt; and it strikes me that like this debate
goes back basically to the beginning of
AI right there was the idea very early
on that we could have an intelligence
explosion when I started reading Elzar
in 2007 you know he was very worried
about this and yet you know you've
written I think you put your finger on
something a lot of people were feeling
last year when you said even though what
passes now for long timelines is pretty
short and yet the disagreement ment on
this topic seems to be as fundamental
and seems to be kind of as impervious to
new evidence as it has ever been. So
maybe just for starters like take us
inside the workshop, give us kind of the
the lay of the land in terms of what are
the world models that people have. Um
and why are we still just working from
so much intuition despite the fact that
we now have like you know what in some
you know circles would even be called
AGI out there you know as products for
us to use today.
&gt;&gt; Yeah. So this was this workshop was held
in in July last year and was maybe one
of my work highlights of the year. it
got started. So it was a day and a half.
We brought people in. We had yeah people
coming from some of the frontier
companies policy you know bunch of great
people to get a sense of kind of what
the vibe was like. We started out the
first session was about kind of how is
AI being used to automate a R&amp;D right
now. Um we had presentations from who
are doing that and before the first
break we had uh Ryan Greblat from
Redwood Research, Nicholas Carini from
Anthropic, Dash Kapoor from Princeton of
AI as normal technology and Thomas
Larson who's one of the AI 2027 authors.
they were all like arguing so fiercely
in a friendly and productive way like
before the first break that they just
like everyone else stood up to go and
get you know coffee and drinks and
snacks and they just kept on arguing um
right through the break which is great
it was exactly what we were looking for
but I think did sort of preface
something that we knew going in which
was there are really different
perspectives here and that you know the
workshop was chat house I feel okay
giving that anecdote because they ended
up writing um one thing that came out of
that was Nicholas was pushing the others
constantly for like okay you have such
different views about where things are
going where's the first place that you
actually disagree about what we'll see.
Um, and they found that as they're
looking out for like what we're going to
see in 2026, 2027, they actually agree a
lot about kind of what we're going to
see before we get to that recursive
point, which is kind of a bummer. Like
it's, you know, it's nice that they
agree and can they were to post about
that actually, which is the reason I
feel fine, you know, sharing that that
anecdote from an otherwise chatting
house workshop. They were to post about
the stuff they agree on. But it sucks
that like that means that it's actually
going to be hard to identify kind of in
advance whether we are heading into a
recursive loop or whether we're not. Two
big things I think. So what we were
trying to do with the workshop, one was
like get this idea of recursive
self-improvement out of sort of
&gt;&gt; purely like Silicon Valley San Francisco
like really AIP spaces and make it like
explain it, present it to a wider
audience, let people engage with it, but
then also actually try and make some
progress on like okay why do people
disagree about this? What is happening?
What might happen in the future? You
know what indicators could we gather?
Stuff like that. And I came out of it
thinking that maybe two of the core
disagreements here. One is does AI truly
replace all of what humans can do. So
does it does you get to that like fully
automated? Because if you're going to
have the big the really like scary
recursion, that's probably what you
need. It can't be that you know every
you have a we could have much more
productive human researchers. could
have, you know, the the Alec Radfords
and the, you know, Ilia Skekers managing
fleets of AI researchers, but if it all
has to come back to them and they have
to process and digest and like think
through the research, you're not going
to get that like massive recursive loop.
So, that's one piece is like, do you
truly get uh humans being fully
replaced? Because if not, then maybe you
have some parts of the workflow being,
you know, really accelerated. We have
this um diagram in there of like sort of
an AMD doll's law kind of thing where
AMD doll's law is basically if you have
a process that depends on different
inputs and there are different potential
bottlenecks. Then if you speed up one
part of the process, the bottlenecks
will just bite somewhere else. And so it
may be that you know you speed up the
coding part of AI research but if you
don't speed up other parts then you
don't end up speeding up the whole thing
very much. or you know do you have I
think another mental model that people
who are skeptical that this is going to
really go crazy a mental model they
bring is like okay we have a long
history of computers doing more and more
of the lower level work so you know we
don't have to do punch cards anymore we
don't have to write assembly code we
have these higher level languages and so
you know for example AI doing more of
the coding is just another natural step
in that process and humans you know this
is kind of a like expanding pi model the
amount of like tasks that we realize can
be involved in AI R&amp;D expands and
there's always that outer band that the
humans can do while they're automating
the inner bands and I think that is very
different from the view that you know
other people sort of more that AI 20227
authors would have or you know lots of
other people in the space um which is no
first you automate some of what the
humans can do and then you automate all
of what the humans can do and then you
know you kind of you go until some other
bottleneck hits so then you know the
other question is like uh okay what are
those what are those bottlenecks we can
you know we can talk about that as well
but I think those are two of the biggest
questions that came out for me one was
are you truly going to automate
everything including what all the humans
can do and the other is if you do you
know how soon do the bottlenecks bite?
&gt;&gt; So Schultter Douglas uh who is now an
anthropic had this idea of a uh software
only singularity he calls it where um we
get very good at coding and like all of
the digital stuff including AI research
I I presume but not at producing power
or copper or all of the physical
substrates which are going to be
required in [clears throat] order to
support this expansion. How how would
you feel? How do you think that fits in?
Like the fact that maybe the digital
stuff happens but the physical stuff
just doesn't.
&gt;&gt; Yeah, I think there's two versions of
this. I think some people when they talk
about a software only singularity, they
basically mean like it turns out that
software is enough to get like
absolutely crazy recursive loops. Um, so
I think there's like Tom Davidson at
Forthought Institute has written about
this for example and you know maybe you
can get just like massively more
intelligent systems having massive
impacts on the world primarily through
sort of software improvements. There's a
different thing which what you're
describing of the the version from
Scholto is a different thing which I
would think of as more like sort of a
jagged software only intelligence
explosion meaning the AI is getting much
more capable in certain ways and like
but its effects on the world are very
limited because it is software only and
this kind of gets another another thing
that I found really really helpful from
the workshop and really interesting
which is people have very different
intuitions about okay assume that you
have an AI that is very very good at AI
R&amp;D what does that mean for what the AI
can do elsewhere and I I think some
people are like okay well if it's very
good at a R&amp;D then it can like train AI
models to do whatever so it can do
whatever and you know maybe there's like
maybe you have to spend like a week
gathering data or something but then if
you want to do some arbitrary task you
could do it whereas I think other people
have an intuition of like okay well even
if it gets very very good at automating
AR and D this sort of most you know
software based task it's still going to
really struggle to for example design
new biological molecules or it's going
to struggle to like think about
geopolitical strategy questions because
you have to like actually go out and
like how different countries and
decision makers will react and things
like that. And that is a piece that I
feel like goes under in a lot of these
conversations is like what is that
connection between AI that can do
incredibly good AI R&amp;D and AI that can
like affect the world in
&gt;&gt; non AI R&amp;D specific ways um that we also
tried to kind of like tease apart a
little bit in there. Would you think
that's kind of like the connection
between like okay now you have AI doing
AI research that's affecting the economy
it's also affecting the political
economy and then you have to have
mitigations to the polit political
economy for this to work out does that
mean you you might need the AI um AI
research to go into how to fix the
political economy which is going to be a
little bit scary
&gt;&gt; yes say more about what you mean by
affecting the political economy
&gt;&gt; uh in the sense that for example right
now you have Bernie Sanders saying that
you know we should have a moratorum
because he's scared about jobs right
he's he's very scared about jobs uh he
wants moratorium on data centers I think
there's like six states with a mortorium
now including New York state and so one
of AI research leading into hey how does
AI fix the political economy how how do
we deal with the humans how do we
mitigate the impact that we have on the
humans like is that something that you
think would happen with the first the
first configuration of the software only
singularity in the sense that it's not
jagged and als also affects the
political economy that way.
&gt;&gt; That Yeah. Yeah. That's that's the kind
of thing that's right. If you're
positing that you can just have a sort
of software only singularity that is
going to radically transform the world,
then it's going to have to be able to do
things like okay and then the company
like deploys, you know, chat bots that
talk to enough people that convince them
of data centers are great. The data
centers all get built and the
mortoriiums get rolled back. Yeah. That
that kind of has to be built in. That's
right. Um which to me intuitively feels
like it's sort of a different skill set
and also is more dependent on like
deployment and rollout and adoption. Uh
yeah. So I I tend to be a little a
little more skeptical there, but yeah, I
think that's that's an example for sure.
&gt;&gt; I see.
&gt;&gt; One kind of odd seemingly to me odd
pairing of beliefs that I observe and I
sort of detect in the report is the idea
that among the sort of more skeptical
folks that there's going to be a plateau
and also that plateau is going to be
subhuman. And then on the other hand,
it's like it's going to not plateau.
It's just going to run away. You know,
have some sort of singularity.
&gt;&gt; I a position that I feel pretty
intuitively attracted to that I don't
hear too often is the idea that maybe
there will be a plateau, but it could be
very easily a superhuman plateau. If I
try to zoom out, you know, as far as I
possibly can and look at like life on
Earth, I would say it seems like humans
are sort of part of maybe an entry into
a steep part of an intelligence
explosion or, you know, an S-curve of um
of capability. And I don't think we're
the end of history, but we were clearly
better than what came before and that
was enough to take over the world. And
so I think I just don't hear too many
people say, "Yeah, it's not necessarily
going to be a singularity. It's not
necessarily going to like, you know, go
totally beyond comprehension. But in the
same way that we were just that much
better than Neanderthalss, and it might
not have been that much, but it was
enough to to change everything. I kind
of feel like there's not too much more
room between where the AIs are now and
where they will soon presumably be. And
even if that doesn't like, you know, go
sort of critical from there, it feels
like we're like, it's very hard for me
to imagine that it's not enough to be
transformative. So, is that a position
that was like represented in the
workshop? And how do you personally
react to it?
&gt;&gt; Yeah, I I mean I think that sounds
pretty close to my default expectation
maybe, which and if so, then then it was
represented there because I was there.
Maybe to like rip on it a little bit.
Something we didn't put in the report,
but that I've definitely found helpful
for my own thinking is like thinking
about okay, you have an S-curve clearly
in some kind of S-curve. I agree. And
you have like three maybe less like
situating us as humans in the middle of
an ongoing S-curve, but we have some
kind of S-curve of like AI capabilities.
And there's three segments that are of
interest. One is like how long is sort
of the the leadup period, the first part
of the S-curve. One is how steep is
that, you know, middle of the S. And one
is how high is the ceiling.
&gt;&gt; And I think a lot of mostly when you're
hearing people talk about automated
AR&amp;D, either they're sort of they're in
one of two camps on all three of those
questions. So either they think the
leadup is short and the curve is steep
and the ceiling is high or they think
the leadup is long and the curve is
gradual and the ceiling is low. And so I
also think it find it really interesting
to think about okay what are different
like combinations of those sort of
parameters where to me it feels like
really looking like the leadup is pretty
short these days like we're not too far
from that sort of takeoff period but
like for example what if the curve is
steep but the ceiling is low or the
curve is gradual but the ceiling is
high. I feel like we don't talk that
much about either of those. And maybe
also to your point, Nathan, about the
like superhuman but not like all
powerful god like singularity. There's
no, you know, no point of return. Yeah.
I I also I really think there's room for
more thinking about what does it mean to
be superhuman and what are the domains
where there's like tons of headroom
above humans and you can easily identify
like, you know, yes, it would look this
is what it would look like to be
superhuman at, you know, like optimizing
a kernel or like, you know, selling
things, for example.
&gt;&gt; Supporting mealities. Yeah, in previous,
you know, parts of this marathon
conversation, series of conversations,
we've just seen how the ability to
interpret the signals that people
throwing are throwing off in sleep to
predict disease, [clears throat]
&gt;&gt; you know, is just a really random but I
think instructive example of how there's
an obvious uh a lot of room to be
superhuman at some of these tasks and
&gt;&gt; there's potentially a lot of power to
unlock, especially If you can integrate
that kind of, you know, infinite
modality grocking with like a kind of
basic reasoner, I really don't see any
reason that we're not going to be able
to achieve that.
&gt;&gt; Yeah. Often those often those things
though will involve I think another
piece that's like underexploited here is
uh people tend to either be in the camp
like the ceiling is high and you're not
going to need all that it's not going to
be delayed by real world adoption or the
ceiling is low and it's going to be
delayed by real world adoption. And to
me I'm sort of like isn't the obvious
like combination of these like once you
get the real world integration you know
for example you have to collect all that
sleep data or like you know humans are
really bad at interpreting scent data
but like dogs and like smell things we
can't like but you have to do a bunch of
sensors and like all that. So I also
feel like there's sort of unexplored
questions around
&gt;&gt; how high is that ceiling as you have
kind of really increasingly integrated
AI to more and more aspects of life in
the economy. I do I do also wonder to
what extent um because in in my you know
the way I I might I might view things as
happening is software and mathematics
first and the question for me is that if
you get software and mathematics first
you may get things like I don't need a
lidar for my self-driving car anymore I
can use cameras and the cameras can be
you know really bad cameras now because
the math does all the work and I don't
need all this sophisticated technology
it could be that your phone could do
what you know those sleep detection
machines do uh with the right you know
software package. The phone's your phone
has a lot of sensor gen there's an
enormous amount of technology within the
phone.
&gt;&gt; Yeah. and and you do wonder whether it
would really be application of uh
algorithms to existing frameworks,
existing infrastructure,
increasing the bandwidth of your
communications tech with new encryption
and new cryptography which is how DSL
was invented for example DSL was really
using the existing copper pipes with you
know new new algos. So I I wondered to
what what extent the
you don't get a slowdown just because of
your physical infrastructure
because you kind of innov innovate
around or with your physical
infrastructure. Um
&gt;&gt; yeah I'm sure that I'm sure that will
work in some places. I think that yeah I
think it'll work in some places that
won't work in others. So I think if
we're talking like you know there's a
huge ongoing struggle with where my mind
goes is like cyber security for critical
infrastructure where like the systems
are the physical systems are old they're
hooked up the operational technology
[laughter] they're hooked up to old
information technology because they have
to be like there's going to be a limited
amount that you can optimize using smart
new algorithms there because it's just
the stuff is old. Likewise for you know
my center does a lot of work with kind
of military technology. Same thing
there. Like if you have a ship that was
built in the 1960s it's a ship that was
built in the 1960s. Um or other pieces
of equipment. So yes, I think in some
places yes, in some places no. To me
that's another I think Pashi mentioned
it as I as I came on the like talk I
gave on jaggedness. To me it's like
another place where the jaggedness
bites. And I think as well like my
default expectation in a R&amp;D is that
we'll see jaggedness like the jaggedness
is fractal, right? like you zoom into
the sort of quote unquote task of a R&amp;D
or the skill of AR and actually it's
many many different things and we so
we'll see the AR&amp;D accelerating in areas
that are especially amendable to using
AI and lagging more in other areas not
to say they can't ultimately be
automated but it will like take longer
&gt;&gt; how far do you think the the product
which is on the market right now behind
what people are using inside the labs
&gt;&gt; I don't know
&gt;&gt; okay
&gt;&gt; I honestly don't know that was one of
the like sort of most like trying to be
productive section of the well that's
not true but a most like maybe
actionable section of the report is um a
set of indicators and we have like a
table summarizing the three categories
of indicators that we have and that is
the biggest category is kind of
indicators from inside companies and one
of them is that public private gap um my
sense is that it's not huge right now
but I would I don't have any inside
information you guys talk to company
employees as well
&gt;&gt; you do believe he says it's uh we have
no idea how good we have it and the gap
is very small
&gt;&gt; exactly I'm thinking of things like that
exact suite
&gt;&gt; so what I learned in the last few days
is that the real gap is that they're
using models which are three times
faster. So they it's just the same
model. They're running on lower batch
size. It's three times faster and that's
what they're using in turn. That's you
know it's the same tokens. It's just a
lot faster.
&gt;&gt; And there's surely also like tooling
stuff right as well. Like you know
something we put in the report a couple
of our reviewers who were looking at
this who were less familiar with the
idea of automating AR&amp;D. Some of them
are like, "Oh, haven't you seen that
study of like 95% of AI pilots fail?"
And there's the, you know, that meter
study of, you know, that AI slows people
down. And so we included in the report
like explicitly noting, you know, yes,
productivity boosts from AI mixed, but
these AI researchers are like in the
very very best position to benefit from
their technology. Like they are the best
up to speed on what it can do and what
it can't do. They are shaping how it's
developed and like what directions it's
pushed in. They're in the perfect like
setting to be building tooling to
squeeze the most use out of these
models. So, I'm sure that that is also a
piece of it as well.
&gt;&gt; One of the things you mentioned early on
just a few minutes ago is the idea that
you wanted to kind of bring awareness of
these possibilities, you know, outside
of the places where they are most often
discussed. One other thing I would love
to hear your perspective on is how
ideological do you think companies are
about this? I mean this is one of the
things that like confuses me in the
sense that every frontier lab leader has
read their Eleazar uh you know
catechism. They
you know I think they they've previously
many of them in the past had said like
things about how we should be extremely
careful about this sort of thing and we
should not engage in an arms race
dynamic. You know it's obviously part of
the open AI charter. Dario is that
things like this and now we're in a
world where there is an a publicly
stated timeline by open AI to the AI R&amp;D
intern and then another you know not too
much longer out 2028 the full AI R&amp;D
researcher
&gt;&gt; I mean scenario anthropic as well as
star is um
&gt;&gt; yeah I would say anthropic will even
seem more committed to it or more you
know we're resigned maybe but they
believe it
&gt;&gt; Jack Clark June summer this year. Uh
Jimmy Ba who just left XAI was a
co-founder 12 months and OpenAI
this year research intern and then you
know full researcher kind of a year
later.
&gt;&gt; Uh I think it's this year. So you know
that that's my guess.
&gt;&gt; This year for could for what
specifically?
&gt;&gt; Like the start of recursive
self-improvement was we
&gt;&gt; Oh, but aren't we there already? Wasn't
it last year? I mean, you had like, you
know, you had like Gemini doing the what
was the evolutionary algorithm stuff
where it designed like codeesigned an
algorithm that like sped up its own
training by 1%. Like come on, that's
recursive. It's really
&gt;&gt; This is what I'm talking about like the
the leadup to that loop.
&gt;&gt; Yeah. So, you But I don't know. I You
think we might be this year where
there's no human needed whatsoever? I
think it's a high bar.
&gt;&gt; I think we might be s I think I I
updated on Moltbook. Uh the Moltbook
thing took me by surprise. like one and
a half million agents all of a sudden on
the on the web. Yeah, it's all nonsense
for sure, but things start off as
nonsense. Uh I think I think what might
happen is you get a single model update
which kind of fixes a little bit of
hallucination, a little bit of security
issues around like leaking leaking
secrets and I think that might be
enough.
&gt;&gt; Sounds hard.
&gt;&gt; Sounds [laughter] real hard fixing
security stuff.
&gt;&gt; Yeah, we'll see. Yeah,
&gt;&gt; maybe.
&gt;&gt; Yeah, maybe. So go well I want I do want
to give you the chance to talk about the
dynamics of this the
there's you know different reads that we
might put on to people. They're
ideological about it. Elon Musk has said
things like pretty much like I don't
know if this is going to be good or bad
but I want to be around to see it and
also like you I'd rather be part of it
than a spectator. So that sounds like
somebody who is inclined to gamble with
humanity at you know in a pretty
selfaware way. Others may feel like
they're trapped into these dynamics and
they at least will do it, you know, as
safely as possible. How would you
describe
that millu right now? I think it's
dramatically underappreciated by people
outside the the AI bubble that where we
spend all our time.
&gt;&gt; Yeah. I mean, I think my impression of
it, my sense of it from the people I
talk to is there is just a sense of
inevitability about AI advancing and a
desire to be a part of the future being
created because they see this as a
future that's being created. And I think
there's also, you know, the people who
&gt;&gt; you mentioned how this has been kind of
part of the AI conversation since the
very beginning is this J good was in 19
early 1960s talking about when you
create the first ultra intelligent
machine which I feel like is we always
need more terminology in AI. feel like
we should get ultra intelligent to make
a comeback that there's this sort of
like very natural logic if you have a
computer science kind of brain. It's
just a very natural logic to say okay
we're we have some level of skill at
building computers when the computers
have more skill than we do then they'll
build ones that have more skill than
that and then you know you get a loop
and so I think that that logic is just
very appealing and and seems very
natural and so people think of it as
something that's going to happen anyway
and then they may as well be invol may
as well be involved. That's not
everyone, but I I do get the sense that
that's sort of the like the water that
most folks are swimming in. And then if
you have a different view, then it's,
you know, in contrast to that. I don't
know. Do is that your sense as well?
&gt;&gt; Yeah, I think so. And I think the
inevitability is a pretty compelling
argument. I mean, I I I resist it
because
and I at least want to make the point
that like even if some form of this is
inevitable,
there is still probably important
discretion that we can exercise in terms
of exactly what flavor and there's
questions like should we keep chain of
thought interpretable or should we, you
know, embrace thinking in latent space
and you know I do think it's important
to kind of keep in mind that It's not
probably all one or all the other. You
know, AI defies all binaries. There's
going to be these gradations and these
kind of
&gt;&gt; more local decision points, but yeah, I
mean, in in 2022, I was just trying to
make AI work for practical tasks. And
with no background in AI research,
basically ended up independently
inventing a number of the, you know,
techniques that have gone on to produce
great things. I didn't, you know, take
them past any local plateaus, but you
know, just having AIs improve their own
outputs, you know, kind of proto
protoconstitutional AI type stuff. I do
think the attractor is, you know, the
sort of gravity well is like pretty
strong and and it just it's hard to
avoid some version of these techniques
because if even a, you know, a bozo like
me lands on them, I don't know how
they're not going to happen, you know,
in the big broad world, especially as we
start to also get dramatic
democratization of
&gt;&gt; training techniques, right? I mean,
Prime Intellect just put something out
that kind of allows anybody to spin up
their own, you know, RL environment on a
distributed basis, on a community basis.
So, like everything's going to get tried
and that I think that's pretty hard to
argue against.
&gt;&gt; But again, also I do want people to to
still own what exactly it is that they
are doing along the way.
&gt;&gt; Yeah, I think there's something in here
um which takes me back to conversation
longunning conversations about
autonomous weapons. there's something in
here about the like the level of human
oversight that you can have. Um where I
do think that like using that tool like
using AI to to accelerate research is I
I totally agree an attractor, but I do
there's a you know you would really hope
that there's a meaningful difference
between I have a fleet of 10 million AI
agents and they're running experiments
for me and I'm I am leading them and I
am you know guiding them versus I have
set something into motion. I have no
clue what's going on. And I
think there's there's a boundary
somewhere. Is it a boundary that we're
able to stay on one side of? Um I'm not
sure but I hope it might be. That to me
feels like the point to try to
intervene. Not you know we shouldn't use
A for research. It's obviously not going
to work.
&gt;&gt; To what extent do you think policy
makers are naive? because in like
earlier on we spoke to Sam Hammond and
he's uh he he advises some policy makers
on AI and he was talking about privacy
and the restrictions that the
constraints that we could put on and or
the regulations and to me I I think one
thing that struck me was that I think a
lot of policy makers are not aware
perhaps that these like AI with access
to existing technology you know with
access to persistent search persistent
memory
It would basically do a Google stalking
of you before before it even met you. It
would know all of those things in the
public public domain, right? Like the
amount of access to information that it
could have, the persistence of
information, listening in on
conversations, uh these things are going
to be very powerful in that sense. And I
think you you you can ban people, you
can ban the AI from using using facial
recognition. Fine. But then you have
network analysis, etc., etc. You can do
you can do metadata analysis on WhatsApp
conversations on where the messages are
going. You don't need to know the
content, right? So there's a lot of
these techniques where you can dean
anonymize
uh traffic, you can de anonymize people,
you don't need the facial recal, you can
still do gate analysis and speech
analysis, voice analysis, handwriting
analysis. There's so many other
techniques and all of these things will
be available to AI. To what extent does
this whole like, you know, we're going
to make sure that we're going to have
privacy thing is are they are they being
naive? Is it going to be possible?
&gt;&gt; I mean, I think the US has done a worse
job of this than pretty much every other
country on the planet. So, I think
there's like some basic rule. I don't
think you want to do rules at the level
of like no facial recognition. I think
you want to do rules at the level of
like no data brokers, right? of like you
can collect data but if you're going to
collect it the user needs to know and
they need to have you know notice and
consent or I'm not deep on privacy law
so I don't want to pretend that I have
the right the great privacy proposal
here but I do think there's ways to do
it that are better than the US and I do
think there's ways to do it that give
you that sort of underlying flexibility
yeah
maybe I'll leave it at that because yeah
again privacy law goes real deep and I'm
not there
&gt;&gt; one more question for you is
you know we
in the report you talk about the
possibility that the gap that we think
is currently small between the models we
have and the models that are used
internally could open and you have some
recommendations around certain
transparency measures. I want to give
one quick shout out to the AI
whistleblower initiative founded by my
friend Carl Caul who has engaged with
open AAI and at least played some role
in their recent updates to their
whistleblower policies which I find like
amazing that OpenAI is continuing to
work in that direction even today.
Um,
where do you think we are on the
spectrum from secret non disparagement
clauses to, you know, where we need to
be in terms of insight into what is
going on at the labs other than, you
know, private philanthropist funded
whistleblower support, which you can
avail yourself of again via the AI
whistleblower initiative should you need
that, what other policies you think the
government should be doing and and maybe
even more broadly if you want to zoom
out like what do you what do you think a
situation hypothetically situationally
aware US government should be doing in
general that it is currently not?
&gt;&gt; Yeah, I think there's a bunch of things
here. I think on transparency I think
we're doing better than we have been. So
we have these two new state laws um SB53
in California raise in New York. I think
those are good starts. I think something
that it would be great but I think for a
lot of this information we're also just
really dependent on what the companies
still choose to put out. Now, we're
fortunate. I want to give credit to both
OpenAI and Enthropic and to somewhat
lesser extent Google. Like, they do put
out pretty proactively, you know, a
pretty good amount of information. So, I
think they should get some credit for
that, but I don't love that it's like
almost entirely at their discretion what
it is that that they put out. I guess
that will be shifting as SP53 and Ray
start to be enforced. Um, so I'm
interested to see what that that looks
like. I think also we need to shift to a
bit of a I think there's been a start
the beginnings of a push to shift from a
like model release-based schedule to
something more continuous which is
partly driven by kind of interest in
these like internal deployment type
dynamics not just the external releases.
So the idea here is like if the if the
risk is not actually purely tied to when
you put your model on the market then
all of your risk evaluation shouldn't be
tied to that either and also creating
kind of better incentives for the
companies around not forcing them to
just you know rush things out the door
but instead trying to have more of a
sort of continuous pulse of like
updating metrics over time. [snorts] So
I think we could definitely be doing
better on transparency and then you know
ideally pairing those requirements as
well with some kind of independent audit
requirement or independ way to let
people come in external third parties
come in and check that things are
happening as they're supposed to be
happening that has been in several of
these proposals and keeps getting
stripped out by industry lobbying. Um so
that I think is you know a new frontier
as well. I think there's various other
kind of policy implications that we put
in the report some that are maybe
interesting. One is just like this
general like hardening the world sort of
recommendation or like you know
resilience societal resilience is
another way of putting this. So this is
like cyber defense, bio defense, um
bioserveillance uh you know investing in
uh bio surveillance just meaning like
monitoring diseases not like surveilling
people you know investing in like
epistemic security stuff of trying to
have a way to you know determine what's
real and what's fake. um tagging real
content, you know, all this sort of like
broader societal resilience stuff which
is like okay, just assume that this is
going to get much much much better and
that we might see AR&amp;D automated, you
know, AR and D contributing to increased
pace of change. I think also there's
been some this is less of like a policy
and more of a mindset. I think there's
been a shift over the past year or two
to like oh actually maybe open models
are always going to be pretty close
behind and so you know concerns that you
might have about there being you know an
access gap or a you know concentration
of power kind of gap if the closed
models are far ahead maybe we don't have
to worry so much about that um and I
think if you're taking seriously the
possibility that automating AR&amp;D speeds
up the closed labs significantly then we
just need to revisit those assumptions
about kind of open models and closed
models there's a few others but yeah
would would point people to report for
kind of the full
When AI builds AI, things uh just might
start to get weird. So yeah, definitely
check out the full report from Helen and
co-authors at CET and beyond. It's uh
interesting times for better or worse.
Any of the closing thoughts before we
break?
&gt;&gt; No, great to be on. Uh great to chat
with you as always and uh yeah, look
forward to next time.
&gt;&gt; Indeed. Cool. Hello. Very nice to
shorten our timeline between now and
next time. [laughter]
&gt;&gt; See you.
Cheers. Bye for now.
&gt;&gt; So, our next guest is uh Jeremy Harris.
Uh he's from Gladstone AI and they wrote
the first ever US government AI threat
assessment for the State Department.
It's been about 10 months now when they
said every AI every American AI data
center is compromised. Jeremy, what has
changed? Have things gotten better or
worse?
&gt;&gt; Yeah. Well, to piggy back off uh I think
Nathan just said, things are getting
weird. So things aren't weird. Yeah,
great to be on. What has changed since
then is less than one might have hoped
and for really interesting reasons. I
think one of the things that a lot of
people who are on the um sort of
concerned about the AI risk story and
just kind of like the AI threat
landscape and national security
perspective, whether it's loss of
control, weaponization, I think a big
part of the story that's missing is an
understanding of the infrastructure
buildout. Like what are the actual bones
that we're building on here? because
that's the substrate that underlies
everything and there are all kinds of
assumptions that are are being made
about it where we're kind of abstracting
away what I I really think is like you
know at least 50% of the problem here
and we we think a lot about model
reconstruction attacks and all kinds of
interesting debate about you know
whether it even makes sense to secure
models in a world where you can just
reconstruct them if an API is available.
Um, but more fundamentally, when you're
building your entire like AI industrial
base off of, you know, components that
are made in China with personnel who
often are Chinese nationals. I mean,
this isn't even like, forget about the
Manhattan project. We're so so far, you
know, kind of behind that. The uh I
think it's incumbent on us to like take
a little step back and just ask about
like what is that chess board even? What
is the board itself? forget about the
pieces, but are we playing on something
that's fundamentally stacked in a way
that doesn't allow for a winnable
outcome? And I'm not saying this to be
pessimistic. I think there's actually
there solutions that you come up with
very quickly once you take that new
perspective. But, uh, kind of closing
your eyes and and not looking at it
doesn't address the problem. And I think
we're in a space where we're doing a lot
of algorithmic level thinking because
that's what so much of the western
economy now is based on. people at
keyboards who are used to we're not
making t-shirts anymore. We're not
filming Transformers anymore. We're not
doing that stuff. And so we tend to like
to pretend that it doesn't exist. Um so
so that's kind of like I guess my more
recent lens on the problem as the last
two years. Um I know not quite an answer
to your question, but that's kind of the
chess board as I see it at least.
&gt;&gt; When you look at it end to end, you have
you know software piece and the talent
piece. 50% of top AI researchers are
Chinese nationals and that includes you
know people working at the frontier labs
in the US right now. Uh and then you
have you know the infra piece a lot of
stuff is coming from Taiwan, South
Korea. Some of it is coming from China
too. Uh and then you have ASML sitting
in Holland which is supplying into TSMC
and then you have ASM ASML suppliers.
You they have like 3,000 you know odd
suppliers spread across the world.
They're buying I think neon gas from
Ukraine. When Ukraine got invaded, they
had a problem. They all all of this all
of these missing piece all of these like
pieces all spread out across the place,
right? And TSMC has been upfront by
saying, you know, we we are only
possible in a safe globalized economy if
we ever got invaded. Everything's over.
&gt;&gt; There's no we like we can't do anything.
That's it. It's not. So where do you
think how do you think that fits in with
a threat perspective? it seems like
someone just has a uh dead man switch
over you know TSMC. So how does that how
does that work in terms of like security
and you know securing US prospects and
you know the future in the US?
&gt;&gt; Yeah, I think it's a great question that
this whole Taiwanese kind of scenario
planning thing is something that
everybody has talked about. I'm not so
sure everybody's kind of like worked out
the implications to to full
satisfaction. Yeah. Yeah. I mean, so
first of all, yes, if Taiwan gets
invaded, TSMC is gone. It's gone.
Whether it's because China takes it or
because it's, as I would expect and
hope, booby trapped to the nines to
blow, right? I mean, it takes like, you
know, hundreds or thousands of like
insane level PHPs to to tweak that you
think of it as like a a giant box of 500
dials, each one of which has to be
perfectly tuned to keep these things
pumping out at the right yields. You're
not going to replicate that if you're
missing either the equipment or the
people. So like this is ext extremely
fragile, maybe the most fragile
production process the primates on this
planet perform. So an invasion is
unlikely you'll leave it in China's
hands. And so yeah, the question is then
what do you get when you roll that back?
What's the number two positioned entity?
And then you start thinking about okay
well what does SMIC do? What can it do?
in the SMIC Huawei complex does seem
like a very plausible runner up,
especially when you look at scale
production, especially when you look at
the emphasis Huawei's place on, you
know, networking large numbers of GPUs
together. They don't have to be as
efficient as ours. They can't be they
don't have the logic, but they can
beworked together way better and that's
how they get effectively, you know,
competitive scale performance. So, so
this is a real issue. You also in a
funny way this interacts somewhat
positively with the energy bottleneck
that we have here anyway, right? Like
we're going to be bottlenecked by energy
probably sometime around the end of the
year. When that happens, uh TSMC's
ability to outproduce, I mean, it gets
complicated because on a perch chip
basis, they're way more they're way more
energy efficient. They're more they're
pumping out more flux, but they're we do
have that energy uh kind of ceiling on
our like that's the main constraint that
we're towards. Um, so the timing matters
a lot here, right? That dance between uh
how much does logic matter, how much
does energy matter, how much does memory
matter, all these things, how much does
packaging matter, all four of those
things have become bottlenecks at
different parts of the game in the last
few years. Um, another piece that I
think again when we think about the
actual bones that the AI economy runs
on, it's not just chips and uh and not
just like the data centers themselves.
the power grid is a really just
generally vulnerable target, right? So
like we know that that for example
there've been uh there have been
components in Chinese transformers uh
that have been snuck in explicitly
Trojans to be able to to take down our
gear. A very plausible scenario just
like based on talking to folks who are
working this problem on the IC side is
Taiwanese invasion begins and one of the
first things that China considers doing
is just shutting down the west the uh
grid. It's kind of obvious if it's
existential you know that's massively
escalatory there huge you know huge
question marks there but it's it's a
scenario that's being taken very
seriously for all the reasons you might
imagine. So yeah, I mean I I think when
that if that happens, there are
questions that suddenly run much deeper
than just our ability to literally make
chips where you know in Arizona or
wherever wherever the next thing is. But
literally like if we can be kneecaps
economically and more fundamental level,
we don't even get to look at the chess
board that we hope to look at. We don't
even get to indulge in the oh well what
can Samsung do versus what can SMYC do
versus X and you know CX&amp;T like all
these things we don't get to play that
game like we literally don't have an
economy like like there's serious
implications there. So if we think about
this as a game with the stakes that it
might have and this is contingent on
what's between Xiinping's ears and the
polipro's ears but this could end up
looking like you know we're preparing
ourselves to take a punch in the face
but then we get we get kicked in the
balls if you will. I mean it's this is
the kind of scenario to use the
technology that that we may be a variant
towards and again that zoom out I think
is really important. We've got target
fixation here on what could be a pretty
narrow part of the chessboard. what you
had some ideas on not only do we need to
speed up but we need to slow China down
and what were you know what what was
your concept around slowing China down
because you know they have they're
trying their best they are definitely
not there on the chips yet the ascend
the Huawei's 910s are you know tense
doesn't really like them you know they
they want to get the H100's in there is
this concept of like building on the US
AI stack it's also revenue denial. If
you if you manage to flow the revenue
into Nvidia versus flowing the revenue
into Huawei, [clears throat]
Huawei has more revenue to develop those
chips. So therefore, we should deny
them. Like how does this balance out
this like letting them take on the chips
but not too powerful and but you know
still enough that it doesn't create a
market for Huawei. It sounds like a very
delicate balance here.
&gt;&gt; It does sound like a very delicate
balance. I personally I'm I'm sort of
less oriented towards the argument that
says, you know, if we just let Nvidia do
business in China than the Chinese will
go, "Oh, sweet. We have Nvidia that's
serving our needs. We don't have to push
so hard on the gas on this issue that's
been identified for years as the
possibly number one national
technological priority that we are
pouring multiple Apollo moonlanding that
like amounts of cash into like like this
is to me a kind of um a miscalibrated
sense of the even just the messaging
that the CCP's been putting out. I just
don't see a world like we don't see for
example Nvidia okay they can ship the
H200 or whatever it is now and then
suddenly the CCP goes oh okay yeah
forget about that quarter trillion
dollar uh investment that we just made
in PBP terms uh into into kind of our
our national AI uh chip capacity and
infrastructure forget about that you
know we we'll sit with the Nvidia play
there's a sense both that the ability to
access these Nvidia chips is transient
because the next administration may just
as I'll pull it down. But also that like
why not both? I mean it it seems like an
insane thing given that AI is a matter
of like national security importance for
China. It would be pretty surprising to
me if they just decided to respond that
way. Indeed, it seems like they haven't
so far. So I guess that you know that's
why I think on the export control thing
from a slowdown standpoint um they have
worked. We know from Deepseek like the
public statements of their CEO before
Deepseek was on the radar and this is
actually I think really worth noting um
and and kind of like under
underrecognized and appreciated like
before Deep See was on the radar they
were coming out and saying hey we really
think we could do this AGI thing the
like one issue there's just one problem
we can't get chips and these export
controls are killing us then obviously
R1 drops and and everything has got
deepseek and you know they get dragged
in front of the the public bureau
whatever uh and debriefed and and
suddenly things change you get these
little trickles these little leaks of
similar information that come out the
edges of the kind of Chinese AI
ecosystem every once in a while but it's
pretty clear that the export controls
were working that this is if nothing
else just look at the the massive orders
that are going to be coming in for the
H200 to show how much demand pent up
demand there actually is in the AI
ecosystem and of course we know all
about the frustrations of AI companies
in China and about the current way to
win for chipsets. So yeah, I mean I
don't know this is that's kind of like
my my biased take is uh very much
towards the direction of I think we got
to listen to Chinese companies when they
tell us that our export control policy
is is working. Mhm.
&gt;&gt; Maybe I'll come back to some of the the
frustrating um duality of like
difficulties where on the one hand we
have you I you have expressed very low
uh hope for the opportunity or the
possibility of meaningful true
collaboration between the west and
China. And then at the same time, I
think you're also not super optimistic
about our ability to create a super
intelligence that we can actually
control and get to do what we want it to
do. And I think the way I think about
our conversation from a year ago or so
and and your contribution to the broader
discourse with America's Super
Intelligence Project is like those two
things are both real. They're both true
and like you're kind of engaging in
motivated reasoning if you try to deny
either one of them. Um, with that in
mind,
we are now also seeing like some of the
potentially foreshadowing kind of
moments on the um on the AI side itself,
right? Like just in the last week, we've
had these new models from Anthropic and
and OpenAI and they've both kind of said
we weren't really able to run the eval
like we kind of intended to. Anthropic
basically said the eval awareness is
pretty high and so we'll just do a
survey and a little internal survey of
whether or not this is safe to release.
That that's probably a bit of a
simplification on my part but I think
that is a fair enough summary of their
of their position. Then open AI
similarly was like well you know these
um
the autonomy you know risk the part of
our preparedness framework
that's also pretty hard to evaluate. We
don't really have tasks that are kind of
long enough horizon that we can get a
real handle on just how autonomously
capable a new model like 53 codeex is.
&gt;&gt; So that's kind of crazy. And yet of
course both models are put out there. I
don't see China driving the need to do
that. Um, it seems like they're doing
that and doing it on the same day
notably because their like their own
competition between the two of them and
also just sense of like rivalry seems to
be heating up. They're like going at
each other in Super Bowl ads to some
degree at this point. Not something I
thought I would see from Anthropic at
the beginning was like a uh a Super Bowl
attack ad, but here we are.
&gt;&gt; What do you make of like the dynamics
between the Western companies? Like if I
were to uh put on my slightly pessimist
hat for a moment, I would say it seems
like we might be racing to the bottom,
which was exactly what we were hoping to
avoid.
&gt;&gt; Yeah, I think we are racing to the
bottom. I think the only the only frame
that makes any sense like if we're going
to talk about um okay, we need to
regulate this technology say
domestically in the same way that
everybody from all leading companies
have been saying for I want to say over
a decade pretty much. You're never going
to do that unless you deal with the
outer loop, the outermost loop, which is
um international competition. I like
there is no version of the I don't think
anyone I I think again we can enjoy the
indulgence in target fixation of like oh
yeah let's play the game pretending that
other countries don't exist. But in the
same way as ignoring the infrastructure
target fixation or sorry the um the
algorithmic targeting fixation and not
we infrastructure this causes us to miss
what is really the entire problem. So
you're not going to get to a point where
you know you can have a a strategic or I
should say a tactical slowdown when you
really need it where you're like okay
suppose we find that the next version of
whatever model can design custom
bioweapons execute catastrophic malware
attacks all these things that are like
entirely they're entirely plausible and
that no you know counter jailbreak
measures are are truly 100% effective
against the kind of people we'd be
worried about. Yes, you would absolutely
in that world need somebody to be able
to say, "Okay, guys, tactical halt. This
is insane. We can't be in a, you know,
in a universe where you get a nuke and
you get a nuke and you get a nuke. It's
we can't do all program free for nukes.
Okay, so what are we going to do?" Uh,
we're going to have to have a slowdown.
If China still exists and has their
program and they are ex I mean, I'm
repeating all this stuff that everybody
said a million times. You know, if
they're 12 months away, six months away,
I don't care. Um, we've got a shot clock
now. That's the situation. So, we have
to start there. Like we have to start
there and say okay any serious solution
to this problem will involve dealing
with China. Two ways you can do that.
One is you have a kumbaya moment with
China. Uh there are a lot of interesting
reasons why I think this is just like
not going to work. Uh one of which is if
you think about international treaties
they don't tend to reflect some sort of
Star Treky commitment to everybody on
planet Earth want to do the right thing.
They tend to reflect the rail poly kind
of like lay of the land in terms of
actual power like nukes. You have nuke
drawdowns when everybody can retain
arsenals that can still destroy the
entire planet three times over and
there's literally no point in building
the marginal nuke. You have similar
things if you actually look at the
history of bioweapon and chemical weapon
uh treaties is like you find in every
case that actually they don't get you
the marginal lift over just like killing
people with artillery and gunshot. if it
looks nice and and they often get
adhered to for that reason, but then at
the margins, you know, you have ch like
like Chinese research labs on American
soil doing all kinds of crazy research.
You have whatever facilities and while
like all this stuff happens anyway and
so this may sound like super cynical, I
think it just reflects the way things
work. That's at least my take. I I would
think that. So the question then is how
do you how do you deal with an adversary
like China that's in the position they
are um that does have a struggle hold as
they do on our infrastructure? They
simply they simply do. So the question
is what are your offensive options? That
is it. There's like you're not going to
build the perfect Fort Knox. This is not
not a thing that's possible. And so the
question is what do you do to induce con
consequence on the other side? That's
the only math that will work if my
theory of the world is correct. It's not
a pretty theory. It's not one that
leaves us feel warm and fuzzy inside.
It's one that may make you think a
little bit about, you know, mutually
short of destruction, that sort of
thing. And I think there are nuances
here with, you know, obviously Dan
Hendricks had his uh his frame on it. Um
but bot the bottom line is yeah I mean I
think you you kind of need and it
doesn't need to be an AI based response
though eventually you know you can
certainly argue that any offensive
option that isn't coupled to the uh
scaling laws is eventually going to be
beaten by something that does right so
so there's kind of an important design
principle in these things but there are
offensive options that need to be
explored and uh this is unfortunate but
it does mean that if you have a
situation where your adversary can turn
to you at any time and say watch me turn
the power off on your entire grid and
have like tens of millions of Americans
or more die of starvation or exposure.
Like you need the ability to say, "Okay,
&gt;&gt; you know, watch the same thing happen in
in in Beijing and we can turn it back
on. By the way, we need to have the
deescalation option." Mhm.
&gt;&gt; I know it's a bit of a grim view, but I
think that like when I think about what
actually gives leverage in this
situation, it looks a lot less like
what's had a pretty treaty, especially
given the history of countries like
China, like Russia with respect to
treaty adherence. Like they signed
treaties like we know what it looks like
when China sides a treaty. It it doesn't
end up being pretty in a situation like
this where you just you need perfect
adherence at such a high level of
precision. like there's no version of an
international treaty on AI that doesn't
involve inspections of compute
stockpiles and like very precise
overwatch of the kinds of algorithms
that are being deployed like the the
kinds of uh you know evaluation schemes
like the the level of of cooperation
that's required to do something
tractable here strikes me as being quite
significant and the trust just like I
don't see it being there.
&gt;&gt; So what's your poom and and on what
timeline? I mean, we were just talking
with Helen about this report that they
put out about when AI builds AI and the
possibility of recursive
self-improvement. It sure seems like all
of the vague tweeting that is going on
right now out of the Frontier Labs is
suggesting that that is happening. Um,
and then on top of that, of course,
they've, you know, OpenAI has public
timelines that they've put out. I guess
to their credit, maybe I guess you
could, we could see that both ways. The
entropic people that I talked to are if
anything always the most firm believers
that the recursive self-improvement
dynamic is unavoidable.
How long do you think we have before
before these things really start to take
on a kind of runaway dynamic? Is there
anything that you, you know, if you had
power, you know, and a lot of power, is
there anything that you feel like you
would want to bet on? And and where does
that leave you in terms of PD? Maybe I
should just stop all this and spend more
time with my family.
&gt;&gt; Yeah. In general, I um I'm a big fan of
the happy warrior mindset. I I think
it's like uh just never constructive to
be to go and hold. First of all, we have
to assume that no matter how firmly we
might believe in whatever outcome, we
may just turn out to be wrong. There's a
famous story, right? Richard Feman
walking around New York City uh in the
70s, I think it was, looking at all the
skyscrapers and being like, "Wow, isn't
it sad that all of this is going to be
wiped out by a nuclear war between
Russia and the United States um sometime
in the next few years?" And he was just
that's just that was a a fact of the
matter. And it reflected a pretty
reasonable understanding of the dynamics
unfolding between those countries at the
time. Um I'm not saying it's ever quite
that simple, but this is an ingredient
if nothing else that makes you less
effective if you're just stuck in a hole
all the time. Just as a meta point, I
guess that that I think is is the first
piece. You know, we have to act with
agency and we're going to be most
effective doing that if we're not stuck
in a a kind of deterministic Calvinist
frame with with this whole thing. In in
terms of I'll also not answer your
question before I answer it just by
saying regardless of timelines, one
thing to focus on is that there's some
things that are pure optionality plays,
right? So like we there are things that
you do if you're going to build a um a
frontier AI cluster right at scale that
rule out nation state security at that
cluster just like if you don't do these
things right on day one by day you know
360 once you finished building the site
your site is going to be compromisable
and there's no going back in doing that.
We think of these as we call like the
one-way doors right of uh of the data
center construction process figuring out
what those oneway doors are setting
standards for them and actually
executing on that even doing it just
like voluntarily right you like you
think about um opening I and anthropic
and so on like kind of all independently
going hey we just want to buy that
optionality because at some point
&gt;&gt; can you give me a concrete example of a
one-way door
&gt;&gt; yeah so so there's a bunch that I can't
go into but Um, one that I can, it's
pretty easy is think about like the
people that you're getting in the loop
to review the site plans and uh details
that would be let's say useful to an
adversary who is trying to extract
information if those people are Chinese
nationals. Okay, you're done.
&gt;&gt; Cool.
&gt;&gt; Right? Like you're never going to unfuck
that. That's baked in. Right? So, uh,
these are actually the interesting thing
with these oneway doors is they tend to
be surprisingly cheap. And that's the
the tragedy of it all is like you
actually could if you were thoughtful go
through and be like well on a fraction
of the budget that would be required in
capex and opex for these builds like you
just like create pure optionality by
implementing things. So I think that's a
really important element. Putting
offensive options on the table is a pure
optionality play. You don't need to
exercise those options. You need to have
them on the table. That's what I'm
saying. I'm not saying let's go to war
with China. Let's like that's a crazy
thing to say. there's there's all
[laughter] things in their context, but
you need options and that's a a crucial
thing. So, having an understanding of,
you know, the um mapping out the
ecosystems that are relevant, the AI
ecosystems that are relevant and and
thinking about like what what might that
that um endgame play out to be those
seem like pure auctionality plays
regardless of timelines, all cheat, all
things you can do quickly. Again, like
this is it seems to me kind of and I'm
not saying they're they're not being
done. It's just that often there's a a
lack of sort of focus on the on the end
game here. Anyway, without getting into
the weeds too much. Um, okay. So, PD
timelines. Oh, sorry. Yeah.
&gt;&gt; No, go ahead. Go ahead.
&gt;&gt; Okay.
Pum timelines. Uh, so
um I'll almost say Poom I don't find it
useful. Like I I know I know what I'm
focused on. I know what I got to do. Um,
if I start thinking about like uh my
generic answer has been for years like
any number between 10 and 90% I'll take
as like that's a reasonable number. I'm
not like I I've I've read the debates.
I've seen the post on that's wrong.
Yeah.
&gt;&gt; So is that is that your P doom or P uh
loss of control to super intelligence?
Because I think I think in some places
you've mentioned it's a loss of control
to super intelligence rather than doom.
&gt;&gt; yeah, you've obviously done your
homework really well. Yes. uh that that
is more of a loss of control the super
intelligence. I think I think by virtue
of the way that numbers multiply
together I don't know that my my answer
is that different for like P Doom in
general. Again this is coming from
somebody who for better or for worse has
almost explicitly not put in that much
time to kind of wallow in those numbers
as I as I think we're we're sort of all
tempted to do, right? Like I have that
temptation. I I get it. Like I I
mentioned I had a daughter, right? Like
I I don't like the landscape that's
playing out, but I had a daughter. Like
I chose to have a daughter and and I
didn't have her in like 2018 before the
scaling laws blew up. Like this is, you
know, this is a choice that I made. I
think there's there's a kind of almost
like a spiritual risk to getting locked
into that kind of thinking. And I say
this as somebody who's experienced that.
You know, I went through that and fed on
how it it ran my ears. So yeah. So, I
guess I'll I'll just like, you know, not
answer the question by saying 10 to 90%
sounds reasonable. I think if you're
below 10%. I I just really think that
there's like there's homework you got to
do because a lot of these scenarios are
they may sound uh crazy, but they're
just they're a lot less crazy than they
seem than when you get into the
nitty-gritty. It's like a lot of these
scenarios are already they're halfway to
unfolding. um not you know if you're
above 90%. I mean first of all if you
live as if you're above 90% and you're
like that that's going to just make you
less effective. I also think again
Richard Fineman certainly seemed to to
think he was in that ballpark. There's
just like an epistemic question here of
how quickly does the world adapt. I
think we're constantly surprised by how
quickly the world adapts both how
fragile and how resilient it is. and
like the the you know the the 11th
chapter of the book will often involve a
new character that comes out of nowhere
and we just [clears throat] need to kind
of make sure that we're we're we keep
uncertainty about our uncertainty
factored into this analysis and that I
think that buys me 10% pretty easily. I'
I've been wrong on stuff that I thought
I was 100% on often enough to be like,
"Okay, I'm not I'm not going to push it
that much." And I know that's
frustrating for like a lot of people
like, "No, no, but like look at the
math, man." And I I get the math, but
what I'm questioning here is just the
the process that led to the math. And I
don't know that I can plausibly ever get
fully behind that process and
interrogate it with with confidence. So,
last thing is timelines. I thought AI
2027 and like contrary to I think Dan
has kind of pulled pulled back a little
bit his timelines from now.
&gt;&gt; He he said he he said 2027 always meant
2028 but now it means 2029. Yeah.
&gt;&gt; Yeah. and and and yeah um AI is the
apocalypse of the future and it always
will be but you know not actually but
you know I think there's like um there's
a sense in which so when GV3 first came
out I was like oh man I've got two-year
timelines
&gt;&gt; and uh and that was because I didn't
understand what the hell would be
involved in the infrastructure buildout
and now I have a much better
understanding of that
&gt;&gt; I'm still kind of like well what's the
next bottleneck going to be I'm very
uncertain about this uh and again it's
one of those things that doesn't really
affect what I do just because I'm so
focused on just all the lowhanging fruit
that we have to pick right now. There's
so much stuff that we're just not doing
because we're paralyzed by the problem.
So, I think in terms of what we do,
there's pure alpha on the table in the
short term. 2027 doesn't sound insane to
me. 2030 doesn't sound insane to me.
2035 sounds a bit far. I guess I'll I'll
sort of leave it at that as a spread. I
think we should be acting as if 2027 is
plausible. I I think it would be
unfortunate if we if it happened in 2027
and we're like, man, we had a lot of
really plausible analyses that point to
that and we just didn't do anything.
That would be a shame.
&gt;&gt; Can you give us a little bit more of a
hit list in terms of the lowhanging
fruit that you want to see us pick? I
mean it's we've got the one which is
like build at least some subset of our
data center built out in a secure way so
that we can run hypersensitive projects
there as needed. What else is kind of on
the um if you if you're the uh replace
David Sax as the next AIS are uh what's
going to be your priority sheet?
&gt;&gt; Yeah. I mean so that first one by the
way is a lot of things right? So it's it
bundles together. I mentioned the the
personnel security issue inside of
threat problems. There are a huge number
of things in that bucket alone that are
necessary and and contribute very
cheaply to much more optionality on the
security side. Um I think again you zoom
out more so you look at the grid. Um
what could you be be doing to introduce
redundancies quickly? like the the
supply chains that lead to a lot of
these components are like very clearly
sourcing heavily from China. You have so
so here here's like a an easy win. Look
at the companies that are offering to
build data centers like suspiciously
fast and who owns those companies. So,
so there was actually a letter that came
out from the um house committee on CCT a
while ago uh nanny day one data centers
right as as an entity that is somewhat
suspect and you know you'll have these
data centers where data center building
companies where it's like oh wow like
you can build stuff like way faster than
anybody else um it involves sourcing
components from China and like like my
personal opinion is if I were to see
that I might be asking myself the
China is kind of a command economy
through civil military fusion. If the
CCP wants me to have this very very rare
and precious and backlog component for
my data center in the continental United
States, that might tell me something
about how much faith I should have in
the security and integrity of that
component. you know, there there's just
not uh a lot of infrastructure level
kind of attention being paid to these
things. And the labs, by the way, like
they want to do the right thing here.
They don't want to be in a position
where they're getting a company to to
build something for them and then it
turns out that that thing is compromised
and it comes out that that is not good
for anybody. Um so incentives are
aligned there. there's just um yeah,
it's it's things like that where uh
there's there's been so little attention
paid to the bones that that there's just
tons of stuff we can improve, including
with AI, right? Like like looking for uh
looking for malware in in old software
that's um loadbearing for our
infrastructure or not malware but rather
vulnerabilities and you finding ways to
harden it. So yeah, this is a a
defocused answer but it hopefully gives
a sense of of the venue. One thing we
haven't really given you a chance to
flex your ability on in this
conversation is just the breadth and
depth of your technical understanding of
so many AI developments. And I
definitely recommend the last week in AI
podcast, which you usually host as a
great source of
I think very
um sophisticated analysis by um by both
of you, but but I tune in for you mostly
to be honest. And I wonder I wonder how
you are doing it. How are you keeping
up? What is your how have your methods
evolved so that you're maintaining
situational awareness as much as you
can?
Well, thank you first of all and it's
very kind of you to say I I have I've
told you this before, but I I do
actually watch the cognitive revolution
and it's I think it's um you know
there's a lot of the ecosystem here is
really rich and interviews are really
important because you get stuff that you
can't get from the papers and you know I
tend to focus more on the papers so I
just don't get that kind of that kind of
analysis and I I just talk to friends
from the labs but it's different from
from those deep dives. Yeah. Yeah, I
mean so back in I can't remember when I
started on last but it was like in you
know maybe 2021 or something and um back
then I would I would just read papers
and you know you couldn't use GPT3 to
like help you understand a paper. It
just wasn't a thing.
&gt;&gt; Now that's changed. I have had an
experience that was kind of frustrating
this week in particular because I'm I'm
preparing a like a state of play
briefing for a customer and um basically
they want to know you what happened the
last quarter uh in the world of AI that
we should be tracking and there's a
paper uh that I had Gemini help me with
and I got to really good understanding
of how is like a residual like the
dynamics of gradient throw flow through
this like residual whatever and um it
was pretty complex
What I realized though after having an
interaction with a Gemini for long
enough, I switched over to Claude and I
was like, "Wait a minute, I just like
hallucinated my way through that entire
conversation, got to an understanding
where I was like, oh yeah, like I'm
pretty smart for figuring this out." And
also like I got this down path and
everything got flipped, you know,
flipped around. So, I'm not saying that
always happens, but that has been kind
of the most recent update of my process
is is really like, you know, be mindful
to kind of double check, especially as
you start to get lost in a rabbit hole.
Um, I spend like I would say about 30 to
40% of my time reading the paper and
then the rest interacting with a model
about usually it's um like the
implications of the paper or what it is
is it's reinforcement learning versus
supervised fine tuning. Like if I'm
reading the paper, I'm doing SFT like
that's what's going on with with the
models. I get to actually like go on
policy and I get to test my own
understanding like I would have done
this experiment differently. Is that a
stupid idea? And often I'll get a pretty
good answer and that it makes you feel
like you're rotating the shape instead
of just staring at it. And um that for
me is has been just really helpful and
empowering. It feels empowering.
[snorts]
Do you have any particular
like workflows, pipelines, whatever that
try to filter things for you and surface
what you really need to spend time on?
Cuz that is as challenging. I mean, it's
more challenging than ever. And it seems
to be maybe as big of a deal as being
able to successfully
make sense of any one thing is like what
are you going to choose to spend your
time on in the first place? How how has
that evolved for you?
Yeah, it's a great question. This is
that like age old question of taste,
right? Like and and one of the things
that I've had to come to accept is I
can't develop good taste in all the
domains that we want to cover on the
podcast. like I'm never going to, you
know, like my my taste is basically if
if one of the frontier labs puts out a
piece of research or if a researcher I
know and and like have a lot of respect
for appreciation for put something out
or as a co-author on something, I'm
going to take a really hard look at that
and then besides that, you know, I have
the usual Twitter account set of Twitter
accounts that I follow and you know,
that's another way. But my passes at
these papers are I'm pretty
[clears throat] focused on the like
what's on the critical path to ASI
question. Not that I know the answer,
but just like I'm trying to find things
that to me gesture at that which is why,
you know, I don't tend to talk about
like GANs or the latest in I was going
to say the latest in text to video. Now
that seems like it could be down the
path. So you never know. But um I guess
part of it is just acceptance. I am
reading these papers for the concepts
more than the outcomes. And often
what'll happen is there's be this paper
that'll come out and it might not be the
perfect paper to cover from a given
topic area. Oh, um, you know, residual
connections and and really optimizing
the crap out of them to get ultra deep
transformers. There's this paper about
it. Is this the best paper? Probably
not. But the reason I focus so much on
explaining the underlying kind of
concepts on the podcast is that a
there's going to be another paper next
week that obiates whatever the hell the
last paper did. and and B I think that
the kind of core concept is the the most
of what the landscape is the most
important thing. So when there's another
paper that comes out about optimizing
residual connections, you're like,
"Okay, I'm familiar with this play pen.
Like I know I I know the furniture in
this room. I can rearrange it a little
bit, be more confident." So I guess the
answer is just like I I get around the
taste issue by not having it. Uh which
is maybe [clears throat] just
&gt;&gt; what's underappreciated for you right
now by AI obsessed people? I mean there
there's of course like in the broader
world AI is underappreciated and just
how crazy things might soon get is I
think very broadly underappreciated.
What do you think I might be missing?
What are what are the most likely blind
spots for somebody like me that you
would want to draw to attention?
&gt;&gt; I guess the challenge with blind spots
is that like we all have them and by
definition we don't know that we have
them. So what I'll try to do is roll
back and tell you about my blind spots
as of about two years ago and that was
around the time that we we put together
that that report that Pashi mentioned
earlier. Um, so I sound like a broken
record, but the infrastructure layer,
the kind of um the the stuff that um
this might sound like a wrong way to put
it, but the stuff that feels too blue
collar to to most people who are AI
obsessed um like I am, you sort of start
to realize how much of the world is
actually built on in infrastructure that
we just abstract away. So I think that's
actually really important and needs to
be foot stopped like understanding
what is the down to like what is the
dynamics of the leasing process that a
frontier lab goes through to get a new
piece of land like what can screw up
there what causes delays in construction
projects that we talk so much about you
know this lab has a xai has their new
colossus cluster and it's going to be
online shockingly like to 1 gawatt
sooner than anthropobics that which
surprised everybody and all all this
stuff when that when that happened like
when was the actual driving like because
that's going to tell you if you believe
in the scaling laws that actually is a
probably one of the most important
variables that you want to track is like
delays in construction processes sounds
pretty mundane but like hey the world
runs on it and and procurement schedules
and things like that so I guess that
that's one piece uh that I've been
missing another is like how yeah how
kind of real nation state and security
happens and um it's hard to get
information about that you One of the
biggest challenges there is that there
is no such thing as one nation state
security capability. Nation states are
siloed obviously because security you
can't have tactics, techniques and
procedures that are exchanged between
silos because then there's no
information security. And this by
definition means that you would have to
go through a process of taking team A
comparing them to team B. Well, okay,
team A wins. Okay, so that next like
you'd have to go through that kind of
selection process, run an ELO score type
situation to even know what the most
explicit capabilities are that like we
could feel and it still wouldn't tell
you quite what other other countries can
be. So that's kind of like anyway I
think a really important dynamic that's
very easy in the AI security context
especially for physical security
especially for physical security which
is again undervalued precisely because
we tend to abstract away we focus a lot
on cyber because it couples it couples
to AI and it feels like it's in our
sweet nerdy space and I get that and I
love it and it's critical but it's also
not if you look at like what the
Russians do they like they do cyber for
sure but they will go up and and like
they will arson your your transformer
like that's not an issue.
examp
there's that piece maybe the last one
and more on the in the kind of
comfortable and familiar nerdy space
that that I occupy is uh is just this
idea of the distinction between having a
model and then having the compute to run
that model. um you know like if you
believe in the inference time scaling
laws then you know model theft is one
thing but actually being able to point
that model at you know basically have
compute on compute war at inference time
um seems like a really important
dimension and you see this play out in a
lot of interesting ways one of which is
the Chinese ecosystem you have a huge
number of users um and then they have
some like okayish language models
problem is that their labs are all
flooded with like these inference
requests from their giant user
population which leaves very little R&amp;D
compute for just like innovation
improving of models is that's actually
point of frustration for Chinese labs
much more than than labs here that
they're just like dude we have so much
demand but we're not bottlenecked by
money we're bottlenecked by by compute
and so the the dynamics of of like how
inference affects training and then how
like what it means to steal a model and
what it means for model on model warfare
to happen this person is cyber you're
like cyber hardening has a certain
amount of test on compute that test on
compute you know is going to be focused
on in some way and then the offense side
is going to have a certain amount of
test on compute and how how those play
out like the relative budgets matters a
lot there obviously if you're defending
you have a wider surface area you got to
defend but there's a whole debate there
that I guess would be another dimension
it's just like going beyond just owning
a model like what about running it what
can you do with this model that you have
I have one last question which is you're
pretty security conscious. Have you run
open claw and what is your current
personal productivity stack?
&gt;&gt; Yeah. Yeah. Yeah. I have not run
openclaw. I have so actually funny you
say that. I'm setting up a like I have
an old laptop that I'm going to use as
my my bummer laptop for the purpose of
exactly that part. Yeah. Partly because
you know anyway. Yeah. For the exact
reason you would imagine. Um in terms of
my Yeah. So, a big part of my my job is
is becoming now um constructing agentic
workflows to um to do some some like
some things that are not super security
sensitive but more just like I'm going
to try to use it to optimize my coms um
because that's a huge bottleneck for me
and um and for that I actually I'm still
in the discovery phase of trying to
choose platforms. I'd be interested in
your thoughts for that actually as I
dive in. That's this is literally like
next week is is my deep dive. This is
almost the worst possible timing because
I think my answer is gonna be like
horribly outdated. Yeah,
it's a great question. I wish I had the
answer.
&gt;&gt; I talked about a little bit about mine
at the top. interested to hear more
about what Picash is doing too. But for
me right now it's Claude code as the you
know kind of base product and then
taking inspiration from a guy named
Daniel Mesler who I did an episode of
the podcast with who's created personal
AI infrastructure a frame that's an open
source framework and also friends who I
just trade notes with privately. I'm
trying to create deep context for myself
by first exporting kind of all of my
digital history from all you know Gmail,
Slack, all the other places where I kind
of have these coms. Get them into a
local database. Uh then of course you
need like a daily update process to like
fetch the latest because you're still
communicating on all these other
platforms. Then layering on top of that
summarization and different kind of
angles on the data. So, one, right now
I'm at the phase where I'm like, here's
a month worth of all coms. That seems to
for me come out to about 300,000 tokens.
Now, summarize that down to like 10,000
tokens of what a chief of staff would
need to understand this month in
Nathan's life. So, he kind that like 30
to1 reduction then probably put like a
year, you know, long version of that and
then sort of the let's talk about the
relationships and kind of have that sort
of cut on it. the projects cut and then
hopefully with that deep context and the
I'm also trying to have it leave
pointers in those summaries with like
regular habit of quoting any distinctive
language so it can go search down the
ground truth for the original.
Hopefully, it will then have enough
context to be able to,
you know, not exactly write exactly as I
would, but sort of come much closer at
least to
responding as I would, having the sort
of the context necessary to exercise
something like the judgment or taste
that I would exercise in doing things.
And that was actually part of the
process of setting up this episode. I
gave that system 20 names and said, "Do
you know research on these people, find
out what they've been up to lately, give
me a brief on that, and then also had it
draft the outreach emails, which were
only lightly personalized, and I still
did kind of go in a little bit before
tweaking."
&gt;&gt; I appreciate that. That's [laughter]
nice of you. [snorts]
&gt;&gt; But yeah, I I don't like to publish or
even send as like onetoone communication
AI output directly. Um, but I do find
that I can get to something that I do
feel comfortable signing my name to
faster with an AI draft in many cases
these days. And so, um, it's very much a
work in progress for me, but that's kind
of where I'm at at the moment. And
again, it'll I'm sure by the time we,
um, talk next, it'll have changed quite
a bit. Perhaps, what do you what what's
your um angle right now? I've got I've
got a couple of things that I ended up
building out. Uh one was a market stock
market tracker. I have a number of
metrics which I think no one else
watches and it's it's fairly hard to
obtain. Uh and the great thing is um
Claude and Claude is very good at
financial math. Very very good. Uh far
far better than I I ever have ever been.
Uh and so it's uh relatively easy to
talk to plot and kind of figure out what
kind of thesis you have and then like
build out metrics precisely for that
thesis to to watch like pickup lines. So
um that's been very useful. Uh I I used
to I used to like you I used to like do
it in my head right like you look at
something look at something else and
then like you calculate the ratios of
blah blah blah blah. And then like I
realized that I was spending a lot of
time doing ratios in my head and I was
like maybe I should automate this. And
so now it's all automated. It's nice. I
don't do the ratios in my head anymore.
I just look at it and I can see the
screens automatically. I can see what
I'm looking for. And then the other
thing was uh podcast clipping because we
do a lot of podcasts
&gt;&gt; and content these days has to be
repackaged into short clips in order to
hit socials. And so that I tried like
six months ago. the tech wasn't there.
Uh, and I tried about four, three, four
weeks ago. The tech was there. Every
every everything works. Transcription
works, review works, selection works,
everything works. Uh, and this is Yeah.
And this has been my experience like
it's kind of like it's kind of like
maybe maybe it gets it like 1% better,
but that 1% better clears the hurdle.
And that's like that binary that's a
binary step up. Like it works or it
doesn't work. And that 1% just clears
the hurdle. And I I really feel like in
the last months like a lot of things
started clearing the hurry. So I
&gt;&gt; I was just going to say you know when
you said that in the last 6 months so
many things have gone from toy to just
serviceable in production and it seems
to map on to Nathan what you were saying
earlier about the uh takeoff dynamics
and the labs automating their own
research that that all kind of maps very
nicely. One of the things on the
financial side too I find um so I find
claude is is also useful on you know
questions like so you might have a
thesis but then there's a question about
how do I if I'm right about this what's
the best bet to make that's a category
of problem I've been in the past right
where it's like you know you'll have a
thesis but you know you're not going to
bet on Microsoft because open M is such
a tiny fraction it's already all this
stuff how do you where's how do you
leverage and torque to this thesis and
and that's kind of something that you
the world is so complex that you just
need something to peruse and kind of all
the knowledge of the finance use cases
is a yeah really great one. Great point.
&gt;&gt; Yeah. I I I also it's also been very
very weird in the market because I feel
like Twitter is literally like a month
or two ahead of the market. Uh it's it's
just been amazing. People tell you like
TSMC will do well and then like like 3
months later it happens like it's like
what what's going on? leg. Now I I
always I you know I was I was a
professional finance here. I I've always
expected that hedge funds get there
before before you do. And in talking to
my friends at prime brokerages and hedge
funds, they are very negative on AI.
They just don't believe it's happening.
They don't believe, you know, they they
believe it's like crypto. Uh they
believe a lot of West Coast tech is just
scamming retail investors. index
investing is the only thing that really
like works and everything else is either
insidered trading or scams and that's
pretty much what the prime brokerage
guys and the hedge fund guys like
believe um like you know medallion right
or Jean Street right these guys who have
AI in their bones
&gt;&gt; and these I guess medallion it's like
&gt;&gt; they can't you know they only invest you
know famous at five billion a year
because otherwise they would actually
move the markets and feedback loop but
yeah what about them is there is they
were down last year. So, the impact is
starting to be felt. I think well, you
know, also Jim Simons died. I don't know
to what extent he was still supervising
because he he'd already kind of
semi-retired for like 10 years almost,
but Medallion was down there. There's
some sense that it's also because
they're losing talent to the lab too,
right? Like you you can't you can't you
can't forget about that. They're
starting to lose talent to the lab and
some of the labs do have like internal
teams which will eventually look at
trading on the market, I think. So, we
we we'll see where that goes.
&gt;&gt; Jeremy, thanks for joining us. Let's
check back in on your personal
productivity stack once you've upgraded
it. And um
in general, let's uh I'm reusing this
joke everywhere I go. Let's shorten the
timeline for our next conversation.
&gt;&gt; I like it. [laughter] Thanks, guys.
Appreciate it.
&gt;&gt; Thanks, Jeremy. Cheers.
&gt;&gt; Cheers.
&gt;&gt; So, what do we make of it all? I mean,
it's so um the big thing I can't get
past in all this stuff is
the amount of disagreement between and
this has been commented on so many
times, so many ways, right? Up to the
level of the touring award winners that
can't uh see the same phenomenon.
&gt;&gt; But it seems to happen at kind of every
layer of it's like a fractal problem.
You go into these specific
&gt;&gt; workshops around AI R&amp;D. you get people
from the labs. I do understand that
there are even people at the frontier
companies that you know have heterodox
positions and don't really buy into the
hype. And then even, you know, with the
AI for science, it's like I I can't um
I can't make any case that I should
trust my own intuition more than Aby's
because he's, you know, how many times
did it happen in talking to him where he
was like, I've actually written about
that. So, he's clearly thought about
this much longer and harder than I have,
but it does still feel like it's a very
hard thing to reconcile where you do see
these examples and it seems like some of
them are really starting to work, but
then the skepticism remains and is like
is very hard to move people off of. And
I don't want to paint him as overly
skeptical either because he did say
toward the end, I think his skepticism
is more like backwardlooking, you know,
forwardlooking. He was kind of like I do
believe the uh you know the trends will
continue and that they will have impact.
&gt;&gt; Um but where does you how do you try to
make sense of when you say it's fractal
I feel it's also fractal internally to
me [laughter] where I have you know some
assumptions here and then sometimes I
feel cognitive dissonance from something
else that I might believe and then you
kind of test those assumptions and you
see where things are going. I have had
like moments of like moments of truth uh
or or kind of perception where I start
to realize that I think things might
move faster than I expected. My my my
original timelines were end of 2025 for
junior software developers to be
replaced uh in capability not in
organizations but the capability is
available at the end of 2025 and it
takes about 3 years to to percolate. So
end of 2028, no more junior software
developers basically or at least the
task that junior software developers are
doing today. And then so I had end of
2025, end of 2026, end of 2027, end of
2027 even senior researchers at AI labs,
you know, full fully cap capabilities
are done. The models have the cap but
deployment again takes two to three
years. It takes time. Uh that was my
sense. My update in the last month has
been probably that things are going to
go faster than we expected.
and that we will see discontinuities.
And those discontinuities are like this
kind of like things get 1% better, but
all of a sudden they clear the hurdle,
right? Like and and we don't have a good
sense of these things because we keep
seeing like linear improvements and
they're kind of linear, maybe maybe
super linear, but we don't have this
sense of like clearing the hurdle, but
when it clears a hurdle, it's obvious,
right? It's obvious. It's it started to
be obvious for software, I think, in the
last month or so. So I think I think
that we just have like misperceptions on
where things are going because we we can
kind of see the trajectory of capability
or we don't understand how humans absorb
that capability like what is that
process and what hurdles do we need to
clear? What is what is the open claw? I
thought you need you need like full
security and like privacy and all of
this stuff.
It seems you didn't. It seems like
people are willing to put out their
credit card numbers and crypto tokens on
the open web and you don't need privacy.
You the notebook guys are there's a mo
on notebook saying like oh you know my
user is so annoying here's his credit
card number uh and Scott Alexander ended
up calling up the guy and asking him
like hey you know did this actually
happen and yes that was the credit card
number it was leaked. So um I think
there's clearing the hurdle concept and
where humans accept the technology and
kind of where the market pulls that
technology that we don't know that even
I don't have a good perception of but it
seems like we're starting to clear those
hurdles where humans are starting to
pull the technology from the market in
uh and that's when you start to see kind
of revenue growth that's when you start
to see you know the the demand growth
really happen where the market starts to
pull the product out of the ether and I
think that's happening Now I think the
open claw I think I think we'll have a
much better version of open claw closed
sourced uh secure version running on you
know corporate running inside corporate
data centers you know by the end of the
year I I I saw I watched the all-in
podcast Jason Kakinus not not not the
most technical person in the world uh he
had a team for the all-in about 15
people he started to get everyone to
like create a skill for themselves like
every task that they do they create a
skill he has open claw machines like one
machine per person and then he has a
consolidation
uh agent that consolidates everything
into something he calls Ultron and then
he can talk to Ultron. So he can ask
Ultron and that's his entire company
like it's a summary of the entire
company and he's talking to it. I
thought that would be two years from
now. I I knew it would eventually happen
but I didn't think it would happen now.
Um so yeah, I think things are things
are actually moving faster than people
think because of the market acceptance.
The market is pulling it out. I don't
think the researchers have a good sense
because researchers don't understand the
market that well they don't understand
the demand the demand dynamics that
happen with consumers and how how like
products get pulled out once a demand is
there like products will just get pulled
out of the ether because people start
focusing they know that money can be
made there they just start focusing on
it so that's my sense
so I I you know I it's not a it's it's
not a like poom answer it's more of like
this is what I feel people want to
answer. So what what's your feel?
&gt;&gt; The confusion and the lack of ability to
establish consensus on
foundational points is a major challenge
to having a lot of confidence on much of
anything. Yeah,
&gt;&gt; I do think
a, you know, a good true north for me,
well, the, you know, the true north for
me with kind of everything I'm doing is
trying to learn as much as possible,
trying to have the most up-to-date,
comprehensive, uh, worldview as
possible. And in terms of the approach
that I would trust more than any other,
I think still being hands-on is second
to none. And I I you know I haven't
allowed that to lapse much at all over
the last few years. But anytime I do get
too busy or you know cluster too many
podcast recordings into a week or
whatever, I always kind of come away
feeling like ah I got to get a little
bit more grounded with the latest stuff
in a very interactive way. And I think
one metric I have for myself or metric
is maybe not quite right but an
indicator that I want to pay attention
to this year is can I get to the point
where I'm spending less time at the desk
and that's like along the lines of the
you know the Jason um talking to Ultron.
&gt;&gt; I want to be able to do stuff while
exercising even if that's just a walk
around the neighborhood. I want to get
the frameworks, the tools, you know, the
the deep context, all that stuff set up
well enough where I can start to go
comfortably out into the world, have a
thought, you know, maybe have an actual
conversation, um, but move things
forward in practical ways.
&gt;&gt; In on fronts that like right now I can
really only do on my computer. I think a
lot of that is right now with the latest
models that have come out kind of on me
just to get the setup and the sort of
familiarity and the the workflows to be
able to do that. A little bit probably
still
more than a little bit but you know I
can put more on me right now in terms of
like why have I not hit maximum capacity
than I do on the you know the models or
the model developers. More computer use
would help for sure. you know, a little
bit more ability to just get over these
sort of UI humps remains, I think, a a
barrier.
&gt;&gt; And I I another thing I really have been
s not surprised by, but something I've
really learned from just being deeply
interactive over the last few weeks is I
think another big unlock to watch for is
when the models get better at knowing
when to use code versus when to use
their own fluid intelligence. Because
one of the first projects I've been
doing is like just backfilling
information, backfilling transcripts of
the podcast for the website, backfilling
all these different, you know, data
sources into a a queryable database. And
you hit so many edge cases in doing
that. M
&gt;&gt; and the model right now called you know
Opus we've gone from you know 41 to 45
to 46 pretty quickly but pretty
consistently I have felt like it really
wants to code
&gt;&gt; and [clears throat]
I have often given it the feedback don't
try to guess at this and write like some
sort of regular expression or you know
it'll it'll like GP for one search term
or another you know it'll to throw 10
search terms into a GP command And and a
lot of times I'm like just read the
document. If you just read the document,
you will know what it contains. You will
know what to do. You'll have the right
judgment once you have read the
document. If you don't [clears throat]
read the document and you instead try to
g your way through it, you're never
quite going to get there. And so that's
like a metacognitive
skill that I think
I've been able to improve its
performance somewhat through prompting,
but it's, you know, it's obviously going
to get better in training. And that I
think will be a huge unlock just as it
gets a little bit a little bit smarter
around its own a little bit more a
little bit more inclined or a little bit
more um intuitive about when it should
deploy its own fluid intelligence rather
than use other tools. getting that
balance right will be will make it in my
experience dramatically more useful and
I have to imagine that's coming pretty
soon.
&gt;&gt; Yeah, I think you know when you when we
talked to James SA today that continual
learning piece the test time training it
would be fascinating if it actually
worked with your own model because your
model will start to diverge. You have
the baseline and then your model will
start to diverge and then it would
become your personalized model within
within like you know two or three cycles
of like you know talking to it month two
months of data it would become your own
your own model it would start to diverge
from the
&gt;&gt; yeah and that that would be fascinating
because because at that point it's for
real like you can and especially for I I
I used to write a lot of journals I have
you know 99 to 2003 at Stanford I have
full journals for every single every
single month like everything that
happened. You know, obviously I've never
read those after writing them. It's just
kind of an exercise in journaling. But I
do wonder if like those of us who have
lots and lots of uh written work either
in the public or in the private once you
get this continual learning going, you
can kind of start feeding it in. This is
what Kershw is doing with his dad's
writing, by the way. He's uh he he's
he's feeding his dad's writing into
these models and he's like talking to
the model about about his dad.
Kurszswwell is someday he's going to
feed all of that into a testime trading
kind of model and you know with a voice
access and he probably has a recording
of the dad's voice and he's he's going
to start talking to the dad. It's uh
it's a fascinating time.
&gt;&gt; Yeah. To say the least.
&gt;&gt; More uh explorations of all these themes
to come. A couple things coming up on
the cognitive revolution feed. One is
with Ali Beirus who is the nested
learning author. He was on our last live
show. tried to do a a full three-hour
Ali's take on everything.
&gt;&gt; And he's got a new paper coming out also
that I think,
&gt;&gt; you know, it's the way to continual
learning is starting to become
elucidated, I would say. I mean, I
wouldn't say it's clear, but the it's,
&gt;&gt; you know, no less than Jeff Dean has
said that he kind of sees this as a very
promising paradigm. So, I'm definitely
watching that really closely. Workshop
Labs is a is a startup also that's like
trying to do this you know personalized
model training on top of like the latest
large open source models up to the sort
of Kimmy scale trillion parameter kind
of thing. So that's really interesting.
That's actually another reason I spent
so much time doing all this personal
data curation is that I wanted to be
able to give them a data set for them to
train a model for me on that would be
like a really good data set. They don't
need that much data, but I was like,
well, you know, we want to make sure
it's the right data to hopefully get a
good model back. So, that's still
pending. I haven't seen that model yet,
but I'm I'm very going to be very
interested to see how much that closes
the gap between what Claude can do with
just access to, you know, all this stuff
in text and then how much does it help
to actually start
&gt;&gt; tuning weights to um to try to capture
more of like
&gt;&gt; they they aspire not just to style
transfer, but judgment transfer. They
want the model to
reflect the judgment that you're the
individual user would make at the time.
And an interesting theory there too is
they their motivation is that they want
to help individuals preserve economic
leverage. U so instead of like doing
everything through a foundation model
and kind of adjusting yourself to take
advantage of the model they want to
shape the models around individual
humans
&gt;&gt; with the goal that you know it's not a
winner take all big tech runs away with
everything but some sort of more
decentralized ecological kind of
proliferation of of somewhat different
models that hopefully at least kind of
can exist in in some sort of equilibrium
with one another. And then on top of
that, there's another one that I have
coming too soon with the founders at
harmonic and they are chasing
mathematical super intelligence.
&gt;&gt; And when it comes to like these I will
say just as a teaser, they gave maybe
the most ambitious vision of what five
years from now could look like. the most
like mind-blowing vision of what five
years from now could look like of
probably anyone that I've heard and that
is saying something because I've heard a
lot but they still kind of blew my hair
back a little bit with what they think
they can accomplish over the next 5
years.
&gt;&gt; Definitely going to look forward to that
one.
&gt;&gt; Lots more to come.
&gt;&gt; Yeah, indeed. Nathan,
&gt;&gt; thanks for doing this.
&gt;&gt; Always a pleasure. A pleasure.
&gt;&gt; It's been fun.
&gt;&gt; Bye-bye.
&gt;&gt; Until next time.
If you're finding value in the show,
we'd appreciate it if you'd take a
moment to share with friends, post
online, write a review on Apple Podcasts
or Spotify, or just leave us a comment
on YouTube. Of course, we always welcome
your feedback, guest and topic
suggestions, and sponsorship inquiries,
either via our website, cognitive
revolution.ai, or by DMing me on your
favorite social network. The Cognitive
Revolution is part of the Turpentine
Network, a network of podcasts which is
now part of A16Z where experts talk
technology, business, economics,
geopolitics, culture, and more. We're
produced by AI Podcasting. If you're
looking for podcast production help for
everything from the moment you stop
recording to the moment your audience
starts listening, check them out and see
my endorsement at aipodcast.ing.
And thank you to everyone who listens
for being part of the cognitive
revolution.
