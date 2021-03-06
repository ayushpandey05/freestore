import { useEffect } from "react";
import { useLocation } from "../context/Location";
import useUniqueId from "../hooks/useUniqueId";
import View from "../ui-components/View";
import { CreateNavigatorProps, NavigatorProps } from "./index.type";
import RenderPage from "./RenderPage";

const Navigator: React.FC<NavigatorProps> = ({
  pages,
  pageNotFound: PageNotFound,
}) => {
  const uniqueId = useUniqueId();

  const { location } = useLocation();
  const { pathname } = location;
  useEffect(() => {}, [pathname]);

  const pageIndex = pages?.findIndex((item) => item.path === pathname);

  return (
    <View style={{ flex: 1 }}>
      {pages?.map((item, index) => {
        return (
          <RenderPage
            key={`${uniqueId}-${index}`}
            path={item.path}
            component={item.component}
          />
        );
      })}
      {pageIndex === -1 ? (
        <PageNotFound key={`${uniqueId}-not-found`} />
      ) : (
        void 0
      )}
    </View>
  );
};

const createNavigator = ({ pages, pageNotFound }: CreateNavigatorProps) => {
  const filteredPages = pages.filter((item) => {
    if (item?.path && item?.component) {
      return true;
    }
    return false;
  });

  return (props: NavigatorProps) => (
    <Navigator {...props} pages={filteredPages} pageNotFound={pageNotFound} />
  );
};

export default createNavigator;
