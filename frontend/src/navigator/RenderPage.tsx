import { useEffect, useState } from "react";
import { useLocation } from "../context/Location";
import View from "../ui-components/View";

interface Props {
  component: any;
  path: string;
}

const RenderPage: React.FC<Props> = ({ path, component: Component }) => {
  const { location } = useLocation();
  const { pathname } = location;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (pathname === path) {
      setMounted(true);
    }
  }, [pathname]);

  const display = pathname === path ? "flex" : "none";

  return mounted ? (
    <View style={{ flex: 1, display }}>
      <Component />
    </View>
  ) : null;
};

export default RenderPage;
