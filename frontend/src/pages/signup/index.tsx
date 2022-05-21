import { useLocation } from "../../context/Location";
import Link from "../../ui-components/Link";
import Text from "../../ui-components/Text";
import Touch from "../../ui-components/Touch";
import View from "../../ui-components/View";

const Signup = () => {
  const { location, changeLocation } = useLocation();
  const { state } = location;
  const goToDashboard = () => {
    changeLocation(state?.pathname || "/dashboard");
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Signup Page</Text>
      <Link state={state} path="/login">
        Go To Login
      </Link>
      <Touch onPress={goToDashboard}>
        <Text>Sign up</Text>
      </Touch>
    </View>
  );
};

export default Signup;
