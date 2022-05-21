import Link from "../../ui-components/Link";
import Text from "../../ui-components/Text";
import View from "../../ui-components/View";

const Setting = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Setting page</Text>
      <Link path="/dashboard">Go To Dashboard</Link>
    </View>
  );
};

export default Setting;
