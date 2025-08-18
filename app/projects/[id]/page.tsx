import ProjectDetail from './ProjectDetail';

export async function generateStaticParams() {
  return [
    { id: 'memgres' },
    { id: 'gherkinforge' },
  ];
}

export default async function ProjectPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const resolvedParams = await params;
  return <ProjectDetail id={resolvedParams.id} />;
}