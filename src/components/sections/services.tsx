import {
  ModernPricingPage,
  PricingCardProps,
} from "@/components/animated-glassy-pricing";

const myPricingPlans: PricingCardProps[] = [
  {
    planName: "Pilot Deployment",
    description: "Secure the core platform for a small-scale, focused trial.",
    price: "528",
    features: [
      "Up to 5 Pilot Clinics",
      "Core Patient Alerts (SMS/App Push)",
      "Real-time Stock Visibility",
      "Standard Adherence Reports",
      "Email/Phone Support",
    ],
    buttonText: "Request Pilot Quote",
    buttonVariant: "secondary",
  },
  {
    planName: "Regional Deployment",
    description:
      "Scale the full MediTrack SA solution across a regional network.",
    price: "800",
    features: [
      "Up to 50 Clinics & CHW Teams",
      "All Notification Channels (SMS, App, WhatsApp)",
      "Integrated AI Chatbot for Patients",
      "Home/Community Delivery Tracking",
      "National Health Policy Reporting",
    ],
    buttonText: "Discuss Regional Rollout",
    isPopular: true,
    buttonVariant: "primary",
  },
  {
    planName: "National Rollout",
    description:
      "Full system deployment, integration, and performance monitoring nationwide.",
    price: "1864",
    features: [
      "Unlimited Clinics & Users",
      "Integration with CCMDD/RxSolution/SVS APIs",
      "Data Synchronization with Government Databases",
      "Aggregated National Analytics Dashboard",
      "Guaranteed 99.5% System Uptime",
    ],
    buttonText: "Contact for National Plan",
    buttonVariant: "primary",
  },
];

const Default = () => {
  return (
    <ModernPricingPage
      title={
        <>
          Secure the <span className="text-blue-400">Right Deployment</span> for Your Health System
        </>
      }
      subtitle="Solutions tailored for South African public health clinics and administrators."
      plans={myPricingPlans}
      showAnimatedBackground={true}
    />
  );
};

export { Default };
