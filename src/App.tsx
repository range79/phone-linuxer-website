import { useState } from "react";
import { useDetectedOS } from "./hooks/useDetectedOS";
import { DeveloperSection } from "./components/DeveloperSection";
import { Footer } from "./components/Footer";
import { HardwareVirtualizationSection } from "./components/HardwareVirtualizationSection";
import { Hero } from "./components/Hero";
import { MaxPerformanceSection } from "./components/MaxPerformanceSection";
import { Navbar } from "./components/Navbar";
import { PerformanceHierarchySection } from "./components/PerformanceHierarchySection";
import { ParticleCanvas } from "./components/ParticleCanvas";
import { SmartEngineSection } from "./components/SmartEngineSection";
import { SpecsSection } from "./components/SpecsSection";
import { SpiceSection } from "./components/SpiceSection";
import { TitanModeSection } from "./components/TitanModeSection";
import { VmManagementSection } from "./components/VmManagementSection";
import { MaterialDialog } from "./components/MaterialDialog";

export default function App() {
  const detected = useDetectedOS();
  const [showSupportDialog, setShowSupportDialog] = useState(false);
  const donateUrl = "https://buymeacoffee.com/darkrange6s";

  const handleSupportClick = () => {
    setShowSupportDialog(true);
  };

  const confirmSupport = () => {
    window.open(donateUrl, "_blank");
    setShowSupportDialog(false);
  };

  return (
    <>
      <ParticleCanvas />
      <MaterialDialog
        isOpen={showSupportDialog}
        title="Fuel the Engine"
        type="success"
        message="Thank you for your incredible support! Your contribution directly fuels KVM optimization, Titan graphics development, and high-performance kernel testing. You are the heart of Range Emulator. Clicking confirm will take you to our secure sponsorship page."
        onCancel={() => setShowSupportDialog(false)}
        onConfirm={confirmSupport}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar onSupportClick={handleSupportClick} />
        <main>
          <Hero onSupportClick={handleSupportClick} />
          <PerformanceHierarchySection />
          <SmartEngineSection />
          <VmManagementSection />
          <TitanModeSection />
          <MaxPerformanceSection />
          <HardwareVirtualizationSection />
          <SpecsSection />
          <SpiceSection detected={detected} />
          <DeveloperSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
