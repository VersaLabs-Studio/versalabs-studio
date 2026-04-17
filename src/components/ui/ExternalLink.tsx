import Link from 'next/link';
import { GlassButton } from './motion';

export default function ExternalLink() {
  return (
    <GlassButton>
      <Link href="https://github.com/VersaLabs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
        VersaLabs Org
      </Link>
    </GlassButton>
  );
}
