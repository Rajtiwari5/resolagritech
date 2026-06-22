/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  degree: string;
  bio: string[];
  avatarSeed: string; // for custom stylized svg avatar generator
  socials: {
    email?: string;
    linkedin?: string;
  };
}

export interface AdvantageParam {
  parameter: string;
  resol: string;
  pusa: string;
  sujlam: string;
  resolValue: number; // For interactive chart / comparison slider
  pusaValue: number;
  sujlamValue: number;
  description: string;
}

export interface FormulationComponent {
  name: string;
  role: string;
  description: string;
  chemicalTerm?: string;
}

export interface FieldTrialStep {
  phase: 'TRL-5' | 'TRL-6';
  title: string;
  location: string;
  crops: string;
  date?: string;
  description: string;
  detailedSteps: {
    label: string;
    detail: string;
  }[];
}

export interface AwardItem {
  id: string;
  title: string;
  recipient: string;
  description: string;
  authority: string;
  year?: string;
}
