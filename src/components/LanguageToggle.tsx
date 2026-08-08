import { Button } from "@/components/ui/button"
import { IconWorld } from "@tabler/icons-react"

interface LanguageToggleProps {
  locale: string;
  currentPath: string;
}

export function LanguageToggle({ locale, currentPath }: LanguageToggleProps) {
  // Determine target language and path
  const targetLocale = locale === 'en' ? 'fa' : 'en';
  
  let targetPath = currentPath;
  if (targetLocale === 'fa') {
    // Navigating from en to fa
    if (!currentPath.startsWith('/fa')) {
      targetPath = `/fa${currentPath === '/' ? '' : currentPath}`;
    }
  } else {
    // Navigating from fa to en
    if (currentPath.startsWith('/fa')) {
      targetPath = currentPath.replace('/fa', '') || '/';
    }
  }

  return (
    <Button variant="ghost" size="sm" className="gap-2 rounded-full font-medium" asChild>
      <a href={targetPath}>
        <IconWorld className="h-4 w-4" />
        {locale === 'en' ? 'فا' : 'EN'}
      </a>
    </Button>
  );
}
