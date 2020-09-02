// eslint-disable-next-line import/prefer-default-export
export const _Color = (name: string) => {
  const list = [
    '--primary',
    '--white',
    '--black',
    '--primary-light-1',
    '--primary-light-2',
    '--primary-light-3',
    '--primary-light-4',
    '--primary-light-5',
    '--primary-light-6',
    '--primary-light-7',
    '--primary-light-8',
    '--primary-light-9',
    '--success',
    '--warning',
    '--danger',
    '--info',
    '--success-light',
    '--warning-light',
    '--danger-light',
    '--info-light',
    '--success-lighter',
    '--warning-lighter',
    '--danger-lighter',
    '--info-lighter',
    '--text-primary',
    '--text-regular',
    '--text-secondary',
    '--text-placeholder',
    '--border-color-base',
    '--border-color-light',
    '--border-color-lighter',
    '--border-color-extra-light',
  ];
  const styles = getComputedStyle(document.body);

  const colorValue = styles.getPropertyValue(name) || '';

  return colorValue.trim();
};
