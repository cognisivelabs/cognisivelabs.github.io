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

