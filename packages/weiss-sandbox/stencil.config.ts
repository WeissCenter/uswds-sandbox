import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'weiss-sandbox',
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: 'weiss-sandbox',
      excludeComponents: ['sandbox-main-content', 'design-token-management', 'code-snippet'],
      directivesProxyFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/index.ts'
    }),
    {
      type: 'dist',
          esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    }
  ],
};
