import React from 'react';
import { notFound } from 'next/navigation';
import { InlineMath, BlockMath } from 'react-katex';
import LabsDetailClient from '../../components/LabsDetailClient';

const projectData: Record<string, any> = {
    'semantic-canvas': {
        title: 'Semantic Canvas',
        subtitle: 'AI-Powered Vector Recognition',
        overview: 'Semantic Canvas is an experimental research project integrated with ZenDraw. It explores the intersection of free-form sketching and structured data modeling.',
        details: [
            {
                title: 'Intelligent Recognition',
                content: 'Using lightweight neural networks, we transform hand-drawn shapes into live vector objects—funnels, flowcharts, and architecture diagrams—while preserving the original artistic intent.'
            },
            {
                title: 'Data-Mapped Objects',
                content: 'Every recognized shape becomes a data-aware node. Connect a rough sketch of a "Database" to a "Server", and the canvas generates the underlying schema and API endpoints.'
            },
            {
                title: 'The Goal',
                content: 'To bridge the gap between creative brainstorming and production-ready architecture. From whiteboard to code in a single stroke.'
            }
        ]
    },
    'flow-mode': {
        title: 'FlowMode',
        subtitle: 'Biometric Writing Environments',
        overview: 'FlowMode is a specialized research lab for VerveNote, designed to maximize human focus through adaptive computational environments.',
        details: [
            {
                title: 'Adaptive Focus',
                content: 'An interface that responds to your typing speed and rhythm. When you enter a state of high velocity, the UI recedes completely, leaving nothing but the current sentence.'
            },
            {
                title: 'Digital Silence',
                content: 'By leveraging local LLMs, FlowMode can summarize notifications or background noise in real-time, only alerting you if an event matches a high-priority "focus profile."'
            },
            {
                title: 'Psychological Anchoring',
                content: 'Experimental use of subtle visual cues—soft gradients and temporal shifts—to help anchor the user in a deep work state.'
            }
        ]
    },
    'conversational-ratio': {
        title: 'The Conversational Ratio',
        subtitle: 'Human-Centric Data Science',
        overview: 'A deep-dive research project into the psychology of data collection, powering the core logic behind QuickForm.',
        details: [
            {
                title: 'Trust Metrics',
                content: 'We measure completion rates against variables like "conversational transparency," exploring how quickly users abandon a form when asked for sensitive data without context.'
            },
            {
                title: 'Cognitive Load Analysis',
                content: 'Our research shows that "one-question-at-a-time" interfaces reduce cognitive load by up to 40%, leading to higher quality responses and lower frustration.'
            },
            {
                title: 'The Conversational Benchmark',
                content: 'Establishing a new industry standard for what constitutes a "human" digital form experience, moving away from robotic input fields.'
            }
        ]
    },
    'domestic-game-theory': {
        isPaper: true,
        title: 'Domestic Game Theory Engine',
        subtitle: 'Commercial Implementation of Fair-Allocation Algorithms',
        overview: 'This engineering blueprint details the architecture for the @cognisive/social-equilibrium engine, the computational core powering the Whoosturn platform. Cognisive is not conducting novel mathematical research; rather, we are translating established, peer-reviewed game theory metrics into a highly scalable commercial product. By implementing these industry-approved algorithms, we dynamically solve the "Housework War" at scale.',
        details: [
            {
                title: 'The Challenge of Indivisible Chores',
                content: (
                    <div className="space-y-4">
                        <p>In classical economics, "goods" hold positive utility and can often be divided. Household chores, however, are <strong>"indivisible chores with negative utility."</strong> They cannot be perfectly split without significant coordination overhead, and different household members hold different disutilities (levels of dread) for the same task.</p>
                        <p>Furthermore, as explored in <em>"Housework War: A Game Theory Exploration"</em> (Chen, 2022), domestic labor is heavily influenced by social norms and behavioral game theory, where players may default to specific roles to avoid conflict. Our engine seeks to break these inefficient equilibria using rigorous mathematical allocation.</p>
                    </div>
                )
            },
            {
                title: 'What We Are Achieving for Whoosturn',
                content: (
                    <div className="space-y-6">
                        <p>By implementing these specific academic papers, we are solving the fundamental reasons why traditional “shared to-do lists” fail, upgrading Whoosturn into a self-balancing ecosystem:</p>
                        <ul className="list-disc list-inside space-y-4 ml-2 text-sm text-neutral-600 dark:text-neutral-400">
                            <li><strong>Eliminating the "Not Fair" Argument (Solving Core Envy):</strong> Standard apps breed resentment if assignments feel unequal. By utilizing EFX math, we achieve a state where the household agrees the division is objectively fair, removing the cognitive load of arguing over who does what.</li>
                            <li><strong>Handling the "I Did the Hardest Thing!" Phenomenon:</strong> Chores are indivisible. When the math proves a fair split is physically impossible on a given day, the engine automatically issues a "Subsidy" (Whoosturn points) to balance the scales, turning friction into a gamified reward.</li>
                            <li><strong>Adapting to Real Humans, Not Robots:</strong> Math assumes everyone hates scrubbing toilets equally. Our behavioral layer learns <em>how much</em> a specific user dreads a task, adjusting allocations so the person who minds a chore the least does it the most, maximizing overall household peace.</li>
                            <li><strong>Preventing the "Bad Luck" Streak:</strong> A random algorithm might give someone the worst chore three weeks in a row. Our engine has a memory, guaranteeing cumulative temporal fairness—if you had a heavy load this week, the math owes you a lighter load next week.</li>
                        </ul>
                    </div>
                )
            },
            {
                title: 'The Algorithmic Arsenal: How We Do It',
                content: (
                    <div className="space-y-8">
                        <p>Because households vary intimately in size, capacity, and preference, a single algorithm is insufficient. We are implementing a dynamic engine that utilizes the following proven models based on the specific household context:</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl space-y-4">
                                <h4 className="font-serif text-xl border-b border-neutral-200 dark:border-neutral-800 pb-2">1. Strict Fairness (EFX)</h4>
                                <p className="text-sm leading-relaxed"><strong>Basis:</strong> <em>EFX Allocations for Indivisible Chores</em> (Kobayashi et al., 2025).</p>
                                <p className="text-sm leading-relaxed"><strong>What it provides:</strong> Envy-Free up to any item (EFX). We implement this matching-based approach for small, static households. It guarantees that no partner will ever look at another's list of chores and feel they have a worse deal, even if one chore is removed from the equation.</p>
                            </div>

                            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl space-y-4">
                                <h4 className="font-serif text-xl border-b border-neutral-200 dark:border-neutral-800 pb-2">2. Efficient Subsidies (PROP+PO)</h4>
                                <p className="text-sm leading-relaxed"><strong>Basis:</strong> <em>Proportional and Pareto-Optimal Allocation of Chores with Subsidy</em> (Garg et al., 2025).</p>
                                <p className="text-sm leading-relaxed"><strong>What it provides:</strong> When exact fairness is mathematically impossible due to extreme varying chore sizes, we implement Market-Equilibrium Subsidies. This allocates tasks efficiently (Pareto-Optimal) and issues "virtual points" or subsidies to compensate the partner taking on a mathematically unfair load, ensuring Proportionality (PROP).</p>
                            </div>

                            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl space-y-4">
                                <h4 className="font-serif text-xl border-b border-neutral-200 dark:border-neutral-800 pb-2">3. Temporal Fairness (TEF1)</h4>
                                <p className="text-sm leading-relaxed"><strong>Basis:</strong> Temporal Fair Division Theory.</p>
                                <p className="text-sm leading-relaxed"><strong>What it provides:</strong> Chores are repetitive. A localized algorithm might assign the worst chore to Partner A on Monday, and by pure chance, again on Tuesday. We implement TEF1 to guarantee <em>cumulative fairness</em> over weeks and months, automatically adjusting future allocations to account for past burdens.</p>
                            </div>

                            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl space-y-4">
                                <h4 className="font-serif text-xl border-b border-neutral-200 dark:border-neutral-800 pb-2">4. Online Stochastic Allocation</h4>
                                <p className="text-sm leading-relaxed"><strong>Basis:</strong> Online Maximin Share (MMS) Allocation.</p>
                                <p className="text-sm leading-relaxed"><strong>What it provides:</strong> Real-world homes are chaotic. When an unexpected chore arises (e.g., a spill, a broken appliance), our engine implements an "on-the-fly" algorithm to assign the task fairly without needing to recalculate the entire week's schedule.</p>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                title: 'Implementation Architecture & Formulas',
                content: (
                    <div className="space-y-10">
                        <p className="leading-relaxed">To translate these academic concepts into a functional TypeScript engine, we implement the following core mathematical loops:</p>

                        <div className="space-y-4">
                            <h4 className="font-serif text-lg">1. Computing the EFX Threshold</h4>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">For small households, we attempt a pure EFX (Envy-Free up to any chore) allocation. We define <InlineMath math="d_i(c)" /> as the disutility (dread score) agent <InlineMath math="i" /> holds for chore <InlineMath math="c" />. An allocation partition <InlineMath math="A = (A_1, \dots, A_n)" /> is EFX if for every pair of agents <InlineMath math="i, j" /> and every chore <InlineMath math="c \in A_j" />:</p>
                            <div className="py-4 px-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg font-mono text-sm overflow-x-auto text-center border border-neutral-100 dark:border-neutral-800">
                                <BlockMath math="\sum_{x \in A_i} d_i(x) \leq \left( \sum_{y \in A_j} d_i(y) \right) - d_i(c)" />
                            </div>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">Our engine uses a generalized matching algorithm to find this state. If the condition above fails for all possible partitions, the engine degrades gracefully to the Subsidy model.</p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-serif text-lg">2. Calculating Market-Equilibrium Subsidies</h4>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">When EFX fails, we achieve Proportionality (PROP) via virtual subsidies (points). Let <InlineMath math="p_i" /> be the subsidy paid to agent <InlineMath math="i" />. The combined disutility with subsidy becomes <InlineMath math="D_i(A_i, p_i) = \sum_{c\in A_i} d_i(c) - p_i" />. We compute the fractional Pareto-Optimal allocation that satisfies:</p>
                            <div className="py-4 px-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg font-mono text-sm overflow-x-auto text-center border border-neutral-100 dark:border-neutral-800">
                                <BlockMath math="\sum_{c\in A_i} d_i(c) - p_i \leq \frac{1}{n} \sum_{c \in C} d_i(c)" />
                            </div>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">The total sum of subsidies <InlineMath math="\sum p_i" /> is minimized through a linear programming relaxation.</p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-serif text-lg">3. TEF1 Cumulative Fairness Tracking</h4>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">To handle repeating chores over multiple weeks (rounds <InlineMath math="t = 1, \dots, T" />), we track historical burden. We define cumulative disutility up to round <InlineMath math="T" />. The allocation is TEF1 if, at the end of round <InlineMath math="T" />, the envy is bounded by a single chore from *any* previous round:</p>
                            <div className="py-4 px-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg font-mono text-sm overflow-x-auto text-center border border-neutral-100 dark:border-neutral-800">
                                <BlockMath math="\sum_{t=1}^T d_i(A_i^t) \leq \sum_{t=1}^T d_i(A_j^t) - \min_{t \in [1,T], c \in A_j^t} d_i(c)" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-serif text-lg">4. Online MMS Stochastic Assignment</h4>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">For unexpected, immediate chores, we calculate the Maximin Share (MMS) threshold. This represents the worst-case scenario an agent would accept if they cut the chores into <InlineMath math="n" /> bundles and chose last. When a new chore arrives, we assign it to the agent whose current load <InlineMath math="L_i" /> plus the new chore remains furthest below their MMS threshold:</p>
                            <div className="py-4 px-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg font-mono text-sm overflow-x-auto text-center border border-neutral-100 dark:border-neutral-800">
                                <BlockMath math="\text{MMS}_i = \min_{A \in \Pi(C)} \max_{j \in [n]} d_i(A_j)" />
                            </div>
                        </div>
                    </div>
                )
            },
            {
                title: 'Scalability & Cloud Architecture',
                content: (
                    <div className="space-y-6">
                        <p>Executing polynomial-time matching and Maximin Share calculations across thousands of concurrent households requires a robust cloud infrastructure. To bridge the gap between academic theory and commercial software, our engineering team utilizes the following stack:</p>
                        <ul className="list-disc list-inside space-y-4 ml-2 text-sm text-neutral-600 dark:text-neutral-400">
                            <li><strong>Asynchronous Calculation Queues:</strong> Heavy matching algorithms run entirely in the background via serverless event queues, ensuring the Whoosturn mobile app remains instantly responsive.</li>
                            <li><strong>Graph-Based Data Modeling:</strong> User capacities and disutility scores are mapped as native bipartite graphs in our database, drastically reducing the query time required to compute the EFX and Pareto-Optimal thresholds.</li>
                            <li><strong>Edge-Cached Assignments:</strong> Once the weekly allocation is mathematically finalized, the resulting schedules are cached at the edge, offering zero-latency loading for end-users across global regions.</li>
                        </ul>
                    </div>
                )
            },
            {
                title: 'From Theory to Production: Powering Whoosturn',
                content: (
                    <div className="space-y-4">
                        <p className="leading-relaxed">
                            The <code className="text-sm bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded">@cognisive/social-equilibrium</code> engine is actively being integrated into the Whoosturn platform. By acting as a mathematically perfect, impartial third party, Whoosturn moves beyond simple task management and into <em>relationship management</em>.
                        </p>
                        <p className="leading-relaxed">
                            It removes the cognitive and emotional load of negotiating fairness, allowing couples to focus on living together rather than keeping score.
                        </p>
                    </div>
                )
            }
        ]
    }
};

export async function generateStaticParams() {
    return Object.keys(projectData).map((slug) => ({
        slug: slug,
    }));
}

export default async function LabsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projectData[slug];

    if (!project) {
        notFound();
    }

    return <LabsDetailClient project={project} />;
}

