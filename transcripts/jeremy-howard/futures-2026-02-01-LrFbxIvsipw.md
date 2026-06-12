# Jeremy Howard interview at PytorchCon with Anna Tong

- Channel: Jeremy Howard
- Date: 2026-02-01
- URL: https://www.youtube.com/watch?v=LrFbxIvsipw

## Transcript

Afternoon features. Here we have a
fireside chat with Jeremy Howard uh
founding researcher at Fast AI and he'll
be in a conversation with uh Forbes
reporter Anna Tong. So please warm
welcome for both Jeremy and Anna.
&gt;&gt; [music]
&gt;&gt; here. Should I do here? Perfect.
Hi everyone. Hi Jeremy. I'm told by many
people here that you need no
introduction, but for the two people who
don't know who you are here, um Jeremy,
you're the CEO of Fast AI. You're the
CEO of Answer AI. You created the first
large language model and you were the
first outside organization to pour
resources into PyTorch. Am I missing
anything here?
&gt;&gt; That sounds good.
&gt;&gt; Okay. Well, uh, tell tell us what it was
like back then.
&gt;&gt; Um, well,
it wasn't like this. You know, PyTorch
[snorts]
was really the baby of uh two people,
you know, Sum and and Adam. And it it
came from
a longer line of software that was
written in Lua which is just called
Torch. Um and at the time Google you
know was investing heavily in something
called TensorFlow.
&gt;&gt; And TensorFlow never felt very human
friendly to me. It seemed very focused
on kind of enterprise and
&gt;&gt; making things harder for people and
easier for computers which felt wrong to
me. So when I saw what Sumouth and Adam
had done with PyTorch, uh we spent
hundreds and hundreds of hours working
with it and we were just like this is so
much more human friendly and so we just
stopped everything else we're doing and
we went all in on PyTorch. We were the
first to do so. And at the time people
were just like you're crazy. You know,
everybody knows Google's going to win.
Um, and people are like, "Why would I
come to your course
when you're teaching some obscure
open-source
random thing?" Because it's better. You
should learn this because it's it's
going to win because it's better. And
you know, the uh the first language
model, first large language model, as
you say, was a ulm fit that was written
in PyTorch.
And it wasn't written on some big
enterprise thing. It was written in a
little Jupyter notebook. and it smashed
every state-of-the-art
thing that was there. Same problem.
Everybody told me, "Why are you working
with language models? Like, nobody
cares, you know, everybody knows that's
not the future." And I said, "Well,
they're wrong. You know, transfer
learning is the future. This is what's
going to work. This is what's going to
change everything." And you know it's
great because the people who were in
those courses where we were teaching
PyTorch and we were teaching language
models and they did indeed learn the
future and now a lot of them are running
the major research labs or the CEOs of
the big hot startups. You know it's no
point following. You got to you got to
see where things are going and you got
to lead. You know
&gt;&gt; what was it like to create the first
large language model and how did that
how how did that work?
So,
[snorts] I'd been telling people for
years that the natural place for deep
learning, you know, the the type of AI
that we were teaching and researching
was in natural language. And that was
extremely controversial. Everybody
thought that was stupid. And I got sick
of trying to convince people of it. So,
I thought I'll just do it. And it was
literally by I I decided to do it. And
by the next day, I had done it. And the
very first thing I tried against was
basically the hardest academic
benchmark, the IMDb benchmark, the
longest documents, you know, the the
most tricky um that been very heavily
invested in. And my very first result
was substantially better than anybody
had ever done. And it was just like,
holy crap. because I'd studied
philosophy back at university and I'd
studied this idea that goes back a long
time of like what if
just being able to,
you know, kind of symbolically,
statistically, whatever, like finish a
sentence,
you know, looks like the essence of
intelligence. What if you, you know, can
you tell the difference between real
intelligence and and that? And I thought
like, no, you can't tell the difference.
So, I've been thinking this for 30 years
and now I had like an algorithm that was
doing it. But again, it still took a
really long time because um Alec Radford
at OpenAI saw that work. He told me and
he was like, "Oh, this is going to work
great." And so he turned that into what
became GPT again, you know, PyTorch,
Jupyter Notebooks.
Um but nobody understood the the core of
the essence was this transfer learning
fine-tuning idea and it wasn't until um
chat GPT came out
&gt;&gt; y
&gt;&gt; that used that exact approach the exact
same three-stage approach that everybody
was like oh this is a good idea. So it
takes a long time for an idea to
you know percolate.
&gt;&gt; Yeah for sure. So we've established that
you are are contrarian. So let's get
into some of your current contrarian
takes. So, I think, you know, today
we're hearing AI agents, AI agents, AI
agents. Everyone is saying the future of
AI is for AI to do everything for you.
Um, what do you think of this? Do you
think that's a good thing or a bad
thing?
&gt;&gt; Um,
I don't think that's terribly likely to
be true. But regardless, we can see that
there's two possibilities. Either it is
or it isn't. Right? The question is,
what should you do about it?
If it is true, right, and if AI takes
over everything and does all the work,
then it doesn't matter what you do,
you're going to be obsolete. So,
whatever, right? On the other hand, um I
think it's reasonably very likely that
it won't be true and people will be very
much needed. Now, what should you do
then personally? Well, if people are
needed, then if you go head first into
agents, agents, agents now, and you like
you're going to stop learning. You won't
be practicing your craft of coding, of
building models, of analyzing data.
You'll be outsourcing it all.
So, you're going to be in the group of
people who just staltify.
And I plan to be with a group of people
who who uses AI very
carefully and thoughtfully to make me
continue to improve in my craft. And so
I'm using AI now to get better, for me
to get better at my work, for me to
learn more, for me to get more skills,
for me to practice better. Um, so I, you
know, for me, I would say for the humans
in the audience, you know, you should be
focusing on how can AI help you improved
as a craft person? How can it help you
improve to develop your skills? If you
outsource everything,
you know, I'm seeing this happening
already, Anna. Like people are
like
forgetting how to do work. You know,
they're forgetting they can do work. And
if the AI can't do it for them, they're
just like they're lost. And the thing
is, I think it's bad for the psyche as
well to be like outsourcing everything
to AI. It's creating thousands of lines
of code. You can't understand it all.
You can't keep on top of it all.
And it's really stressful because it's
like then it doesn't work or like later
on you have to integrate it and you
don't know how and you just get this
bigger and bigger pile of debt
&gt;&gt; and it just I've seen it weighing on
people. I've seen people becoming just
depressed that they're no longer
competent and they are no longer in
control. So to me and the agentic
approach is like the computer is in
control. The human should have agency.
you know, you're not going to go after
this and like write up an article where
you say, "Please um uh chat GPT, write
my article for me." Like you you would
be losing your craft as a writer. You
know, it's like what's the point? Uh, so
I think [snorts] I would be very very
careful of spending too much time
trying to get agents to do your work for
you because I think that is you are on
the path regardless of what happens to
AI of making yourself
uh obsolete and incapable.
&gt;&gt; Well, do you think it makes people
faster or you know there's this argument
that we're now able to write and ship so
much more product now?
Um, I I'm not sure. I think I think like
in the short term maybe, but probably
not. The people I know who have been
diving deep into AI powered coding, I
have personally experienced they seem to
be shipping less
&gt;&gt; but creating more code. Now, I think the
problem is the AI code isn't very good.
It isn't very well integrated. It
doesn't create layers of abstraction
that fit nicely together. When you in
when software engineering is going well,
you should be getting faster and faster
and things should be getting easier and
easier. With AI code, it's the opposite.
So I people I see people using AI more,
create more code, but ship less product.
Now sometimes maybe it's a little faster
in the next 2 months,
but you're not building your skills as
well. You're not learning as much.
You're not building as powerful a set of
abstractions to like craft better and
better stuff on. So, in a six-month time
frame, I would say almost certainly
slower. In a two-year time frame, I
think companies that bet too much on AI
outsourcing
are risking destroying their company
because I think in two years time
they're going to be looked back and be
like, "Wow, in the effort to get a quick
twoe result here,
we destroyed our competences for an
organization to create things that that
last
So how should we be using AI? Maybe to
check our work or to ask questions or
how are you using it?
&gt;&gt; Yeah. So that's actually so um answer AI
which is kind of fast AI's parent
organization now is that's what we're
dedicated our mission to do is to figure
out how can humans
use AI to you know where humans have
agency and they empowering themselves to
sustainably
do high quality work and to get the
answers they want. So um so we've
actually got a a new course coming up
where we try to like teach people a way
of working with AI where
uh you do small pieces highly iterative
a little piece and you try to write it
yourself and you have an AI kind of in
there with you
watching and kind of giving you tips and
you can ask and but when you ask it's
like totally written in a way to say
don't solve the problem for them just
guide them And we found in this so we've
created this uh shared environment
called solve it um which is actually
based on principles from a 1945 math
book by a guy called George Polier um
how to solve it. So these ideas been
around for decades of like there are
principles about how to do high quality
work and so we've tried to create an
environment and a way of thinking where
the AI is in there with you
&gt;&gt; interacting with you and the environment
that you're in. Um so my the similar
ideas also my co-founder Eric Ree
created the lane startup a book and
movement
&gt;&gt; and the whole approach of you know the
minimum viable product of short
iteration cycles it's it's all the same
thing. So he's writing his new book with
the help of Solvent. Solvett's written
none of the words, right? But it's in
there with him in the book as he's
writing it, helping him fact check,
helping check transitions, you know, and
and and the more he writes with it, the
more it knows what he's trying to do,
what kind of help he needs. So again,
he's he's becoming better and better as
a writer because he's practicing his
craft. He's getting the feedback and
he's doing the work, you know, and he's
the agent.
&gt;&gt; Yep.
&gt;&gt; Um, and same for me. I feel like as a
developer, I'm a much better developer
than I was 2 years ago cuz I'm all about
using AI to help me get better. I want
to I want to outrun the AI. Like if in 3
years time AI is a lot better than it is
now, but it's still not making all of us
obsolete, then which people are going to
be valued? It's going to be the super
great people, right? So if you're
somebody again who's let AI do all the
work, you've basically become
incompetent. You're no longer your own
agent. You're not going to be one of the
people that still matters. So, you know,
as AI gets better, it's more and more
important that you are that your skills
are growing faster than the AI skills.
&gt;&gt; I gotcha. So, um you've been a major
open- source advocate in the past. Do
you still feel this way with um frontier
level AI models? Should they be open
sourced?
Yeah, I mean I I never used to be a
particular kind of
radicalized open-source advocate or
whatever. I mean, I used it a lot. I
loved it. Fast mail, which is one of my
earlier companies, big email provider
that lots of you probably use. We were
one of the very first to use Linux. We
were using Linux at a larger scale than
anybody in the world at that time back
in the late '90s. Um, I've always felt
like open source is,
you know, the right way for the global
community to advance our
software capabilities. But now I think
it's much more important. Um, AI is now
a source of power in the world. It's
becoming an increasingly important
source of power.
There have been many times throughout
human history where technology has
created power. various types of
technology, you know, everything from
the printing press through [snorts] to,
you know, technologies like effective
education or writing.
At every point there's been a major new
source of power, a group of people says
like that's too dangerous for most
people to have because some people will
misuse it. So only the rich and powerful
should have it. And we're seeing it
again now with AI. Mhm.
&gt;&gt; The problem is that actually the rich
and powerful are not the people that
could be most trusted with that power.
So if we let AI just be in the hands of
rich and powerful people, the best AI,
it it could literally tear apart
democracy at its foundations. So I feel
like we're actually at a point now where
we have to reinvest
in enlightenment principles.
Enlightenment principles is basically
this idea of saying okay there are bad
people in the world but we believe that
that humans overall are are good. They
are a force for good and that when
there's a new power in the world
distributing it is the safe thing to do.
Centralizing it is the unsafe thing to
do. So open source is the way we ensure
it remains distributed. You know,
PieTorch
is what everything is built on today.
You know, none of this would exist if
this open-source
didn't exist, you know, and so I think
we all have to
recommmit to this principle that okay,
some people will use this technology to
do bad, but most people will use it to
do good. As a result, by using this
technology to help defend against the
bad guys will be much more powerful than
locking it away so that only the rich
and powerful can use it.
&gt;&gt; I mean, I think AI is different though
because it requires vast amounts of
compute in order to train frontier level
models these days. So, what should we do
to, you know, ensure that we still have
democratic access to AI and that, you
know, small labs can still make great
models?
&gt;&gt; Yeah. Again, you know, we've faced all
this before as a global community and
countries that have looked at things
that inquire huge capital investments
like giant coal fired power plants, you
know, um, uh, fiber optic lines down
every street for telecommunications and
so forth. We figured out ways to do it.
We've said like, okay, the government
needs to play a role in ensuring that
everybody has some level access.
um private institutes, you know, have a
role in taking advantage of markets and
capitalism, you know, in that as well.
And like we need to find a way again of
um not ending up with, you know, 10
different groups all spending a trillion
dollars. You know, the government needs
to do some pieces of it. The government
needs to ensure that there's some level
of access, but there also seems to be
some level of competition.
Um I I don't think any of this is new,
right? Like we you know the the early
days of electricity, some companies,
countries like China only gave
electricity to the elite and some
countries like America said we're going
to put it down every road in New York
and make sure every everybody has access
to it. And again, I think in the end we
found that trying to make sure that
everybody has access to these
technologies is the way that actually
benefits us all better.
&gt;&gt; Do you think it's too late? I mean we
are already in a state where just a few
companies have a lot of have all the
access to compute
&gt;&gt; you know I mean
it's funny to say this given the kind of
geopolitical history but at the moment
China's the country that's saving us
from that so the best open- source
models today are all Chinese um I don't
find this particularly surprising
because you know having spent quite a
bit of time in China is a very you know
the kind of the system there really
invests in computer science science and
in math and a lot of people believe in
in openness. Um so that's been very
important but I also think yeah it be
great to see America turn things around
the one company actually that has stood
out head and shoulders above the others.
than that there's two uh one is Meta
right
&gt;&gt; the creators of PyTorch and the other is
Nvidia who just in recent months have
created some of the world's best models
and they are open source and they are
openly licensed
so no I don't think it's too late I
think there are some pioneering
companies that are showing the way
&gt;&gt; so final question for you um what's
something you're really excited about in
the next year that's that you think will
be enabled by AI or a couple things
you're excited
I mean, I I'm honestly really excited
about the work we're doing. You know, I
feel like we've discovered
a way to work with AI that
is deeply human, uh, deeply supportive
and is the very opposite of grind and
vibe coding and agents, you know. Um and
it's small iterative steps where the you
know humans and the AI are kind of in
the same canvas working together and the
focus is on improving the the human
capabilities. So I'm sure a lot of
people in the audience have done the
fast AI courses in the past. We're going
to have a new fast AO course next year
uh which will be language large language
models and deep learning for coders and
it'll be really like harnessing this
idea of like getting everybody in this
environment to to learn the foundations.
You know, we got to do a similar thing
for kind of the foundations of the
internet and web programming. We'll do a
similar thing for um building startups.
Uh, I'm I'm really excited about this.
You know, I feel like we've discovered
something important here at a really
critical time of how to
work with AI in a way that that supports
humans rather than replaces them.
&gt;&gt; Well, thank you very much for your time,
Jeremy.
&gt;&gt; Thank you, Anna.
[applause]
