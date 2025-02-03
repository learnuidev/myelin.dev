import { LanguageSwitcher } from "@/libs/i18n-next/language-switcher";
import { ToggleTheme } from "../toggle-theme/toggle-theme";

export const NavBar = () => {
  return (
    <nav className="p-8 flex justify-between items-center">
      <ToggleTheme />

      <LanguageSwitcher />
    </nav>
  );
};
