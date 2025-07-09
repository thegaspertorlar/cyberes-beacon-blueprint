import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useLanguage } from '@/contexts/LanguageContext';

interface ContactModalProps {
  children: React.ReactNode;
}

const ContactModal = ({ children }: ContactModalProps) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ fullName: '', email: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white" aria-describedby="contact-description">
        <DialogHeader>
          <DialogTitle className="text-cyberes-primary font-inter font-bold text-xl">
            {t('contact.title')}
          </DialogTitle>
          <div id="contact-description" className="sr-only">
            Contact form to get in touch with CybeRes team for cyber resilience training inquiries
          </div>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4" noValidate>
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-cyberes-gray font-inter font-semibold">
              {t('contact.fullName')} <span className="text-red-500" aria-label="required">*</span>
            </Label>
            <Input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              required
              className="border-gray-300 focus:border-cyberes-primary font-inter focus:ring-2 focus:ring-cyberes-primary focus:ring-opacity-20"
              aria-describedby="fullName-error"
              autoComplete="name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-cyberes-gray font-inter font-semibold">
              {t('contact.email')} <span className="text-red-500" aria-label="required">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
              className="border-gray-300 focus:border-cyberes-primary font-inter focus:ring-2 focus:ring-cyberes-primary focus:ring-opacity-20"
              aria-describedby="email-error"
              autoComplete="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-cyberes-gray font-inter font-semibold">
              {t('contact.message')} <span className="text-red-500" aria-label="required">*</span>
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              required
              className="border-gray-300 focus:border-cyberes-primary font-inter min-h-[100px] focus:ring-2 focus:ring-cyberes-primary focus:ring-opacity-20"
              aria-describedby="message-error"
              placeholder="Tell us about your cyber resilience training needs..."
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-cyberes-primary hover:bg-cyberes-light text-white font-inter font-semibold focus:ring-2 focus:ring-cyberes-primary focus:ring-offset-2 min-h-[44px]"
            aria-describedby="submit-description"
          >
            {t('contact.submit')}
          </Button>
          <div id="submit-description" className="sr-only">
            Submit your message to contact CybeRes team
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;