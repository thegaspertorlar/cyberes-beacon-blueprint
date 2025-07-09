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
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-cyberes-primary font-inter font-bold text-xl">
            {t('contact.title')}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-cyberes-gray font-inter font-semibold">
              {t('contact.fullName')}
            </Label>
            <Input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              required
              className="border-gray-300 focus:border-cyberes-primary font-inter"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-cyberes-gray font-inter font-semibold">
              {t('contact.email')}
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
              className="border-gray-300 focus:border-cyberes-primary font-inter"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-cyberes-gray font-inter font-semibold">
              {t('contact.message')}
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              required
              className="border-gray-300 focus:border-cyberes-primary font-inter min-h-[100px]"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-cyberes-primary hover:bg-cyberes-light text-white font-inter font-semibold"
          >
            {t('contact.submit')}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;