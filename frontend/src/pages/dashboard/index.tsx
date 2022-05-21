import Link from "../../ui-components/Link";
import Text from "../../ui-components/Text";
import View from "../../ui-components/View";

const Dashboard = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Dashboard page</Text>
      <Link
        // onCLick={() => {}}
        // target='_blank'
        path={`/setting`}
      >
        Go To Setting
      </Link>

      <Link
        target="_blank"
        onCLick={() => {}}
        path={`https://www.facebook.com`}
      >
        Facebook
      </Link>
    </View>
  );
};

export default Dashboard;
