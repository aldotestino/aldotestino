import { Loader2, MessageCircle } from 'lucide-react';
import type { ComponentProps } from 'react';
import { useFormContext } from 'react-hook-form';
import { TextShimmer } from '@/components/text-shimmer';
import { Button } from '@/components/ui/button';

function SubmitButton(props: ComponentProps<typeof Button>) {
  const { formState } = useFormContext();

  return (
    <Button
      disabled={formState.isSubmitting}
      size="lg"
      type="submit"
      {...props}
    >
      {formState.isSubmitting ? (
        <Loader2 className="size-4 animate-spin" />
      ) : (
        <MessageCircle className="size-4" />
      )}
      {formState.isSubmitting ? (
        <TextShimmer>Sending Message...</TextShimmer>
      ) : (
        <span>Send Message</span>
      )}
    </Button>
  );
}

export default SubmitButton;
