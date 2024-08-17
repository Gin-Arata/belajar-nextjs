import NavbarLayout from "../NavbarLayout";
import FooterLayout from "../FooterLayout";

type AppShellLayoutProps = {
  children: React.ReactNode;
};

const AppShellLayout = (props: AppShellLayoutProps) => {
  const { children } = props;

  return (
    <main>
      <NavbarLayout />
      {children}
      <FooterLayout />
    </main>
  );
};

export default AppShellLayout;
