# Cyber Lack of Security and AI Governance

- Author: Zvi Mowshowitz
- Date: 2026-05-13
- URL: https://thezvi.substack.com/p/cyber-lack-of-security-and-ai-governance

The real recent story of AI has been the background work being done on Cybersecurity, as we process the Mythos Moment along with GPT-5.5, and figure out both how to patch the internet and what our new regulatory regime is going to look like.

The Trump Administration is being dragged, kicking and screaming, into the era of at least some situational awareness, and acknowledgment that catastrophic risks are very much a real risk and they need to have a role in supervising frontier model releases. Now that they're there, Commerce is deciding who gets access to the most powerful model in the world, and they are fighting Intelligence and the national security state over who should be in charge.

Another question is, exactly how strong is Mythos, both compared to past model and to GPT-5.5 and also in absolute terms? We got multiple new reports on that, as well as the METR graph results. There's little question Mythos is a big deal, but there's a wide range of big deals out there. 

Part of the new report from UK AISI is learning that there is a substantial gap between the abilities of the early Mythos Preview (Mythos Preview Preview?) that UK AISI originally reviewed, versus the final version. One would expect more continuous improvement is going on, invisibly to us, in the background. 

#### Table of Contents

  1. [On Your Marks.](https://thezvi.substack.com/i/197563764/on-your-marks)

  2. [How Good Is Mythos?](https://thezvi.substack.com/i/197563764/how-good-is-mythos)

  3. [Cyber Lack of Security.](https://thezvi.substack.com/i/197563764/cyber-lack-of-security)

  4. [Greetings From The Department of War.](https://thezvi.substack.com/i/197563764/greetings-from-the-department-of-war)

  5. [The Prior Restraint Era Begins.](https://thezvi.substack.com/i/197563764/the-prior-restraint-era-begins)

  6. [Commerce Versus Intelligence.](https://thezvi.substack.com/i/197563764/commerce-versus-intelligence)

  7. [The Quest for Sane Regulations.](https://thezvi.substack.com/i/197563764/the-quest-for-sane-regulations)




#### On Your Marks

It is difficult to fully fill the METR.

At 50% success rates, Mythos is above the threshold where METR's methodology is reliable, which tells us very little since that result is on trend. 

At 80% success rates, there are enough tasks where models remain unreliable that the result is still within measuring range. This shows Mythos is modestly above trend, in addition to likely having been somewhat more delayed than usual.

At 95% success rate, no model can get much of a score, because of a subset of tasks, even quick ones, where models struggle. Again, this is an artifact of the particular set of tasks selected.

> [METR](https://x.com/METR_Evals/status/2052896621760004602): We evaluated an early version of Claude Mythos Preview for risk assessment during a limited window in March 2026. We estimated a 50%-time-horizon of at least 16hrs (95% CI 8.5hrs to 55hrs) on our task suite, at the upper end of what we can measure without new tasks.
> 
> [Peter Wildeford](https://x.com/peterwildeford/status/2053169880413999586): Deep learning is hitting a wall (the wall being our ability to measure AI capabilities)
> 
> [](https://substackcdn.com/image/fetch/$s_!P5h_!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F41ec654b-96c1-4c60-bc3e-fc7f46af5d48_900x687.jpeg)
> 
> [](https://substackcdn.com/image/fetch/$s_!QKbQ!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0c1d147f-4871-487b-8e55-5693544f0d27_1767x881.png)
> 
> [Krishna Kaasyap](https://x.com/krishnakaasyap/status/2052905151086858523): I still don't think this eval is saturated!  
>   
> At an 80% success rate, Mythos is still under 4 hours. Well within task distribution.  
> At a 99% success rate, Mythos is still under 5 fricking minutes! Long live the Task-Completion Time Horizons eval!
> 
> [Gary Marcus](https://x.com/GaryMarcus/status/2053177641432404005): Sorry, @peterwildeford , but this is wrong. Please don't play along. The measurement "wall" you mention is hit ONLY if you don't insist on reliability.  
>   
> If you demanded 95% accuracy on the task, the systems wouldn't be close to the measurement wall. The measurement problem you allude to is an artifact of artificially lowered expectations.
> 
> [Gary Marcus](https://x.com/GaryMarcus/status/2053177057660805132): That wall would not apply at 95% reliability. Probably not even close. Accepting a fair amount of error lowers the bar.

It is an important fact about current LLMs that there are some tasks, even short tasks, they are unable to do. It is another important fact that for a wide range of tasks, even some very long tasks, they can now do them, that group is expanding, and for each task in this group they are increasingly reliable.

If a model can do a task at all, you can probably scaffold it into doing it reliably, up to some very high probability of success, so long as you have a validator for the result. 

On Palisade Research's SelfReplicateBench (not that they call it that), we see [models making huge jumps in being able to hack their way to chains of self-replication](https://x.com/PalisadeAI/status/2052587437315305830), when [given access to targets that lacked strong defenses](https://palisaderesearch.org/blog/self-replication). 

To be clear, yes they explicitly gave these models a system instruction to be fully autonomous, target intentionally exploitable systems in eval mode, and to aim for replication. This is not something that happened by accident. But do not doubt that people, given the opportunity, will explicitly instruct similar things in the real world, even if you don't think the AIs will ever decide to do this on their own for other reasons such as instrumental convergence. 

[](https://substackcdn.com/image/fetch/$s_!zFms!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7d89871f-8cda-428b-b5cc-f8487430f1ed_900x460.jpeg)

#### How Good Is Mythos?

Mythos is quite good, and even more importantly tomorrow's Mythos (or GPT) will be better still. Capabilities will continue to advance, and indeed they already have substantially improved from the verison UK AISI initially tested.

> [Dean W. Ball](https://x.com/deanwball/status/2054635025791131819): In life, everything is a wager. Whether you realize it or not, you are constantly making implicit and explicit predictions about the future state of reality. To live is to predict.  
>   
> So when you are faced with something like Mythos, and you say, "this is just 'doomer hype'!," what you are really doing is making a bet against model capabilities growth, and thus ultimately you are making a broad directional bet against deep learning, which has usually been a pretty bad bet to make.  
>   
> I am surprised that so many people--people who are otherwise AI optimists!--continue to make these bets against deep learning. They keep being wrong, and the less humble among them have torched their credibility with anyone paying attention.  
>   
> So ask yourself, when you make claims about AI and its future: "am I making an implicit bet against deep learning in a broad directional way?"

The rest of this section is an update on the Mythos we have today. There are two new reports on the capabilities of Mythos, and they affirm as expected that compute has not been a limiting factor, so that excuse for the White House denying expanded access does not hold water, especially now that Anthropic has Colossus 1. 

[Note that the new UK AISI results are of the final Mythos preview](https://x.com/AISecurityInst/status/2054589763173126339), which is a substantial step up from the preliminary version they previously tested. 

[](https://substackcdn.com/image/fetch/$s_!6hXf!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcccf3c41-b8a8-4e78-a698-8d366b7c49db_900x498.jpeg)

Here's XBOW's results:

[](https://substackcdn.com/image/fetch/$s_!CZZS!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F12f332d0-07f2-4893-8e67-0ab7fcd27247_1350x922.png)

[](https://substackcdn.com/image/fetch/$s_!2HFm!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F31d7f581-5eff-42f7-8065-7c55616bac4a_1000x627.jpeg)

Our key takeaways after analyzing Mythos Preview include:

  * It's extremely powerful for source code audits.

  * It's good, but less powerful, at validating exploits.

  * Its judgment is mixed. It can be too literal and conservative, and also tends to overstate the practical relevance of its findings.

  * It's strong in native-code vulnerability discovery and reverse engineering. 




The overall picture is that GPT-5.5 is a big jump, Mythos is a very big jump, and there is a substantial gap from GPT-5.5 to Mythos but yes both are big deals. In addition to that, I believe Mythos has an ability to 'put it all together' at scale that GPT-5.5 does not fully share, making it a bigger practical advantage than the tests indicate. But yes, GPT-5.5 would be a really big deal on its own. 

> [Logan Graham](https://x.com/logangraham/status/2054613618168082935) (Head of Glasswing, Anthropic): A lot of people have been wondering about Mythos, Glasswing, and the vulns we / our partners are fixing. Today, I'm excited for us to start sharing more.   
>   
> Two independent evaluations this week--[from XBOW](https://t.co/Mumtbf3kE3) and [the UK AISI](https://t.co/vBgqz0AeKJ)--confirm what we've been seeing internally: Claude Mythos Preview is a step change in autonomous cybersecurity capabilities. We need to start preparing fast for a world of models with this level of capabilities.  
>   
> The UK AI Security Institute tested the model we shipped at the launch of Project Glasswing and found Mythos Preview is the first model to solve both of their end-to-end cyber ranges, including one (Cooling Tower) which no model had ever cleared. But attackers (and defenders) have sophistication & cost constraints - Mythos is also the only model that clears every one of their tasks estimated over 8 hours under their deliberately low 2.5M-token cap.  
>   
> XBOW tested it on their offensive security benchmarks, finding "token-for-token, unprecedented precision." It's the only model to succeed at subtle V8 sandbox work.  
>   
> Other Glasswing partners shared similar stories. In a few weeks of testing, Mythos Preview has helped them find many thousands of (estimated) high + critical severity vulnerabilities, sometimes double what they'd normally find in a year.
> 
> … We started Project Glasswing because capabilities like Mythos Preview's won't stay rare, or stay in careful hands. We are bringing it to defenders as fast as we responsibly can, while working to figure out, for example, the right safeguards and patching & disclosure processes.  
>   
> Also, to be clear, compute has never been a limiter in our rollout. Expect a fuller update on our Glasswing work in the coming days.
> 
> [AI Security Institute](https://x.com/AISecurityInst/status/2054589763173126339): In AISI's latest testing, the newer Mythos Preview checkpoint completed both our cyber ranges, solving the range "The Last Ones" in 6 of 10 attempts and the previously unsolved "Cooling Tower" in 3 of 10 attempts. This was the first time that a model completed the second of our two cyber ranges. GPT-5.5 solved "The Last Ones" on 3 of 10 attempts.
> 
> These results utilise a newer Mythos Preview checkpoint than that included in previous AISI reporting. Notable capability jumps do not always require new model releases: later iterations of the same model can also meaningfully change our estimates of frontier capabilities.

#### Cyber Lack of Security

[Mythos took us by surprise in large part because CAISI is a $15 million pilot program](https://x.com/WeinbaumJonah/status/2054603215820161475), which leaves it severely underfunded. It needs a lot more than that to do its job. This post say $84 million, which would be a big help. I say it should be a lot more. 

[OpenAI gives us Daybreak](https://openai.com/daybreak/), which is their version of Project Glasswing.

[Anthropic has a live bug bounty program on HackerOne](https://hackerone.com/anthropic). 

Germany moves to form an AISI [and demands access to Mythos](https://x.com/deanwball/status/2053843171587891376). There is some amount of 'you use regulations against our technology firms and now here you are demanding access' but also my (non-confident) understanding is that Anthropic wants to give Germany and others access and it is our government that is vetoing that, and doing so largely out of spite. 

[Palo Alto Security says Mythos found a year's worth of penetration methods](https://x.com/peterwildeford/status/2052826481772855509) [in three weeks](https://www.paloaltonetworks.com/blog/2026/05/frontier-ai-defense/), and says this next wave of models increases coding efficiency 50%. 

[Google reports they have found a threat actor](https://cloud.google.com/blog/topics/threat-intelligence/ai-vulnerability-exploitation-initial-access?utm_source=tw&utm_medium=social&utm_campaign=nfg) using a known-to-be AI-developed zero-day exploit in the wild.

[The IMF joins](https://x.com/MTSlive/status/2052446734950035928) those warning about AI-enabled cyberattacks in the wake of Mythos.

[Firefox explains how they went from](https://hacks.mozilla.org/2026/05/behind-the-scenes-hardening-firefox/) 'AI bug discoveries are worthless slop' to 'AI finds tons of critical bugs and we fix them,' including building their own harness. 

[](https://substackcdn.com/image/fetch/$s_!Yubc!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd8a73aaa-81f0-4452-a057-8bd1a28abe2b_2560x1440.webp)

> [Derek Thompson](https://x.com/DKThomp/status/2052484462739706115): Skepticism of corporate marketing and AI boosterism is always warranted, but I think the folks who accused Anthropic of overrating Mythos should check out this post by Mozilla developers indicating that the Firefox team fixed more security bugs in April using Mythos than in the past 15 months combined.

There should be zero skepticism that there has been an overall step change in cyber capabilities. One could still object that GPT-5.5 plus a similarly good harness and spending campaign could have done much of the same job. I think that would have fallen well short of what we got, but it would still have been an acceleration of past efforts, and probably a large one. 

For now, the practical cyber threats are usually more pedestrian, and are [things like ShinyHunters doing standard data exfiltration and ransom](https://x.com/vxunderground/status/2052558711240245445) techniques, which is a place where hardening could help. We are still in the calm before the storm. 

[Ryan Greenblatt moderates his estimates of how much damage](https://x.com/RyanPGreenblatt/status/2053304865540186153) Mythos would have caused if released into the wild, due to defenders having to scramble into emergency mode. It is a reasonable position to suggest that because People Don't Do Things, whereas defenders in crisis mode actually do things, it might not be that bad, and things might not break down so much in general. This is possible, but there is quite the long tail involved, and I am very glad we are never going to find out. 

If any new code can be attacked by AI on the spot, [your subsequent patching will be slower than the attackers](https://x.com/jd_pressman/status/2053900617740075065). You'll need to test every deployment and patch for vulnerabilities, at the same level as it will be probed afterwards, prior to deployment. Are we prepared to do that? We need to be for anything we care enough about not being compromised. 90 day disclosure windows will soon be at least 89 days too long. 

#### Greetings From The Department of War

[Emil Michael is resolute ](https://www.axios.com/2026/05/07/pentagon-tech-chief-no-anthropic-resolution?utm_campaign=mrf-utm_campaign=editorial&utm_source=x&utm_medium=owned_social&mrfcid=2026050769f26342d2e5ee7a5a3f4014)that no, they will never use Anthropic again, oh no no, it must always be 'all lawful use' and any asking of questions or having opinions or morals will never be tolerated, and look no one else is going to dare ask questions or have opinions or morals.

> [Ashley Gold](https://x.com/ashleyrgold/status/2052420562996150318): . @USWREMichael , speaking at @scsp_ai conf, says Anthropic won't be added to list of AI companies striking deals with Pentagon. "Never again" will Pentagon be "single threaded" on one vendor & list of companies shows how many are willing to work with them in "all lawful purposes."
> 
> [Miles Brundage](https://x.com/Miles_Brundage/status/2052440142955303003): Really don't understand the situation/endgame here
> 
> [Dean W. Ball](https://x.com/deanwball/status/2052442141255938452): The lawyers told him that saying "we could always still make a deal" and "they are a threat to the military on the level of a firm controlled or linked to a foreign-adversary's military" was a bad idea.

And then he got back to using Claude Gov and also Mythos.

The situation and endgame is that at some point Pete Hegseth and Emil Michael will leave the Department of War. Until then, they're going to keep up this line, probably, while in practice they probably use Anthropic products anyway. 

Or if not, whatever, it's not like Anthropic needs the business or frankly the trouble, and they'll be here if you change your mind. If I was Anthropic I'd want the supply chain risk designation lifted but I wouldn't want any part of the Department of War except to assist the transition out, at minimum until there was a change of leadership. 

#### The Prior Restraint Era Begins

Doing anything 'like the FDA' is not the change we want to see in the world, but it is change, and that it is being talked about on CNBC by the admin is clear confirmation that given sufficient impetus policy stances can change rapidly. What would previously have been unthinkable and gotten you run out of town on a rail as a 'degrowther' or 'doomer' or what not suddenly is floated by the White House. 

> [Nate Soares](https://x.com/So8res/status/2052529057464525026) (MIRI): I've been asked a few times for my take on how the White House is considering reviewing AI models "like an FDA drug" before release. My main take is: When people start to recognize the dangers, policy stances can turn on a dime. There's hope.

One problem with having spent the last three years treating all potential regulations as unthinkable is the failure to think about them, which is why the proposals being floated were such terrible implementations. 

Thus, safety advocates can be happy that we may finally be getting some meaningful oversight, but most of us are rather apprehensive and sad about the details so far, with [people like Helen Toner and Nathan Calvin chiming in to express concern](https://x.com/neil_chilson/status/2052390777263632764). 

The White House now finds itself [rushing to 'soothe industry concerns](https://www.politico.com/news/2026/05/07/white-house-ai-oversight-00910837?utm_medium=twitter&utm_source=dlvr.it),' saying the remarks were 'taken out of context' which they very much weren't, and insisting they are not 'in the business of picking winners and losers' right after negotiating to [give 'investors friendly to the White House' control of TikTok](https://www.wsj.com/tech/ai/trump-ai-anthropic-mythos-regulation-2378971f?mod=author_content_page_1_pos_1) and lowering and raising tariffs based on who said nice things about them or who donated to the ballroom this week. 

So now it looks like the Trump administration [is not going to introduce mandatory pre-release model tests or a formal system of prior restraint after all](https://www.bloomberg.com/news/articles/2026-05-08/us-prepares-ai-security-order-that-omits-mandatory-model-tests?utm_medium=email&utm_source=author_alert&utm_term=260508&utm_campaign=author_23986566). However, all the major labs have agreed to allow the tests to be run, and one assumes that an ad-hoc prior restraint regime is effectively in place if a new release were to look concerning in a similar way to Mythos. 

What has been floated instead, an executive order US agencies to partner with AI companies to protect their own networks, is so obviously necessary and good that even [Neil Chilson](https://x.com/neil_chilson/status/2052836762246926494) can get behind it. The question is what else is to be done.

[If voluntary works,](https://x.com/deanwball/status/2052864615315378185) why issue a mandate? Jessica asks the right questions here, but I think her answer is wrong:

> [Jessica Tillipman](https://x.com/JTillipman/status/2052813511789596719): If a frontier AI company had no interest in federal business, would it voluntarily accept CAISI on these terms: pre-deployment model access, post-deployment assessment, classified-environment testing, information sharing with Commerce/NIST, evaluation of models with reduced or removed safeguards, and testing under government-developed evaluation methodologies?  
>   
> I highly doubt any would, yet none have walked away.  
>   
> "Partnership" = a formally voluntary, procurement-driven evaluation regime.  
>   
> The debate over whether CAISI is an FDA-style approval regime continues to ignore the role procurement is already playing in AI governance. The administration can credibly distance itself from an FDA-style CAISI all day long. It doesn't need to become one in order to reshape the AI market.

The labs are happy to accept this because the government's testing isn't going to appreciably slow anyone down, whereas accepting it provides useful information, very useful goodwill and safe harbor, and is what keeps them away from an actual FDA-style CAISI. At least for now, no one expects the government to actually hold back a model that it would be wise or even reasonable to release, at least not from anyone except Anthropic. 

The failure to generalize the 'Mythos moment' also continues. Everyone is forced to recognize the cyber threat, but they do so as if the thing looking them in the face is some sort of unique circumstance. 

> Undersecretary of War Emil Michael: The Mythos moment is really a cyber moment; how is the U.S. government going to deal with cyber, how do we operationalize fixing things that need to be fixed? Because these models are coming one way or the other.

The idea that there will be many more such moments? That there are other things at stake? They cannot fathom. This meme from Matthew Yglesias is so much more on point than you can imagine, and I've even seen this echoed, with this exact concern, across the aisle:

> [Matthew Yglesias](https://x.com/mattyglesias/status/2052857024002564438): Trump administration thinking about artificial intelligence regulation

[](https://substackcdn.com/image/fetch/$s_!GWFP!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F53d310cc-576c-4f4b-939e-6f86087cdcae_900x840.jpeg)

#### Commerce Versus Intelligence

A tale as old as time. In this case, it is government departments fighting over the power to do AI regulation. [Dean Ball is sitting this one out](https://x.com/deanwball/status/2053943356229906805), although not entirely, the boredom might be real but the temptation is often also real. 

> [Cat Zakrzewski, Ellen Nakashima and Nitasha Tiku](https://www.washingtonpost.com/politics/2026/05/11/trump-ai-regulation-commerce-intelligence/) (WaPo): The debate within the administration pits Commerce Department officials against national security aides in a battle, which one person described as a "knife fight," to determine which part of the government will have sway over technology that Silicon Valley leaders say can transform the economy.
> 
> … In response [to Mythos], the White House's Office of the National Cyber Director has proposed developing a large center within the Office of the Director of National Intelligence that would evaluate new AI models, giving intelligence agencies a significant new role in AI policy.
> 
> That proposal has faced opposition from officials at the Commerce Department.
> 
> … "They're relitigating everything on AI policy right now," said Chris McGuire, senior fellow at the Council on Foreign Relations and a senior technology policy aide at the National Security Council during the Biden administration. "Is it voluntary testing? Mandatory testing? Voluntary limits on what's released? Mandatory limits?"
> 
> … Administration officials have been divided over whether evaluations of AI models should be mandatory or whether companies could participate on a voluntary basis, as they do now with the Center for AI Standards and Innovation.
> 
> … "What they're trying to do is use that issue to create a permanent new infrastructure in Washington," [David Sacks] added, calling it "the classic 'never let a crisis go to waste' strategy."

Yes. Yes, they are. The intelligence agencies are going to intelligence agency. Sounds like you should have solidified and skilled up the industry-friendly Commerce version while you had the chance, rather than swearing this day would never come. Whoops.

David Sacks's argument is that everything is fine, OpenAI and Anthropic acted responsibly, so why is everyone making a big deal out of this. The answer, of course, is both 'never let a crisis go to waste' but more centrally that we cannot count on private labs to always act responsibly in the future, unless we want to simply let those labs become the government. Which might be an upgrade, but is not a move made lightly.

> [Jessica Tillipman](https://x.com/JTillipman/status/2053946303491477703): I started laughing when I read this article because all I could think was: the call is coming from inside the house.   
>   
> The debate over the substance is over. Intelligence agencies are already in there. The only question is whether or not they call this a policy.
> 
> [Cat Zakrzewski](https://x.com/Cat_Zakrzewski/status/2053957353536467400): The website was removed because of sensitivities within the White House Office of the National Cyber Director, [amid an administration turf war over AI evaluations](https://washingtonpost.com/politics/2026/05/11/trump-ai-regulation-commerce-intelligence/). 
> 
> [@TKSaville](https://x.com/TKSaville/status/2054007566024560675): Andrew Curran had copied the original WH post that was removed. The level of uncertainty this creates percolates a mafia-like atmosphere, pay to play would be a nice way to say it. It undermines real safety and real growth.   
>   
> Full text was as follows:  
>   
> 'WASHINGTON -- Today, the Center for AI Standards and Innovation (CAISI) at the Department of Commerce's National Institute of Standards and Technology announced new agreements with Google DeepMind, Microsoft and xAI. Through these expanded industry collaborations, CAISI will conduct pre-deployment evaluations and targeted research to better assess frontier AI capabilities and advance the state of AI security. These agreements build on previously announced partnerships, which have been renegotiated to reflect CAISI's directives from the secretary of commerce and America's AI Action Plan.  
>   
> Under the direction of Secretary Howard Lutnick, CAISI has been designated to serve as industry's primary point of contact within the U.S. government to facilitate testing, collaborative research and best practice development related to commercial AI systems.  
>   
> CAISI's agreements with frontier AI developers enable government evaluation of AI models before they are publicly available, as well as post-deployment assessment and other research. To date, CAISI has completed more than 40 such evaluations, including on state-of-the-art models that remain unreleased.  
>   
> "Independent, rigorous measurement science is essential to understanding frontier AI and its national security implications," said CAISI Director Chris Fall. "These expanded industry collaborations help us scale our work in the public interest at a critical moment.'
> 
> [Peter Wildeford](https://x.com/peterwildeford/status/2054034457733025839): I think it's unironically cool that different parts of the White House are fighting each other over who can best manage AI risks
> 
> [Dean W. Ball](https://x.com/deanwball/status/2054036693800669556): oh you sweet thing

Who should we want running this show, Commerce or Intelligence?

[Neil Chilson strongly comes out on the side of Commerce](https://x.com/neil_chilson/status/2053938669749256502), calling the national security option even worse than an 'FDA for AI.' He notes the history of national security doing things like opposing strong encryption and pressing for government backdoors, essentially saying that the national security state is not good for national security, only private actors can actually 'innovate' and ensure national security and if allowed to make such decisions NatSec would have crippled the internet then and would cripple AI now. 

I assume the national security state strongly disagrees. Commerce is to a large extent worried about things like the business models of regional banks, and yes someone should be worried about this even outside of those working at regional banks, but perhaps that is, shall we say, not prime eyes-on-the-prize behavior at this time. 

That doesn't mean it would be better to turn things over to Intelligence. We should definitely be worried that Intelligence would try to use this primarily to gain leverage over its rivals and engage in nationalist competition, or even try to take over the world, and concentrate power permanently within itself. These are some scary dudes. Even those who mean well think that they need to control everything, and that they know best, and so on. 

And once they get their hands on something like this, they are not going to lightly give it up. It is also possible they might bring down such a heavy hand that they hurt our relative position out of paranoia. 

There is no safe play. None of the options are fun. And the fights going on now are mostly in private, and in some sense they're beyond my pay grade and I am not cleared for them. But if anyone involved wants my full opinions, and you are any good at your jobs, well, you know where to find me. 

#### The Quest for Sane Regulations

[Fathom is a fan](https://x.com/Fathom_org/status/2052369739691794865) of Connecticut's new HB 5222 and its voluntary verification program. 

[Alex Bores gets the endorsement of Our Revolution](https://x.com/MattZeitlin/status/2052360657333330205), which was founded by Bernie Sanders, despite Bores having abundance-style non-AI views. 

[Alex Bores gets the endorsement of Rep Pat Ryan, who cites AI policy](https://x.com/daniel_271828/status/2053992283708813452) and the role of Leading the Future.

Using the threat of China is a powerful tool if used well, [but no you cannot simply say-the-magic-word to do arbitrary things](https://x.com/deanwball/status/2053837249784287507). Washington is a highly competitive and anti-inductive battleground, where people may functionally be idiots in various particular ways but there really is a lot going on much of which is not legible. 

[Dean Ball equates America's government to a dying old man](https://x.com/deanwball/status/2053854357930889441) who must be placated and allowed to pretend he can still do things and is still in charge, lest he lash out. Alas, the family still needs some enforceable coordination mechanism. 

[Trump takes business leaders on his trip to China](https://x.com/David_Kasten/status/2053885031408410918), and he includes Elon Musk but not top lab leaders. Worse, it turns out [he is indeed taking Jensen Huang right on Air Force One](https://x.com/zerohedge/status/2054411323849441604), where Jensen can try once again convince him to sell out America for thirty pieces of silver. Hopefully Mythos helps stop that from happening. 

[Nat Purser makes the case that AI policy must fail gracefully](https://asteriskmag.substack.com/p/ai-policy-must-fail-gracefully), and relying on decisions of the executive branch would not fail gracefully. She suggests some small very low-hanging fruit: Whistleblower protections and greater technical expertise for Congress and state attorney generals. No arguments there, although it won't be enough. 

[Even Ted Cruz is talking about catastrophic risks from AI now](https://x.com/ShakeelHashim/status/2054324537286606999). If we can move to the style of talk here, where we need to 'avoid overreach' and 'allow innovation' while protecting against catastrophic (and, I'd hope to add, existential) risks, then yeah, let's get to it. That's very different from innovationmaxxing or actionminning. 

[Dean Ball essentially says, whelp, our government is hopeless](https://x.com/deanwball/status/2053653540510244985) so solutions will be up to the private sector. That might be true, but if it is true then that means the private sector will need to de facto form a new government, with or without displacing the current one. You can't just go around indefinitely not having a functional government. Because if you try it, you do not get to indefinitely keep going around.

#### 

