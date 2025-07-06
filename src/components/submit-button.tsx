import { Loader, MessageCircle } from 'lucide-react';
import type { ComponentProps } from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { TextShimmer } from '@/components/ui/text-shimmer';

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
        <Loader className="animate-spin" />
      ) : (
        <MessageCircle />
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
