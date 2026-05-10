import { Resend } from 'resend';
import { AuditResult } from '../types';

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY || 're_placeholder');

export const emailService = {
  async sendAuditReport(email: string, result: AuditResult) {
    if (!import.meta.env.VITE_RESEND_API_KEY) {
      console.warn('Resend API Key missing. Email not sent.');
      return;
    }

    const annualSavings = (result.potentialSavings * 12).toLocaleString();
    const reportUrl = `${window.location.origin}/result/${result.publicId || result.id}`;

    try {
      await resend.emails.send({
        from: 'Vyay Audit <audits@vyay.ai>',
        to: email,
        subject: `Your AI Spend Audit: $${annualSavings}/year Optimization Potential`,
        html: `
          <div style="font-family: serif; max-width: 600px; margin: 0 auto; padding: 40px; color: #1a1a1a;">
            <h1 style="font-style: italic; border-bottom: 1px solid #eee; padding-bottom: 20px;">Vyay Strategic Audit</h1>
            <p style="font-size: 18px; line-height: 1.6;">
              We have finalized your AI infrastructure audit. Our deterministic engine has identified 
              <strong>$${annualSavings}</strong> in potential annualized capital recovery.
            </p>
            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 30px 0;">
              <h2 style="margin-top: 0;">Executive Summary</h2>
              <p style="font-style: italic;">"${result.aiSummary || 'Analysis complete.'}"</p>
            </div>
            <p>You can access your full interactive report and implementation roadmap here:</p>
            <a href="${reportUrl}" style="display: inline-block; background: #000; color: #fff; padding: 15px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0;">View Full Audit Report</a>
            <p style="color: #666; font-size: 14px; margin-top: 40px;">
              This report was generated using Vyay's deterministic audit engine. Confidence scores reflect market-standard pricing tiers as of May 2026.
            </p>
          </div>
        `,
      });
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  }
};
