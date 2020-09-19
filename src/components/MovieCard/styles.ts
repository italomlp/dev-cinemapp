import styled from 'styled-components/native';
import { lighten } from 'polished';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '../../styles';

export const Container = styled.View`
  margin: 8px;
  border-color: ${colors.secondary};
  border-width: 1px;
  border-radius: 16px;
  background-color: ${lighten(0.1, colors.black)};
  overflow: hidden;
  flex-direction: row;
  height: 100px;
`;

export const ImageContainer = styled.View`
  width: 100px;
`;

export const Image = styled.Image`
  flex: 1;
  max-width: 100px;
  aspect-ratio: 1;
`;

export const TextContainer = styled.View`
  padding: 4px;
  margin-bottom: 4px;
  margin-left: 8px;
  flex: 2;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${lighten(0.1, colors.primary)};
`;

export const Year = styled.Text`
  font-size: 14px;
  color: ${colors.lightText};
`;

export const FavoriteContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const FavoriteButton = styled.TouchableOpacity``;

export const FavoriteIcon = styled(Icon).attrs(() => ({
  size: 25,
  color: colors.active,
}))``;
