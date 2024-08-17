import NavbarLayout from "../NavbarLayout";
import FooterLayout from "../FooterLayout";
import { useRouter } from "next/router";
import path from "path";

type AppShellLayoutProps = {
  children: React.ReactNode;
};

const AppShellLayout = (props: AppShellLayoutProps) => {
  const { children } = props;
  const {pathname} = useRouter();

  const disableNavbarFooter = ["/auth/login", "/auth/register"];

  return (
    <main>
      {!disableNavbarFooter.includes(pathname) && <NavbarLayout />}
      {children}
      {!disableNavbarFooter.includes(pathname) && <FooterLayout />}
    </main>
  );
};

export default AppShellLayout;
