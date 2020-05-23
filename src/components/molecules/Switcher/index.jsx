import React from 'react';
import Switch from 'react-switch';
import { useThemes } from 'components/contexts/ThemesProvider';
import { Container, Text } from './style';

export default function Switcher() {
  const { themeHook: { theme, toogleTheme } } = useThemes();

  return (
    <Container>
      <Text>
        Modo Dark
      </Text>
      <Switch
        onChange={toogleTheme}
        checked={theme.title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor="#4E92FC"
      />
    </Container>
  );
}
