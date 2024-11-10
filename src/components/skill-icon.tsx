import { skills } from '@/lib/data';

function SkillIcon({ name, className }: { name: keyof typeof skills; className?: string }) {
  return (
    <div className={className}>
      {skills[name]}
    </div>
  );
}

export default SkillIcon;
