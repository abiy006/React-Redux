import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
  {
    imagex: componentsImg,
    titlex: 'Components',
    descriptionx:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    imagex: jsxImg,
    titlex: 'JSX',
    descriptionx:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    imagex: propsImg,
    titlex: 'Props',
    descriptionx:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    imagex: stateImg,
    titlex: 'State',
    descriptionx:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];