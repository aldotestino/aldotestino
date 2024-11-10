'use client';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import { Moon, Sun } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useCallback, useEffect, useState } from 'react';

export function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(open => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const { theme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  const router = useRouter();

  const navigateTo = useCallback((path: string) => {
    router.push(`#${path}`);
  }, [router]);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Sections">
          <CommandItem onSelect={() => navigateTo('about')}>About Me</CommandItem>
          <CommandItem onSelect={() => navigateTo('experiences')}>Experiences</CommandItem>
          <CommandItem onSelect={() => navigateTo('skills')}>Skills</CommandItem>
          <CommandItem onSelect={() => navigateTo('projects')}>Projects</CommandItem>
          <CommandItem onSelect={() => navigateTo('contact')}>Contact</CommandItem>
        </CommandGroup>
        <CommandGroup heading="Theme">
          <CommandItem onSelect={toggleTheme}>
            Theme toggle
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
