import React from 'react';
// Ensure this import path is correct for your project structure
import SectionWithMockup from "@/components/section-with-mockup"

// Data for the first section (default layout)
const exampleData1 = {
    title: (
        <>
            Healthcare intelligence,
            <br />
            delivered to your clinic.
        </>
    ),
    description: (
        <>
            Get real-time medication stock alerts and
            <br />
            patient adherence insights directly to your
            <br />
            clinic dashboard. Our AI-powered system
            <br />
            monitors availability and tracks treatment
            <br />
            progress for better patient outcomes.
        </>
    ),
    primaryImageSrc: '/images/medical3.webp',
    secondaryImageSrc: '/images/medical2.webp',
};

// Changed from 'export default function ...' to 'export function ...'
export function SectionMockupDemoPage() {
    return (
        <SectionWithMockup
            title={exampleData1.title}
            description={exampleData1.description}
            primaryImageSrc={exampleData1.primaryImageSrc}
            secondaryImageSrc={exampleData1.secondaryImageSrc}
        />
    );
}