import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabsLayout() {
  return (
    <NativeTabs
      blurEffect="systemDefault"
      disableTransparentOnScrollEdge={true}
    >
      <NativeTabs.Trigger name="index">
        <Icon sf="house.fill" drawable="home" />
        <Label>Home</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="explore">
        <Icon sf="safari.fill" drawable="explore" />
        <Label>Explore</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <Icon sf="person.fill" drawable="person" />
        <Label>Profile</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
