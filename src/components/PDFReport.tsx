import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font, Svg, Path } from '@react-pdf/renderer';
import { AuditResult, AuditInput } from '../types';

// Import local fonts
import interRegular from '../assets/fonts/Inter-Regular.ttf';
import interBold from '../assets/fonts/Inter-Bold.ttf';
import playfairRegular from '../assets/fonts/PlayfairDisplay-Regular.ttf';
import playfairItalic from '../assets/fonts/PlayfairDisplay-Italic.ttf';

// Register fonts for a premium look
Font.register({
  family: 'Playfair Display',
  fonts: [
    { src: playfairRegular },
    { src: playfairItalic, fontStyle: 'italic' },
    { src: playfairRegular, fontWeight: 700 } // Using regular for bold if bold static missing
  ]
});

Font.register({
  family: 'Inter',
  fonts: [
    { src: interRegular, fontWeight: 400 },
    { src: interBold, fontWeight: 700 }
  ]
});

const styles = StyleSheet.create({
  page: {
    padding: 60,
    backgroundColor: '#FFFCF5', // Cream theme
    fontFamily: 'Inter',
    color: '#1A1A1A',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 60,
    borderBottom: '1pt solid #E5E5E5',
    paddingBottom: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#F59E0B',
    borderRadius: 6,
    marginRight: 8,
  },
  logoText: {
    fontSize: 24,
    fontFamily: 'Playfair Display',
    fontStyle: 'italic',
    letterSpacing: -1,
  },
  refNumber: {
    fontSize: 10,
    color: '#666666',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  titleSection: {
    marginBottom: 40,
  },
  badge: {
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 3,
    color: '#F59E0B',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  mainTitle: {
    fontSize: 48,
    fontFamily: 'Playfair Display',
    fontStyle: 'italic',
    lineHeight: 1.1,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 14,
    color: '#4B5563',
    maxWidth: 400,
    lineHeight: 1.5,
  },
  savingsHero: {
    backgroundColor: '#1A1A1A',
    borderRadius: 24,
    padding: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  savingsLabel: {
    fontSize: 10,
    color: '#9CA3AF',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 8,
  },
  savingsValue: {
    fontSize: 64,
    fontFamily: 'Playfair Display',
    fontStyle: 'italic',
    color: '#FFFCF5',
  },
  metricGrid: {
    flexDirection: 'row',
    gap: 32,
    marginTop: 24,
    paddingTop: 24,
    borderTop: '1pt solid #374151',
  },
  metricLabel: {
    fontSize: 8,
    color: '#9CA3AF',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 4,
  },
  metricValue: {
    fontSize: 18,
    fontFamily: 'Playfair Display',
    fontStyle: 'italic',
    color: '#FFFCF5',
  },
  aiSummarySection: {
    padding: 24,
    backgroundColor: '#FEF3C7', // Light amber
    borderRadius: 16,
    marginBottom: 40,
  },
  aiTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#92400E',
  },
  aiText: {
    fontSize: 14,
    fontFamily: 'Playfair Display',
    fontStyle: 'italic',
    color: '#1A1A1A',
    lineHeight: 1.6,
  },
  sectionHeading: {
    fontSize: 18,
    fontFamily: 'Playfair Display',
    fontStyle: 'italic',
    marginBottom: 20,
    borderBottom: '1pt solid #E5E5E5',
    paddingBottom: 8,
  },
  recommendationCard: {
    padding: 20,
    border: '1pt solid #E5E5E5',
    borderRadius: 12,
    marginBottom: 16,
  },
  recHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  recConfidence: {
    fontSize: 8,
    textTransform: 'uppercase',
    padding: '4 8',
    borderRadius: 4,
    backgroundColor: '#F3F4F6',
  },
  recTitle: {
    fontSize: 18,
    fontFamily: 'Playfair Display',
    fontStyle: 'italic',
    marginBottom: 8,
  },
  recDesc: {
    fontSize: 12,
    color: '#4B5563',
    lineHeight: 1.5,
    marginBottom: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    left: 60,
    right: 60,
    borderTop: '1pt solid #E5E5E5',
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 8,
    color: '#9CA3AF',
    textTransform: 'uppercase',
    letterSpacing: 2,
  }
});

const ZapIcon = () => (
  <Svg width="14" height="14" viewBox="0 0 24 24" fill="#FFFCF5">
    <Path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </Svg>
);

export const PDFReport = ({ result, input: _input }: { result: AuditResult; input: AuditInput }) => (
  <Document title={`Vyay Audit Report - ${result.publicId || result.id}`}>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.logoIcon}>
             <View style={{ marginTop: 5, marginLeft: 5 }}><ZapIcon /></View>
          </View>
          <Text style={styles.logoText}>Vyay</Text>
        </View>
        <Text style={styles.refNumber}>REF: {(result.publicId || result.id).substring(0, 8).toUpperCase()}</Text>
      </View>

      {/* Hero Title */}
      <View style={styles.titleSection}>
        <Text style={styles.badge}>Strategic Expenditure Report</Text>
        <Text style={styles.mainTitle}>Audit Intelligence &{"\n"}Capital Recovery</Text>
        <Text style={styles.subtitle}>
          Deterministic analysis for organizational engineering profiles and AI infrastructure sub-optimality.
        </Text>
      </View>

      {/* Savings Hero */}
      <View style={styles.savingsHero}>
        <View style={{ flex: 1 }}>
          <Text style={styles.savingsLabel}>Projected Annual Recovery</Text>
          <Text style={styles.savingsValue}>${(result.potentialSavings * 12).toLocaleString()}</Text>
          
          <View style={styles.metricGrid}>
            <View>
              <Text style={styles.metricLabel}>Monthly Optimization</Text>
              <Text style={styles.metricValue}>${result.potentialSavings.toLocaleString()}</Text>
            </View>
            <View>
              <Text style={styles.metricLabel}>Efficiency Grade</Text>
              <Text style={styles.metricValue}>{result.metrics.efficiencyGrade}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Executive Summary */}
      {result.aiSummary && (
        <View style={styles.aiSummarySection}>
          <Text style={styles.aiTitle}>EXECUTIVE SUMMARY</Text>
          <Text style={styles.aiText}>"{result.aiSummary}"</Text>
        </View>
      )}

      {/* Recommendations */}
      <Text style={styles.sectionHeading}>Strategic Recommendations</Text>
      {result.recommendations.slice(0, 3).map((rec) => (
        <View key={rec.id} style={styles.recommendationCard}>
          <View style={styles.recHeader}>
            <Text style={styles.recConfidence}>{rec.confidence} Confidence</Text>
            <Text style={{ fontSize: 10, color: '#F59E0B' }}>Impact: -${rec.estimatedSavings}/mo</Text>
          </View>
          <Text style={styles.recTitle}>{rec.title}</Text>
          <Text style={styles.recDesc}>{rec.description}</Text>
        </View>
      ))}

      {/* Footer */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.footerText}>© 2026 Vyay Studio · Deterministic AI Auditing</Text>
          <Text style={styles.footerText}>Report ID: {(result.publicId || result.id).substring(0, 12)}</Text>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={styles.footerText}>Verified Snapshot: {new Date().toLocaleDateString()}</Text>
          <Text style={[styles.footerText, { color: '#F59E0B' }]}>vyaytarunya.vercel.app/result/{result.publicId || result.id}</Text>
        </View>
      </View>
    </Page>
  </Document>
);
