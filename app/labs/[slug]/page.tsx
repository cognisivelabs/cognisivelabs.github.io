import React from 'react';
import { notFound } from 'next/navigation';
import LabsDetailClient from '../../components/LabsDetailClient';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

