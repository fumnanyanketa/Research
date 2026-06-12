# The three paths AI could take from here - Shawn Wang SWYX interview [Podcast #208]

- Channel: freeCodeCamp.org
- Date: 2026-02-20
- URL: https://www.youtube.com/watch?v=kQqrMNviM9U

## Transcript

Welcome back to the Free Code Campamp
podcast. I'm Quincy Larson, teacher and
founder of free codecamp.org and we are
interviewing Sea Wang, aka Swix, who
coined the term AI engineer and has been
teaching devs how to fully leverage LLM
tools for the past four years. I hung
out with him last weekend at Stanford
University's Tree Hacks Hackathon.
15,000 developers entered this
hackathon. Only 1,000 were selected to
compete and Sean got to judge and help
choose the winners of the hackathon. I
also got to hang out. I shot a ton of
footage. We've got a documentary about
the hackathon coming soon. Before we get
to the interview, some community news.
Free Coke Camp just published a
comprehensive course that will teach you
how to use security focused KI Linux
operating system. You'll learn how to
identify, exploit, and defend against
realworld vulnerabilities. You'll also
build a solid foundation in penetration
testing, network security, vulnerability
assessment, and more. Most importantly,
you'll learn how to think like a
security engineer, and leverage tools of
the trade like end mapap and wire shark.
We also published this guide to passing
the certified Kubernetes administrator
exam. Bo Car teaches this course which
will walk you through key DevOps
concepts. You'll start by setting up
your Kubernetes practice environment.
Then you'll bootstrap a multi-node
cluster and your control plane. Then
you'll learn about Helm, high
availability, autoscaling, core DNS, and
more. That's a free 2hour course on the
Free Code Camp YouTube channel. Links to
all these things are in the description,
but please finish listening to this
interview before you jump over to those.
I know it's very exciting. Uh, and we
published a fulllength handbook on Freo
Camp Press last week that you can read
right in your browser. It will teach you
modern React data fetching best
practices. You'll learn how to leverage
suspense error boundary, the new use
parenthesis API. And if you're
interested in web development, front-end
development, this is well worth
bookmarking and reading when you have
time. Again, it is a heavy read. And
speaking of heavy reads, a heavy watch.
We just published a DevOps course that
free co- camp instructor Gavin Lawn
finished. Uh you'll learn how to take a
full stack app on your local machine and
ship it to a fully containerized
production environment. Along the way
you'll learn about CI/CD, that is
continuous integration, continuous
delivery pipelines. Uh you'll learn
about Docker images, launching
containers, and more. By the end of the
course, you'll have a professionalgrade
pipeline that automatically builds and
deploys your updates with every push.
Again, 4-hour course on the Free Code
Camp YouTube channel. This week's song
of the week, 1980 classic, Turn Me Loose
by Canadian band Lover Boy. When I was a
kid, I thought the name for this band
was so cringe, but turns out they're a
freaking insane band. Really strong
chops on these gents. Uh, so the song is
built on top of a super catchy
syncopated baseline and it just has the
most expressive vocals. The vocalist is
really dynamite, really soulful. It's
got these cool ' 80s buzzing synths.
It's got these really percussive piano
and the guitar solo is top shelf. Give
it a listen after you finish listening
to the podcast. Support for this podcast
comes from the 10,121
kind folks who donate to our charity
each month. Join them and support our
mission at donate.freeccoamp.org.
You can also pick up a free Codeamp
shirt and rep the free Codeamp community
with pride. $20 gets you the shirt
shipped anywhere in the US.
Shop.freecodeamp.org.
And for the main course, today's
interview with Sean Wang. He's a
software engineer, founder of the AI
engineer conference, which is having
upcoming events in Europe, Singapore.
It's really taking off. like a lot of
people are interested in uh the kind of
overlap between software engineering and
leveraging AI tools, fleets of agents,
getting things done. It's pretty
awesome. So, uh he's the host of the
latent space podcast. If you want to
learn about like kind of the most
advanced machine learning and u you know
just a lot of the leading edge, check
out his podcast too. I listen to it a
lot myself. We're going to talk on this
interview though about how even if LLM's
plateau, there will still be paths to
better output through the surrounding
harness code and three big areas that
researchers are exploring that Shawn
thinks can further improve model
performance. World models,
multimodality, and embodied AI. That is
taking an AI and putting it into a robot
for an egocentric firstperson view of
the world. Crazy stuff. Uh Sean also
shares which skills he thinks are the
most important for developers going
forward and why he thinks you should
switch to your own self-eing uh you
should switch from thinking in terms of
just in time learning to just in case
learning. Sean Wang, welcome back to the
Free Code Camp podcast.
&gt;&gt; Hey Quincy, how's it going? Good to see
you.
&gt;&gt; Rocking and rolling, man. I'm thrilled
to have you back. This is your third
time on and uh we've learned a lot from
you in the previous interviews and I'm
excited to learn a lot from you this
time too. I always it's always a good
time chatting and uh happy to entertain
where I can, educate where I can as
well.
&gt;&gt; Right on. Well, let's start with Tree
Hacks Stanford's uh hackathon. Last
week, you and I hung out there. You were
judging. I was recording a documentary
that will go live on the free co
podcast, uh the free co YouTube channel,
probably within the next month and a
half, two months. Uh but it is a very
exclusive hackathon that 15,000 people
applied for and only 1,000 entered. So
that's a very uh similar to Stanford's
university admission rate in terms of
the people that are able to actually
participate and uh some banger freaking
projects came out of there. I was super
impressed. But uh you were judging what
was your favorite project?
&gt;&gt; Um I I don't remember their exact name,
but it was a project 195. Um, and I just
remember that cuz I was trying to enter
it in the system and it kept refusing
me. Uh, they did like this sort of
reverse engineering project where they
had this like sort of universal unlock
tool kind of that you could throw it at
any binary. So, you know, imagine they
had a drone, they had like old Logitech
thing where you lost the firmware
documentation and it was just it's just
like an executable file and they were
like, "Okay, what what can I do with
this?" Um, and so they worked out a
reverse engineering script that could
just like turn any piece of software and
and sort of expose the internals so that
you could then create controls and vibe
code anything on top of it. Um so it's
basically reverse engineering by looking
at binaries and I thought like wow I
mean like you know the fact that this
this can just be a weekend project that
um makes any sort of outdated super old
software like suddenly instantly
relevant but also like you know it can
be turned into a hacking tool if uh if
you you know know what you're doing.
It's kind of like a lock picker for like
digital software and like that's kind of
very cool. And so uh I really like it
also because then they also did some uh
fine-tuning on open models uh in order
to improve their performance on uh
reversing binaries. And I thought that
was like a really good example of like
this is not just like throw an LM at it
and then you know take credit for what
the LMS are inherently capable of doing
but this is actually applying machine
learning and AI engineering to uh push
LMS and spike LM in useful ways. Um, and
I I thought like, yeah, this is the kind
of project I want to see. I think
there's a lot of lazy LLM engineering
out there that um, you know, it's it's
just kind of throwing a nice UI on on
what is essentially already in the
model.
&gt;&gt; Yeah. The criticism a lot of people have
is like a lot of products are
essentially just wrappers for foundation
models. Is that an accurate
characterization of a lot of products
coming to market?
&gt;&gt; Yes, but you know, chat GBT is a rapper
over the GPT API and that's okay. like
there there are valuable rappers out
there. Um I just like for a hackathon
you want to have something technically
impressive. So I do think uh there's a
difference between what is technically
impressive for hackathon where you
should win on merit versus in the
business place. Yeah. If you uh make a
rapper that is shinier than the other
rappers and make more money then more
power to you. No judgment.
&gt;&gt; Yeah. Well, let's talk a little bit
about the nature of hackathons. Uh,
you've probably participated in a lot.
I've participated in a lot. I've judged
a lot. Um, but I had the luxury of
judging before these LLM code generation
tools became ubiquitous. Um, and uh,
I've seen them be, you know, pretty
rapidly adopted by uh, devs at these
hackathons, both student hackathons and
non- studentent hackathons. uh can you
talk about how hackathons have changed
and how these LLM tools have I guess
been adopted?
&gt;&gt; Yeah. Um I think
one thing that's uh pretty obvious so I
used to do hack I used to organize
hackathons myself. I used to attend
them. I no longer do. Um mostly because
in San Francisco at least there is a
rise in hackathon cheating where
basically uh you know the the spirit of
the hackathon is you land there you
start from kind of a blank slate as as
close to blank slate as possible and you
do most of the substantive work at the
hackathon. uh a lot of pe a lot of
winners these days and a lot of
hackathon organizers actually kind of
just have let that slide and so people
mostly come with 99% done work and then
they like they're like oh okay like I
guess today Google's the sponsor so I'm
going to use the Gemini API but other
other than that other than tweaking the
model string and the API provider
everything else stays the same from like
a previous work that they've done and
then they win because it looks good and
it's obviously a lot of substantive work
polish and no one checks whether it's
done during the the weekend and the
hackathon organizers also don't care
because they want impressive projects.
So it's like it's like a weird like bad
incentive uh that I don't really know
how to navigate and and obviously it's
also unfair to compete right under under
those conditions. So uh I think that's
one thing that's sort of a non-technical
reason why hackathons are are a weird
area for me. Um I do also I did also run
into nontechnical people at tree hacks
who had good submissions and they don't
know how to code and they were like yep
I I'm a medical student. uh I was
working on this thing and I'm like well
I you know I would love a weekend uh to
to code up something that I I would use
and they did and they don't know how to
code and I think that's like fascinating
because now a whole generation of people
are enabled to do like you know software
informed by their domain expertise but
they don't need a developer like the the
the the lady I judged was just a single
individual and she was a medical student
and she showed like some radiology thing
I didn't understand but great for her
like she could do it and she could make
that vision come to life without hiring
an expensive Stanford CSgrad.
&gt;&gt; Yeah. And I I think it's awesome that
people from outside of software
engineering as a discipline who have a
lot of the domain expertise in like the
sciences for example or in other fields
of engineering can essentially kind of
like do their best impersonation of a
software engineer just by using
superpowered tools. Um, and I want to
talk about those tools a little bit
because uh, it is definitely tempting
for somebody who is a developer already
to just say, "Okay, there's a lot of
turnover in the tools. There's a lot of
fads here." You can see like like it
almost feels like trying to chase shiny
objects, shiny object syndrome. If
you're going out and installing the
latest and greatest thing, if you're
buying like, you know, a Mac Mini to run
uh, you know, claw open claw on or
something like that, is that even going
to be a thing? like a few months from
now or is some new tool going to be just
better in every regard like because
there's so much turnover. Reminds me of
the JavaScript framework wars where it
seemed like every week there was some
new framework that like did something
better than the other ones and and they
were inoperable like not interoperable
and you had to like essentially throw
out like a lot of the skills you learned
to do one to do a different one because
they'd be using a different paradigm and
they were all very opinionated stuff
like that. like uh and my reaction there
and a lot of people's reaction there is
like cool I'm just going to focus on
learning the fundamentals and we'll see
what happens with these tools way high
up in the layer of abstraction and uh
later once there's a solidified kind of
tool chain I'll adopt it and you could
definitely say that like for example
React has one NodeJS has one you know um
to extent like like express and stuff
like that like like uh Yes, there there
is there are still some people arguing
otherwise, but if you go into an LLM and
you start building an app, it's probably
going to use Reaction. It's probably
going to use Node to build that out,
right? Um, and I think that's a sign
that like they are winning and they have
an incredible amount of momentum by
virtue of being so well represented in
the training data on GitHub. You know,
like most projects on GitHub are
JavaScript projects and if they're full
stack, they're probably using Node, for
example. So like my question, a very
long one, but essentially I'm just
trying to say should people wait and
just focus on things that aren't going
to change like computer science
concepts, database concepts, network
engineering concepts, or should they
venture out and start experimenting with
these new tools knowing that there is no
real terrairma there and that it's going
to take a while for these to settle?
Yeah, I think you and I somewhat agree
and then somewhat disagree and it's it's
interesting to tease out the
differences. Um, now let me provide the
counterpoint. I'm just going to like
complete provide the complete
counterpoint, right? Like um a lot of
this kind of learning is just in case
learning. Uh you're you're learning
because you imagine that the
fundamentals are important to understand
the whole system. Uh, but you know, did
you learn how every single part of the
car works before learning how to drive?
Well, not really. You just get in with,
you know, some someone like watching you
drive and you press the pedals here,
turn the steering wheel there, you're
good. Um, and in in in in some ways like
software is becoming more abstracted,
right? Uh, most people uh will not will
never learn assembly. Free code has
never taught assembly. Uh, right. I
don't know. You guys teach a lot.
&gt;&gt; No. and and like
&gt;&gt; I don't even believe that we have like a
extracurricular video course on it and
we've got extracurricular courses on
practically everything including like
cobalt but like we do music now you
know.
&gt;&gt; Yeah, we have we just published a chess
course the other day I'm very excited to
watch.
&gt;&gt; Yeah.
&gt;&gt; Yeah. So, so you know what I'm saying?
Like, so um there's layers that just get
solidified and like they're so reliable
that um you just don't need to know them
like or you can learn them just in time
when you actually need to know them, not
just in case when you just because you
think it's it's fundamentals. But like
30 years ago, assembly was fundamentals
and then like 20 years ago, let's let's
call it C++ was fundamentals. Um and now
now this is the the the phase where like
well maybe databases and maybe that kind
of infrastructure maybe Node.js JS,
maybe React. These are all fundamentals
that maybe get abstracted away. Like it
it really like we start to get into this
field where um things are definitely
moving faster than they used to be and
timelines are accelerating and it's
actually not that clear to me what is a
fundamental that there's a lot of things
that will never change, but what must
you learn in order to be productive and
like to get yourself out of trouble,
especially when LMN's run into trouble,
which they do. Um and uh and what it's
like a a basic component of literacy
where like yeah I don't use calculus
every day but like am I happy that I did
calculus in school? Yes. Like it helps
me think about derivatives and helps me
understand like gives me at least what I
know I don't know so I can at least have
a basic tool set to go and go and learn
everything else. So I think that's like
what you want to aim for not to learn um
too much of the fundamentals just in
case because that can take up too much
learning and actually you just want to
build and then learn just in time and
especially because in this era learning
just in time is actually a lot easier
than it used to be. Right? In the past
learning just in time meant oh I need uh
I suddenly run into this problem where I
need to level up. I need to stop what
I'm doing and I need to go take a free
code cam course, sit down with Andrew
Brown for like four hours and like learn
AWS, whatever. Um, and then I come back
and I and I can I you know like I know
kung fu now and I can go do that. Um,
that used that used to be the case. Now
it's just an LLM query, right? So the
the just in the the the the speed of
just in time learning has dramatically
decreased uh increased and I think that
that means that your just in case
learning strategy should adapt right
because then you don't need to frontload
so much learning. So I think that's
that's one uh important thing. The
second thing is a career strategy thing.
Um before I move on the career strategy
thing you want to respond to that I
don't know if you want to
&gt;&gt; you have any difference on the just in
time just in case. I mean all this is
very interesting and uh I like your just
in case learning as a as a kind of like
analogous term to just in time learning.
Just in time being like a kind of
manufacturing production terminology
that we imported into education. Um
one thing you mentioned is like you
don't need to know how the car works to
be able to drive the car. But if you
look at like the kind of people that
drive cars or work with cars, like you
have of course like drivers, people
driving driving like Uber or something
like that and they're going to make
dramatically less money and probably
have a lot less job security than
mechanics and mechanics are probably
going to make less money and have less
career security than you know automotive
engineers who are actually like building
and testing the different systems that
power the cars. So there is like a very
clear kind of like hierarchy or there's
a clear kind of like pathway upward uh
to where like the value is so to speak.
I mean there's certainly value in
driving a car and having people drive
you around and stuff like that but uh
and having people be able to fix your
car and having somebody local who you
can trust who can do that like that's
why mechanics make pretty good money.
But being like an automotive engineer
where you're maybe making hundreds of
thousands of dollars and you're being
able to do like like kind of almost like
artistry uh when designing these cars
and stuff like that like that requires a
whole lot of additional skills. So you
could almost look at like each of those
is like maybe like a a four-year jump in
the amount of training necessary uh
between those different tiers. Do you
think like similar tiers are going to
exist with software engineering going
forward where yeah there there could be
like a you know the equivalent of like
the WordPress dev who installs Woo
Commerce and helps build out like the
the very simple e-commerce experience
that like a small local business needs
versus the person who's building like
software as a service tools versus
somebody who's you know training machine
learning models and stuff like that.
Yeah, I mean absolutely and there always
has been and there will continue to be,
right? I'm not saying the levels change.
Uh there will be levels and obviously
the more specialized you are in valuable
fields, the more money you'll make. Uh
but the the mix of just in case versus
just in time has probably shifted at
every single level.
&gt;&gt; Um
&gt;&gt; yeah, that's very helpful. That's that's
very helpful perspective. So uh I think
we can move on. Yeah.
&gt;&gt; Yeah. So then the the second part is the
career strategy part, right? So the the
the the so the main statement that you
made was like well I would just wait
right for people to figure it out cuz
there's a lot of fighting right now and
I don't know what's going to win and
I'll just learn fundamentals right so um
I debunked that on the just in time
versus just in case side of view and
then the career strategy thing is
something that I have preached in the
sort of the learn in public uh stuff
that I did before like my book and
everything where you know you cannot
have you cannot beat uh other people in
years of experience in Rails because
Rails has been around for 20 years,
right? So, uh but you know what what you
can do uh is specialize in the thing
that's only been out, you know, you
can't have more than 5 years experience
in a thing that's only been out for 5
years. Um and so like sometimes being
early in a field and being um you know,
genuinely like good and right and
throwing a lot of effort into it makes
you a leader in that field and that's
how a lot of the leaders in the field
got started anyway. like how did you
think like you know the the the sort of
early uh uh sort of Django people um you
know stood out like they didn't they
didn't sit around and wait for like
people to figure out whether whether
Python will win. They were just like
Python's cool I'm going to build Django
and Django won.
&gt;&gt; Yeah. So there's some risk and reward
like you could absolutely have adopted
one of the many frameworks that we don't
even know the names of before and said
I'm going to be the early mover to that
and maybe they have a single conference
and then they've lost adoption and
&gt;&gt; uh you know it was like a nice one-year
fever dream that this was going to be a
thing but now it's something people
barely even remember.
&gt;&gt; Yeah. So I do think like you one there's
some luck involved. Yes. But there I
think there's a lot more strategy which
is something I focus on. uh for people
who are interested they can search my
how to create luck article where I think
a lot of people you can sort of break
down luck and you can make yourself more
lucky if you have good strategy and uh
that's a nuance that a lot of people
miss anyway um I uh I do think that like
sincere hard work on a thing even if
it's wasted ultimately is impressive to
other people who will then hire you to
say like okay like you you bet on you
bet hard on a thing it didn't work out
but I see the effort and I see the
talent. You just were unlucky. But here,
come work for me on this on this new
thing. Uh I'll give you a shot because
you like there's so few people actually
put genuine effort in betting on
anything. Everyone wants to wait.
Everyone wants to be like
&gt;&gt; everyone wants to like just jump around
and like be shallow, whatever, right?
But um if you just put deep work on
anything, I don't care what it is. Um
and and then you change your mind later,
people will recognize the the sincere
effort in that thing anyway. So, um I do
like that and I do like the career
strategy and then I think there's a
there's an economic
fun meme that may not be that uh funny
in the sense of uh I do genuinely think
that there is some amount of
acceleration in tech where the people
who for example can command tens and
maybe uh in future hundreds of coding
agents and do be a lot more productive
will severely outstrip the productivity
of people who refuse to learn anything
about coding agents and therefore their
economic value will be not like double
like 10x 100x. Uh and that means that
like the the the disparity and
inequality will increase and so if you
wait you will you will necessarily
choose to be behind and I think the the
opportunity cost of waiting has
increased over time like it used to be
the case in the 2010s that you could
just wait it out because JavaScript
doesn't change that much front-end
development and browsers have a like a
yearly refresh cycle let's say right
like of like well the browser is mostly
the same from year to year like it's not
going change that much. Like if you're
in mobile development, yeah, mobile's
not going to change that much. Um, in
AI, it's it's very different. And you
you can't just be like, "This is how it
used to be like when I was younger. Now
it's probably the same." Like, no. Like,
I think that's that's a very uh sort of
naive assumption uh based on like not
really looking enough at the
fundamentals of what's going on. Um and
I and I do like and I say this knowing
that like yes I I I worry about hype and
yes um some of this will will be like it
is very bubbly and some of this will
will come will look back and like say
that oh that was that was like a
hilarious like joke and all that and um
people have had lots of mania before. Uh
I do I do think there's enough here
though that um you should probably take
it seriously uh in in the sense of um I
I do think like it's much more personal
than it ever used to be in every prior
technology shift. Um and it's much more
relevant to your to your uh to your to
your to your to your career outcomes um
if you if you're early versus if you
wait. And um I think maybe a last like
Yeah. So, the meme I'm referencing is
the permanent underclass meme where like
if you don't get on board, you're you're
always going to be like part of the
permanent underclass. Uh meaning like
you're going to miss forever and uh
yeah, the fear of missing out. Um
&gt;&gt; yeah. Yeah. So, I don't I don't I don't
strongly believe in that, but like I see
it, man. Like
I see the argument and I'm not sure it's
wrong.
&gt;&gt; Let's talk about the breakthroughs. So,
we know that there have been some
breakthroughs. Uh, reasoning models that
has been a major unlock for me. Like the
quality of my LLM response has gone up
through the roof. Uh, who's the guy that
you had on the latent space podcast a
while back? Nathan something.
&gt;&gt; Uh, we've had Nathan Lambert on RHS, but
also uh Nome Brown who led recent
models.
&gt;&gt; That's the guy. That's the guy. He's the
uh diplomacy champion. Mhm. Yeah.
&gt;&gt; I'm gonna link that episode because that
guy is fascinating and his contributions
are
&gt;&gt; it's very funny. Yeah, the sequence is
weird. Uh so Diplomacy is like this very
uh unusual game that's more complex than
chess or go. Um which which people
understand like complexity is a game
makes makes it harder and harder for AIs
to solve. Uh in diplomacy you have to
talk and and like uh lie and convince
and and collude with your fellow players
in order to win. And so it involves like
conversation and so this is a uniquely
like only LM could have done this
because before this and it's it's hard
to generate like convincing robotic
voice. Um and so yeah no like one
diplomacy with an AI with with with real
human players and the human players
didn't know and then after that he won
as a human in person and he he won the
he he was a world champion on that too.
So he's the world champion both through
cheating by leveraging an LLM and
cheating air quotes like not doing it
the way it's intended.
&gt;&gt; Yeah. Yeah. Different. One was an online
Yeah. One was an online contest. The
other one was like an inerson World
Series type thing.
&gt;&gt; Yeah. Yeah. And because he had the
domain expertise of being like the best
diplomacy player, I'm sure. And also had
like a whole lot of uh machine learning
chops. He was able to combine the two.
The one thing I was trying to get out of
him was like, did your play improve
because you had an AI sort of training
you in the same way that people play
chess now? Everyone plays with a chess
engine because why wouldn't you? Uh, and
he's like, "Yeah, of course." Like,
why would you not when you have a we
have a teacher that's smarter than you
and perfect? Um,
&gt;&gt; feedback loop that's virtuous because he
can then turn and say, "This this isn't
working. Let's improve this and uh
further improve his own tutor." Yeah, I
I do think Yeah, I I do think I have
some minor disagreements with him on
just like the the way you model other
players. So, the um we talked we can get
into about this about like what is next
after reasoning models, but clearly
reasoning models were enough for for for
him to do what he did.
&gt;&gt; what is next after reasoning models?
&gt;&gt; Exactly. Right. So uh reasoning models
are actually a little bit old had now
like they were they were first
introduced end of 2024 uh with 01
um and then we spent most of 2025 uh
basically deploying the reasoning
paradigm to effectively GPT5 Gemini 3
and claude 4 and now we're like at the
limit where like look it always takes
more time to reason and sometimes you
don't want that like it just reasoning
models are very slow like my
girlfriend's using uh Claude Opus in
cursor and she complains now because
human wants are infinite that every time
she types a new command she has to wait
uh for for code to come out and you can
upgrade to accelerator it's like openi
did a deal with cerebras to 10x their
inference speed but you can eat that 10x
um as quickly as you got it uh this is
called worst law which used to be called
gates's law like software will take away
all the performance advantages that
better hardware will give you Right?
Like we have much better laptops today
than 10 years ago, but I don't feel my
computers any faster,
&gt;&gt; right? It's because developers can be
lazier. They don't have to optimize
their code as much.
&gt;&gt; That's a that's a that's a desire.
That's an example of human wines being
infinite. Like like like I want my
developer experience to be better, too.
So, I'm going to build an Electron
rather than build a native Mac app
because like the Electron's good enough
and therefore I ship a Chrome instance
in every single app. Uh and that it eats
a ton of memory, but like my life is
easier. you don't know this as a as a
consumer because your your machines get
more powerful anyway, right? Right. So
that's workflow if anyone's looking at
uh
&gt;&gt; show and uh electron amazing tool uh
that just dramatically reduces the need
to have a lot of different you know
platform specific app implementations
like you don't necessarily need uh one
for Windows or um one for Mac or one for
Linux you can just have an electron and
it essentially leverages like the V8
engine from Chrome and like all that
other stuff.
&gt;&gt; It bundles a Chrome browser into every
app. This is why every app is now at
least 300 megabytes maybe sometimes a
gigabyte
&gt;&gt; uh where it used to be 30 or 50 and
&gt;&gt; your computer can tank the hit.
&gt;&gt; I guess
&gt;&gt; I don't know performance like I got like
2,000 tabs open on my Chrome browser
like I I have every app open because Mac
never closes any apps and like I I run
into memory outages all the time, right?
And and so anyway, um what was I saying
here? Like I
&gt;&gt; so so improvements uh beyond reasoning
models. Okay. So there's there's three
uh that people are focusing on for this
year. Uh and obviously I stay close to
the research community. So I'm I'm
relatively aware. Uh one is in the
general category of memory and continual
learning. Uh because LMS don't uh by
default learn they they just always
inference from static weights. Um two is
let's call it world modeling where they
are uh understanding theory of mind and
playing out different scenarios and
being more efficient in their learning.
Um and I think three is just a general
category of multimodality where they
used to be very focused on text and now
they can operate computers and uh have
have like very good video uh
understanding and vision is split into
let's call it OCR which is the most
classic form of vision like recognizing
handwriting that's what emnest uh used
to be that is like the very very first
application of computer vision to uh
screen understanding where they can
watch your screen and like operate a
computer for you and that's a uh I've
been very enormously impressed by cloud
co-work uh this is called computer use
and then the last part of vision is
embodied uh where um you put it into a
robot and it can uh have this what they
call egocentric view of the world where
um you can sort of uh understand what
you're what environment you're in and
manipulate objects in the environment u
because obviously like a lot of AI is
like contained within hardware uh
software within your laptops and within
your internet um once it starts
impacting uh physical worlds, you can
start doing dangerous jobs. You can
start doing manual jobs uh that nobody
nobody wants to do. And so like that's
that that's very important. So I think
there's this sort of these three
directions and we can go in order if you
want.
&gt;&gt; Okay. And so just uh to um like LM by
default they don't learn but you know
giving them the capacity to truly learn.
I mean not learn the way a human does
but like just like a submarine doesn't
swim but it does get through the water
just the same right uh you know so
basically like that that kind of
learning capacity is one the next is
world modeling where they understand
like they have kind of a theory of mind
and theory
&gt;&gt; more broadly philosophically of how
things fit together
&gt;&gt; understanding of physics and time rather
than just um predicting one word after
the other.
&gt;&gt; Yeah. And then the uh third one you said
is multimodality which you know
incorporates you know their ability to
uh you know like traditional classical
computer vision optical character
recognition uh screen understanding
which I'm very excited about and uh
you've been impressed with cloud co-work
there and uh then of course like the
embodied so this is also part of the
multi modality but embodied and you said
egocentric view of the world which
basically like viewing the world in
first person kind of like trying to
reason about your place in
like which could be a literal physically
like where am I in this warehouse for
the purpose of a robot.
&gt;&gt; Yeah. So, so those are the three things.
Uh yeah, let's just let's rip into those
all three of those. If you can walk
through some of the big work going on in
all three of those because unlike most
of the guests on the free co podcast,
you're spending a lot of time actually
pouring over these research papers that
are coming out of institutions like
Stanford that we were just at the other
day. Um
&gt;&gt; yeah, bring us up to speed. give us the
skinny. So, so you know um I you know
one of the questions that we prep was
information diet. Um I as part of
inspace I interview people uh who are
like the researchers and the the
founders in the field. Uh and obviously
I I have to prep for those conversations
but I also run the lane space um discord
where uh people actually share links
that are relevant to each of these
fields that I just mentioned. Um the
discord meets once a week uh as for the
the inspace paper club and there we go
over these papers that that people are
are excited about and and and having
some impact in in the field. Um and so
and obviously for AI engineer I field uh
thousands of submissions of of talks and
like have to like pick like well who's
legit and who's just trying to sell
their company and I think like yeah so
so in terms of memory um and
um continual learning this is like quite
an open question. uh a lot of the
database companies sell themselves as
improving memory and that is a uh the
sort of systems approach right like
there's a very classic divide in AI on
whether you improve the model or you
improve the harness or the wrapper or
the system around the model and uh a lot
of the last 5 to 10 years has been just
improving the model you we figured out
how to scale it and we need to keep
scaling it and every time we scale it um
some part of the harness above it falls
away. Um, I do think like basically like
we've run into effectively the limits of
context like we can't really extend the
context lengths of LLMs a lot further
like and and I obviously I might regret
saying this but we've had million token
context windows for two years now since
Gemini first introduced it and no one
uses it. Everyone stays under 200k. Um
so like if I gave you 100 million
&gt;&gt; that's just practical reasons because
the context rot and the fact that the
more context you feed it generally the
lower the quality output will become.
So, so yes, that that is that is up
there uh in in the number of reasons,
but there's also cost reasons, right?
Like you are charged for every single
context token that you put in there. So,
like why would you voluntarily make it
more expensive for yourself? Uh and then
there's also just order of magnitude
reasons, right? Like uh sure I have a
million token context window today with
let's say let's say I give you a million
token context window today with zero
context. It's perfect recall across all
over, right? Absolutely solved one
million. Then I then I come along and
go, you know what' be really great? 100
million token context window. Uh so you
just 100x and like also perfect context
ro like not you know uh amazing great
but I'm sitting over here I'm enterprise
and my document uh database and storage
and nodes start at 8 trillion tokens.
What is your 100x going to do for me?
Nothing. Absolutely nothing.
&gt;&gt; Yeah. So there's no economic incentive
to focus on that aspect of improving.
&gt;&gt; It's just like it's just wrong. It's
just like not useful. Like you're
scaling a thing that like like it's
great for research, but like you know
look in any practical enterprise uh
thousands of people talking and working
and producing documents like are are you
like are you really going to sit here
and tell me 100x is enough? No. Uh you
know so like you're going to have a
different way. Uh and so like I I I I
think that is the bullc case for the
sort of database memory people. And then
the machine learning people obviously
hate this. They're like what do you mean
it's it's so offensive like what do you
mean you tell me I have limits you know
the machine learning people are like
okay well we'll just keep updating the
weights and having pluggable
architectures and all that and so that's
what they are working on and at some
point you know probably the right answer
is both of them will win in different
elements and I have to sort of like be
the neutral Switzerland arbiter of like
yeah like you guys have good points and
then I turn around and go like you guys
also have good points and like the truth
is like they both need to believe
strongly in view of the world in order
for the world to sort of arrive at like
something better and like we won't truly
know what it is but I can see both
sides.
&gt;&gt; Okay. And and just to be 100% clear
those both sides are you need to improve
the harness the application layer versus
you need to improve the capabilities of
the underlying model.
&gt;&gt; Yeah. And both I mean the answer is both
need to be improved but
&gt;&gt; there's no reason why they can't be
concurrently developed and and built
out. I think like to to to dedicate your
life and career to working on something,
you do have to believe the other side is
probably not going to scale, not going
to work. And so like yeah, people people
are more extremist just because they
have to
&gt;&gt; to to like really uh create those
innovations. And
&gt;&gt; yeah, if they were more pragmatic, they
might slow down and just wait to see,
&gt;&gt; right? That's what we've been talking
about the whole time is like why not
just slow down and take a breather and
let somebody else do all the heavy
lifting and then see whether that's the
the road that we actually wanted to
drive down. That's a great way to be a
follower the rest of your life.
&gt;&gt; Yes.
&gt;&gt; You know,
&gt;&gt; at some point you do need to actually
have some conviction to uh to jump in,
right?
&gt;&gt; Yeah. Uh so you've mentioned your
information diet and it sounds like
you've got like a fire hose of
interesting uh information coming from
uh your discord like so these three
different modalities you talked about uh
that are uh improving uh the um the
three different like ways in which AI is
moving now that we we had the initial
just utility of the foundation models
and then we had the reasoning models and
now we have uh just again to recap those
three because I think it is important
the world model um the uh learning
capabilities and the
&gt;&gt; multimodality
uh like are how would you say like the
the research and the enthusiasm around
those three different things like are
are there people that focus just
exclusively on one of those areas and
like they're mostly sharing articles or
research focused on that within within
your community or is everybody like
equally excited about all three?
Um, pretty much only the content
creators like me are excited about all
three because we don't have to make
bets, but other people, yeah, they do
have it to make it their entire career,
right? Um, so yeah, there's some of the
smartest people in the world are working
on each of these things. All of them
have at least $100 million each to like
go pursue whatever their their view of
the world is. Um, yeah, very very smart
people working on all of them. There's a
fourth sector, by the way, which I
haven't mentioned that we've made a big
bet on, but I wouldn't classify for a
generalist audience, which is AI for
science. uh the the the main idea is
that um general office white collar
knowledge work manipulating Excel files,
powerpoints, scheduling meetings, taking
meetings, what is all this is mostly
saturated and AI can already do it. Uh
and the next frontier is human expert
scientific work which is both verifiable
so that's good for training data for
LLMs. Uh but also like it would
generally advance humanity and and I
think that's something that like this
year people are investing a lot more
than last year. So we've actually gone
gone ahead and started a second podcast.
Our first podcast was focused on uh
software engineers. Our second podcast
is focused on educating people on the
movements in AI for science by because I
got two actual scientists hosting the
podcast. I don't have to do it myself.
But um I do think I I I do think it's
like um an an important shift that most
people will never really touch, but
you'll see it trickle out. Um you'll see
people really mention like here's how
we're sequencing the immune system. So
we know how to create like uh and solve
diseases that as rare as one is is the
is the tagline from the Chan Zuckerberg
Institute from the Mark Zuckerberg
podcast I did. And um yeah like the vast
majority of human diseases have no FDA
approved treatment. Uh and like the the
understanding and solving the human body
is something everyone wants and it's
extremely complex. It's probably the
most complex system in the universe. Um
and we don't understand how our own
human body works. That's like absurd.
Well, I mean it's it is certainly
complicated to be fair, but we have only
had like science and medicine for a few
thousand years.
&gt;&gt; Yeah. Yeah. Yeah. But it's it's like
it's surprising how like uncurious I am
about how my own body works. I'm like,
well, I'll worry about it when I'm when
I'm sick.
&gt;&gt; But like
&gt;&gt; thankfully there are doctors and
scientists out there who are proactively
&gt;&gt; but like, okay, where's my free coat for
like learning how my body works, right?
Like where's my just in case learning of
like,
&gt;&gt; you know, like sleep is pretty
important. Like this is this is what
we're reduced to. Like you know you
should sleep eight hours and then like
everyone goes like yeah yeah yeah and
then they don't and like you should
drink more water and then they don't and
like this is how bad it is.
&gt;&gt; Well I mean they don't appreciate
because they don't have all the context
that like a physician would have. Like
my you better believe my physician is
telling me to drink more water and I'm
like isn't that just like some don't I
get like half of my water requirements
just from breathing humidity in the air?
He's like no drink more water. Like not
just tea. I know you like drinking tea.
Uh not just decaf coffee cuz I had to
switch to decaf. Um okay, I was too
hyped up. I was too high energy. Uh
speaking of keeping this high energy, uh
I do want to talk about the uh the world
models real quick. Yeah, that is
fascinating to me because LLMs the the
biggest, you know, knock against them
that like comedians throw out and all
these like people like if you ever heard
of it just predicts the next token, no
big deal, right? Like but it doesn't
actually know anything, right? uh how
does that work? How how do you actually
train an LLM which is essentially just
like a token predictor? Uh how do you
train it to actually understand the
world around it? And again, I use
understand in air quotes because no
machine is ever going to approach most
likely approach the world the way that
an organism approaches it. But we can
get similar effects through through
these approaches. So I don't want to be
semantically splitting hairs and stuff
when I use the term learn for example.
&gt;&gt; Yeah. So we we uh we published a post on
this recently that people should read
and I'll put in the show notes. U but
they're uh the first thing you should
know is that world models are already an
overloaded term and there are three
kinds of world models and people are
ignorant of the kind that they are not
working on. So you should know who
you're talking to when you say world
models because depending on the person
you're talking to, they will completely
assume that the only kind of world model
is the one that they know. So the first
world model is the video world models.
Uh those this is like Genie 3. Uh Tesla
also has one and OpenAI has one that
they haven't released yet. Um but like
uh basically these are the video like
you you sort of inherit you sort of come
into a world and you can look around and
you can see like 3D objects placed in
space and you can manipulate them.
Functionally it looks no different than
a game. But um what's different is that
everything in there is generated by an
an AI. Um I do have to make the
distinction that uh a lot of these
models are not LM based. Uh so for
example we did a episode with Fei Lee
who is the creator of ImageNet uh that
was the that basically led to uh the
ImageNet moment Alex net that eventually
led to Transformers and and the the the
whole deep learning era was started by
ImageNet and and Feay was the progenitor
of that. um and she's working on spatial
intelligence and she has a really good
essay uh everyone go look it up on like
why LLMs are limited and why she's
working on the next frontier of world
models and spatial intelligence but her
world models again also nerfbased
um uh video sort of 3D world models and
they're very very different from the
other two that I'm about to talk about
uh but you should be aware that like
most people in AI uh AI research when
they say world models because of fee
because of um gem uh because of deep
mind's research and world models, they
usually mean videogenerated world
models. It's kind of boring. It looks
like a video game. They're all like it's
no different. But I I do think that
spatial intelligence is very important
and we explained it in that podcast. The
second one is the Yan Lakun School of
Thought, which is who's from Meta. He
just left. Um but he's been very much
trying to basically have this like
Aristotalian or Plato's cave view of the
world where like um you know uh models
learn to predict text. So they they're
rewarded and punished on the their
ability to predict the next token uh or
the next series of tokens. Um and um and
that is like the representation of the
world, but the map is not the territory,
right? like they're they're like I I'm
I'm rewarded based on like the things
you output as a published final article
but I I actually need to learn one step
before that which is what you're
thinking before you wrote that article
but I don't have access access to your
thoughts so um what they what what
Yangun has is the joint and um join
embedding prediction architecture ja
uh where you basically project or you
try to learn a common latent space uh
among your uh among your embeddings
among the the things you're trying to
predict and uh that is the the correct
machine learning pill way of doing this
which is saying throw your hands up put
it in a black box say I don't know what
this is but you machine go figure it out
all I know is that there is a black box
between
um what what you are your input and what
gets output which is the thought that is
somewhere somewhere in there and the
reasoning models try to do this very
very crudely by u having a chain of
thought um piece which uh which is
effective like a piece of research
that's been done since like 2022 let's
say uh from Jason we uh people can look
up the the original chain of thought
paper that is like that is all reasoning
is which is very very amazing that it's
scaled this this much uh and then I
think the the final piece um is what I
argue in that in that post uh that I put
up in the show notes which is the
adversarial world models where you have
a theory of mind and you try to form
like uh you you're sitting at a poker
table or you're sitting in a negotiation
or you're sitting even in this podcast
interview. I'm trying to model what you
think. I'm trying to model what uh the
audience is thinking and I'm trying to
respond in a way that uh elicits the
information or like transfers things in
information in a way that I think will
suit you the best because I have a
theory of what you are interested in. I
have a theory of what the audience is
interested in. I have a theory of what I
want to say and I'm playing all those
world models against each other in order
to arrive at um what is optimal for me
to say. And so, uh, that article as a
guest article, it frames it as a sort of
adversarial negotiation thing, but I
think it can also be collaborative in a
way that like we're both trying to get
to a better understanding of what's
going on in the world and I'm trying to
articulate as much as possible and you
can chime in with your point of view and
I can like disagree or agree. Uh, but
like that is how intelligence works. It
is not by like trying to produce
like the median expectation of what a
good article is based on a prompt. It is
me like having my point of view, you
having your point of view, me
understanding your point of view and
probably getting a little bit wrong. You
you probably getting my point of view a
bit wrong, but we talk and we we figure
it out.
&gt;&gt; yeah, man. Uh a lot to unpack there. So,
uh first I'm just going to recap what
you said. Yeah,
&gt;&gt; I take detailed notes as I listen to all
my podcast guest but here certainly uh
typing a lot. So video world models like
G3 uh essentially like 3D objects in
space. I've seen like a simulation of
like this famous uh Counterstrike map
called like I think it's called like
Dust 2 or something like that.
&gt;&gt; Dust Yeah. or something like that,
right? And uh basically like you're
walking around and it looks like
Counter-Strike, but it like sometimes
like a box will be like slightly out of
place. You'll turn and you'll turn back
and it'll be like all warped and stuff
and the model starts to break down after
a few minutes.
&gt;&gt; Correct. So that's an that's a bad
video. Uh yeah, that's a bad world
model, right? So So video games have
perfect world models because they're
they're programmed in by hand. Like
every every detail of that map was was
like I don't know if like exactly hand,
but like whatever like some human
intended it to be there,
&gt;&gt; right? They were taking like assets and
positioning them in a certain place and
it was being stored as the map.
&gt;&gt; Yeah. Uh the video world model gets
inconsistency. So it's it's like exactly
exactly what you say like it's almost
like a horror movie. Like I look at this
screen and I look away. I look back and
like things have changed and it's
horrible. But that's what generative
models do right now because what and why
is that? Because well when I turn back
from that previous screen I have no
memory of the what's what happened
before. and what I render as the as the
new look is just as likely as the
previous one. So like it's fine to me as
a generative model, but because I don't
care about the world model, I've never
been incentivized to have a consistent
world model. Why should I care?
&gt;&gt; Okay, so that's world models. And uh
your argument is that like a lot of
those things that have been showed off
so far with like you know generating a
video game as opposed to you know having
everything you know compiled and
rendered and and following deterministic
rules laid out by a programmer like that
is obviously a work in progress. There's
a lot of work to be done there. Second
thing is you talked about uh like
Plato's cave view of the world. Yan lun
essentially like he said uh you have to
like blackbox everything like if you're
not like throwing up your hands and just
accepting like hey I don't know how this
works but this ML is this model is going
to figure out you know kind of f from
first principles by spelunking in and
like figuring it out essentially. Um
they're going to go into the latent
space and figure it out. I'm not sure if
I'm using that term correctly. I know
the name.
&gt;&gt; Yeah, this is this is horribly abstract
for people. Anyone who's never dealt in
latent spaces and never dealt in hidden
layers in machine learning. Um, but just
trust that machines do learn much better
than us if you let them. And this is Yan
Lakun letting them.
&gt;&gt; Yeah. Getting out of the way and not
being too uh
I guess uh prescriptive uh and not
trying to put it on rails to achieve a
specific goal, but like giving it more
slack essentially. Is that accurate?
&gt;&gt; Yeah, I should also mention that this is
the least successful one. Uh like
basically no one outside of meta
believes that this is going to work.
&gt;&gt; Um and in fact within meta like he had
so much resistance that he had to quit
and go go start something.
&gt;&gt; Um so like this is a dark horse like you
know I I've learned to just never bet
against like legends in the field like
that. Sometimes they are right,
sometimes they're very wrong but he has
enough conviction to keep going. Um so
it's
&gt;&gt; yeah by by nature of of his advocacy of
that kind of role model he gets a
mention
&gt;&gt; even though no one
&gt;&gt; as you said earlier you have to have an
opinion you have to stand for something
&gt;&gt; uh otherwise there's no progress to be
made if everybody the moment something
starts to work there they all jump ship
and just jump on the bandwagon right so
it is important to have people kind of
like
&gt;&gt; pushing their own you know darkhorse
agenda uh to try to improve the field
one adversarial world models essentially
like a salesperson type mentality.
You're trying to figure out what the
person needs to hear to sign on the
dotted line. Uh like through
metacognition. Also, you could say like
a teacher at the front of a classroom.
Exactly. Looking at their
&gt;&gt; I don't like the word adversarial. Yeah,
I don't like the word adversarial. The
&gt;&gt; Cuz like adversarial you think it's like
is this only useful in like poker or
like no, you know, thermonuclear warfare
or something like that. No, it's it's it
sounds like it's just like basically
shaping a message and it's just good
good communication skills.
&gt;&gt; I I think it's multiplayer is what it is
what it is. A lot of most most
environments in LM are single player.
Um, and so then you then you need you
need that. But uh the player doesn't
have to be human. The player can be
other AI,
&gt;&gt; but the player can also be an inanimate
object. Uh the player can be this this
Riverside session we're in. The player
can be this this microphone. I need to
have a model of what the microphone can
do, how far it is away from me uh to
know how I sound, to know that he has a
mute button, all that kind of stuff.
These are world models of everything in
my life. Uh, and they all they're
consistent because they're just facts
and I need to like plan around them and
be intelligent about them. And most LMS
will will just don't have that because
they've never been taught that, right?
They they've only been taught to predict
the next token. And there is a there's a
there's a so there's a fundamental
question here of like do we need to
change anything about what we do. Uh
because um and we get to to into this in
my discussion with Nome Brown. Um and
his assertion because he's he would say
that is everything can be modeled just
scale up the model give me more compute
give me more money and we will build
implicit world models by just by just
training it as we have done
&gt;&gt; as as history has shown um that uh you
know just just scale up the reasoning
and it'll it'll work.
&gt;&gt; He would say that because he leads
reasoning right um but obviously he's
smart enough to understand that there is
a counterargument which is that it will
never scale to what we need. Uh and so
the argument in that essay was that like
he's wrong. Uh which is a which is a
&gt;&gt; both the cost of trying what he's saying
I mean as you scale up it gets more and
more expensive like not in a linear
manner right uh
&gt;&gt; and and so there's there's great risk
like we could literally take all the
compute and all the energy and all our
funds to build data centers to try to
test that and if we're wrong we just
wasted an immense amount of resources.
&gt;&gt; Right. Um so it is risky to pursue that.
Yeah, I'll give you a simple analogy
which is like um uh so don't don't take
babies but like maybe take um when you
come in when when you're um when when
let's let's say let's say you you you
finish college, you finish high school,
you you you you start coming into work,
how long does it take you to learn your
job? You know, a few weeks, right? To to
like at least like start start doing
start doing your job. uh a model would
have to require the equivalent of the
data of hundreds of thousands of human
years of data just to do a fraction of
what you do. Um in other words, this is
a data efficiency argument like models
because they are so inefficient at uh at
at learning
um on specific tasks and domains because
they don't have don't have world models.
They are so much worse than us, right?
Like we learn our jobs from very few
shots. Like I I see I see one dog. I see
two dogs. I see three dogs. From there I
got it. I know what a dog looks like.
Models pretty much have to see more than
20 dogs at once to like at least have
like some vague image of a dog. Probably
thousands of dogs. Um and like when when
when I when I see a dog with four, you
know, all my examples are dogs with four
legs and I see a dog with three legs, I
don't go, "What what the hell is that?
I've never seen that before." No, like
it's a dog with three legs. Right. And
like um so I think like that that is a
model of we know what this abstract
concept of dog is
&gt;&gt; and models don't. They just have no
preconceptions whatsoever. They don't
even try. Uh like every new concept is
potentially as alien or as as familiar
as as as as it could be. And it's it's
very very inefficient. Uh, and so
there's probably some
uh some efficiencies to gain from
modeling it closer to how we know
intelligence to work because we have the
existence proof of the human brain being
able to do all of this. I can model all
of this on 20 watts of power in my head
whereas they need a giant data center
and 500 gawatt.
&gt;&gt; Yeah. Yeah. That is interesting to think
about and it it just hints at the sheer
improvement possible because I mean
these models are so incredibly
inefficient compared to the human brain.
It's not it's not even funny.
&gt;&gt; but look, so
&gt;&gt; we we at least as a species are like a
few hundred thousands of years old and
they are 10 years old,
&gt;&gt; right? Yeah. And and once they figure
these things out, they'll be able to
operate they'll be able to run circles
around us. But until then, you know, uh
we have a lot of work ahead of us if we
want to get them to that level. Um so we
have learned a lot here. I want to fire
off some rapidfire questions because I
only have you on the podcast like every
two or three years. Maybe that'll change
if people want me to have enough back.
Let me know like but things are moving
fast and I'm learning a tremendous
amount. Uh I do have some quick
questions for you. Uh
&gt;&gt; if you got hit in the head and suddenly
lost all your programming skills,
&gt;&gt; Yeah. Yeah,
&gt;&gt; but you didn't lose any of your other
skills or your knowledge of like I guess
the world and like where you know you
think things are going. How would you go
about rebuilding your programming skills
and what would you focus on most given
the improvements in the tooling?
&gt;&gt; Yeah. Uh definitely head to free co. I
love free co. Um I do think like
understanding
some amount of like how computers work
is more important than actually
programming every single thing. Um so
understanding that there's such a thing
as an if statement you know like memory
and like how that gets stored to a file
system that kind of stuff like um that
is definitely the in the category of
learn it uh just in uh case you know
foundational prep um whereas like you
know stuff I used to have to learn like
how to configure Webpack for React um
doesn't matter like I spent so much time
on that stuff like it doesn't matter
anymore and the LMS can teach you just
in time. um or you don't even have to
teach uh to learn them like you can just
vibe code it and I do think that that
will go away but um I do think like the
the sort of free resources are great um
you know for those who don't know and uh
you you you can listen to the previous
interviews but um I changed careers when
I was 30 and I learned to code on free
code camp and you know and I I do think
like that is now as fundamental a
requirement of literacy as learning math
and learning um I guess Yeah, I'll put
it at the level of math. Let's let's
call it like it's not the not at the
level of learning English to just
function in the world, but it's pretty
close to learning ma like it's pretty
close probably more important than
learning math right now. And uh yeah, I
think like to the to the to the extent
that um you can teach it like I forgot
all my programming knowledge and I want
to learn I think the sort of free high
quality resources are great and free
code camp is like top tier. Uh, and then
also just like start building a bunch of
stuff and then learn just in time
because my interests are going to defer
from others and um, and you know like I
I can't consume all free code resources
forever, right? Because that's that's a
great way to just rot in in YouTube
hell. Um, I just have to get out there
and build
&gt;&gt; and so I I would do more of that.
&gt;&gt; I'll emphasize that since you went
through free cooking many years ago, uh,
we've taken an extreme project oriented
bend to our uh, pedigogy. So now we
basically
always uh everything is in the the
context of a project and we have tons of
projects. You if you go through the
entire full stack curriculum you'll
build more than 100 different projects
because like 100% and that's a lot a lot
of that's informed by you know learning
public and a lot of the other uh
important kind of educational movements
in software development over the past 12
years since we started. And uh yeah,
100% on just having a project and
building and that's one of the things
you've emphasized a lot in this
conversation and in your uh
&gt;&gt; you know the many articles you publish
when whenever you do talk about uh
learning programming you talk about uh
the the need to learn in public and to
to fail a lot while trying to dare
greatly with projects. I I will say so
it's been since eight years since I
wrote the original learning public essay
and I do think like the bar for like
what you publish has has risen because a
lot more people have done it and so uh I
you know then I've developed like what I
call learning gears where like you well
not everything should be public in fact
most things should not be public uh so I
think like people try people get
learning public religion and they
publish everything and they're like why
isn't this working well cuz like it's
crap and like no one no one's like
everyone's too polite to tell you it's
crap and you kind of know it's crap but
like people want to be encouraging and
whatever.
&gt;&gt; Um, so
&gt;&gt; but you do risk fatiguing people to your
cause.
&gt;&gt; Exactly.
&gt;&gt; If you're constantly overwhelming them
with mediocrity.
&gt;&gt; No. And and then people blame me because
I encourage them to learn in public and
I'm like no no no um
&gt;&gt; I had a writer tell me once throw away
your first million words.
&gt;&gt; That was his writing advice.
&gt;&gt; Yeah, there's there's there's a lot of
&gt;&gt; the opposite of learning public if you
think about it.
&gt;&gt; Oh just don't not everyone has to know
everything about your life. you know,
we're not that interested. Like just,
you know, put it on your personal
journal as people have done for
centuries. Like not everything has to
get a thousand likes. Like it's fine.
Like do it for the sake of doing it.
Doing for the joy. Do it for the
learning. Uh and then every now and then
stuff will break through because you you
are producing and that puts you ahead of
99% of people who don't.
&gt;&gt; Yeah. 100%. So uh let's talk about
building companies which is something
you know quite a bit about. Um
&gt;&gt; Oh god. If if you wanted to uh create a
startup these days, like let's say you
were just starting over, you you had the
skills, the knowledge you have, but you
just wanted to start uh and and like
maybe you would want to c coach some of
your peers in doing the similar thing
like have the costs necessary to build a
startup gone down? Have the tools
improved? Uh like what what is the
current status of like I want to get a
startup going? Like do you need to get
funded? Do you need to get into some
accelerator program?
&gt;&gt; Uh the answer is no and it was always
no. Um I do think the average cost of
getting to a million dollars in AR um is
is much lower. Yes. Uh so I I have a
thesis called the tiny teams uh playbook
which uh I've been exploring and I I you
know the the original phrasing of this
question was um is like a a lot of
people are focused on like the one
person unicorn like can can you get to a
billion dollars of one person and you
know my push back is like well do you
need to be one person? Can you be two?
Can you be three? And like sometimes
it's nice to work with buddies like the
only reason the only reason you focus on
one person is because it's egotistical
and you like to they like this image of
the lone hacker but act it's nice to get
there with friends and it's it's it's uh
and people have different strengths and
like um what what what really matters is
that people are a lot more productive
than they used to be in the past and
that is true and that is enabled by AI
um and that means that everything
changes around funding and economics
right people are profitable from day one
therefore they don't need as much
funding So why would you raise other
than like to cause some splash in the
news? Um if you're selling to
enterprise, it does help to have like
Sequoia's backing and all these. Uh and
that's why people raise money that they
never use and they proudly say like we
haven't even touched our series B. Now
we've raised a series C, another 100
million. And you're like, well, you
didn't need the money. You just said you
didn't need the money. And that's true.
That's just all signaling.
&gt;&gt; Yeah. But it is a big splashy PR win if
you can raise a bunch of money. it it
signals.
&gt;&gt; It's signaling to the it because like
the the startups are very shaky even as
a series C series D like later stage
startup and so if you're a Fortune 500
you're like well do I want to be
business partners to these guys who
might not be around next year. Um saying
that you have $100 million in the bank
puts away a lot of those concerns,
right? Um so like that's why you do it.
Uh because you want to become one of the
larger businesses. And what does large
business mean? Uh I one of my favorite
interviews that I listen to uh uh if you
want to if you want to like get in like
top tier CEO tier like listen to grit
from Kleiner Perkins uh but this guy
Juben Merza Dicken I've had him on on
lat space as well he's great uh like he
had one of the CEOs he goes like yeah
your your your your business only really
starts once you hit a billion dollars in
revenue like talk like below that you're
just getting started uh because these
guys you know working like hundreds of
billions of dollars in in in the They
manage very very large businesses,
right? So to them every startup is tiny.
Every startup can go away. Every startup
is like uh you know inconsequential and
like you know unreliable and like
instead of relying on them we should
just build this in-house, right? That
that's the default.
&gt;&gt; Yeah. I mean not becoming too beholden
to a company that can go out of
business. Uh Freo camp uh you know we we
used to use Gitterter for example uh as
our kind of like Slack alternative uh
for for chat. It was an open source
GitHub ccentric uh chat tool and of
course it got acquired uh and then
ultimately shut down and these things
&gt;&gt; switching to different chat tools
because they keep getting acquired or
they keep going out of business and uh
yeah like I I can definitely empathize
with that and yet you don't have to
worry about like
&gt;&gt; you know oh I guess you even have to
worry about like Google discontinuing
some service that you depend on if
you're like built around Google reader
you have to worry about Reddit like you
know changing the dynam the economics of
using their API and putting a bunch of
accessibility tools out of business. You
know, like like I can definitely see the
instinct to build internally and of
course developers always uh you know say
oh not invented here that's not a good
thing. Like you you don't want to be
like constantly rebuilding. You want to
focus on what makes your product better,
right? And not just building a whole
bunch of your own tooling. But now with
LLMs, this is a very hot topic right
now. It is in theory possible for you to
build more and more of your own
&gt;&gt; stuff and rely less on buying like the
build or buy equation has changed.
&gt;&gt; Uh has it changed?
&gt;&gt; Yeah, it totally has. I think um how has
it changed? I mean yeah, people are
building more instead of buying and
that's that's great. I do think like um
again back to the theme of like human
desire and demand is infinite. Um, you
know, just because more businesses and
enterprises are building in-house
because they can, uh, doesn't mean that
you as a tiny team can't also just build
your own stuff and sell to people who
would otherwise not being served. Uh,
you know, to me the best example of this
is lovable, where they basically like
put cloud code, it's not actually cloud
code, but you know, cloud code in in a
box and put it on a website and like
gave nontechnical marketers the ability
to make their own websites without uh
going through a developer, without using
a templated thing like Wix or
Squarespace. Uh, and the marketers
freaking love it. They love this thing.
They they used to spend thousands and
hundreds of thousands on on developers
and contract agencies and all these
things and have like really long
development cycles and like a product
that they didn't actually really like
that much
&gt;&gt; and now they have direct control of
their over building their custom website
that is fully custom, not a Squarespace
template, not a Wix template.
&gt;&gt; Uh and you know and like lovable came
from nothing and now it's like one of
the biggest companies in Europe and like
more power to them. Like I think like
that kind of stuff whereas like it's
mostly uh a sort of tiny team success
story. I don't even think they're like
100 people yet.
&gt;&gt; And they're worth like six seven
billion.
&gt;&gt; yeah, it's definitely an outlier but but
it is a very impressive.
&gt;&gt; There's many smaller teams. Um, I had
OLED on my podcast and and at AI
Engineer, it's a team of four and they
they make uh they make like app store
apps that are like student aids,
teaching aids, uh, homework help, and
they market through Tik Tok and they
make a million dollars per person.
&gt;&gt; Right. They'll never be a venture scale
business, but they're very happy and
they're they're making a lot of money.
And what else do you need?
&gt;&gt; Yeah. Not everything has to be a venture
scale business. Uh so uh I want to be
mindful of your time and our audience's
time and get to one final question.
We've learned so much, but uh there's a
lot of conventional wisdom floating
around around working in tech. Uh a lot
of it may be outdated. What are a few
pieces of conventional advice that you
think have outlived their usefulness
that people need to discard?
&gt;&gt; Yeah, we we went over this in the prep
and I was like I don't have an answer. I
I I I also I don't know if I know what I
would say there.
I I do I do think like we probably
already started this podcast there which
was the learn your foundations which I
used to be a big learn your foundations
guy by the way. I I I used to tell
people hey every now and then like once
every six months just sit down and like
pick a technical book read it from cover
to cover. You probably learn things that
you thought you knew that you didn't
know. uh you you yeah you probably learn
things you didn't know that you thought
you knew and uh I think that's still
like that's rare like I I haven't done
that in a while now but I used to uh by
the way that that was like my first
interaction with Boris Churnney who uh
used to work on TypeScript at Facebook
and now is the creator of cloud code uh
which is a $2.5 billion business in
inside of Enthropic. uh he wrote a
TypeScript book. I sat down and to learn
Typescript I read it from cover to cover
and I learned my fundamentals of
TypeScript from him and that was great
but now probably no longer needed. Uh so
like I I do think that the sort of
learner fundamentals has reduced a lot
in comp in accidental complexity to just
essential complexity of understand how
these systems work. Um, and uh, I I do
think I I do think like that makes you
unlock things that nontechnical people
uh, would otherwise be stuck at. Um,
I'll give you I'll give you like a
really interesting example that I had
from today. Uh, can I screen share on
this thing?
&gt;&gt; Um,
&gt;&gt; yeah, go ahead and narrate for the
people who are on the video or the audio
only version
&gt;&gt; literally just happened today. You know,
like this whole this whole thing like
people want to sell you this vision of
like, oh, you can vibe code everything,
you can just prompt it. Like, no, no,
no. There if you're a technical vibe
coder, your technical prompter, you can
do things that normal people cannot do,
right? So, uh here I have uh here's me
talking to Devon, the the coding agent
that um I I I do work on as part of
Cognition. Uh and it's it's like, let me
check all my social links like, you
know, I like I put in a bunch of
speakers for my conference. Like, I just
want to make sure some of the social
links work. a lot of them are
hallucinated and they lead to a 404,
right? And blah blah blah, check it. And
there and and he and the bot comes and
says like, I I corrected all the Twitter
links, but I couldn't correct the
LinkedIn links because LinkedIn blocks
bots.
Um, and it stops there and I'm and it
would have stopped there for any
nontechnical person, but I as a
technical person, I know the next
prompt, which is get more creative,
spoof UA, spoof the user agent. meaning,
yeah, it blocks you, but because you're
identifying as a bot, just identify as a
human. Then he's like, blah, blah, blah.
Okay. Then then it just fixes
everything.
&gt;&gt; Just violate the terms of service and
you'll get there.
&gt;&gt; Yeah, I mean, it's doing more for me as
a like I would have to do this manually,
but now I can just prompt a bot to do
it. But
&gt;&gt; it's not it's not like you're like
systematically like scraping them or
anything basic information.
&gt;&gt; I like it stopped here and a
nontechnical person would have stopped
here because they don't know any better.
But because I'm technical, I know the
magic words, maybe spoof the UA. And
from like those three words,
I was like, "Oh, yeah, yeah, I could do
that." And then it just immediately does
it and get completely everything right.
&gt;&gt; And I'm like, you know, like that kind
of thing you probably have to learn just
in case uh and like have fundamentals
and foundations, but it's a different
kind of fundamentals. It's like knowing
magic words of like how the system
works, not knowing specifically how to
do it. like I don't care specifically
how to do it. I just know like like this
is this is how I would work act as an
engineering manager to to a junior
employee. I'm like I know the rough
magic words to point you in the right
direction and then you can figure it out
from there. And that's what exactly what
I did with the coding agent. And so I do
think like you still need fundamentals
but it's like a systems level
understanding of like and like the magic
keywords to like prompt models in the
right direction which is what you
eventually needed as an experienced
engineering manager. you're just pulled
forward five years in your career.
&gt;&gt; Yeah. And and just a final like
quantitative question. Uh before when I
talked to you uh in San Francisco, we
met, we recorded an episode like two
years ago. Um you said AI engineering is
about 90% fundamentals and 10% knowing
how to use uh AI tools. Would you say
that that percentage has changed
&gt;&gt; in Yeah. Yeah. So I can't I disagree
with my old self.
&gt;&gt; Yeah. Okay. How how what what are the
percentage distribution now?
&gt;&gt; Um let's call it 60 40 60% fundamentals
40% uh yeah so so still majority
fundamentals but a lot less
&gt;&gt; and like
&gt;&gt; and do you think there will come a day
where like an expert is no longer really
needed and like domain expertise isn't
really needed and it's just being really
good with working with LM tools and
you'll have these generalists that just
use AI tools.
&gt;&gt; No, experts are Yeah, experts are always
needed. uh until we solve the three
things that we talked about world models
and memory and all those things.
&gt;&gt; awesome.
&gt;&gt; Uh but you know experts are always
needed but you know they they may just
be a lot less of them. Like we used to
have a lot of expert like farmers and
now we have a less expert farmers but
who do you call when your your farm goes
bad? Like an expert farmer.
Um there's just a lot fewer farmers and
and I I do think like uh you know one of
the questions that we prepped was like
also you know what's the job market
going to look like? Yeah, I do worry for
the junior developer. Um I think that is
a concern. I think like uh the the smart
ones, the high agency ones are always
going to figure out a way, but the
mediocre junior developer who like is
just like barely scrapes by, barely
learns a tutorial, and like doesn't know
how to generalize beyond just a
tutorial, you're in trouble. You you do
need to step up. Um and like that's just
how it is. Like you know, um you no one
owes you a living. You got to go earn
it. And um you know, the tools of the
trade are changing very very very
dramatically right now. And uh you like
no one owes it Quincy doesn't owe it to
you to teach you. Like you have to go
figure it out yourself.
&gt;&gt; Well, I'm going to do my damnest to
teach you anyway. Uh and so is the free
cocaine community, but I 100% co-sign
that sentiment. The world does not owe
you a living. Uh got to figure out how
to make it work. And there are a lot of
people out there that are making it
work, including many of the people whom
I've had here on this podcast. Sean, I
want to thank you again for making time
to share your expertise and share your
insights and and even your wild
speculation. It's like super helpful,
even though I often butt heads and push
back. I mean, this is not scripted.
Like, this is not edited. Like, I don't
know how he's going to react to these
questions. He doesn't know how I'm going
to react. Uh, but but yeah, like this
has been a blast. I hope everybody
tuning in learned quite a bit from this.
Be sure to check out some of the links
that I'm including uh to articles that
Sean has uh recommended that that he
mentioned during the call. Uh this has
been like super helpful for me. I've
learned a tremendous amount in a very
short period of time. I hope you have
too. Until next week, happy carting.
