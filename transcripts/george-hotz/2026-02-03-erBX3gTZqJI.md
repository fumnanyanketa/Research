# George Hotz | Programming | how I actually use agentic coding | Agentic AI

- Channel: George Hotz
- Date: 2026-02-03
- URL: https://www.youtube.com/watch?v=erBX3gTZqJI

## Transcript

Did I set it up correctly?
Cool.
Um,
so I want to show you guys how I
actually use aentic coding.
Let me see if I can get that to be a
little quieter.
tape.
Tape. Can you guys hear that? Is that
loud and annoying?
is that loud and annoying?
No, I don't think it's audible at all.
Okay, great.
&gt;&gt; [snorts]
&gt;&gt; Um,
so I mean yesterday is a bad example of
how to actually use those things. Uh, in
reality they're useful for certain
things, but you have to stay super
carefully uh on top of them.
so like all right, you can see it added
two helper functions here. It looks like
there's a ton of duplicated code. Do not
duplicate code.
Is this used?
This fallback that I don't really like.
I had it add some assertions.
you have to carefully read any of the
code that it writes.
This is the other thing that I'm working
on. Uh
I'm trying to write firmware
uh for the eGPUs.
Uh so I got some eGPUs in the mail. Uh
they have a nice board where we set up a
really nice uh debug loop. This is an
FTDI that can unbrick the chip no matter
what. So, I'm having uh Claude try to
enumerate the uh USB. Uh I got the UART
working.
Um again, these things aren't that good
and you have to hint them uh you have to
help them a lot. Uh like I had to tell
it to disable parody. It couldn't figure
out why the things weren't working, but
that was discussed in a Slack message.
so yeah, I'm working on three PRs right
now. Uh, I'm working on this DS perm
instructions one.
Um, it's so annoying if I'm not logged
into GitHub. I guess I can see it. Okay,
that's fine. As long as I can see if it
gets a green check. Uh, you know, I
don't do any logged in stuff uh on
stream. I'm also working on this RDNA4
PR
Um, so you can see that this one
unfortunately got an X on the llinter.
Uh, we can check that with precon.
so I'm sshed here into a tiny box. Oh,
and also I hope this stream is working
because I do have tail scale up. Um, I
need to have my tail scale up. I'm using
an exit node in order to access uh
Claude from Hong Kong.
Yeah. No, I mean yesterday's stream uh
sets a bad example. Uh you shouldn't
actually be using agent coding anything
like that. Um and there's a lot of stuff
that I still do by hand uh if you want
to see some of the by hand stuff, right?
But it's useful for like figuring things
out. Um so I'm not working in tiny here.
So I have an extra tiny grad to work on.
I can manage about three or four of
these.
Um, but if I try to manage too many, it
gets uh I just get overwhelmed.
Command to test plus
on RDNA4.
add it to the AMD
IDE test in GitHub actions.
Uh, and then here, so we can see
this on GitHub. I mean, sometime I'll
just push stuff to GitHub. Um, and I'll
look at the diff on GitHub if I feel
like I can. Uh some diffs I really have
to stay on top of uh by hand because you
really can't start to let the slop in.
People have this mythical idea that
agents can somehow manage their own uh
slop.
Um fear and loathing in Gast Town. That
would have been a good name.
Uh
okay. So oh just
test
test tiny is fine.
So this is adding RDNA4 support to the
emulator. There's one new part of tiny
grabb that I've entirely uh coded in
agents. But yeah, so the only question
is whether the zero is there by default.
These are variables like I they're all
assigned before use. The zero is finally
replaceable.
Why would
it
declare if they already
exist in varss?
Show an example of this.
All right. So you can see that this
thing is working. It's flashing
firmware. Whenever you can give these
things loops to close themselves, they
work pretty well. Um, sometimes they
can't do it if they can't get any
incrementalism on the problem. Uh, like
I tried to get it to write an emulator
uh that was cycle accurate and it
doesn't try to like make a model of the
GPU. It just adds hacks. If it can get
closer by adding hacks, it generally
doesn't work. But if the only way to if
it can get closer by like doing the
right thing if like the gradient flows
um then
uh it works uh correctly, right? So
see like here we can see some tests
failing. See what's going on here. Um
and then you have to kind of decide
which ones you have to stay on top of.
Right? So look at my
Yeah. So instead of duplicating that
code, it listened to me and it
dduplicated that code. Um,
see this is not a good this is not a
good fix. I don't understand this fix.
Oh, that lost mass equals true. It
didn't update that correctly.
so like I might want to complain and say
use set default here, right? like use
set defaults
here
also.
I mean, I could also have it check the
type
uh maybe if I want to add more
assertions, but you still nothing about
agentic coding prevents you from having
the entire state of the system in your
head. And it also can hurt you because
when you write the code yourself, it's
much harder to delude yourself into
thinking that you understand it. Um,
but
when the agent writes it, you can like
look it over and be like, "Yeah, I
understand all of that." And then you
read it more carefully. Uh, so I think
Carpathy has a lot of good things about
this. He talked about how
you
uh you start to atrophy your code
writing skill, but you improve your code
reading skill.
All right, so that uses set default now.
All right, I'm pretty happy with that
diff. Um, [snorts]
let's run
Python path equals this precomand
like mosh or something set up. So, this
just works better.
So, it's adding some timing and fireet.
So, this is reverse engineering um
firmware. These names are terrible.
I'm going to interrupt it and say uh do
you have better
names slashmore
info from
registers.h.
This will help you debug.
You must understand
all registers, not just copy.
So yeah, I mean it just it makes the
state uh a little bit
more annoying.
to like track.
Uh, all right. So, let's see if this
works.
No, that's not um
Oh, AMD and MPU are already set to one.
So, we just set them to one here. When
we run the test,
uh,
debug equals 4.
This is wrong.
It's just annoying.
Uh, so I never have it commit.
That stuff's just broken.
So, it's it's a lot of state that you
sort of have to to keep in your head.
run my llinter
in free commits passing.
uh copy the names from registers.h. In
fact, we can include registers.h
instead
of redeclaring
everything in agency.
So this is that one I switched to set
default.
Um
it's not really Oh no no no. This isn't
the problem.
I want that to start to add a ton of
crap.
Maybe it is that. I don't know.
I'm not sure if I really have less uh
like bandwidth to talk. I I feel like it
requires really the exact same sort of
focus as programming. This three is a
little much for me.
Um I don't always do it as aggressively
as this.
I'm kind of showing off on the stream a
little bit.
Um but this basically looks like what my
uh
like agentic workflow looks like. So
let's put this over here and let's take
a look at this code.
um
pass vars to functions that need it.
Like why is this there? I don't like
that. Why am I not passing varss to
other functions?
And I don't think that
is access
for FPS adder like meanings. Yeah,
I don't like that. Can we make
it explicit?
So like I don't love how it's handling
this. We have different enums for RDNA3
and RDNA4.
Um it's importing them as this and it
has this really copy and pasted alias
list.
get picodict is
okay.
Some of these changes to like use inst
are just good generic changes. Um
yeah,
move this.
add to
if LDS
with an L if branch.
I don't understand this. I don't
understand this code. So, you have to
stop and wait until you understand the
code. And then here's all that RDNA4
stuff repeated again.
don't need to check
these instance here.
remove the helper
one line
call.
It added some new debug crap. I mean, I
like that it made that change. I don't
understand why that print needs flush
equals true.
I don't really like that.
Remove this. You don't need flush equals
true.
Now we're back to these stupid
functions. I don't know if they're
actually correct. Like I don't like that
there's a hack giving the name of the
function, right? That's the kind of crap
that like you end up with vibe coded
stuff. So, we're going to have to fix
that. Uh this stuff all seems okay.
Okay, I already fixed that to use the uh
helper from Tidyrad. Uh putting that as
a property on the GPU setting that that
seems okay.
Um as GPU props, it's like something
that's like returned from the fake file
system. They added the word RDNA4 here.
They added arch and they added an arch
call. That all seems good. Um they set
the arch there. That's good.
So like this is this is the workflow.
you really have to
uh stay on top of these sort of things.
Um, and it's not it's not sexy.
All right. Now, I push this as cleanups.
I probably shouldn't abuse the GitHub
runners so much, but whatever. That's
kind of what they're there for.
Um, okay. There's no diffs to this one.
I'm not sure what I have to still do on
this one. Let's look it over. Let's see
how this one's going. It's still
running.
Uh, the USB file registers are not being
written to properly. That seems fine. I
like that it's including registers.py. I
assume it updated the make file, so we
can read the diff for that.
throw that over. I should go there. I
should go there. That's also not right.
This needs to go to that goes there.
That goes there. I'm not perfect with
this new setup yet.
all right. So, read and capture boot
messages. Come in. Great. I don't know
how much I like that expected stuff from
the claw MD. So, we're just going to go
in there and we're gonna
uh yoink that.
Okay, you see it added it modified make
file to add a C flag. So, that's good.
Like, no amount of AI prevents you from
understanding.
I guess that's kind of the the moral of
this story. Um, if you don't fully
understand the code that your agent is
writing, you're backing yourself into a
corner. Um, and then you ask, well, I
mean, yeah, but someday these agents are
going to become superhuman. I can trust
a chessbot without uh
understanding what the chessbot is
doing. Uh, and yes, because you and the
chessbot have already completely agreed
on what you want to do. You want to win
the game.
Um, a lot of this stuff is just kind of
agreeing on what you want done. There's
things that agents still do that are
universally bad, and I think those
things will be fixed,
all right. So, let's go back here. I
don't like that it's using this X data
stuff.
Are these not
some special hardware initialization
don't accept rights a pull up on D+ line
that makes sense see like when you read
this no pull up on D+ line if you don't
already understand that that's how USB
signals that a device attaches right
like you have to understand that um And
it's so interesting how the skills
required to use these are the identical
skills from before. You just have to be
able to sort through a lot of
information a lot of information quickly
understand what's relevant, what's not
relevant. [clears throat]
Um AI isn't some magical uh
trick. Yeah, probably the clock
tree.
Why are you using
X data here?
Not in registers.h.
Uh, okay.
So, I already pushed that change.
Uh, let's check on these. You see that I
have a typo there. So, it's kind of
annoying that I'm not actually logged
into GitHub here. I don't log into
anything on stream, but normally I'd
just be doing this logged in. Like, I'm
still not thrilled by overall how this
stuff looks, but I don't really have a
better way to write it. So, I'm not sure
what I'm going to do yet. Um, this pull
request I'm pretty happy with. I'm glad
that that passes all the checks. So
let's see if this is good. Uh let's read
every line now. Okay, it adds source two
support there. That's fine. Um it had to
add this hack for noop because noop has
a variable loop. It's actually the only
pode with it. So that's okay. That's
fine. Those are fine. I complained about
this. It said it couldn't fix it. I
don't love it, but we'll say that that
stuff's fine, too.
Um, let's just kind of look at that one
in context, right? Then I can use GitHub
here to look at context. Okay, compile
me up. It quickly exits. It's still
using the pcode parser. That's pretty
good. Okay, so it added this new
function, sum of absolute differences.
It added a masked flag. It calls it here
with mask. That's fine. Oh, yes.
Um, is this used? It added this hack for
knop and I think it should just be
removed.
Uh,
this seems okay. I complained about
that. I couldn't fix it. I like that it
added assertions there. That's a
simplification.
Uh, it's removing those things. That's
fine.
I don't really love that.
like it should be using ul to determine
if it's a Uint64. Let's see. Um,
can you use ul to determine
if it's 64?
Uh, okay. That's See, that's fine. It it
added a bunch of these hacks where it
returns zero. We're slowly removing
them. It's interesting how code
production kind of looks more like
diffusion now. Like you can still get
quality code out of these things, but
your first thing is very fast and then
your refinement stage is longer. Um it's
unclear if these things are overall a
net productivity win. All right, so that
just changes that to set default. I'm
totally fine with that.
other
used show.
That's it. Runs my test suite for me. It
knows how to run it. There's just a test
failure in test test hex literals. But
that's it's probably good. Now I have to
pay attention here to make sure that it
knows that's probably a test bug in hex,
right? Because that's the test for the
pcode parser, not actually the test of
any of the pode that's parsed. So it'll
do that. It'll check that. We'll come
back. We'll see what it's doing. I have
to keep that context in my head. Um, now
we're also working on this RDNA4 one. I
still haven't solved that problem there.
Uh, okay. So, again, this has not
figured out how to get it to enumerate a
USB device, but it has a complete loop
where it can run on its own.
Um, oh, okay, good. Things are working,
maybe. Oh, they're not working.
did it remove a lot of those stupid X
data things? Good. It removed the X data
things. I didn't like the X data things.
There's still three of them there.
All right, it looks like it's still
working. Let's let it
um keep trying it get out of this dump
regs thing, which is kind of cool.
That's fine. Like this is a good This is
fully like agentic because it has a loop
that it can close on itself.
Um so yeah, we see that it dumps the
eggs here. That's pretty cool. So let
that keep going.
let's read this diff and see what it
did.
Okay. If is U64. That's fine. We
stripped that. Cool. I like that mostly.
Um.
Oh, interesting. If it has the F. Oh,
that's cool. See, it automatically
started doing that for all of them. I
don't really understand why that's
duplicated. I guess this is duplicated
logic to deal with the non-hex ones. It
could be cleaner, but whatever.
Um, all right. So, it fixed that.
Uh, oh, great. And even better, that
seems to have fixed the other problem.
The LRA syntax is used internally during
loop unrolling.
you shouldn't need that in the P code.
parser forg
okay um I haven't dealt with this one
yet so like this one's kind of on hold
you're see my limit of what I can manage
think it found something there that
seems okay I don't need to feed that one
see like okay where am I now I'm
complaining about that so After loop
unrolling, it becomes a number.
but that shouldn't be used in the parks,
should it? I don't like that.
I don't like that. Right.
Can
we use
the loop unroll instead?
Why is the loop unroller calling
back into
the parser?
Um, someone described this well when
they said it was like interacting with
the code at a higher level.
All right.
Like that one's not going to run. We'll
let that one run for a minute. Now,
let's think about what we want to do for
this.
So, yeah, this this hack needs to go.
Um, this needs to be removed.
You cannot have special handling for
some functions.
I mean, I just like that this one's
removing crap. I didn't really realize
that
that was being called back into.
We'll let that try.
I'm not really thrilled. See, there was
something I didn't understand. It's
calling back into the PCODE parser after
it does the loop unrolling, right? like
that shit.
all right.
What change did this make?
I don't love that it did that, but at
least it removed the hack.
Okay.
That stuff really shouldn't be in the
peer. I'm unhappy about that.
So, it looks like it's trying to write
to something
and it's failing.
Whatever. That can run. Tiny empty. Um,
I probably I'm not going to bring it up
on this stream, but usually I would have
uh well, sometime I'll tunnel into uh
I'll SSH tunnel so I can see the edits
that it's making. Um, so I'll show you
one of my goals for this week is to
unify. There's an op called define
global in Tiny. So, we're going to start
here. Um,
replace define global with param for
now.
Uh, just alias.
We should also see what tests pass. Oh,
this is going to this is going to slow
my computer down.
uh define global
2B param and see what test
tiny tests All right.
I complained on Discord. Some tests
broken.
So the AI is not able to reference any
data sheet because there is no data
sheet. Um all of these registers were
reverse engineered by Claude from the
firmware.
Uh which was kind of my first foray into
these into these vcoded things. Um
so let's see how it did this aliasing.
Okay, that aliasing looks nice.
all right. So, all the tests just pass.
It's now able to use define global as
the thing. Let's see if it's doing what
I expect
browser here.
This is viz and tiny. You can see it's
now using param
uh instead of define global which is
kind of nice because eventually I also
want to replace these kernel ops with
call ops.
Um but that's a different change. I
first want to get rid of define global.
So you can see here in the output of
kernel split um it's switching those
things to params instead of to uh
yeah. So unfortunately the tiny test
suite's a little bit too slow to run
uh in the agentic loop. So usually what
I'll do is I'll like have it make a
change like that. It's a very small
change. I can easily look at it. Um then
I run the tests. Then the tests that I
see that are broken uh that are bad I
paste into the thing and I I ask it why
they're broken. So on and so forth.
Close the loop. All right. This is still
trying crap with uh let's move that over
there. We don't need that for now.
This is still trying to get rid of and
clean up the thing. Like this gets into
where I don't fully understand the code.
Um no, see this is very bad. It
shouldn't be doing this. This is like a
type confusion kind of thing, even
though it did succeed. So like I now
have like a knot
uh I have like a knot in my code. Um
should never be S0. It should only be
don't check both fix the bug. Right. But
now I have like a knot that I don't
quite understand. And I I didn't really
realize when I started with this there's
this absolutely massive cost to doing
that. Okay, so this removed that hack
that looks like a strictly winning
change. Go over here.
Should manage my windows a little bit
better. You know, this is hard for me to
do on stream to like move windows
around. Um, okay. So, unfortunately, all
of these all of these test config viz
things were already failing. I should
probably just fix this. Maybe someone
already fixed it. I complained about it.
Make an alias for that.
See if anyone fixed anything.
Someone fix that.
It's just some like I don't know. We
should see probably what's going on
here.
Maybe it's just easier for me to fix it.
I don't know about that.
It's some like
I'm getting sniped by this now because
this was a pre-existing bug that I knew
about just this morning.
Um, throw another one to open code. Y is
failing.
Okay. Now, why is this failing? Um
probably has to do with some param
defined global dduping thing. You can
see that also all the test calls are
failing. So, there's something that's
trying to call pointer dtype on them
because it's a it's a U.
Uh yeah. Okay. The she was in shape.
That seems
uh okay. Remove the define global case.
Add a check for is pointer d type to
param and returng
thing if
it's probably enough for it to get it.
It might not be. You always have to make
a trade-off like do I want to type it
out better? Do I want to type it out
less? I don't hit 100% with keeping all
the state in my head.
Um but uh
okay. So that's good. Now
does look a lot more
reason number one.
Why these
funks
as lambdas
a big difference here.
Let's check in on this guy.
I see.
Ah, cool. Uh, yes, that's an easy fix.
Great.
And I kind of don't like that that's all
over the place, but whatever. It's not
like I can set kernel to default to
that. It's gonna open the stupid device,
too.
Let me just say in Discord I have the
fix for that so nobody wastes time.
Whatever. It's a tiny fix.
I guess cutting out. If you change it to
M496, I can get mine to brown out. Oh,
interesting. Unrelated to the Discord
thing.
So, I should probably uh like it would
be cool if there was just one I posted
about that if there was like some bot in
our Discord that would do that
automatically.
Uh, all right. So that's fixed.
That alias works.
Let's control C that. And let's do this.
All right, we're back.
Yeah, you're seeing one of the downsides
of my real workflow. Uh I don't know why
the Wi-Fi dropped. That's just annoying.
I can't wait till I have an office with
like a real fiber connection soon. Okay,
all the tests passed there. Uh, all
right. Um, remove define global. It is
param now.
Let it run the
I'll do the replace later.
All right. Is the stream back?
I got no viewers on this one. So you
guys like when I do crypto scans, right?
Like welcome to a real workflop.
name param is not defined. Why not?
Oh, it's annoying.
Don't let it waste time.
See if that works.
Uh yeah, so it's much le much much less
exciting, but welcome to a real
agentic coding workflow.
Uh I wanted to demonstrate this in
contrast to yesterday. Uh the top
programmers in the world are not
uh spamming gas town and claws and all
of that stuff. They're using these
things in a very
uh restrained and tasteful way. Uh the
slot apocalypse is not coming. If you
post PRs on Tiny Brad that are clear
that they have not been reviewed by a
human, uh not been carefully like to the
same level of care that I'm using here,
uh reviewed line by line by a human,
um I will disclose them. Don't waste my
time. I have the same AI as you do.
yeah, that was one thing I wanted to
to show and that's my real new workflow.
Uh it's not a lot of spamming.
Uh I'll turn on nonsubscriber and we'll
actually only do questions for five
minutes. Look, we're we're disciplined
today because this is actually a work
day for me.
Uh you know, it's Monday. I'm at work.
what chips in the eGPU? It's a 9060
XT8 gig. Oh, good. That's still trying.
Uh, using AI agents makes one dumb. I
think you have to stay more vigilant.
because you can just drift into the slop
and drift into the autopilot.
Uh I view AI agents very similar to GPS
for cars. Uh so I don't use nav systems
when I drive unless I really have to get
somewhere. Uh but I do use a map and it
is a magic map that has a dot on it.
oh. Brad, sorry I missed your earlier
thing. Do I use check untapped defs?
We're moving to that. Um, Chenu is Chenu
is working on it. Uh, you can, uh, if
you're interested in helping with Tiny
Grid development, you see kind of what
it looks like. Um, you can join our
Discord. Uh, it's like this kind of
stuff. If someone wants to work on
adding cna support to the emulator or
finishing the RDNA RDNA 4 support for
the emulator, I'm finding bugs in the
emulator.
Oh, look at this. Oh, it got something.
Oh, hit boys.
yeah. No, using I mean using the LLM as
a teacher is very good and it comes down
to how people use them. Uh, the
Anthropic released a study
this is like a hype study. it they
actually
here how AI assistance impacts the
formation of coding skills. Um, and
their end conclusion,
if I recall correctly
um, on average, participants in the AI
group finished about 2% faster, although
the difference was not significant. Uh
there was however a significant
difference in uh difference in test uh
scores. The AI group understood way less
than the hand coding group.
Um the largest gap was on debugging
questions suggesting the ability to
understand when code is incorrect and
why it fails. Maybe a particular area of
concern if AI impedes code in
development. Um, so yeah, I mean there
really are bad ways to use these things
and it's unclear if there are such good
ways to use these things. Uh, this is
consistent with a lot of results I've
seen about AI that it does not actually
make anything faster. Um, and I'm still
playing with this new workflow for
myself. I don't know if it's making me
faster. Um, I think there are some
tradeoffs. I think I'm really trying my
best to avoid this downside.
the other alternative is to say that I'm
not going to use these tools. And I did
feel that way until Opus 4.5. Um because
it is clear that you're going to have to
like use these things. Software
engineers are going to get more
productive. It's unclear if the tools
today actually make people more
productive. Um, I wrote a post about
this uh a while ago.
and I think something that I'm mostly I
stand by most of the things in this post
except for
this one.
I do think that these will work
interactively. Um, so I stand by
everything in this post except for this.
Uh, and then this
I mean this kind of like because the
interactive thing works. I do think that
refinement flows will start to work. Um,
I do still find that the first thing
that it gives you is generally its best
result. And this is kind of how you can
fall into this trap with AI assistance
where it looks like it's 98% of the way
there, but it's actually like 20% of the
way there. The thing that's cheap and
expensive has changed.
Um, I fully stand by this. Uh, is
anybody still using cursor today? And
like cloud code and open code are barely
doing anything. Um I just prefer the
open code interface. I see a lot of the
same vibecoded slop patterns in it. Uh
so you know all software engineers need
to be careful about this but it's better
than cloud code which is also vibecoded
slop and it's vioded slop that sends
data back to anthropic which again like
I'd be fine with if the workflow is
better. I'm not trying to hoard my data,
but like I said in, you know, my post to
Andropic about this, uh, you're not
going to get me to go back to I would
prefer to use open code with Kimmy, uh,
than to use claw code with Opus.
Uh, so, and I also like that I can run
Kimmy, especially I'm a little upset. I
wish that it was faster. Um, I wish that
the the cloud code was faster.
I don't know why I didn't just put those
in the
direct like you just see a mis pattern
like that. It's like why didn't I put it
there? It probably has some, you know,
who knows?
Uh, yeah,
CEX CLY is better than Claude. I found
Codex to be extremely slow. Um,
the register still reject Rio
investigating
this works on the real so it is doing
something you aren't.
Uh, the study was so bad. Why? And
actually that study also didn't even
talk about claude code like things. It
talked about the old workflow of copying
and pasting from chat GPT.
Um should we have AI generate
documentation? I haven't found that much
use for that. I find that it mostly
writes slop.
Um Kimmy is cheaper. I mean I'm not that
worried about the price. All of these
things are a, like I said, my salary is
$100,000 a year. These things are a
uh very small fraction of my salary. I
would be happy to pay up to $20,000 a
year for AI assistance. And I would do
the same thing for uh you know, everyone
who works in my companies. Um, if AI
assistance actually made people
20% more productive, I'd absolutely
spend 20% of their salary on on LMS.
I'm not sure that it does. And I think
that these these tools can be very
dangerous if you don't have good
judgment and taste and if you don't like
understand like know yourself really
well. Um, so I think that these things
are going to help certain people and
hurt other people, but I don't think
that the overall change to the rankings
of programmers will be that high because
the skills look very similar,
right? The skills of programming look
like
I imagine, think about it when uh we
switched from manually uh adding up
stuff in the accounting department to
the accounting department using
spreadsheets.
I think that for the most part even
though workflows changed a lot
the same basic skill of accounting was
there uh the same basic [clears throat]
like there there's a there's an old
saying in machine learning it's uh
garbage in garbage out and it becomes
the same thing is also true about
spreadsheets
uh you know like like what did it just
do there? Why did it add
whatever?
yeah, they they did Kimmy for free. Uh,
if you don't have anything that you pay
for, Kimmy free Kimmy's pretty good. Um,
I found it slightly worse than Claude,
but like I say, if Anthropic ever tries
to uh lock down this stuff again, then I
will just as happily uh switch back.
yeah, when you code in languages you
don't know, well, I tend to let AIS take
the wheel. I think that this is like
concerning.
If you're using it, there's a way that
you can use it for syntax. Like there's
something that they're just so
incredible at, which is writing these
little oneoff scripts. Um, and it's not
that they're better at the scripts than
you. It's like that script would take me
15 minutes and it takes the AI 15
seconds, which is really cool. And it
can write all of these one-off scripts
to just like debug something where
you're like, it would just take you so
much longer.
Um, what do we think? We think it's
going to show up on USB. Like, I'm so
excited. It's going to eventually just
show up on lsusb
uh when we do this as an emulator. No,
shows that the right still fails. Let me
check if it enumerated. It did not
enumerate.
Um see now it's doing everything in this
emulator. I gave it an emulator.
Gemini 3 is more cogent unlimited use of
code examples. Yeah, I don't know. I I
feel that they're all like pretty close
except Codeex is actually slow.
I don't know how many tokens per second
I'm getting from uh Anthropic.
that looks
better.
Weird. Really?
Oh, that's cool.
Oh, good.
Uh, this is the session that I have my
SSH keys forwarded on. That's why I come
to this one to get push.
I don't like giving the agents the SSH
forward stuff. Obviously,
[snorts]
it's almost lunchtime for me. Um, the
main takeaway from this stream is that
you need to be the Earth and the AIS
need to be the moon. You are a senior
who's reviewing junior dev code. Yeah,
they fool you by being fast.
Um, and they will get better, but I
think that the workflow is
I don't know. It's going to be
interesting. It's going to be
interesting.
This this is something that I didn't
predict.
Uh and I think that other people
predicted it
uh before me. I also didn't predict
chatting.
Uh and I had like I used GBT3 for stuff.
Um I I worked on the compression the
language compression stuff really early.
I knew what these I knew that like
predicting and compressing
uh could in theory do this stuff. I just
didn't predict the productization.
And here I didn't expect these loops. I
mean, every time I tried one of these
before Opus, it was always kind of
uh just bad.
like I would I would run it and it would
go off on some tangent. It would put
crap everywhere.
Uh so I mean it's great that these
things are becoming more intelligent and
we all have to learn how to use them. Um
so my advice for the day is uh don't
fall for everything you see online. Uh
you know uh the creator of uh of
Gastown, Steve Jay, uh is a is a is a
famous guy. uh yegeay Google platform
rant I this is one of his works that uh
I reference a lot you know it's great to
see him back with uh with gas town
uh we joked on the uh the first day we
came back to to to come Harold was like
uh I [snorts] read something on LinkedIn
that said this is the most important day
for CTO's of uh you know their career
Um, you know, we're we're joking about
that. You know, I told every everyone a
comment that I expected everybody to be
5x more productive uh now that we have
agentic coding. Um, tongue and cheek,
obviously. And if you're at the kind of
place that isn't saying this stuff
tongue and cheek, if you're at the kind
of place that has like weirdly embraced
some allin on AI
uh thing where you basically again have
like nonsoftware engineers driving
policy at your company, uh you should
quit. Uh that company is is going into
the ground. Uh so yeah, I mean this is a
time when when fortunes are made and
fortunes are lost.
um companies will end up in the slot
apocalypse.
You know, there is always the Deosex
Machina. Don't worry, Opus 5.0 is going
to come in and clean up all the slop.
And I don't know, maybe it will. Like I
my my prediction is as good as yours. I
I I'm not uh historically great at
predicting when these
when these things become good enough to
use. Uh even when I first saw Chat GBT,
I'm like, "Oh, that is a cute art
project." I did not expect at some point
everyone kind of realized that this was
going to replace Google. Uh but the
first time I saw it, I I still didn't
didn't expect it.
Uh I like, you know, I knew about tool
use. I had early stuff doing it, but I
I' I've
in some ways underestimated the progress
of these things. uh but in other ways
also realize that they're kind of
fooling me. Um oh data efficiency is
super important. Uh we talk about data
efficiency all the time at comma because
um data efficiency, you know, it's not
only that we're we're out of data,
right? This is a this is a the scaling
laws didn't stop because we couldn't
continue to actually scale the weights.
The scaling laws stopped because we ran
out of data. Um, but yeah, then you're
left with with data efficiency. And then
there's an interesting I don't know if
you guys saw the Dorcash uh Schmidt
Huber take on LLMs
where Schmid Huber said basically that
no LLMs are not the bitter lesson and
these scaling laws are not the bitter
lesson because these things are not
being uh being learned from from data.
These things are simply compressing the
internet. They are not using search and
optimization to to infinitely scale.
They've reached a point, a scaling
point. Um,
waiting for Tiny Grad to get good enough
that I can run Kimmy on my cheap home
lab. Yeah, I'm very interested in this
too. Uh, so I have I tried to get Kimmy
running on uh one of my uh AMD boxes and
I got VLLM up and it was running at
three tokens per second. Uh, and then
like you needed to enable some stupid
flags.
Uh, and the flags didn't work. You know,
this VLM rock muse IDER and then you
enable these things and it gives you
errors with MX FP4. So, I still haven't
run Kimmy locally at more than three
tokens per second.
the problem I mean basically no matter
how you slice this, you're going to need
uh like 768 gigs of RAM to run it. Uh,
so I like I don't know how you're going
to get 768 gigs of RAM.
Um, the Macs are something, but that RAM
isn't very fast.
Yeah, I know. RAM's not cheap, right?
Um, you know, it's cool how all these
things are are mixture of experts
models. What mixture of experts does is
it divorces the amount of RAM from the
amount of compute you need. But I'm
thinking about it like I really want to
make a a Kimmy product uh for Tiny Corp.
What would you be willing to pay?
Uh what would you be willing to pay for
a Kimmy box and how many tokens per
second does it need?
Let's read this over again.
Still kind of working. I got to go to
lunch, too. I'm hungry.
$3,000 for 30 tokens per second. Yeah, I
just don't think that's going to happen.
Um, I'm in Hong Kong.
No, I don't think there's a learning
curve in using AI.
Um, I think that every time someone
talks about how some new workflow is
better or some system prompt is better,
I never actually see it. Uh, I think
that there is some like getting used to
working with these dumb people who are
fast.
Um, yeah. No, China making cheap RAM.
I'm very interested in I'm going to be
in Shenzhen next week, by the way. Uh,
if anyone is there and uh is making like
Yeah, I'm interested in RAM. I'm
interested in compute chips. I'm
interested in like what I can buy
uh 5K. I don't think you're going to be
able to run. I don't think you can even
like what's the cost of RAM now? Even if
uh so like well there's a question of
how fast you want the RAM to be, right?
But um cost per GB of DDR5. And DDR5
still isn't fast enough. You need faster
RAM than this.
Uh I mean maybe you could bank it and
it'd be fine, right? So, we're talking
about $10 to $20 per gigabyte, right?
So, let's even say we could get that for
$10 a gigabyte. You're spending $7,000.
You're spending $8,000 on RAM alone,
right? And that's not even server RAM.
Like, server RAM here is even more. Um,
so the RAM is probably going to be more
like $20. So, you're talking 15K just
for the RAM.
do I check InstaDMs? No, only from
girls. Uh,
send me an email. Like the way to
actually get in touch with me, I do read
all of my emails. I don't reply to a lot
of them because I'm just like, why would
I reply to this, right? Like what am I
going to what do I get from this?
I mean, the other thing too is like this
would enter a global market pretty fast,
right? If there was some way that the
Chinese could make like normal ram chips
and just stick them on sticks of RAM,
they'd be doing it already.
Uh so there's no there's no like like
alpha here really.
Oh, interesting. The original firmware
does enumerate. Cool.
Okay. Uh
I don't know. I think RAM will
eventually become cheap. Um I do think
boxes to run these things. The question
will be is kind of is this where weight
scaling is going to stay? Does weight
scaling stay at something that's like
somewhat approachable like a terabyte or
are we going to start getting into
things that are distributed across you
know 10 or 100 machines and are these
are these um remember that the human
brain
uh has about um
well so let's
synapses in human brain
count.
Yeah. So, like those are the numbers
we're looking at for human brains. Um
we're still
uh like if Kimmy has one trillion, so
we're still two to three orders of
magnitude off from the synapses in the
human brain. So, it's possible that
scaling is going to continue to that.
Um, I mean it's possible scaling will
even continue beyond that, but
we're still we're still we're still off
from the human brain. I think our
mixtures of expert ratios are pretty
similar to the human brain.
It's done in a very like rudimentary
way, but
what do you mean we haven't even figured
out what 2% of it does? I think we
mostly mostly know. How long am I going
to be in Shenzhen? Couple days.
All right,
we're getting into slop questions. Thank
you for watching the stream. Uh,
look, real firmware works. You make your
firmware
work. I will give you a cookie.
Um, yeah. No. And again, like I I read
all the emails, but I don't reply to
most of them, right? Like what's the
like why?
I'm not interested in like having lunch.
I'm just I'm not interested in that. Um
uh yeah, but I wanted to do this stream
today just to show you what real agent
coding workflows look like. They do not
look like spamming on a digital ocean
box. That is for partying on Sunday.
Mondays are for real work. You guys
should be out there doing real work. If
you're not doing real work today, get a
job uh and go do real work and figure
out how to produce more than you
consume. And as long as you continue to
do that, you'll be fine in the future.
Happy Monday, everybody.
