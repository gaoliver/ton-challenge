import { Content } from 'native-base';
import React from 'react';
import { RefreshControl, StyleProp, StyleSheet, ViewStyle } from 'react-native';
interface MainContentProps {
  loadingIndicator?: boolean;
  loadAction?: () => void;
  contentStyle?: StyleProp<ViewStyle>;
}

const AppContent: React.FC<MainContentProps> = ({
  loadingIndicator,
  loadAction,
  contentStyle,
  children
}) => {
  const loading = loadingIndicator || false;

  return (
    <Content
      contentContainerStyle={[styles.content, contentStyle]}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={loadAction} />
      }
    >
      {children}
    </Content>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 10
  }
});

export default AppContent;
