"use client";

// Provider
import { useModal } from "@/providers/modal-provider";

// UI components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

type Props = {
  heading?: string;
  subheading: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

const CustomModal = ({ children, defaultOpen, subheading, heading }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isOpen, setOpen, setClose } = useModal();

  return (
    <Dialog open={isOpen || defaultOpen} onOpenChange={setClose}>
      <DialogContent className="overflow-y-scroll md:max-h-[700px] md:h-fit h-screen bg-card">
        <DialogHeader className="pt-8 text-left">
          {heading && (
            <DialogTitle className="text-2xl font-bold">{heading}</DialogTitle>
          )}
          {subheading && <DialogDescription>{subheading}</DialogDescription>}
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;