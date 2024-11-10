import type { ButtonProps } from '@/components/ui/button';
import { TextShimmer } from '@/components/text-shimmer';
import { Button } from '@/components/ui/button';
import { Loader2, MessageCircle } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

function SubmitButton(props: ButtonProps) {
  const { formState } = useFormContext();

  return (
    <Button type="submit" disabled={formState.isSubmitting} {...props}>
      {formState.isSubmitting ? <Loader2 className="size-4 animate-spin" /> : <MessageCircle className="size-4" />}
      {formState.isSubmitting ? <TextShimmer>Sending Message...</TextShimmer> : <span>Send Message</span>}
    </Button>
  );
}

export default SubmitButton;
