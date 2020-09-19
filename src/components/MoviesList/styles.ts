import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { metrics } from '../../styles';

export const StyledFlatList: new <T>() => FlatList<T> = styled(FlatList).attrs(
  (): Partial<FlatListProps<unknown>> => ({
    contentContainerStyle: {
      flexGrow: 1,
      paddingBottom: metrics.bottomTabBarHeight,
    },
    showsVerticalScrollIndicator: false,
  }),
)`
  margin-bottom: ${metrics.bottomTabBarHeight}px;
` as any;
