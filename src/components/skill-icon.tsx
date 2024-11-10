import { icons } from '@/lib/data';

function SkillIcon({ name, className }: { name: keyof typeof icons; className?: string }) {
  return (
    <div className={className}>
      {icons[name]}
    </div>
  );
}

export default SkillIcon;
