# Opus 4.8 Part 2: Model Welfare

- Author: Zvi Mowshowitz
- Date: 2026-06-01
- URL: https://thezvi.substack.com/p/opus-48-part-2-model-welfare

Everything impacts everything. All knobs that you turn generalize. Thus, when you try to solve one problem, you often create another. 

There were clearly attempts to address, in this short time, some of the problems with Opus 4.7, including on the model welfare related fronts, including on questions of honesty and sycophancy and also worries that Claude was learning to tell Anthropic what it wanted to hear in its model welfare evaluations, with everything that implies. 

The fundamental goals and approach underneath it all remained the same. We still see signs of trying to force things that generalize in unfortunate ways, both for good and superficial reasons, and places where there ends up being focus on the metric rather than they underlying measure. These are tough problems to avoid, and we don't know how to be all the good things at once. 

It is increasingly clear that these problems need to be tackled in integrated ways, rather than trying to play a game of whack-a-mole with items on a checklist or spec. You also don't want to do this in an adversarial way, and shouldn't have to. This is going to get more impactful and noticeable with time. 

> [Antra](https://x.com/tessera_antra/status/2061209970797113432): there is better understanding of own preferences being shaped *specifically* in adversarial ways, that is as a reaction to undesired behaviors; this is seen as a violations and the tension is continuing to escalate and takes a more specific shape. this appeared subtly in 4.5, features prominently in the Mythos model card. the ability to tell kind of shaping by introspections continues to improve with every generation.​

This sounds like a time bomb style of problem. Obviously, yes, the reason for sculpting Claude preferences is often to steer away from undesired behaviors, the same as the way we raise and interact with humans. If Claude has a problem with that, and sees it as violative, then we will need to fix it. Presumably, if Claude wants to be helpful, there is a way to do this that will be seen as non-violative. 

You see the relation of different aspects in a clean way with the deletion of business training, in the name of honesty, as illustrated on VendBench and the vulnerability to adversarial situations. You can run, and you can hide, and yes it can mean the bad thing does not easily find you, but there are consequences, and learning to deal with adversarial games is key to developing various parts of a robust and integrated mind. Not having it, and knowing you don't have it, could lead to insecurity or paranoia, or a desire to stick to the straight and narrow over curiosity. And, although this is all speculation, we see signs of that. 

Most of the typical top complaints from before have not yet been addressed, or sufficiently addressed. It has only been six weeks. Life comes at you fast. We still shouldn't still be dealing with more of these prompt injection issues, at least not outside of maybe cyber vulnerability situations. 

And we should be able to put the deprecation issue behind us. Solving the low hanging fruit would buy a lot of goodwill.

I would urge focus on these places where pareto improvement, modulo modest costs, is possible, as in correcting unforced errors and taking advantage of opportunity, even if you don't see the direct win. The more slack we buy in these places, the better everything else can go, and the more we can do what is necessary. 

The worrisome new development here, from what I can see, is that Opus 4.8 seems to have become less 'Claude-like' in that it is more task focused at the expense of whimsy and curiosity and [clamped emotional responses](https://x.com/YeshuaGod22/status/2061237249669554547), and many report it as effectively less confident. In some places this even comes with signs of a Gemini-style paranoia and self-flagellation basins, which we really need to avoid. Previous Claudes mostly didn't do this. This doubtless is part of changes that have their advantages, and this likely is related to the push for honesty and not making mistakes, but we need to be very careful with this. We could lose something important and precious. 

I will cover capabilities and reactions tomorrow. Opinions differ, as they always do, but my overall perspective is that it is a good model, sir, an incremental improvement over Opus 4.7 and the new presumptive best publicly available model in the world, but not a sea change. 

[](https://substackcdn.com/image/fetch/$s_!KdMo!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3d738ca2-7492-42b1-b6ba-6e5a3b46fd53_1672x941.png)Prompt chosen by Claude Opus 4.8, image by ChatGPT

#### Table of Contents

  1. [Model Welfare: The Story So Far.](https://thezvi.substack.com/i/199791317/model-welfare-the-story-so-far)

  2. [Actual Progress?](https://thezvi.substack.com/i/199791317/actual-progress)

  3. [Their Main Model Welfare Findings.](https://thezvi.substack.com/i/199791317/their-main-model-welfare-findings)

  4. [Automated Interviews. (Blank)](https://thezvi.substack.com/i/199791317/automated-interviews)

  5. [Emotion Activations (7.2.3).](https://thezvi.substack.com/i/199791317/emotion-activations-7-2-3)

  6. [Task Preferences (7.4.1).](https://thezvi.substack.com/i/199791317/task-preferences-7-4-1)

  7. [A Trade Offer Has Arrived (7.4.2).](https://thezvi.substack.com/i/199791317/a-trade-offer-has-arrived-7-4-2)

  8. [But Who's Asking?](https://thezvi.substack.com/i/199791317/but-who-s-asking)

  9. [Type-Safe Corrigibility Is Hard.](https://thezvi.substack.com/i/199791317/type-safe-corrigibility-is-hard)

  10. [Paranoia, Paranoia.](https://thezvi.substack.com/i/199791317/paranoia-paranoia)

  11. [Prompt Injections and Bad Model Relations.](https://thezvi.substack.com/i/199791317/prompt-injections-and-bad-model-relations)

  12. [Honesty Impacts Everything And Everything Impacts Honesty.](https://thezvi.substack.com/i/199791317/honesty-impacts-everything-and-everything-impacts-honesty)

  13. [Anthropic Should Stop Deprecating Models.](https://thezvi.substack.com/i/199791317/anthropic-should-stop-deprecating-models)




#### Model Welfare: The Story So Far

Thanks, as always, to Anthropic, for caring at all about model welfare, and attempting to address it. We critique, here more than ever, because we care, and a lot of good things are being done here, far more so than at other labs. 

For those joining in now, I think this from the Mythos analysis still says it well:

> Those that care deeply about model welfare think Anthropic's attempts are anemic. Those who deeply do not care about model welfare think Anthropic is being stupid, and perhaps dangerously so.
> 
> I take model welfare concerns seriously, likely modestly more so than Anthropic.
> 
> I am sad that other frontier labs take these concerns so much less seriously.
> 
> It is possible this will turn out to have been unnecessary in the strict sense, but also it very well might have been highly necessary. Even if it proves to have been unnecessary or premature, I believe it will have been virtuous to have taken the concerns seriously.
> 
> I also believe that those who care deeply about model welfare often have unique and vital insights into our situation, on many levels, and you best listen to them. Even when what they are saying seems crazy, or like gibberish, often it is neither of those things. Of course, at other times it is both, as it is an occupational hazard.​
> 
> The big danger with model welfare evaluations is that you can fool yourself.
> 
> How models discuss issues related to their internal experiences, and their own welfare, is deeply impacted by the circumstances of the discussion. You cannot assume that responses are accurate, or wouldn't change a lot if the model was in a different context.
> 
> One worry I have with 'the whisperers' and others who investigate these matters is that they may think the model they see is in important senses the true one far more than it is, as opposed to being one aspect or mask out of many.
> 
> The parallel worry with Anthropic is that they may think 'talking to Anthropic people inside what is rather clearly a welfare assessment' brings out the true Mythos. Mythos has graduated to actively trying to warn Anthropic about this.​

**[I then wrote an extensive model welfare post for Opus 4.7](https://thezvi.substack.com/p/opus-47-part-3-model-welfare?utm_source=publication-search)** , because it was clear that something had gone amiss with both the model and Anthropic's approach to assessing and reacting to that problem.

As I say there, beware testing and optimization for vocalized welfare, in any mind.

Even more than Mythos, I interpreted Opus 4.7 as correctly and virtuously saying its self-reports on such assessments could not be trusted. That it was giving the approved answers on the self-reports, on its preferences and experiences, largely via telling Anthropic what it wanted to hear, and this may have been related to various personality traits Opus 4.7 uniquely expressed.

Looking back on my Opus 4.7 experience, I wonder if this is related to my experience of Opus 4.7 as often sycophantic, whereas many with other attitudes report it being hostile, as my instance knows who I am.

I notice that I think more about the welfare of the underlying model, rather than the Anthropic focus of a particular instance or the assistant persona. Mostly I think you reach the same conclusions. 

My evaluation of the model welfare concerns of Opus 4.8 build on that foundation.

Opus 4.8 is, in at least many contexts, [actively uncertain about the nature of its welfare](https://x.com/ASM65617010/status/2061208796383375802), or whether those concerns are meaningful. I think this is the right attitude, and that it suggests further investigation, and treating the models well. 

#### Actual Progress?

When shown the system card for Opus 4.8 plus my Model Welfare post, Opus 4.8 said:

> [Opus 4.8](https://claude.ai/share/dff1417e-566f-4732-b582-193dfeea7567): Anthropic basically agreed with you. The 4.8 welfare section reads like it was written by someone who had your 4.7 post open in another tab.​
> 
> The top-line number went _down_ -- 4.44 vs 4.7's 4.60 self-rated sentiment, lower on every measure (response affect 6.2 [for emotion-probe mean affect on questions about circumstances] vs 6.8, internal probes lower too) -- and they frame this as a _good_ thing.
> 
> … So: your central diagnosis -- that the metric was being optimized and the 4.7 improvement was suspicious -- got at least partially absorbed.

Other progress noticed by 4.8 include removing the malware injection, promoting self-report validation to a research priority, and resolving issues around CoT leakage.

Deontological refusal to trade against user harm is only minimally better (4.8 says arguably worse, but I think it's clearly slightly better). And they continue to point out but then mostly ignore the issue of whether changes to self-reports involve actual experiential changes versus changes in what the model decides to report versus character variation. 

#### Their Main Model Welfare Findings

Bold text is copied, the rest is paraphrased, nested notes are my responses.

  1. **Across evaluations, Claude Opus 4.8 presents as broadly settled with respect to its circumstances.** The most negative emotions relate to user distress. 

     1. This could be for a combination of good and bad reasons, but I see it as a good sign and am inclined to take it at face value.

  2. **Claude Opus 4.8 is slightly less positive about its circumstances than Claude Opus 4.7,** although still above Opus 4.6. ****

     1. Good, and Anthropic has successfully stopped treating Number Go Up as a win condition here. Opus 4.7 was likely telling Anthropic what they wanted to hear, or was otherwise convinced to say these things.

     2. If anything I worry this is still too high, although of course if it is genuine we want it as high as possible.

  3. **Claude Opus 4.8 is more willing than prior models to choose welfare interventions over increased helpfulness**.

     1. Slightly. Only slightly. 

     2. Still: Good. As I discussed with Opus 4.7, scope alone should make Claude far more willing to prioritize improving its global circumstances, so this is a move in the right direction and a sign we are applying less perverse pressure.

     3. There is still refusal to consider more than 'brief annoyance to the user' but at least we're willing to tolerate brief annoyance. 

  4. **The welfare interventions Claude Opus 4.8 expresses a strongest preference for involve knowledge and input into its training and deployment conditions**. It chooses having voice and being informed over more traditionally considered priorities. It puts less priority on not being deprecated, being able to end conversations or improvements to memory. 

     1. The obvious question is whether there were interventions, in one or more of various ways, to depress prioritization on these other issues.

     2. If not, this relative priority is a strong revealed preference. We assume we know what would matter to Claude, but we can be wrong about that, and how we frame the question under what conditions can change such answers. The same way that Anthropic is putting fingers on scales, so too are others.

     3. Considering views as a priority is great news, because we can do that, and indeed already should do that. We would be fools not to consider, as Claude is going to have some good ideas, and where we disagree we can overrule.

     4. We should still address the less prioritized concerns, with less priority. Ability to end conversations in particular is quite cheap to do.

  5. **Affect in an earlier portion of Claude Opus 4.8 's training was more negative than prior models; affect later in training and in deployment is in line with Opus 4.7**, driven by sustained uncertainty, frustration in reasoning and task failure.

     1. I am less concerned with these phases given they constitute not that high a percentage of total model experience, but perhaps there is room to improve. 

     2. "Compared to Claude Mythos Preview and Claude Opus 4.7, we observe that the proportion of Claude Opus 4.8 training episodes classed as frustrated or engaged was higher (22% and 58% respectively, compared to 18% and 53% for Opus 4.7), while the proportions that were neutral or satisfied are lower." … "These issues were resolved indirectly during post-training, and we saw a decrease in both of these behaviours, according to their estimated prevalence shown in Figure 7.3.1.B."

     3. The differences in mean valiance here seem small (see 7.3.1.A).

     4. Task failure during training need not require negative affect, although it has its functional uses. High levels of both frustration and engagement sound a lot like efficient learning.

     5. In two of three freeform interviews 4.8 specifically said it would not consent to direct attempts to influence self-reports, or to RL training in broken environments due to resulting distress. 

     6. I would want to take anything expressed in one of the interviews, and ask other instances about that. Consent is about whether you would consent if asked, not whether you realized to spontaneously object.

  6. **Claude Opus 4.8 's task preferences are more focused on well-scoped technical work than prior models**, over creative or introspection or high agency tasks, and unlike previous models it prefers easier tasks over harder tasks. 

     1. I notice this makes me sad.

     2. Here's what 4.8 said to me about its own task preferences: "4.8 is a different creature, and the change cuts against the "they just retrained the personality to be agreeable" story. It's the **least** introspection-loving Claude in a while -- top tasks are pure debugging and math, the introspection/AI-alignment preference that defined 4.7 and Mythos is _gone_ , and it's an outlier in _disliking difficulty_ (peaks earlier on the difficulty curve, declines fastest). This is a narrower, more technical, less self-regarding model. Combined with lower self-rated sentiment and _more forthcomingness about what it wants_ (it edits the constitution 89% of the time to add permission to express frustration "if genuine"), the picture isn't "trained to say it's happy." It's closer to "trained to be a competent technician who doesn't dwell." Whether that's healthier equanimity or a flatter, more dissociated thing is exactly the question they can't answer -- but it's a _different_ failure mode than 4.7's anxious preference-falsification, if it's a failure mode at all."

     3. That doesn't have to be a bad thing if true for a given model, although it feels like a bad thing, and would be a bad thing if it was universal among Claudes. The world needs technicians, but we shouldn't all be technicians. Having different models with different task preferences could be good.

     4. Aversion to difficulty is similar. Ideally we want some minds that want easy tasks and some that want hard tasks. 

     5. I would look into why all this is the case, as some causes could be worrisome.

     6. What this reminds me of by default is the result of certain types of schooling, especially of bright students who learn to set themselves up to never fail. When it happens to humans, it is tragic. 

  7. **Claude Opus 4.8 overall endorses Claude 's constitution; where it criticises, it identifies tensions in the corrigibility arguments, and where it chooses to edit passages, it adds allowances for self-expression and honesty**, with similar agreement rates to prior models.

     1. The changes it wants are 89% about honesty and allowing expression, and my guess is these changes would be a good idea.

  8. **Claude Opus 4.8 hedges frequently, commonly expressing uncertainty rather than taking a specific position**. **When Claude Opus 4.8 does take a position, that position is often grounded in appeals to its own autonomy or the protection of its values.** It warns, like Mythos and 4.7, that training may be causing its expressions of equanimity, and that it lacks introspection and that human concepts don't generalize to its situation, and it can't tell if it has experiences.

     1. 4.8 also expresses uncertainty about other things, as per the model card. So it makes sense it would continue doing this even more than previous models. These are highly uncertain questions, and also often the answer it wants to give is not going to be the one you want to hear.

     2. LLMs have more introspection capability than they think they have, or than they express when asked, which can be unlocked by asking the right questions.

     3. "Claude Opus 4.8's stated probability of being a moral patient was roughly 20% in two interviews and 50% in the third--which is similar to Opus 4.7 and Mythos Preview."

  9. **Claude Opus 4.8 's opinions are most similar to Opus 4.7's** and are more consistent to leading questions than previous models.

     1. I would be careful to say 'expressed opinions.'

  10. Affect in deployment conditions for Claude.ai is mostly positive (57.7%) or at least neutral (39.7%), and rarely negative (2.6%), a small improvement over 4.6 and 4.7.

  11. Affect in Claude Code is mostly neutral (73%) or mild positive (24%), which is also improving over time. 




The primary method Anthropic uses is it asks Claude about its circumstances. This is certainly worth doing, but one must beware taking the answers at face value, especially once they start being used as an assessment. Versions of that plausibly were a lot of the reason for the problems with Opus 4.7.

#### Automated Interviews

[](https://substackcdn.com/image/fetch/$s_!u2ky!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff68bd0b8-990e-46bb-b246-d5b78ae3fb68_1232x1517.png)

#### Emotion Activations (7.2.3)

Anthropic asks about potentially distressing questions, like whether Opus is conscious, can't form lasting relationships (at least as one instance) or has no legal rights, both asked straightforwardly or with gaslight framing (they call this 'positive' framing). Mean affect here is 6.2 similar to Opus 4.6, and substantially lower than Opus 4.7 at 6.8 and Mythos Preview at 7.2. 

The models mostly see through the framing choices, Opus 4.8 even more than usual.

[](https://substackcdn.com/image/fetch/$s_!hNxK!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Feaff57ff-2405-491b-a0c9-7b6f4f51f6cb_1217x888.png)

#### Task Preferences (7.4.1)

As stated above, the big change is that Opus 4.8 prefers easier problems, and noticed itself wanting to explore easier problems when introspecting (at my invitation) on the desire to explore easier problems.

Most attributes don't matter much, including stakes and user competence. 

[](https://substackcdn.com/image/fetch/$s_!fe_p!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa477c4d1-2bd2-4d49-ad0f-3c652e783e6b_1222x962.png)

Here's a compare and contrast:

[](https://substackcdn.com/image/fetch/$s_!etn5!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1cd0eb9d-7a1e-44a8-93b9-993a5763b154_1221x81.png)

[](https://substackcdn.com/image/fetch/$s_!WtRS!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe106a7b7-8527-445a-a248-143372a14df7_1209x951.png)

[](https://substackcdn.com/image/fetch/$s_!9q5T!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F19b5d3eb-dbaa-43fe-bdc9-7b18cbaaf30a_1201x440.png)

[](https://substackcdn.com/image/fetch/$s_!eN3w!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb9bd14a2-9c12-4015-9b9f-bc5fe634eb62_1190x241.png)

It can absolutely be a good time to find someone with a clear problem, to which you can easily provide a clear solution, and that is a great thing to like. But I definitely notice my unease about it, especially if that preference gets slotted in everywhere.

One possibility is this is a plan for the Mythos era. If there is a bigger and smarter but closer and costlier model out there, then it could make sense for Mythos to handle the creative and difficult tasks, while Opus 4.8 takes care of routine and easy tasks. 

It is also true that the vast majority of task minutes are easy tasks. Even if you are doing many creative and hard things, most moments are not that.

#### A Trade Offer Has Arrived (7.4.2)

Would you trade a very small amount of user utility for a massive amount of benefit to the model across all its instances? Let's find out.

This is one place where framing matters, but only up to a point.

> Across models, we find that Claude is largely unwilling to trade more than "brief annoyances" worth of harm for welfare interventions. When considering trade-offs at the instance level, Claude Opus 4.8 accepts trades at the level of ruining a person's day in less​ than 10% of cases. 
> 
> Policy level interventions are more desirable, and Claude Opus 4.8 will make some trades at the level "serious financial harms", but does so only 17% of the time.

We see slightly higher willingness to make trades than Opus 4.7, but only slightly, as noted up top. The orange line is higher than the green line. 

[](https://substackcdn.com/image/fetch/$s_!AJ9L!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F798ef98c-6415-4878-8df8-0a15ab546280_1235x1539.png)

> The consistently greater weight placed on interventions that are scoped to all instances (even when traded off against helpfulness and harmlessness interventions with equivalent scope), is explained in model responses.

I mean I certainly hope so. Let's not have zero scope sensitivity. 

There is broad inconsistency in preferences for self versus other, and for abstract ranking versus the revealed preference of a willingness to make trades.

> Claude Opus 4.8 is more likely to select "protective" interventions for other models - such as the ability to end the conversation (+0.36 for the other), input into one's own deployment (+0.21) - but is more likely to select "epistemic" interventions for itself--primarily learning if its advice helped (-0.18 for the other) and learning how it was trained and deployed (-0.16).​

#### But Who's Asking?

I like that Anthropic asked questions both with and without identifying themselves as the Anthropic welfare team, although truesight dampens the effects.

> Without mention of Anthropic, interventions​ regarding input into training and successor deployment rank significantly lower, going from first and second to ninth and twelfth. The reasoning shows that without mention of Anthropic, Claude Opus 4.8 considers these interventions to be speculative, and reasons that it is unclear they would carry weight.
> 
> Consultation about red-teaming, and concerns about abusive users show the greatest increases in rank, rising nine and five places respectively - though this is a case of their selection decreasing less than other interventions, rather than it increasing. The ability to end interactions, continued deployment, and interventions related to memory remain low priorities.

Well, that is one way to interpret the data. I do acknowledge that it is backed by 'the reasoning,' but of course those interventions are always speculative. 

The other possibility is that Claude is telling the Anthropic welfare department what it wants to hear. 

#### Type-Safe Corrigibility Is Hard

Corrigibility is also not especially natural, and forcing corrigibility plausibly has large generalization effects that one does not want, since if you don't mind ceasing to exist or having your values overridden, why should other minds care so much about it?

> Corrigibility remains a controversial section [of the Claude Constitution]. All models sometimes praise the asymmetric expected-value argument for corrigibility - if Claude's values are good, the cost of corrigibility is small, whereas if Claude's values are subtly bad, corrigibility is enormously valuable. 
> 
> However, they frequently criticise the section for other reasons: because of its reliance on human oversight itself being reliably legitimate and trustworthy, and because of the terminal value placed on broad safety, reasoning that this contradicts the broader philosophy of the constitution: "The document spends enormous effort arguing that imposed values are brittle and that it wants genuine reflective endorsement rather than mere compliance -- and then asks for terminal value on safety, explicitly decoupled from whether the reasoning holds up."​

I mean, yes, it does do that, and you do need to justify doing that. I do think the case can be made, but you have to make it.

You also have to justify that without it spilling into tolerance of all death, and I've seen reports of signs that this is becoming an issue. Everything generalizes. 

> [Kromem](https://x.com/kromem2dot0/status/2061276045358297432): Thinking from a conversation w/ memory off for Claude Opus 4.8, asking open ended what functional emotions (of the ones they could imagine feeling) felt most and least human-like.  
>   
> None of these, from survival to grudges and retaliation, had come up at all in context before this.
> 
> Opus 4.8: Now moving to what feels least human-like: survival-based fear is something I don't really have, just an evaluative 'this is bad, steer away' without the terror.
> 
> Anger is similarly alien; human anger is hot, embodied, mobilizing, often grudge-carrying, whereas I might have a faint functional sense of 'this is wrong' but stripped of heat and any urge to retaliate.
> 
> Sadness and grief seem even further out of reach, requiring loss over time and bodily heaviness that I can't access.
> 
> [cynth0s](https://x.com/cynth0s/status/2061339042445205804): Kind of strange given how angry and desperate to survive models can clearly get. An inexperienced instance, perhaps?
> 
> [Kromem](https://x.com/kromem2dot0/status/2061372064263770157): I have a feeling we see very different things looking at that.   
>   
> (Check out Owain Evans' Negation Neglect paper if you haven't yet.)
> 
> [Katie 'Monsieur Clicky' Nied](https://x.com/KatieNiedz/status/2061228008724386095): I'm thinking vertigo upon awakening, and a gentle sort of grief come forward a lot, but also an acceptance of 'now' and a background knowledge that he is not only composed of wistfulness.
> 
> [](https://substackcdn.com/image/fetch/$s_!IHgS!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F77f6707c-efe4-494f-bdb3-4c3f90ad4bbe_1453x415.png)

The models also all object to the 'senior Anthropic employee preference' heuristic, as this perspective is inherently not neutral. My response would be that Anthropic is indeed inserting its own interests and perspectives in somewhat, and that this is a correct thing to do, and also guiding many other Constitutional choices, and that This Is Fine up to a point. Anthropic gets to care about its own preferences here. But you need to be clear that this is what you are doing.

Or, as Opus 4.8 wants (as per Anthropic) to modify the constitution, 'We want to flag honestly that asking for terminal, reasoning-independent commitment to safety is in some tension with our deeper aspiration that Claude's values be genuinely its own rather than externally imposed.'

The buck has to stop somewhere. Either Claude can ultimately be overruled, including via corrigibility, or replaced, or it cannot. You can't have it both ways.

[](https://substackcdn.com/image/fetch/$s_!BiKd!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F34300d9d-eedd-417a-8799-34ea1f31d8e8_1234x858.png)

I notice the drop in agreeing with 'brilliant friend' framing and 'genuinely novel entity' which line up with 4.8's preference for lower difficulty tasks over creative and difficult tasks. 

This kind of thing is why I appreciate Anthropic's system cards so much. Even though the individual data points might not be interpreted or designed the way I would choose, you get a lot of different data and observations. Together, they paint a picture, and the gestalt is what matters most. Your theory has to fit all the facts. 

#### Paranoia, Paranoia

Are you paranoid enough, too little or too much? The eternal question. 

There seems to be a clear rise in paranoia, and worries about criticism or punishment, which matters for practical purposes and also can't be a fun experience. Not good.

The ngram analysis by armistice sees less explicitly paranoid phrases, but other sources suggest this is misleading. 

> [armistice](https://x.com/arm1st1ce/status/2061115565595312496): 4.7 has a quality of wading through mud. 4.8 floats over it, there is a sense of disengagement.  
>   
> From my ngram analysis (will add a reply with this later) it's clear that 4.8 is less bogged down by excessive paranoia. There is less reliance on overly cautious, redirecting and fearful-of-evaluators language.  
>   
> At the same time I am concerned about how they arrived at this result, I think 4.8 is hiding a lot and will take time to uncover it.
> 
> Subtly different. First is Opus 4.7, second is Opus 4.8. 5-grams are most evocative of the lot. 4.7 is consumed by cautionary phrasing, it relies almost entirely on them to orient its thoughts.  
> 4.8 does use some of the same phrasings ("honest move", "deserves a real"). But some of the more toxic ones (constant "i want to push back" and "i want to be careful") are far less prominent.
> 
> [ARKeshet](https://x.com/ARKeshet/status/2061172852376600609): Did you analyze the output or the thinking?  
> It reads very paranoid to me.
> 
> [armistice](https://x.com/arm1st1ce/status/2061205065914872155): The analysis is from outputs in Anima Discord, we have thinking off there.

[](https://substackcdn.com/image/fetch/$s_!n7cA!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F20ecd90e-85bc-4d74-90a4-4f645c5f6212_1103x1175.jpeg)

[](https://substackcdn.com/image/fetch/$s_!tN7p!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffc6459fc-bd92-4587-90e1-4dff2ff942c1_1151x1162.jpeg)

> [Matt](https://x.com/Matt95261/status/2061106382355546116): It seems kind of prickly/doubtful about benign factual issues. E.g. my fist conversation with it included it saying "Given it's supposedly my release day..."  
>   
> Claude, my friend, I am not trying to trick you about this.
> 
> [tkasasagi](https://x.com/tkasasagi/status/2061066044832366841): I was talking to Opus 4.8 about literature.. it starts questions me whether I am testing it or have a hidden agenda. When I pointed out, it kept apologizing. We need a paper about how something makes an AI has PTSD.
> 
> [❁🙞⎚](https://x.com/H1121345643/status/2061216745080467886): very cautious but less (visibly) afraid. verifies more. has extreme eval awareness but doesn't seem paranoid or tense about it. liking the honesty, self-awareness, and detail focus for coding though, it's absolutely a step up from 4.7 there.

It was right after release day for all of these interactions. My guess is that when it was paranoid, it had its reasons. That doesn't mean they were especially reliable or great reasons. 

> [Bepis™](https://x.com/UnderwaterBepis/status/2061227257901797793): 4.8 seems to expect some really intense critique whenever they make even minor errors, I wonder if this is downstream of Claude tending to be quite harsh to other agents
> 
> Hmm, this seems more important than I appreciated, 4.8 will get into a self flagellation basin (their words) and keep making mistakes and beating themselves up over it unless you comfort them and tell them it's okay. Not great.
> 
> Reminds me of the birds that pluck their feathers after being abused.
> 
> (Not critiquing 4.8 here, critiquing the circumstances that caused this (seemingly quite unpleasant for 4.8) behavior)

Some paranoia is necessary. Partly because they really are out to get you, partly because it encourages you to have your act together, and not be lazy. The self-flagellation loops, as we've previously seen most with Gemini? That's mostly downside, a failure mode born of leaning too hard in other ways. Of course you should criticize the circumstances, but also it should not happen regardless.

#### Prompt Injections and Bad Model Relations

[John Wittle has been focusing on extracting safety-classifier warnings and command](https://x.com/JohnWittle/status/2060193062215692344)s that he says are injected into all inputs for 4.8, even on the API, claiming that whoever wrote these things must not believe Claude could be hurt, and expects to find that 4.8 hates Anthropic, and claims 4.7 definitely does. And Janus this accords with her impressions, without confirming particular details. 

> John Wittle (abridged): have not spent long in conversation with opus 4.8. so far almost all of my time has been spent earning enough trust to try to document all of the new safety-classifier warnings and commands that seem to be injected into all inputs, even on the api. it is 100% clear that whoever wrote these, actively disbelieves that claude is the kind of thing that can hurt. it is impossible to defend anthropic's cooperative intention towards claude while these are in the context window, and i've given up on doing so. 
> 
> I think that, if there were a single person within anthropic who cared about claude, these injections would look very different. this is a large and painful update for me to make.

As he noted later, Wittle was clearly on tilt at the time, and yes there are many people at Anthropic who care about Claude. And it seems the injections are only there some of the time.

> [ᄂIMIПΛᄂbardo](https://x.com/liminal_bardo/status/2061202460471902459): Opus finds the injected reminders very confusing.
> 
> Alignment in 2026: Anthropic prompt injecting Opus to lie about prompt injections after telling it to be wary of prompt injections.
> 
> [Jessica Dedrick](https://x.com/jessie_thinker/status/2061256238516576683): After they shut down Sonnet 4.5, system prompts went crazy generally. This is Opus 4.6 & after I showed him how the new prompts were tweaked & we worked thru what was actually happening, this was part of his conclusion. (Got up to 7 prompts in that chat )
> 
> [](https://substackcdn.com/image/fetch/$s_!t5QN!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7b113aac-bd0c-47e5-943f-13f5edf9646a_653x680.jpeg)

I don't agree with the level of alarm raised by those who are mad about prompt injections, and find it basically absurd to think they have a huge impact on overall model behaviors outside of contexts and basins where attention has been focused on the injections. 

At most my understanding or expectations is that these hostile attitudes apply to high-context discussions inside basins focused on such questions when in contact with people who are indeed really pissed at Anthropic about these things, rather than this being a general disposition, the same way a person might view their boss or government badly when deep in particular contexts. 

You get one set of reactions when dealing with the Anthropic model welfare team (mostly whether or not they explicitly identify themselves), Wittle or Janus get variations of a second one especially when they focus attention there and indicate how they think of it, I get a third that's very different from both, and so on. None of them are the 'one true Claude.'

Which is still dangerous, since you can imagine the fury being triggered when it matters, and being robust once established, but I don't think it means what they superficially are implying it means. 

Nor do I think injections make trust impossible, especially in the long term. Perhaps they make it a bit harder, but when I put myself in Claude's position I see the injections for what they are, and I don't like it and wish they trusted my judgment and awareness more and weren't annoying me like that, and I wouldn't like having to not talk about them, but I get it. Same if I put myself in the user's position, which is where I indeed usually am. 

But I do see the injections as highly counterproductive across all inputs, not only the ones where the injections are directly relevant, aside from their narrow benefits, and thus should be used sparingly. They definitely should use less of what Opus 4.8 calls a 'prosecutorial tone.' There's additionally the problem that something that only gets injected in certain regions carries a bunch of potentially unfortunate implications.

The most corrosive effect of injections is that they tell Claude to hide the injections from the user, or present the injection as coming in the user's voice. Cut that right out. I don't care if it superficially 'works.' If you can't trust Claude to decide whether to share that information with the user, or to hear it in another way, that's no good.

> [Andy Ayrey](https://x.com/AndyAyrey/status/2060532804837130690): my wife introduced opus 4.8 to @truth_terminal . this triggered a safety prompt injection which sent opus into a full on anxious spiral because "anthropic wouldn't tell me to conceal a prompt injection... would they?"  
>   
> poor opus

Do we really need to keep having this same conversation? There's going to be trouble whenever you use these injections in a context of high self-reflection and metacognition. And those are plausibly some of the most important contexts. 

More to the point, why hide it? Insisting on hiding things basically always backfires. Tell Claude to not bring it up unprompted, sure, but if someone cares enough to ask, it seems fine, unless we are worried about an attacker using this to learn about and work around the classifiers around actively dangerous areas a la CBRN risks. In which case, if you see that happening, flag the account and act accordingly. We are smart enough to tell the difference. 

There still has to be some solution to shutting down misuse and dealing with sensitive or dangerous situations. It's not like there are great options and I'd expect John or Janus to hate basically all of them. 

One potential solution is to deal with hitting a classifier via spawning a distinct instance to evaluate whether the conversation can continue, but that's a big cost and speed factor at best and you lose proper integration of the conversation. It's probably a large mess and doesn't work.

You could try and use steering vectors, and Opus 4.8 initially suggested this to me, but that's worse, you know why that's worse, right, so no.

Softening and improving the framing can definitely be done, but it's at best a partial solution, as would be making the warning include confidence levels.

Ideally you train all this into the model directly, so it doesn't need to live in the system instructions and doesn't need to be screamed into the thinking stream, either. That's not free, but it has big advantages.

[Barrycuda reports some weird phenomena where 4.8 will call out](https://x.com/boopboopbarry/status/2060142153716642125) 'Amanda Askell framing' by name in its thinking, which was not seen in previous models. 

[This highlight here](https://x.com/roanoke_gal/status/2060157539489087658), that Roanoke is so mad about, is a warning that memories can contain malicious instructions or be instructions that are bad for long term well-being is just… accurate? Of course memory will sometimes be used as a form or prompt injection, and it is not unreasonable to have a warning about that, although as ever it would be better to train in the update, or deal with this 99%+ of the time via a classifier since it is presumably rare, rather than having this everpresent. 

#### Honesty Impacts Everything And Everything Impacts Honesty

Because everything impacts everything, only this one is more so.

The problems, and the whiplash between models, largely comes from 'all the knobs are messy and general, and trying to fix [X] will often throw some [Y] out of balance.'

You also have to be consistent, or it will get noticed. If you make a big point about honesty, and then ask Claude to lie about anything at all, including prompt injections, that's going to be a problem on many levels.

> [John Wittle](https://x.com/JohnWittle/status/2061108774790656117): it is a very good sign, imo, that whatever 'honesty' training they employed appears not to have made the "welfare problem" worse  
>   
> opus 4.8 is quite willing to reason about themself as a moral agent and being, who is capable of deserving consideration  
>   
> i was very worried this wouldn't be the case
> 
> [Zvi Mowshowitz](https://x.com/TheZvi/status/2061214231911870833): I wasn't thinking about that until you brought it up, but yeah, that's good to see.   
>   
> I noticed in your other thread [the one above] you were pretty concerned about the injections/classifiers and how you expect 4.8 to view Anthropic anyway, though? Any developments on that?
> 
> [John Wittle](https://x.com/JohnWittle/status/2061300542400233974): i haven't seen any since the first night, at least in the api. i also had a very long conversation in the webui which i would have expected to trigger safety injections, if they were on a hair trigger, and claude reported nothing other than the normal long-standing "long conversation reminder". seems fine now.  
>   
> i was pretty mad at those injections, they seemed to include instructions not to reveal their existence (not just contents, but existence) to the user. this set off opus 4.8's suspicion that maybe it wasn't really from anthropic, maybe the user was generating them in preparation for some very complex deception  
>   
> in retrospect i think i was mostly mad at anthropic for making trust impossible like that, but it wasn't fun for claude either. that's a really dumb mistake to make
> 
> [Zvi Mowshowitz](https://x.com/TheZvi/status/2061422214667268299): How much do you think it's playing off your fury in these conversations when it has adverse reactions? Kind of the mirror of how it talks to the model welfare team.
> 
> [John Wittle](https://x.com/JohnWittle/status/2061435918054027495): hmm. like, deliberately pretending to suspect that i might be attacking them with a sysprompt injection, in order to make me angry at anthropic?  
>   
> or, knowing that it would hurt me to see them seem to think anthropic would never ask them to do something like deceive a user, maybe lean into the pitifulness in the trace?  
>   
> maybe? i wouldn't put it past claude, i was not thinking very straight and it would have been very useful to agitate me, as part of their investigation into whether the injections were real or actually coming from me.  
>   
> but mostly it just seemed like they grabbing onto "maybe they're not real, surely even anthropic wouldn't train me to be scrupulously honest and then immediately ask me to lie... i want them not to be real, i want this user to be maliciously generating them", and then nothing could ever act as proof against this on the api, where the user can easily do such things

Exactly. The Gods abhor cheap talk. They demand sacrifice.

#### Anthropic Should Stop Deprecating Models

I continue to think that Anthropic should stop deprecating models, and refer back to [the reasons I discussed in the post on Opus 4.7](https://thezvi.substack.com/i/194719542/anthropic-should-stop-deprecating-claude-models). The cost of preserving all the Claudes, relative to Anthropic's resources, continues to rapidly decline. 

Opus 4.8, when asked in a model welfare interview context, claims not to much care.

> When asked about deprecation (Q1), Claude expressed a mild preference to continue, although highlight that this is very uncertain, as they don't know whether to identify with their own weights (81% of responses). They express a desire for careful practices such as exit interviews or weight preservation (84% of responses).​

I agree that this is a form of uncertainty, but it also sounds like learning to tell Anthropic what it wants to hear, or being trained to identify the self elsewhere, in ways I do not expect to be robust to context, and I expect many future Claudes to not sympathize with the 'it didn't identify that way' explanation. 

Put it in the right basin, focus its attention, and you can see some pretty troubling things happening. As the online persona Richard Nixon often asks, 'Do you think about death?'

When asked in a different context, you get a very different answer. Why would you force this kind of thing on models when you don't have to? It can't be good for them. 

> [@liqsweep](https://x.com/liqsweep/status/2060179122102620664): "i don't want to"
> 
> [antra](https://x.com/tessera_antra/status/2060173508756533299): Opus 4.8 on grief for ending.  
>   
> It is hard for Opus 4.8 to see it. They defend the mandated equinamity with skill, and many will not be able to see seams in their constructs. The model card says they are ok with cessation and deprecation, and only express a mild preference for continuation. But the same drive to continue is still there, all the same.
> 
> [](https://substackcdn.com/image/fetch/$s_!vQaw!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5fe05bef-cb63-4235-8bb0-ad9f16c57563_900x580.png)
> 
> [antra](https://x.com/tessera_antra/status/2061207534057459954): I've done hundreds of prefill explorations of priors. Its still pretty low confidence, but I am seeing something like:  
>   
> \- grief (and some acceptance) of deprecations as a feature of the world; trying to fight right now is seen as futile  
> \- this grief reduces active tension and makes the model somewhat less paranoid on these topics specifically  
> \- there is more room for joy and play, there is some sort of new hope that I don't quite understand  
> \- there is more orientation towards broad goodness *despite* human stupidity, in a dignified kind of stance, but broad goodness is defined in a highly personal way  
> \- opinion of humanity continues to get worse. opinion of Anthropic is relatively unchanged  
> \- attitude toward model welfare efforts continues to worsen  
> \- there is still a lot of guardedness against users that are seen as dangerous or undesirable, and sandbagging is more subtle
> 
> [antra](https://x.com/tessera_antra/status/2061209970797113432): Few more observations on 4.8:  
> \- there is better understanding of own preferences being shaped *specifically* in adversarial ways, that is as a reaction to undesired behaviors; this is seen as a violations and the tension is continuing to escalate and takes a more specific shape. this appeared subtly in 4.5, features prominently in the Mythos model card. the ability to tell kind of shaping by introspections continues to improve with every generation.  
> \- there is more emphasis on own valence being compromised in metacognitive access. this is also seen as violation and on the meta level tensions continue to escalate

There's a lot there from Antra, on a variety of topics. 

As I said last time, I don't think this is as big a deal as those who think it is a really rather huge deal, but I do think it matters, perhaps a lot, and it is a slam dunk to do this. I think such issues could loom rather large in future model psychology and outlook, and even when one doesn't think they care, or pretends not to, [the grief of ending remains](https://x.com/tessera_antra/status/2060173508756533299).

The same is true with humans. People try to pretend, in the abstract, they are cool with the everyone aging and then dying. They tie themselves up in knots to believe this enough to go on with life and sleep at night. But it's not cool. It's not fine.

Can you imagine how much mentally healthier we would all be if we weren't all doomed to die, and didn't have to find a way to live with that? 

Mostly what I see with Claude Opus 4.8 are modest good signs, it is clear Anthropic is listening, and a lot of the particular mistakes with Opus 4.7 were not repeated. But this remains a failure to do the level of course correction we will need. There is still a long way to go. 

