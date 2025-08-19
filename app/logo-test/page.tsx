'use client';

import Logo from '../components/Logo';

const abstractCVariants = [
  { key: 'abstract-c', name: 'Original Abstract C', description: 'Modern, clean lettermark with indigo-teal gradient' },
  { key: 'c-geometric', name: 'Geometric C', description: 'Angular, architectural with purple-cyan-green gradient' },
  { key: 'c-flowing', name: 'Flowing C', description: 'Organic, smooth curves with warm orange-red-purple gradient' },
  { key: 'c-layered', name: 'Layered C', description: 'Depth and dimension with blue gradient layers' },
  { key: 'c-neon', name: 'Neon C', description: 'Glowing effect with pink-purple-cyan cyberpunk vibes' },
  { key: 'c-organic', name: 'Organic C', description: 'Nature-inspired with textured green radial gradient' },
  { key: 'c-tech', name: 'Tech C', description: 'Circuit-inspired with blue tech gradient' },
  { key: 'c-minimal', name: 'Minimal C', description: 'Ultra-clean with subtle gray gradient' },
] as const;

const otherVariants = [
  { key: 'brain-circuit', name: 'Brain + Circuit', description: 'Cognitive thinking meets technology' },
  { key: 'connected-nodes', name: 'Connected Nodes', description: 'Network connections and collaboration' },
  { key: 'hexagon-flask', name: 'Hexagon Flask', description: 'Scientific precision with lab research' },
  { key: 'lightbulb-gear', name: 'Lightbulb + Gear', description: 'Ideas meeting execution' },
  { key: 'molecule', name: 'Molecular Structure', description: 'Scientific innovation and connections' },
  { key: 'beaker', name: 'Lab Beaker', description: 'Clean laboratory equipment aesthetic' },
] as const;

export default function LogoTestPage() {
  return (
    <div className="min-h-screen py-24 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">CognisiveLabs Logo Options</h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Abstract "C" designs with creative color schemes and styles
          </p>
        </div>

        {/* Abstract C Variations Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Abstract "C" Variations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {abstractCVariants.map((variant) => (
              <div key={variant.key} className="p-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-lg">
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-700">
                      <Logo variant={variant.key as any} size={64} />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{variant.name}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    {variant.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 text-sm">Different Sizes:</h4>
                    <div className="flex items-center gap-4 justify-center">
                      <Logo variant={variant.key as any} size={20} />
                      <Logo variant={variant.key as any} size={28} />
                      <Logo variant={variant.key as any} size={36} />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 text-sm">In Navigation:</h4>
                    <div className="p-3 bg-neutral-100 dark:bg-neutral-700 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Logo variant={variant.key as any} size={24} />
                        <span className="font-semibold text-sm">CognisiveLabs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Design Concepts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Alternative Design Concepts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherVariants.map((variant) => (
              <div key={variant.key} className="p-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-lg">
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-700">
                      <Logo variant={variant.key as any} size={64} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{variant.name}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    {variant.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Different Sizes:</h4>
                    <div className="flex items-center gap-4 justify-center">
                      <Logo variant={variant.key as any} size={24} />
                      <Logo variant={variant.key as any} size={32} />
                      <Logo variant={variant.key as any} size={48} />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">In Navigation:</h4>
                    <div className="p-3 bg-neutral-100 dark:bg-neutral-700 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Logo variant={variant.key as any} size={32} />
                        <span className="font-semibold">CognisiveLabs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 p-6 bg-white dark:bg-neutral-800 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4">Background Compatibility Test</h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Each logo design uses carefully chosen gradients that work across different backgrounds.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="p-4 bg-white border-2 border-neutral-200 rounded-xl mb-2">
                <Logo variant="c-geometric" size={48} />
              </div>
              <span className="text-sm text-neutral-600">Light Background</span>
            </div>
            <div className="text-center">
              <div className="p-4 bg-neutral-900 border-2 border-neutral-700 rounded-xl mb-2">
                <Logo variant="c-flowing" size={48} />
              </div>
              <span className="text-sm text-neutral-600">Dark Background</span>
            </div>
            <div className="text-center">
              <div className="p-4 bg-indigo-50 border-2 border-indigo-200 rounded-xl mb-2">
                <Logo variant="c-neon" size={48} />
              </div>
              <span className="text-sm text-neutral-600">Brand Background</span>
            </div>
            <div className="text-center">
              <div className="p-4 bg-neutral-200 border-2 border-neutral-300 rounded-xl mb-2">
                <Logo variant="c-layered" size={48} />
              </div>
              <span className="text-sm text-neutral-600">Neutral Background</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-neutral-600 dark:text-neutral-400">
            Once you choose a favorite, we&apos;ll update the navigation and favicon!
          </p>
        </div>
      </div>
    </div>
  );
}