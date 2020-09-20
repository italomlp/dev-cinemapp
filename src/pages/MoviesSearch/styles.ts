import styled from 'styled-components/native';
import { Input as AppInput, Button as AppButton } from '../../components';
import { colors } from '../../styles';

export const SearchContainer = styled.View`
  flex-direction: row;
  padding: 0 8px;
  margin-bottom: 8px;
`;

export const Input = styled(AppInput)`
  margin-right: 8px;
  flex: 1;
`;

export const Button = styled(AppButton)``;

export const Loading = styled.ActivityIndicator.attrs(() => ({
  color: colors.primary,
  size: 24,
}))``;

export const ErrorText = styled.Text`
  color: ${colors.error};
  font-size: 14px;
  font-style: italic;
  text-align: center;
`;
