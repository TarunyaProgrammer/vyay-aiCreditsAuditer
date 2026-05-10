import React, { useState } from 'react';
import { Card, Button } from './shared/SharedComponents';
import { Link2, Twitter, Linkedin, Check } from 'lucide-react';

interface ShareSectionProps {
  publicId?: string;
  annualSavings: number;
}

export const ShareSection: React.FC<ShareSectionProps> = ({ publicId, annualSavings }) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = `${window.location.origin}/result/${publicId}`;
  const shareText = `We audited our AI tooling stack and found ~$${annualSavings.toLocaleString()}/year in potential savings using Vyay.`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnX = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <Button 
          variant="outline" 
          size="lg" 
          className="flex-1 gap-3"
          onClick={copyToClipboard}
          aria-label={copied ? 'Link copied to clipboard' : 'Copy share link to clipboard'}
        >
          {copied ? <Check size={18} className="text-success" aria-hidden="true" /> : <Link2 size={18} aria-hidden="true" />}
          {copied ? 'Link Copied' : 'Copy Share Link'}
        </Button>
        
        <Button 
          variant="outline" 
          size="lg" 
          className="flex-1 gap-3 hover:bg-[#1DA1F2]/10 hover:text-[#1DA1F2] hover:border-[#1DA1F2]/20"
          onClick={shareOnX}
          aria-label="Share on X (formerly Twitter)"
        >
          <Twitter size={18} aria-hidden="true" /> Share on X
        </Button>

        <Button 
          variant="outline" 
          size="lg" 
          className="flex-1 gap-3 hover:bg-[#0077B5]/10 hover:text-[#0077B5] hover:border-[#0077B5]/20"
          onClick={shareOnLinkedIn}
          aria-label="Share on LinkedIn"
        >
          <Linkedin size={18} aria-hidden="true" /> Share on LinkedIn
        </Button>
      </div>
    </div>
  );
};
